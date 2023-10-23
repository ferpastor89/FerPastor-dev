import React, { useState } from 'react';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="lg:hidden">
        <button className="menu-hamburguesa focus:outline-none text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuAbierto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
      {menuAbierto && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-80  z-50">
          <div className="p-4 text-white text-center">
            <a href="#home" className="block py-2 hover:text-gray-300">Home</a>
            <a href="#projects" className="block py-2 hover:text-gray-300">Projects</a>
            <a href="#skills" className="block py-2 hover:text-gray-300">Skills</a>
            <a href="#about" className="block py-2 hover:text-gray-300">About me</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
