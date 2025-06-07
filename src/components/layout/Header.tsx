import React from 'react';
import { Link } from 'react-router-dom';
import useMobileMenu from '../../hooks/useMobileMenu';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <header className="site-header">
      <div className="tx-header-content">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="brand-logo">
              <Link to="/">
                <img src="/assets/img/logo/logo1.png" alt="JKKN School" />
              </Link>
            </div>

            <div className="tx-header-top-navigation">
              <div className="tx-header-top d-flex justify-content-between align-items-center">
                <div className="top-info">
                  <ul>
                    <li><i className="fas fa-map-marker-alt"></i> 855 road, broklyn street, new york</li>
                  </ul>
                </div>
                <div className="top-info-social d-flex align-items-center">
                  <div className="top-info">
                    <ul>
                      <li><i className="fas fa-envelope"></i> needhelp@company</li>
                      <li><i className="fas fa-clock"></i> Mon - Sat: 8:00 am - 7:00 pm</li>
                    </ul>
                  </div>
                  <div className="top-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                  </div>
                </div>
              </div>

              <nav className="tx-main-navigation-area">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <button 
              className="mobile-menu-button"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-content ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 