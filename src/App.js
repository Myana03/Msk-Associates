import React, { useEffect } from 'react';
//import './App.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ProjectGallery from './Components/ProjectGallery';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';


function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  return (
    <div className="App bg-white">
      <Header />
      <main>
        <section id="home">
          <HeroBanner />
        </section>
        <section id="services" className="bg-gray-50">
          <Services />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="projects" className="bg-gray-50">
          <ProjectGallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="cta" className="bg-blue-800">
          <CallToAction />
        </section>
        <section id="contact" className="bg-gray-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
