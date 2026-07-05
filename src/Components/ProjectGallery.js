import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiX, FiArrowUpRight, FiClock } from 'react-icons/fi';
import { projects, activeCategories, comingSoon } from '../data/projects';
import { blurMap } from '../data/projectBlur';
import SectionHeading from './ui/SectionHeading';

const catLabel = (id) => (activeCategories.find((c) => c.id === id) || {}).label || id;

// Featured projects lead the grid as large cards; the rest follow.
const order = (list) => [...list].sort((a, b) => (b.featured === true) - (a.featured === true));

// Responsive cover sources: 480 / 800 / 1200-wide variants sit beside cover.jpg.
// `sizes` tells the browser the card's rendered width so it fetches the
// smallest file that still looks sharp (big win on phones + regular cards).
const coverSrcSet = (cover) => {
  const b = cover.replace('/cover.jpg', '');
  return `${b}/cover-480.jpg 480w, ${b}/cover-800.jpg 800w, ${cover} 1200w`;
};
const SIZES_FEATURED = '(max-width: 900px) 100vw, 640px';
const SIZES_REGULAR = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 320px';

// Reveal the sharp image once it has decoded (covers cached images too, which
// don't re-fire onLoad — the ref checks `complete` on mount).
const markLoaded = (img) => { if (img && img.complete && img.naturalWidth > 0) img.classList.add('is-loaded'); };

// Scroll-triggered reveal (self-contained, token-driven — matches the motion
// language used across the rest of the site).
function Reveal({ children, delay = 0, y = 24, amount = 0.3, style, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectGallery() {
  const reduce = useReducedMotion();
  const [cat, setCat] = useState('all');
  const [box, setBox] = useState(null); // { projectIndex, imageIndex } | null

  const isComingSoon = cat === 'coming-soon';
  const filtered = order(cat === 'all' ? projects : projects.filter((p) => p.category === cat));

  const openBox = (project, imageIndex = 0) => {
    const pIdx = projects.findIndex((p) => p.id === project.id);
    setBox({ projectIndex: pIdx, imageIndex });
  };
  const closeBox = () => setBox(null);

  const current = box ? projects[box.projectIndex] : null;
  const prevImg = useCallback(() => {
    setBox((b) => b && ({ ...b, imageIndex: (b.imageIndex - 1 + projects[b.projectIndex].gallery.length) % projects[b.projectIndex].gallery.length }));
  }, []);
  const nextImg = useCallback(() => {
    setBox((b) => b && ({ ...b, imageIndex: (b.imageIndex + 1) % projects[b.projectIndex].gallery.length }));
  }, []);

  useEffect(() => {
    if (!box) return;
    // Lock scroll without losing position: restore the exact offset on close.
    const scrollY = window.scrollY;
    const onKey = (e) => {
      if (e.key === 'Escape') closeBox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [box, prevImg, nextImg]);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-border)' }}>
      <style>{`
        /* Filter tabs — light theme, matching the site's pill/button language */
        .pfilter {
          position: relative; border: 1px solid var(--color-border-strong); background: transparent;
          color: var(--color-neutral-600); font-family: var(--font-mono); font-size: 0.72rem;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full); cursor: pointer;
          transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
        }
        .pfilter:hover { color: var(--color-primary); border-color: var(--color-primary); }
        .pfilter[aria-pressed="true"] { color: #fff; border-color: transparent; }
        /* isolate so the pill's own stacking context stays inside the button
           (otherwise it drops behind the light section background). */
        .pfilter { isolation: isolate; }
        .pfilter__pill { position: absolute; inset: 0; border-radius: var(--radius-full); background: var(--color-accent); z-index: 0; }
        .pfilter__label { position: relative; z-index: 1; }

        .pgrid { display: grid; grid-template-columns: repeat(12, 1fr); grid-auto-rows: 210px; grid-auto-flow: dense; gap: 18px; }
        .pcard {
          position: relative; overflow: hidden; cursor: pointer; padding: 0; border: none;
          border-radius: var(--radius-lg); background: var(--color-surface-alt); text-align: left;
          box-shadow: var(--shadow-md);
          transition: box-shadow var(--duration-base) var(--ease-premium), transform var(--duration-base) var(--ease-premium);
        }
        .pcard:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }
        .pcard--featured { grid-column: span 6; grid-row: span 2; }
        .pcard--regular  { grid-column: span 3; grid-row: span 2; }
        .pcard__blur {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block;
          transform: scale(1.1); filter: blur(14px); z-index: 0;
        }
        .pcard__img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; z-index: 1;
          opacity: 0; transition: opacity 0.5s ease, transform 0.9s var(--ease-premium);
        }
        .pcard__img.is-loaded { opacity: 1; }
        .pcard:hover .pcard__img.is-loaded { transform: scale(1.06); }
        .pcard__scrim {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(20,23,19,0) 30%, rgba(20,23,19,0.5) 66%, rgba(20,23,19,0.88) 100%);
          transition: background var(--duration-base) ease;
        }
        .pcard:hover .pcard__scrim { background: linear-gradient(180deg, rgba(20,23,19,0.12) 12%, rgba(20,23,19,0.55) 58%, rgba(20,23,19,0.92) 100%); }
        .pcard__cat {
          position: absolute; top: 16px; left: 18px; z-index: 2;
          font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: #fff; padding: 5px 10px; border-radius: var(--radius-full);
          background: rgba(20,23,19,0.4); border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .pcard__meta { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: clamp(1rem, 2vw, 1.6rem); }
        .pcard__title { font-family: var(--font-display); color: #fff; font-weight: 600; letter-spacing: -0.02em; line-height: 1.05; margin: 0; font-size: clamp(1.05rem, 1.6vw, 1.5rem); }
        .pcard--featured .pcard__title { font-size: clamp(1.4rem, 2.4vw, 2.2rem); }
        .pcard__loc { color: rgba(255,255,255,0.72); font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.04em; margin-top: 6px; }
        .pcard__view {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 12px;
          color: #fff; font-family: var(--font-body); font-weight: 600; font-size: 0.78rem;
          opacity: 0; transform: translateY(8px);
          transition: opacity var(--duration-base) ease, transform var(--duration-base) var(--ease-premium);
        }
        .pcard:hover .pcard__view, .pcard:focus-visible .pcard__view { opacity: 1; transform: translateY(0); }
        .pcard__view svg { color: var(--color-accent-on-dark); }

        /* Coming-soon placeholder cards — light, elegant, dashed */
        .pcard--soon {
          display: flex; flex-direction: column; justify-content: space-between;
          padding: clamp(1.15rem, 2vw, 1.7rem);
          background: var(--color-surface); border: 1px dashed var(--color-border-strong); cursor: default;
        }
        .pcard--soon:hover { transform: none; box-shadow: var(--shadow-md); }
        .pcard--soon .pcard__title { color: var(--color-primary); }
        .pcard--soon .pcard__loc { color: var(--color-neutral-500); }
        .pcard__soonbadge {
          display: inline-flex; align-items: center; gap: 7px; align-self: flex-start;
          font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--color-accent); padding: 5px 11px; border-radius: var(--radius-full);
          border: 1px solid rgba(179,58,46,0.35); background: rgba(179,58,46,0.08);
        }

        /* Lightbox controls (dark overlay, standard) */
        .lb-btn {
          position: absolute; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;
          color: #fff; z-index: 10; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          transition: background var(--duration-fast) ease;
        }
        .lb-btn:hover { background: rgba(255,255,255,0.18); }
        .lb-close {
          position: absolute; top: 1.4rem; right: 1.4rem; z-index: 12;
          display: inline-flex; align-items: center; gap: 8px;
          height: 46px; padding: 0 16px 0 13px; border-radius: var(--radius-full);
          background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.3);
          color: #fff; cursor: pointer; font-family: var(--font-mono); font-size: 0.64rem;
          letter-spacing: 0.16em; text-transform: uppercase;
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          transition: background var(--duration-fast) ease, transform var(--duration-fast) ease, border-color var(--duration-fast) ease;
        }
        .lb-close:hover { background: var(--color-accent); border-color: var(--color-accent); transform: translateY(-1px); }

        @media (max-width: 900px) {
          .pgrid { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 175px; }
          .pcard--featured { grid-column: span 6; grid-row: span 2; }
          .pcard--regular  { grid-column: span 3; grid-row: span 2; }
        }
        @media (max-width: 600px) {
          .pgrid { grid-template-columns: 1fr; grid-auto-rows: 240px; gap: 14px; }
          .pcard--featured, .pcard--regular { grid-column: span 1 !important; grid-row: span 1 !important; }
          .pfilter { padding: 0.5rem 0.95rem; font-size: 0.66rem; letter-spacing: 0.1em; }
          .pcard__title { font-size: 1.25rem !important; }
          .lb-close { top: 1rem; right: 1rem; height: 42px; }
        }
        @media (hover: none) {
          .pcard:hover .pcard__img { transform: none; }
          .pcard:active .pcard__img { transform: scale(1.03); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-14" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
        {/* Intro — shared SectionHeading, identical to the rest of the site */}
        <SectionHeading
          eyebrow="Our Work"
          title="Projects"
          description="Residential and commercial builds across Telangana — each one designed, stamped, and site-supervised by MSK, from the first calculation to the finished structure."
          style={{ marginBottom: 'var(--space-lg)' }}
        />

        {/* Filters */}
        <Reveal delay={0.05} amount={0.2}>
          <div role="group" aria-label="Filter projects by category" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginBottom: 'var(--space-md)' }}>
            {activeCategories.map((c) => (
              <button key={c.id} className="pfilter" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {cat === c.id && (
                  <motion.span layoutId="pfilter-pill" className="pfilter__pill" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />
                )}
                <span className="pfilter__label">{c.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout={!reduce} className="pgrid">
          <AnimatePresence mode="popLayout">
            {isComingSoon
              ? comingSoon.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout={!reduce}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(i * 0.06, 0.4), ease: [0.16, 1, 0.3, 1] }}
                  className="pcard pcard--regular pcard--soon"
                  aria-label={`${item.title}, upcoming ${item.typeLabel.toLowerCase()} project in ${item.location}, expected ${item.completionYear}`}
                >
                  <span className="pcard__soonbadge"><FiClock size={12} /> Coming Soon</span>
                  <span style={{ display: 'block' }}>
                    <span className="pcard__title" style={{ display: 'block' }}>{item.title}</span>
                    <span className="pcard__loc" style={{ display: 'block' }}>{item.typeLabel} · {item.location} · {item.completionYear}</span>
                  </span>
                </motion.div>
              ))
              : filtered.map((p, i) => (
                <motion.button
                  key={p.id}
                  layout={!reduce}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(i * 0.05, 0.4), ease: [0.16, 1, 0.3, 1] }}
                  className={`pcard ${p.featured ? 'pcard--featured' : 'pcard--regular'}`}
                  onClick={() => openBox(p, 0)}
                  aria-label={`${p.title}, ${catLabel(p.category)} project in ${p.location}. View gallery.`}
                >
                  <img className="pcard__blur" src={blurMap[p.id]} alt="" aria-hidden="true" />
                  <img
                    className="pcard__img"
                    src={p.coverImage}
                    srcSet={coverSrcSet(p.coverImage)}
                    sizes={p.featured ? SIZES_FEATURED : SIZES_REGULAR}
                    alt={`${p.title} — ${catLabel(p.category)} project, ${p.location}`}
                    loading="lazy" decoding="async"
                    ref={markLoaded}
                    onLoad={(e) => markLoaded(e.currentTarget)}
                  />
                  <span className="pcard__scrim" aria-hidden="true" />
                  <span className="pcard__cat">{catLabel(p.category)}</span>
                  <span className="pcard__meta">
                    <span className="pcard__title" style={{ display: 'block' }}>{p.title}</span>
                    <span className="pcard__loc" style={{ display: 'block' }}>
                      {p.location}{p.completionYear ? ` · ${p.completionYear}` : ''}
                    </span>
                    <span className="pcard__view">View Project <FiArrowUpRight size={15} /></span>
                  </span>
                </motion.button>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox — portalled to <body> so it clears the fixed header. */}
      {createPortal(
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
            onClick={closeBox}
            role="dialog" aria-modal="true" aria-label={`${current.title} gallery`}
            style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,12,8,0.95)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'absolute', top: '1.6rem', left: '1.8rem', right: '9.5rem', zIndex: 5 }}>
              <p style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.01em' }}>{current.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', marginTop: '3px' }}>
                {catLabel(current.category)} · {current.location} · {String(box.imageIndex + 1).padStart(2, '0')} / {current.gallery.length}
              </p>
            </div>

            <button onClick={(e) => { e.stopPropagation(); closeBox(); }} aria-label="Close gallery" className="lb-close">
              <FiX size={20} /><span>Close</span>
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label="Previous image" className="lb-btn" style={{ left: '1.5rem', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px' }}>
              <FiArrowLeft size={20} />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={box.imageIndex}
                src={current.gallery[box.imageIndex]}
                alt={`${current.title} — photograph ${box.imageIndex + 1} of ${current.gallery.length}`}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '90vw', maxHeight: '84vh', objectFit: 'contain', borderRadius: 'var(--radius-sm)', boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}
              />
            </AnimatePresence>

            <button onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label="Next image" className="lb-btn" style={{ right: '1.5rem', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px' }}>
              <FiArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </div>
  );
}
