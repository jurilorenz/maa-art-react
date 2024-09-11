import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Modal from './Modal';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-10 px-4 relative group'>
      {/* Neumorphism effect for the image container */}
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 cursor-pointer shadow-neumorphism hover:shadow-neumorphism-hover transition-all'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        onClick={openModal}
      ></div>

      {/* Left Arrow */}
      <button
        onClick={goToPreviousSlide}
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none absolute left-4 top-[50%] transform -translate-y-1/2'
      >
        <BsChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextSlide}
        className='text-white text-3xl hover:text-gray-300 bg-transparent border-none absolute right-4 top-[50%] transform -translate-y-1/2'
      >
        <BsChevronRight />
      </button>

      {/* Dots Navigation */}
      <div className='flex justify-center py-2'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {isModalOpen && (
        <Modal
          image={{
            fullSrc: slides[currentIndex].fullSrc || slides[currentIndex].url,
            title: slides[currentIndex].title,
            size: slides[currentIndex].size || 'Unknown Size',
            medium: slides[currentIndex].medium || 'Mixed Media',
            year: slides[currentIndex].year || '2023',
          }}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={goToNextSlide}
          onPrev={goToPreviousSlide}
        />
      )}
    </div>
  );
};

export default ImageSlider;