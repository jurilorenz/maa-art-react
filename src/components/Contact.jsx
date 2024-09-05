import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className='w-full mt-8 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto flex justify-center items-center py-8 px-4'>
        <div className='w-full md:w-1/2'>
          <p className='font-bold uppercase text-center'>Contact Us</p>
          <p className='py-4 text-center'>
            If you have any questions or have a cooperation offer, you can write me an email: <br/>
            <a href="mailto:example@example.ru" className='text-blue-400'>example@example.ru</a>
          </p>
          <p className='py-2 text-center'>
            or leave information on the website by filling out this contact form:
          </p>
          <form className='flex flex-col'>
            <input 
              className='w-full p-2 mb-4 rounded-md text-gray-800' 
              type='text' 
              placeholder='Your Name *' 
              required 
            />
            <input 
              className='w-full p-2 mb-4 rounded-md text-gray-800' 
              type='tel' 
              placeholder='Phone Number' 
              required 
            />
            <input 
              className='w-full p-2 mb-4 rounded-md text-gray-800' 
              type='email' 
              placeholder='Your Email *' 
              required 
            />
            <textarea 
              className='w-full p-2 mb-4 rounded-md text-gray-800' 
              placeholder='Enter your message *' 
              rows='4' 
              required 
            />
            <button 
              className='w-full p-2 mb-4 bg-gray-700 text-white rounded-md hover:bg-gray-600' 
              type='submit'
            >
              Send Message
            </button>
            <p className='text-sm text-gray-500 text-center'>* - fields required for submission.</p>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Margarita Akimova</p>
        <p className='py-4'>Privacy</p>
        <p className='py-4'>
        Crafted by: <a href="https://jurilorenz.github.io/cv" className='text-blue-400'>Juri Lorenz</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;