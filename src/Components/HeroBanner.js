import React, { useEffect, useState } from 'react';

function HeroBanner() {
  const images = [
    '/Images/OnlineImages/pexels-pavel-danilyuk-7937319.jpg',
    '/Images/OnlineImages/gabrielle-claro-5X5Q7tWjVsc-unsplash.jpg',
    '/Images/OnlineImages/jason-briscoe-AQl-J19ocWE-unsplash.jpg',
    '/Images/OnlineImages/michael-savin-vCp9o6WqSX8-unsplash.jpg'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
            Reliable Structural Engineering
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            From concept to completion, we deliver safe and innovative solutions for your projects.
          </p>
          <a href="#contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg">
            Get in Touch
          </a>
        </div>
        {/* Right Column: Image Slider */}
        <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
