import React from 'react'
import './Section4.css'

function Section4() {
  const mediaItems = [
    {
      id: 1,
      title: "CARPRO 2025 Catalogue",
      date: "02.04.2025",
      category: "DOWNLOAD",
      description: "Check out our 2025 catalogue!",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      brand: "CARPRO",
      productLine: "Catalogue",
      headerBadgeText: "NEW RELEASE"
    },
    {
      id: 2,
      title: "DLight 3-Month Update",
      date: "04.12.2024",
      category: "VIDEO",
      description: "3-Month CQ DLight Performance Update by Car Craft Auto Detailing",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      brand: "C.QUARTZ",
      productLine: "DLight",
      headerBadgeText: "3-MONTH UPDATE"
    },
    {
      id: 3,
      title: "WARNING - Fake Products Spotted",
      date: "11.02.2025",
      category: "WARNING",
      description: "We have recently identified multiple stores popping up on marketplaces such as Alibaba, Aliexpress, or Temu claiming to sell genuine CARPRO products.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      brand: "CARPRO",
      productLine: "Authenticity",
      headerBadgeText: "IMPORTANT"
    }
  ]

  return (
    <section className="section4">
      <div className="section4__container">
      
        
        <div className="section4__background-text">MEDIA</div>
        
        <div className="section4__media-grid">
          {mediaItems.map((item) => (
            <div key={item.id} className="section4__media-card">
              <div className="section4__media-header">
                <div className="section4__media-header-left">
                  {item.brand && <span className="section4__media-brand">{item.brand}</span>}
                  {item.productLine && <h3 className="section4__media-product-line">{item.productLine}</h3>}
                </div>
                {item.headerBadgeText && <div className="section4__media-header-badge">{item.headerBadgeText}</div>}
              </div>
              
              <div className="section4__media-image">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="section4__media-content">
                <h3 className="section4__media-title">{item.title}</h3>
                
                <div className="section4__media-meta">
                  <span className="section4__media-date">{item.date}</span>
                  <span className="section4__media-separator"> / </span>
                  <span className="section4__media-category-text">{item.category}</span>
                </div>
                
                <p className="section4__media-description">
                  {item.description}
                </p>
                
                <button className="section4__media-button">
                  {item.category === 'DOWNLOAD' ? 'Download Now' : item.category === 'VIDEO' ? 'Watch Video' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
