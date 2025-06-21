import React from 'react';
import PhotoGallery from './PhotoGallery';

function ProjectGallery() {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-blue-900 tracking-tight">
          Projects Photo Gallery
        </h2>
        <div className="w-full mx-auto">
          <PhotoGallery />
        </div>
        <p className="mt-10 text-center text-blue-700 uppercase tracking-widest text-sm md:text-base font-medium">
          Constructing smiles everywhere
        </p>
      </div>
    </section>
  );
}

export default ProjectGallery;
