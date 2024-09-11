import React from 'react';

const Contact = ({ content }) => {
  return (
    <div
      id="contact"
      className="w-full mt-8 bg-black text-gray-300 py-12 relative"
    >
      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="text-center mb-8">
          <p className="font-bold text-4xl uppercase text-white">{content.title}</p>
          <p className="py-4 px-2 text-center text-gray-400">
            {content.description} <br />
            <a href={`mailto:${content.email}`} className="text-blue-400 hover:text-blue-300">
              {content.email}
            </a>
          </p>
          <p className="px-2 pt-2 pb-6 text-center text-gray-400">{content.or}</p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300">
          <form className="flex flex-col">
            <input
              className="w-full p-4 mb-4 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-400"
              type="text"
              placeholder={content.form.namePlaceholder}
              required
            />
            <input
              className="w-full p-4 mb-4 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-400"
              type="tel"
              placeholder={content.form.phonePlaceholder}
              required
            />
            <input
              className="w-full p-4 mb-4 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-400"
              type="email"
              placeholder={content.form.emailPlaceholder}
              required
            />
            <textarea
              className="w-full p-4 mb-4 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-orange-400"
              placeholder={content.form.messagePlaceholder}
              rows="4"
              required
            />
            <button
              className="w-full py-3 px-8 text-white font-bold rounded transition duration-300 bg-gradient-to-r from-[#e59866] to-[#d35400] hover:bg-[#b84300] hover:brightness-125"
              type="submit"
            >
              {content.form.submit}
            </button>
            <p className="text-sm text-gray-400 text-center mt-4">{content.form.requiredNote}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;