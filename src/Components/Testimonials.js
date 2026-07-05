import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';

const testimonials = [
  {
    quote: 'MSK Associates is a very good and dedicated firm. They have great knowledge and communication skills. They guide you clearly whether you\'re building a new home or a commercial space, and their passion for interiors with latest designs sets them apart. In one word — Approach MSK and forget your tensions.',
    name: 'Venkata Ramana Reddy Beemireddy',
    detail: 'Residential & Interiors · Warangal',
  },
  {
    quote: 'I recently had the pleasure of working with MSK Associates on the construction of our new home, and I couldn\'t be more satisfied with the results. From start to finish, their team demonstrated professionalism, transparency, and attention to detail that gave us complete confidence throughout the entire process. They made what could have been a stressful process feel smooth and rewarding.',
    name: 'Tejaswini Surabhi',
    detail: 'New Home Construction · Warangal',
  },
  {
    quote: 'We had a wonderful experience working with MSK Associates. Their team understood our requirements perfectly and transformed our ideas into a beautiful and practical design. Their attention to detail, creativity, and professionalism truly stand out.',
    name: 'Vineeth Kumar',
    detail: 'Google Local Guide · Warangal',
  },
  {
    quote: 'The team at MSK Associates was very easy to communicate with. They understood our requirements clearly and guided us with honest suggestions. The final design perfectly matched our vision.',
    name: 'Samskruthareddy Palle',
    detail: 'Design & Planning · Warangal',
  },
  {
    quote: 'From the very first discussion, the team made us feel comfortable and understood our expectations clearly. They were patient with all our changes and delivered a design we truly loved.',
    name: 'Avanthi Mudiraaj',
    detail: 'Residential Design · Warangal',
  },
  {
    quote: 'The best thing about working with them was their honesty and professionalism. They gave practical suggestions instead of simply following trends, which made a huge difference in the final design.',
    name: 'Ravikishore Thangellapelly',
    detail: 'Structural Design · Warangal',
  },
  {
    quote: 'Very professional and detail-oriented, with a strong understanding of requirements and a commitment to delivering practical, robust solutions. Regular site visits and close monitoring of progress reflect their dedication. Highly recommended for civil and structural engineering needs.',
    name: 'Pavan Nagavalli',
    detail: 'Google Local Guide · Warangal',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setActive(a => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const go = (i) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  const t = testimonials[active];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-border)' }}>
      <div
        className="max-w-7xl mx-auto px-6 lg:px-14"
        style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}
      >
        <SectionHeading eyebrow="Client Feedback" style={{ marginBottom: 'var(--space-lg)' }} />

        {/* Quote card */}
        <Card interactive={false} style={{
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          minHeight: 'clamp(200px, 32vw, 300px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: dir > 0 ? 24 : -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: dir > 0 ? -24 : 24 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.45,
                letterSpacing: '-0.01em',
                color: 'var(--color-primary)',
                maxWidth: '860px',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
                <div>
                  <p style={{
                    fontWeight: 500, color: 'var(--color-primary)',
                    fontSize: '0.88rem', fontFamily: 'var(--font-body)',
                  }}>{t.name}</p>
                  <p style={{
                    color: 'var(--color-neutral-500)', fontSize: '0.72rem',
                    marginTop: '3px', fontFamily: 'var(--font-body)',
                  }}>{t.detail}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>

        {/* Progress dots */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.6rem',
          marginTop: 'var(--space-md)',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '14px 8px',
              }}
            >
              <div style={{
                height: '2px',
                width: i === active ? '36px' : '16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: i === active ? 'var(--color-accent)' : 'var(--color-border)',
                transition: 'width 0.4s ease, background-color 0.3s ease',
              }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
