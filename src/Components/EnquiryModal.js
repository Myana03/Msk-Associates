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
  focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200
`.trim();

const EnquiryModal = ({ isOpen, onClose }) => {
  const contactPhone = getContactPhone();
  const formRef = useRef();
  const [emailStatus, setEmailStatus] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [whatsappHint, setWhatsappHint] = useState('');
  const [emailHint, setEmailHint] = useState('');

  const hasMessage = message.trim().length > 0;
  const whatsappEnabled = phone.trim().length >= 10 && hasMessage;
  const emailEnabled = email.trim().includes('@') && hasMessage;

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
    if (!whatsappEnabled) {
      setWhatsappHint('Please enter your phone number to use WhatsApp.');
      setTimeout(() => setWhatsappHint(''), 3000);
      return;
    }
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
    if (!emailEnabled) {
      setEmailHint('Please enter your email address to send an email.');
      setTimeout(() => setEmailHint(''), 3000);
      return;
    }
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
        <div className="h-1 w-full bg-orange-700" />

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-7 pb-2">
          <div>
            <p className="text-xs tracking-widest text-orange-600 uppercase font-semibold mb-1">MSKAssociates</p>
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
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="name" required placeholder="Full Name" className={inputClass} />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Phone Number <span className="text-red-500">*</span> <span className="text-gray-400 font-normal">(required for WhatsApp)</span></label>
            <input
              type="tel" name="phone" required
              placeholder="Phone Number"
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Email Address <span className="text-gray-400 font-normal">(required for Send Email)</span></label>
            <input
              type="email" name="email"
              placeholder="Email Address"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 block">Message <span className="text-red-500">*</span></label>
            <textarea name="message" rows="3" required placeholder="Tell us about your project" className={inputClass} style={{ resize: 'none' }} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <button
                onClick={handleWhatsApp}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white transition-colors duration-200 ${whatsappEnabled ? 'bg-green-500 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'}`}
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </button>
              {whatsappHint && <p className="text-xs text-red-500 mt-1 text-center">{whatsappHint}</p>}
            </div>
            <div>
              <button
                onClick={handleEmail}
                disabled={emailStatus === 'sending'}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed ${emailEnabled ? 'bg-orange-700 hover:bg-orange-800 text-white' : 'bg-orange-200 text-gray-400 cursor-not-allowed'}`}
              >
                <HiOutlineMail className="w-4 h-4" />
                {emailStatus === 'sending' ? 'Sending...' : 'Send Email'}
              </button>
              {emailHint && <p className="text-xs text-red-500 mt-1 text-center">{emailHint}</p>}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 pt-1">Hanamakonda, Telangana · mskassociates.com</p>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryModal;
