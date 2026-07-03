import React from 'react';

const items = [
  'Structural Design',
  'Residential Projects',
  'Commercial Buildings',
  'Project Management',
  'Innovative Solutions',
  'Safe & Sustainable Design',
  'Cost-Effective Planning',
  'Quality Construction',
];

const MarqueeStrip = () => (
  <div style={{ backgroundColor: '#f7f4ed', overflow: 'hidden', padding: '14px 0', borderBottom: '1px solid #eceae4' }}>
    <style>{`
      @keyframes mskMarquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .msk-marquee-track {
        display: flex;
        width: max-content;
        animation: mskMarquee 32s linear infinite;
      }
      .msk-marquee-track:hover { animation-play-state: paused; }
    `}</style>
    <div className="msk-marquee-track">
      {[0, 1].map(di => (
        <div key={di} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {items.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.63rem', fontWeight: 600,
                color: '#8a8278',
                textTransform: 'uppercase', letterSpacing: '0.18em',
                fontFamily: 'Figtree, sans-serif',
                padding: '0 2rem', whiteSpace: 'nowrap',
              }}>
                {item}
              </span>
              <span style={{ color: '#1c1c1c', fontSize: '0.38rem', opacity: 0.25 }}>◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
