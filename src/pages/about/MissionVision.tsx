import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="about-sub-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>Mission & Vision</h2>
              <p>Our commitment to excellence in education</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mission-box">
              <div className="icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide a transformative educational experience that empowers students to become lifelong learners, critical thinkers, and responsible global citizens. We are committed to fostering academic excellence, personal growth, and social responsibility.</p>
              <ul className="mission-list">
                <li>Deliver high-quality education</li>
                <li>Foster innovation and creativity</li>
                <li>Promote diversity and inclusion</li>
                <li>Develop leadership skills</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="vision-box">
              <div className="icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be a leading educational institution that inspires and prepares students to excel in a rapidly changing world. We envision a community where every student achieves their full potential and contributes positively to society.</p>
              <ul className="vision-list">
                <li>Global recognition for excellence</li>
                <li>Innovation in education</li>
                <li>Strong community partnerships</li>
                <li>Sustainable development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision; 