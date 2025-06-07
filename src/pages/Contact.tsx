import React from 'react';
import useForm from '../hooks/useForm';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  const handleSubmit = async (data: typeof initialValues) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  } = useForm({
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero-section" ref={heroRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-hero-content text-center">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Our Location</h3>
                <p>855 road, broklyn street, new york</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone Number</h3>
                <p>+ 123 ( 9800 ) 987</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Address</h3>
                <p>needhelp@company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" ref={formRef}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          placeholder="Your Name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Your Email"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          placeholder="Your Phone"
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          placeholder="Subject"
                        />
                        {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          placeholder="Your Message"
                          rows={5}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750986!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 