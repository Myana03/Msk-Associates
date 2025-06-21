import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Core About Us Section */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="text-left" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 font-serif">About Us</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Established in August 2023, MSK ASSOCIATES is a growing team of passionate Structural Engineers, Planners, and Builders committed to delivering <strong>innovative and reliable engineering solutions</strong>. We specialize in designing safe, efficient, and sustainable structures that stand the test of time.
              </p>
              <p>
                With a deep understanding of modern construction practices and regulatory standards, we <strong>partner closely with clients to turn their visions into reality</strong>—whether it's a residential development, commercial facility, or industrial project.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center" data-aos="fade-left" data-aos-delay="200">
            <img
              src="/Images/OnlineImages/jr-harris-T72ooC45UTE-unsplash.jpg"
              alt="Engineer working on rebar for a building foundation"
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Founder's Vision Section */}
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800 font-serif">Founder's Note</h3>
          <div className="max-w-4xl mx-auto font-serif space-y-4">
            <p className="italic text-lg md:text-xl text-gray-700">
              "Our strength lies in our <strong>attention to detail, engineering precision, and client-focused approach</strong>. At MSK ASSOCIATES, we believe in building not just structures, but <strong>lasting relationships based on trust and technical excellence</strong>."
            </p>
            <p className="font-semibold mt-6 text-blue-900">
              &mdash; Er. Myana Sai Krishna
              <br />
              <span className="text-sm font-normal text-gray-600">ME (Structures), AMIE</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
