import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left side: Google Map */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6323747528895!2d79.53462937555837!3d17.995832784991617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f0c04600ca3%3A0xf1e2e7e4204fd514!2sMSK%20ASSOCIATES!5e0!3m2!1sen!2sus!4v1746580010533!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
          ></iframe>
        </div>
        {/* Right side: Contact Info */}
        <div className="flex-1 w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-6 font-serif">Contact Us</h2>
          <div className="space-y-3 text-lg text-gray-700">
            <p><span className="font-semibold text-blue-800">Name:</span> MSK ASSOCIATES</p>
            <p><span className="font-semibold text-blue-800">Email:</span> designs@mskassociates.com</p>
            <p><span className="font-semibold text-blue-800">Phone:</span> +91 99890 90978</p>
            <p><span className="font-semibold text-blue-800">Address:</span> Pranay Marg, Waddepally, Phase 1, Teachers Colony, Hanamkonda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
