import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <video className="hero__video" src="/DSquared_Websit_logo_video.mp4" autoPlay muted loop playsInline />
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="hero__eyebrow">Perfection</span>
        <h1 className="hero__heading">Give your car a<br/>true custom look.</h1>
        <a href="#services" className="hero__cta">Our Services</a>
      </div>
    </section>
  )
}

export default Hero


