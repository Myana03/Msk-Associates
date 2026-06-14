import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'testimonials', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#home" className="font-extrabold text-white text-xl md:text-3xl tracking-widest leading-tight">
            MSKASSOCIATES
          </a>
          <span className="text-gray-400 uppercase text-xs tracking-widest hidden sm:block">
            Structural Engineers, Planners & Builders
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-1 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                activeLink === link.id
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-base font-medium border-b border-gray-800 transition-colors ${
                activeLink === link.id ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
