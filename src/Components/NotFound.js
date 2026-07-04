import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="fixed inset-0 bg-[#20241F] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#B33A2E] font-bold text-xl tracking-[0.14em] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MSKASSOCIATES</p>
      <h1 className="text-8xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>404</h1>
      <p className="text-xl text-white/60 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Page not found</p>
      <p className="text-white/35 text-sm mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="inline-block bg-[#B33A2E] text-white font-semibold py-3 px-8 rounded hover:bg-[#8F2E24] transition-colors"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
