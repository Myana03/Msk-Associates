import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10,  suffix: '+',   label: 'Years of Experience' },
  { value: 5,   suffix: '.0★', label: 'Google Rating' },
  { value: 24,  suffix: 'hr',  label: 'Response Time' },
];

function useCountUp(target, duration = 1600, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    let startTime = null;
    let frame;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.value, 1600, started);
  const isLast = index === stats.length - 1;
  return (
    <div style={{
      padding: 'var(--space-md) 1rem',
      borderRight: isLast ? 'none' : '1px solid var(--color-border)',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px' }}>
        <span style={{
          fontSize: 'clamp(2.2rem, 4vw, 3rem)',
          fontWeight: 700, color: 'var(--color-primary)',
          lineHeight: 1, fontFamily: 'var(--font-display)',
          letterSpacing: '-0.03em',
        }}>
          {count}
        </span>
        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}>
          {stat.suffix}
        </span>
      </div>
      <p style={{
        marginTop: '0.6rem', textTransform: 'uppercase',
        letterSpacing: '0.14em', fontSize: 'var(--text-caption)',
        color: 'var(--color-neutral-500)', fontFamily: 'var(--font-mono)', fontWeight: 500,
      }}>
        {stat.label}
      </p>
    </div>
  );
}

const StatsBar = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
