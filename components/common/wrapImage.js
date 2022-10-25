import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { useWindowWidth } from '../../hooks/useWindowWidthHook';

const WrapImage = (props) => {
  const { mobile, desktop } = props;
  const width = useWindowWidth();
  if (width <= 768 && mobile) {
    // mobile screen
    return (
      <span className={mobile.className} style={mobile.style}>
        <Image
          src={mobile.src}
          alt={mobile.alt}
          width={mobile.width}
          height={mobile.height}
          layout={mobile.layout || 'intrinsic'}
          objectFit={mobile.objectFit}
          priority={mobile.priority}
          quality={mobile.quality || 100}
        />
      </span>
    );
  }
  return (
    <span className={desktop.className} style={desktop.style}>
      <Image
        src={desktop.src}
        alt={desktop.alt}
        width={desktop.width}
        height={desktop.height}
        layout={desktop.layout || 'intrinsic'}
        objectFit={desktop.objectFit}
        priority={desktop.priority}
        quality={desktop.quality || 100}
      />
    </span>
  );
};

export default WrapImage;
