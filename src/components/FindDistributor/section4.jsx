import React from 'react';
import './section4.css';

const FindDistributorSection4 = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalResults, 
  resultsPerPage 
}) => {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <section className="pagination-section">
      <div className="pagination-container">
        {/* Results Info */}
        <div className="results-info">
          <span className="results-text">
            Showing {startResult}-{endResult} of {totalResults} installers
          </span>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          {/* Previous Button */}
          <button 
            className={`pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="btn-icon">‹</span>
            <span className="btn-text">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="page-numbers">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`page-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button 
            className={`pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="btn-text">Next</span>
            <span className="btn-icon">›</span>
          </button>
        </div>

        {/* Quick Jump */}
        <div className="quick-jump">
          <span className="jump-label">Go to page:</span>
          <select 
            className="page-select"
            value={currentPage}
            onChange={(e) => onPageChange(parseInt(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default FindDistributorSection4;

