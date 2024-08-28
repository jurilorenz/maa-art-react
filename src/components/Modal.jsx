import React, { useState } from 'react';
import { FiX } from 'react-icons/fi'; // Icon for closing the modal

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div>
      {/* Trigger to open the modal */}
      <button onClick={handleModal} className='text-white font-bold'>
        Open Modal
      </button>

      {/* Modal itself */}
      <div className={
        isOpen 
          ? 'fixed inset-0 bg-black/90 flex justify-center items-center z-10 ease-in duration-500' 
          : 'absolute top-0 left-0 w-full h-screen z-10 opacity-0 pointer-events-none'
        }
      >
        <div className='relative max-w-[90%] max-h-[80%] bg-white p-4 text-black'>
          <FiX onClick={handleModal} className='absolute top-4 right-4 cursor-pointer' size={25} />
          <h1 className='text-2xl font-bold'>Margarita Akimova</h1>
          <ul className='mt-4'>
            <li className='text-xl p-2'>Home</li>
            <li className='text-xl p-2'>Destinations</li>
            <li className='text-xl p-2'>Reservations</li>
            <li className='text-xl p-2'>Anenities</li>
            <li className='text-xl p-2'>Rooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;