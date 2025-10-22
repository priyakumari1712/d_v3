import React from "react";
import "./AboutSection4.css";
import Button from "../Button";

function AboutSection4() {
  return (
    <section className="about-us">
      <div className="about-us__background">
        {/* <div className="about-us__diagonal-stripe"></div>
        <div className="about-us__reflective-surface"></div> */}
      </div>

      <div className="about-us__container">
        <div className="about-us__content">
          <h1 className="about-us__title">Meet Our Finest</h1>
          <p className="about-us__tagline">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            incidunt commodi corporis voluptatibus saepe natus error, sint rerum
            mollitia eius!
          </p>
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection4;
