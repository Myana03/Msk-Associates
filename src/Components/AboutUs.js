import React from 'react';
import '../Css/AboutUs.css';  // Create a new CSS file for About Us styles

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We are <strong>MSK Associates</strong>, a structural engineering firm with over a decade of expertise in delivering innovative and reliable solutions. Our commitment to quality and safety is evident in every project we take on. Whether it’s a residential, commercial, or industrial project, we ensure that our designs are built to last, backed by careful planning and thorough execution.
        </p>
        <p>
          Our team of dedicated engineers, planners, and builders works together to create sustainable and cost-effective designs, contributing to a safer, stronger built environment.
        </p>
      </div>
      <div className="engineer-image">
        <img
          src="/Images/ricardo-gomez-angel-jYNvXKTUYvs-unsplash.jpg"  // Replace with actual image path
          alt="Engineer at Work"
          className="engineer-image-box"
        />
      </div>
    </section>
  );
}

export default AboutUs;
