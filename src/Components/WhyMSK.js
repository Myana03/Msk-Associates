import React from 'react';

const pillars = [
  {
    title: 'Calculations First',
    description:
      'Every structural decision is backed by load calculations and material testing — not assumptions carried over from the last project.',
  },
  {
    title: 'On-Site, Not Just On-Paper',
    description:
      'Our engineers visit active sites at every major milestone, catching issues before they are poured in concrete.',
  },
  {
    title: 'Plain-Language Reporting',
    description:
      'Clients get progress updates and design rationale in clear terms — no jargon left unexplained.',
  },
];

const WhyMSK = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      <div className="mb-16" data-aos="fade-up">
        <p className="uppercase tracking-widest font-semibold mb-4" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
          Why MSK
        </p>
        <h2
          className="font-extrabold"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.1, maxWidth: '560px' }}
        >
          Engineering judgment,<br />not just paperwork.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="pt-10 pb-4 pr-8 relative overflow-hidden"
            style={{
              borderRight: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              paddingLeft: i === 0 ? 0 : '2rem',
            }}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute', top: '-0.5rem', right: '0.5rem',
                fontSize: '7rem', fontWeight: 800, lineHeight: 1,
                color: 'rgba(255,255,255,0.04)',
                fontFamily: 'Inter, sans-serif',
                userSelect: 'none', pointerEvents: 'none',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#C1440E', marginBottom: '1.5rem' }} />
            <h3 className="font-bold mb-4" style={{ fontSize: '1.05rem', color: '#ffffff' }}>
              {pillar.title}
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontSize: '0.9rem' }}>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WhyMSK;
