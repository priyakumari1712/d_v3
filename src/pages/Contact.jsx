import React from 'react';
import ContactHero from '../components/contact_us/hero';
import ContactSection2 from '../components/contact_us/section2';
import ContactSection3 from '../components/contact_us/section3';
import ContactSection4 from '../components/contact_us/section4';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactSection2 />
      <ContactSection3 />
      <ContactSection4 />
      <Footer />
    </div>
  );
};

export default Contact;
