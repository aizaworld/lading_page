import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "swiper/css";

export default function HeroChest() {
  const [active, setActive] = useState({});
  const [show, setShow] = useState(false);
  const [chest, setChest] = useState("");

  const handleShowImage = (data) => {
    setChest(data);
    setShow(true);
  };

  return (
    <div className="container-fluid contain-hero-rarity">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center justify-content-center btn-hero-rarity">
                <div className="mt-3">
                  <img src={"/images/hero-bundle-2.png"} alt="hero-dundle-2" />
                </div>
              </div>
            </div>
            <div className="row pt-120 m-auto" style={{ width: "920px" }}>
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
                          <img src={active === index ? item.imageActive : item.image} alt={`image-${item.name}`} />
                          <div className="info-bundle">
                            <h3>{item.name}</h3>
                            <p className="m-0">Price: {item.price}</p>
                            <p className="m-0">
                              Max opening value: <span>{item.maxValue}</span>
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
      <Modal 
        show={show}  
        size="lg"
        centered 
        onHide={() => setShow(false)}
      >
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
                      <p>
                        Price: <span className="fw-700">{chest.price}</span>
                      </p>
                      <p>
                        Max opening value:{" "}
                        <span className="fw-700">{chest.maxValue}</span>
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
    name: "GOLD COFFER",
    price: "30$",
    maxValue: "190$",
    image: "/images/ruong-one.png",
    imageActive: "/images/ruong-one.png",

    // info detail
    imageHero: "/images/ruong-one-open.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $",
    ],
  },
  {
    id: 1,
    name: "DIAMOND COFFER",
    price: "45$",
    maxValue: "420$",
    image: "/images/ruong-two.png",
    imageActive: "/images/ruong-two.png",

    // info detail
    imageHero: "/images/ruong-two-open.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $",
    ],
  },
  {
    id: 2,
    name: "WOOD COFFER",
    price: "35$",
    maxValue: "260$",
    image: "/images/ruong-three.png",
    imageActive: "/images/ruong-three.png",

    // info detail
    imageHero: "/images/ruong-three-open.png",
    arrNFT: [
      "The number of NFT: 1",
      "Type NFT: Hero",
      "Rarity: From Rare to Epic",
      "Earnable per Day estimate: 3~5 $",
    ],
  },
];
