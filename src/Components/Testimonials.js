import React from 'react';

const testimonials = [
  {
    quote:
      "MSK's team was on site before every pour. No shortcuts, no surprises — the RCC framing was done exactly to spec and within schedule.",
    name: 'Ramesh K.',
    detail: 'Residential G+3 — Hanamakonda',
  },
  {
    quote:
      'They handled our commercial complex from structural drawings to DTCP approval. Er. Sai Krishna was reachable at every stage, not just at the start.',
    name: 'Suresh Reddy',
    detail: 'Commercial Complex — Warangal',
  },
  {
    quote:
      'Got a second opinion on an existing building. MSK found two slab issues before we started renovation. Glad we called them first.',
    name: 'Anitha M.',
    detail: 'Structural Audit & Retrofit — Kazipet',
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      <div className="mb-14" data-aos="fade-up">
        <p className="uppercase tracking-widest font-semibold mb-4" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
          Client Feedback
        </p>
        <h2
          className="font-extrabold"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1 }}
        >
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            style={{ borderTop: '3px solid #C1440E', paddingTop: '1.75rem' }}
          >
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.85, fontStyle: 'italic', marginBottom: '1.75rem' }}>
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div style={{ width: '24px', height: '2px', backgroundColor: '#C1440E', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 700, color: '#0F2040', fontSize: '0.88rem' }}>{t.name}</p>
                <p style={{ color: '#888', fontSize: '0.75rem', marginTop: '2px' }}>{t.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;
