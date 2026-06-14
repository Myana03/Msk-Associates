import React from 'react';

const services = [
  {
    step: '01',
    code: 'STR',
    title: 'Structural Engineering',
    description:
      'Load analysis, RCC and steel design, retrofitting, and seismic assessment — every drawing stamped, calculated, and reviewed before it reaches the site.',
  },
  {
    step: '02',
    code: 'PLN',
    title: 'Architectural & Site Planning',
    description:
      'Layout planning, statutory approvals, and feasibility studies for plots, residential complexes, and commercial developments across Hanamakonda and Warangal.',
  },
  {
    step: '03',
    code: 'BLD',
    title: 'Construction & Site Supervision',
    description:
      'Full-cycle construction management — material quality checks, contractor coordination, and on-site supervision from foundation pour to handover.',
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6" data-aos="fade-up">
        <div>
          <p className="uppercase tracking-widest font-semibold mb-4" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
            What We Do
          </p>
          <h2
            className="font-extrabold"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#0F2040', lineHeight: 1.1, maxWidth: '520px' }}
          >
            Three disciplines,<br />one accountable team.
          </h2>
        </div>
        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '340px' }}>
          From the first site visit to the final inspection stamp — every phase handled by one team that answers for the whole project.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-0" style={{ borderTop: '1px solid #d4d0c8' }}>
        {services.map((service, i) => (
          <div
            key={service.step}
            className="group relative py-12 pr-8 transition-all duration-300"
            style={{
              borderRight: i < services.length - 1 ? '1px solid #d4d0c8' : 'none',
              paddingLeft: i === 0 ? 0 : '2rem',
            }}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            {/* Terracotta accent line that grows on hover */}
            <div
              className="absolute top-0 left-0 transition-all duration-500"
              style={{
                height: '3px',
                width: '0%',
                backgroundColor: '#C1440E',
                transition: 'width 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.width = '100%'}
              onMouseLeave={e => e.currentTarget.style.width = '0%'}
            />
            {/* We use JS hover on parent instead */}

            {/* Oversized step number */}
            <p
              className="font-extrabold select-none"
              style={{
                fontSize: 'clamp(4rem, 10vw, 7rem)',
                color: '#0F2040',
                opacity: 0.06,
                lineHeight: 1,
                marginBottom: '-1.5rem',
                letterSpacing: '-0.04em',
              }}
            >
              {service.step}
            </p>

            {/* Code badge */}
            <p
              className="font-mono font-bold tracking-widest mb-4"
              style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.2em' }}
            >
              {service.code}
            </p>

            {/* Title */}
            <h3
              className="font-bold mb-4"
              style={{ fontSize: '1.25rem', color: '#0F2040', lineHeight: 1.3 }}
            >
              {service.title}
            </h3>

            {/* Divider */}
            <div style={{ width: '32px', height: '2px', backgroundColor: '#d4d0c8', marginBottom: '1rem' }} />

            {/* Description */}
            <p style={{ color: '#666', lineHeight: 1.8, fontSize: '0.9rem' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
