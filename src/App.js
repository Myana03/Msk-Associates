import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS is only used inside the wizard modal — init lazily on first open
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import ProjectGallery from './Components/ProjectGallery';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatsAppFloat from './Components/WhatsAppFloat';
import BackToTop from './Components/BackToTop';
import CookieNotice from './Components/CookieNotice';
import MarqueeStrip from './Components/MarqueeStrip';

import ProjectScopeBuilder from './Components/ProjectScopeBuilder';
import WhatWeDo from './Components/WhatWeDo';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function WizardModal({ onClose, onOpen }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (onOpen) onOpen();
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          backgroundColor: 'rgba(10,20,40,0.82)',
          backdropFilter: 'blur(4px)',
          animation: 'modalFadeIn 0.2s ease',
        }}
      />

      {/* Modal panel */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 201,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            backgroundColor: 'white', borderRadius: '8px',
            width: '100%', maxWidth: '680px',
            maxHeight: '92vh', overflowY: 'auto',
            pointerEvents: 'all',
            animation: 'modalSlideUp 0.25s ease',
            position: 'relative',
          }}
        >
          {/* Modal header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '20px 24px 16px',
            borderBottom: '1px solid #f3f4f6',
            position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1,
          }}>
            <div>
              <p style={{ fontSize: '0.6rem', color: '#cc785c', fontFamily: 'Inter', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '3px' }}>
                Project Planner
              </p>
              <p style={{ fontSize: '1.05rem', fontWeight: 500, color: '#141413', fontFamily: 'Inter', lineHeight: 1.2 }}>
                What does your project need?
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                background: 'none', border: '1px solid #e5e7eb', cursor: 'pointer',
                borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#9ca3af', fontSize: '1rem', flexShrink: 0,
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#cc785c'; e.currentTarget.style.color = '#cc785c'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#9ca3af'; }}
            >
              ✕
            </button>
          </div>

          {/* Wizard content */}
          <div style={{ padding: '24px' }}>
            <ProjectScopeBuilder showHeading={false} onComplete={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [loading,    setLoading]    = useState(true);
  const [wizardOpen, setWizardOpen] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <img src="/Images/logos/logo-light.png" alt="MSK Associates" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{borderColor:'#cc785c', borderTopColor:'transparent'}} />
      </div>
    );
  }

  return (
    <div className="App text-gray-800">
      <Header onStartProject={() => setWizardOpen(true)} />
      <main>
        <section id="home">
          <HeroBanner onStartProject={() => setWizardOpen(true)} />
          <MarqueeStrip />
        </section>

        <div className="relative z-10">
          <section id="services">
            <WhatWeDo />
          </section>
          <section id="about">
            <AboutUs />
          </section>
          <section id="projects">
            <ProjectGallery />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="cta">
            <CallToAction />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <CookieNotice />

      {wizardOpen && <WizardModal onClose={() => setWizardOpen(false)} onOpen={() => AOS.init({ duration: 800, once: true, offset: 30 })} />}
    </div>
  );
}

export default App;
