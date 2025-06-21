import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-sm mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} MSK Associates. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Designed with Precision, Built with Passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
