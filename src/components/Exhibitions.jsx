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

const Exhibition = () => {
  return (
    <div id="exhibitions" className="max-w-[1200px] m-auto py-6 px-4 lg:mb-[2%]"> {/* Further reduced margin-bottom */}
      <h3 className='text-xl font-bold text-left border-b border-gray-500 w-fit pb-2 mb-4'>EXHIBITIONS</h3>

      {/* Image Slider */}
      <ImageSlider slides={slides} />

      {/* Present and Upcoming Sections */}
      <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming Section */}
        <div className="flex flex-col items-center text-center md:border-r md:pr-8">
          <h3 className="text-2xl font-bold mb-4">Upcoming</h3>
          <p className="text-gray-700">
            Solo exhibition<br />
            Art & Vision - Los Angeles<br />
            August 20, 2024 through October 5, 2024<br />
            Featuring a collection of new abstract works<br />
            Opening reception: August 20, 6-9pm
          </p>
        </div>

        {/* Past Section */}
        <div className="flex flex-col items-center text-center md:pl-8">
          <h3 className="text-2xl font-bold mb-4">Past</h3>
          <p className="text-gray-700 mb-4">
            Group exhibition<br />
            Global Art - New York<br />
            March 10, 2024 through May 7, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;