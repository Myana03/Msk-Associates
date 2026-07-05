import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

const items = [
  'Structural Review of Existing Plans',
  'Statutory Approvals & Compliance',
  'Floor Additions & Building Extensions',
  'Foundation & Structural Assessment',
  'Construction Documentation',
  'Project Management & Site Coordination',
];

const CallToAction = () => (
  <div style={{ backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-border)' }}>
    <div
      className="max-w-7xl mx-auto px-6 lg:px-14 cta-grid"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(3rem, 6vw, 8rem)',
        alignItems: 'start',
      }}
    >
      {/* Left — heading + CTA */}
      <div className="cta-sticky" style={{ position: 'sticky', top: '7rem' }}>
        <SectionHeading
          eyebrow="Our Capabilities"
          title={'Every service\nyour project needs.'}
          description="One team across structural design, statutory approvals, documentation, and site execution."
          titleStyle={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)' }}
          style={{ marginBottom: '2rem' }}
        />
        <Button variant="primary" href="#contact">
          Get in Touch →
        </Button>
      </div>

      {/* Right — compact service list */}
      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {items.map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.35rem 0',
              borderBottom: '1px solid var(--color-border)',
              gap: '1rem',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              fontWeight: 600, color: 'var(--color-primary)',
              letterSpacing: '-0.01em', lineHeight: 1.2,
              margin: 0,
            }}>{title}</p>
            <span style={{
              flexShrink: 0,
              width: '20px', height: '1px',
              backgroundColor: 'var(--color-accent)',
              display: 'inline-block',
            }} />
          </motion.div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .cta-grid { grid-template-columns: 1fr !important; }
        .cta-sticky { position: static !important; }
      }
    `}</style>
  </div>
);

export default CallToAction;
