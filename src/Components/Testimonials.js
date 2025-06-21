import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Testimonials
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          What Our Clients Say
        </p>
        <div className="mt-8 max-w-3xl mx-auto bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg p-8" data-aos="zoom-in">
          <p className="italic text-lg text-gray-300">
            Client feedback will be showcased here soon. We are proud of the
            strong relationships we build and look forward to sharing their
            stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
