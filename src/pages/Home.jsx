import React from 'react';
import Hero from '../components/Home_page/Hero';
import Section2 from '../components/Home_page/Section2';
import Section3 from '../components/Home_page/Section3';
import Section4 from '../components/Home_page/Section4';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;
