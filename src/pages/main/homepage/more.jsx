
import React from 'react';
import "./more.scss"
import Img1 from "../../../assets/more1.png"
import Img2 from "../../../assets/more2.png"
import Img3 from "../../../assets/more3.png"
const MoreNFTsSection = () => {
  const nftData = [
    { id: 1, title: 'Distant Galaxy', imgSrc: Img1, price: '1.63 ETH', highestBid: '0.33 wETH' },
    { id: 2, title: 'Distant Galaxy', imgSrc: Img2, price: '1.63 ETH', highestBid: '0.33 wETH' },
    { id: 3, title: 'Distant Galaxy', imgSrc: Img3, price: '1.63 ETH', highestBid: '0.33 wETH', className: 'none' }
  ];

  return (
    <section className="more">
      <div className="more-text">
        <div className="more-text-title">
          <h2 className="more-text-title-title">Discover More NFTs</h2>
          <p className="more-text-title-desc">Explore new trending NFTs</p>
        </div>
        <button className="more-button">
          <i className="fa-regular fa-eye"></i> See All
        </button>
      </div>
      <div className="more-cards">
        {nftData.map((nft) => (
          <div className={`more-cards-card ${nft.className || ''}`} key={nft.id}>
            <img src={nft.imgSrc} className="more-cc-img" alt={nft.title} />
            <div className="more-cc-text">
              <p className="more-cc-text-p">{nft.title}</p>
            </div>
            <div className="more-cc-desc">
              <p>Price</p>
              <p>Highest Bid</p>
            </div>
            <div className="more-cc-desces">
              <p>{nft.price}</p>
              <p>{nft.highestBid}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreNFTsSection;
