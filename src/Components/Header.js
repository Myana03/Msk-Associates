import React from 'react';
import '../Css/Header.css';

function Header() {
  return (
    <header className="items-start">
      <div className="header-container">
        <div className="logo text-center py-4 flex flex-col items-center justify-center">
          <a
            href="#home"
            className="font-extrabold text-blue-700 text-6xl tracking-[0.25em]"
          >
            MSK ASSOCIATES
          </a>
          <span className="mt-2 text-gray-500 uppercase text-xs tracking-[0.45em]">
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