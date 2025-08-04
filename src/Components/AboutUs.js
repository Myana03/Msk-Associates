import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Section: About Us text + Image */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-stretch">
        {/* Image on the left for large screens */}
        <div className="mt-10 lg:mt-0" data-aos="fade-right" data-aos-delay="200">
          <img
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
            src="/Images/OnlineImages/jr-harris-T72ooC45UTE-unsplash.jpg"
            alt="Heavy machinery at a construction site"
          />
        </div>

        {/* Text on the right for large screens */}
        <div data-aos="fade-left">
          <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
            About Us
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white font-serif break-words">
            Pioneering with Precision
          </p>
          {/* Decorative line */}
          <div className="w-full h-1 bg-yellow-400 my-6"></div>
          <div className="text-gray-300 space-y-6">
            {/* Lead paragraph */}
            <p className="text-xl">
              Established in August 2021, MSK ASSOCIATES is a growing team of passionate Structural Engineers, Planners, and Builders committed to delivering innovative and reliable engineering solutions. We specialize in designing safe, efficient, and sustainable structures that stand the test of time.
            </p>
            <p className="text-lg">
              With a deep understanding of modern construction practices and regulatory standards, we partner closely with clients to turn their visions into reality—whether it's a residential development, commercial facility, or industrial project.
            </p>
            <p className="text-lg">
              Our strength lies in our attention to detail, engineering precision, and client-focused approach. At MSK ASSOCIATES, we believe in building not just structures, but lasting relationships based on trust and technical excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Founder's Note */}
      <div className="mt-16 lg:mt-24" data-aos="zoom-in">
        <div className="p-10 bg-gray-900 bg-opacity-70 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-400 font-serif text-center" data-aos="fade-down" data-aos-delay="200">
            A Note from Our Founder
          </h3>
          <div className="mt-6 border-l-4 border-yellow-500 pl-6 text-gray-300 space-y-4 italic text-lg" data-aos="fade-right" data-aos-delay="400">
            <p>
              "As a Structural Engineer with over 7 years of industry experience designing and delivering safe, efficient, and code-compliant structures, I founded MSK ASSOCIATES in August 2021 with a vision to offer reliable, high-quality structural engineering and planning services tailored to the unique needs of each project."
            </p>
            <p>
              "Throughout my career, I've worked on a wide range of residential, commercial, and industrial projects—ensuring every design meets the highest standards of safety, functionality, and sustainability. With MSK ASSOCIATES, my mission is to bring that same level of precision and care to every client, from concept to completion."
            </p>
          </div>
          <p className="mt-8 font-semibold text-white text-right text-lg" data-aos="fade-up" data-aos-delay="600">
            &mdash; Er MYANA SAI KRISHNA
            <br />
            <span className="font-normal text-sm text-gray-400">ME (Structures),AMIE.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
