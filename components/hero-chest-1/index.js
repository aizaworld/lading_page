import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroChest() {
  const [active, setActive] = useState({});
  const [show, setShow] = useState(false);
  const [chest, setChest] = useState("");

  const handleShowImage = (data) => {
    setChest(data);
    setShow(true);
  };

  return (
    <div className="container-fluid contain-hero-rarity contain-hero-rarity-1">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center justify-content-center btn-hero-rarity">
                <div className="mt-3">
                  <img src={"/images/hero-bundle-1.png"} alt="hero-dundle-1" />
                </div>
              </div>
            </div>
            <div className="row pt-120 m-auto" style={{ width: "925px" }}>
              {/* <div className="col d-flex justify-content-between">
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
              </div> */}
              <div className="col d-flex justify-content-between p-0">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  loop={true}
                  className="slide-brand"
                  navigation={true} 
                  modules={[Navigation]}
                >
                  {arrChest.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div key={index} onClick={() => handleShowImage(item)}>
                          <div className="contain-item-hero">
                            <div
                              className="bg-item-hero d-flex flex-column align-items-center"
                              onMouseEnter={() => setActive(index)}
                              onMouseLeave={() => setActive(false)}
                            >
                              <img
                                src={
                                  active === index
                                    ? item.imageActive
                                    : item.image
                                }
                                alt={`image-${item.name}`}
                                style={{padding: '20px'}}
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
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
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
              src={"/images/icon-close.png"}
              alt="icon-close"
            />
            <div className="row">
              <div
                className="col-md-3 d-flex justify-content-center align-items-center"
                style={{ zIndex: "9" }}
              >
                <img
                  style={{ marginLeft: "40px" }}
                  src={chest.imageHero}
                  alt="image-hero"
                  width={"305px"}
                  height={"235px"}
                />
              </div>
              <div className="col-md-9 d-flex justify-content-center align-items-center">
                <div className="chest-info-detail">
                  <div
                    className="row"
                    style={{ paddingLeft: "120px", paddingTop: "20px" }}
                  >
                    <div className="col">
                      <h3>{chest.name}</h3>
                      <p className="d-flex align-items-center">
                        {/* Price:{' '}
                        <div className="fw-700 mrgl-2">{chest.price}</div> */}
                        Price:{" "}
                        <div className="fw-700 mrgl-2">
                          <div
                            className="d-flex"
                            dangerouslySetInnerHTML={{
                              __html: chest.price,
                            }}
                          ></div>
                        </div>
                        {/* <div className="d-flex align-items-center mrgl-2">
                          <img
                            src="/images/coin.png"
                            alt="image-hero"
                            width={'27px'}
                            height={'27px'}
                          />
                        </div> */}
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
            <div className="row">
              <div className="col d-flex justify-content-center mt-5">
                <Link href={chest.linkUrl}>
                  <div className="btn-exchange-box">
                    <img
                      src={"/images/icon-login.png"}
                      alt="go-to"
                      style={{ marginRight: "5px" }}
                    />
                    GET DETAILS
                  </div>
                </Link>
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
    name: "Common Box (20% OFF)",
    price:
      '0.031 <div class="d-flex align-items-center mrgl-2"><img src="/images/coin.png" alt="image-hero" width="27px" height="27px"/></div> <div class="mrgl-2"></div> - 1317 <div class="d-flex align-items-center mrgl-2"><img src="/images/a-coin.png" alt="image-hero" width="32px" height="32px"/></div>',
    maxValue: "190$",
    image: "/images/rk-1.png",
    imageActive: "/images/rk-1.png",
    imageC: "/images/c4.png",

    // info detail
    imageHero: "/images/rko-1.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: Common",
      "Earnable per Day estimate: Medium",
    ],
    linkUrl: "https://marketplace.aizaworld.com",
  },
  {
    id: 1,
    name: "Uncommon Box (15% OFF)",
    price: "0.040",
    maxValue: "420$",
    image: "/images/rk-2.png",
    imageActive: "/images/rk-2.png",
    imageC: "/images/c3.png",

    // info detail
    imageHero: "/images/rko-2.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: Uncommon",
      "Earnable per Day estimate: High",
    ],
    linkUrl: "https://marketplace.aizaworld.com",
  },
  {
    id: 2,
    name: "Rare Box (15% OFF)",
    price: "0.068",
    maxValue: "260$",
    image: "/images/rk-3.png",
    imageActive: "/images/rk-3.png",
    imageC: "/images/c2.png",

    // info detail
    imageHero: "/images/rko-3.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: Rare",
      "Earnable per Day estimate: Very High",
    ],
    linkUrl: "https://marketplace.aizaworld.com",
  },
  {
    id: 3,
    name: "Epic Box (15% OFF)",
    price: "0.142",
    maxValue: "260$",
    image: "/images/rk-4.png",
    imageActive: "/images/rk-4.png",
    imageC: "/images/ck-1.png",

    // info detail
    imageHero: "/images/rko-4.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: Epic",
      "Earnable per Day estimate: Best Choice",
    ],
    linkUrl: "https://marketplace.aizaworld.com",
  },
];
