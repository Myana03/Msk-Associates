import React from 'react';
import '../Css/Header.css';

function Header() {
  return (
    <header className="items-start">
      <div className="header-container">
        <div className="logo text-left py-2 flex flex-col items-center justify-center">
          <a
            href="#home"
            className="font-extrabold text-blue-700 text-5xl tracking-[0.2em]"
          >
            MSK ASSOCIATES
          </a>
          <span className="mt-1 text-gray-500 uppercase text-sm tracking-[0.3em]">
            Structural Engineers, Planners & Builders
          </span>
        </div>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
