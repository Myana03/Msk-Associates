import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F2040', borderTop: '3px solid #C1440E' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand + address */}
          <div>
            <a href="#home" className="block mb-4">
              <img src="/Images/logos/logo-dark.png" alt="MSK Associates" style={{ height: '64px', width: 'auto' }} />
            </a>
            <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.9 }}>
              Pranay Marg, Waddepally,<br />
              Phase 1, Teachers Colony,<br />
              Hanamakonda, Telangana 506370
            </p>
            <a href="tel:+919989090978" className="block mt-3 transition-colors hover:text-white" style={{ color: '#9ca3af', fontSize: '0.82rem' }}>
              +91 99890 90978
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="uppercase tracking-widest mb-4" style={{ fontSize: '0.65rem', color: '#C1440E', letterSpacing: '0.15em' }}>Navigation</p>
            <div className="flex flex-col gap-3">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ color: '#6b7280', fontSize: '0.8rem' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Socials + email */}
          <div>
            <p className="uppercase tracking-widest mb-4" style={{ fontSize: '0.65rem', color: '#C1440E', letterSpacing: '0.15em' }}>Connect</p>
            <div className="flex gap-5 mb-5">
              <a href="https://www.instagram.com/mskassociates_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="transition-colors hover:text-white" style={{ color: '#6b7280' }}>
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/919989090978" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 className="transition-colors hover:text-white" style={{ color: '#6b7280' }}>
                <FaWhatsapp size={20} />
              </a>
              <a href="mailto:designs@mskassociates.com" aria-label="Email"
                 className="transition-colors hover:text-white" style={{ color: '#6b7280' }}>
                <HiOutlineMail size={20} />
              </a>
            </div>
            <a href="mailto:designs@mskassociates.com" className="transition-colors hover:text-white" style={{ color: '#6b7280', fontSize: '0.8rem' }}>
              designs@mskassociates.com
            </a>
          </div>

        </div>

        {/* Bottom line */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '2.5rem', paddingTop: '1.5rem' }}>
          <p className="text-center uppercase tracking-widest" style={{ color: '#374151', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
            &copy; {new Date().getFullYear()} MSK Associates &mdash; Structural Engineers, Planners &amp; Builders
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
