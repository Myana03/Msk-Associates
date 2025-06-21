import React from 'react';
import '../Css/HeroBanner.css';

function HeroBanner() {
  return (
    <section className="hero-banner" id="home">
      <div className="hero-content">
        <h1>Reliable Structural Engineering</h1>
        <p>
          From concept to completion, we deliver safe and innovative solutions for your
          projects.
        </p>
        <a href="#contact" className="cta-btn">Get in Touch</a>
      </div>
      <div className="hero-image">
        <img
          src="/Images/pexels-pavel-danilyuk-7937317.jpg"
          alt="Structural engineering illustration"
        />
      </div>
    </section>
  );
}

export default HeroBanner;
