import React from 'react';
import { motion } from 'framer-motion';

const panels = [
  {
    id: 'structural',
    // Bright daylight — red steel frame against white concrete building
    photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=90&auto=format&fit=crop',
    position: 'center 40%',
    tag: '01 — Structural Engineering',
    headline: 'Every column\ncalculated twice.',
    body: 'We design RCC and steel structures for G+1 to G+4 residential buildings, duplexes, and commercial complexes. Load analysis, footing design, beam and slab detailing — all stamped and permit-ready before a single pour begins.',
    pills: ['RCC Design', 'Steel Structures', 'Seismic Assessment', 'Retaining Walls'],
    flip: false,
    bg: '#FAFAF8',
  },
  {
    id: 'planning',
    // Architectural plans / pencil on blueprint — bright white desk setting
    photo: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1400&q=90&auto=format&fit=crop',
    position: 'center 35%',
    tag: '02 — Architectural & Site Planning',
    headline: 'From plot to\napproved plan.',
    body: "We handle layout design, floor planning, and statutory approvals for plots across Warangal. Every drawing goes through the relevant municipal authority — we know the process so you don't have to.",
    pills: ['Floor Planning', 'Statutory Approvals', 'Site Feasibility', 'Duplex Layouts'],
    flip: true,
    bg: '#EDEAE3',
  },
  {
    id: 'interiors',
    // Modern minimalist living room — white furniture, natural light
    photo: 'https://images.unsplash.com/photo-1768609239321-1cfe14893e80?w=1400&q=90&auto=format&fit=crop',
    position: 'center 50%',
    tag: '03 — Interiors & Supervision',
    headline: 'Built the way\nit was drawn.',
    body: 'From material selection and interior finishes to on-site supervision at every stage — we make sure what gets built matches what was designed. One engineer, one point of contact, zero excuses.',
    pills: ['Interior Design', 'Material Specs', 'Site Supervision', 'Quality Checks'],
    flip: false,
    bg: '#FAFAF8',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ServicePanels = () => (
  <div>
    {panels.map((p) => (
      <div key={p.id} style={{ backgroundColor: p.bg, borderTop: '1px solid #e0dbd2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            direction: p.flip ? 'rtl' : 'ltr',
          }}
            className="service-panel-grid"
          >
            {/* Text block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ direction: 'ltr' }}
            >
              <motion.p custom={0} variants={fadeUp} style={{
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.22em',
                fontFamily: 'Inter, sans-serif', marginBottom: '1.8rem',
              }}>
                <span style={{ display: 'inline-block', width: '28px', height: '2px', backgroundColor: '#C1440E', flexShrink: 0 }} />
                {p.tag}
              </motion.p>

              <motion.h2 custom={1} variants={fadeUp} className="sp-headline" style={{
                fontFamily: 'Cormorant Garant, Georgia, serif',
                fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
                fontWeight: 700, lineHeight: 0.97,
                letterSpacing: '-0.03em', color: '#1a1714',
                margin: '0 0 2rem',
                whiteSpace: 'pre-line',
              }}>
                {p.headline}
              </motion.h2>

              <motion.div custom={2} variants={fadeUp} style={{
                width: '48px', height: '2px',
                backgroundColor: '#C1440E', marginBottom: '2rem',
              }} />

              <motion.p custom={3} variants={fadeUp} style={{
                color: '#666', lineHeight: 1.9,
                fontSize: 'clamp(0.88rem, 1.3vw, 0.98rem)',
                fontFamily: 'Inter, sans-serif', marginBottom: '2.4rem',
                maxWidth: '480px',
              }}>
                {p.body}
              </motion.p>

              <motion.div custom={4} variants={fadeUp}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {p.pills.map(pill => (
                  <span key={pill} style={{
                    fontSize: '0.6rem', fontFamily: 'Inter, sans-serif',
                    fontWeight: 600, letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1a1714',
                    border: '1px solid #c8c4bc',
                    borderRadius: '2px', padding: '6px 14px',
                    backgroundColor: 'transparent',
                  }}>
                    {pill}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ direction: 'ltr' }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 24px 72px rgba(15,32,64,0.12)',
                position: 'relative',
              }}>
                <img
                  src={p.photo}
                  alt={p.tag}
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: p.position,
                    display: 'block',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Subtle terracotta accent bar on bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '3px', backgroundColor: '#C1440E',
                }} />
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .service-panel-grid {
              grid-template-columns: 1fr !important;
              direction: ltr !important;
              gap: 2.5rem !important;
            }
          }
          @media (max-width: 640px) {
            .sp-headline { font-size: clamp(1.9rem, 6vw, 2.6rem) !important; }
          }
        `}</style>
      </div>
    ))}
  </div>
);

export default ServicePanels;
