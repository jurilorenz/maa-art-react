import React, { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi'; // Importing an icon for zoom/fullscreen

// Dynamically load all images from the thumbnails directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const paintingImages = importAll(require.context('../assets/images/thumbnails/painting', false, /\.(png|jpe?g|svg)$/));
const graphicImages = importAll(require.context('../assets/images/thumbnails/graphic', false, /\.(png|jpe?g|svg)$/));

const allImages = [
  ...Object.keys(paintingImages).map(key => ({
    src: paintingImages[key],
    category: 'painting',
    title: 'Painting Title',
    year: '2022',
    medium: 'Oil on canvas',
    size: '60x90 cm',
    price: '90000 р.',
  })),
  ...Object.keys(graphicImages).map(key => ({
    src: graphicImages[key],
    category: 'graphic',
    title: 'Graphic Title',
    year: '2021',
    medium: 'Ink on paper',
    size: '30x40 cm',
    price: '30000 р.',
  })),
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? allImages : allImages.filter(image => image.category === filter);

  return (
    <div className='max-w-[1400px] m-auto py-2 px-4'>
      {/* Gallery Title and Options */}
      <div className='max-w-[900px] m-auto px-4 py-4'>
      <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-4'>
  DRAWINGS
</h3>
        <div className='flex flex-col lg:flex-row justify-end items-end lg:items-center -mt-6'>
          <p 
            className={`text-sm font-bold text-gray-700 lg:mr-4 mb-2 lg:mb-0 cursor-pointer ${filter === 'all' && 'underline'}`}
            onClick={() => setFilter('all')}
          >
            ALL
          </p>
          <p 
            className={`text-sm font-bold text-gray-700 lg:mr-4 mb-2 lg:mb-0 cursor-pointer ${filter === 'painting' && 'underline'}`}
            onClick={() => setFilter('painting')}
          >
            PAINTING
          </p>
          <p 
            className={`text-sm font-bold text-gray-700 lg:mr-4 cursor-pointer ${filter === 'graphic' && 'underline'}`}
            onClick={() => setFilter('graphic')}
          >
            GRAPHIC
          </p>
        </div>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>        
        {filteredImages.map((image, index) => (
          <div key={index} className='relative w-full h-0 pb-[75%] group'>
            <img 
              className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70' 
              src={image.src} 
              alt={`Artwork ${index + 1}`} 
            />
            {/* Overlay that appears on hover */}
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
  <p className='text-xs md:text-sm lg:text-base font-bold text-center mb-2 group-hover:text-sm lg:group-hover:text-lg transition-all duration-300'>
    {image.title}
  </p>
  <p className='text-[10px] md:text-xs lg:text-sm text-center mt-2 group-hover:text-xs lg:group-hover:text-base transition-all duration-300'>
    {image.year}, {image.medium}
  </p>
  <p className='text-[10px] md:text-xs lg:text-sm text-center group-hover:text-xs lg:group-hover:text-base transition-all duration-300'>
    {image.size}
  </p>
  <p className='text-[10px] md:text-xs lg:text-sm text-center group-hover:text-xs lg:group-hover:text-base transition-all duration-300'>
    {image.price}
  </p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;