import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-sm mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#home" className="text-base text-gray-400 hover:text-white">Home</a>
          <a href="#services" className="text-base text-gray-400 hover:text-white">Services</a>
          <a href="#projects" className="text-base text-gray-400 hover:text-white">Projects</a>
          <a href="#contact" className="text-base text-gray-400 hover:text-white">Contact</a>
        </div>
        <div className="text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} MSK Associates. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Designed with Precision, Built with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
