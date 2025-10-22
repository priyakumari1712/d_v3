import React, { useState } from 'react';
import './hero.css';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    country: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-hero">
      <div className="contact-container">
        {/* Left Section - Information */}
        <div className="contact-info">
          <div className="contact-heading">
            <h1>GET IN</h1>
            <h1>TOUCH</h1>
          </div>
          
          <div className="contact-description">
            <p>
              It's not only about great products, but also a great team to answer all questions and provide correct recommendations.
            </p>
            <p>
              Get in touch with one of our expert team members by completing the form. You can also contact us in our social media!
            </p>
          </div>

          <div className="contact-details">
            <h3>DSQUARED Korea</h3>
            <p>Suncheon, Jeonnam, Korea</p>
            <p>tel: 82-070-7722-5866</p>
            <p>email: info@dsquared.com</p>
          </div>

          <div className="social-media">
            <a href="#" className="social-icon facebook">f</a>
            <a href="#" className="social-icon instagram">📷</a>
            <a href="#" className="social-icon tiktok">♪</a>
            <a href="#" className="social-icon youtube">▶</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact us</h2>
            
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>
              <div className="select-wrapper">
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="partnership">Partnership</option>
                </select>
                <span className="dropdown-arrow">▼</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">COUNTRY</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Your Country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>

            <div className="recaptcha-notice">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
