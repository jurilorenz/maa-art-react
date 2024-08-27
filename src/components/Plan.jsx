import React from 'react'
import painting1 from '../assets/images/painting/painting1.jpg';
import painting2 from '../assets/images/painting/painting2.jpg';
import painting3 from '../assets/images/painting/painting3.jpg';
import painting4 from '../assets/images/painting/painting4.jpg';
import painting5 from '../assets/images/painting/painting5.jpg';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src={painting1} alt="Painting 1" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={painting2} alt="Painting 2" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={painting3} alt="Painting 3" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={painting4} alt="Painting 4" />
        <img className='row-span-2 object-cover w-full h-full p-2' src={painting5} alt="Painting 5" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'> 
        <h3 className='text-5xl md:text-6xl font-bold'>Check Out Latest Paintings</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sint.</p>
        <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum et delectus natus temporibus ex aliquam porro, corporis saepe itaque! Accusantium unde, quam numquam voluptatem adipisci molestias? Et aut sit dolorem incidunt nostrum molestias minus possimus, deleniti, excepturi rem natus rerum.</p>
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Print</button>
        </div>
    </div>

    </div>
  );
};

export default Plan