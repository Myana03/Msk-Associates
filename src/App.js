import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ProjectGallery from './Components/ProjectGallery';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatsAppFloat from './Components/WhatsAppFloat';
import BackToTop from './Components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50">
        <p className="text-yellow-400 font-extrabold text-2xl tracking-widest mb-6">MSKASSOCIATES</p>
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="App text-gray-200">
      <Header />
      <main>
        <section id="home">
          <HeroBanner />
        </section>

        <div className="relative z-10">
          <section id="services" className="py-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <Services />
          </section>
          <section id="about" className="py-20 bg-gray-800 bg-opacity-80 backdrop-blur-sm">
            <AboutUs />
          </section>
          <section id="projects" className="py-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <ProjectGallery />
          </section>
          <section id="testimonials" className="py-20 bg-gray-800 bg-opacity-80 backdrop-blur-sm">
            <Testimonials />
          </section>
          <section id="cta" className="bg-yellow-400">
            <CallToAction />
          </section>
          <section id="contact" className="py-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;
