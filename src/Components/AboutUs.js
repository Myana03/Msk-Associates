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
  <div style={{ backgroundColor: '#faf9f5' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>

      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontSize: '0.58rem', color: '#cc785c', fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Inter, sans-serif', marginBottom: '5rem',
        }}
      >
        <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#cc785c' }} />
        About MSK Associates
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center" style={{ marginBottom: '6rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
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
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            fontWeight: 500, lineHeight: 1.0,
            letterSpacing: '-0.025em', color: '#141413',
            marginBottom: '2rem',
          }}>
            Pioneering with<br />Precision.
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: '#cc785c', marginBottom: '2rem' }} />
          <div style={{ color: '#3d3d3a', lineHeight: 1.9, fontSize: '0.95rem', fontFamily: 'Inter, sans-serif' }}
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
          backgroundColor: '#f5f0e8',
          borderRadius: '12px',
          borderLeft: '4px solid #cc785c',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)',
          boxShadow: '0 2px 24px rgba(20,20,19,0.06)',
        }}
      >
        <span style={{
          position: 'absolute', top: '-2rem', left: '1.5rem',
          fontSize: '16rem', lineHeight: 1,
          color: 'rgba(204,120,92,0.07)', fontFamily: 'Georgia, serif',
          userSelect: 'none', pointerEvents: 'none',
        }}>"</span>
        <div style={{ position: 'relative' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontStyle: 'italic', lineHeight: 1.55,
            color: '#141413', maxWidth: '780px', marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}>
            "I started MSK Associates with one belief — that the engineer who designs your structure should also be the one who stands on your site."
          </p>
          <p style={{ color: '#3d3d3a', fontSize: '0.92rem', lineHeight: 1.85, maxWidth: '640px', marginBottom: '2.5rem', fontFamily: 'Inter, sans-serif' }}>
            With over 10 years of experience across residential, commercial, and industrial projects in Telangana, I built MSK Associates on one principle — personal accountability on every project. When you work with us, you work directly with me — from the first calculation to the final inspection.
          </p>
          <div style={{ borderTop: '1px solid #e6dfd8', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#cc785c', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 500, color: '#141413', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>Er. Myana Sai Krishna</p>
              <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '3px', fontFamily: 'Inter, sans-serif' }}>ME (Structures), AMIE · Founder, MSK Associates</p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

export default AboutUs;
