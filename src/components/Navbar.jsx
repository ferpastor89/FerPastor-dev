import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed pt-4 pr-3 z-50 flex flex-wrap justify-between w-full max-w-screen-lg lg:hidden ${scrollY > 0 && !menuAbierto ? 'bg-white bg-opacity-30 backdrop-blur-lg' : ''}`}>
      <div className="logo pl-3">
        <h1 className="logo-h1 text-2xl font-bold bg-gradient-to-r text-transparent from-blue-500 via-green-300 to-orange-500 bg-clip-text">FP</h1>
      </div>
      <div className="lg:hidden">
        <button className="menu-hamburguesa focus:outline-none text-white z-10" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h22M7 12h17M10 18h15"></path>
          </svg>
        </button>
        {menuAbierto && (
          <button className="menu-cerrar absolute top-3 right-3 focus:outline-none text-white z-20" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
      {menuAbierto && (
        <div className="fixed top-0 left-0 w-full h-full bg-yellow-300 bg-opacity-60 backdrop-blur-lg flex justify-center items-center z-15">
          <div className="w-80 p-6  text-white text-center text-3xl bold uppercase pt-0">
            <a href="#home" className=" block py-6 hover:text-gray-500 transition duration-300 transform hover:scale-105">Home</a>
            <a href="#projects" className=" block py-6 hover:text-gray-500 transition duration-300 transform hover:scale-105">Projects</a>
            <a href="#skills" className=" block py-6 hover:text-gray-500 transition duration-300 transform hover:scale-105">Skills</a>
            <a href="#about" className=" block py-6 hover:text-gray-500 transition duration-300 transform hover:scale-105">About</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
