import React from 'react'
import './section2.css'
import SearchBar from './SearchBar'
import FilterButtons from './FilterButtons'
import ProductGrid from './ProductGrid'
import Pagination from './Pagination'
import useProductsFilter from './useProductsFilter'
import { productsData, filterOptions } from './productsData'

function Section2() {
  const {
    activeFilter,
    searchQuery,
    currentPage,
    totalPages,
    currentProducts,
    handleSearchChange,
    handleFilterClick,
    handlePageChange,
    handlePrevPage,
    handleNextPage
  } = useProductsFilter(productsData, 9)

  return (
    <section className="products-section2">
      {/* Search and Filter Section */}
      <div className="products-section2-container">
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={handleSearchChange} 
        />
        <FilterButtons 
          filters={filterOptions}
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
        />
      </div>

      {/* Products Grid */}
      <ProductGrid products={currentProducts} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </section>
  )
}

export default Section2
