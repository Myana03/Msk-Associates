import React from 'react';
//import './App.css';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ProjectGallery from './Components/ProjectGallery';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <AboutUs />
      <Services />
      <ProjectGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
