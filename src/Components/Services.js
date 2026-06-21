import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Structural Engineering',
    description:
      'Load analysis, RCC and steel design, retrofitting, and seismic assessment — every drawing stamped, calculated, and reviewed before it reaches the site.',
    tags: ['RCC Design', 'Steel Structures', 'Seismic Assessment', 'Footing & Slab'],
  },
  {
    num: '02',
    title: 'Architectural & Site Planning',
    description:
      'Layout planning, statutory approvals, and feasibility studies for plots, residential complexes, and commercial developments across Hanamakonda and Warangal.',
    tags: ['Floor Planning', 'Statutory Approvals', 'Site Feasibility', 'Duplex Layouts'],
  },
  {
    num: '03',
    title: 'Construction & Site Supervision',
    description:
      'Full-cycle construction management — material quality checks, contractor coordination, and on-site supervision from foundation pour to final handover.',
    tags: ['Site Supervision', 'Quality Checks', 'Contractor Mgmt', 'Handover'],
  },
];

const Services = () => {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ backgroundColor: '#0a0f18' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '2rem',
            alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '4rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <p style={{
              fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.22em',
              fontFamily: 'Inter, sans-serif', marginBottom: '1.2rem',
              display: 'flex', alignItems: 'center', gap: '0.8rem',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#C1440E' }} />
              What We Do
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garant, Georgia, serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 700, lineHeight: 1.0,
              letterSpacing: '-0.025em', color: '#ffffff',
              margin: 0,
            }}>
              Three disciplines,<br />one accountable team.
            </h2>
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.32)', fontSize: '0.88rem',
            lineHeight: 1.8, maxWidth: '280px',
            fontFamily: 'Inter, sans-serif', margin: 0,
          }}>
            From first site visit to final inspection stamp — every phase handled by one team that answers for the whole project.
          </p>
        </motion.div>

        {/* Accordion rows */}
        <div>
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '2rem 0',
                    display: 'flex', alignItems: 'center',
                    gap: '2rem', textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em',
                    color: isOpen ? '#C1440E' : 'rgba(255,255,255,0.22)',
                    fontFamily: 'Inter, sans-serif', flexShrink: 0, minWidth: '2rem',
                    transition: 'color 0.3s ease',
                  }}>
                    {s.num}
                  </span>

                  <span style={{
                    fontFamily: 'Cormorant Garant, Georgia, serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                    fontWeight: 700, lineHeight: 1,
                    color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.5)',
                    letterSpacing: '-0.02em', flex: 1,
                    transition: 'color 0.3s ease',
                  }}>
                    {s.title}
                  </span>

                  <span style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    border: `1px solid ${isOpen ? '#C1440E' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isOpen ? '#C1440E' : 'rgba(255,255,255,0.35)',
                    fontSize: '1.2rem', lineHeight: 1,
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        paddingLeft: 'calc(2rem + 2rem + 2rem)',
                        paddingBottom: '2.5rem',
                        display: 'flex', flexWrap: 'wrap',
                        gap: '2.5rem', alignItems: 'flex-start',
                      }}
                        className="accordion-body"
                      >
                        <p style={{
                          color: 'rgba(255,255,255,0.48)', fontSize: '0.95rem',
                          lineHeight: 1.85, fontFamily: 'Inter, sans-serif',
                          maxWidth: '520px', margin: 0,
                        }}>
                          {s.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {s.tags.map(tag => (
                            <span key={tag} style={{
                              fontSize: '0.6rem', fontFamily: 'Inter, sans-serif',
                              fontWeight: 600, letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: 'rgba(255,255,255,0.4)',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: '2px', padding: '5px 12px',
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .accordion-body { padding-left: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;
