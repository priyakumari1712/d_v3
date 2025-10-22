import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import nav_bg from "/nav_back.svg"
import responsive_nav_bg from "/responsive-Nav.svg"
import logo from "../../assets/photos/Logo_Dsquared_White.png"
import searchIcon from "/search-2-line.svg"

function NavBar() {
  // State Management
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false)
  const location = useLocation()

  // Desktop Dropdown Handlers
  const openProducts = () => setIsProductsOpen(true)
  const closeProducts = () => setIsProductsOpen(false)
  const openSupport = () => setIsSupportOpen(true)
  const closeSupport = () => setIsSupportOpen(false)
  
  // Mobile Menu Handlers
  const toggleMobileProducts = () => setIsMobileProductsOpen((v) => !v)
  const closeMobileProducts = () => setIsMobileProductsOpen(false)
  const toggleMobileSupport = () => setIsMobileSupportOpen((v) => !v)
  const closeMobileSupport = () => setIsMobileSupportOpen(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v)
    if (isMobileMenuOpen) {
      setIsMobileProductsOpen(false)
      setIsMobileSupportOpen(false)
    }
  }

  // Utility Functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])
  
  const isContactPage = location.pathname === '/contact'
  // Render Products Dropdown
  const renderProductsDropdown = () => (
    <div className="products-dropdown">
      <div className="dropdown-item">
        <span className="item-number">00</span>
        <div className="item-content">
          <Link to="/all-products" onClick={scrollToTop}>
            <h3>All Products</h3>
            <p>Explore our entire lineup</p>
          </Link>
        </div>
      </div>
      <div className="dropdown-item">
        <span className="item-number">01</span>
        <div className="item-content">
          <h3>Prepare</h3>
          <p>Cleaning, decontamination, polishing, surface preparation</p>
        </div>
      </div>
      <div className="dropdown-item">
        <span className="item-number">02</span>
        <div className="item-content">
          <h3>Protect</h3>
          <p>C.QUARTZ D.QUARTZ coatings</p>
        </div>
      </div>
      <div className="dropdown-item">
        <span className="item-number">03</span>
        <div className="item-content">
          <h3>PPF</h3>
          <p>immortal film, software & accessories</p>
        </div>
      </div>
      <div className="dropdown-item">
        <span className="item-number">04</span>
        <div className="item-content">
          <h3>Maintain</h3>
          <p>Maintenance washing, sealants, coating rejuvenation</p>
        </div>
      </div>
      <div className="dropdown-item">
        <span className="item-number">05</span>
        <div className="item-content">
          <h3>Accessories</h3>
          <p>Microfibers, polishing pads, brushes, merch</p>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <img src={searchIcon} alt="Search" width="24" height="24" />
        </button>
      </div>
    </div>
  )

  // Render Support Dropdown
  const renderSupportDropdown = () => (
    <div className="support-dropdown">
      <div className="dropdown-item">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <h3>Instructions, Tips & Guides</h3>
        </a>
      </div>
      <div className="dropdown-item">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <h3>Media</h3>
        </a>
      </div>
      <div className="dropdown-item">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <h3>Register Warranty</h3>
        </a>
      </div>
      <div className="dropdown-item">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <h3>Check Your Warranty</h3>
        </a>
      </div>
    </div>
  )

  return (
    <header className={`nav ${isContactPage ? 'contact-nav' : ''}`}>
      <div className="nav-container">
        {/* Desktop Background */}
        <img src={nav_bg} alt="" className="desktop-bg" />
        {/* Mobile Background */}
        <img src={responsive_nav_bg} alt="" className="mobile-bg" />
        
        <div className="nav_elements_container">
          {/* Logo */}
          <div className="navlogo">
            <Link to="/" onClick={() => { setIsMobileMenuOpen(false); scrollToTop() }}>
              <img src={logo} alt="DSquared Logo" />
            </Link>
          </div>

          {/* Menu One - Main Navigation */}
          <nav className="menu_one">
            <div 
              className="products-dropdown-container"
              onMouseEnter={openProducts} 
              onMouseLeave={closeProducts}
            >
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
              >
                Products
              </a>
              {isProductsOpen && renderProductsDropdown()}
            </div>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <div 
              className="support-dropdown-container"
              onMouseEnter={openSupport} 
              onMouseLeave={closeSupport}
            >
              <Link to="/support" onClick={scrollToTop}>
                Support
              </Link>
              {isSupportOpen && renderSupportDropdown()}
            </div>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </nav>

          {/* Menu Two - Distributor */}
          <nav className="menu_two">
            <a href="#" onClick={(e) => e.preventDefault()}>Find the Distributor</a>
          </nav>

          {/* Menu Three - Installer */}
          <nav className="menu_three">
            <a href="#" onClick={(e) => e.preventDefault()}>Find installer</a>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div 
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="products-dropdown-container">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileProducts() }}>
              Products
            </a>
            {isMobileProductsOpen && (
              <div className="products-dropdown">
                <div className="dropdown-item">
                  <span className="item-number">00</span>
                  <div className="item-content">
                    <Link to="/all-products" onClick={() => { toggleMobileMenu(); closeMobileProducts(); scrollToTop() }}>
                      <h3>All Products</h3>
                      <p>Explore our entire lineup</p>
                    </Link>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">01</span>
                  <div className="item-content">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts() }}>
                      <h3>Prepare</h3>
                      <p>Cleaning, decontamination, polishing, surface preparation</p>
                    </a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">02</span>
                  <div className="item-content">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts() }}>
                      <h3>Protect</h3>
                      <p>C.QUARTZ D.QUARTZ coatings</p>
                    </a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">03</span>
                  <div className="item-content">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts() }}>
                      <h3>PPF</h3>
                      <p>immortal film, software & accessories</p>
                    </a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">04</span>
                  <div className="item-content">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts() }}>
                      <h3>Maintain</h3>
                      <p>Maintenance washing, sealants, coating rejuvenation</p>
                    </a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">05</span>
                  <div className="item-content">
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts() }}>
                      <h3>Accessories</h3>
                      <p>Microfibers, polishing pads, brushes, merch</p>
                    </a>
                  </div>
                </div>
                <div className="search-container">
                  <input type="text" placeholder="Search..." className="search-input" />
                  <button className="search-button">
                    <img src={searchIcon} alt="Search" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" onClick={() => { toggleMobileMenu(); closeMobileProducts(); closeMobileSupport(); scrollToTop() }}>
            About
          </Link>
          <div className="support-dropdown-container">
            <Link to="/support" onClick={() => { toggleMobileMenu(); closeMobileProducts(); closeMobileSupport(); scrollToTop() }}>
              Support
            </Link>
            {isMobileSupportOpen && (
              <div className="support-dropdown">
                <div className="dropdown-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileSupport() }}>
                    <h3>Instructions, Tips & Guides</h3>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileSupport() }}>
                    <h3>Media</h3>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileSupport() }}>
                    <h3>Register Warranty</h3>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileSupport() }}>
                    <h3>Check Your Warranty</h3>
                  </a>
                </div>
              </div>
            )}
          </div>
          <Link to="/contact" onClick={() => { toggleMobileMenu(); closeMobileProducts(); closeMobileSupport(); scrollToTop() }}>
            Contact
          </Link>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts(); closeMobileSupport() }}>
            Find the Distributor
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); closeMobileProducts(); closeMobileSupport() }}>
            Find installer
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar


