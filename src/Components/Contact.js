import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="mt-2 text-5xl font-extrabold text-white sm:text-6xl font-serif">
          Get in Touch
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Column 1: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-full" data-aos="fade-right" data-aos-delay="100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '450px' }}
            allowFullScreen=""
            loading="lazy"
            title="MSK Associates Location"
            className="filter grayscale-100 contrast-120"
          ></iframe>
        </div>

        {/* Column 2: Contact Form */}
        <div className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-bold text-white mb-6 font-serif">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Full name</label>
              <input type="text" name="name" id="name" autoComplete="name" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" autoComplete="email" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Phone Number (Optional)" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" required className="block w-full px-4 py-3 rounded-md bg-gray-900 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Message"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* Column 3: Contact Details Section */}
        <div className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-3xl font-bold text-white mb-6 font-serif">Contact Info</h3>
          <div className="space-y-6 text-lg text-gray-300">
            <div className="flex items-center">
              <HiOutlineMail className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
              <div>
                <strong className="text-gray-100">Email</strong>
                <a href="mailto:designs@mskassociates.com" className="block text-yellow-400 hover:underline">
                  designs@mskassociates.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlinePhone className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
              <div>
                <strong className="text-gray-100">Phone</strong>
                <a href="tel:+919989090978" className="block text-yellow-400 hover:underline">
                  +91 99890 90978
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineLocationMarker className="w-7 h-7 mr-4 text-yellow-400 flex-shrink-0" />
              <div>
                <strong className="text-gray-100">Address</strong>
                <p>
                  Pranay Marg, Waddepally, Phase 1, Teachers Colony, Hanamkonda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
