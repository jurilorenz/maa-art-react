import React, { useState, useEffect, useRef } from 'react';
import homeImage from '../assets/images/home.jpg'; 
import { GrLanguage } from "react-icons/gr";

const Home = ({ language, toggleLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const content = language === 'en' ? 'Margarita Akimova' : 'Маргарита Акимова';
  
  // Create a ref for the dropdown menu
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div id="home" className='w-full h-screen relative'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={homeImage} alt="Home Background" />
      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />

      {/* Container for text */}
      <div className='absolute top-0 left-0 w-full h-full flex justify-start items-start p-4'>
        {/* Text in the upper left corner */}
        <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl'>
          {content}
        </h1>

        {/* Language Switch Button (Globe Icon with Dropdown) */}
        <div ref={dropdownRef} className='absolute top-4 right-1/4 transform translate-x-1/2 z-40'>
          <div 
            className='relative cursor-pointer text-white p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300'
            onClick={toggleDropdown}
          >
            <GrLanguage size={25} />
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
              <ul className='text-left'>
                <li 
                  className={`px-4 py-2 cursor-pointer ${language === 'en' ? 'bg-gray-700' : ''}`}
                  onClick={() => toggleLanguage('en')}
                >
                  EN
                </li>
                <li 
                  className={`px-4 py-2 cursor-pointer ${language === 'ru' ? 'bg-gray-700' : ''}`}
                  onClick={() => toggleLanguage('ru')}
                >
                  RU
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;