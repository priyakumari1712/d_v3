import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  return (
    <div className="products-grid-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid

