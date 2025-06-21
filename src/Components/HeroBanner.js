import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const HeroBanner = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/Images/OnlineImages/tr-n-h-u-tung-_-V8Ar9fXWE-unsplash.jpg',
          speed: -20,
        },
      ]}
      className="h-[600px] md:h-screen"
    >
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-40">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold font-serif leading-tight"
            data-aos="fade-down"
          >
            Engineering the Future, <br /> Building with Vision.
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your vision, engineered with precision. We are your partners in
            building the future.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-in-out"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default HeroBanner;
