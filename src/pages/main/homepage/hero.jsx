import React from 'react';
import HeroImg from  "../../../assets/hero.svg"
import "./hero.scss"

const HeroSection = () => {
  return (
    <section className="hero container">
      <div className="hero__left">
        <h1 className="hero-text-title">Discoxver digital art & Collect NFTs</h1>
        <p className="hero-text-desc">
          NFT marketplace UI created with Anima for <br />
          Figma. Collect, buy and sell art from more <br />
          than 20k NFT artists.
        </p>
        <button className="hero-text-button">
          <i className="fa-solid fa-rocket"></i>Get Started
        </button>
        <div className="total">
          <div className="total-item">
            <p className="total-item-title">240k+</p>
            <p className="total-item-desc">Total Sale</p>
          </div>
          <div className="total-item">
            <p className="total-item-title">100k+</p>
            <p className="total-item-desc">Auctions</p>
          </div>
          <div className="total-item">
            <p className="total-item-title">240k+</p>
            <p className="total-item-desc">Artists</p>
          </div>
        </div>
      </div>
      <div className="hero__right">
        <img src={HeroImg} alt="Highlighted NFT" />
      </div>
    </section>
  );
};

export default HeroSection;
