import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 w-11 h-11 bg-gray-800 hover:bg-yellow-400 text-gray-400 hover:text-gray-900 border border-gray-700 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <HiArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
