import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo-white.png';
import { css } from '@emotion/react';

class Navbar extends Component {
  componentDidMount() {
    this.nav = document.querySelector('.navbar');
    this.navToggle = this.nav.querySelector('.menu-toggle');

    this.navToggle.addEventListener('click', (evt) => {
      this.nav.classList.toggle('opened');
      evt.preventDefault();
    });

    // set style for index page
    if (window.location.pathname === '/') {
      this.nav.style.backgroundColor = 'transparent';
      this.nav.style.position = 'absolute';
    }
  }

  render() {
    return (
      <div className="navbar">
        <nav className="nav-container container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="navbar__home--icon" />
            <span className="navbar__home--text">
              <span className="color-grey">Come</span>Commune
            </span>
          </Link>
          {/* only show on mobile */}
          <button
            className="menu-toggle"
            css={css`
              cursor: pointer;
              border: none;
              background-color: transparent;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              &:focus {
                outline: none;
              }

              .bar {
                display: block;
                width: 30px;
                height: 4px;
                margin: 2px;
                transition: all 0.2s ease;
                background-color: var(--color-grey);
              }
            `}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
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
