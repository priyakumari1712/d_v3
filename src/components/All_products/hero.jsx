import React from 'react'
import './hero.css'
import Section2 from './section2'

function Hero() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="all-products-hero">
        {/* Animated Background */}
        <div className="hero-background">
          <div className="abstract-lines"></div>
          <div className="glow-effects"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title">THE SYSTEM</h1>
          </div>
          <div className="hero-description">
            <p>
              Discover the most comprehensive line of detailing products out there. 
              Made with passion and innovation at heart.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Section2 />
    </>
  )
}

export default Hero
