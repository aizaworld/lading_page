import React from 'react';
import WrapImage from '../common/wrapImage';

export default function Anatomy() {
  return (
    <div className="wrap-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-left">
              <WrapImage
                desktop={{
                  src: '/images/logo.png',
                  width: '84px',
                  height: '80px',
                }}
              />
              <div className="footer-one-of">
                One of the most outstanding digital marketplaces for crypto
                collectibles and non-fungible tokens (NFTs).
              </div>
              <div className="footer-join">JOIN THE COMMUNITY</div>
              <div className="wrap-social">
                <WrapImage
                  desktop={{
                    src: '/images/youtube.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/tw.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/fb.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/dc.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/in.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/te.png',
                    width: '40px',
                    height: '40px',
                    className: 'footer-social-icon',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-right">
              <div className="footer-join">STAY IN THE LOOP</div>
              <div className="footer-one-of">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                Aiza World Marketplace
              </div>
              <div className="d-flex wrap-input">
                <input
                  className="footer-input"
                  type="email"
                  placeholder="Email"
                />
                <div className="sign-me">Sign me in</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="row">
          <div className="col">
            <div className="footer-end-text">@2022 aizaworld.com</div>
          </div>
          <div className="col">
            <div className='d-flex wrap-footer-end-text-right'>
              <div className="footer-end-text me-5">Privacy Policy</div>
              <div className="footer-end-text">Terms of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
