import React from 'react';
import './section3.css';

const FindDistributorSection3 = ({ distributors, filteredDistributors }) => {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <h3>Available Distributors</h3>
          <span className="results-count">{filteredDistributors.length} found</span>
        </div>
        
        <div className="distributors-grid">
          {filteredDistributors.map(distributor => (
            <div key={distributor.id} className="distributor-card">
              <div className="card-header">
                <div className="distributor-info">
                  <h4 className="distributor-name">{distributor.name}</h4>
                  <div className="distributor-location">
                    <span className="location-icon">📍</span>
                    <span>{distributor.city}, {distributor.state}</span>
                  </div>
                </div>
                <div className="card-badges">
                  {distributor.certified && (
                    <span className="certified-badge">Certified</span>
                  )}
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{distributor.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Phone:</span>
                    <a href={`tel:${distributor.phone}`} className="contact-link">
                      {distributor.phone}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href={`mailto:${distributor.email}`} className="contact-link">
                      {distributor.email}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Website:</span>
                    <a href={`https://${distributor.website}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                      {distributor.website}
                    </a>
                  </div>
                </div>
                
                <div className="services">
                  <h5>Services Offered:</h5>
                  <div className="services-list">
                    {distributor.services.map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card-actions">
                <button className="contact-btn primary">
                  Contact Now
                </button>
                <button className="contact-btn secondary">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDistributors.length === 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No distributors found</h3>
              <p>Try adjusting your search criteria or contact us directly for assistance.</p>
              <button className="contact-us-btn">Contact DSQUARED</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindDistributorSection3;
