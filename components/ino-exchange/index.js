import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function InoExchange() {
  const [active, setActive] = useState(arr[0]);
  const router = useRouter();

  const handleActive = (data, index) => {
    setActive(data);
    if (index === 0) router.push(data.linkUrl);
    return;
  };

  return (
    <div className="container-fluid contain-ino-exchange">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="button-ino-exchange" id="ino-exchange">
                  INO EXCHANGE
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col">
                <div className="info-exchange m-auto">
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        src={"/images/ino-exchange.png"}
                        alt="image-ino-exchange"
                        width={"483px"}
                        height={"315px"}
                      />
                    </div>
                    <div className="col-md-5 info-exchange-detail">
                      <h3>{active.name}</h3>
                      <p className="fw-700-size-25">
                        Total Box: {active.total}
                      </p>
                      <ul>
                        <li>
                          Hero Lab:{" "}
                          <span className="fw-700">{active.heroLab}</span>
                        </li>
                        <li>
                          Equipment Coffer:{" "}
                          <span className="fw-700">{active.coffer}</span>
                        </li>
                      </ul>
                      <p>
                        Token Network:{" "}
                        <span className="fw-700">{active.network}</span>
                      </p>
                      <p>
                        Accepted Currency: &nbsp;
                        <span className="fw-700">
                          <img src={"/images/busd.png"} alt="busd" />
                          &nbsp;&nbsp;BUSD
                        </span>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span className="fw-700">
                          <img src={"/images/icon-tether.png"} alt="ust" />
                          &nbsp;&nbsp;USDT
                        </span>
                      </p>
                      <div className="row contain-btn-exchange">
                        <div className="col d-flex justify-content-center">
                          <Link href={active.linkUrl}>
                            <div className="btn-exchange">
                              <img src={"/images/icon-login.png"} alt="go-to" />
                              GO TO EXCHANGE
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row line-ino" />
                  <div className="row" style={{ marginTop: "80px" }}>
                    <div className="col d-flex justify-content-between contain-image-ino">
                      {arr.map((item, index) => (
                        <div
                          key={index}
                          className={`image-ino-exchange ${
                            active.name === item.name ? "image-active" : null
                          }`}
                        >
                          <img
                            onClick={() => handleActive(item, index)}
                            src={item.img}
                            alt={item.alt}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const arr = [
  {
    img: "/images/aiza_brand.png",
    alt: "aiza_brand",
    network: "BNB CHAIN",
    coffer: 1520,
    heroLab: 80,
    total: 1600,
    name: "AIZA",
    linkUrl: "https://marketplace.aizaworld.com",
  },
  {
    img: "/images/dare-nft.png",
    alt: "dare-nft",
    network: "BNB CHAIN",
    coffer: 1500,
    heroLab: 200,
    total: 1700,
    name: "DARE",
    linkUrl: "/",
  },
  {
    img: "/images/bitkeep.png",
    alt: "bitkeep",
    network: "BNB CHAIN",
    coffer: 1500,
    heroLab: 500,
    total: 2000,
    name: "BITKEEP",
    linkUrl: "/",
  },
  {
    img: "/images/lucis.png",
    alt: "lucis",
    network: "BNB CHAIN",
    coffer: 3500,
    heroLab: 500,
    total: 4000,
    name: "LUCIS",
    linkUrl: "/",
  },
  {
    img: "/images/nftb.png",
    alt: "nftb",
    network: "BNB CHAIN",
    coffer: 2700,
    heroLab: 500,
    total: 3200,
    name: "NFTB",
    linkUrl: "/",
  },
  {
    img: "/images/rareboard.png",
    alt: "rareboard",
    network: "BNB CHAIN",
    coffer: 1600,
    heroLab: 300,
    total: 1900,
    name: "RAREBOARD",
    linkUrl: "/",
  },
  {
    img: "/images/coinstore.png",
    alt: "coinstore",
    network: "BNB CHAIN",
    coffer: 2000,
    heroLab: 100,
    total: 2100,
    name: "COINSTORE",
    linkUrl: "/",
  },
];
