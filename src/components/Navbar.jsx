import React, { useState } from 'react';
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className='fixed w-full flex justify-end p-4 items-center bg-transparent z-40'>
      {/* Toggle between Menu Icon and Close Icon */}
      <div onClick={handleNav} className='text-white cursor-pointer z-50'>
        {nav ? <HiMenuAlt2 size={25} /> : <HiMenuAlt3 size={25} />}
      </div>

      <div className={
        nav 
          ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-30' 
          : 'fixed top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              Home
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="drawings" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              Drawings
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="prints" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              Prints
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="exhibitions" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              Exhibitions
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;