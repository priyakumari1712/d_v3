import React from 'react';
import './hero.css';

const FindDistributorHero = () => {
  return (
    <section className="distributor-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* Left Section - Title and Brands */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="title-line">FIND A</span>
            <span className="title-line">DISTRIBUTOR</span>
          </h1>
          
          <div className="brand-logos">
            <div className="brand-logo">C.QUARTZ</div>
            <div className="brand-logo">D.QUARTZ</div>
            <div className="brand-logo">
              immortal
              <span className="brand-subtitle">Instant Self-Healing PPF</span>
            </div>
          </div>
        </div>

        {/* Right Section - Text and CARPRO Logo */}
        <div className="hero-right">
          <div className="hero-text">
            <p>
              Since day one the goal of CQUARTZ Finest, has been to approve only the most talented, caring, and character driven professionals across the world.
            </p>
            <p>
              Use the map below to locate the nearest distributor in the certified CARPRO network.
            </p>
            <p className="note-text">
              NOTE: DQUARTZ is available at all CQPRO and CQFR distributors!
            </p>
          </div>
          
          <div className="certification-logo">
            <div className="cert-logo">
              <div className="cert-text">CARPRO</div>
              <div className="cert-subtitle">DISTRIBUTOR</div>
              <div className="cert-ring">CERTIFIED CERTIFIED CERTIFIED CERTIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDistributorHero;
