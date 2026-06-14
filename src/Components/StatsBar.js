import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 5,   suffix: '+',  label: 'Years in Practice' },
  { value: 49,  suffix: '+',  label: 'Projects Delivered' },
  { value: 100, suffix: '%',  label: 'Code-Compliant Designs' },
  { value: 24,  suffix: 'hr', label: 'Site Query Response' },
];

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.value, 1600, started);
  return (
    <div
      className="py-8 px-4"
      style={{ borderRight: index < stats.length - 1 ? '1px solid #d4d0c8' : 'none' }}
    >
      <div className="flex items-baseline gap-1">
        <span
          className="font-extrabold"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0F2040', lineHeight: 1, fontFamily: 'Inter, sans-serif' }}
        >
          {count}
        </span>
        <span className="font-bold" style={{ fontSize: '1.1rem', color: '#C1440E', fontFamily: 'Inter, sans-serif' }}>
          {stat.suffix}
        </span>
      </div>
      <p className="mt-1 uppercase tracking-widest" style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '0.1em' }}>
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
    <div ref={ref} style={{ backgroundColor: '#EDEAE3', borderBottom: '1px solid #d4d0c8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
