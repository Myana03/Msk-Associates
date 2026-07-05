import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const servicesList = ['Structural Engineering', 'Architectural & Site Planning', 'Interior Design & Execution', 'Project Management'];

const columnLabelStyle = {
  fontSize: 'var(--text-caption)', color: 'var(--color-accent-on-dark)', fontWeight: 600,
  textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)',
  marginBottom: '1.6rem',
};

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--color-primary)', borderTop: '3px solid var(--color-accent)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-md)' }}>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14" style={{ paddingBottom: 'var(--space-lg)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Column 1 — brand */}
        <div>
          <a href="#home" style={{ display: 'inline-block', marginBottom: '1.4rem' }}>
            <img src="/Images/logos/logo-dark.png" alt="MSK Associates" style={{ height: '104px', width: 'auto' }} />
          </a>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'var(--text-small)', lineHeight: 'var(--leading-relaxed)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>
            Structural Engineers · Planners · Builders
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'var(--text-small)', lineHeight: 'var(--leading-relaxed)', fontFamily: 'var(--font-body)' }}>
            Warangal, Telangana
          </p>
          <div style={{ display: 'flex', gap: '1.4rem', marginTop: '1.6rem' }}>
            {[
              { href: 'https://www.instagram.com/mskassociates_', icon: <FaInstagram size={18} />, label: 'Instagram' },
              { href: 'https://wa.me/919989090978', icon: <FaWhatsapp size={18} />, label: 'WhatsApp' },
              { href: 'mailto:designs@mskassociates.com', icon: <HiOutlineMail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={label} className="footer-social"
              >{icon}</a>
            ))}
          </div>
        </div>

        {/* Column 2 — quick links */}
        <div>
          <p style={columnLabelStyle}>Quick Links</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="footer-link"
                style={{ fontSize: 'var(--text-small)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}
              >{item}</a>
            ))}
          </div>
        </div>

        {/* Column 3 — services */}
        <div>
          <p style={columnLabelStyle}>Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
            {servicesList.map(item => (
              <p key={item} style={{ fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)', margin: 0 }}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Contact info — three balanced columns */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10" style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>Phone</p>
          <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>+91 99890 90978</p>
        </div>
        <div>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>Email</p>
          <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>designs@mskassociates.com</p>
        </div>
        <div>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>Office</p>
          <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>Waddepally, Hanamakonda, Telangana</p>
          <p style={{ fontSize: 'var(--text-small)', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)', marginTop: '4px' }}>Mon – Fri, 9 AM – 6 PM</p>
        </div>
      </div>

      <div style={{ paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} MSK Associates · All rights reserved
        </p>
        <p style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.58rem', fontFamily: 'var(--font-mono)' }}>
          Structural Engineers · Planners · Builders
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
