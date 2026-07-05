import React from 'react';
import { motion } from 'framer-motion';

// The eyebrow-label + title pattern was hand-duplicated (with slightly
// drifting styles) in every section. One component now owns it, driven by
// the design tokens in index.css, so the whole site moves together when the
// system changes.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  style,
  titleStyle,
  className = '',
}) {
  // Plain --color-accent is only 2.67:1 on the dark --color-primary surface
  // (fails WCAG AA); --color-accent-on-dark is lightened to clear 4.5:1 there.
  const accent = light ? 'var(--color-accent-on-dark)' : 'var(--color-accent)';
  const heading = light ? '#ffffff' : 'var(--color-primary)';
  const body = light ? 'rgba(255,255,255,0.6)' : 'var(--color-neutral-600)';

  return (
    <div
      className={className}
      style={{ textAlign: align, ...style }}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            gap: '0.8rem',
            fontSize: 'var(--text-caption)', color: accent, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.14em',
            fontFamily: 'var(--font-mono)', marginBottom: '1.2rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: accent, flexShrink: 0 }} />
          {eyebrow}
        </motion.p>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-section-title)',
            fontWeight: 600, lineHeight: 'var(--leading-tight)',
            letterSpacing: '-0.02em', color: heading,
            margin: description ? '0 0 1.1rem' : 0,
            whiteSpace: 'pre-line',
            ...titleStyle,
          }}
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: body, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)',
            fontFamily: 'var(--font-body)', maxWidth: align === 'center' ? '560px' : '460px',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
