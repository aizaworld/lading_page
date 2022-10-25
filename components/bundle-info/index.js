import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Modal } from "react-bootstrap";
import { Autoplay } from 'swiper';
import "swiper/css";

export default function BundlesInfo() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [hero, setHero] = useState('');

  const handleShowImage = (data) => {
    setHero(data)
    setShow(true);
  }

  return (
    <div className="container-fluid contain-hero-rarity">
      <div className="row" style={{height: '100%'}}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center justify-content-center btn-hero-rarity">
                <div className="hero-rarity">
                  <h2>BUNDLES INFO</h2>
                </div>
                <div className="mt-3">
                    <img src={'/images/hero-lap.png'} alt="hero-lap" />
                </div>
              </div>
            </div>
            <div className="row pt-120 m-auto" style={{width: '905px'}}>
              <div className="col d-flex justify-content-around">
                  {arrHero.map((item, index) => {
                    return <div key={index} onClick={() => handleShowImage(item)}>
                        <div className="contain-item-bundle">
                            <div className="bg-item-bundle d-flex flex-column align-items-center"
                               onMouseEnter={() => setActive(index)}
                               onMouseLeave={() => setActive(false)}
                            >
                                <img src={active === index ? item.imageActive : item.image} alt={`image-${item.name}`} />
                                <div className="info-bundle-one">
                                <h3>{item.name}</h3>
                                <p className="m-0">Price: {item.price}</p>
                                <p className="m-0">Max opening value: <span>{item.maxValue}</span></p>
                            </div>
                            </div>
                            
                        </div>
                    </div>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >
        <div className="p-0 position-relative modal-bundle-info">
          <div className="container content-bundle">
              <img onClick={() => setShow(false)} className="icon-close-hero" src={'/images/icon-close.png'} alt="icon-close" />
              <div className="row">
                  <div className="col-md-4" style={{zIndex: '9'}}>
                    <img src={hero.imageHero} alt="image-hero" />
                  </div>
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="bundle-info-detail">
                      <div className="row" style={{paddingLeft: '60px', paddingTop: '20px'}}>
                        <div className="col">
                          <h3>
                            {hero.name}
                          </h3>
                          <p>Price: <span className="fw-700">{hero.price}</span></p>
                          <p>Max opening value: <span className="fw-700">{hero.maxValue}</span></p>
                          <div className="line-bundle"/>
                          <p className="fw-700">NFT opening rate:</p>
                          <ul>
                          {
                            (hero.arrNFT || []).map((item, index) => (
                              <li key={index}>
                                  {item}
                              </li>
                            ))
                          }
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

const arrHero = [
  {
    id: 0,
    name: "Gold Lab",
    price: "30$",
    maxValue: "190$",
    image: "/images/bundle-info.svg",
    imageActive: "/images/bundle-info-active.svg",

    // info detail
    imageHero: "/images/image-hero.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $"
    ]
  },
  {
    id: 1,
    name: "Anubis",
    price: "45$",
    maxValue: "420$",
    image: "/images/bundle-info.svg",
    imageActive: "/images/bundle-info-active.svg",
    banner: "/images/banner.png",

     // info detail
     imageHero: "/images/image-hero.png",
     arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $"
    ]
  },
  {
    id: 2,
    name: "Hermes",
    price: "35$",
    maxValue: "260$",
    image: "/images/bundle-info.svg",
    imageActive: "/images/bundle-info-active.svg",
    banner: "/images/banner.png",

     // info detail
     imageHero: "/images/image-hero.png",
     arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $"
    ]
  },
];
