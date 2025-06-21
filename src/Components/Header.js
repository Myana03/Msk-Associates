import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
        <div className="flex flex-col items-center md:items-start">
          <a
            href="#home"
            className="font-extrabold text-blue-700 text-3xl md:text-4xl tracking-widest"
          >
            MSK ASSOCIATES
          </a>
          <span className="mt-1 text-gray-500 uppercase text-xs tracking-widest text-center md:text-left">
            Structural Engineers, Planners & Builders
          </span>
        </div>
        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center md:flex-row gap-x-6 gap-y-2 text-base font-medium">
          <a href="#home" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
          <a href="#services" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
          <a href="#about" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
          <a href="#projects" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
          <a href="#testimonials" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>Testimonials</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
          <a href="#contact" className="relative group text-blue-900 hover:text-blue-600 transition-colors">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </a>
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