import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold font-serif text-white mb-4">
          Ready to Build the Future?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Let's turn your vision into a landmark. From initial concept to final
          construction, we are the partners you need for a seamless, successful
          project.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-in-out"
        >
          Start Your Project Today
        </a>
      </div>
    </div>
  );
};

export default CallToAction; 