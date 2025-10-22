import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection3.css";
import Button from "../Button";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const AboutSection3 = () => {
  return (
    <section className="about-section">
      <div className="cards-container">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688" alt="Since 2009" />
          <h3>Since 2009</h3>
          <p>
            We have pioneered in the field of nanotech coatings and detailing
            chemicals.
          </p>
        </div>

        <div className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661964291917-b20c2648fac6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Own Lab and Factory" />
          <h3>Own Lab and Factory</h3>
          <p>
            Constant improvement and highest quality are assured by R&D
            processes in our own laboratory.
          </p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1718057240705-e959216cce53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Trusted by the best" />
          <h3>Trusted by the best</h3>
          <p>
            We nurture a network of the best detailers meeting the highest
            standards of service.
          </p>
        </div>
      </div>

      

      <div className="stripe-bg">
      <div className="button-container">
        <Link to="/all-products" onClick={scrollToTop}>
          <Button text="VIEW ALL PRODUCTS" />
        </Link>
      </div>
      </div>
    </section>
  );
};

export default AboutSection3;
