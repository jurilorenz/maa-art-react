import React, { useState } from 'react';
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';

const Navbar = ({ content }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: "home", label: content.home },
    { id: "drawings", label: content.drawings },
    { id: "contact", label: content.contact },
    { id: "prints", label: content.prints },
    { id: "about", label: content.about },
    { id: "exhibitions", label: content.exhibitions },
  ];

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? 'scroll' : 'hidden';
  };

  return (
    <div className='fixed w-full flex justify-end p-4 items-center bg-transparent z-40'>
      <div onClick={handleNav} className={`text-white cursor-pointer z-50 p-2 rounded-full ${nav ? 'bg-black hover:bg-gray-700' : 'bg-gray-800 hover:bg-gray-600'}`}>
        {nav ? <HiMenuAlt2 size={25} /> : <HiMenuAlt3 size={25} />}
      </div>

      <div className={
        nav 
          ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-30' 
          : 'fixed top-0 h-screen left-[-100%] ease-in duration-500 z-10'
      }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          {links.map(link => (
            <li key={link.id} className='font-bold text-3xl p-8'>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                onClick={handleNav}
                className="cursor-pointer hover:text-gray-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;