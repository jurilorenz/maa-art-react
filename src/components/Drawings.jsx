import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

// Dynamically load all images from the thumbnails directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Importing thumbnails and full-size images
const paintingThumbnails = importAll(require.context('../assets/images/thumbnails/painting', false, /\.(png|jpe?g|svg)$/));
const graphicThumbnails = importAll(require.context('../assets/images/thumbnails/graphic', false, /\.(png|jpe?g|svg)$/));
const paintingFullImages = importAll(require.context('../assets/images/painting', false, /\.(png|jpe?g|svg)$/));
const graphicFullImages = importAll(require.context('../assets/images/graphic', false, /\.(png|jpe?g|svg)$/));

const Drawings = ({ content }) => { // Accept content as prop for language switching
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const allImages = [
    ...Object.keys(paintingThumbnails).map(key => ({
      src: paintingThumbnails[key],
      fullSrc: paintingFullImages[key],
      category: 'painting',
      title: content.paintingTitle, 
      year: content.paintingYear,
      medium: content.paintingMedium,
      size: content.paintingSize,
      price: content.paintingPrice
    })),
    ...Object.keys(graphicThumbnails).map(key => ({
      src: graphicThumbnails[key],
      fullSrc: graphicFullImages[key],
      category: 'graphic',
      title: content.graphicTitle,
      year: content.graphicYear,
      medium: content.graphicMedium,
      size: content.graphicSize,
      price: content.graphicPrice
    }))
  ];

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
    <div id="drawings" className="bg-black text-gray-300 max-w-[1200px] m-auto py-2 px-4 mb-12">
      {/* Dark mode background with light text */}
      <div className="max-w-[1200px] m-auto py-4">
        <h3 className="text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-4 text-white">
          {content.title} {/* Drawings title based on language */}
        </h3>
        <div className='flex flex-col lg:flex-row justify-end items-end lg:items-center -mt-6'>
  <p
    className={`text-sm font-bold cursor-pointer ${filter === 'all' ? 'text-white underline' : 'text-gray-400 hover:text-gray-200'} lg:mr-4 mb-2 lg:mb-0`}
    onClick={() => handleFilterChange('all')}
  >
    {content.all}
  </p>
  <p
    className={`text-sm font-bold cursor-pointer ${filter === 'painting' ? 'text-white underline' : 'text-gray-400 hover:text-gray-200'} lg:mr-4 mb-2 lg:mb-0`}
    onClick={() => handleFilterChange('painting')}
  >
    {content.painting}
  </p>
  <p
    className={`text-sm font-bold cursor-pointer ${filter === 'graphic' ? 'text-white underline' : 'text-gray-400 hover:text-gray-200'} lg:mr-4`}
    onClick={() => handleFilterChange('graphic')}
  >
    {content.graphic}
  </p>
</div>
      </div>

      {/* Display images */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-0 pb-[75%] group"
            onClick={() => openModal(index)} // Open the modal on image click
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70 cursor-pointer"
              src={image.src}
              alt={`Artwork ${index + 1}`}
            />
            {/* Overlay that appears on hover */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <p className="text-xs md:text-sm lg:text-base font-bold text-center mb-2 group-hover:text-sm lg:group-hover:text-lg transition-all duration-300">
                {image.title}
              </p>
              <p className="text-[10px] md:text-xs lg:text-sm text-center mt-2 group-hover:text-xs lg:group-hover:text-base transition-all duration-300">
                {image.year}, {image.medium}
              </p>
              <p className="text-[10px] md:text-xs lg:text-sm text-center group-hover:text-xs lg:group-hover:text-base transition-all duration-300">
                {image.size}
              </p>
              <p className="text-[10px] md:text-xs lg:text-sm text-center group-hover:text-xs lg:group-hover:text-base transition-all duration-300">
                {image.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
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