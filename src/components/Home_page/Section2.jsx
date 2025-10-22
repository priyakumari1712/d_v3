import React from 'react'
import './Section2.css'
import wellcome from "/wellcome.svg"

function Section2() {
  return (
    <section className="section2">
      <div className="section2__container">
        <div className="section2__content">
         <img src={wellcome} alt="" />
          
          <h2 className="section2__tagline">
            THE TECH LEADER IN AUTOMOTIVE DETAILING
          </h2>
          
          <p className="section2__description">
            As a pioneer and leader in automotive detailing nanotechnology, we continuously push boundaries exploring new technologies and improving existing solutions, to offer you the best possible protection and maintenance products in the world.
          </p>
          
          <div className="section2__cta">
            <button className="section2__cta-button">
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
