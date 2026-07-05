import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';

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
  <div style={{ backgroundColor: 'var(--color-background)' }}>
    <style>{`
      .about-photo { overflow: hidden; }
      .about-photo img { transition: transform var(--duration-slow) var(--ease-premium); }
      .about-photo:hover img { transform: scale(1.05); }
    `}</style>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>

      <SectionHeading eyebrow="About MSK Associates" style={{ marginBottom: 'var(--space-lg)' }} />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center" style={{ marginBottom: 'var(--space-lg)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
          <div className="about-photo" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
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
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-section-title)',
            fontWeight: 500, lineHeight: 'var(--leading-tight)',
            letterSpacing: '-0.025em', color: 'var(--color-primary)',
            marginBottom: '2rem',
          }}>
            Pioneering with<br />Precision.
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: '2rem' }} />
          <div style={{ color: 'var(--color-neutral-600)', lineHeight: 'var(--leading-relaxed)', fontSize: 'var(--text-body)', fontFamily: 'var(--font-body)' }}
            className="space-y-5">
            <p>MSK Associates is a focused structural engineering firm based in Warangal — delivering residential, commercial, and industrial projects across Telangana.</p>
            <p>We handle the full scope: residential homes, multi-storey complexes, industrial structures, and layout planning. Every project goes through the same process — drawings, statutory stamping, site visits at every critical milestone.</p>
            <p>Small enough that the founder reviews every drawing personally. Experienced enough to run concurrent projects without cutting corners on calculation or supervision.</p>
          </div>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <Card interactive={false} style={{
          position: 'relative', overflow: 'hidden',
          backgroundColor: 'var(--color-surface-alt)',
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-accent)',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)',
          boxShadow: 'var(--shadow-md)',
        }}>
          <span style={{
            position: 'absolute', top: '-2rem', left: '1.5rem',
            fontSize: '16rem', lineHeight: 1,
            color: 'rgba(179,58,46,0.07)', fontFamily: 'Georgia, serif',
            userSelect: 'none', pointerEvents: 'none',
          }}>"</span>
          <div style={{ position: 'relative' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 400,
              fontStyle: 'italic', lineHeight: 1.55,
              color: 'var(--color-primary)', maxWidth: '780px', marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}>
              "I started MSK Associates with one belief — that the engineer who designs your structure should also be the one who stands on your site."
            </p>
            <p style={{ color: 'var(--color-neutral-600)', fontSize: '0.92rem', lineHeight: 'var(--leading-relaxed)', maxWidth: '640px', marginBottom: '2.5rem', fontFamily: 'var(--font-body)' }}>
              With over 10 years of experience across residential, commercial, and industrial projects in Telangana, I built MSK Associates on one principle — personal accountability on every project. When you work with us, you work directly with me — from the first calculation to the final inspection.
            </p>
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 500, color: 'var(--color-primary)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>Er. Myana Sai Krishna</p>
                <p style={{ color: 'var(--color-neutral-500)', fontSize: '0.75rem', marginTop: '3px', fontFamily: 'var(--font-body)' }}>ME (Structures), AMIE · Founder, MSK Associates</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

    </div>
  </div>
);

export default AboutUs;
