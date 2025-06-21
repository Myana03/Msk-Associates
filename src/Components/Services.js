import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-900">Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Structural Planning Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
          <img src="/Images/OnlineImages/brett-jordan-PFr50OBMowU-unsplash.jpg" alt="Structural Planning" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Structural Planning</h3>
          <p className="text-gray-700 text-center">We offer detailed structural planning to ensure your projects are safe, sustainable, and cost-effective.</p>
        </div>
        {/* Construction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
          <img src="/Images/OnlineImages/tr-n-h-u-tung-_-V8Ar9fXWE-unsplash.jpg" alt="Construction" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Construction</h3>
          <p className="text-gray-700 text-center">Our team handles construction from ground up, ensuring timely and high-quality project delivery.</p>
        </div>
        {/* Interior Design Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
          <img src="/Images/OnlineImages/jason-briscoe-AQl-J19ocWE-unsplash.jpg" alt="Interior Design" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Interior Design</h3>
          <p className="text-gray-700 text-center">We provide innovative and aesthetic interior designs to enhance the functionality and beauty of your space.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
