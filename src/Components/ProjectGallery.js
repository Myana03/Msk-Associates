import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from './PhotoGallery';

const ProjectGallery = () => (
  <div style={{ backgroundColor: '#EDEAE3' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3.5rem' }}
      >
        <p style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Inter, sans-serif', marginBottom: '1.4rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#C1440E' }} />
          Our Work
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garant, Georgia, serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
          fontWeight: 700, lineHeight: 1.0,
          letterSpacing: '-0.025em', color: '#1a1714',
          margin: '0 0 1rem',
        }}>
          A Portfolio of Precision
        </h2>
        <p style={{ color: '#888', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: '440px', fontFamily: 'Inter, sans-serif' }}>
          Hundreds of projects across Telangana — each one stamped, calculated, and site-supervised by MSK.
        </p>
      </motion.div>

      <PhotoGallery />
    </div>
  </div>
);

export default ProjectGallery;
