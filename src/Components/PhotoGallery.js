import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

const allImages = [
  '/Images/realimages/IMG_20250615_090253.jpg',
  '/Images/realimages/IMG_20250615_090234.jpg',
  '/Images/realimages/IMG_20250615_090008.jpg',
  '/Images/realimages/IMG_20250613_115557.jpg',
  '/Images/realimages/IMG_20250613_115556.jpg',
  '/Images/realimages/IMG_20250613_114121.jpg',
  '/Images/realimages/IMG_20250613_114004.jpg',
  '/Images/realimages/IMG_20250418_165924.jpg',
  '/Images/realimages/IMG_20250412_123736.jpg',
  '/Images/realimages/IMG_20250410_102606.jpg',
  '/Images/realimages/IMG_20250225_103256.jpg',
  '/Images/realimages/IMG_20241126_080553.jpg',
  '/Images/realimages/IMG_20241126_080548.jpg',
  '/Images/realimages/IMG_20241109_101025.jpg',
  '/Images/realimages/IMG_20240824_093949.jpg',
  '/Images/realimages/IMG_20240824_093941.jpg',
  '/Images/realimages/IMG_20240824_093940.jpg',
  '/Images/realimages/IMG_20240517_115803.jpg',
  '/Images/realimages/IMG_20240507_094108.jpg',
  '/Images/realimages/IMG_20240507_094011.jpg',
  '/Images/realimages/IMG_20240221_122503.jpg',
  '/Images/realimages/IMG_20240221_122419.jpg',
  '/Images/realimages/IMG_20240221_122412.jpg',
  '/Images/realimages/IMG_20240221_122408.jpg',
  '/Images/realimages/IMG_20240212_131644.jpg',
  '/Images/realimages/IMG_20240113_134914.jpg',
  '/Images/realimages/IMG_20240113_134912.jpg',
  '/Images/realimages/IMG_20240113_134909.jpg',
  '/Images/realimages/IMG_20240113_134900.jpg',
  '/Images/realimages/IMG_20231122_142531.jpg',
  '/Images/realimages/IMG_20231022_165058.jpg',
  '/Images/realimages/IMG_20231022_165056.jpg',
  '/Images/realimages/IMG_20230411_164422.jpg',
  '/Images/realimages/IMG_20230411_164404.jpg',
  '/Images/realimages/IMG_20230303_131528.jpg',
  '/Images/realimages/IMG_20230127_123912.jpg',
  '/Images/realimages/IMG_20221018_112021.jpg',
  '/Images/realimages/IMG_20221018_112006.jpg',
  '/Images/realimages/IMG_20221012_111414.jpg',
  '/Images/realimages/IMG_20220826_104534.jpg',
  '/Images/realimages/IMG_20220705_114831.jpg',
  '/Images/realimages/IMG_20220615_110605.jpg',
  '/Images/realimages/IMG_20220615_110540.jpg',
  '/Images/realimages/IMG_20220602_111741.jpg',
  '/Images/realimages/IMG_20220525_114232.jpg',
  '/Images/realimages/IMG_20220515_121455.jpg',
  '/Images/realimages/IMG_20220506_103613.jpg',
  '/Images/realimages/Snapchat-1993090342.jpg',
  '/Images/realimages/Snapchat-2098051749.jpg',
];

const GRID_COUNT = 9;

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [hovered, setHovered] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + allImages.length) % allImages.length);
  }, []);

  const next = useCallback(() => {
    setLightboxIndex(i => (i + 1) % allImages.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <style>{`
        .gallery-img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .gallery-cell:hover .gallery-img { transform: scale(1.06); }
        .gallery-overlay { opacity: 0; transition: opacity 0.3s ease; background: rgba(20,20,19,0.38); }
        .gallery-cell:hover .gallery-overlay { opacity: 1; }
      `}</style>

      {/* 3×3 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6px',
        borderRadius: '6px',
        overflow: 'hidden',
      }}>
        {allImages.slice(0, GRID_COUNT).map((src, i) => (
          <div
            key={src}
            className="gallery-cell"
            onClick={() => openLightbox(i)}
            style={{
              aspectRatio: '4/3',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              backgroundColor: '#e6dfd8',
            }}
          >
            <img
              src={src}
              alt={`MSK Project ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="gallery-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div className="gallery-overlay" style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontSize: '0.6rem', fontWeight: 500,
                color: 'rgba(255,255,255,0.9)', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
              }}>View</span>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={() => openLightbox(0)}
          style={{
            background: 'none', border: '1px solid #e6dfd8',
            borderRadius: '3px', padding: '11px 28px',
            fontSize: '0.68rem', fontWeight: 500,
            fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: 'pointer',
            color: '#141413',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#cc785c'; e.currentTarget.style.color = '#cc785c'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e6dfd8'; e.currentTarget.style.color = '#141413'; }}
        >
          Browse Projects
        </button>
        <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
          Click any photo to open full view
        </span>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              backgroundColor: 'rgba(10,8,6,0.94)',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', zIndex: 10,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <FiX size={20} />
            </button>

            {/* Counter */}
            <div style={{
              position: 'absolute', top: '1.5rem', left: '1.5rem',
              fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)',
              fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em',
              fontWeight: 600, textTransform: 'uppercase',
            }}>
              {lightboxIndex + 1} / {allImages.length}
            </div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              style={{
                position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', zIndex: 10,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <FiArrowLeft size={20} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={lightboxIndex}
                src={allImages[lightboxIndex]}
                alt={`MSK Project ${lightboxIndex + 1}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={e => e.stopPropagation()}
                style={{
                  maxWidth: '88vw', maxHeight: '88vh',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                }}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              style={{
                position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', zIndex: 10,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <FiArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
