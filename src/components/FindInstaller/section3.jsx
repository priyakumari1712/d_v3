import React from 'react';
import './section3.css';

const FindInstallerSection3 = ({ installers, filteredInstallers }) => {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <h3>Available Installers</h3>
          <span className="results-count">{filteredInstallers.length} found</span>
        </div>
        
        <div className={`installers-grid ${filteredInstallers.length === 1 ? 'single-card' : ''}`}>
          {filteredInstallers.map(installer => (
            <div key={installer.id} className="installer-card">
              <div className="card-header">
                <div className="installer-info">
                  <h4 className="installer-name">{installer.name}</h4>
                  <div className="installer-location">
                    <span className="location-text">
                      {installer.city}, {installer.state}
                    </span>
                    <span className="country-text">{installer.country}</span>
                  </div>
                </div>
                <div className="installer-rating">
                  <div className="rating-stars">
                    {'★'.repeat(Math.floor(installer.rating))}
                    {'☆'.repeat(5 - Math.floor(installer.rating))}
                  </div>
                  <span className="rating-value">{installer.rating}</span>
                </div>
              </div>
              
              {/* Certified Badge */}
              {installer.certified && (
                <div className="certified-badge">
                  <div className="cert-icon-bg">
                    <svg className="cert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="cert-text">CERTIFIED INSTALLER</span>
                </div>
              )}
              
              <div className="installer-services">
                <h5 className="services-title">Services Offered:</h5>
                <div className="services-list">
                  {installer.services.map((service, index) => (
                    <span key={index} className="service-tag">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a href={`tel:${installer.phone}`} className="contact-link">
                    {installer.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${installer.email}`} className="contact-link">
                    {installer.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Website:</span>
                  <a href={`https://${installer.website}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {installer.website}
                  </a>
                </div>
              </div>
              
              <div className="card-actions">
                <button className="contact-btn primary">
                  Contact Installer
                </button>
                <button className="contact-btn secondary">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredInstallers.length === 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No installers found</h3>
              <p>Try adjusting your search criteria or contact us directly for assistance.</p>
              <button className="contact-us-btn">Contact DSQUARED</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindInstallerSection3;
