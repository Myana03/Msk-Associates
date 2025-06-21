import React, { useState, useEffect } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'testimonials', 'contact'];
      let current = 'home'; // Default to home

      // Find the current section in view
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // The offset (150) should be roughly the header height + some buffer
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup listener on component unmount
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
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
        <div className="flex flex-col items-center md:items-start">
          <a
            href="#home"
            className="font-extrabold text-white text-3xl md:text-4xl tracking-widest"
          >
            MSK ASSOCIATES
          </a>
          <span className="mt-1 text-gray-400 uppercase text-xs tracking-widest text-center md:text-left">
            Structural Engineers, Planners & Builders
          </span>
        </div>
        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center md:flex-row items-center gap-x-2 gap-y-2 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                activeLink === link.id
                  ? 'bg-yellow-400 text-gray-900' // Active link style
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white' // Inactive link style
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Hamburger menu placeholder for mobile */}
        <div className="md:hidden absolute right-6 top-6">
          {/* <button className="w-8 h-8 flex flex-col justify-between items-center">
            <span className="block w-full h-1 bg-blue-700 rounded"></span>
            <span className="block w-full h-1 bg-blue-700 rounded"></span>
            <span className="block w-full h-1 bg-blue-700 rounded"></span>
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;