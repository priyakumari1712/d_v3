import React from "react";
import "./AboutSection2.css";
import wellcome from "/wellcome.svg";

function AboutSection2() {
  return (
    <section className="section2">
      <div className="section2__container">
        <div className="section2__content">
          <img src={wellcome} alt="" />

          <h2 className="section2__tagline">
            THE TECH LEADER IN AUTOMOTIVE DETAILING
          </h2>

          <p className="section2__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            magni eius quis. Repudiandae sit odio rerum voluptatum tempore,
            nobis iusto dolorum illum ullam commodi fugiat similique numquam
            consequuntur maiores ab consequatur ipsam quasi labore in. Harum,
            obcaecati. Corporis asperiores quas doloremque suscipit et vitae
            sunt eveniet voluptatibus? Incidunt ducimus nesciunt eligendi
            obcaecati autem reprehenderit consequatur hic quaerat voluptatibus
            maiores praesentium consectetur aspernatur nobis pariatur, ad
            necessitatibus dignissimos, rem facere atque! Harum quaerat, minus
            suscipit ut ratione explicabo consectetur odit ex odio velit quia
            pariatur, ab, tempore quam id ullam esse libero hic maxime. Earum ex
            distinctio repellendus libero. Aliquid, ipsam?
          </p>

          
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
