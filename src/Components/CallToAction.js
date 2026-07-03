import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Structural Review of Existing Plans',
  'Statutory Approvals & Compliance',
  'Floor Additions & Building Extensions',
  'Foundation & Structural Assessment',
  'Construction Documentation',
  'Project Management & Site Coordination',
];

const CallToAction = () => (
  <div style={{ backgroundColor: '#000000' }}>
    <div
      className="max-w-7xl mx-auto px-6 lg:px-14 cta-grid"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(3rem, 6vw, 8rem)',
        alignItems: 'start',
      }}
    >
      {/* Left — heading + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'sticky', top: '7rem' }}
      >
        <p style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Inter, sans-serif', marginBottom: '1.2rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          Our Capabilities
        </p>
        <h2 className="cta-heading" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
          fontWeight: 700, lineHeight: 1.08,
          letterSpacing: '-0.015em', color: '#ffffff',
          margin: '0 0 1.8rem',
        }}>
          Every service<br />your project needs.
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontSize: '0.88rem',
          fontFamily: 'Inter, sans-serif', margin: '0 0 2rem',
          maxWidth: '320px',
        }}>
          One team across structural design, statutory approvals, documentation, and site execution.
        </p>
        <a href="#contact" style={{
          display: 'inline-block',
          backgroundColor: '#ffffff', color: '#000000',
          borderRadius: '9999px', padding: '13px 32px',
          fontSize: '0.75rem', fontWeight: 700,
          fontFamily: 'Inter, sans-serif', letterSpacing: '0.07em',
          textTransform: 'uppercase', textDecoration: 'none',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#efefef'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = ''; }}
        >
          Get in Touch →
        </a>
      </motion.div>

      {/* Right — service list */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {items.map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.35rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              gap: '1rem',
            }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              fontWeight: 600, color: 'rgba(255,255,255,0.88)',
              letterSpacing: '-0.01em', lineHeight: 1.2,
              margin: 0,
            }}>{title}</p>
            <span style={{
              flexShrink: 0,
              width: '20px', height: '1px',
              backgroundColor: 'rgba(255,255,255,0.25)',
              display: 'inline-block',
            }} />
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .cta-grid { grid-template-columns: 1fr !important; }
        .cta-grid > div:first-child { position: static !important; }
      }
      @media (max-width: 640px) {
        .cta-heading { font-size: clamp(1.8rem, 6vw, 2.2rem) !important; }
      }
    `}</style>
  </div>
);

export default CallToAction;
