import React from 'react';
import WrapImage from '../common/wrapImage';
import Lottie from 'lottie-react';

export default function Banner() {
  return (
    <div className="wrap-banner">
      <div className='fish'></div>
      <div className='bg-none'></div>
      <div className="container z-2">
        <div className="banner-title">
          Unbox the <span className="bundle">BUNDLE</span>
        </div>
        <div className="banner-title">
          Unlock the <span className="hero">HERO</span>
        </div>
        <div className="row d-flex get-now">
          <div className="col">
            <div className="banner-line"></div>
            <div className="banner-lauching">
              Launching at{' '}
              <span className="banner-time">May 31, 2023</span>
            </div>
            <div className="login-button">
              <div className="mask-login-button"></div>
              <div className="login-button-content"></div>
              <WrapImage
                desktop={{
                  src: '/images/login-icon.png',
                  width: '41px',
                  height: '39px',
                  className: 'd-flex login-icon',
                }}
              />
              <span className="get-it-now">GET IT NOW</span>
            </div>
          </div>
          <div className="col">
            <div className='ruong'></div>
            {/* <WrapImage
              desktop={{
                src: '/images/banner-img.png',
                width: '470px',
                height: '364px',
              }}
            /> */}
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="be-first">BE THE FIRST ON</div>
          <div className="d-flex justify-content-center">
            <div className="wrap-guild-img">
              <WrapImage
                desktop={{
                  src: '/images/guild.png',
                  width: '241px',
                  height: '82px',
                }}
              />
            </div>
            <div className="wrap-guild-img">
              <WrapImage
                desktop={{
                  src: '/images/guild.png',
                  width: '241px',
                  height: '82px',
                }}
              />
            </div>
            <div className="wrap-guild-img">
              <WrapImage
                desktop={{
                  src: '/images/guild.png',
                  width: '241px',
                  height: '82px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
