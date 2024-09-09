import React from 'react';
import person10 from '../../../assets/person10.png'
import person11 from '../../../assets/person11.png'
import person12 from '../../../assets/person12.png'
import person2 from '../../../assets/person2.png'
import person3 from '../../../assets/person3.png'
import person4 from '../../../assets/person4.png'
import person5 from '../../../assets/person5.png'
import person6 from '../../../assets/person6.png'
import person7 from '../../../assets/person7.png'
import person8 from '../../../assets/person8.png'
import person9 from '../../../assets/person9.png'
import "./creator.scss"

const CreatorsSection = () => {
  const creatorsData = [
    { id: 1, name: 'Keepitreal', sales: '34.53 ETH', imgSrc: person11 },
    { id: 2, name: 'DigiLab', sales: '34.53 ETH', imgSrc: person2 },
    { id: 3, name: 'GravityOne', sales: '34.53 ETH', imgSrc: person3 },
    { id: 4, name: 'Juanie', sales: '34.53 ETH', imgSrc: person4 },
    { id: 5, name: 'BlueWhale', sales: '34.53 ETH', imgSrc: person5 },
    { id: 6, name: 'mr fox', sales: '34.53 ETH', imgSrc: person6 },
    { id: 7, name: 'Shroomie', sales: '34.53 ETH', imgSrc: person7 },
    { id: 8, name: 'robotica', sales: '34.53 ETH', imgSrc:  person8 },
    { id: 9, name: 'RustyRobot', sales: '34.53 ETH', imgSrc: person9 },
    { id: 10, name: 'animakid', sales: '34.53 ETH', imgSrc: person10 },
    { id: 11, name: 'Dotgu', sales: '34.53 ETH', imgSrc: person11 },
    { id: 12, name: 'Ghiblier', sales: '34.53 ETH', imgSrc: person12 },
  ];

  return (
    <section className="creators" id="creators">
      <h1 className="creators-title">Top creators</h1>
      <div className="creators-desc">
        <p className="creators-desc-text">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
        <button className="creators-desc-button">
          <i className="fa-solid fa-rocket"></i> View Rankings
        </button>
      </div>
      <div className="creators-cards">
        {creatorsData.map((creator) => (
          <div className="creators-cards-card" key={creator.id}>
            <div className="creators-card-item">{creator.id}</div>
            <img src={creator.imgSrc} className="creators-card-img" alt={creator.name} />
            <h2 className="creators-card-text">{creator.name}</h2>
            <span className="creators-card-desc">
              Total Sales: <span className="creators-card-desces">{creator.sales}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
