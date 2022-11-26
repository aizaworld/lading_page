import React from 'react';
import WrapImage from '../common/wrapImage';

export default function Testimonial() {
  return (
    <div className="wrap-testimonial">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="testimonial-button">TESTIMONIAL</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-p">
              <WrapImage
                desktop={{
                  src: '/images/p1.png',
                  width: '128px',
                  height: '128px',
                  className: 'd-flex justify-content-center p-img',
                }}
              />
              <div className="p-title">NGUYEN KHANG</div>
              <div className="p-job">CEO brand KATANA</div>
              <div className="p-content">
                Mtom e-commerce platform helps our brand to be known more,
                especially through the issuance of NFTs, which makes it easier
                for us to take care of customers and conduct more promotional
                campaigns.
              </div>
              {/* <div className="wrap-p-icon">
                <WrapImage
                  desktop={{
                    src: '/images/tiktok-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/ins-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/youtube-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
              </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card-p">
              <WrapImage
                desktop={{
                  src: '/images/p2.png',
                  width: '128px',
                  height: '128px',
                  className: 'd-flex justify-content-center p-img',
                }}
              />
              <div className="p-title">NGUYEN THU HUYEN</div>
              <div className="p-job">CEO brand RIBETO </div>
              <div className="p-content">
                After connecting the brand to the Mtom electronic floor, our
                sales revenue doubled, even tripled compared to when not in use.
                We reach more young customers through the issuance of NFTs,
                while increasing customer loyalty to the product.
              </div>
              {/* <div className="wrap-p-icon">
                <WrapImage
                  desktop={{
                    src: '/images/tiktok-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/ins-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/youtube-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
              </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card-p">
              <WrapImage
                desktop={{
                  src: '/images/p3.png',
                  width: '128px',
                  height: '128px',
                  className: 'd-flex justify-content-center p-img',
                }}
              />
              <div className="p-title">NGUYEN DUY</div>
              <div className="p-job">KOL</div>
              <div className="p-content">
                NFTs gives me the ability to experience many different brands
                without spending a lot of money, I can make my own collection of
                NFTs and trade them for extra profit as a long term investment .
              </div>
              {/* <div className="wrap-p-icon">
                <WrapImage
                  desktop={{
                    src: '/images/tiktok-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/ins-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/youtube-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
              </div> */}
            </div>
          </div>
          <div className="col">
            <div className="card-p">
              <WrapImage
                desktop={{
                  src: '/images/p4.png',
                  width: '128px',
                  height: '128px',
                  className: 'd-flex justify-content-center p-img',
                }}
              />
              <div className="p-title">TRINH PHAM</div>
              <div className="p-job">KOC</div>
              <div className="p-content">
                Through the electronic exchange Mtom issuing NFTs, I was able to
                purchase easily and own my own NFTs. More specifically, my NFT
                is personalized, allowing me to receive special vouchers from
                brands based on my purchase history.
              </div>
              {/* <div className="wrap-p-icon">
                <WrapImage
                  desktop={{
                    src: '/images/tiktok-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/ins-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
                <WrapImage
                  desktop={{
                    src: '/images/youtube-icon-sm.png',
                    width: '26px',
                    height: '26px',
                    className: 'd-flex p-icon',
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
