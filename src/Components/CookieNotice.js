import React, { useState, useEffect } from 'react';

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-accepted');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ backgroundColor: '#20241F', fontFamily: 'Inter, sans-serif' }}
    >
      <p className="text-sm text-center sm:text-left" style={{ color: '#a09d96' }}>
        We use cookies and collect enquiry data to improve your experience. By using this site you agree to our{' '}
        <a href="/privacy" className="hover:underline" style={{ color: '#B33A2E' }}>Privacy Policy</a>.
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 text-sm font-medium px-5 py-2 transition-colors"
        style={{ backgroundColor: '#B33A2E', color: '#ffffff', borderRadius: '8px' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8F2E24'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#B33A2E'; }}
      >
        Got it
      </button>
    </div>
  );
};

export default CookieNotice;
