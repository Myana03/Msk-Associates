import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineOfficeBuilding, HiOutlineHome, HiOutlineLibrary, HiOutlineClipboardList } from 'react-icons/hi';
import { FiCheckCircle } from 'react-icons/fi';

const expertise = [
  { Icon: HiOutlineOfficeBuilding, label: 'Structural Design' },
  { Icon: HiOutlineHome,           label: 'Residential Projects' },
  { Icon: HiOutlineLibrary,        label: 'Commercial Buildings' },
  { Icon: HiOutlineClipboardList,  label: 'Project Management' },
];

const reasons = [
  'Innovative Structural Solutions',
  'Safe & Sustainable Designs',
  'Cost-Effective Planning',
  'Quality Construction Execution',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ExpertiseSection() {
  return (
    <div style={{ backgroundColor: '#EDEAE3', borderTop: '1px solid #d8d4cc' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — Our Expertise */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          >
            <p style={{
              display: 'flex', alignItems: 'center', gap: '0.8rem',
              fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.22em',
              fontFamily: 'Inter, sans-serif', marginBottom: '1.4rem',
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#C1440E' }} />
              Our Expertise
            </p>

            <h2 style={{
              fontFamily: 'Cormorant Garant, Georgia, serif',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.025em', color: '#1a1714',
              marginBottom: '3rem',
            }}>
              Four disciplines.<br />One firm.
            </h2>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {expertise.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    backgroundColor: '#FAFAF8',
                    borderRadius: '4px',
                    padding: '1.8rem 1.6rem',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem',
                    border: '1px solid #e0dbd2',
                    transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                  }}
                  whileHover={{
                    boxShadow: '0 8px 32px rgba(193,68,14,0.08)',
                    borderColor: '#C1440E',
                  }}
                >
                  <div style={{
                    width: '46px', height: '46px',
                    backgroundColor: '#1a1714',
                    borderRadius: '3px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={22} color="#C1440E" />
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.72rem', fontWeight: 700,
                    color: '#1a1714', letterSpacing: '0.06em',
                    textTransform: 'uppercase', lineHeight: 1.3,
                  }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Why Choose MSK */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              backgroundColor: '#1a1714',
              borderRadius: '4px',
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            }}
          >
            <p style={{
              fontSize: '0.58rem', color: '#C1440E', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.22em',
              fontFamily: 'Inter, sans-serif', marginBottom: '0.8rem',
            }}>
              Why Choose
            </p>
            <h3 style={{
              fontFamily: 'Cormorant Garant, Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#ffffff',
              marginBottom: '2.5rem',
            }}>
              MSK Associates?
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    paddingBottom: i < reasons.length - 1 ? '1.25rem' : 0,
                    borderBottom: i < reasons.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <FiCheckCircle size={18} color="#C1440E" style={{ flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.82)', lineHeight: 1.5,
                  }}>
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>

            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <p style={{
                fontFamily: 'Cormorant Garant, Georgia, serif',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontStyle: 'italic', color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.01em', lineHeight: 1.6,
              }}>
                "Your Vision. Our Engineering."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
