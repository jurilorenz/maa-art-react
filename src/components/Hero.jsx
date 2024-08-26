import React from 'react'
import heroImage from '../assets/img1.jpg';


const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={heroImage} alt="/"/>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Order A Print</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Oil Paintings & Graphics</h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magnam esse illo quis dolorem, 
          facere officiis deserunt. Quaerat, exercitationem voluptate!
          </p>
          <button className='bg-white text-black '>Reserve Now</button>
        </div>
      </div>
   </div>
  )
}

export default Hero