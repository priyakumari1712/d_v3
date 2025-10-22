import React from 'react'
import './Section3.css'

function Section3() {
  const products = [
    {
      id: 1,
      name: "FairyTail",
      subtitle: "Wash Mitt",
      color: "ice grey",
      time: "3.2s",
      transmission: "Manual",
      description: "Timeless, iconic, and unapologetically analog - this premium wash mitt embodies the soul of professional detailing.",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 2,
      name: "FingerPrint",
      subtitle: "Mini Mitt",
      color: "jet black",
      time: "2.8s",
      transmission: "Manual",
      description: "Precision engineered microfiber mini wheel mitt that delivers exceptional cleaning power in tight spaces.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 3,
      name: "Ultra Polish Pad",
      subtitle: "Heavy Polish",
      color: "crystal blue",
      time: "4.1s",
      transmission: "Manual",
      description: "The Ultra Pad is a heavy polishing pad with 90 ppi, fitting perfectly between our Orange and Flash Pads for maximum versatility.",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 4,
      name: "Cool Wool Pad",
      subtitle: "Cool Wool",
      color: "arctic white",
      time: "3.5s",
      transmission: "Manual",
      description: "A highly resilient, integral air-cooling 3D structure acts as a breathing layer and combines pressure relief thermoregulation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 5,
      name: "C.QUARTZ Finest",
      subtitle: "Reserve Coating",
      color: "platinum",
      time: "5.2s",
      transmission: "Auto",
      description: "CQUARTZ Finest Reserve is our state-of-the-art flagship coating suited exclusively to the most skilled, hand-picked installers in the world.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 6,
      name: "C.QUARTZ BlackOut",
      subtitle: "2.0 Coating",
      color: "midnight",
      time: "3.9s",
      transmission: "Auto",
      description: "Introducing CQUARTZ BlackOut 2.0, the next evolution in tyre and rubber coatings, engineered for unparalleled durability.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 7,
      name: "Iron X",
      subtitle: "Iron Remover",
      color: "racing red",
      time: "2.5s",
      transmission: "Manual",
      description: "Professional grade iron remover that safely and effectively removes iron particles, brake dust, and industrial fallout from paint surfaces.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      isNew: true
    },
    {
      id: 8,
      name: "Reload Spray",
      subtitle: "Sealant",
      color: "pearl white",
      time: "3.7s",
      transmission: "Auto",
      description: "Quick and easy spray sealant that provides instant protection and a brilliant shine. Perfect for maintaining your ceramic coating.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      isNew: true
    }
  ]

  return (
    <section className="section3">
      <div className="section3__container">
        <div className="section3__header">
          <h2 className="section3__title">Our Premium Products</h2>
          <p className="section3__subtitle">
            Discover our cutting-edge automotive detailing solutions designed for professionals and enthusiasts who demand the highest quality and performance.
          </p>
        </div>
        
        <div className="section3__background-text">NEW</div>
        
        <div className="section3__products-grid">
          {products.map((product) => (
            <div key={product.id} className="section3__product-card">
              <div className="section3__product-image">
                <img src={product.image} alt={product.name} />
                {product.isNew && (
                  <div className="section3__new-badge">NEW</div>
                )}
              </div>
              
              <div className="section3__product-info">
                <div className="section3__product-tags">
                  <span className="section3__tag">
                    <span className="section3__tag-icon">⚫</span>
                    <span className="section3__tag-text">{product.color}</span>
                  </span>
                  <span className="section3__tag">
                    <span className="section3__tag-icon">⏱️</span>
                    <span className="section3__tag-text">{product.time}</span>
                  </span>
                  <span className="section3__tag">
                    <span className="section3__tag-icon">H</span>
                    <span className="section3__tag-text">{product.transmission}</span>
                  </span>
                </div>
                
                <h3 className="section3__product-name">{product.name}</h3>
                <h4 className="section3__product-subtitle">{product.subtitle}</h4>
                
                <p className="section3__product-description">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dark Section with CTA */}
        <div className="section3__dark-section">
          <div className="section3__dark-content">
            <div className="section3__dark-text">
              <h2 className="section3__dark-title">
                Professional Automotive Detailing
              </h2>
              <p className="section3__dark-description">
                Experience the ultimate in automotive care with our premium detailing services. 
                From luxury vehicles to everyday cars, we deliver exceptional results that exceed expectations.
              </p>
            </div>
            
            <div className="section3__dark-images">
              <div className="section3__dark-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
                  alt="Car detailing" 
                />
              </div>
              <div className="section3__dark-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop" 
                  alt="Professional car wash" 
                />
              </div>
              <div className="section3__dark-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop" 
                  alt="Car polishing" 
                />
              </div>
            </div>
            
            <div className="section3__dark-cta">
              <button className="section3__dark-cta-button">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        {/* Latest Collection Section */}
        <div className="section3__new-products">
        
          
          <div className="section3__new-products-grid">
            {products.slice(0, 4).map((product) => (
              <div key={`new-${product.id}`} className="section3__new-product-card">
                <div className="section3__new-product-image">
                  <img src={product.image} alt={product.name} />
                  {product.isNew && (
                    <div className="section3__new-badge">NEW</div>
                  )}
                </div>
                
                <div className="section3__new-product-info">
                  <div className="section3__product-tags">
                    <span className="section3__tag">
                      <span className="section3__tag-icon">⚫</span>
                      <span className="section3__tag-text">{product.color}</span>
                    </span>
                    <span className="section3__tag">
                      <span className="section3__tag-icon">⏱️</span>
                      <span className="section3__tag-text">{product.time}</span>
                    </span>
                    <span className="section3__tag">
                      <span className="section3__tag-icon">H</span>
                      <span className="section3__tag-text">{product.transmission}</span>
                    </span>
                  </div>
                  
                  <h3 className="section3__new-product-name">{product.name}</h3>
                  <h4 className="section3__new-product-subtitle">{product.subtitle}</h4>
                  
                  <p className="section3__new-product-description">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section3__new-products-cta">
            <button className="section3__new-products-button">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
