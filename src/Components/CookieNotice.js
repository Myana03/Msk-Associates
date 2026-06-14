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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-400 text-center sm:text-left">
        We use cookies and collect enquiry data to improve your experience. By using this site you agree to our{' '}
        <a href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</a>.
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 bg-orange-700 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
      >
        Got it
      </button>
    </div>
  );
};

export default CookieNotice;
