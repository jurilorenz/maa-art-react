import React from 'react';
import { Link } from 'react-scroll';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const Prints = () => {
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
          <h1 className='text-6xl font-bold mb-4'>Exclusive Art Prints</h1>
          <p className='text-xl mb-1'>Elevate your space with our high-quality prints</p>
          

        </div>
      </div>

      {/* Product Highlights */}
      <div className='py-12'>
        <h2 className='text-5xl font-bold text-center mb-8'>Our Printing Options</h2>
        <div className='flex flex-wrap justify-between gap-8'>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>Printing On Canvas</h3>
            <p className='text-lg text-gray-700'>Bring the texture and depth of your favorite artworks to life with our premium canvas prints.</p>
          </div>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>Diasec (Acrylic Face Mounting)</h3>
            <p className='text-lg text-gray-700'>Experience art in stunning clarity with our sleek, modern diasec prints.</p>
          </div>
          <div className='w-full md:w-[30%] bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h3 className='text-3xl font-bold mb-4'>Printing On Metal</h3>
            <p className='text-lg text-gray-700'>For a contemporary look, our metal prints offer a vibrant and durable finish.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center py-12'>
        <h2 className='text-5xl font-bold mb-4'>Ready to Elevate Your Space?</h2>
        <p className='text-xl mb-8'>Contact us today to order your custom art print.</p>
        
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
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Prints;