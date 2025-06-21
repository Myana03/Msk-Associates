import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-base font-semibold text-yellow-400 tracking-wider uppercase">
          Contact Us
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl font-serif">
          Get in Touch
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Have a project in mind? We'd love to hear from you. Fill out the form
          below, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-800 bg-opacity-60 border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-800 bg-opacity-60 border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-800 bg-opacity-60 border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 bg-gray-800 bg-opacity-60 border-gray-600 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Your message"
              defaultValue={''}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
