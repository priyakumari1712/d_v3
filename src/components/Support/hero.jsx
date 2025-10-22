import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className="support-hero">
      <div className="support-hero__overlay" />
      <div className="support-hero__background-manuals" />
      <div className="support-hero__content">
        <div className="support-hero__subtitle">
          DSQUARED™ TIPS, TRICKS, MANUALS & GUIDES
        </div>
        <h1 className="support-hero__heading">
          <span className="support-hero__heading-line">RELEASE YOUR</span>
          <span className="support-hero__heading-line">INNER PRO</span>
        </h1>
        <p className="support-hero__description">
          Explore our resources to help you become a detailing PRO.
        </p>
      </div>
    </section>
  )
}

export default Hero
