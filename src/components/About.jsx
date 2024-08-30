import React from 'react';
import artistPhoto from '../assets/images/artist-photo.jpg';

const About = () => {
  return (
    <div className='max-w-[1400px] bg-blue-100 mx-auto my-20 py-16 lg:py-10 md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:col-span-2 col-span-3 flex flex-col justify-center'>
        <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-8'>ABOUT</h3>
        
        <p>As a freelance artist, I find joy in working with oils, watercolors, tempera, and pastels, with a special focus on graphic arts. Nature deeply inspires me — from the quiet of a snow-covered forest to the vibrant greens of summer. Each piece is a heartfelt attempt to capture the beauty of our world, infusing it with a part of my soul.</p>
        
        <br />

        <p>I’m a member of the Union of Russian Artists and regularly participate in exhibitions. My work is featured in private collections across Russia, Germany, and the USA.</p>
      </div>

      <div className='lg:col-span-1 col-span-3 flex justify-center items-center'>
        <img className='object-cover w-64 h-64 rounded-full border-8 border-white lg:mt-0 mt-8 lg:mb-0 mb-8' src={artistPhoto} alt="Artist Photo" />
      </div>
    </div>
  );
};

export default About;