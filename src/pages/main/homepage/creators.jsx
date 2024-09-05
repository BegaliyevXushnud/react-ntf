

import React from 'react';
import "./creator.scss"

const CreatorsSection = () => {
  return (
    <section className="creators" id="creators">
      <h1 className="creators-title">Top creators</h1>
      <div className="creators-desc">
        <p className="creators-desc-text">Checkout Top Rated Creators on the NFT Marketplace</p>
        <button className="creators-desc-button">
          <i className="fa-solid fa-rocket"></i>View Rankings
        </button>
      </div>
      <div className="creators-cards">
        
        <div className="creators-cards-card">
          <div className="creators-card-item">1</div>
          <img src="./img/card-item-img-1.svg" className="creators-card-img" alt="Creator" />
          <h2 className="creators-card-text">Keepitreal</h2>
          <span className="creators-card-desc">
            Total Sales:<span className="creators-card-desces">34.53 ETH</span>
          </span>
        </div>
        {/* Add more creator cards */}
      </div>
    </section>
  );
};

export default CreatorsSection;
