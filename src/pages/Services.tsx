import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      {/* Services Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services-hero-content text-center">
                <h1>Our Services</h1>
                <p>Discover the comprehensive educational services we offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="academic-programs-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Academic Programs</h2>
            <p>Comprehensive curriculum designed for excellence</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-child"></i>
                </div>
                <h3>Primary Education</h3>
                <p>Foundation years focusing on basic skills and character development.</p>
                <ul className="program-features">
                  <li>Interactive Learning</li>
                  <li>Basic Skills Development</li>
                  <li>Character Building</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-book-reader"></i>
                </div>
                <h3>Secondary Education</h3>
                <p>Advanced learning with focus on academic excellence.</p>
                <ul className="program-features">
                  <li>Advanced Curriculum</li>
                  <li>Subject Specialization</li>
                  <li>Career Guidance</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Higher Secondary</h3>
                <p>Preparing students for higher education and careers.</p>
                <ul className="program-features">
                  <li>College Preparation</li>
                  <li>Career Counseling</li>
                  <li>Advanced Studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Additional Services</h2>
            <p>Supporting holistic development of our students</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-bus"></i>
                </div>
                <div className="service-content">
                  <h3>Transportation</h3>
                  <p>Safe and reliable transportation services for students.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <div className="service-content">
                  <h3>Cafeteria</h3>
                  <p>Healthy and nutritious meals for students.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="service-content">
                  <h3>Computer Lab</h3>
                  <p>Modern computer facilities for digital learning.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="service-content">
                  <h3>Library</h3>
                  <p>Extensive collection of books and digital resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 