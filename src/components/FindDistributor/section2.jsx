import React, { useState } from 'react';
import './section2.css';

const FindDistributorSection2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Sample distributor data for filtering
  const distributors = [
    { country: "United States", region: "North America" },
    { country: "Canada", region: "North America" },
    { country: "United Kingdom", region: "Europe" },
    { country: "Germany", region: "Europe" },
    { country: "South Korea", region: "Asia" },
    { country: "Australia", region: "Oceania" }
  ];

  const countries = [...new Set(distributors.map(d => d.country))];
  const regions = [...new Set(distributors.map(d => d.region))];

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-header">
              <h2>Locate a Distributor</h2>
          <p>Find certified DSQUARED distributors in your area</p>
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

export default FindDistributorSection2;
