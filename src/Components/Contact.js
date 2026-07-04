import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { getContactPhone } from '../config/contact';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const INFO = [
  { label: 'Office',    value: 'Pranay Marg, Waddepally, Hanamakonda, Telangana 506370' },
  { label: 'Phone',     value: '+91 99890 90978' },
  { label: 'Email',     value: 'designs@mskassociates.com' },
  { label: 'Hours',     value: 'Mon – Fri, 9 AM – 6 PM' },
  { label: 'Response',  value: 'Within 1 business day' },
];

const inputStyle = {
  display: 'block', width: '100%',
  padding: '12px 0', background: 'transparent',
  border: 'none', borderBottom: '1.5px solid rgba(32,36,31,0.12)',
  fontSize: '0.95rem', color: '#20241F',
  fontFamily: 'Inter, sans-serif', outline: 'none',
  boxSizing: 'border-box', transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block', marginBottom: '6px',
  fontSize: '0.6rem', fontWeight: 500,
  color: '#565D53', textTransform: 'uppercase',
  letterSpacing: '0.13em', fontFamily: 'Inter, sans-serif',
};

export default function Contact() {
  const contactPhone = getContactPhone();
  const formRef      = useRef();
  const [phone,        setPhone]        = useState('');
  const [email,        setEmail]        = useState('');
  const [message,      setMessage]      = useState('');
  const [emailStatus,  setEmailStatus]  = useState(null);
  const [whatsappHint, setWhatsappHint] = useState('');
  const [emailHint,    setEmailHint]    = useState('');

  const hasMessage      = message.trim().length > 0;
  const whatsappEnabled = phone.trim().length >= 10 && hasMessage;
  const emailEnabled    = email.trim().includes('@') && hasMessage;

  const getFormData = () => {
    const fd = new FormData(formRef.current);
    return { name: fd.get('name').trim(), email: fd.get('email').trim(), phone: fd.get('phone').trim(), message: fd.get('message').trim() };
  };

  const handleWhatsApp = e => {
    e.preventDefault();
    if (!whatsappEnabled) {
      setWhatsappHint('Add your phone number first.');
      setTimeout(() => setWhatsappHint(''), 3000);
      return;
    }
    if (!formRef.current.reportValidity()) return;
    const { name, email: em, phone: ph, message: msg } = getFormData();
    const text = `Hello MSK Associates,\n\nName: ${name}\nPhone: ${ph}\nEmail: ${em}\n\n${msg}`;
    const url  = `https://wa.me/${contactPhone.raw}?text=${encodeURIComponent(text)}`;
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? (window.location.href = url) : window.open(url, '_blank');
  };

  const handleEmail = async e => {
    e.preventDefault();
    if (!emailEnabled) {
      setEmailHint('Add your email address first.');
      setTimeout(() => setEmailHint(''), 3000);
      return;
    }
    if (!formRef.current.reportValidity()) return;
    const data = getFormData();
    setEmailStatus('sending');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { ...data, time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) }, EMAILJS_PUBLIC_KEY);
      setEmailStatus('success');
      formRef.current.reset();
      setPhone(''); setEmail(''); setMessage('');
      setTimeout(() => setEmailStatus(null), 5000);
    } catch {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus(null), 5000);
    }
  };

  return (
    <div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }} className="contact-grid">
      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-right { padding: 2.5rem 1.5rem !important; }
          .contact-left { padding: 2.5rem 1.5rem !important; }
          .map-card { left: 1rem !important; right: 1rem !important; max-width: none !important; bottom: 1rem !important; }
        }
      `}</style>

      {/* ── Left panel — dark navy ─────────────────────────────── */}
      <div className="contact-left" style={{ backgroundColor: '#20241F', padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '0.58rem', fontWeight: 500, color: '#B33A2E', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'Inter, sans-serif', marginBottom: '2rem' }}>
            Based in Warangal, Telangana
          </p>
          <h2 style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', fontWeight: 500, color: '#fff', lineHeight: 1.0, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Let's talk<br />about your<br />project.
          </h2>
          <p style={{ color: '#a09d96', fontSize: '0.88rem', lineHeight: 1.85, fontFamily: 'Inter, sans-serif', marginBottom: '3.5rem', maxWidth: '300px' }}>
            Tell us what you're building. We respond within one business day — usually the same afternoon.
          </p>

          {/* Trust line */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.78rem', color: '#a09d96', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
              Hundreds of projects delivered across Telangana.<br />Every drawing stamped. Every site supervised.
            </p>
          </div>

          {/* Contact details — minimal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { v: '+91 99890 90978' },
              { v: 'designs@mskassociates.com' },
              { v: 'Mon – Fri, 9 AM – 6 PM' },
            ].map(item => (
              <p key={item.v} style={{ fontSize: '0.82rem', color: '#E9EAE1', fontFamily: 'Inter, sans-serif' }}>
                {item.v}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom address — small, understated */}
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginTop: '3rem' }}>
          Pranay Marg, Waddepally,<br />Hanamakonda, Telangana 506370
        </p>
      </div>

      {/* ── Right panel — form ────────────────────────────────── */}
      <div className="contact-right" style={{ backgroundColor: '#E9EAE1', padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {emailStatus === 'success' && (
          <div style={{ marginBottom: '1.5rem', padding: '12px 16px', backgroundColor: 'rgba(22,163,74,0.06)', borderLeft: '3px solid #16a34a', borderRadius: '2px' }}>
            <p style={{ color: '#15803d', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>Message sent — we'll be in touch shortly.</p>
          </div>
        )}
        {emailStatus === 'error' && (
          <div style={{ marginBottom: '1.5rem', padding: '12px 16px', backgroundColor: 'rgba(179,58,46,0.06)', borderLeft: '3px solid #B33A2E', borderRadius: '2px' }}>
            <p style={{ color: '#B33A2E', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>Failed to send — please WhatsApp or call us directly.</p>
          </div>
        )}

        <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Name */}
          <div>
            <label htmlFor="name" style={labelStyle}>Full Name <span style={{ color: '#B33A2E' }}>*</span></label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name"
              style={inputStyle}
              onFocus={e => (e.target.style.borderBottomColor = '#B33A2E')}
              onBlur={e  => (e.target.style.borderBottomColor = 'rgba(32,36,31,0.12)')}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number <span style={{ color: '#B33A2E' }}>*</span>
              <span style={{ color: '#7C8277', fontWeight: 400, marginLeft: '6px' }}>— for WhatsApp</span>
            </label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 98765 43210"
              value={phone} onChange={e => setPhone(e.target.value)}
              style={inputStyle}
              onFocus={e => (e.target.style.borderBottomColor = '#B33A2E')}
              onBlur={e  => (e.target.style.borderBottomColor = 'rgba(32,36,31,0.12)')}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" style={labelStyle}>Your Project <span style={{ color: '#B33A2E' }}>*</span></label>
            <textarea id="message" name="message" rows="4" required
              placeholder="Briefly describe what you're building — plot size, floors, project type…"
              value={message} onChange={e => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => (e.target.style.borderBottomColor = '#B33A2E')}
              onBlur={e  => (e.target.style.borderBottomColor = 'rgba(32,36,31,0.12)')}
            />
          </div>

          {/* Email — optional, shown small */}
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email Address
              <span style={{ color: '#7C8277', fontWeight: 400, marginLeft: '6px' }}>— optional, for Send Email</span>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={e => (e.target.style.borderBottomColor = '#B33A2E')}
              onBlur={e  => (e.target.style.borderBottomColor = 'rgba(32,36,31,0.12)')}
            />
          </div>

          {/* Actions */}
          <div style={{ paddingTop: '0.5rem' }}>
            {/* Primary — WhatsApp */}
            <button onClick={handleWhatsApp} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', padding: '14px', borderRadius: '8px', border: 'none',
              fontSize: '1rem', fontWeight: 500, fontFamily: 'Inter, sans-serif',
              cursor: whatsappEnabled ? 'pointer' : 'not-allowed',
              backgroundColor: whatsappEnabled ? '#25D366' : 'rgba(32,36,31,0.12)',
              color: whatsappEnabled ? '#ffffff' : '#565D53',
              transition: 'opacity 0.15s',
              marginBottom: '12px',
              boxShadow: whatsappEnabled ? '0 4px 16px rgba(37,211,102,0.3)' : 'none',
            }}>
              <FaWhatsapp size={20} /> WhatsApp
            </button>
            {whatsappHint && <p style={{ fontSize: '0.7rem', color: '#B33A2E', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>{whatsappHint}</p>}

            {/* Secondary — text-style email link */}
            <button onClick={handleEmail} disabled={emailStatus === 'sending'} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', padding: '10px',
              border: 'none', background: 'none',
              fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
              cursor: emailEnabled ? 'pointer' : 'default',
              color: emailEnabled ? '#6b7280' : '#aaa',
              textDecoration: emailEnabled ? 'underline' : 'none',
              textUnderlineOffset: '3px',
            }}>
              <HiOutlineMail size={14} />
              {emailStatus === 'sending' ? 'Sending…' : 'or send by email'}
            </button>
            {emailHint && <p style={{ fontSize: '0.7rem', color: '#B33A2E', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{emailHint}</p>}
          </div>
        </form>
      </div>
    </div>

    {/* Full-bleed map with floating address card */}
    <div style={{ position: 'relative', width: '100%', height: '420px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
        width="100%" height="100%"
        style={{ border: 0, display: 'block', filter: 'saturate(0.85) contrast(1.05)' }}
        allowFullScreen="" loading="lazy" title="MSK Associates Location"
      />

      {/* Floating address card */}
      <div className="map-card" style={{
        position: 'absolute', bottom: '2rem', left: '2rem',
        backgroundColor: '#E9EAE1',
        padding: '1.5rem 2rem',
        borderRadius: '12px',
        borderLeft: '3px solid #B33A2E',
        boxShadow: '0 8px 32px rgba(32,36,31,0.14)',
        maxWidth: '300px',
      }}>
        <p style={{ fontSize: '0.58rem', fontWeight: 500, color: '#B33A2E', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif', marginBottom: '0.6rem' }}>
          Our Office
        </p>
        <p style={{ fontSize: '0.88rem', color: '#565D53', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Pranay Marg, Waddepally,<br />
          Hanamakonda, Telangana 506370
        </p>
        <a
          href="https://maps.google.com/?q=MSK+Associates+Hanamakonda"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.8rem', fontWeight: 500, color: '#B33A2E',
            fontFamily: 'Inter, sans-serif', textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Get Directions →
        </a>
      </div>
    </div>
    </div>
  );
}
