import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../header/style.scss';
import headerimg from "../../assets/bars.svg";
import  logo from "../../assets/logo.svg";


function Header() {
  const [isShrink, setIsShrink] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isShrink ? 'header__shrink' : ''}`}>
      <nav className="header_nav container df">
        <div className="header__logo">
          <Link to="/">
          <img src={logo} className="nav-logo" alt="logo" />

          </Link>
        </div>
        <div className="header__right df">
          <ul className={`header__list df ${isMenuOpen ? 'header__list-show' : ''}`}>
            <li className="header__item">
              <Link to="/marketplace" className="header_link">Marketplace</Link>
            </li>
            <li className="header__item">
              <Link to="/rankings" className="header_link">Rankings</Link>
            </li>
            <li className="header__item">
              <Link to="/wallet" className="header_link">Connect a wallet</Link>
            </li>
          </ul>
          <button className="header-button">
            <i className="fa-regular fa-user"></i>Sign Up
          </button>
          <div className="header_btns">
            <button className="header__btn-hamburger" onClick={handleToggleClick}>
              <img src={headerimg} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
