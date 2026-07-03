import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const INSET_SHADOW = 'rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px';

function Header({ onStartProject }) {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'services', 'about', 'projects', 'testimonials', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) { current = id; break; }
        }
      }
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(247,244,237,0.96)' : '#f7f4ed',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #eceae4' : '1px solid transparent',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-4">
          <img
            src="/Images/logos/logo-light.png"
            alt="MSK Associates"
            style={{ height: '56px', width: 'auto', display: 'block' }}
          />
          <div className="hidden sm:flex flex-col justify-center" style={{ borderLeft: '1px solid #eceae4', paddingLeft: '1rem' }}>
            <span style={{
              fontFamily: 'Figtree, sans-serif', fontSize: '1.1rem', fontWeight: 600,
              letterSpacing: '0.14em', lineHeight: 1, color: '#1c1c1c',
            }}>
              MSKASSOCIATES
            </span>
            <span style={{
              fontFamily: 'Figtree, sans-serif', fontSize: '0.6rem', letterSpacing: '0.06em', lineHeight: 1,
              color: '#5f5f5d', marginTop: '4px',
            }}>
              Structural Engineers · Planners · Builders
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-x-1">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-3 py-2 text-sm"
              style={{
                color: '#1c1c1c',
                fontWeight: 400,
                textDecoration: activeLink === link.id ? 'underline' : 'none',
                textUnderlineOffset: '5px',
                textDecorationThickness: '1.5px',
                fontFamily: 'Figtree, sans-serif',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={e => { if (activeLink !== link.id) e.currentTarget.style.textDecoration = 'none'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={onStartProject}
          className="hidden md:inline-flex items-center"
          style={{
            backgroundColor: '#1c1c1c', color: '#fcfbf8',
            border: 'none', borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '0.88rem', fontWeight: 400,
            fontFamily: 'Figtree, sans-serif',
            cursor: 'pointer',
            boxShadow: INSET_SHADOW,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Start a Project
        </button>

        {/* Mobile CTA + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onStartProject}
            style={{
              backgroundColor: '#1c1c1c', color: '#fcfbf8',
              border: 'none', borderRadius: '6px',
              padding: '8px 14px',
              fontSize: '0.78rem', fontWeight: 400,
              fontFamily: 'Figtree, sans-serif',
              cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: INSET_SHADOW,
            }}
          >
            Start a Project
          </button>
          <button
            className="p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{ color: '#1c1c1c', borderRadius: '6px' }}
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ backgroundColor: '#f7f4ed', borderTop: '1px solid #eceae4' }}
            className="md:hidden px-6 pb-4"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.18 }}
                className="block py-3 text-sm"
                style={{
                  color: '#1c1c1c',
                  fontWeight: activeLink === link.id ? 600 : 400,
                  borderBottom: '1px solid #eceae4',
                  textDecoration: 'none',
                  fontFamily: 'Figtree, sans-serif',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.04 + 0.05 }}
              style={{ paddingTop: '1rem' }}
            >
              <button
                onClick={() => { setMenuOpen(false); if (onStartProject) onStartProject(); }}
                style={{
                  width: '100%', backgroundColor: '#1c1c1c', color: '#fcfbf8',
                  border: 'none', borderRadius: '6px', padding: '13px',
                  fontSize: '0.88rem', fontWeight: 400,
                  cursor: 'pointer',
                  fontFamily: 'Figtree, sans-serif',
                  boxShadow: INSET_SHADOW,
                }}
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
