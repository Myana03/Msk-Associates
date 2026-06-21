import React, { useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { getContactPhone } from '../config/contact';

const PROJECT_TYPES = [
  { id: 'home',       num: '01', label: 'New home',               sub: 'Residential building' },
  { id: 'commercial', num: '02', label: 'Commercial building',     sub: 'Shops, offices, complexes' },
  { id: 'extension',  num: '03', label: 'Adding a floor',          sub: 'Extension to existing structure' },
  { id: 'industrial', num: '04', label: 'Industrial / warehouse',  sub: 'Factory, storage, facility' },
];

const FLOORS     = ['G+1', 'G+2', 'G+3', 'G+4'];
const CONTRACTOR = ['Yes, I have one', 'No — MSK to build', 'Not decided yet'];
const TIMELINE   = ['As soon as possible', '1–3 months', '3–6 months', 'Just exploring'];

const CHECKLISTS = {
  home: [
    { text: 'Structural drawings',     note: 'Full RCC design — columns, beams, footings, slabs' },
    { text: 'Foundation design',       note: 'Sized to your plot\'s soil bearing capacity' },
    { text: 'Statutory Approvals & Compliance',  note: 'Preparing approval-ready documentation and navigating regulatory requirements with confidence.' },
  ],
  commercial: [
    { text: 'Structural drawings',      note: 'Full RCC design — columns, beams, footings, slabs' },
    { text: 'Foundation design',        note: 'Sized to your plot\'s soil bearing capacity' },
    { text: 'Load calculation report',  note: 'Live loads, dead loads, and wind loads for commercial use' },
    { text: 'Statutory Approvals & Compliance', note: 'Preparing approval-ready documentation and navigating regulatory requirements with confidence.' },
  ],
  extension: [
    { text: 'Structural assessment',        note: 'Existing building evaluated for current load capacity — mandatory first step' },
    { text: 'New floor structural drawings', note: 'Column extension, beam layout, slab design' },
    { text: 'Foundation adequacy check',     note: 'Verify existing foundation can carry additional load' },
  ],
  industrial: [
    { text: 'Structural drawings',      note: 'RCC or steel frame design based on your use case' },
    { text: 'Foundation design',        note: 'Deep foundation analysis for equipment and floor loads' },
    { text: 'Load calculation report',  note: 'Equipment loads, crane loads, live floor loads' },
    { text: 'Statutory Approvals & Compliance',   note: 'Preparing approval-ready documentation and navigating regulatory requirements with confidence.' },
  ],
};

const DRAWING_TIME = {
  home:       { 'G+1': '1 week', 'G+2': '1–2 weeks', 'G+3': '2–3 weeks', 'G+4': '2–3 weeks' },
  commercial: { 'G+1': '2 weeks', 'G+2': '2–3 weeks', 'G+3': '3–4 weeks', 'G+4': '3–4 weeks' },
  extension:  { 'G+1': '1 week', 'G+2': '1 week', 'G+3': '1–2 weeks', 'G+4': '2 weeks' },
  industrial: { 'G+1': '2–3 weeks', 'G+2': '3–4 weeks', 'G+3': '3–4 weeks', 'G+4': '4–5 weeks' },
};

const START_NOTES = {
  'As soon as possible': 'We can begin within the week — just reach out.',
  '1–3 months':          'Drawings will be ready well before your contractor breaks ground.',
  '3–6 months':          'Plenty of lead time — we\'ll fit around your schedule.',
  'Just exploring':      'No pressure. We\'re happy to answer questions before you commit.',
};

const TYPE_LABEL = {
  home: 'residential home', commercial: 'commercial building',
  extension: 'floor extension', industrial: 'industrial structure',
};


function buildResult(type, contractor, timeline) {
  const items = [...(CHECKLISTS[type] || CHECKLISTS.home)];

  items.push({
    text: 'Site supervision — key stage visits',
    note: 'Foundation, plinth beam, slab pour — MSK is on-site at every critical stage, not just on-paper.',
  });

  const contractorNote = contractor === 'No — MSK to build'
    ? 'MSK handles full construction — structural design, stamping, site management, and build. One team, start to finish.'
    : contractor === 'Not decided yet'
    ? "Not sure yet? MSK can handle just the structural side, or the full build — we'll figure it out on the call."
    : null;

  const drawingTime = (DRAWING_TIME[type] || DRAWING_TIME.home)['G+2'] || '2 weeks';
  const startNote   = START_NOTES[timeline] || '';

  return { items, contractorNote, drawingTime, startNote };
}

// ─── small reusable pill button ───────────────────────────────────────────────
function Pill({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '9px 16px', borderRadius: '4px', cursor: 'pointer',
        fontFamily: 'Inter', fontSize: '0.85rem', fontWeight: 600,
        transition: 'all 0.15s', whiteSpace: 'nowrap',
        border: selected ? '2px solid #C1440E' : '1px solid #d1d5db',
        backgroundColor: selected ? 'rgba(193,68,14,0.07)' : 'white',
        color: selected ? '#C1440E' : '#374151',
      }}
    >
      {label}
    </button>
  );
}

// ─── progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ step }) {
  const steps = ['Your project', 'Plot & floors', 'Situation', 'Your plan'];
  const current = step === 'result' ? 3 : step - 1;
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', gap: 0, marginBottom: '8px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ flex: 1, height: '3px', backgroundColor: i < current ? '#C1440E' : '#e5e7eb', marginRight: i < 2 ? '3px' : 0, borderRadius: '2px', transition: 'background-color 0.3s' }} />
        ))}
      </div>
      <p style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {step === 'result' ? 'Your project plan' : `Step ${step} of 3 — ${steps[step - 1]}`}
      </p>
    </div>
  );
}

export default function ProjectScopeBuilder({ showHeading = true, onComplete }) {
  const [step,       setStep]       = useState(1);
  const [type,       setType]       = useState(null);
  const [plotW,      setPlotW]      = useState(30);
  const [plotD,      setPlotD]      = useState(40);
  const [floors,     setFloors]     = useState('G+2');
  const [contractor, setContractor] = useState(null);
  const [timeline,   setTimeline]   = useState(null);

  const sqYd = Math.round((plotW * plotD) / 9);

  const canNext = step === 1 ? !!type
                : step === 2 ? !!floors
                : step === 3 ? !!(contractor && timeline)
                : false;

  const result = step === 'result' ? buildResult(type, contractor, timeline) : null;

  const labelStyle = {
    fontSize: '0.62rem', fontWeight: 700, color: '#374151',
    textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter',
    marginBottom: '0.75rem', display: 'block',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

      {/* Section heading — hidden when used inside modal */}
      {showHeading && (
        <div className="mb-12" data-aos="fade-up">
          <p style={{ fontSize: '0.7rem', color: '#C1440E', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Inter', marginBottom: '0.75rem' }}>
            Project Planner
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F2040', lineHeight: 1.1, fontFamily: 'Cormorant Garant, Georgia, serif', fontWeight: 800, marginBottom: '0.75rem' }}>
            What does your project need?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '480px' }}>
            Three questions. We'll tell you exactly what structural work your project requires — and what MSK handles.
          </p>
        </div>
      )}

      {/* Wizard card */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          backgroundColor: 'white', borderRadius: '6px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          boxShadow: '0 4px 24px rgba(15,32,64,0.08)',
          maxWidth: '760px',
        }}
      >
        <ProgressBar step={step} />

        {/* ── Step 1: project type ─────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2040', fontFamily: 'Inter', marginBottom: '1.5rem' }}>
              What are you planning to build?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {PROJECT_TYPES.map(pt => (
                <button
                  key={pt.id}
                  onClick={() => setType(pt.id)}
                  style={{
                    padding: '18px 16px', borderRadius: '4px', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'Inter', transition: 'all 0.15s',
                    border: type === pt.id ? '2px solid #C1440E' : '1px solid #e5e7eb',
                    backgroundColor: type === pt.id ? 'rgba(193,68,14,0.05)' : '#fafafa',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, color: type === pt.id ? '#C1440E' : '#d1d5db', letterSpacing: '0.12em', marginBottom: '8px', fontFamily: 'Inter' }}>
                    {pt.num}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: type === pt.id ? '#C1440E' : '#0F2040', marginBottom: '4px' }}>
                    {pt.label}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#9ca3af' }}>
                    {pt.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Step 2: plot + floors ────────────────────────────────────── */}
        {step === 2 && (
          <div>
            <style>{`
              .msk-slider { -webkit-appearance: none; width: 100%; height: 4px; border-radius: 2px; background: #e5e7eb; outline: none; cursor: pointer; }
              .msk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #C1440E; cursor: pointer; border: 2px solid white; box-shadow: 0 1px 6px rgba(193,68,14,0.45); }
              .msk-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #C1440E; cursor: pointer; border: 2px solid white; box-shadow: 0 1px 6px rgba(193,68,14,0.45); border: none; }
            `}</style>

            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2040', fontFamily: 'Inter', marginBottom: '1.75rem' }}>
              Tell us about the plot and height.
            </p>

            {/* Width slider */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                <span style={labelStyle}>Plot width</span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#C1440E', fontFamily: 'Inter' }}>{plotW} ft</span>
              </div>
              <input type="range" className="msk-slider" min="15" max="120" step="5"
                value={plotW} onChange={e => setPlotW(Number(e.target.value))} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'Inter' }}>15 ft</span>
                <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'Inter' }}>120 ft</span>
              </div>
            </div>

            {/* Depth slider */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                <span style={labelStyle}>Plot depth</span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#C1440E', fontFamily: 'Inter' }}>{plotD} ft</span>
              </div>
              <input type="range" className="msk-slider" min="20" max="200" step="5"
                value={plotD} onChange={e => setPlotD(Number(e.target.value))} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'Inter' }}>20 ft</span>
                <span style={{ fontSize: '0.65rem', color: '#9ca3af', fontFamily: 'Inter' }}>200 ft</span>
              </div>
            </div>

            {/* Live area badge */}
            <div style={{ backgroundColor: 'rgba(193,68,14,0.06)', border: '1px solid rgba(193,68,14,0.18)', borderRadius: '4px', padding: '8px 14px', marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F2040', fontFamily: 'Inter' }}>{plotW} × {plotD} ft</span>
              <span style={{ fontSize: '0.8rem', color: '#C1440E', fontFamily: 'Inter', fontWeight: 600 }}>≈ {sqYd} sq yd</span>
            </div>

            {/* Floors — advisory callout */}
            <div style={{
              backgroundColor: '#FFF8F5',
              border: '1px solid #f0d5c8',
              borderLeft: '3px solid #C1440E',
              borderRadius: '6px',
              padding: '1rem 1.2rem',
            }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, color: '#C1440E', fontFamily: 'Inter', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                How many floors?
              </p>
              <p style={{ fontSize: '0.88rem', color: '#4b5563', fontFamily: 'Inter', lineHeight: 1.65, margin: 0 }}>
                Not sure how many floors your plot can carry? You've come to the right place — MSK and the team will assess your plot, soil conditions, and requirements and tell you exactly what's possible.
              </p>
            </div>
          </div>
        )}

        {/* ── Step 3: situation ────────────────────────────────────────── */}
        {step === 3 && (
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F2040', fontFamily: 'Inter', marginBottom: '1.75rem' }}>
              A couple more things.
            </p>

            {/* Contractor */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span style={labelStyle}>Do you have a contractor, or should MSK build it?</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {CONTRACTOR.map(c => (
                  <Pill key={c} label={c} selected={contractor === c} onClick={() => setContractor(c)} />
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <span style={labelStyle}>When do you want to start?</span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {TIMELINE.map(t => (
                  <Pill key={t} label={t} selected={timeline === t} onClick={() => setTimeline(t)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Result ───────────────────────────────────────────────────── */}
        {step === 'result' && result && (
          <div>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F2040', fontFamily: 'Inter', marginBottom: '0.4rem' }}>
              For your {TYPE_LABEL[type]}, here's what you need:
            </p>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'Inter', marginBottom: '1.75rem' }}>
              {plotW} × {plotD} ft &nbsp;·&nbsp; {sqYd} sq yd &nbsp;·&nbsp; Warangal district
            </p>

            {/* Checklist */}
            <div style={{ marginBottom: '1.5rem' }}>
              {result.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < result.items.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#C1440E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <HiCheck style={{ color: 'white', fontSize: '12px' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#0F2040', fontSize: '0.88rem', fontFamily: 'Inter', marginBottom: '2px' }}>{item.text}</p>
                    <p style={{ color: '#6b7280', fontSize: '0.78rem', fontFamily: 'Inter', lineHeight: 1.6 }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contractor soft note */}
            {result.contractorNote && (
              <div style={{ backgroundColor: 'rgba(193,68,14,0.05)', border: '1px solid rgba(193,68,14,0.15)', borderRadius: '4px', padding: '10px 14px', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.78rem', color: '#C1440E', fontFamily: 'Inter', lineHeight: 1.6 }}>
                  {result.contractorNote}
                </p>
              </div>
            )}

            {/* Timeline card */}
            <div style={{ backgroundColor: '#f9fafb', borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '1.5rem', borderLeft: '3px solid #C1440E', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.6rem', fontWeight: 700, color: '#9ca3af', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>
                  Drawings ready in
                </p>
                <p style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F2040', fontFamily: 'Inter', lineHeight: 1 }}>
                  {result.drawingTime}
                </p>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', fontFamily: 'Inter', lineHeight: 1.6, flex: 1, minWidth: '180px' }}>
                {result.startNote}
              </p>
            </div>

            {/* Trust line */}
            <p style={{ fontSize: '0.8rem', color: '#9ca3af', fontFamily: 'Inter', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              MSK has completed hundreds of projects across Telangana. Every drawing stamped, every site supervised.
            </p>

            {/* CTA */}
            {(() => {
              const contactPhone = getContactPhone();
              const summary =
                `Hello MSK Associates,\n\nI used your project planner. Here's what I need:\n\n` +
                `Project: ${TYPE_LABEL[type]}\n` +
                `Plot: ${plotW} × ${plotD} ft (~${sqYd} sq yd)\n` +
                `Builder: ${contractor}\n` +
                `Timeline: ${timeline}\n` +
                `Drawings needed in: ${result.drawingTime}\n\n` +
                `Please get in touch.`;
              const waUrl     = `https://wa.me/${contactPhone.raw}?text=${encodeURIComponent(summary)}`;
              const mailUrl   = `mailto:designs@mskassociates.com?subject=${encodeURIComponent(`Project Enquiry — ${TYPE_LABEL[type]}`)}&body=${encodeURIComponent(summary)}`;
              return (
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem' }}>
                  {/* Primary — WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      backgroundColor: '#25D366', color: '#fff',
                      padding: '0.9rem', borderRadius: '4px',
                      fontSize: '0.95rem', fontWeight: 700, fontFamily: 'Inter',
                      textDecoration: 'none', marginBottom: '10px',
                      boxShadow: '0 4px 14px rgba(37,211,102,0.3)',
                    }}
                  >
                    <FaWhatsapp size={18} /> Send my project details on WhatsApp
                  </a>

                  {/* Secondary — Email */}
                  <a
                    href={mailUrl}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      padding: '0.7rem', borderRadius: '4px',
                      border: '1px solid #e5e7eb',
                      fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Inter',
                      color: '#6b7280', textDecoration: 'none',
                    }}
                  >
                    <HiOutlineMail size={15} /> Send by email instead
                  </a>

                  <button
                    onClick={() => { setStep(1); setType(null); setContractor(null); setTimeline(null); }}
                    style={{ fontSize: '0.75rem', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', padding: '12px 0 0', display: 'block', margin: '0 auto' }}
                  >
                    ← Start over
                  </button>
                </div>
              );
            })()}
          </div>
        )}

        {/* ── Navigation ───────────────────────────────────────────────── */}
        {step !== 'result' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
            {step > 1 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                style={{ fontSize: '0.82rem', color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', padding: 0 }}
              >
                ← Back
              </button>
            ) : <div />}

            <button
              onClick={() => setStep(s => s < 3 ? s + 1 : 'result')}
              disabled={!canNext}
              style={{
                padding: '0.7rem 1.75rem', borderRadius: '4px',
                fontSize: '0.88rem', fontWeight: 700, fontFamily: 'Inter',
                cursor: canNext ? 'pointer' : 'not-allowed',
                border: 'none', transition: 'all 0.15s',
                backgroundColor: canNext ? '#C1440E' : '#e5e7eb',
                color: canNext ? '#fff' : '#9ca3af',
              }}
            >
              {step === 3 ? 'See my project plan' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
