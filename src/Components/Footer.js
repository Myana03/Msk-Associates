import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => (
  <footer style={{ backgroundColor: '#f7f4ed', borderTop: '1px solid #eceae4' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>

      <div className="grid md:grid-cols-3 gap-12" style={{ paddingBottom: '3rem', borderBottom: '1px solid #eceae4' }}>

        <div>
          <a href="#home" style={{ display: 'inline-block', marginBottom: '1.2rem' }}>
            <img src="/Images/logos/logo-light.png" alt="MSK Associates" style={{ height: '104px', width: 'auto' }} />
          </a>
          <p style={{ color: '#5f5f5d', fontSize: '0.88rem', lineHeight: 1.85, fontFamily: 'Figtree, sans-serif', whiteSpace: 'nowrap' }}>
            Structural Engineers · Planners · Builders
          </p>
          <p style={{ color: '#5f5f5d', fontSize: '0.88rem', lineHeight: 1.85, fontFamily: 'Figtree, sans-serif' }}>
            Warangal, Telangana
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.5rem' }}>
            {[
              { href: 'https://www.instagram.com/mskassociates_', icon: <FaInstagram size={18} />, label: 'Instagram' },
              { href: 'https://wa.me/919989090978', icon: <FaWhatsapp size={18} />, label: 'WhatsApp' },
              { href: 'mailto:designs@mskassociates.com', icon: <HiOutlineMail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={label}
                style={{ color: '#5f5f5d', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1c1c1c'}
                onMouseLeave={e => e.currentTarget.style.color = '#5f5f5d'}
              >{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.88rem', color: '#1c1c1c', fontWeight: 600, fontFamily: 'Figtree, sans-serif', marginBottom: '1.4rem' }}>Navigation</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ color: '#5f5f5d', fontSize: '0.88rem', textDecoration: 'none', fontFamily: 'Figtree, sans-serif', transition: 'color 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1c1c1c'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#5f5f5d'; e.currentTarget.style.textDecoration = 'none'; }}
              >{item}</a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.88rem', color: '#1c1c1c', fontWeight: 600, fontFamily: 'Figtree, sans-serif', marginBottom: '1.4rem' }}>Get in Touch</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {[
              { label: 'Phone', val: '+91 99890 90978' },
              { label: 'Email', val: 'designs@mskassociates.com' },
              { label: 'Office', val: 'Waddepally, Hanamakonda, Telangana' },
              { label: 'Hours', val: 'Mon – Fri, 9 AM – 6 PM' },
            ].map(({ label, val }) => (
              <div key={label}>
                <p style={{ fontSize: '0.7rem', color: 'rgba(28,28,28,0.4)', fontFamily: 'Figtree, sans-serif', marginBottom: '2px' }}>{label}</p>
                <p style={{ fontSize: '0.88rem', color: '#5f5f5d', fontFamily: 'Figtree, sans-serif' }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'center' }}>
        <p style={{ color: 'rgba(28,28,28,0.4)', fontSize: '0.78rem', fontFamily: 'Figtree, sans-serif' }}>
          © {new Date().getFullYear()} MSK Associates · All rights reserved
        </p>
        <p style={{ color: 'rgba(28,28,28,0.3)', fontSize: '0.78rem', fontFamily: 'Figtree, sans-serif' }}>
          Structural Engineers · Planners · Builders
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
