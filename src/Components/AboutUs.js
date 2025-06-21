import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 bg-blue-50 rounded-2xl shadow-lg p-8 md:p-16">
        {/* Text content on the left */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">About Us</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Established in August 2023, MSK ASSOCIATES is a growing team of passionate Structural Engineers, Planners, and Builders committed to delivering <strong>innovative and reliable engineering solutions</strong>. We specialize in designing safe, efficient, and sustainable structures that stand the test of time.
            </p>
            <p>
              With a deep understanding of modern construction practices and regulatory standards, we <strong>partner closely with clients to turn their visions into reality</strong>—whether it's a residential development, commercial facility, or industrial project.
            </p>
            <p>
              Our strength lies in our <strong>attention to detail, engineering precision, and client-focused approach</strong>. At MSK ASSOCIATES, we believe in building not just structures, but <strong>lasting relationships based on trust and technical excellence</strong>.
            </p>
          </div>
        </div>
        {/* Image on the right */}
        <div className="w-full h-full flex items-center">
          <img
            src="/Images/OnlineImages/jr-harris-T72ooC45UTE-unsplash.jpg"
            alt="Engineer working on rebar for a building foundation"
            className="w-full h-auto object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
