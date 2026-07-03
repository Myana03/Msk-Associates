import React from 'react';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const AboutUs = () => (
  <div style={{ backgroundColor: '#f7f4ed' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>

      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontSize: '0.58rem', color: '#1c1c1c', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Figtree, sans-serif', marginBottom: '5rem',
        }}
      >
        <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#1c1c1c' }} />
        About MSK Associates
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center" style={{ marginBottom: '6rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eceae4' }}>
            <img
              src="https://images.unsplash.com/photo-1563166423-482a8c14b2d6?w=900&q=90&auto=format&fit=crop"
              alt="MSK Associates structural engineering site work"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <h2 style={{
            fontFamily: 'Figtree, ui-sans-serif, sans-serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: 600, lineHeight: 1.0,
            letterSpacing: '-0.025em', color: '#1c1c1c',
            marginBottom: '2rem',
          }}>
            Pioneering with<br />Precision.
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#1c1c1c', marginBottom: '2rem' }} />
          <div style={{ color: '#5f5f5d', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: 'Figtree, sans-serif' }}
            className="space-y-5">
            <p>MSK Associates is a focused structural engineering firm based in Warangal — delivering residential, commercial, and industrial projects across Telangana.</p>
            <p>We handle the full scope: residential homes, multi-storey complexes, industrial structures, and layout planning. Every project goes through the same process — drawings, statutory stamping, site visits at every critical milestone.</p>
            <p>Small enough that the founder reviews every drawing personally. Experienced enough to run concurrent projects without cutting corners on calculation or supervision.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
        style={{
          position: 'relative', overflow: 'hidden',
          backgroundColor: '#f7f4ed',
          border: '1px solid #eceae4',
          borderRadius: '16px',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)',
        }}
      >
        <span style={{
          position: 'absolute', top: '-2rem', left: '1.5rem',
          fontSize: '16rem', lineHeight: 1,
          color: 'rgba(28,28,28,0.04)', fontFamily: 'Georgia, serif',
          userSelect: 'none', pointerEvents: 'none',
        }}>"</span>
        <div style={{ position: 'relative' }}>
          <p style={{
            fontFamily: 'Figtree, ui-sans-serif, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 600, lineHeight: 1.3,
            color: '#1c1c1c', maxWidth: '780px', marginBottom: '2rem',
            letterSpacing: '-0.9px',
          }}>
            "I started MSK Associates with one belief — that the engineer who designs your structure should also be the one who stands on your site."
          </p>
          <p style={{ color: '#5f5f5d', fontSize: '0.92rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2.5rem', fontFamily: 'Figtree, sans-serif' }}>
            With over 10 years of experience across residential, commercial, and industrial projects in Telangana, I built MSK Associates on one principle — personal accountability on every project. When you work with us, you work directly with me — from the first calculation to the final inspection.
          </p>
          <div style={{ borderTop: '1px solid #eceae4', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#1c1c1c', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 600, color: '#1c1c1c', fontSize: '0.9rem', fontFamily: 'Figtree, sans-serif' }}>Er. Myana Sai Krishna</p>
              <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '3px', fontFamily: 'Figtree, sans-serif' }}>ME (Structures), AMIE · Founder, MSK Associates</p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

export default AboutUs;
