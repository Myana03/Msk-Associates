import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DURATION = 5500;

// General company photos cycling in background — headline stays fixed
const bgPhotos = [
  { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 50%' },
  { src: 'https://images.unsplash.com/photo-1653312571624-62757bb625f5?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
  { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
];

export default function HeroBanner({ onStartProject }) {
  const [current, setCurrent] = useState(0);
  const [tick, setTick]       = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const next = (current + 1) % bgPhotos.length;
      setCurrent(next);
      setTick(k => k + 1);
    }, DURATION);
    return () => clearTimeout(t);
  }, [current, tick]);

  return (
    <div style={{ position: 'relative', height: '100svh', minHeight: '620px', overflow: 'hidden', backgroundColor: '#181715' }}>

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
          box-shadow: 0 14px 40px rgba(204,120,92,0.45);
          background-color: #a9583e;
        }
        .hero-link { transition: color 0.22s ease; }
        .hero-link:hover { color: #fff !important; }
        .hero-link:hover .hero-link-line { width: 42px !important; }
        .hero-link-line { transition: width 0.3s ease; }
      `}</style>

      {/* ── Background photos — crossfade, gradients per-slide ── */}
      {bgPhotos.map((p, i) => {
        const next = (current + 1) % bgPhotos.length;
        const shouldLoad = i === current || i === next;
        return (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0,
          }}>
            {shouldLoad && (
              <>
                {/* Photo layer */}
                <div
                  key={i === current ? `kb-${tick}` : `idle-${i}`}
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url('${p.src}')`,
                    backgroundSize: 'cover', backgroundPosition: p.pos,
                    willChange: 'transform',
                    animation: i === current ? `kenBurns ${DURATION + 2000}ms ease-out forwards` : 'none',
                    filter: p.lightBg ? 'invert(1) brightness(0.88)' : 'none',
                  }}
                />
                {/* Per-slide gradient overlay */}
                {p.lightBg ? (
                  /* Floor plan slide: dark only on left — plan visible on right */
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    background: 'linear-gradient(to right, rgba(24,23,21,0.94) 0%, rgba(24,23,21,0.90) 38%, rgba(24,23,21,0.30) 62%, rgba(24,23,21,0.06) 100%)',
                  }} />
                ) : (
                  <>
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                      background: 'linear-gradient(110deg, rgba(24,23,21,0.86) 0%, rgba(24,23,21,0.58) 55%, rgba(24,23,21,0.18) 100%)',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                      background: 'linear-gradient(to top, rgba(24,23,21,0.82) 0%, rgba(24,23,21,0) 42%)',
                    }} />
                  </>
                )}
              </>
            )}
          </div>
        );
      })}

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
            fontSize: '0.58rem', color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase', letterSpacing: '0.18em',
            fontFamily: 'Inter, sans-serif', fontWeight: 600,
            marginBottom: '1.8rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '26px', height: '1.5px', backgroundColor: '#cc785c', flexShrink: 0 }} />
          Structural Engineers · Warangal, Telangana
        </motion.p>

        {/* Headline — line 1 */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2rem, 8vw, 6.8rem)',
              fontWeight: 500, lineHeight: 0.92,
              letterSpacing: '-0.035em', color: '#ffffff', margin: 0,
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
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2rem, 8vw, 6.8rem)',
              fontWeight: 500, lineHeight: 0.92,
              letterSpacing: '-0.035em', color: '#ffffff', margin: 0,
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
          style={{ height: '2px', backgroundColor: '#cc785c', marginBottom: '1.6rem' }}
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: 'rgba(255,255,255,0.38)', fontSize: '0.9rem',
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
              color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem',
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
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0',
            }}
          >
            <div style={{
              width: i === current ? '32px' : '8px',
              height: '2px', borderRadius: '2px',
              backgroundColor: i === current ? '#cc785c' : 'rgba(255,255,255,0.28)',
              transition: 'width 0.4s ease, background-color 0.4s ease',
              position: 'relative', overflow: 'hidden',
            }}>
              {i === current && (
                <div
                  key={`fill-${tick}`}
                  style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    backgroundColor: '#cc785c',
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
