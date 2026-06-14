import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiOutlineX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { getContactPhone } from '../config/contact';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const inputClass = `
  block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400
  bg-gray-100 border border-gray-200 rounded-lg
  focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200
`.trim();

const EnquiryModal = ({ isOpen, onClose }) => {
  const contactPhone = getContactPhone();
  const formRef = useRef();
  const [emailStatus, setEmailStatus] = useState(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const getFormData = () => {
    const formData = new FormData(formRef.current);
    return {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      phone: formData.get('phone').trim(),
      message: formData.get('message').trim(),
    };
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formRef.current.reportValidity()) return;
    if (!contactPhone.raw) return;

    const { name, email, phone, message } = getFormData();
    const text = `Hello MSKAssociates,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/${contactPhone.raw}?text=${encodeURIComponent(text)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) window.location.href = whatsappUrl;
    else window.open(whatsappUrl, '_blank');
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current.reportValidity()) return;

    const { name, email, phone, message } = getFormData();
    setEmailStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          message,
          time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        },
        EMAILJS_PUBLIC_KEY
      );
      setEmailStatus('success');
      formRef.current.reset();
      setTimeout(() => { setEmailStatus(null); onClose(); }, 3000);
    } catch {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus(null), 5000);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      style={{ backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white z-10 shadow-2xl rounded-2xl overflow-hidden">

        {/* Yellow top accent bar */}
        <div className="h-1 w-full bg-yellow-400" />

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-7 pb-2">
          <div>
            <p className="text-xs tracking-widest text-yellow-500 uppercase font-semibold mb-1">MSKAssociates</p>
            <h2 className="text-2xl font-bold text-gray-900 font-serif">Start Your Project</h2>
            <p className="text-gray-400 text-sm mt-1">We'll get back to you within 24 hours.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors mt-1">
            <HiOutlineX className="w-5 h-5" />
          </button>
        </div>

        {/* Status Messages */}
        {emailStatus === 'success' && (
          <div className="mx-8 mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            ✅ Message sent! We'll get back to you soon.
          </div>
        )}
        {emailStatus === 'error' && (
          <div className="mx-8 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            ❌ Failed to send. Please try WhatsApp instead.
          </div>
        )}

        {/* Form */}
        <form ref={formRef} className="px-8 pt-5 pb-8 space-y-3">
          <input
            type="text" name="name" required
            placeholder="Full Name"
            className={inputClass}
          />
          <input
            type="tel" name="phone" required
            placeholder="Phone Number"
            className={inputClass}
          />
          <input
            type="email" name="email"
            placeholder="Email Address (Optional)"
            className={inputClass}
          />
          <textarea
            name="message" rows="3" required
            placeholder="Tell us about your project"
            className={inputClass}
            style={{ resize: 'none' }}
          />

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={handleEmail}
              disabled={emailStatus === 'sending'}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <HiOutlineMail className="w-4 h-4" />
              {emailStatus === 'sending' ? 'Sending...' : 'Send Email'}
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 pt-1">Hanamkonda, Telangana · mskassociates.com</p>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryModal;
