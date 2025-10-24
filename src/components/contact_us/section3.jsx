import React, { useState, useRef, useEffect } from 'react';
import './section3.css';

const ContactSection3 = () => {
  const mapRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Location markers data
  const locations = [
    { id: 1, name: 'Canada', x: 15, y: 25, country: 'Canada' },
    { id: 2, name: 'United States', x: 12, y: 35, country: 'United States' },
    { id: 3, name: 'United Kingdom', x: 48, y: 20, country: 'United Kingdom' },
    { id: 4, name: 'France', x: 50, y: 25, country: 'France' },
    { id: 5, name: 'Germany', x: 52, y: 22, country: 'Germany' },
    { id: 6, name: 'Ukraine', x: 55, y: 20, country: 'Ukraine' },
    { id: 7, name: 'Chile', x: 25, y: 75, country: 'Chile' }
  ];

  const handleZoom = (e) => {
    if (e.ctrlKey && e.deltaY) {
      e.preventDefault();
      const map = mapRef.current;
      if (map) {
        const rect = map.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const scale = e.deltaY > 0 ? 0.9 : 1.1;
        const currentTransform = map.style.transform || 'scale(1)';
        const currentScale = parseFloat(currentTransform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        const newScale = Math.max(0.5, Math.min(2, currentScale * scale));
        
        map.style.transform = `scale(${newScale})`;
        setIsZoomed(newScale !== 1);
      }
    }
  };

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.addEventListener('wheel', handleZoom, { passive: false });
      return () => map.removeEventListener('wheel', handleZoom);
    }
  }, []);

  return (
    <div className="contact-section3">
      <div className="map-container">
        <div className="map-header">
          <h2>Find DSQUARED Near You</h2>
          <p>Locate certified installers and distributors worldwide</p>
        </div>
        
        <div className="world-map" ref={mapRef}>
          {/* Real HTML Map */}
          <div className="map-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459417!3d40.71305197932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1625097654701!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DSQUARED Global Locations Map"
            ></iframe>
          </div>

          {/* Custom Map Overlay with Markers */}
          <div className="map-overlay">
            {locations.map((location) => (
              <div
                key={location.id}
                className="location-marker"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`
                }}
                title={location.country}
              >
                <div className="marker-dot"></div>
                <div className="marker-pulse"></div>
                <div className="marker-tooltip">
                  <h4>{location.country}</h4>
                  <p>DSQUARED Certified</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Instructions */}
          <div className="zoom-instructions">
            <p>Interactive Map - Scroll to zoom, drag to pan</p>
          </div>
        </div>

        {/* Location List */}
        <div className="location-list">
          <h3>Our Global Locations</h3>
          <div className="locations-grid">
            {locations.map((location) => (
              <div key={location.id} className="location-item">
                <div className="location-icon">📍</div>
                <div className="location-info">
                  <h4>{location.country}</h4>
                  <p>Certified Distributors Available</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection3;
