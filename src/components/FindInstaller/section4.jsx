import React from 'react';
import './section4.css';

const FindInstallerSection4 = ({ currentPage, totalPages, onPageChange, totalResults, resultsPerPage }) => {
  if (totalPages <= 1) return null;

  const startIndex = (currentPage - 1) * resultsPerPage + 1;
  const endIndex = Math.min(currentPage * resultsPerPage, totalResults);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Max number of page buttons to show

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > maxPageButtons - 2) {
        pageNumbers.push('...');
      }

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= maxPageButtons - 2) {
        end = maxPageButtons - 1;
      } else if (currentPage > totalPages - (maxPageButtons - 2)) {
        start = totalPages - (maxPageButtons - 3);
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - (maxPageButtons - 2)) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <section className="pagination-section">
      <div className="pagination-container">
        <div className="results-info">
          <span className="results-text">
            Showing {startIndex}-{endIndex} of {totalResults} Installers
          </span>
        </div>

        <div className="pagination-controls">
          <button
            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="page-numbers">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="page-number ellipsis">...</span>
                ) : (
                  <button
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="jump-to-page">
          <span className="jump-label">Go to page:</span>
          <select
            className="page-select"
            value={currentPage}
            onChange={(e) => onPageChange(Number(e.target.value))}
          >
            {[...Array(totalPages).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default FindInstallerSection4;

