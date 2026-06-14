import React from 'react';

const HeroBanner = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundColor: '#0F2040',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-3">
          <span style={{width:'32px', height:'1px', backgroundColor:'#C1440E', display:'inline-block'}}></span>
          Hanamakonda · Telangana
        </p>
        <h1
          className="font-extrabold leading-none text-white"
          style={{fontSize:'clamp(2.8rem, 8vw, 6rem)', lineHeight:'1.05', letterSpacing:'-0.02em'}}
          data-aos="fade-up"
        >
          Engineering<br />
          the <span style={{color:'#5B8DB8'}}>Future</span>,<br />
          Building with<br />Vision.
        </h1>
        <p
          className="mt-8 text-gray-400 max-w-lg"
          style={{fontSize:'1.1rem', lineHeight:'1.7'}}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Your vision, engineered with precision. We are your partners in
          building the future — designed safe, built to last.
        </p>
        <div className="mt-10 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="250">
          <a
            href="#contact"
            className="btn-primary inline-block font-bold py-3 px-8 text-white"
            style={{backgroundColor:'#C1440E', borderRadius:'4px'}}
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="btn-outline inline-block font-bold py-3 px-8 text-white border border-white hover:bg-white hover:text-gray-900"
            style={{borderRadius:'4px'}}
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', animation: 'scrollPulse 1.8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
