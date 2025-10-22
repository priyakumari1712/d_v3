import React from 'react'
import './AboutUs.css'

function AboutUs() {
  const descriptivePhrases = [
    "Between rough and refined",
    "Between armor and art", 
    "Between savage and spotless",
    "Between brute and beauty",
    "Between displayed and driven"
  ]

  return (
    <section className="about-us">
      <div className="about-us__background">
        {/* <div className="about-us__diagonal-stripe"></div>
        <div className="about-us__reflective-surface"></div> */}
      </div>
      
      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">About Us</h1>
          <p className="about-us__tagline">The finest line</p>
          
          <div className="about-us__phrases">
            {descriptivePhrases.map((phrase, index) => (
              <div key={index} className="about-us__phrase">
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
