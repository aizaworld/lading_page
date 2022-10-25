import React from 'react';
import WrapImage from '../common/wrapImage';

export default function About() {
  return (
    <div className="wrap-about">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="about-title">ABOUT AIZA NFTs</div>
            <div className="content-by-attach">
              By attaching AIZA NFTs to use-cases such as{' '}
              <span className="highlight-blue">
                memberships, discounts, ticketing, intellectual property, and
                copyrighting, or connecting
              </span>{' '}
              them to DeFi initiatives as an asset, the utility of AIZA NFTs can
              be quickly extended in both the{' '}
              <span className="highlight-blue">digital and physical</span>
              realms.
            </div>
            <div className="row">
              <div className="col col-loan-cs">
                <div className="button-loan">
                  <WrapImage
                    desktop={{
                      src: '/images/loan-icon.png',
                      width: '58px',
                      height: '58px',
                      className: 'loan-icon',
                    }}
                  />
                  LOAN FOR PLAY
                </div>
              </div>
              <div className="col col-loan-cs">
                <div className="button-loan">
                  <WrapImage
                    desktop={{
                      src: '/images/play-to-earn-icon.png',
                      width: '58px',
                      height: '58px',
                      className: 'loan-icon',
                    }}
                  />
                  PLAY TO EARN
                </div>
              </div>
              <div className="col col-loan-cs">
                <div className="button-loan">
                  <WrapImage
                    desktop={{
                      src: '/images/shop-earn-icon.png',
                      width: '58px',
                      height: '58px',
                      className: 'loan-icon',
                    }}
                  />
                  SHOP & EARN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
