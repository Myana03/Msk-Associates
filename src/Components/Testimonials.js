import React, { useState, useEffect } from 'react';
import '../Css/Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    text: 'MSK Associates provided outstanding structural planning that exceeded our expectations. Their professionalism and attention to detail were top-notch.'
  },
  {
    name: 'Jane Smith',
    text: 'The team at MSK Associates handled our construction project flawlessly. We appreciated their timely updates and dedication to quality.'
  },
  {
    name: 'Alex Johnson',
    text: 'We were impressed by the creative interior design solutions. MSK Associates truly transformed our space into something beautiful and functional.'
  }
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonial.text}"</p>
        <p className="testimonial-name">- {testimonial.name}</p>
        <div className="testimonial-nav">
          <button onClick={handlePrev} aria-label="Previous testimonial">&#8592;</button>
          <button onClick={handleNext} aria-label="Next testimonial">&#8594;</button>
        </div>
        <div className="testimonial-indicators">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={idx === current ? 'active-indicator' : 'indicator'}
              aria-hidden="true"
            >
              •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
