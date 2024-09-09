import React from 'react';
import { Link } from 'react-scroll';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const Prints = ({ content }) => {
  return (
    <div id="prints" className='max-w-[1200px] m-auto px-4 py-12'>
      {/* Hero Section */}
      <div
        className='relative text-center py-12 text-white rounded-lg shadow-lg overflow-hidden'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className='relative z-10'>
          <h1 className='text-6xl font-bold mb-4'>{content.title}</h1>
          <p className='text-xl mb-1'>{content.description}</p>
        </div>
      </div>

      {/* Product Highlights */}
      <div className='py-12'>
        <h2 className='text-5xl font-bold text-center mb-8'>{content.optionsTitle}</h2>
        <div className='flex flex-wrap justify-between gap-8'>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>{content.highlight1}</h3>
            <p className='text-lg text-gray-700'>{content.highlight1Description}</p>
          </div>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>{content.highlight2}</h3>
            <p className='text-lg text-gray-700'>{content.highlight2Description}</p>
          </div>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>{content.highlight3}</h3>
            <p className='text-lg text-gray-700'>{content.highlight3Description}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center py-12'>
        <h2 className='text-5xl font-bold mb-4'>{content.callToAction}</h2>
        <p className='text-xl mb-8'>{content.callToAction2}</p>
        
        {/* Contact Button */}
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          <button
            className='text-white font-bold py-3 px-8 rounded transition duration-300 hover:brightness-125'
            style={{
              backgroundImage: 'linear-gradient(135deg, #1d3557, #457b9d)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              border: 'none',
            }}
          >
            {content.contactButton}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Prints;