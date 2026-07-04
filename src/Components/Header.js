import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

function Header({ onStartProject }) {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  // Read the real scroll position on first render (not a hardcoded false) —
  // otherwise, if the browser restores a scrolled position on reload/remount,
  // the header renders in the "at top" style until the first scroll event
  // corrects it, producing a visible flash/snap on that first scroll.
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 60
  );

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
    handleScroll(); // sync state to actual scroll position immediately, don't wait for a scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Grid-reference letters — the same A/B/C convention MSK's own structural
  // drawings use for column lines. Real navigational device, not decoration.
  const navLinks = [
    { id: 'home', label: 'Home', grid: 'A' },
    { id: 'services', label: 'Services', grid: 'B' },
    { id: 'about', label: 'About', grid: 'C' },
    { id: 'projects', label: 'Projects', grid: 'D' },
    { id: 'testimonials', label: 'Testimonials', grid: 'E' },
    { id: 'contact', label: 'Contact', grid: 'F' },
  ];

  const onDark = !scrolled;

  return (
    <>
      <style>{`
        .msk-nav-link .msk-tick { opacity: 0; transform: translateY(-2px); transition: opacity 0.25s ease, transform 0.25s ease; }
        .msk-nav-link:hover .msk-tick, .msk-nav-link.active .msk-tick { opacity: 1; transform: translateY(0); }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(233,234,225,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(32,36,31,0.1)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 1px 24px rgba(32,36,31,0.06)' : 'none',
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
            <div className="hidden sm:flex flex-col justify-center" style={{ borderLeft: '2px solid #B33A2E', paddingLeft: '1rem' }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700,
                letterSpacing: '0.14em', lineHeight: 1,
                color: onDark ? '#ffffff' : '#20241F',
                transition: 'color 0.5s ease',
              }}>
                MSKASSOCIATES
              </span>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.04em', lineHeight: 1,
                color: onDark ? 'rgba(255,255,255,0.45)' : '#565D53',
                marginTop: '5px',
                transition: 'color 0.5s ease',
              }}>
                Structural Engineers <span style={{ color: '#B33A2E' }}>·</span> Planners <span style={{ color: '#B33A2E' }}>·</span> Builders
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
                    ? '#B33A2E'
                    : onDark ? 'rgba(255,255,255,0.7)' : '#565D53',
                  fontWeight: activeLink === link.id ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                  display: 'flex', alignItems: 'baseline', gap: '5px',
                }}
              >
                <span className="msk-tick" style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.62rem',
                  color: '#B33A2E',
                }}>{link.grid}</span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onStartProject}
            className="hidden md:inline-flex items-center"
            style={{
              backgroundColor: '#B33A2E', color: '#fff',
              border: 'none', borderRadius: '4px',
              padding: '9px 22px',
              fontSize: '0.65rem', fontWeight: 600,
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em',
              textTransform: 'uppercase', cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8F2E24'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(179,58,46,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#B33A2E'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Start a Project
          </button>

          {/* Mobile CTA + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onStartProject}
              style={{
                backgroundColor: '#B33A2E', color: '#fff',
                border: 'none', borderRadius: '4px',
                padding: '8px 14px',
                fontSize: '0.58rem', fontWeight: 600,
                fontFamily: 'Inter, sans-serif', letterSpacing: '0.09em',
                textTransform: 'uppercase', cursor: 'pointer',
                whiteSpace: 'nowrap',
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
              style={{ backgroundColor: 'rgba(233,234,225,0.98)', borderTop: '1px solid rgba(32,36,31,0.08)' }}
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
                  className="flex items-center gap-2 py-3 text-sm font-medium"
                  style={{
                    color: activeLink === link.id ? '#B33A2E' : '#374151',
                    fontWeight: activeLink === link.id ? 600 : 500,
                    borderBottom: '1px solid rgba(32,36,31,0.08)',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.62rem', color: '#B33A2E' }}>{link.grid}</span>
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
                    width: '100%', backgroundColor: '#B33A2E', color: '#fff',
                    border: 'none', borderRadius: '4px', padding: '13px',
                    fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
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
