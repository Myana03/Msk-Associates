import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Split layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Photo */}
        <div data-aos="fade-right">
          <div className="relative overflow-hidden" style={{ borderRadius: '4px' }}>
            <img
              src="/Images/OnlineImages/jr-harris-T72ooC45UTE-unsplash.jpg"
              alt="MSK Associates construction site"
              className="w-full object-cover"
              style={{ height: '520px' }}
            />
            {/* Year badge */}
            <div
              className="absolute bottom-0 left-0 px-8 py-6"
              style={{ backgroundColor: '#C1440E' }}
            >
              <p className="text-white font-extrabold" style={{ fontSize: '2rem', lineHeight: 1 }}>2021</p>
              <p className="text-white text-xs uppercase tracking-widest mt-1">Founded</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div data-aos="fade-left">
          <p className="uppercase tracking-widest font-semibold mb-6" style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em' }}>
            About Us
          </p>
          <h2
            className="font-extrabold mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1 }}
          >
            Pioneering with Precision
          </h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#C1440E', marginBottom: '2rem' }} />
          <div style={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem' }} className="space-y-5">
            <p>
              MSK Associates has been operating out of Hanamakonda since August 2021 — a focused team that has delivered structural work on 49 projects across Telangana.
            </p>
            <p>
              We handle the full scope: residential homes, multi-storey commercial complexes, industrial structures, and layout planning for plots and townships. Every project moves through the same process — drawings, statutory stamping, and site visits at critical milestones.
            </p>
            <p>
              Small enough that the founder reviews every drawing personally. Experienced enough to run concurrent projects without cutting corners on calculation or site supervision.
            </p>
          </div>
        </div>
      </div>

      {/* Founder's Note */}
      <div
        className="mt-20 relative overflow-hidden"
        style={{ backgroundColor: '#0F2040', borderRadius: '4px' }}
        data-aos="fade-up"
      >
        {/* Decorative background quote mark */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-0.5rem', left: '1.5rem',
            fontSize: '16rem', lineHeight: 1, color: 'rgba(193,68,14,0.08)',
            fontFamily: 'Georgia, serif', userSelect: 'none', pointerEvents: 'none',
          }}
        >&ldquo;</span>

        <div className="relative px-10 py-14 lg:px-16">
          {/* Pull-quote */}
          <p
            className="italic"
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              lineHeight: 1.65,
              fontFamily: 'Georgia, serif',
              maxWidth: '780px',
              marginBottom: '2rem',
            }}
          >
            "I started MSK Associates with one belief — that the engineer who designs your structure should also be the one who stands on your site."
          </p>

          {/* Supporting prose */}
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.85, maxWidth: '680px', marginBottom: '2.5rem' }}>
            With over 7 years of experience across residential, commercial, and industrial projects in Telangana, I founded MSK Associates in 2021 to bring that personal accountability to every client. When you work with us, you work directly with me — from the first calculation to the final inspection.
          </p>

          {/* Divider + attribution */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.75rem' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: '28px', height: '2px', backgroundColor: '#C1440E' }} />
              <div>
                <p className="font-bold text-white" style={{ fontSize: '0.95rem', letterSpacing: '0.04em' }}>Er. Myana Sai Krishna</p>
                <p style={{ color: '#6b7280', fontSize: '0.78rem', marginTop: '3px', letterSpacing: '0.04em' }}>
                  ME (Structures), AMIE &nbsp;·&nbsp; Founder, MSK Associates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
