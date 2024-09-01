import React from 'react';
import homeImage from '../assets/images/home.jpg'; 

const Home = () => {
  return (
    <div id="home" className='w-full h-screen relative'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={homeImage} alt="Home Background" />
      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />

      {/* Container for text */}
      <div className='absolute top-0 left-0 w-full h-full flex justify-start items-start p-4'>
        {/* Text in the upper left corner */}
        <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl'>
          Margarita Akimova
        </h1>
      </div>
    </div>
  );
};

export default Home;