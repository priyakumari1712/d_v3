import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.isNew && <div className="new-badge">NEW</div>}
      </div>
      
      <div className="product-info">
        <div className="product-tags">
          <span className="tag">
            <span className="tag-icon">⚫</span>
            <span className="tag-text">{product.color}</span>
          </span>
          <span className="tag">
            <span className="tag-icon">⏱️</span>
            <span className="tag-text">{product.time}</span>
          </span>
          <span className="tag">
            <span className="tag-icon">H</span>
            <span className="tag-text">{product.transmission}</span>
          </span>
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        <h4 className="product-subtitle">{product.subtitle}</h4>
        
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard

