import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from './PhotoGallery';

const ProjectGallery = () => (
  <div style={{ backgroundColor: '#DFE1D6' }}>
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
          fontSize: '0.8125rem', color: '#B33A2E', fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.125em',
          fontFamily: 'Inter, sans-serif', marginBottom: '1.4rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#B33A2E' }} />
          Our Work
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
          fontWeight: 500, lineHeight: 1.0,
          letterSpacing: '-0.025em', color: '#20241F',
          margin: '0 0 1rem',
        }}>
          A Portfolio of Precision
        </h2>
        <p style={{ color: '#565D53', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: '440px', fontFamily: 'Inter, sans-serif' }}>
          Hundreds of projects across Telangana — each one stamped, calculated, and site-supervised by MSK.
        </p>
      </motion.div>

      <PhotoGallery />
    </div>
  </div>
);

export default ProjectGallery;
