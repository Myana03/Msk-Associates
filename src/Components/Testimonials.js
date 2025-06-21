import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  // ... existing code ...
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Testimonials
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          What Our Clients Say
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          We are proud to have built lasting relationships with our clients.
          Here's what they have to say about their experience with us.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-60 rounded-xl p-8 shadow-lg flex flex-col"
            data-aos="fade-up"
            data-aos-delay={testimonial.delay}
          >
            <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
            <blockquote className="text-gray-300 italic flex-grow">
              "{testimonial.quote}"
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
