import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const HERO_IMAGE = '/Images/OnlineImages/tr-n-h-u-tung-_-V8Ar9fXWE-unsplash.jpg';

const HeroBanner = () => {
  return (
    <>
      {/* Mobile fallback background image with overlay for readability */}
      <div
        className="block md:hidden relative min-h-[600px] h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="relative flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight text-white break-words"
              data-aos="fade-down"
            >
              Engineering the Future, <br /> Building with Vision.
            </h1>
            <p
              className="mt-4 text-base sm:text-lg text-gray-200 break-words"
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
      </div>
      {/* ParallaxBanner for md and up */}
      <ParallaxBanner
        layers={[
          {
            image: HERO_IMAGE,
            speed: -20,
          },
        ]}
        className="hidden md:block h-screen"
      >
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h1
              className="text-6xl font-bold font-serif leading-tight text-white"
              data-aos="fade-down"
            >
              Engineering the Future, <br /> Building with Vision.
            </h1>
            <p
              className="mt-4 text-xl text-gray-200"
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
    </>
  );
};

export default HeroBanner;
