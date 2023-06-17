import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'swiper/css';

export default function HeroChest() {
  const [active, setActive] = useState({});
  const [show, setShow] = useState(false);
  const [chest, setChest] = useState('');

  const handleShowImage = (data) => {
    setChest(data);
    setShow(true);
  };

  return (
    <div className="container-fluid contain-hero-rarity contain-hero-rarity-1">
      <div className="row" style={{ height: '100%' }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center justify-content-center btn-hero-rarity">
                <div className="mt-3">
                  <img src={'/images/hero-bundle-1.png'} alt="hero-dundle-1" />
                </div>
              </div>
            </div>
            <div className="row pt-120 m-auto" style={{ width: '920px' }}>
              <div className="col d-flex justify-content-between">
                {arrChest.map((item, index) => {
                  return (
                    <div key={index} onClick={() => handleShowImage(item)}>
                      <div className="contain-item-hero">
                        <div
                          className="bg-item-hero d-flex flex-column align-items-center"
                          onMouseEnter={() => setActive(index)}
                          onMouseLeave={() => setActive(false)}
                        >
                          <img
                            src={
                              active === index ? item.imageActive : item.image
                            }
                            alt={`image-${item.name}`}
                          />
                          <div className="info-bundle">
                            <p className="m-0">
                              <img
                                src={item.imageC}
                                alt={`hero-dundle-1-${index}`}
                                className="image-c"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} size="lg" centered onHide={() => setShow(false)}>
        <div className="p-0 position-relative modal-bundle-info">
          <div className="container content-bundle">
            <img
              onClick={() => setShow(false)}
              className="icon-close-hero"
              src={'/images/icon-close.png'}
              alt="icon-close"
            />
            <div className="row">
              <div
                className="col-md-3 d-flex justify-content-center align-items-center"
                style={{ zIndex: '9' }}
              >
                <img
                  style={{ marginLeft: '40px' }}
                  src={chest.imageHero}
                  alt="image-hero"
                  width={'305px'}
                  height={'235px'}
                />
              </div>
              <div className="col-md-9 d-flex justify-content-center align-items-center">
                <div className="chest-info-detail">
                  <div
                    className="row"
                    style={{ paddingLeft: '120px', paddingTop: '20px' }}
                  >
                    <div className="col">
                      <h3>{chest.name}</h3>
                      <p className='d-flex align-items-center'>
                        Price: <div className="fw-700 mrgl-2">{chest.price}</div>
                        <div className="d-flex align-items-center mrgl-2">
                          <img
                            src="/images/coin.png"
                            alt="image-hero"
                            width={'27px'}
                            height={'27px'}
                          />
                        </div>
                      </p>

                      <div className="line-bundle" />
                      <p className="fw-700">NFT opening rate:</p>
                      <ul>
                        {(chest.arrNFT || []).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const arrChest = [
  {
    id: 0,
    name: 'Common Box (20% OFF)',
    price: '0.031 - 1317',
    maxValue: '190$',
    image: '/images/r4.png',
    imageActive: '/images/r4.png',
    imageC: '/images/c4.png',

    // info detail
    imageHero: '/images/ro4.png',
    arrNFT: [
      'The number of NFT: 1',
      'Type NFT: Hero',
      'Rarity: Common',
      'Earnable per Day estimate: Medium',
    ],
  },
  {
    id: 1,
    name: 'Uncommon Box (15% OFF)',
    price: '0.040',
    maxValue: '420$',
    image: '/images/r3.png',
    imageActive: '/images/r3.png',
    imageC: '/images/c3.png',

    // info detail
    imageHero: '/images/ro3.png',
    arrNFT: [
      'The number of NFT: 1',
      'Type NFT: Hero',
      'Rarity: Uncommon',
      'Earnable per Day estimate: High',
    ],
  },
  {
    id: 2,
    name: 'Rare Box (15% OFF)',
    price: '0.068',
    maxValue: '260$',
    image: '/images/r2.png',
    imageActive: '/images/r2.png',
    imageC: '/images/c2.png',

    // info detail
    imageHero: '/images/ro2.png',
    arrNFT: [
      'The number of NFT: 1',
      'Type NFT: Hero',
      'Rarity: Rare',
      'Earnable per Day estimate: Very High',
    ],
  },
];
