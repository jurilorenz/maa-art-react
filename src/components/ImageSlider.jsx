import React, { useState } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div
        className='absolute top-[50%] left-5 transform -translate-y-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={goToPreviousSlide}
      >
        ❮
      </div>
      {/* Right Arrow */}
      <div
        className='absolute top-[50%] right-5 transform -translate-y-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={goToNextSlide}
      >
        ❯
      </div>
      {/* Dots Navigation */}
      <div className='flex justify-center py-2'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;