import React from 'react';
import './section2.css';

const FindInstallerSection2 = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCountry, 
  setSelectedCountry, 
  selectedRegion, 
  setSelectedRegion, 
  countries, 
  regions 
}) => {
  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-header">
          <h2>Locate an Installer</h2>
          <p>Find certified DSQUARED installers in your area</p>
        </div>
        
        <div className="search-filters">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-group">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="filter-select"
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="filter-select"
            >
              <option value="">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindInstallerSection2;

