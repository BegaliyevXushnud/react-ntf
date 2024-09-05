import React from 'react';
import "./collection.scss"

const CollectSection = () => {
  return (
    <section className="collect" id="collect">
      <h1 className="collect-title">Trending Collection</h1>
      <p className="collect-desc">Checkout our weekly updated trending collection.</p>
      <div className="collect-cards">
       
        <div className="collect-cards-card">
          <img src="./img/Primary Photo Placeholder.svg" className="collect-card-img" alt="Collection" />
          <div className="dogs">
            <div className="dog">
              <img src="./img/dog1.svg" className="dog-img" alt="Dog 1" />
            </div>
            
          </div>
          <p className="dog-text">DSGN Animals</p>
          <img src="./img/Mr.svg" alt="Mr" />
        </div>
        {/* Add more cards */}
      </div>
    </section>
  );
};

export default CollectSection;
