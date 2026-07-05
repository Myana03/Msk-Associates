import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { getContactPhone } from '../config/contact';
import Button from './ui/Button';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const labelStyle = {
  display: 'block', marginBottom: '6px',
  fontSize: '0.6rem', fontWeight: 500,
  color: 'var(--color-neutral-600)', textTransform: 'uppercase',
  letterSpacing: '0.13em', fontFamily: 'var(--font-body)',
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

      {/* ── Left panel — dark ─────────────────────────────── */}
      <div className="contact-left" style={{ backgroundColor: 'var(--color-primary)', padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '0.58rem', fontWeight: 500, color: 'var(--color-accent-on-dark)', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)', marginBottom: '2rem' }}>
            Based in Warangal, Telangana
          </p>
          <h2 style={{ fontSize: 'var(--text-hero)', fontWeight: 500, color: '#fff', lineHeight: 'var(--leading-tight)', fontFamily: 'var(--font-display)', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Let's talk<br />about your<br />project.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 'var(--leading-relaxed)', fontFamily: 'var(--font-body)', marginBottom: '3.5rem', maxWidth: '300px' }}>
            Tell us what you're building. We respond within one business day — usually the same afternoon.
          </p>

          {/* Trust line */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
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
              <p key={item.v} style={{ fontSize: '0.82rem', color: 'var(--color-background)', fontFamily: 'var(--font-body)' }}>
                {item.v}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom address — small, understated */}
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-body)', lineHeight: 1.6, marginTop: '3rem' }}>
          Pranay Marg, Waddepally,<br />Hanamakonda, Telangana 506370
        </p>
      </div>

      {/* ── Right panel — form ────────────────────────────────── */}
      <div className="contact-right" style={{ backgroundColor: 'var(--color-background)', padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {emailStatus === 'success' && (
          <div style={{ marginBottom: '1.5rem', padding: '12px 16px', backgroundColor: 'var(--color-success-bg)', borderLeft: '3px solid var(--color-success)', borderRadius: 'var(--radius-sm)' }}>
            <p style={{ color: 'var(--color-success)', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>Message sent — we'll be in touch shortly.</p>
          </div>
        )}
        {emailStatus === 'error' && (
          <div style={{ marginBottom: '1.5rem', padding: '12px 16px', backgroundColor: 'rgba(179,58,46,0.06)', borderLeft: '3px solid var(--color-accent)', borderRadius: 'var(--radius-sm)' }}>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>Failed to send — please WhatsApp or call us directly.</p>
          </div>
        )}

        <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Name */}
          <div>
            <label htmlFor="name" style={labelStyle}>Full Name <span style={{ color: 'var(--color-accent)' }}>*</span></label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name"
              className="form-field"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number <span style={{ color: 'var(--color-accent)' }}>*</span>
              <span style={{ color: 'var(--color-neutral-500)', fontWeight: 400, marginLeft: '6px' }}>— for WhatsApp</span>
            </label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 98765 43210"
              value={phone} onChange={e => setPhone(e.target.value)}
              className="form-field"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" style={labelStyle}>Your Project <span style={{ color: 'var(--color-accent)' }}>*</span></label>
            <textarea id="message" name="message" rows="4" required
              placeholder="Briefly describe what you're building — plot size, floors, project type…"
              value={message} onChange={e => setMessage(e.target.value)}
              className="form-field"
              style={{ resize: 'none' }}
            />
          </div>

          {/* Email — optional, shown small */}
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email Address
              <span style={{ color: 'var(--color-neutral-500)', fontWeight: 400, marginLeft: '6px' }}>— optional, for Send Email</span>
            </label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)}
              className="form-field"
            />
          </div>

          {/* Actions */}
          <div style={{ paddingTop: '0.5rem' }}>
            {/* Primary — WhatsApp (brand green kept intentionally, not a design-token color) */}
            <button onClick={handleWhatsApp} disabled={!whatsappEnabled} className="whatsapp-cta" style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', padding: '14px', borderRadius: 'var(--radius-sm)', border: 'none',
              fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-body)',
              cursor: whatsappEnabled ? 'pointer' : 'not-allowed',
              backgroundColor: whatsappEnabled ? '#25D366' : 'var(--color-border)',
              color: whatsappEnabled ? '#ffffff' : 'var(--color-neutral-600)',
              marginBottom: '12px',
              boxShadow: whatsappEnabled ? '0 4px 16px rgba(37,211,102,0.3)' : 'none',
            }}>
              <FaWhatsapp size={20} /> WhatsApp
            </button>
            {whatsappHint && <p style={{ fontSize: '0.7rem', color: 'var(--color-warning)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>{whatsappHint}</p>}

            {/* Secondary — text-style email link */}
            <Button
              variant="text"
              onClick={handleEmail}
              disabled={emailStatus === 'sending'}
              style={{ width: '100%', justifyContent: 'center', color: emailEnabled ? 'var(--color-neutral-600)' : 'var(--color-neutral-400)' }}
            >
              <HiOutlineMail size={14} />
              {emailStatus === 'sending' ? 'Sending…' : 'or send by email'}
            </Button>
            {emailHint && <p style={{ fontSize: '0.7rem', color: 'var(--color-warning)', marginTop: '4px', fontFamily: 'var(--font-body)' }}>{emailHint}</p>}
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
        backgroundColor: 'var(--color-surface)',
        padding: '1.5rem 2rem',
        borderRadius: 'var(--radius-lg)',
        borderLeft: '3px solid var(--color-accent)',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: '300px',
      }}>
        <p style={{ fontSize: '0.58rem', fontWeight: 500, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>
          Our Office
        </p>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-neutral-600)', fontFamily: 'var(--font-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.25rem' }}>
          Pranay Marg, Waddepally,<br />
          Hanamakonda, Telangana 506370
        </p>
        <a
          href="https://maps.google.com/?q=MSK+Associates+Hanamakonda"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-accent)',
            fontFamily: 'var(--font-body)', textDecoration: 'none',
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
