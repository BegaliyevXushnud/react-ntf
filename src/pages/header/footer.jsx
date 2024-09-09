import React from 'react';
import logo from '../../assets/logo.svg'; 
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">
            <img src={logo} className="nav-logo" alt="NFT Marketplace Logo" />
          </a>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <div className="footer-logo-icons">
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://discord.com/yourdiscord" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>

        <div className="footer-explore">
          <h2>Explore</h2>
          <ul>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/rankings">Rankings</a></li>
            <li><a href="/connect-wallet">Connect a wallet</a></li>
          </ul>
        </div>

        <div className="footer-join">
          <h2>Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="btni">
            <input type="email" placeholder="Enter Your Email Address" aria-label="Email Address" />
            <button className="footer-join-button">
              <i className="fa-regular fa-envelope"></i> Subscribe
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
