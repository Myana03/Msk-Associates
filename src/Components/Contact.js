import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Contact
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          We're Here to Help
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-full" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen=""
            loading="lazy"
            title="MSK Associates Location"
            className="filter grayscale-100 contrast-120"
          ></iframe>
        </div>

        {/* Right side: Contact Info */}
        <div className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-2xl p-8" data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-3xl font-bold text-white mb-6 font-serif">Our Details</h3>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              <strong className="text-gray-100">Name:</strong> MSK ASSOCIATES
            </p>
            <p>
              <strong className="text-gray-100">Email:</strong>{' '}
              <a href="mailto:designs@mskassociates.com" className="text-yellow-400 hover:underline">
                designs@mskassociates.com
              </a>
            </p>
            <p>
              <strong className="text-gray-100">Phone:</strong>{' '}
              <a href="tel:+919989090978" className="text-yellow-400 hover:underline">
                +91 99890 90978
              </a>
            </p>
            <p>
              <strong className="text-gray-100">Address:</strong> Pranay Marg,
              Waddepally, Phase 1, Teachers Colony, Hanamkonda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
