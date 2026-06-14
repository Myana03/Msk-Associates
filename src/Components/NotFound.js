import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center text-center px-6">
      <p className="text-yellow-400 font-extrabold text-2xl tracking-widest mb-6">MSKASSOCIATES</p>
      <h1 className="text-8xl font-extrabold text-white font-serif mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-2">Page not found</p>
      <p className="text-gray-500 text-sm mb-10">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
