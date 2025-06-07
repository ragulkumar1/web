import React from 'react';

const History: React.FC = () => {
  return (
    <div className="about-sub-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>Our History</h2>
              <p>Discover the journey that shaped our institution</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="history-content">
              <h3>Our Journey Through Time</h3>
              <p>Founded in 1995, our institution has grown from a small community school to a leading educational establishment. Our commitment to excellence in education has remained unwavering throughout the years.</p>
              <ul className="history-timeline">
                <li>
                  <span className="year">1995</span>
                  <h4>Foundation</h4>
                  <p>Established with a vision to provide quality education</p>
                </li>
                <li>
                  <span className="year">2005</span>
                  <h4>Expansion</h4>
                  <p>Added new facilities and programs</p>
                </li>
                <li>
                  <span className="year">2015</span>
                  <h4>Innovation</h4>
                  <p>Introduced modern teaching methodologies</p>
                </li>
                <li>
                  <span className="year">2023</span>
                  <h4>Excellence</h4>
                  <p>Recognized as a leading educational institution</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="history-image">
              <img src="/assets/img/about/history.jpg" alt="School History" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History; 