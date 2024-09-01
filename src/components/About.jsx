import React from 'react';
import artistPhoto from '../assets/images/artist-photo.jpg';
import bgImage from '../assets/images/bg.jpg'; // Import the background image

const About = () => {
  return (
    <div 
      className='relative max-w-[1200px] mx-auto my-2 py-8 lg:mb-[2%] md:mb-[5%] px-4 grid lg:grid-cols-3 gap-4 rounded-lg shadow-lg' // Further reduced margins
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
        <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-7 text-white'>ABOUT</h3>
        
        <p className='text-white'>
          As a freelance artist, I find joy in working with oils, watercolors, tempera, and pastels, with a special focus on graphic arts. Nature deeply inspires me — from the quiet of a snow-covered forest to the vibrant greens of summer. Each piece is a heartfelt attempt to capture the beauty of our world, infusing it with a part of my soul.
        </p>
        
        <br />

        <p className='text-white'>
          I’m a member of the Union of Russian Artists and regularly participate in exhibitions. My work is featured in private collections across Russia, Germany, and the USA.
        </p>
      </div>

      <div className='lg:col-span-1 col-span-3 flex justify-center items-center relative z-10'>
        <img className='object-cover w-64 h-64 rounded-full border-8 border-white lg:mt-0 mt-8 lg:mb-0 mb-8' src={artistPhoto} alt="Artist Photo" />
      </div>
    </div>
  );
};

export default About;