import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo-white.png';

class Navbar extends Component {
  openMobileNavbar() {
    this.nav.classList.add('opened');
    this.navToggle.setAttribute('aria-label', 'Close navigation menu.');
  }

  closeMobileNavbar() {
    this.nav.classList.remove('opened');
    this.navToggle.setAttribute('aria-label', 'Open navigation menu.');
  }

  componentDidMount() {
    this.nav = document.getElementById('topnav');
    this.navToggle = this.nav.querySelector('.menu-toggle');

    this.navMenu = this.nav.querySelector('.nav-menu');
    this.navLinks = this.nav.querySelector('.nav-links');

    this.navToggle.addEventListener('click', (evt) => {
      // evt.preventDefault();

      console.log('clicked');
      if (this.nav.classList.contains('opened')) {
        this.closeMobileNavbar();
      } else {
        this.openMobileNavbar();
      }
    });

    this.navLinks.addEventListener('click', (evt) => {
      evt.stopPropagation();
      // evt.preventDefault();
    });

    this.navMenu.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.closeMobileNavbar();
    });
  }

  render() {
    return (
      <div className="navbar" id="topnav">
        <nav className="navbar__nav nav-container container navbar__list">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="navbar__home--icon" />
            <span className="navbar__home--text">
              <span className="color-grey">Come</span>Commune
            </span>
          </Link>
          {/* only show on mobile */}
          <button type="button" className="menu-toggle" aria-label="Open navigation menu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="nav-menu">
            <ul className="nav-links">
              <li className="navbar__item">
                <Link to="/" activeClassName="navbar__link--active" className="navbar__link">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/about" activeClassName="navbar__link--active" className="navbar__link">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/articles" activeClassName="navbar__link--active" className="navbar__link">
                  Articles
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/contact" activeClassName="navbar__link--active" className="navbar__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
