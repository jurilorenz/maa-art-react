import React from 'react';
import ImageSlider from './ImageSlider'; // Adjust the path if necessary

// Dynamically load all images from the exhibitions directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const exhibitionImages = importAll(require.context('../assets/images/exhibitions', false, /\.(png|jpe?g|svg)$/));

const slides = Object.keys(exhibitionImages).map((key, index) => ({
  url: exhibitionImages[key],
  title: `Exhibition ${index + 1}`,
}));

const Exhibitions = ({ content }) => { // Accept content as a prop for language switching
  return (
    <div id="exhibitions" className="max-w-[1200px] m-auto py-6 px-6 lg:mb-[2%]"> 
      <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-4'>
        {content.title} {/* Exhibitions title based on language */}
      </h3>

      {/* Image Slider */}
      <ImageSlider slides={slides} />

      {/* Present and Upcoming Sections */}
      <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Section */}
        <div className="flex flex-col items-center text-center md:border-r md:pr-8">
          <h3 className="text-2xl font-bold mb-4">{content.upcomingTitle}</h3>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: content.upcomingDescription }} />
        </div>

        {/* Past Section */}
        <div className="flex flex-col items-center text-center md:pl-8">
          <h3 className="text-2xl font-bold mb-4">{content.pastTitle}</h3>
          <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: content.pastDescription }} />
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;