import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from 'react-icons/hi';
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
        <div className="mb-12" data-aos="fade-up">
          <p className="uppercase tracking-widest font-semibold mb-4" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
            Contact
          </p>
          <h2 className="font-extrabold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1 }}>
            Send Us a Message
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Google Map */}
          <div style={{ borderRadius: '4px', overflow: 'hidden', minHeight: '420px' }} data-aos="fade-right" data-aos-delay="100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
              width="100%" height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block' }}
              allowFullScreen="" loading="lazy" title="MSKAssociates Location"
            />
          </div>

          {/* Column 2: Contact Form — open, no card wrapper */}
          <div data-aos="fade-up" data-aos-delay="200" style={{ paddingTop: '0.5rem' }}>

            {/* Terracotta top rule */}
            <div style={{ width: '48px', height: '3px', backgroundColor: '#C1440E', marginBottom: '2.5rem' }} />

            {emailStatus === 'success' && (
              <div style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '3px solid #16a34a' }}>
                <p style={{ color: '#15803d', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                  Message sent — we'll be in touch within 1 business day.
                </p>
              </div>
            )}
            {emailStatus === 'error' && (
              <div style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '3px solid #C1440E' }}>
                <p style={{ color: '#C1440E', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                  Failed to send — please WhatsApp or call us directly.
                </p>
              </div>
            )}

            <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { id: 'name', label: 'Full Name', type: 'text', hint: null, required: true, autoComplete: 'name', placeholder: 'Your full name' },
                { id: 'phone', label: 'Phone Number', type: 'tel', hint: 'for WhatsApp', required: true, autoComplete: 'tel', placeholder: '+91 98765 43210' },
                { id: 'email', label: 'Email Address', type: 'email', hint: 'for Send Email', required: false, autoComplete: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.id} style={{ position: 'relative' }}>
                  <label htmlFor={field.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.62rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#0F2040', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {field.label}
                    </span>
                    {field.required && <span style={{ color: '#C1440E', fontSize: '0.75rem' }}>*</span>}
                    {field.hint && <span style={{ fontSize: '0.6rem', color: '#aaa', fontFamily: 'Inter, sans-serif' }}>— {field.hint}</span>}
                  </label>
                  <input
                    type={field.type} name={field.id} id={field.id}
                    autoComplete={field.autoComplete} required={field.required}
                    placeholder={field.placeholder}
                    onChange={field.id === 'phone' ? e => setPhone(e.target.value) : field.id === 'email' ? e => setEmail(e.target.value) : undefined}
                    value={field.id === 'phone' ? phone : field.id === 'email' ? email : undefined}
                    style={{
                      display: 'block', width: '100%', padding: '0.6rem 0',
                      background: 'transparent', border: 'none',
                      borderBottom: '1px solid #c8c4bc',
                      fontSize: '1rem', color: '#0F2040',
                      fontFamily: 'Inter, sans-serif', outline: 'none',
                      boxSizing: 'border-box', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderBottomColor = '#C1440E'}
                    onBlur={e => e.target.style.borderBottomColor = '#c8c4bc'}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#0F2040', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Message</span>
                  <span style={{ color: '#C1440E', fontSize: '0.75rem' }}>*</span>
                </label>
                <textarea
                  id="message" name="message" rows="4" required
                  placeholder="Describe your project or query…"
                  value={message} onChange={e => setMessage(e.target.value)}
                  style={{
                    display: 'block', width: '100%', padding: '0.6rem 0',
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid #c8c4bc',
                    fontSize: '1rem', color: '#0F2040',
                    fontFamily: 'Inter, sans-serif', outline: 'none',
                    resize: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderBottomColor = '#C1440E'}
                  onBlur={e => e.target.style.borderBottomColor = '#c8c4bc'}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <button onClick={handleWhatsApp} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', padding: '0.8rem 1rem', borderRadius: '4px', border: 'none',
                    fontSize: '0.88rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                    cursor: whatsappEnabled ? 'pointer' : 'not-allowed',
                    backgroundColor: whatsappEnabled ? '#25D366' : '#e8e5df',
                    color: whatsappEnabled ? '#fff' : '#aaa',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}>
                    <FaWhatsapp size={15} /> WhatsApp
                  </button>
                  {whatsappHint && <p style={{ fontSize: '0.68rem', color: '#C1440E', marginTop: '5px' }}>{whatsappHint}</p>}
                </div>
                <div style={{ flex: 1 }}>
                  <button onClick={handleEmail} disabled={emailStatus === 'sending'} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '8px', padding: '0.8rem 1rem', borderRadius: '4px', border: 'none',
                    fontSize: '0.88rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
                    cursor: emailEnabled ? 'pointer' : 'not-allowed',
                    backgroundColor: emailEnabled ? '#C1440E' : '#e8e5df',
                    color: emailEnabled ? '#fff' : '#aaa',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}>
                    <HiOutlineMail size={15} />
                    {emailStatus === 'sending' ? 'Sending…' : 'Send Email'}
                  </button>
                  {emailHint && <p style={{ fontSize: '0.68rem', color: '#C1440E', marginTop: '5px' }}>{emailHint}</p>}
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
