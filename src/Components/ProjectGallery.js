import React from 'react';
import PhotoGallery from './PhotoGallery';

const ProjectGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-12" data-aos="fade-up">
        <p className="uppercase tracking-widest font-semibold mb-4" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
          Our Work
        </p>
        <h2 className="font-extrabold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1, fontFamily: 'Cormorant Garant, Georgia, serif' }}>
          A Portfolio of Precision
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '480px' }}>
          49 projects across Telangana — each one stamped, calculated, and site-supervised by MSK.
        </p>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-delay="200">
        <PhotoGallery />
      </div>
    </div>
  );
};

export default ProjectGallery;
