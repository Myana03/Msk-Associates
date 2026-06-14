import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { getContactPhone } from '../config/contact';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const contactPhone = getContactPhone();
  const formRef = useRef();
  const [emailStatus, setEmailStatus] = useState(null); // 'sending' | 'success' | 'error'

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
    const text = `Hello MSK Associates,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/${contactPhone.raw}?text=${encodeURIComponent(text)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
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
      setTimeout(() => setEmailStatus(null), 5000);
    } catch {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus(null), 5000);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="mt-2 text-5xl font-extrabold text-white sm:text-6xl font-serif">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-full" data-aos="fade-right" data-aos-delay="100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              title="MSK Associates Location"
              className="filter grayscale-100 contrast-120"
            ></iframe>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">Send Us a Message</h3>

            {emailStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-sm">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {emailStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-sm">
                ❌ Failed to send email. Please try WhatsApp or call us directly.
              </div>
            )}

            <form ref={formRef} className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input type="text" name="name" id="name" autoComplete="name" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Email Address (Optional)" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Phone Number" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Message"></textarea>
              </div>

              {/* Two Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp
                </button>
                <button
                  onClick={handleEmail}
                  disabled={emailStatus === 'sending'}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md shadow-sm text-base font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <HiOutlineMail className="w-5 h-5" />
                  {emailStatus === 'sending' ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Contact Details */}
          <div className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">Contact Info</h3>
            <div className="space-y-6 text-lg text-gray-300">
              <div className="flex items-center">
                <HiOutlineMail className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <strong className="text-gray-100">Email</strong>
                  <a href="mailto:designs@mskassociates.com" className="block text-yellow-400 hover:underline">
                    designs@mskassociates.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <HiOutlinePhone className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <strong className="text-gray-100">Phone</strong>
                  <a href={contactPhone.tel} className="block text-yellow-400 hover:underline">
                    {contactPhone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <HiOutlineLocationMarker className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <strong className="text-gray-100">Address</strong>
                  <p>Pranay Marg, Waddepally, Phase 1, Teachers Colony, Hanamkonda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
