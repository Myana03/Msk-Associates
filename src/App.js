import React from 'react';
//import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
              <Hero />
            </section>
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
