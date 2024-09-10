import React, { useState } from 'react';
import Modal from './Modal';

const Contact = ({ content }) => {
  return (
    <div id="contact" className='w-full mt-8 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto flex justify-center items-center py-8 px-4'>
        <div className='w-full md:w-1/2'>
          <p className='font-bold uppercase text-center'>{content.title}</p>
          <p className='py-4 text-center'>
            {content.description} <br />
            <a href={`mailto:${content.email}`} className='text-blue-400 hover:text-blue-300'>{content.email}</a>
          </p>
          <p className='pt-2 pb-6 text-center'>
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
    </div>
  );
};

export default Contact;