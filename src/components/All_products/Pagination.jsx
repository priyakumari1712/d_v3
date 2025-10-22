import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange, onPrevPage, onNextPage }) {
  if (totalPages <= 1) return null

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button 
          className={`pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={onPrevPage}
          disabled={currentPage === 1}
        >
          PREV
        </button>
        
        <div className="pagination-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button 
          className={`pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={onNextPage}
          disabled={currentPage === totalPages}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Pagination

