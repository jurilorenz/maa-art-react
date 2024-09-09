import React from 'react';
import artistPhoto from '../assets/images/artist-photo.jpg';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const About = ({ content }) => {
  return (
    <div 
      id="about"
      className='relative max-w-[1150px] mx-auto my-2 py-16 lg:mb-[2%] md:mb-[5%] px-8 grid lg:grid-cols-3 gap-4 rounded-lg shadow-lg'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

      {/* Content */}
      <div className='lg:col-span-2 col-span-3 flex flex-col justify-center relative z-10'>
        <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-7 text-white'>{content.title}</h3>
        
        <p className='text-white'>
          {content.content1}
        </p>
        
        <br />

        <p className='text-white'>
          {content.content2}
        </p>
      </div>

      <div className='lg:col-span-1 col-span-3 flex justify-center items-center relative z-10'>
        <img className='object-cover w-64 h-64 rounded-full border-8 border-white lg:mt-0 mt-8 lg:mb-0 mb-8' src={artistPhoto} alt="Artist Photo" />
      </div>
    </div>
  );
};

export default About;