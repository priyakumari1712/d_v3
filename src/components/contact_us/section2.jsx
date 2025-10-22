import React from 'react';
import './section2.css';

const ContactSection2 = () => {
  return (
    <div className="contact-section2">
      <div className="training-container">
        {/* Training Watermark */}
        <div className="training-watermark">TRAINING</div>
        
        <div className="training-content">
          {/* Left Side - Text */}
          <div className="training-text">
            <p>
              If you are interested in becoming a<br />
              certified DSQUARED installer, contact<br />
              one of our training centres near you.
            </p>
          </div>
          
          {/* Right Side - Certification Badges */}
          <div className="certification-badges">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-text-large">DQ</div>
                <div className="badge-text-small">INSTALLER</div>
                <div className="badge-text-small">DSQUARED</div>
              </div>
            </div>
            
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-text-large">CQPRO</div>
                <div className="badge-text-small">INSTALLER</div>
                <div className="badge-text-small">DSQUARED</div>
              </div>
            </div>
            
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-text-large">CQFR</div>
                <div className="badge-text-small">INSTALLER</div>
                <div className="badge-text-small">DSQUARED</div>
              </div>
            </div>
            
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-text-large script">immortal</div>
                <div className="badge-text-small">DSQUARED</div>
              </div>
            </div>
            
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-text-large dsquared">DSQUARED</div>
                <div className="badge-text-small">INSTALLER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
