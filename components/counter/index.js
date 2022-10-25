import React from 'react';

export default function Counter() {
  return (
    <div className="wrap-counter">
      <div className="container d-flex justify-content-between">
        <div className="wrap-content-count">
          <div className="total">Total sold NFTs</div>
          <div className="number">1,500</div>
        </div>
        <div className="wrap-content-count">
          <div className="total">Total Volume</div>
          <div className="number">2,000,040 AIZA</div>
        </div>
        <div className="wrap-content-count">
          <div className="total">Total NFTs holder</div>
          <div className="number">1,500</div>
        </div>
      </div>
    </div>
  );
}
