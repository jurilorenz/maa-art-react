import React, { useState } from 'react';
import devPainting from '../assets/images/dev.jpg';
import dev2 from '../assets/images/dev2.jpg';
import Modal from './Modal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="contact" className='w-full mt-8 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto flex justify-center items-center py-8 px-4'>
        <div className='w-full md:w-1/2'>
          <p className='font-bold uppercase text-center'>Contact Us</p>
          <p className='py-4 text-center'>
            If you have any questions or have a cooperation offer, you can write me an email: <br/>
            <a href="mailto:example@example.ru" className='text-blue-400 hover:text-blue-300'>example@example.ru</a>
          </p>
          <p className='py-2 text-center'>
            or leave information on the website by filling out this contact form:
          </p>
          <form className='flex flex-col'>
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='text' placeholder='Your Name *' required />
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='tel' placeholder='Phone Number' required />
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='email' placeholder='Your Email *' required />
            <textarea className='w-full p-2 mb-4 rounded-md text-gray-800' placeholder='Enter your message *' rows='4' required />
            <button className='w-full p-2 mb-4 bg-gray-700 text-white rounded-md hover:bg-gray-600' type='submit'>Send Message</button>
            <p className='text-sm text-gray-500 text-center'>* - fields required for submission.</p>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Margarita Akimova</p>
        <p className='py-4 hover:text-gray-400'>Privacy</p>
        <p className='py-4 flex items-center justify-center gap-2'>
          Crafted by:
          <div 
            className="relative w-8 h-8 border-2 border-white rounded-full overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            onClick={openModal} 
          >
            <img src={devPainting} alt="Developer Icon" className='w-full h-full rounded-full hover:brightness-125 transition-transform duration-300' />
          </div>
          <a href="https://jurilorenz.github.io/cv" className='text-blue-400 hover:text-blue-300'>JURI LORENZ</a>
        </p>
      </div>

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

export default Contact;