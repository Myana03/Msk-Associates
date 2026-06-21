import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'Calculations First',
    description: 'Every structural decision is backed by load calculations and material testing — not assumptions carried over from the last project.',
  },
  {
    num: '02',
    title: 'On-Site, Not Just On-Paper',
    description: 'Our engineers visit active sites at every major milestone, catching issues before they are poured in concrete.',
  },
  {
    num: '03',
    title: 'Plain-Language Reporting',
    description: 'Clients get progress updates and design rationale in clear terms — no jargon left unexplained.',
  },
];

function PillarCard({ p, i }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e4dc',
        borderTop: hovered ? '3px solid #C1440E' : '3px solid transparent',
        borderRadius: '4px',
        padding: '3rem 2.5rem',
        position: 'relative', overflow: 'hidden',
        transition: 'border-top-color 0.3s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: hovered ? '0 20px 56px rgba(193,68,14,0.12), 0 4px 16px rgba(26,23,20,0.08)' : '0 1px 8px rgba(26,23,20,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Ghost number */}
      <span style={{
        position: 'absolute', bottom: '-1rem', right: '1rem',
        fontSize: '8rem', fontWeight: 900, lineHeight: 1,
        color: hovered ? 'rgba(193,68,14,0.06)' : 'rgba(26,23,20,0.04)',
        fontFamily: 'Inter, sans-serif', userSelect: 'none',
        transition: 'color 0.4s ease',
      }}>{p.num}</span>

      <p style={{
        fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em',
        color: '#C1440E', textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif', marginBottom: '1.8rem',
      }}>{p.num}</p>

      <div style={{
        width: hovered ? '48px' : '32px', height: '2px',
        backgroundColor: '#C1440E', marginBottom: '1.6rem',
        transition: 'width 0.35s ease',
      }} />

      <h3 style={{
        fontSize: '1.1rem', fontWeight: 700,
        color: '#1a1714',
        fontFamily: 'Inter, sans-serif', marginBottom: '1rem',
        letterSpacing: '-0.01em',
      }}>{p.title}</h3>

      <p style={{
        color: '#777',
        lineHeight: 1.85, fontSize: '0.88rem',
        fontFamily: 'Inter, sans-serif',
      }}>{p.description}</p>
    </motion.div>
  );
}

const WhyMSK = () => (
  <div style={{ backgroundColor: '#FAFAF8' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '4.5rem' }}
      >
        <p style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Inter, sans-serif', marginBottom: '1.4rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#C1440E' }} />
          Why MSK
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garant, Georgia, serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
          fontWeight: 700, lineHeight: 1.0,
          letterSpacing: '-0.025em', color: '#1a1714',
          maxWidth: '560px', margin: 0,
        }}>
          Engineering judgment,<br />not just paperwork.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => <PillarCard key={p.num} p={p} i={i} />)}
      </div>

    </div>
  </div>
);

export default WhyMSK;
