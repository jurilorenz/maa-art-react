import React, { useState, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from "react-icons/vsc";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Modal = ({ image, isOpen, onClose, onNext, onPrev }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const zoomRef = useRef(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsFadingOut(true);
    setTimeout(() => {
      if (zoomRef.current) {
        zoomRef.current.resetTransform(); // Reset zoom on image change
      }
      onPrev();
      setIsLoading(true);  
      setIsFadingOut(false);
    }, 700);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsFadingOut(true);
    setTimeout(() => {
      if (zoomRef.current) {
        zoomRef.current.resetTransform(); // Reset zoom on image change
      }
      onNext();
      setIsLoading(true);
      setIsFadingOut(false);
    }, 700);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center' onClick={onClose}>
      <button onClick={onClose} className='absolute top-2 right-2 text-white text-3xl hover:text-gray-300 bg-transparent border-none'>
        <VscChromeClose />
      </button>

      <div className='relative max-w-[100%] max-h-[80%] flex flex-col justify-center items-center'
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
>
        {isLoading && <div className="loader">Loading...</div>}

        {/* Wrapping the image with TransformWrapper for zoom and pan */}
        <TransformWrapper ref={zoomRef}> {/* Pass zoomRef here */}
          <TransformComponent>
            <img 
              src={image.fullSrc} 
              alt={image.title} 
              className={`object-contain w-full max-h-[80vh] lg:max-w-full transition-opacity duration-700 ease-in-out ${isFadingOut || isLoading ? 'opacity-0' : 'opacity-100'}`} 
              onLoad={handleImageLoad} 
              onClick={(e) => e.stopPropagation()} 
            />
          </TransformComponent>
        </TransformWrapper>

        <div className={`mt-4 text-white text-center flex items-center justify-center lg:justify-between w-full px-4 transition-opacity duration-700 ease-in-out ${isFadingOut || isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className='flex flex-col items-center lg:flex-grow'>
            <p className='text-lg font-bold'>{image.title}</p>
            <p className='text-sm'>{image.size}, {image.medium}, {image.year}</p>
            <p className='text-sm'>{image.price}</p>
          </div>
        </div>
      </div>

      <button 
        onClick={handlePrev} 
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none absolute bottom-8 left-8 lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-0'>
        <BsChevronLeft />
      </button>

      <button 
        onClick={handleNext} 
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none absolute bottom-8 right-8 lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-0'>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Modal;