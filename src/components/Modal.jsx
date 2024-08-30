import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({ image, isOpen, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div 
      className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center'
      onClick={onClose} // Close the modal when clicking on the background
    >
      <button 
        onClick={onClose} 
        className='absolute top-2 right-2 text-white text-3xl hover:text-gray-300 bg-transparent border-none'
      >
        <VscChromeClose />
      </button>

      <div className='relative max-w-[100%] max-h-[80%] flex flex-col justify-center items-center'>
        <img 
          src={image.fullSrc} 
          alt={image.title} 
          className='object-contain w-full max-h-[80vh] lg:max-w-full' // Ensures the image uses full width on mobile
        />

        <div className='mt-4 text-white text-center flex items-center justify-center lg:justify-between w-full px-4'>
          {/* TITLE and Info */}
          <div className='flex flex-col items-center lg:flex-grow'>
            <p className='text-lg font-bold'>{image.title}</p>
            <p className='text-sm'>{image.size}, {image.medium}, {image.year}</p>
            <p className='text-sm'>{image.price}</p>
          </div>
        </div>
      </div>

      {/* LEFT Arrow */}
      <button 
        onClick={onPrev} 
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none 
        absolute bottom-8 left-8 lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-0' 
      >
        <BsChevronLeft />
      </button>
      
      {/* RIGHT Arrow */}
      <button 
        onClick={onNext} 
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none 
        absolute bottom-8 right-8 lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-0' 
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Modal;