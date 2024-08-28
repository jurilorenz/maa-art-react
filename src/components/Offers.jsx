import React from 'react';

const Offers = () => {
  return (
    <div className='max-w-[900px] m-auto px-4 py-12'>
      <div className='flex flex-wrap justify-between'>
        <p className='text-lg font-bold text-gray-700'>Painting On Canvas</p>
        <p className='text-lg font-bold text-gray-700'>Printing On Canvas</p>
        <p className='text-lg font-bold text-gray-700'>Diasec (acrylic face mounting) </p>
        <p className='text-lg font-bold text-gray-700'>Printing On Metal</p>
      </div>
      <div className='flex flex-col h-full justify-center mt-12'>
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

export default Offers;