import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'structural',
    num: '01',
    title: 'Structural Engineering',
    photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=90&auto=format&fit=crop',
    photoPos: 'center 40%',
    line1: 'Engineered with precision.',
    line2: 'Built with confidence.',
    body: 'We provide comprehensive RCC and steel structural design solutions for residential and commercial developments. Guided by applicable Indian Standards (IS Codes) and sound engineering principles, our services encompass structural analysis, foundation design, and detailed construction documentation, ensuring safe, efficient, and code-compliant structures ready for execution.',
    pills: ['RCC Design', 'Steel Structures', 'Seismic Assessment', 'Retaining Walls'],
  },
  {
    id: 'planning',
    num: '02',
    title: 'Architectural & Site Planning',
    photo: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1400&q=90&auto=format&fit=crop',
    photoPos: 'center 35%',
    line1: 'Designed for approval.',
    line2: 'Prepared for construction.',
    body: 'We provide end-to-end architectural planning solutions, encompassing site layout design, floor planning, and statutory approval documentation. Our team develops compliant drawings and coordinates with relevant authorities to ensure a seamless transition from concept and approval to construction readiness.',
    pills: ['Floor Planning', 'Statutory Approvals', 'Site Feasibility', 'Duplex Layouts'],
  },
  {
    id: 'interiors',
    num: '03',
    title: 'Interior Design & Execution',
    photo: 'https://images.unsplash.com/photo-1768609239321-1cfe14893e80?w=1400&q=90&auto=format&fit=crop',
    photoPos: 'center 50%',
    line1: 'Designed with intent.',
    line2: 'Delivered with precision.',
    body: "From concept development and material selection to interior detailing and site supervision, we create functional and aesthetically refined spaces tailored to our clients' needs. Through meticulous coordination and quality oversight, we ensure every design is delivered with precision, consistency, and attention to detail.",
    pills: ['Interior Design', 'Material Specs', 'Site Supervision', 'Quality Checks'],
  },
  {
    id: 'project-management',
    num: '04',
    title: 'Project Management',
    photo: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1400&q=90&auto=format&fit=crop',
    photoPos: 'center 30%',
    line1: 'Built the way',
    line2: 'it was drawn.',
    body: 'We oversee every stage of project execution, coordinating consultants, contractors, schedules, budgets, and quality standards. Through continuous monitoring and on-site supervision, we ensure construction progresses efficiently and aligns with the approved drawings, specifications, and project objectives.',
    pills: ['Timeline Planning', 'Contractor Coordination', 'Budget Tracking', 'Progress Reports'],
  },
];

export default function WhatWeDo() {
  const [open, setOpen] = useState('structural');

  return (
    <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e2e2' }}>
      <style>{`
        @media (max-width: 768px) {
          .wwd-panel { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .wwd-title { font-size: clamp(1.05rem, 5vw, 1.5rem) !important; }
          .wwd-pills { display: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4.5rem' }}
        >
          <p style={{
            display: 'flex', alignItems: 'center', gap: '0.8rem',
            fontSize: '0.58rem', color: '#000000', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.22em',
            fontFamily: 'Inter, sans-serif', marginBottom: '1.2rem',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#000000' }} />
            What We Do
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '0', color: '#000000', margin: 0,
          }}>
            Four disciplines.<br />One team.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div style={{ borderTop: '1px solid #e2e2e2' }}>
          {services.map((s, idx) => {
            const isOpen = open === s.id;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderBottom: '1px solid #e2e2e2' }}
              >
                {/* Row trigger */}
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  style={{
                    width: '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                    padding: 'clamp(1.4rem, 3vw, 2rem) 0',
                    background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 2.5rem)' }}>
                    <span style={{
                      fontSize: '0.55rem', fontWeight: 700,
                      color: isOpen ? '#000000' : '#afafaf',
                      fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em',
                      transition: 'color 0.3s ease', flexShrink: 0,
                    }}>{s.num}</span>

                    {/* Active indicator bar */}
                    <span style={{
                      display: 'inline-block',
                      width: isOpen ? '28px' : '0px', height: '2px',
                      backgroundColor: '#000000', flexShrink: 0,
                      transition: 'width 0.35s ease',
                    }} />

                    <span className="wwd-title" style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                      fontWeight: 700, letterSpacing: '0',
                      color: isOpen ? '#000000' : '#5e5e5e',
                      transition: 'color 0.3s ease',
                      lineHeight: 1,
                    }}>{s.title}</span>
                  </div>

                  {/* Plus / minus */}
                  <span style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                    fontWeight: 300,
                    color: isOpen ? '#000000' : '#afafaf',
                    transition: 'color 0.3s ease, transform 0.4s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block', lineHeight: 1,
                    flexShrink: 0, marginLeft: '1rem',
                    fontFamily: 'Inter, sans-serif',
                  }}>+</span>
                </button>

                {/* Expandable panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto', opacity: 1,
                        transition: {
                          height: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.4, delay: 0.12 },
                        },
                      }}
                      exit={{
                        height: 0, opacity: 0,
                        transition: {
                          height: { duration: 0.38, ease: [0.4, 0, 1, 1] },
                          opacity: { duration: 0.18 },
                        },
                      }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="wwd-panel"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '55% 1fr',
                          gap: 'clamp(2rem, 4vw, 4rem)',
                          paddingBottom: '3.5rem',
                        }}
                      >
                        {/* Photo */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            borderRadius: '4px', overflow: 'hidden',
                            aspectRatio: '16 / 9', position: 'relative',
                            boxShadow: '0 16px 56px rgba(26,23,20,0.1)',
                          }}
                        >
                          <img
                            src={s.photo}
                            alt={s.title}
                            loading="lazy"
                            style={{
                              width: '100%', height: '100%',
                              objectFit: 'cover', objectPosition: s.photoPos,
                              display: 'block',
                            }}
                          />
                          <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            height: '3px', backgroundColor: '#000000',
                          }} />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', gap: '0',
                          }}
                        >
                          <h3 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                            fontWeight: 700, lineHeight: 0.96,
                            letterSpacing: '-0.03em', color: '#000000',
                            margin: '0 0 1.6rem',
                            whiteSpace: 'pre-line',
                          }}>{`${s.line1}\n${s.line2}`}</h3>

                          <div style={{ width: '36px', height: '2px', backgroundColor: '#000000', marginBottom: '1.4rem' }} />

                          <p style={{
                            color: '#5e5e5e', lineHeight: 1.88,
                            fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
                            fontFamily: 'Inter, sans-serif',
                          }}>{s.body}</p>

                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
