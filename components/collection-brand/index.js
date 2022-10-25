import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function CollectionBrand() {
  return (
    <div className="container-fluid contain-collection-brand">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center justify-content-center btn-hero-rarity">
                <div className="btn-brand-nft">
                  <h2>BRAND NFT</h2>
                </div>
              </div>
            </div>
            <div className="row sub-title">
              <div className="col" style={{ padding: "0px 220px" }}>
                <p>
                  Connecting NFTs collectibles with brands is one of the{" "}
                  <span className="color-upcoming">upcoming</span> projects in
                  Aiza World.
                </p>
              </div>
            </div>
            <div
              className="row m-auto"
              style={{ paddingTop: "60px", width: "905px" }}
            >
              <div className="col d-flex justify-content-between">
                  {arrBrand.map((item, index) => {
                    return (
                      <div className="contain-item-brand" key={index}>
                        <div className="bg-item-brand">
                          <img src={item} alt={`image-${index}`} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              className="row m-auto"
              style={{ paddingTop: "80px", width: "905px" }}
            >
              <div className="col d-flex justify-content-between">
                {arrBrandTwo.map((item, index) => {
                  return (
                    <div className="contain-item-brand" key={index}>
                      <div className="bg-item-brand">
                        <img src={item} alt={`image-${index}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const arrBrand = [
  "/images/artboard-6.png",
  "/images/artboard-5.png",
  "/images/artboard-5.png",
];

const arrBrandTwo = [
  "/images/artboard-4.png",
  "/images/artboard-1.png",
  "/images/artboard-1.png",
];
