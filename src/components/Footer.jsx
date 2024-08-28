import React from 'react';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Contact Me</p>
          <p className='py-4'>
            If you have any questions or have a cooperation offer, you can write me an email: <br/>
            <a href="mailto:example@example.ru" className='text-blue-400'>example@example.ru</a>
          </p>
          <p className='py-2'>
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
            <p className='text-sm text-gray-500'>* - fields required for submission.</p>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Margarita Akimova</p>
      </div>
    </div>
  );
};

export default Footer;