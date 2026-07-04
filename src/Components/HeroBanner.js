import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DURATION = 5500;

// Cycling background — MSK "design → built" showcases lead, then site photos.
// Same presentation on every screen size, matching the laptop/desktop hero
// exactly: the photo fills the entire viewport edge-to-edge and the text
// sits directly on top of it. Both showcase photos are composed as a
// center-split (construction/blueprint on the left, finished build on the
// right, seam at ~50% width) — a "safe area" composition. `mobilePos` keeps
// that seam centered on narrow portrait screens, where "cover" crops most of
// the width away, so both halves of the before/after story stay in frame
// instead of the crop drifting entirely into one side.
const bgPhotos = [
  { src: '/Images/hero/design-to-reality.jpg',        pos: '55% 45%', mobilePos: '49% 42%' },
  { src: '/Images/hero/construction-to-interior.jpg', pos: '55% 50%', mobilePos: '50% 48%' },
  { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 50%' },
  { src: 'https://images.unsplash.com/photo-1653312571624-62757bb625f5?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
  { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
];

// The signature: an approval stamp, like the one MSK presses onto every
// structural drawing it certifies for construction. Real regulatory function
// of this business, not a decorative badge — the one bold risk in the design.
function ApprovalStamp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5, rotate: 4 }}
      animate={{ opacity: 0.92, scale: 1, rotate: -9 }}
      transition={{ duration: 0.5, delay: 1.15, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        position: 'absolute', top: '18%', right: 'clamp(1.5rem, 7vw, 7rem)',
        zIndex: 3, width: 'clamp(96px, 11vw, 148px)', height: 'clamp(96px, 11vw, 148px)',
        pointerEvents: 'none', mixBlendMode: 'screen',
      }}
    >
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
        <defs>
          <path id="stampRingTop" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0" fill="none" />
          <path id="stampRingBottom" d="M 100,100 m -78,0 a 78,78 0 1,0 156,0" fill="none" />
        </defs>
        <circle cx="100" cy="100" r="92" fill="none" stroke="#B33A2E" strokeWidth="2" opacity="0.8" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#B33A2E" strokeWidth="1.5" opacity="0.8" />
        <text fill="#B33A2E" fontFamily="'IBM Plex Mono', monospace" fontSize="11.5" letterSpacing="3.5" opacity="0.85">
          <textPath href="#stampRingTop" startOffset="50%" textAnchor="middle">STRUCTURALLY CERTIFIED</textPath>
        </text>
        <text fill="#B33A2E" fontFamily="'IBM Plex Mono', monospace" fontSize="11.5" letterSpacing="3.5" opacity="0.85">
          <textPath href="#stampRingBottom" startOffset="50%" textAnchor="middle">WARANGAL · TELANGANA</textPath>
        </text>
        <text x="100" y="94" fill="#B33A2E" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="30" textAnchor="middle" opacity="0.9">MSK</text>
        <text x="100" y="120" fill="#B33A2E" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="2" textAnchor="middle" opacity="0.8">APPROVED FOR SITE</text>
      </svg>
    </motion.div>
  );
}

export default function HeroBanner({ onStartProject }) {
  const [current, setCurrent] = useState(0);
  const [tick, setTick]       = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = e => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    // A single stable interval (not a chain of timeouts re-armed on every
    // state change) — avoids drift/races when React re-mounts effects.
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % bgPhotos.length);
      setTick(k => k + 1);
    }, DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: 'relative', height: '100svh', minHeight: '620px', overflow: 'hidden', backgroundColor: '#20241F' }}>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.07); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes scrollLine {
          0%   { top: -45%; }
          100% { top: 110%; }
        }
        .hero-btn-primary {
          transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(179,58,46,0.4);
          background-color: #8F2E24;
        }
        .hero-link { transition: color 0.22s ease; }
        .hero-link:hover { color: #fff !important; }
        .hero-link:hover .hero-link-line { width: 42px !important; }
        .hero-link-line { transition: width 0.3s ease; }
      `}</style>

      {/* ── Background photos — crossfade, gradients per-slide ── */}
      {bgPhotos.map((p, i) => {
        const next = (current + 1) % bgPhotos.length;
        const prev = (current - 1 + bgPhotos.length) % bgPhotos.length;
        // Keep the outgoing slide mounted through its own 1.5s fade — the
        // wrapper's opacity transition keeps animating after `current`
        // advances, but if we unmount its image the instant it stops being
        // "current", the crossfade shows empty background for that whole
        // window instead of a smooth blend.
        const shouldLoad = i === current || i === next || i === prev;
        return (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0,
          }}>
            {shouldLoad && (
              <>
                {/* Photo layer — fills the viewport edge-to-edge on every screen
                    size, exactly like the desktop/laptop hero. */}
                <div
                  key={i === current ? `kb-${tick}` : `idle-${i}`}
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url('${p.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: isMobile && p.mobilePos ? p.mobilePos : p.pos,
                    willChange: 'transform',
                    animation: i === current ? `kenBurns ${DURATION + 2000}ms ease-out forwards` : 'none',
                  }}
                />
                {/* Per-slide gradient overlay — text legibility, matches on every size */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                  background: isMobile
                    ? 'linear-gradient(180deg, rgba(32,36,31,0.5) 0%, rgba(32,36,31,0.15) 30%, rgba(32,36,31,0.55) 60%, rgba(32,36,31,0.9) 100%)'
                    : 'linear-gradient(110deg, rgba(32,36,31,0.86) 0%, rgba(32,36,31,0.58) 55%, rgba(32,36,31,0.18) 100%)',
                }} />
                {!isMobile && (
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    background: 'linear-gradient(to top, rgba(32,36,31,0.82) 0%, rgba(32,36,31,0) 42%)',
                  }} />
                )}
              </>
            )}
          </div>
        );
      })}

      {/* ── Signature: certification stamp, desktop only (needs the negative space) ── */}
      {!isMobile && <ApprovalStamp />}

      {/* ── Content ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(1.5rem, 5vw, 5rem)',
        paddingBottom: 'clamp(5rem, 10vh, 7rem)',
      }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap',
            fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.06em',
            fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500,
            marginBottom: '1.8rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '26px', height: '1.5px', backgroundColor: '#B33A2E', flexShrink: 0 }} />
          STRUCTURAL ENGINEERS — WARANGAL, TELANGANA
        </motion.p>

        {/* Headline — line 1 */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 7.4vw, 6.2rem)',
              fontWeight: 600, lineHeight: 0.98,
              letterSpacing: '-0.02em', color: '#ffffff', margin: 0,
            }}
          >
            Built by the people
          </motion.h1>
        </div>

        {/* Headline — line 2 */}
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 7.4vw, 6.2rem)',
              fontWeight: 600, lineHeight: 0.98,
              letterSpacing: '-0.02em', color: '#ffffff', margin: 0,
            }}
          >
            who designed it.
          </motion.h1>
        </div>

        {/* Rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '48px' }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '2px', backgroundColor: '#B33A2E', marginBottom: '1.6rem' }}
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem',
            fontFamily: 'Inter, sans-serif', lineHeight: 1.75,
            maxWidth: '440px', marginBottom: '2.8rem',
          }}
        >
          From the first drawing to the final finish — design, approvals, interiors, and execution under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '2.2rem', flexWrap: 'wrap' }}
        >
          <a href="#services" className="hero-link"
            style={{
              color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem',
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              letterSpacing: '0.08em', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.8rem',
              textTransform: 'uppercase',
            }}
          >
            What We Do
            <span className="hero-link-line" style={{
              display: 'inline-block', width: '28px',
              height: '1px', backgroundColor: 'currentColor',
            }} />
          </a>
        </motion.div>
      </div>

      {/* ── Photo progress dots — bottom right ── */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(2rem, 4vh, 3.5rem)',
        right: 'clamp(1.5rem, 5vw, 5rem)',
        zIndex: 3,
        display: 'flex', gap: '0.7rem', alignItems: 'center',
      }}>
        {bgPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setTick(k => k + 1); }}
            aria-label={`Show slide ${i + 1}`}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '14px 8px',
            }}
          >
            <div style={{
              width: i === current ? '32px' : '8px',
              height: '2px', borderRadius: '2px',
              backgroundColor: i === current ? '#B33A2E' : 'rgba(255,255,255,0.28)',
              transition: 'width 0.4s ease, background-color 0.4s ease',
              position: 'relative', overflow: 'hidden',
            }}>
              {i === current && (
                <div
                  key={`fill-${tick}`}
                  style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    backgroundColor: '#B33A2E',
                    animation: `progressFill ${DURATION}ms linear forwards`,
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* ── Scroll indicator — bottom center ── */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(1.8rem, 3vh, 2.5rem)',
        left: '50%', transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <div style={{
          width: '1px', height: '42px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: '100%', height: '45%',
            backgroundColor: 'rgba(255,255,255,0.45)',
            animation: 'scrollLine 1.7s ease-in-out infinite',
          }} />
        </div>
        <span style={{
          fontSize: '0.4rem', color: 'rgba(255,255,255,0.2)',
          fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>Scroll</span>
      </div>

    </div>
  );
}
