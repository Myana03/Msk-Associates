import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-sm mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          <a href="#home" className="text-base text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#services" className="text-base text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#projects" className="text-base text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-base text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-base text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social + Contact Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/mskassociates_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/919989090978"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="mailto:designs@mskassociates.com"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} MSKAssociates. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Designed with Precision, Built with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
