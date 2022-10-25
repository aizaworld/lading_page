import React from 'react';
import WrapImage from '../common/wrapImage';

export default function Header() {
  return (
    <div className="wrap-header">
      <div className='d-flex justify-content-center align-items-center'>
        <WrapImage
          desktop={{
            src: '/images/burger-icon.png',
            width: '17px',
            height: '13.91px',
          }}
        />
        <WrapImage
          desktop={{
            src: '/images/logo.png',
            width: '84px',
            height: '80px',
            className: 'header-logo',
          }}
        />
      </div>
      <div className='item-list'>
          <div className='menu-item menu-item-active'>DASHBOARD</div>
          <div className='menu-item'>AIZA NFT</div>
          <div className='menu-item'>WHY AIZA</div>
          <div className='menu-item'>INO EXCHANGE</div>
          <div className='menu-item'>BUNDLES INFO</div>
      </div>
    </div>
  );
}
