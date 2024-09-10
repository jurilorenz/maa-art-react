import React from 'react';
import { Link } from 'react-scroll';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const Prints = ({ content }) => {
  return (
    <div id="prints" className='bg-black text-gray-300 max-w-[1200px] m-auto px-4 py-12'>
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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className='relative z-10'>
          <h1 className='text-6xl font-bold mb-4'>{content.title}</h1>
          <p className='text-xl mb-1'>{content.description}</p>
        </div>
      </div>

      {/* Product Highlights */}
      <div className='py-12'>
        <h2 className='text-5xl font-bold text-center mb-8'>{content.optionsTitle}</h2>
        <div className='flex flex-wrap justify-between gap-8'>
          <div className='w-full md:w-[30%] bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4 text-white'>{content.highlight1}</h3>
            <p className='text-lg text-gray-400'>{content.highlight1Description}</p>
          </div>
          <div className='w-full md:w-[30%] bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4 text-white'>{content.highlight2}</h3>
            <p className='text-lg text-gray-400'>{content.highlight2Description}</p>
          </div>
          <div className='w-full md:w-[30%] bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4 text-white'>{content.highlight3}</h3>
            <p className='text-lg text-gray-400'>{content.highlight3Description}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center py-12'>
        <h2 className='text-5xl font-bold mb-4 text-white'>{content.callToAction}</h2>
        <p className='text-xl mb-8 text-gray-300'>{content.callToAction2}</p>
        
        {/* Contact Button */}
        <Link 
  to="contact" 
  smooth={true} 
  duration={500}
>
  <button
    className='text-white font-bold py-3 px-8 rounded transition duration-300 bg-gradient-to-r from-[#e59866] to-[#d35400] hover:bg-[#b84300] hover:brightness-125'
    style={{
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