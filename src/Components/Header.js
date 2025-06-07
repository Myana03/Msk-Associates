import React from 'react';
import '../Css/Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>MSK ASSOCIATES</h1>
      </div>
      <nav>
       <ul>
                 <li>
                   <a href="#home">Home</a>
                 </li>
                 <li>
                   <a href="#about">About Us</a> {/* Anchor link to About Us */}
                 </li>
                 <li>
                   <a href="#services">Services</a>
                 </li>
                 <li>
                   <a href="#contact">Contact</a>
                 </li>
               </ul>
      </nav>
    </header>
  );
}

export default Header;
