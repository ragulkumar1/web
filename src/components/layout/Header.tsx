import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMobileMenu from '../../hooks/useMobileMenu';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

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
                  <li className="has-dropdown">
                    <Link to="/about" onClick={() => toggleDropdown('about')}>About</Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
                      <li><Link to="/about/history">History</Link></li>
                      <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
                      <li><Link to="/about/team">Team</Link></li>
                      <li><Link to="/about/facilities">Facilities</Link></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to="/services" onClick={() => toggleDropdown('services')}>Services</Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                      <li><Link to="/services/academic">Academic Programs</Link></li>
                      <li><Link to="/services/support">Student Support</Link></li>
                      <li><Link to="/services/activities">Extracurricular Activities</Link></li>
                      <li><Link to="/services/online">Online Learning</Link></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to="/contact" onClick={() => toggleDropdown('contact')}>Contact</Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'contact' ? 'active' : ''}`}>
                      <li><Link to="/contact/form">Contact Form</Link></li>
                      <li><Link to="/contact/location">Location</Link></li>
                      <li><Link to="/contact/faq">FAQ</Link></li>
                      <li><Link to="/contact/support">Support</Link></li>
                    </ul>
                  </li>
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
            <li className="has-dropdown">
              <Link to="/about" onClick={() => toggleDropdown('about-mobile')}>About</Link>
              <ul className={`dropdown-menu ${activeDropdown === 'about-mobile' ? 'active' : ''}`}>
                <li><Link to="/about/history" onClick={toggleMenu}>History</Link></li>
                <li><Link to="/about/mission-vision" onClick={toggleMenu}>Mission & Vision</Link></li>
                <li><Link to="/about/team" onClick={toggleMenu}>Team</Link></li>
                <li><Link to="/about/facilities" onClick={toggleMenu}>Facilities</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="/services" onClick={() => toggleDropdown('services-mobile')}>Services</Link>
              <ul className={`dropdown-menu ${activeDropdown === 'services-mobile' ? 'active' : ''}`}>
                <li><Link to="/services/academic" onClick={toggleMenu}>Academic Programs</Link></li>
                <li><Link to="/services/support" onClick={toggleMenu}>Student Support</Link></li>
                <li><Link to="/services/activities" onClick={toggleMenu}>Extracurricular Activities</Link></li>
                <li><Link to="/services/online" onClick={toggleMenu}>Online Learning</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="/contact" onClick={() => toggleDropdown('contact-mobile')}>Contact</Link>
              <ul className={`dropdown-menu ${activeDropdown === 'contact-mobile' ? 'active' : ''}`}>
                <li><Link to="/contact/form" onClick={toggleMenu}>Contact Form</Link></li>
                <li><Link to="/contact/location" onClick={toggleMenu}>Location</Link></li>
                <li><Link to="/contact/faq" onClick={toggleMenu}>FAQ</Link></li>
                <li><Link to="/contact/support" onClick={toggleMenu}>Support</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 