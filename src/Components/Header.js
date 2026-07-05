import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

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
        .msk-burger-bar { transition: transform 0.35s var(--ease-premium), opacity 0.2s ease, background-color 0.3s ease; transform-origin: center; }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'var(--color-surface-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--color-border)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
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
            <div className="hidden sm:flex flex-col items-center justify-center" style={{ borderLeft: '2px solid var(--color-accent)', paddingLeft: '1rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700,
                letterSpacing: '0.14em', lineHeight: 1, whiteSpace: 'nowrap', textAlign: 'center',
                color: onDark ? '#ffffff' : 'var(--color-primary)',
                transition: 'color 0.5s ease',
              }}>
                MSKASSOCIATES
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.04em', lineHeight: 1, whiteSpace: 'nowrap', textAlign: 'center',
                color: onDark ? 'rgba(255,255,255,0.45)' : 'var(--color-neutral-600)',
                marginTop: '5px',
                transition: 'color 0.5s ease',
              }}>
                Structural Engineers <span style={{ color: 'var(--color-accent)' }}>·</span> Planners <span style={{ color: 'var(--color-accent)' }}>·</span> Builders
              </span>
            </div>
          </a>

          {/* Desktop nav — animated shared-layout underline slides beneath the active link */}
          <nav className="hidden md:flex items-center gap-x-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`msk-nav-link relative px-3 py-2 text-sm${activeLink === link.id ? ' active' : ''}`}
                style={{
                  color: activeLink === link.id
                    ? (onDark ? 'var(--color-accent-on-dark)' : 'var(--color-accent)')
                    : onDark ? 'rgba(255,255,255,0.7)' : 'var(--color-neutral-600)',
                  fontWeight: activeLink === link.id ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-body)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                  <span className="msk-tick" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: onDark ? 'var(--color-accent-on-dark)' : 'var(--color-accent)',
                  }}>{link.grid}</span>
                  {link.label}
                </span>
                {activeLink === link.id && (
                  <motion.span
                    layoutId="msk-nav-underline"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    style={{
                      position: 'absolute', bottom: '-1px', left: '12px', right: '12px',
                      height: '2px', backgroundColor: onDark ? 'var(--color-accent-on-dark)' : 'var(--color-accent)', borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button variant="primary" onClick={onStartProject} className="hidden md:inline-flex">
            Start a Project
          </Button>

          {/* Mobile CTA + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="primary" onClick={onStartProject} style={{ padding: '8px 14px', fontSize: '0.58rem' }}>
              Start a Project
            </Button>
            <button
              className="p-2 rounded-md"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{
                color: onDark ? 'rgba(255,255,255,0.8)' : '#374151', transition: 'color 0.3s ease',
                width: '32px', height: '32px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              <span className="msk-burger-bar" style={{
                width: '20px', height: '2px', backgroundColor: 'currentColor', borderRadius: '2px',
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }} />
              <span className="msk-burger-bar" style={{
                width: '20px', height: '2px', backgroundColor: 'currentColor', borderRadius: '2px',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span className="msk-burger-bar" style={{
                width: '20px', height: '2px', backgroundColor: 'currentColor', borderRadius: '2px',
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }} />
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
              style={{ backgroundColor: 'var(--color-surface-glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--color-border)' }}
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
                    color: activeLink === link.id ? 'var(--color-accent)' : '#374151',
                    fontWeight: activeLink === link.id ? 600 : 500,
                    borderBottom: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-accent)' }}>{link.grid}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                style={{ paddingTop: '1rem' }}
              >
                <Button
                  variant="primary"
                  onClick={() => { setMenuOpen(false); if (onStartProject) onStartProject(); }}
                  style={{ width: '100%' }}
                >
                  Start a Project
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
