import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left Column: Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
            About Us
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
            Pioneering with Precision
          </p>
          <p className="mt-4 text-xl text-gray-300">
            MSK Associates has been a cornerstone in the structural engineering
            and construction industry for over a decade. We are dedicated to
            delivering excellence and innovation in every project we undertake.
          </p>
          
          {/* Founder's Vision Subsection */}
          <div className="mt-10 p-6 bg-gray-900 bg-opacity-50 rounded-xl" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-yellow-400 font-serif">
                A Note from Our Founder
              </h3>
              <blockquote className="mt-4 border-l-4 border-yellow-500 pl-4 italic text-gray-300">
                <p>
                  "We built this firm on a simple promise: to transform ambitious
                  visions into tangible, enduring structures. Our commitment is to
                  precision, integrity, and the pioneering spirit that drives our
                  industry forward. We don't just build buildings; we build
                  legacies."
                </p>
              </blockquote>
              <p className="mt-4 font-semibold text-white">
                - M. S. Khan, Founder of MSK Associates
              </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="mt-10 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
          <img
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            src="/Images/OnlineImages/anita-rahalzadeh-fDPgiTlceKc-unsplash.jpg"
            alt="Our team working"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
