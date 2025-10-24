import React, { useState } from 'react';
import './FindInstaller.css';
import FindInstallerHero from '../components/FindInstaller/hero';
import FindInstallerSection2 from '../components/FindInstaller/section2';
import FindInstallerSection3 from '../components/FindInstaller/section3';
import FindInstallerSection4 from '../components/FindInstaller/section4';
import Footer from '../components/Footer/Footer';

const FindInstaller = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;

  // Sample installer data
  const installers = [
    {
      id: 1,
      name: "Elite Auto Installers",
      country: "United States",
      region: "North America",
      city: "Los Angeles",
      state: "California",
      phone: "+1 (555) 123-4567",
      email: "info@eliteautoinstallers.com",
      website: "www.eliteautoinstallers.com",
      services: ["C.QUARTZ Installation", "PPF Application", "Paint Correction"],
      rating: 4.9,
      certified: true
    },
    {
      id: 2,
      name: "Premium Car Care",
      country: "Canada",
      region: "North America", 
      city: "Toronto",
      state: "Ontario",
      phone: "+1 (416) 555-0123",
      email: "contact@premiumcarcare.ca",
      website: "www.premiumcarcare.ca",
      services: ["D.QUARTZ Coating", "Ceramic Protection", "Paint Enhancement"],
      rating: 4.8,
      certified: true
    },
    {
      id: 3,
      name: "Auto Shield Pro",
      country: "United Kingdom",
      region: "Europe",
      city: "London",
      state: "England",
      phone: "+44 20 7123 4567",
      email: "info@autoshieldpro.co.uk",
      website: "www.autoshieldpro.co.uk",
      services: ["Full PPF Kit", "Coating Application", "Maintenance"],
      rating: 4.7,
      certified: true
    },
    {
      id: 4,
      name: "German Auto Care",
      country: "Germany",
      region: "Europe",
      city: "Munich",
      state: "Bavaria",
      phone: "+49 89 12345678",
      email: "kontakt@germanautocare.de",
      website: "www.germanautocare.de",
      services: ["C.QUARTZ Pro", "Paint Protection", "Detailing Services"],
      rating: 4.6,
      certified: true
    },
    {
      id: 5,
      name: "Asian Auto Installers",
      country: "South Korea",
      region: "Asia",
      city: "Seoul",
      state: "Seoul",
      phone: "+82 2 1234 5678",
      email: "info@asianautoinstallers.kr",
      website: "www.asianautoinstallers.kr",
      services: ["Complete Protection", "Coating Services", "PPF Installation"],
      rating: 4.9,
      certified: true
    },
    {
      id: 6,
      name: "Australian Auto Pro",
      country: "Australia",
      region: "Oceania",
      city: "Sydney",
      state: "NSW",
      phone: "+61 2 9876 5432",
      email: "hello@ausautopro.com.au",
      website: "www.ausautopro.com.au",
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
      name: "Asian Premium Installers",
      country: "Japan",
      region: "Asia",
      city: "Tokyo",
      state: "Tokyo",
      phone: "+81 3 1234 5678",
      email: "info@asianpremiuminstallers.jp",
      website: "www.asianpremiuminstallers.jp",
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
      name: "Oceanic Auto Installers",
      country: "New Zealand",
      region: "Oceania",
      city: "Auckland",
      state: "Auckland",
      phone: "+64 9 123 4567",
      email: "info@oceanicautoinstallers.nz",
      website: "www.oceanicautoinstallers.nz",
      services: ["Paint Correction", "Ceramic Coating", "PPF Application"],
      rating: 4.6,
      certified: true
    }
  ];

  const countries = [...new Set(installers.map(d => d.country))];
  const regions = [...new Set(installers.map(d => d.region))];

  const filteredInstallers = installers.filter(installer => {
    const matchesSearch = installer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         installer.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || installer.country === selectedCountry;
    const matchesRegion = !selectedRegion || installer.region === selectedRegion;
    
    return matchesSearch && matchesCountry && matchesRegion;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredInstallers.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedInstallers = filteredInstallers.slice(startIndex, endIndex);

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
    <div className="find-installer-page">
      {/* Hero Section */}
      <FindInstallerHero />

      {/* Section 2 - Search & Filter */}
      <FindInstallerSection2 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        countries={countries}
        regions={regions}
      />

      {/* Section 3 - Results */}
      <FindInstallerSection3 
        installers={installers}
        filteredInstallers={paginatedInstallers}
      />

      {/* Section 4 - Pagination */}
      <FindInstallerSection4
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalResults={filteredInstallers.length}
        resultsPerPage={resultsPerPage}
      />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Become an Installer</h2>
            <p>
              Join our global network of certified installers and bring 
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

export default FindInstaller;

