import React, { useState } from 'react';
import devPainting from '../assets/images/dev.jpg';
import dev2 from '../assets/images/dev2.jpg';
import Modal from './Modal';

const Contact = ({ content }) => { // Accept content as prop for language switching
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
          <p className='font-bold uppercase text-center'>{content.title}</p>
          <p className='py-4 text-center'>
            {content.description} <br />
            <a href={`mailto:${content.email}`} className='text-blue-400 hover:text-blue-300'>{content.email}</a>
          </p>
          <p className='py-2 text-center'>
            {content.or}
          </p>
          <form className='flex flex-col'>
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='text' placeholder={content.form.namePlaceholder} required />
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='tel' placeholder={content.form.phonePlaceholder} required />
            <input className='w-full p-2 mb-4 rounded-md text-gray-800' type='email' placeholder={content.form.emailPlaceholder} required />
            <textarea className='w-full p-2 mb-4 rounded-md text-gray-800' placeholder={content.form.messagePlaceholder} rows='4' required />
            <button className='w-full p-2 mb-4 bg-gray-700 text-white rounded-md hover:bg-gray-600' type='submit'>
              {content.form.submit}
            </button>
            <p className='text-sm text-gray-500 text-center'>{content.form.requiredNote}</p>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Margarita Akimova</p>
        <p className='py-4 hover:text-gray-400'>{content.footer.privacy}</p>
        <div className='py-4 flex items-center justify-center gap-2'>
  <span>{content.footer.craftedBy}:</span>
  <div 
    className="relative w-8 h-8 border-2 border-white rounded-full overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors duration-300"
    onClick={openModal}
  >
    <img src={devPainting} alt="Developer Icon" className='w-full h-full rounded-full hover:brightness-125 transition-transform duration-300' />
  </div>
  <a href="https://jurilorenz.github.io/cv" className='text-blue-400 hover:text-blue-300'>JURI LORENZ</a>
</div>
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