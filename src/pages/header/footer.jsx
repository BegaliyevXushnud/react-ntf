import React from 'react';
import logo from '../../assets/logo.svg'; 
import "./footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="./index.html">
            <img src={logo} className="nav-logo" alt="logo" />
          </a>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="footer-logo-icons">
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
        <div className="footer-explore">
          <h2>Explore</h2>
          <ul>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>
        <div className="footer-join">
          <h2>Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="btni">
            <input type="text" placeholder="Enter Your Email Address" />
            <button className="footer-join-button">
              <i className="fa-regular fa-envelope"></i>Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="ft">
        <h3>Ⓒ NFT Market. Use this template freely.</h3>
      </div>
    </footer>
  );
};

export default Footer;
