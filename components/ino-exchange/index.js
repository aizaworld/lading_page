import React from "react";

export default function InoExchange() {
  return (
    <div className="container-fluid contain-ino-exchange">
      <div className="row" style={{ height: "100%" }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div className="button-ino-exchange">INO EXCHANGE</div>
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
                      />
                    </div>
                    <div className="col-md-5 info-exchange-detail">
                      <h3>BITKEEP</h3>
                      <p className="fw-700-size-25">Total Box: 2000</p>
                      <ul>
                        <li>
                          Hero Lab: <span className="fw-700">500</span>
                        </li>
                        <li>
                          Equipment Coffer: <span className="fw-700">1500</span>
                        </li>
                      </ul>
                      <p>
                        Token Network: <span className="fw-700">BNB CHAIN</span>
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
                          <div className="btn-exchange">
                            <img src={"/images/icon-login.png"} alt="go-to" />
                            GO TO EXCHANGE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row line-ino" />
                  <div className="row" style={{ marginTop: "80px" }}>
                    <div className="col d-flex justify-content-between">
                        <img src={'/images/dare-nft.png'} alt="dare"/>
                        <img src={'/images/bitkeep.png'} alt="bitkeep"/>
                        <img src={'/images/lucis.png'} alt="lucis"/>
                        <img src={'/images/nftb.png'} alt="nftp"/>
                        <img src={'/images/rareboard.png'} alt="rareboard"/>
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
