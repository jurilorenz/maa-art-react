import React, { useState } from 'react';
import devPainting from '../assets/images/dev.jpg';
import dev2 from '../assets/images/dev2.jpg';
import Modal from './Modal';

const Footer = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-full bg-gray-800 border-t border-gray-600'>
      {/* Invisible container with max-width */}
      <div className='max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center px-2 py-8 lg:py-16 text-gray-500'>
        {/* Left-aligned text */}
        <p className='py-4'>{content.artist}</p>

        {/* Centered Privacy link for mobile and desktop */}
        <p className='py-4 hover:text-blue-300 cursor-pointer text-blue-400 order-2 sm:order-none'>
          {content.privacy}
        </p>

        {/* Right-aligned Crafted by section */}
        <div className='flex items-center gap-2 py-4 order-3 sm:order-none'>
          <span>{content.craftedBy}:</span>
          <div
            className="relative w-8 h-8 border-2 border-white rounded-full overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            onClick={openModal}
          >
            <img src={devPainting} alt="Developer Icon" className='w-full h-full rounded-full hover:brightness-125 transition-transform duration-300' />
          </div>
          <a href="https://jurilorenz.github.io/cv" className='text-blue-400 hover:text-blue-300'>JURI LORENZ</a>
        </div>
      </div>

      {/* Modal for displaying dev2 image */}
      {isModalOpen && (
        <Modal 
          image={{ fullSrc: dev2, title: <a href="https://jurilorenz.github.io/cv" className='text-blue-400 hover:text-blue-300'>JURI LORENZ</a> }}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Footer;