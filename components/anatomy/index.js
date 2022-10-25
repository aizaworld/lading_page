import React from 'react';
import WrapImage from '../common/wrapImage';

export default function Anatomy() {
  return (
    <div className="wrap-anatomy">
      <div className="container">
        <div className="col d-flex flex-column align-items-center">
          <div className="anatomy-button">NFT ANATOMY</div>
          <WrapImage
            desktop={{
              src: '/images/anatomy.png',
              width: '904px',
              height: '728px',
              className: 'samurai-img'
            }}
          />
        </div>
      </div>
    </div>
  );
}
