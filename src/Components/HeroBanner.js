import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DURATION = 5500;

const INSET_SHADOW = 'rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px';

const bgPhotos = [
  { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 50%' },
  { src: 'https://images.unsplash.com/photo-1653312571624-62757bb625f5?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
  { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=90&auto=format&fit=crop', pos: 'center 40%' },
];

export default function HeroBanner({ onStartProject }) {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const next = (current + 1) % bgPhotos.length;
      setCurrent(next);
      setTick(k => k + 1);
    }, DURATION);
    return () => clearTimeout(t);
  }, [current, tick]);

  return (
    <div style={{ position: 'relative', backgroundColor: '#f7f4ed', overflow: 'hidden' }}>

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .hero-btn-dark { transition: opacity 0.2s ease; }
        .hero-btn-dark:hover { opacity: 0.8; }
        .hero-btn-ghost { transition: background-color 0.2s ease; }
        .hero-btn-ghost:hover { background-color: rgba(28,28,28,0.04); }
      `}</style>

      {/* Soft warm gradient wash behind hero content */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '70%',
        background: 'radial-gradient(ellipse 80% 55% at 30% 20%, rgba(244,164,96,0.10) 0%, rgba(244,164,96,0) 60%), radial-gradient(ellipse 70% 50% at 75% 30%, rgba(147,168,220,0.10) 0%, rgba(147,168,220,0) 60%), radial-gradient(ellipse 60% 45% at 55% 10%, rgba(232,140,160,0.08) 0%, rgba(232,140,160,0) 55%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{
        position: 'relative',
        paddingTop: 'clamp(9rem, 16vh, 12rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '0.88rem', color: '#5f5f5d',
            fontFamily: 'Figtree, sans-serif', fontWeight: 400,
            marginBottom: '1.6rem',
          }}
        >
          Structural Engineers · Warangal, Telangana
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Figtree, ui-sans-serif, sans-serif',
            fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
            fontWeight: 600, lineHeight: 1.05,
            letterSpacing: '-1.5px', color: '#1c1c1c',
            margin: '0 0 1.5rem', maxWidth: '820px',
          }}
        >
          Built by the people<br />who designed it.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: '#5f5f5d', fontSize: '1.13rem',
            fontFamily: 'Figtree, sans-serif', lineHeight: 1.38,
            maxWidth: '520px', marginBottom: '2.5rem',
          }}
        >
          From the first drawing to the final finish — design, approvals, interiors, and execution under one roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}
        >
          <button
            className="hero-btn-dark"
            onClick={onStartProject}
            style={{
              backgroundColor: '#1c1c1c', color: '#fcfbf8',
              border: 'none', borderRadius: '6px',
              padding: '12px 24px',
              fontSize: '1rem', fontWeight: 400,
              fontFamily: 'Figtree, sans-serif',
              cursor: 'pointer',
              boxShadow: INSET_SHADOW,
            }}
          >
            Start a Project
          </button>
          <a
            className="hero-btn-ghost"
            href="#services"
            style={{
              backgroundColor: 'transparent', color: '#1c1c1c',
              border: '1px solid rgba(28,28,28,0.4)', borderRadius: '6px',
              padding: '12px 24px',
              fontSize: '1rem', fontWeight: 400,
              fontFamily: 'Figtree, sans-serif',
              textDecoration: 'none',
            }}
          >
            What We Do
          </a>
        </motion.div>

        {/* Photo showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative', width: '100%',
            borderRadius: '16px', overflow: 'hidden',
            border: '1px solid #eceae4',
            aspectRatio: '16 / 8',
            minHeight: '280px',
            backgroundColor: '#eceae4',
          }}
        >
          {bgPhotos.map((p, i) => {
            const next = (current + 1) % bgPhotos.length;
            const shouldLoad = i === current || i === next;
            return (
              <div key={i} style={{
                position: 'absolute', inset: 0,
                opacity: i === current ? 1 : 0,
                transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                {shouldLoad && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url('${p.src}')`,
                    backgroundSize: 'cover', backgroundPosition: p.pos,
                  }} />
                )}
              </div>
            );
          })}

          {/* Progress dots */}
          <div style={{
            position: 'absolute', bottom: '1.25rem', right: '1.5rem',
            display: 'flex', gap: '0.7rem', alignItems: 'center',
          }}>
            {bgPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setTick(k => k + 1); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
              >
                <div style={{
                  width: i === current ? '32px' : '8px',
                  height: '2px', borderRadius: '2px',
                  backgroundColor: i === current ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)',
                  transition: 'width 0.4s ease, background-color 0.4s ease',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {i === current && (
                    <div
                      key={`fill-${tick}`}
                      style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        backgroundColor: '#ffffff',
                        animation: `progressFill ${DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
