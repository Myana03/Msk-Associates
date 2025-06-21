import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-yellow-400">
      <div className="max-w-4xl mx-auto text-center py-16 px-6" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif">
          Ready to Build the Future?
        </h2>
        <p className="text-lg text-gray-800 mt-4 mb-8 max-w-2xl mx-auto">
          Let's turn your vision into a landmark. We are the partners you need for a seamless, successful project.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transform transition-all duration-300"
        >
          Start Your Project Today
        </a>
      </div>
    </div>
  );
};

export default CallToAction; 