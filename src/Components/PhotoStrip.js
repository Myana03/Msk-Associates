import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    id: 'rcc',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop',
    label: 'RCC Structure',
    sub: 'Columns · Beams · Slabs',
    position: 'center 60%',
  },
  {
    id: 'interior1',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85&auto=format&fit=crop',
    label: 'Living Spaces',
    sub: 'Interior Planning',
    position: 'center center',
  },
  {
    id: 'duplex',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85&auto=format&fit=crop',
    label: 'Duplex Exterior',
    sub: 'Residential',
    position: 'center 55%',
  },
  {
    id: 'interior2',
    url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=85&auto=format&fit=crop',
    label: 'Interior Finish',
    sub: 'Design & Supervision',
    position: 'center center',
  },
];

const PhotoStrip = () => (
  <div style={{ backgroundColor: '#0a0f18', padding: '0' }}>

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
        padding: '3.5rem 3rem 2rem',
        maxWidth: '1400px', margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ display: 'inline-block', width: '28px', height: '2px', backgroundColor: '#C1440E', flexShrink: 0 }} />
        <span style={{
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.38)',
          textTransform: 'uppercase', letterSpacing: '0.22em',
          fontFamily: 'Inter, sans-serif', fontWeight: 600,
        }}>
          Our Work
        </span>
      </div>
      <a href="#projects" style={{
        fontSize: '0.7rem', color: 'rgba(255,255,255,0.38)',
        textDecoration: 'none', fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        transition: 'color 0.2s ease',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
      >
        View All Projects
        <span style={{ display: 'inline-block', width: '24px', height: '1px', backgroundColor: 'currentColor' }} />
      </a>
    </motion.div>

    {/* Photo grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '280px 280px',
      gap: '3px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 3rem 3.5rem',
    }}
      className="photo-strip-grid"
    >
      {/* Large photo — spans 2 rows */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ gridRow: '1 / 3', position: 'relative', overflow: 'hidden', borderRadius: '4px 0 0 4px', cursor: 'default' }}
        className="photo-item"
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${photos[0].url}')`,
          backgroundSize: 'cover', backgroundPosition: photos[0].position,
          transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} className="photo-bg" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,12,24,0.82) 0%, rgba(5,12,24,0.2) 50%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: '1.6rem', left: '1.6rem' }}>
          <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'Cormorant Garant, serif', margin: 0, lineHeight: 1.1 }}>
            {photos[0].label}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.62rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '5px 0 0' }}>
            {photos[0].sub}
          </p>
        </div>
      </motion.div>

      {/* 3 smaller photos */}
      {photos.slice(1).map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative', overflow: 'hidden', cursor: 'default',
            borderRadius: i === 1 ? '0 4px 0 0' : i === 2 ? '0 0 4px 0' : '0',
          }}
          className="photo-item"
        >
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${p.url}')`,
            backgroundSize: 'cover', backgroundPosition: p.position,
            transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
          }} className="photo-bg" />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(5,12,24,0.75) 0%, transparent 55%)',
          }} />
          <div style={{ position: 'absolute', bottom: '1.1rem', left: '1.1rem' }}>
            <p style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, fontFamily: 'Cormorant Garant, serif', margin: 0 }}>
              {p.label}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.56rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '3px 0 0' }}>
              {p.sub}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <style>{`
      .photo-item:hover .photo-bg { transform: scale(1.05); }
      @media (max-width: 768px) {
        .photo-strip-grid {
          grid-template-columns: 1fr 1fr !important;
          grid-template-rows: 200px 200px 200px !important;
          padding: 0 1rem 2rem !important;
        }
        .photo-strip-grid > div:first-child {
          grid-row: 1 / 2 !important;
          grid-column: 1 / 3 !important;
          border-radius: 4px 4px 0 0 !important;
        }
      }
    `}</style>
  </div>
);

export default PhotoStrip;
