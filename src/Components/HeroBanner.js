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
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-blue-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight font-serif">
            Reliable Structural Engineering
          </h1>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your vision, engineered with precision. We are your partners in
            building the future.
          </p>
          <div
            className="mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#contact"
              className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-in-out"
            >
              Get in Touch
            </a>
          </div>
        </div>
        {/* Right Column: Image Slider */}
        <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left" data-aos-delay="200">
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
