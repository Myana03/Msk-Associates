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
    </div>
  );
}

export default App;
