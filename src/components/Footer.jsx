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
    <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
      <p className='py-4'>2024 Margarita Akimova</p>
      {/* Privacy link */}
      <p className='py-4 hover:text-gray-400'>{content.privacy}</p>
      <div className='py-4 flex items-center justify-center gap-2'>
        <span>{content.craftedBy}:</span>
        <div 
          className="relative w-8 h-8 border-2 border-white rounded-full overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors duration-300"
          onClick={openModal}
        >
          <img src={devPainting} alt="Developer Icon" className='w-full h-full rounded-full hover:brightness-125 transition-transform duration-300' />
        </div>
        <a href="https://jurilorenz.github.io/cv" className='text-blue-400 hover:text-blue-300'>JURI LORENZ</a>
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