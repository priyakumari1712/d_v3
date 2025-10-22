import React from 'react'
import './section3.css'

function Section3() {
  return (
    <section className="support-section3">
      <div className="support-section3__container">
        <div className="support-section3__content">
          <div className="support-section3__text">
            <h2 className="support-section3__title">
              Professional Support
            </h2>
            <p className="support-section3__subtitle">
              Get expert guidance from our team of detailing professionals
            </p>
            <p className="support-section3__description">
              Our support team consists of certified detailing professionals with years of experience. 
              Whether you're a beginner or a seasoned pro, we're here to help you achieve perfect results 
              with every DSQUARED™ product.
            </p>
            <div className="support-section3__features">
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2408 3.61096 17.4111C2.43727 15.5814 1.87979 13.4116 2.02168 11.2338C2.16356 9.05599 2.99721 6.96497 4.39828 5.24173C5.79935 3.51849 7.69279 2.24482 9.79619 1.57403C11.8996 0.903243 14.1003 0.861576 16.2271 1.45351C18.3539 2.04545 20.3144 3.25146 21.8264 4.91125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock assistance for all your needs</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9999 15.5901 20.2 15.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h4>Expert Team</h4>
                  <p>Certified professionals with years of experience</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22S2 16 2 10C2 5.58 5.58 2 10 2C12.5 2 14.75 3.25 16 5.25C17.25 3.25 19.5 2 22 2C26.42 2 30 5.58 30 10C30 16 20 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h4>Guaranteed Results</h4>
                  <p>We stand behind our products and support</p>
                </div>
              </div>
            </div>
            
            <div className="support-section3__cta">
              <a href="#" className="cta-button primary">
                Contact Support
              </a>
              <a href="#" className="cta-button secondary">
                View Documentation
              </a>
            </div>
          </div>
          
          <div className="support-section3__visual">
            <div className="support-section3__image">
              <div className="floating-card card-1">
                <div className="card-content">
                  <h4>Quick Start Guide</h4>
                  <p>Get started in minutes</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">
                  <h4>Video Tutorials</h4>
                  <p>Step-by-step videos</p>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">
                  <h4>Expert Tips</h4>
                  <p>Professional techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
