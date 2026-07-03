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
  <div style={{ backgroundColor: '#f7f4ed', borderTop: '1px solid #eceae4' }}>
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
          fontSize: '0.58rem', color: '#1c1c1c', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Figtree, sans-serif', marginBottom: '1.2rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#1c1c1c' }} />
          Our Capabilities
        </p>
        <h2 className="cta-heading" style={{
          fontFamily: 'Figtree, ui-sans-serif, sans-serif',
          fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
          fontWeight: 600, lineHeight: 1.0,
          letterSpacing: '-0.025em', color: '#1c1c1c',
          margin: '0 0 1.8rem',
        }}>
          Every service<br />your project needs.
        </h2>
        <p style={{
          color: '#5f5f5d', lineHeight: 1.85, fontSize: '0.88rem',
          fontFamily: 'Figtree, sans-serif', margin: '0 0 2rem',
          maxWidth: '320px',
        }}>
          One team across structural design, statutory approvals, documentation, and site execution.
        </p>
        <a href="#contact" style={{
          display: 'inline-block',
          backgroundColor: '#1c1c1c', color: '#fcfbf8',
          borderRadius: '6px', padding: '12px 24px',
          fontSize: '1rem', fontWeight: 400,
          fontFamily: 'Figtree, sans-serif',
          textDecoration: 'none',
          boxShadow: 'rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px',
          transition: 'opacity 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Get in Touch →
        </a>
      </motion.div>

      {/* Right — compact service list */}
      <div style={{ borderTop: '1px solid #eceae4' }}>
        {items.map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.35rem 0',
              borderBottom: '1px solid #eceae4',
              gap: '1rem',
            }}
          >
            <p style={{
              fontFamily: 'Figtree, ui-sans-serif, sans-serif',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              fontWeight: 600, color: '#1c1c1c',
              letterSpacing: '-0.01em', lineHeight: 1.2,
              margin: 0,
            }}>{title}</p>
            <span style={{
              flexShrink: 0,
              width: '20px', height: '1px',
              backgroundColor: '#1c1c1c',
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
