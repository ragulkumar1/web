import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-hero-content text-center">
                <h1>About JKKN School</h1>
                <p>Learn more about our history, mission, and values</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="history-content">
                <h2>Our History</h2>
                <p>Founded in 1990, JKKN School has been a cornerstone of educational excellence for over three decades. We have consistently provided quality education and shaped the lives of thousands of students.</p>
                <p>Our journey began with a vision to create an institution that would nurture young minds and prepare them for the challenges of tomorrow.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-image">
                <img src="/assets/img/about/history.jpg" alt="School History" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>To provide a nurturing environment that fosters academic excellence, character development, and lifelong learning.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>To be a leading educational institution that empowers students to become responsible global citizens and future leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Leadership Team</h2>
            <p>Meet the dedicated professionals guiding our institution</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-card">
                <div className="team-image">
                  <img src="/assets/img/team/principal.jpg" alt="Principal" />
                </div>
                <div className="team-content">
                  <h3>Dr. John Smith</h3>
                  <p>Principal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-card">
                <div className="team-image">
                  <img src="/assets/img/team/vice-principal.jpg" alt="Vice Principal" />
                </div>
                <div className="team-content">
                  <h3>Sarah Johnson</h3>
                  <p>Vice Principal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-card">
                <div className="team-image">
                  <img src="/assets/img/team/head-teacher.jpg" alt="Head Teacher" />
                </div>
                <div className="team-content">
                  <h3>Michael Brown</h3>
                  <p>Head Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 