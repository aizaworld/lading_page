import React from 'react';

export default function Brand() {
  return (
    <div className="container-fluid contain-brand">
      <div className="row" style={{ height: '100%' }}>
        <div className="col d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col title-brand">
                <h3>
                  SOME PREEMINENT BRANDS
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="grid-container">
                  {arrBrand.map((item, index) => {
                    return (
                      <div key={index} className="gird-item">
                        <img src={item} alt={`brand-${index}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const arrBrand = [
  '/images/royal-crown.png',
  '/images/dmax.png',
  '/images/disney.png',
  '/images/nozomi.png',
  '/images/pasnew.png',
  '/images/beeboo.png',
  '/images/namson.png',
  '/images/shengke.png',
  '/images/white-conc.png',
  '/images/orange.png',
  '/images/yukina.png',
  '/images/quangminh.png',
  '/images/shirtstudio.png',
  '/images/mtom.png',
  '/images/ribeto.png',
];
