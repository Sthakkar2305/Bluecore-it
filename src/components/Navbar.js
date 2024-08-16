import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Bluecore IT</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}>
        <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Home</a>
        <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">About</a>
        <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Services</a>
        <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Projects</a>
        <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
