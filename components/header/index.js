import React, { useState } from 'react';
import WrapImage from '../common/wrapImage';
import Link from 'next/link';

export default function Header() {
  const [active, setActive] = useState(1);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setActive(id);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
          {
            arrMenu.map((item, index) => (
              <div key={item.id} className={`menu-item ${index === 0 ? "menu-item-active" : ""}`}><Link href={item.to}><a onClick={(e) => handleScroll(e, item.id)}>{item.menu}</a></Link></div>
            ))
          }
      </div>
    </div>
  );
}

const arrMenu = [
  {
    id: 1,
    menu: "DASHBOARD",
    to: "/"
  },
  {
    id: 2,
    menu: "AIZA NFTs",
    to: "#aiza-nfts"
  },
  {
    id: 3,
    menu: "BUNDLES INFO",
    to: "#bundles-info"
  },
  {
    id: 4,
    menu: "INO EXCHANGE",
    to: "#ino-exchange"
  },
  {
    id: 5,
    menu: "BRAND NFT",
    to: "#brand-nft"
  },
  {
    id: 6,
    menu: "TESTIMONIAL",
    to: "#testimonial"
  }
]