import React, { useEffect, useState } from 'react';
import '../Css/HeroBanner.css';

function HeroBanner() {
  const images = [
    '/Images/pexels-pavel-danilyuk-7937315.jpg',
    '/Images/pexels-pavel-danilyuk-7937317.jpg',
    '/Images/pexels-pavel-danilyuk-7937319.jpg',
    '/Images/jason-briscoe-AQl-J19ocWE-unsplash.jpg'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-banner" id="home">
      <div className="hero-content">
        <h1>Reliable Structural Engineering</h1>
        <p>
          From concept to completion, we deliver safe and innovative solutions for your
          projects.
        </p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
      <div className="hero-image-slider">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={idx === current ? 'active' : ''}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;
