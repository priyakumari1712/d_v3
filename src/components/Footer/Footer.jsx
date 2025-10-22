import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__cta">
        <span className="footer__lead">Begin your journey</span>
        <div className="footer__ctaButtons">
          <a href="#" className="footer__ctaBtn footer__ctaBtn--primary">Find an Installer</a>
          <a href="#" className="footer__ctaBtn">Find a Distributor</a>
        </div>
      </div>

      <div className="footer__container">
        <div className="footer__watermark" aria-hidden="true">DSQUARED</div>
        <div className="footer__brand">
          <div className="footer__logo">DSQUARED</div>
          <p className="footer__tag">Detailing. Protection. Performance.</p>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__title">Products</h4>
            <Link to="/all-products" onClick={scrollToTop} className="footer__link">All Products</Link>
            <a href="#" className="footer__link">Prepare</a>
            <a href="#" className="footer__link">Protect</a>
            <a href="#" className="footer__link">PPF</a>
            <a href="#" className="footer__link">Maintain</a>
            <a href="#" className="footer__link">Accessories</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Company</h4>
            <Link to="/about" onClick={scrollToTop} className="footer__link">About</Link>
            <Link to="/support" onClick={scrollToTop} className="footer__link">Support</Link>
            <Link to="/contact" onClick={scrollToTop} className="footer__link">Contact</Link>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Support</h4>
            <a href="#" className="footer__link">Instructions, Tips & Guides</a>
            <a href="#" className="footer__link">Downloads</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Find</h4>
            <a href="#" className="footer__link">Find an Installer</a>
            <a href="#" className="footer__link">Find a Distributor</a>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} DSQUARED. All rights reserved</span>
          <div className="footer__legal">
            <Link to="/terms-conditions" onClick={scrollToTop} className="footer__small">Terms of use</Link>
            <Link to="/privacy-policy" onClick={scrollToTop} className="footer__small">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


