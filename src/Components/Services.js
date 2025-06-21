import React from 'react';
import '../Css/Services.css'; // CSS file for styling the cards

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Services</h2>
      <div className="services-container">
        {/* Structural Planning Card */}
        <div className="service-card">
          <img src="/Images/OnlineImages/brett-jordan-PFr50OBMowU-unsplash.jpg" alt="Structural Planning" className="service-image" />
          <h3>Structural Planning</h3>
          <p>We offer detailed structural planning to ensure your projects are safe, sustainable, and cost-effective.</p>
        </div>

        {/* Construction Card */}
        <div className="service-card">
          <img src="Images/OnlineImages/tr-n-h-u-tung-_-V8Ar9fXWE-unsplash.jpg" alt="Construction" className="service-image" />
          <h3>Construction</h3>
          <p>Our team handles construction from ground up, ensuring timely and high-quality project delivery.</p>
        </div>

        {/* Interior Design Card */}
        <div className="service-card">
          <img src="Images/OnlineImages/jason-briscoe-AQl-J19ocWE-unsplash.jpg" alt="Interior Design" className="service-image" />
          <h3>Interior Design</h3>
          <p>We provide innovative and aesthetic interior designs to enhance the functionality and beauty of your space.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
