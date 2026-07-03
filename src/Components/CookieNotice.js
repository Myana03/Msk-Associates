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
      style={{ backgroundColor: '#f7f4ed', borderTop: '1px solid #eceae4', fontFamily: 'Figtree, sans-serif' }}
    >
      <p className="text-sm text-center sm:text-left" style={{ color: '#5f5f5d' }}>
        We use cookies and collect enquiry data to improve your experience. By using this site you agree to our{' '}
        <a href="/privacy" className="underline" style={{ color: '#1c1c1c' }}>Privacy Policy</a>.
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 text-sm px-5 py-2 transition-opacity hover:opacity-80"
        style={{
          backgroundColor: '#1c1c1c', color: '#fcfbf8', borderRadius: '6px',
          boxShadow: 'rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px',
        }}
      >
        Got it
      </button>
    </div>
  );
};

export default CookieNotice;
