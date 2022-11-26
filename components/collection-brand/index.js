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
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  modules={[Autoplay]}
                  speed={800}
                  className="slide-brand"
                >
                  {arrBrand.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className="contain-item-brand">
                            <div className="bg-item-brand">
                                <img src={item} alt={`image-${index}`} width={"259px"} height={"168px"} />
                            </div>
                        </div>
                    </SwiperSlide>;
                  })}
                </Swiper>
                  {/* {arrBrand.map((item, index) => {
                    return (
                      <div className="contain-item-brand" key={index}>
                        <div className="bg-item-brand">
                          <img src={item} alt={`image-${index}`} />
                        </div>
                      </div>
                    );
                  })} */}
              </div>
            </div>
            <div
              className="row m-auto"
              style={{ paddingTop: "20px", width: "905px" }}
            >
              <div className="col d-flex justify-content-between">
                {/* {arrBrandTwo.map((item, index) => {
                  return (
                    <div className="contain-item-brand" key={index}>
                      <div className="bg-item-brand">
                        <img src={item} alt={`image-${index}`} />
                      </div>
                    </div>
                  );
                })} */}
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  modules={[Autoplay]}
                  speed={800}
                  className="slide-brand"
                >
                  {arrBrandTwo.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className="contain-item-brand">
                            <div className="bg-item-brand">
                                <img src={item} alt={`image-${index}`} width={"259px"} height={"168px"} />
                            </div>
                        </div>
                    </SwiperSlide>;
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const arrBrand = [
  "/images/artboard-2.png",
  "/images/artboard-3.png",
  "/images/artboard-4.png",
  "/images/artboard-5.png",
  "/images/artboard-6.png",
  "/images/artboard-7.png",
  "/images/artboard-8.png",
  "/images/artboard-10.png",
  "/images/artboard-11.png",
];

const arrBrandTwo = [
  "/images/artboard-2.png",
  "/images/artboard-3.png",
  "/images/artboard-4.png",
  "/images/artboard-5.png",
  "/images/artboard-6.png",
  "/images/artboard-7.png",
  "/images/artboard-8.png",
  "/images/artboard-10.png",
  "/images/artboard-11.png",
];
