import React from 'react';

const services = [
  {
    title: "Structural Planning",
    description: "We offer detailed structural planning to ensure your projects are safe, sustainable, and cost-effective.",
    image: "/Images/OnlineImages/brett-jordan-PFr50OBMowU-unsplash.jpg",
    delay: "100"
  },
  {
    title: "Construction",
    description: "Our team handles construction from ground up, ensuring timely and high-quality project delivery.",
    image: "/Images/OnlineImages/tr-n-h-u-tung-_-V8Ar9fXWE-unsplash.jpg",
    delay: "200"
  },
  {
    title: "Interior Design",
    description: "We provide innovative and aesthetic interior designs to enhance the functionality and beauty of your space.",
    image: "/Images/OnlineImages/jason-briscoe-AQl-J19ocWE-unsplash.jpg",
    delay: "300"
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Our Services
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          Expertise You Can Build On
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          From initial planning to final inspection, we provide comprehensive
          engineering and construction services.
        </p>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-gray-800 bg-opacity-60 rounded-xl p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-yellow-400/20 hover:ring-2 hover:ring-yellow-400"
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-lg overflow-hidden mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white font-serif">{service.title}</h3>
            <p className="mt-4 text-base text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
