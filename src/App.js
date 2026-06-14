import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ProjectGallery from './Components/ProjectGallery';
import Testimonials from './Components/Testimonials';
import WhyMSK from './Components/WhyMSK';
import CallToAction from './Components/CallToAction';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatsAppFloat from './Components/WhatsAppFloat';
import BackToTop from './Components/BackToTop';
import CookieNotice from './Components/CookieNotice';
import StatsBar from './Components/StatsBar';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <img src="/Images/logos/logo-light.png" alt="MSK Associates" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
        <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{borderColor:'#C1440E', borderTopColor:'transparent'}} />
      </div>
    );
  }

  return (
    <div className="App text-gray-800">
      <Header />
      <main>
        <section id="home">
          <HeroBanner />
          <StatsBar />
        </section>

        <div className="relative z-10">
          <motion.section id="services" className="py-20 bg-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <Services />
          </motion.section>
          <motion.section id="about" className="py-20" style={{backgroundColor:"#EDEAE3"}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <AboutUs />
          </motion.section>
          <motion.section id="projects" className="py-20 bg-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <ProjectGallery />
          </motion.section>
          <motion.section id="testimonials" className="py-20 bg-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <Testimonials />
          </motion.section>
          <motion.section className="py-20" style={{backgroundColor:"#0F2040"}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <WhyMSK />
          </motion.section>
          <motion.section id="cta" style={{backgroundColor:'#0F2040', borderTop: '1px solid rgba(255,255,255,0.08)'}} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <CallToAction />
          </motion.section>
          <motion.section id="contact" className="pt-20 pb-12 bg-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <Contact />
          </motion.section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <CookieNotice />
    </div>
  );
}

export default App;
