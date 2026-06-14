import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { getContactPhone } from '../config/contact';

const WhatsAppFloat = () => {
  const contactPhone = getContactPhone();
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!contactPhone.raw) return null;

  const handleClick = () => {
    const text = 'Hello MSKAssociates, I would like to enquire about your services.';
    const url = `https://wa.me/${contactPhone.raw}?text=${encodeURIComponent(text)}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) window.location.href = url;
    else window.open(url, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      {/* Tooltip — fades after initial pulse */}
      {pulse && (
        <div className="bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />

        {/* Pulse ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
