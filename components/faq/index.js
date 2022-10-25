import React from 'react';
import WrapImage from '../common/wrapImage';

export default function Faq() {
  return (
    <div className="wrap-faq">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <div className="faq-button">FAQ</div>
          </div>
        </div>
        <div className="row">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item accordion-item-cs">
              <h2 className="accordion-header accordion-header-cs" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. Where can I buy purchase NFTs?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You can currently own AIZA NFTs on our marketplace or other
                  INO exchanges such as BitKeep, Lucis TV, RareBoard, DareNFT,
                  NFTb, and others.
                </div>
              </div>
            </div>
            <div className="accordion-item accordion-item-cs">
              <h2 className="accordion-header accordion-header-cs" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. How can I purchase NFTs on the Marketplace?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The step-by-step instructions have already been performed.
                  Please visit HERE: [HD link]
                </div>
              </div>
            </div>
            <div className="accordion-item accordion-item-cs">
              <h2 className="accordion-header accordion-header-cs" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. Do I need AIZA tokens to trade NFTs? Can I use USDT, BNB,
                  or any other cryptocurrency?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  On all exchanges, purchasing NFTs with AIZA token is optional.
                  In some circumstances, USDT can be used for NFTs. Follow us on
                  all social media networks for additional information.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
