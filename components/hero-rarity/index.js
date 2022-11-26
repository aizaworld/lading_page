import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Modal } from "react-bootstrap";
import { Autoplay } from "swiper";
import "swiper/css";

export default function HeroRarity() {
  const [show, setShow] = useState(false);
  const [hero, setHero] = useState("");

  const [hoverIndex, setHoverIndex] = useState('');

  // const handleShowImage = (image) => {
  //   setHero(image);
  //   setShow(true);
  // };

  return (
    <div className="container-fluid contain-hero-rarity">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center btn-hero-rarity">
                <div className="hero-rarity">
                  <h2>HERO RARITY</h2>
                </div>
              </div>
            </div>
            <div className="row m-auto" style={{ width: "992px"}}>
              <div className="col custom-scroll d-flex">
                {arrHero.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{margin: '100px 48px'}}
                    >
                      <div className="contain-item-hero-rarity"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex('')}
                      >
                        <div className="bg-item-hero-rarity">
                          <img
                            className={`image-main ${(hoverIndex === index || hoverIndex === '' )? 'hover-image-light' : 'hover-image-dark'}`}
                            src={item.image}
                            alt={`image-${item.name}`}
                          />
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
      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        className="modal-hero-rarity"
        centered
      >
        <Modal.Body className="p-0 position-relative">
          <img
            onClick={() => setShow(false)}
            className="icon-close-hero"
            src={"/images/icon-close.png"}
            alt="icon-close"
          />
          <div className="contain-banner">
            <div className="container">
            <div className="row pt-120 m-auto" style={{ width: "992px" }}>
              <div className="col d-flex justify-content-around">
                {hero?.detail?.array.map((e, index) => {
                  return (
                    <div
                      key={index}
                    >
                      <div className="contain-item-hero-rarity">
                        <div className="bg-item-hero-rarity">
                          <img
                            className="image-main"
                            src={e}
                            alt={`image-${index}`}
                          />
                          <div className="btn-hero">
                            <img src={hero.icon} alt={`icon-${hero.icon}`} />
                            <div className="name-hero">{hero.detail.name}</div>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

const arrHero = [
  {
    id: 1,
    name: "Poseidon",
    icon: "/images/undead.svg",
    image: "/images/rarity-1.png",
    banner: "/images/banner-1.png",
  },
  {
    id: 2,
    name: "Anubis",
    icon: "/images/god.svg",
    image: "/images/rarity-2.png",
    banner: "/images/banner-1.png",
  },
  {
    id: 3,
    name: "Hermes",
    icon: "/images/devil.svg",
    image: "/images/rarity-3.png",
    banner: "/images/banner-1.png",
  },
  {
    id: 4,
    name: "Hermes",
    icon: "/images/devil.svg",
    image: "/images/rarity-4.png",
    banner: "/images/banner-1.png",
  },
  {
    id: 5,
    name: "Hermes",
    icon: "/images/devil.svg",
    image: "/images/rarity-5.png",
    banner: "/images/banner-1.png",
  }
];
