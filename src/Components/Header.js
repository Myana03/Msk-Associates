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
    <header className="sticky top-0 z-50 bg-white" style={{borderBottom: '3px solid #C1440E', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo + wordmark */}
        <a href="#home" className="flex items-center gap-4">
          <img
            src="/Images/logos/logo-light.png"
            alt="MSK Associates"
            style={{ height: '46px', width: 'auto', display: 'block' }}
          />
          <div className="hidden sm:flex flex-col justify-center" style={{ borderLeft: '2px solid #C1440E', paddingLeft: '1rem' }}>
            <span
              className="block font-black"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '0.2em',
                color: '#0F2040',
                lineHeight: 1,
              }}
            >
              MSKASSOCIATES
            </span>
            <span
              className="block mt-1"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.06em',
                color: '#888',
                lineHeight: 1,
              }}
            >
              Structural Engineers&nbsp;
              <span style={{ color: '#C1440E' }}>·</span>
              &nbsp;Planners&nbsp;
              <span style={{ color: '#C1440E' }}>·</span>
              &nbsp;Builders
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-1 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={activeLink === link.id ? { color: '#C1440E' } : {}}
              className={`px-3 py-2 transition-colors duration-300 ${
                activeLink === link.id
                  ? 'font-bold'
                  : 'text-gray-600 font-medium hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-base font-medium border-b border-gray-800 transition-colors ${
                activeLink === link.id ? 'text-orange-700' : 'text-gray-700 hover:text-gray-900'
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
