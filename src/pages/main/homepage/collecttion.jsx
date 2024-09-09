import React from 'react';
import dog1 from '../../../assets/image.png';
import dog2 from '../../../assets/dog2.png';
import dog3 from '../../../assets/dog3.png';
import mainImage1 from '../../../assets/mr.png';
import mainImage2 from '../../../assets/zamburug.png';
import mainImage3 from '../../../assets/bir.png';
import mr from '../../../assets/it.png';
import zam from '../../../assets/zam.png';
import koinot1 from '../../../assets/koinot.png';
import "./collection.scss"
const TrendingCollection = () => {
  return (
    <section className="collect" id="collect">
      <h1 className="collect-title">Trending Collection</h1>
      <p className="collect-desc">Checkout our weekly updated trending collection.</p>
      <div className="collect-cards">
        <div className="collect-cards-card">
          <img src={mainImage1} alt="Main" className="collect-card-img" />
          <div className="dogs">
            <div className="dog">
              <img src={dog1} alt="Dog 1" className="dog-img" />
            </div>
            <div className="dog">
              <img src={dog2} alt="Dog 2" className="dog-img" />
            </div>
            <div className="dog">
              <img src={dog3} alt="Dog 3" className="dog-img" />
            </div>
          </div>
          <p className="dog-text">DSGN Animals</p>
          <img src={mr} alt="MR" />
        </div>

        <div className="collect-cards-card">
          <img src={mainImage2} alt="Main" className="collect-card-img" />
          <div className="dogs">
            <div className="dog">
              <img src={mainImage2} alt="Dog 1" className="dog-img" />
            </div>
            <div className="dog">
              <img src={mainImage2} alt="Dog 2" className="dog-img" />
            </div>
            <div className="dog">
              <img src={dog3} alt="Dog 3" className="dog-img" />
            </div>
          </div>
          <p className="dog-text">DSGN Animals</p>
          <img src={zam} alt="Zam" />
        </div>

        <div className="collect-cards-card">
          <img src={mainImage3} alt="Main" className="collect-card-img" />
          <div className="dogs">
            <div className="dog">
              <img src={mainImage3} alt="Dog 1" className="dog-img" />
            </div>
            <div className="dog">
              <img src={mainImage3} alt="Dog 2" className="dog-img" />
            </div>
            <div className="dog">
              <img src={dog3} alt="Dog 3" className="dog-img" />
            </div>
          </div>
          <p className="dog-text">DSGN Animals</p>
          <img src={koinot1} alt="Koinot" />
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
