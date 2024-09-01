import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

// Dynamically load all images from the thumbnails directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Importing thumbnails
const paintingThumbnails = importAll(require.context('../assets/images/thumbnails/painting', false, /\.(png|jpe?g|svg)$/));
const graphicThumbnails = importAll(require.context('../assets/images/thumbnails/graphic', false, /\.(png|jpe?g|svg)$/));

// Importing full-size images
const paintingFullImages = importAll(require.context('../assets/images/painting', false, /\.(png|jpe?g|svg)$/));
const graphicFullImages = importAll(require.context('../assets/images/graphic', false, /\.(png|jpe?g|svg)$/));

const allImages = [
  ...Object.keys(paintingThumbnails).map(key => ({
    src: paintingThumbnails[key],  // Thumbnail image
    fullSrc: paintingFullImages[key],  // Full-size image
    category: 'painting',
    title: 'Painting Title',
    year: '2022',
    medium: 'Oil on canvas',
    size: '60x90 cm',
    price: '90000 р.',
  })),
  ...Object.keys(graphicThumbnails).map(key => ({
    src: graphicThumbnails[key],  // Thumbnail image
    fullSrc: graphicFullImages[key],  // Full-size image
    category: 'graphic',
    title: 'Graphic Title',
    year: '2021',
    medium: 'Ink on paper',
    size: '30x40 cm',
    price: '30000 р.',
  })),
];

const Drawings = () => {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const handleFilterChange = (newFilter) => {
    setIsFading(true);
    setTimeout(() => {
      setFilter(newFilter);
      setIsFading(false);
    }, 700); // Adjust the timing to match the transition duration
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'scroll'; // Allow scrolling again when modal is closed
  };

  const showPrevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const showNextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };

  const filteredImages = filter === 'all' ? allImages : allImages.filter(image => image.category === filter);

  return (
    <div id="drawings" className='max-w-[1200px] m-auto py-2 px-4 mb-12'> {/* Added margin-bottom */}
      {/* Drawings Title and Options */}
      <div className='max-w-[1200px] m-auto py-4'>
        <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-4'>
          DRAWINGS
        </h3>
        <div className='flex flex-col lg:flex-row justify-end items-end lg:items-center -mt-6'>
          <p
            className={`text-sm font-bold cursor-pointer ${filter === 'all' ? 'text-gray-400 underline' : 'text-gray-700'} lg:mr-4 mb-2 lg:mb-0`}
            onClick={() => handleFilterChange('all')}
          >
            ALL
          </p>
          <p
            className={`text-sm font-bold cursor-pointer ${filter === 'painting' ? 'text-gray-400 underline' : 'text-gray-700'} lg:mr-4 mb-2 lg:mb-0`}
            onClick={() => handleFilterChange('painting')}
          >
            PAINTING
          </p>
          <p
            className={`text-sm font-bold cursor-pointer ${filter === 'graphic' ? 'text-gray-400 underline' : 'text-gray-700'} lg:mr-4`}
            onClick={() => handleFilterChange('graphic')}
          >
            GRAPHIC
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className='relative w-full h-0 pb-[75%] group'
            onClick={() => openModal(index)} // Open the modal on image click
          >
            <img
              className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70 cursor-pointer'
              src={image.src}
              alt={`Artwork ${index + 1}`}
            />
            {/* Overlay that appears on hover */}
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
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

      {/* Use the Modal component */}
      {selectedIndex !== null && (
        <Modal
          image={filteredImages[selectedIndex]}
          isOpen={selectedIndex !== null}
          onClose={closeModal}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </div>
  );
};

export default Drawings;