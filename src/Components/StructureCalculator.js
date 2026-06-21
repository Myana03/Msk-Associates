import React, { useState, useMemo } from 'react';

const FLOOR_OPTIONS = [
  { label: 'G+1', floors: 2 },
  { label: 'G+2', floors: 3 },
  { label: 'G+3', floors: 4 },
  { label: 'G+4', floors: 5 },
];

const STEEL_KG_PER_SQFT = { 2: 1.8, 3: 2.2, 4: 2.8, 5: 3.5 };
const CONC_M3_PER_SQFT  = { 2: 0.016, 3: 0.018, 4: 0.020, 5: 0.022 };

function computeStructure(widthFt, depthFt, totalFloors) {
  const maxSpanFt = totalFloors <= 2 ? 14 : totalFloors <= 4 ? 12 : 10;
  const numColsX = Math.max(2, Math.ceil(widthFt / maxSpanFt) + 1);
  const numColsY = Math.max(2, Math.ceil(depthFt / maxSpanFt) + 1);
  const spacingXFt = widthFt / (numColsX - 1);
  const spacingYFt = depthFt / (numColsY - 1);

  const columns = [];
  for (let row = 0; row < numColsY; row++) {
    for (let col = 0; col < numColsX; col++) {
      const isCorner = (col === 0 || col === numColsX - 1) && (row === 0 || row === numColsY - 1);
      const isEdge = !isCorner && (col === 0 || col === numColsX - 1 || row === 0 || row === numColsY - 1);
      columns.push({ col, row, type: isCorner ? 'corner' : isEdge ? 'edge' : 'interior' });
    }
  }

  const numBeams = (numColsX - 1) * numColsY + numColsX * (numColsY - 1);
  const builtUpSqFt = widthFt * depthFt * totalFloors;
  const steelTonnes = ((builtUpSqFt * (STEEL_KG_PER_SQFT[totalFloors] || 3.5)) / 1000).toFixed(1);
  const concreteM3  = Math.round(builtUpSqFt * (CONC_M3_PER_SQFT[totalFloors] || 0.022));
  const spanLabel = Math.round(spacingXFt) === Math.round(spacingYFt)
    ? `${Math.round(spacingXFt)} ft`
    : `${Math.round(spacingXFt)} × ${Math.round(spacingYFt)} ft`;

  return { columns, numColumns: columns.length, numBeams, numColsX, numColsY, steelTonnes, concreteM3, spanLabel };
}

const COL_COLORS = { corner: '#C1440E', edge: '#D4754A', interior: 'rgba(193,68,14,0.45)' };
const COL_RADII  = { corner: 6.5, edge: 5.5, interior: 4.5 };
const SVG_W = 300;
const SVG_H = 240;
const PAD   = 32;

function DimensionSlider({ label, value, min, max, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
        <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter' }}>
          {label}
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <input
            type="number"
            min={min} max={max}
            value={value}
            onChange={e => {
              const v = Math.max(min, Math.min(max, Number(e.target.value)));
              onChange(v);
            }}
            style={{
              width: '52px', textAlign: 'right', padding: '2px 4px',
              border: 'none', borderBottom: '1.5px solid #C1440E',
              background: 'transparent', fontSize: '1.2rem', fontWeight: 800,
              color: '#0F2040', fontFamily: 'Inter', outline: 'none',
            }}
          />
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'Inter' }}>ft</span>
        </div>
      </div>
      <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
        {/* Track fill */}
        <div style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          width: '100%', height: '4px', borderRadius: '2px', backgroundColor: '#e5e7eb',
        }} />
        <div style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          width: `${pct}%`, height: '4px', borderRadius: '2px', backgroundColor: '#C1440E',
          pointerEvents: 'none',
        }} />
        <input
          type="range" min={min} max={max} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="msk-slider"
          style={{
            position: 'relative', width: '100%', margin: 0, padding: 0,
            appearance: 'none', WebkitAppearance: 'none',
            background: 'transparent', cursor: 'pointer', height: '20px',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
        <span style={{ fontSize: '0.6rem', color: '#d1d5db', fontFamily: 'Inter' }}>{min} ft</span>
        <span style={{ fontSize: '0.6rem', color: '#d1d5db', fontFamily: 'Inter' }}>{max} ft</span>
      </div>
    </div>
  );
}

export default function StructureCalculator() {
  const [widthFt,  setWidthFt]  = useState(30);
  const [depthFt,  setDepthFt]  = useState(60);
  const [floorIdx, setFloorIdx] = useState(1);

  const totalFloors = FLOOR_OPTIONS[floorIdx].floors;
  const sqYards = Math.round((widthFt * depthFt) / 9);

  const layout = useMemo(
    () => computeStructure(widthFt, depthFt, totalFloors),
    [widthFt, depthFt, totalFloors]
  );

  const drawW = SVG_W - 2 * PAD;
  const drawH = SVG_H - 2 * PAD;
  const toX = (col) => PAD + (col / (layout.numColsX - 1)) * drawW;
  const toY = (row) => PAD + (row / (layout.numColsY - 1)) * drawH;

  return (
    <>
      {/* Slider thumb styles — injected once */}
      <style>{`
        .msk-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #C1440E;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .msk-slider::-moz-range-thumb {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #C1440E;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .msk-slider:focus { outline: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12" data-aos="fade-up">
          <p style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Inter', marginBottom: '0.75rem' }}>
            Interactive Design Tool
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1, fontFamily: 'Cormorant Garant, Georgia, serif', fontWeight: 800, marginBottom: '0.75rem' }}>
            See Your Structure
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px' }}>
            Enter your plot dimensions and floors. See where columns go — and why every dot has engineering behind it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Controls + Stats */}
          <div data-aos="fade-right">

            {/* Plot size sliders */}
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter' }}>
                  Plot Dimensions
                </p>
                <span style={{ fontSize: '0.72rem', color: '#C1440E', fontWeight: 700, fontFamily: 'Inter', backgroundColor: 'rgba(193,68,14,0.08)', padding: '3px 10px', borderRadius: '20px' }}>
                  ≈ {sqYards} sq yd
                </span>
              </div>

              <DimensionSlider
                label="Width"
                value={widthFt} min={15} max={100}
                onChange={setWidthFt}
              />
              <DimensionSlider
                label="Depth"
                value={depthFt} min={20} max={150}
                onChange={setDepthFt}
              />
            </div>

            {/* Floor selector */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.62rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter', marginBottom: '0.75rem' }}>
                Number of Floors
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {FLOOR_OPTIONS.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setFloorIdx(i)}
                    style={{
                      flex: 1, padding: '10px 4px', borderRadius: '4px',
                      cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.15s',
                      border: floorIdx === i ? '2px solid #C1440E' : '1px solid #d1d5db',
                      backgroundColor: floorIdx === i ? 'rgba(193,68,14,0.06)' : 'white',
                      color: floorIdx === i ? '#C1440E' : '#374151',
                      fontSize: '0.88rem', fontWeight: 700,
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { label: 'Columns',       val: layout.numColumns,  unit: '' },
                  { label: 'Beams',         val: layout.numBeams,    unit: '' },
                  { label: 'Est. Steel',    val: layout.steelTonnes, unit: 't' },
                  { label: 'Est. Concrete', val: layout.concreteM3,  unit: 'm³' },
                ].map(s => (
                  <div key={s.label} style={{ padding: '14px', backgroundColor: '#f9fafb', borderRadius: '4px', border: '1px solid #f3f4f6' }}>
                    <p style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0F2040', fontFamily: 'Inter', lineHeight: 1 }}>
                      {s.val}
                      <span style={{ fontSize: '0.82rem', color: '#C1440E', marginLeft: '3px' }}>{s.unit}</span>
                    </p>
                    <p style={{ fontSize: '0.62rem', color: '#9ca3af', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter' }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.68rem', color: '#d1d5db', marginTop: '10px', fontFamily: 'Inter', lineHeight: 1.6 }}>
                Indicative estimates only. Actual quantities require a full structural analysis.
              </p>
            </div>

            {/* Pull quote + CTA */}
            <blockquote style={{ borderLeft: '3px solid #C1440E', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.8, fontStyle: 'italic', fontFamily: 'Inter' }}>
                "Column spacing isn't guesswork — it follows load path, beam span limits, and soil bearing capacity. Every dot you see has a calculation behind it."
              </p>
            </blockquote>

            <a
              href="#contact"
              style={{
                display: 'inline-block', backgroundColor: '#C1440E', color: '#fff',
                padding: '0.75rem 1.5rem', borderRadius: '4px',
                fontSize: '0.88rem', fontWeight: 600, fontFamily: 'Inter',
                textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(193,68,14,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              Get This Designed for Your Plot →
            </a>
          </div>

          {/* RIGHT — SVG structural plan */}
          <div data-aos="fade-left">
            <div style={{ backgroundColor: '#0F2040', borderRadius: '6px', padding: '20px 20px 16px' }}>

              <p style={{ textAlign: 'center', color: '#4b5563', fontSize: '0.62rem', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                {widthFt} ft × {depthFt} ft &nbsp;·&nbsp; {FLOOR_OPTIONS[floorIdx].label} &nbsp;·&nbsp; Span ~{layout.spanLabel}
              </p>

              <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>

                {/* Width dimension */}
                <line x1={PAD} y1={SVG_H - 10} x2={SVG_W - PAD} y2={SVG_H - 10} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1={PAD} y1={SVG_H - 14} x2={PAD} y2={SVG_H - 6} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1={SVG_W - PAD} y1={SVG_H - 14} x2={SVG_W - PAD} y2={SVG_H - 6} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x={SVG_W / 2} y={SVG_H - 1} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">
                  {widthFt} ft
                </text>

                {/* Depth dimension */}
                <line x1={SVG_W - 10} y1={PAD} x2={SVG_W - 10} y2={SVG_H - PAD} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1={SVG_W - 14} y1={PAD} x2={SVG_W - 6} y2={PAD} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1={SVG_W - 14} y1={SVG_H - PAD} x2={SVG_W - 6} y2={SVG_H - PAD} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x={SVG_W - 1} y={SVG_H / 2} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter"
                  transform={`rotate(-90, ${SVG_W - 1}, ${SVG_H / 2})`}>
                  {depthFt} ft
                </text>

                {/* Horizontal beams */}
                {Array.from({ length: layout.numColsY }, (_, row) =>
                  Array.from({ length: layout.numColsX - 1 }, (_, col) => (
                    <line key={`h-${row}-${col}`}
                      x1={toX(col)} y1={toY(row)} x2={toX(col + 1)} y2={toY(row)}
                      stroke="rgba(193,68,14,0.5)" strokeWidth="1.5" />
                  ))
                )}

                {/* Vertical beams */}
                {Array.from({ length: layout.numColsX }, (_, col) =>
                  Array.from({ length: layout.numColsY - 1 }, (_, row) => (
                    <line key={`v-${col}-${row}`}
                      x1={toX(col)} y1={toY(row)} x2={toX(col)} y2={toY(row + 1)}
                      stroke="rgba(193,68,14,0.5)" strokeWidth="1.5" />
                  ))
                )}

                {/* Columns */}
                {layout.columns.map((c, i) => {
                  const x = toX(c.col);
                  const y = toY(c.row);
                  const r = COL_RADII[c.type];
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r={r + 5} fill="rgba(255,255,255,0.03)" />
                      <circle cx={x} cy={y} r={r} fill={COL_COLORS[c.type]} />
                    </g>
                  );
                })}
              </svg>

              {/* Legend */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                {[
                  { color: '#C1440E',             label: 'Corner column' },
                  { color: '#D4754A',             label: 'Edge column' },
                  { color: 'rgba(193,68,14,0.5)', label: 'Interior column' },
                ].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: l.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.6rem', color: '#6b7280', fontFamily: 'Inter' }}>{l.label}</span>
                  </div>
                ))}
              </div>

              <p style={{ textAlign: 'center', fontSize: '0.6rem', color: '#374151', marginTop: '8px', fontFamily: 'Inter', lineHeight: 1.6 }}>
                Corner columns carry biaxial bending · Edge columns carry uniaxial · Interior columns carry highest axial load
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
