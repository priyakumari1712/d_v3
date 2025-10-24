import React, { useState } from 'react';
import './FindDistributor.css';
import FindDistributorHero from '../components/FindDistributor/hero';
import FindDistributorSection2 from '../components/FindDistributor/section2';
import FindDistributorSection3 from '../components/FindDistributor/section3';
import FindDistributorSection4 from '../components/FindDistributor/section4';
import Footer from '../components/Footer/Footer';

const FindDistributor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;

  // Sample distributor data
  const distributors = [
    {
      id: 1,
      name: "AutoCare Solutions",
      country: "United States",
      region: "North America",
      city: "Los Angeles",
      state: "California",
      phone: "+1 (555) 123-4567",
      email: "info@autocaresolutions.com",
      website: "www.autocaresolutions.com",
      services: ["C.QUARTZ Installation", "PPF Application", "Paint Correction"],
      rating: 4.8,
      certified: true
    },
    {
      id: 2,
      name: "Premium Detailing Co.",
      country: "Canada",
      region: "North America", 
      city: "Toronto",
      state: "Ontario",
      phone: "+1 (416) 555-0123",
      email: "contact@premiumdetailing.ca",
      website: "www.premiumdetailing.ca",
      services: ["D.QUARTZ Coating", "Ceramic Protection", "Paint Enhancement"],
      rating: 4.9,
      certified: true
    },
    {
      id: 3,
      name: "Elite Auto Protection",
      country: "United Kingdom",
      region: "Europe",
      city: "London",
      state: "England",
      phone: "+44 20 7123 4567",
      email: "info@eliteautoprotection.co.uk",
      website: "www.eliteautoprotection.co.uk",
      services: ["Full PPF Kit", "Coating Application", "Maintenance"],
      rating: 4.7,
      certified: true
    },
    {
      id: 4,
      name: "AutoShield Germany",
      country: "Germany",
      region: "Europe",
      city: "Munich",
      state: "Bavaria",
      phone: "+49 89 12345678",
      email: "kontakt@autoshield-de.com",
      website: "www.autoshield-de.com",
      services: ["C.QUARTZ Pro", "Paint Protection", "Detailing Services"],
      rating: 4.6,
      certified: true
    },
    {
      id: 5,
      name: "Asia Auto Care",
      country: "South Korea",
      region: "Asia",
      city: "Seoul",
      state: "Seoul",
      phone: "+82 2 1234 5678",
      email: "info@asiaautocare.kr",
      website: "www.asiaautocare.kr",
      services: ["Complete Protection", "Coating Services", "PPF Installation"],
      rating: 4.9,
      certified: true
    },
    {
      id: 6,
      name: "Australian Detailing Pro",
      country: "Australia",
      region: "Oceania",
      city: "Sydney",
      state: "NSW",
      phone: "+61 2 9876 5432",
      email: "hello@ausdetailingpro.com.au",
      website: "www.ausdetailingpro.com.au",
      services: ["Ceramic Coating", "Paint Correction", "Maintenance"],
      rating: 4.8,
      certified: true
    },
    {
      id: 7,
      name: "European Auto Shield",
      country: "France",
      region: "Europe",
      city: "Paris",
      state: "Île-de-France",
      phone: "+33 1 23 45 67 89",
      email: "contact@europeanautoshield.fr",
      website: "www.europeanautoshield.fr",
      services: ["C.QUARTZ Pro", "PPF Installation", "Paint Protection"],
      rating: 4.9,
      certified: true
    },
    {
      id: 8,
      name: "Asian Premium Care",
      country: "Japan",
      region: "Asia",
      city: "Tokyo",
      state: "Tokyo",
      phone: "+81 3 1234 5678",
      email: "info@asianpremiumcare.jp",
      website: "www.asianpremiumcare.jp",
      services: ["D.QUARTZ Coating", "Ceramic Protection", "Detailing"],
      rating: 4.7,
      certified: true
    },
    {
      id: 9,
      name: "North American Elite",
      country: "Canada",
      region: "North America",
      city: "Vancouver",
      state: "British Columbia",
      phone: "+1 (604) 555-0123",
      email: "hello@naelite.ca",
      website: "www.naelite.ca",
      services: ["Complete Protection", "Coating Services", "Maintenance"],
      rating: 4.8,
      certified: true
    },
    {
      id: 10,
      name: "Oceanic Auto Care",
      country: "New Zealand",
      region: "Oceania",
      city: "Auckland",
      state: "Auckland",
      phone: "+64 9 123 4567",
      email: "info@oceanicautocare.nz",
      website: "www.oceanicautocare.nz",
      services: ["Paint Correction", "Ceramic Coating", "PPF Application"],
      rating: 4.6,
      certified: true
    }
  ];

  const countries = [...new Set(distributors.map(d => d.country))];
  const regions = [...new Set(distributors.map(d => d.region))];

  const filteredDistributors = distributors.filter(distributor => {
    const matchesSearch = distributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         distributor.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || distributor.country === selectedCountry;
    const matchesRegion = !selectedRegion || distributor.region === selectedRegion;
    
    return matchesSearch && matchesCountry && matchesRegion;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredDistributors.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedDistributors = filteredDistributors.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCountry, selectedRegion]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of results section
    const resultsSection = document.querySelector('.results-section');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="find-distributor-page">
      {/* Hero Section */}
      <FindDistributorHero />

      {/* Section 2 - Search & Filter */}
      <FindDistributorSection2 />

      {/* Section 3 - Results */}
      <FindDistributorSection3 
        distributors={distributors}
        filteredDistributors={paginatedDistributors}
      />

      {/* Section 4 - Pagination */}
      <FindDistributorSection4
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalResults={filteredDistributors.length}
        resultsPerPage={resultsPerPage}
      />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Become a Distributor</h2>
            <p>
              Join our global network of certified distributors and bring 
              DSQUARED's premium products to your market.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Apply Now</button>
              <button className="cta-btn secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindDistributor;
