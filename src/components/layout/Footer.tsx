import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo1.png" alt="JKKN School" />
                  </Link>
                </div>
                <p>Welcome to JKKN School, where we provide quality education and shape the future of our students.</p>
                <div className="footer-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="footer-widget">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/admissions">Admissions</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="footer-widget">
                <h3>Contact Info</h3>
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>855 road, broklyn street, new york</span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+ 123 ( 9800 ) 987</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>needhelp@company</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text text-center">
                <p>&copy; {new Date().getFullYear()} JKKN School. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 