import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1>Welcome to JKKN School</h1>
                <p>Providing quality education and shaping the future of our students since 1990.</p>
                <div className="hero-buttons">
                  <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
                  <Link to="/about" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/img/hero-image.jpg" alt="School Building" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose Us</h2>
            <p>Discover what makes JKKN School the best choice for your child's education</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Quality Education</h3>
                <p>Our curriculum is designed to provide comprehensive education and skill development.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Expert Teachers</h3>
                <p>Learn from experienced educators dedicated to student success.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Modern Facilities</h3>
                <p>State-of-the-art infrastructure to support learning and development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2>Ready to Join Our School?</h2>
                <p>Take the first step towards a bright future with JKKN School.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-button text-lg-end">
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 