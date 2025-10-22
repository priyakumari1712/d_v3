import React, { useState, useMemo } from 'react'
import './section4.css'

// Product cards data array - add new cards here
const productCards = [
  {
    id: 1,
    title: 'CQ DLight Manual',
    date: '01.11.2024',
    tag: 'MANUAL',
    link: '#',
    linkText: 'CQUARTZ DLight Instruction Manual',
    category: 'Coating',
    description: 'Complete guide for CQUARTZ DLight application'
  },
  {
    id: 2,
    title: 'CQ Gliss 2.0 Manual',
    date: '01.11.2024',
    tag: 'MANUAL',
    link: '#',
    linkText: 'CQUARTZ Gliss 2.0 Instruction Manual',
    category: 'Coating',
    description: 'Professional application guide for Gliss 2.0'
  },
  {
    id: 3,
    title: 'DQ GForce Manual',
    date: '11.04.2024',
    tag: 'MANUAL',
    link: '#',
    linkText: 'DQUARTZ GForce Instruction Manual',
    category: 'Protection',
    description: 'Advanced protection system manual'
  },
  {
    id: 4,
    title: 'Wash & Wax Guide',
    date: '15.10.2024',
    tag: 'GUIDE',
    link: '#',
    linkText: 'Complete Wash & Wax Process Guide',
    category: 'Maintenance',
    description: 'Step-by-step washing and waxing instructions'
  },
  {
    id: 5,
    title: 'Paint Correction Manual',
    date: '08.09.2024',
    tag: 'MANUAL',
    link: '#',
    linkText: 'Professional Paint Correction Manual',
    category: 'Correction',
    description: 'Advanced paint correction techniques'
  },
  {
    id: 6,
    title: 'Interior Care Guide',
    date: '22.08.2024',
    tag: 'GUIDE',
    link: '#',
    linkText: 'Complete Interior Care Guide',
    category: 'Interior',
    description: 'Comprehensive interior detailing guide'
  }
]

function Section4() {
  // State for features
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date')
  const [selectedCard, setSelectedCard] = useState(null)
  const cardsPerPage = 3

  // Get unique categories
  const categories = ['All', ...new Set(productCards.map(card => card.category))]

  // Filter and sort cards
  const filteredAndSortedCards = useMemo(() => {
    let filtered = productCards.filter(card => {
      const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           card.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort cards
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'date':
          return new Date(b.date) - new Date(a.date)
        case 'category':
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage)
  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  const currentCards = filteredAndSortedCards.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const closeModal = () => {
    setSelectedCard(null)
  }

  return (
    <section className="support-section4">
      <div className="support-section4__container">
        <div className="support-section4__content">
          <h2 className="support-section4__title">
            Get the Support You Need
          </h2>
          <p className="support-section4__subtitle">
            Comprehensive resources to help you master car detailing
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="support-controls">
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search manuals and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search" 
                  onClick={() => setSearchTerm('')}
                  title="Clear search"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
              </svg>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M7 12h10M10 18h4"></path>
              </svg>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="support-section4__products">
          {currentCards.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleCardClick(product)}>
              <div className="product-card__visual">
                <div className="product-category-badge">{product.category}</div>
              </div>
              <div className="product-card__info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="product-date">{product.date}</span>
                  <span className="product-tag">{product.tag}</span>
                </div>
                <a href={product.link} className="product-link" onClick={(e) => e.stopPropagation()}>
                  {product.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              PREV
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`pagination-btn page ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button
              className="pagination-btn next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              NEXT
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="results-info">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedCards.length)} of {filteredAndSortedCards.length} results
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h3>{selectedCard.title}</h3>
              <span className="modal-tag">{selectedCard.tag}</span>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedCard.description}</p>
              <div className="modal-meta">
                <span><strong>Category:</strong> {selectedCard.category}</span>
                <span><strong>Date:</strong> {selectedCard.date}</span>
              </div>
              <a href={selectedCard.link} className="modal-link" target="_blank" rel="noopener noreferrer">
                {selectedCard.linkText}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Section4
