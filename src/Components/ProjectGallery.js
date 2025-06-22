import React from 'react';
import PhotoGallery from './PhotoGallery';

const ProjectGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Our Work
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          A Portfolio of Precision
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Explore a selection of our projects that showcase our commitment to
          quality, safety, and innovation.
        </p>
      </div>
      <div className="w-full mx-auto" data-aos="fade-up" data-aos-delay="200">
        <PhotoGallery />
      </div>
    </div>
  );
};

export default ProjectGallery;
