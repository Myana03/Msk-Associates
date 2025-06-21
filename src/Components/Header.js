import React from 'react';
import '../Css/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">MSK ASSOCIATES</a>
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
