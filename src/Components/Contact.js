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
  const [emailStatus, setEmailStatus] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [whatsappHint, setWhatsappHint] = useState('');
  const [emailHint, setEmailHint] = useState('');

  const hasMessage = message.trim().length > 0;
  const whatsappEnabled = phone.trim().length >= 10 && hasMessage;
  const emailEnabled = email.trim().includes('@') && hasMessage;

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
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
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
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-5xl font-serif">
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
              style={{ border: 0, minHeight: '250px' }}
              allowFullScreen=""
              loading="lazy"
              title="MSKAssociates Location"
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

            <form ref={formRef} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-gray-400 font-medium mb-1 block">Full Name <span className="text-red-400">*</span></label>
                <input type="text" name="name" id="name" autoComplete="name" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs text-gray-400 font-medium mb-1 block">Phone Number <span className="text-red-400">*</span> <span className="text-gray-500 font-normal">(required for WhatsApp)</span></label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Phone Number"
                  value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-gray-400 font-medium mb-1 block">Email Address <span className="text-gray-500 font-normal">(required for Send Email)</span></label>
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Email Address"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-gray-400 font-medium mb-1 block">Message <span className="text-red-400">*</span></label>
                <textarea id="message" name="message" rows="4" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              {/* Two Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <button
                    onClick={handleWhatsApp}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-base font-medium text-white transition-colors ${whatsappEnabled ? 'bg-green-500 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'}`}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </button>
                  {whatsappHint && <p className="text-xs text-red-400 mt-1 text-center">{whatsappHint}</p>}
                </div>
                <div>
                  <button
                    onClick={handleEmail}
                    disabled={emailStatus === 'sending'}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-base font-medium transition-colors disabled:cursor-not-allowed ${emailEnabled ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-yellow-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    <HiOutlineMail className="w-5 h-5" />
                    {emailStatus === 'sending' ? 'Sending...' : 'Send Email'}
                  </button>
                  {emailHint && <p className="text-xs text-red-400 mt-1 text-center">{emailHint}</p>}
                </div>
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
