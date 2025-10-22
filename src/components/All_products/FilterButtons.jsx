import React from 'react'

function FilterButtons({ filters, activeFilter, onFilterClick }) {
  return (
    <div className="filters-container">
      <div className="filters-row">
        {filters.slice(0, 5).map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="filters-row">
        <button
          className={`filter-button ${activeFilter === 'ACCESSORIES' ? 'active' : ''}`}
          onClick={() => onFilterClick('ACCESSORIES')}
        >
          ACCESSORIES
        </button>
      </div>
    </div>
  )
}

export default FilterButtons

