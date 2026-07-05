import React from 'react';
import PhotoGallery from './PhotoGallery';
import SectionHeading from './ui/SectionHeading';

const ProjectGallery = () => (
  <div style={{ backgroundColor: 'var(--color-surface-alt)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>

      <SectionHeading
        eyebrow="Our Work"
        title="A Portfolio of Precision"
        description="Hundreds of projects across Telangana — each one stamped, calculated, and site-supervised by MSK."
        style={{ marginBottom: 'var(--space-lg)' }}
      />

      <PhotoGallery />
    </div>
  </div>
);

export default ProjectGallery;
