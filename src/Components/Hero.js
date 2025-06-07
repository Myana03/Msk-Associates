import React, { useState, useEffect } from 'react';
import '../Css/Hero.css';

const images = [
  '/images/pexels-pavel-danilyuk-7937319.jpg',
  '/images/pexels-pavel-danilyuk-7937317.jpg',
  '/images/pexels-pavel-danilyuk-7937315.jpg',
  '/images/jr-harris-T72ooC45UTE-unsplash.jpg',
  '/images/anita-rahalzadeh-fDPgiTlceKc-unsplash.jpg'
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-image-container">
        <img
          src={images[currentImage]} // Display the current image
          alt="Concept of Structural Engineering"
          className="hero-image"
        />
      </div>

      {/* Using the new About Us component */}

    </section>
  );
}

export default Hero;
