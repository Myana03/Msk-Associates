import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

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

  const onDark = !scrolled;

  return (
    <>
      <style>{`
        .msk-nav-link .msk-underline { transform: scaleX(0); transform-origin: left; transition: transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94); }
        .msk-nav-link:hover .msk-underline { transform: scaleX(1); }
        .msk-nav-link.active .msk-underline { transform: scaleX(1); }
        .msk-cta-btn { transition: background-color 0.25s ease, color 0.25s ease, transform 0.2s ease; }
        .msk-cta-btn:hover { transform: translateY(-1px); }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0,0,0,0.06)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.07)' : 'none',
          transition: 'background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <img
              src={onDark ? '/Images/logos/logo-dark.png' : '/Images/logos/logo-light.png'}
              alt="MSK Associates"
              style={{ height: '60px', width: 'auto', display: 'block', transition: 'opacity 0.4s ease' }}
            />
            <div
              className="hidden sm:flex flex-col justify-center"
              style={{
                borderLeft: `2px solid ${onDark ? 'rgba(255,255,255,0.2)' : '#e2e2e2'}`,
                paddingLeft: '1rem',
                transition: 'border-color 0.5s ease',
              }}
            >
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', fontWeight: 900,
                letterSpacing: '0.2em', lineHeight: 1,
                color: onDark ? '#ffffff' : '#000000',
                transition: 'color 0.5s ease',
              }}>
                MSKASSOCIATES
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', letterSpacing: '0.06em', lineHeight: 1,
                color: onDark ? 'rgba(255,255,255,0.45)' : '#afafaf',
                marginTop: '4px',
                transition: 'color 0.5s ease',
              }}>
                Structural Engineers{' '}
                <span style={{ color: onDark ? 'rgba(255,255,255,0.2)' : '#e2e2e2' }}>·</span>
                {' '}Planners{' '}
                <span style={{ color: onDark ? 'rgba(255,255,255,0.2)' : '#e2e2e2' }}>·</span>
                {' '}Builders
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-x-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`msk-nav-link relative px-3 py-2 text-sm${activeLink === link.id ? ' active' : ''}`}
                style={{
                  color: activeLink === link.id
                    ? (onDark ? '#ffffff' : '#000000')
                    : (onDark ? 'rgba(255,255,255,0.7)' : '#6b7280'),
                  fontWeight: activeLink === link.id ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {link.label}
                <span className="msk-underline" style={{
                  position: 'absolute', bottom: '4px', left: '12px', right: '12px',
                  height: '1.5px',
                  backgroundColor: onDark ? '#ffffff' : '#000000',
                  display: 'block',
                  transition: 'background-color 0.5s ease',
                }} />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onStartProject}
            className="hidden md:inline-flex items-center msk-cta-btn"
            style={{
              backgroundColor: onDark ? '#ffffff' : '#000000',
              color: onDark ? '#000000' : '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '9px 22px',
              fontSize: '0.65rem', fontWeight: 700,
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em',
              textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Start a Project
          </button>

          {/* Mobile CTA + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onStartProject}
              style={{
                backgroundColor: onDark ? 'rgba(255,255,255,0.9)' : '#000000',
                color: onDark ? '#000000' : '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '8px 14px',
                fontSize: '0.58rem', fontWeight: 700,
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.09em',
                textTransform: 'uppercase', cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              Start a Project
            </button>
            <button
              className="p-2 rounded-md"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              style={{ color: onDark ? 'rgba(255,255,255,0.8)' : '#374151', transition: 'color 0.3s ease' }}
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
              style={{ backgroundColor: 'rgba(255,255,255,0.98)', borderTop: '1px solid rgba(0,0,0,0.05)' }}
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
                  className="block py-3 text-sm font-medium"
                  style={{
                    color: activeLink === link.id ? '#000000' : '#374151',
                    fontWeight: activeLink === link.id ? 700 : 500,
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
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
                    width: '100%', backgroundColor: '#000000', color: '#fff',
                    border: 'none', borderRadius: '9999px', padding: '13px',
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Start a Project
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
