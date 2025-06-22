import React from 'react';
import PhotoGallery from './PhotoGallery';

function ProjectGallery() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="text-blue-500 font-semibold uppercase tracking-wider">Our Work</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 font-playfair">
          A Portfolio of Precision
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Explore a selection of our projects that showcase our commitment to quality, safety, and innovation.
        </p>
        <PhotoGallery />
      </div>
    </section>
  );
}

export default ProjectGallery;
