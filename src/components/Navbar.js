import React, { useState } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, SparklesIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10" style={{ backgroundImage: "url('/3757c30a762387b (2).jpg')" }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
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

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="flex items-center text-gray-600 hover:text-gray-800">
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </a>
          <a href="#about" className="flex items-center text-gray-600 hover:text-gray-800">
            <UserIcon className="w-5 h-5 mr-2" />
            About
          </a>
          <a href="#services" className="flex items-center text-gray-600 hover:text-gray-800">
            <BriefcaseIcon className="w-5 h-5 mr-2" />
            Services
          </a>
          <a href="#projects" className="flex items-center text-gray-600 hover:text-gray-800">
            <SparklesIcon className="w-5 h-5 mr-2" />
            Projects
          </a>
          <a href="#contact" className="flex items-center text-gray-600 hover:text-gray-800">
            <PhoneIcon className="w-5 h-5 mr-2" />
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}>
        <a href="#home" onClick={handleMenuClick} className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-200">
          <HomeIcon className="w-5 h-5 mr-2" />
          Home
        </a>
        <a href="#about" onClick={handleMenuClick} className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-200">
          <UserIcon className="w-5 h-5 mr-2" />
          About
        </a>
        <a href="#services" onClick={handleMenuClick} className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-200">
          <BriefcaseIcon className="w-5 h-5 mr-2" />
          Services
        </a>
        <a href="#projects" onClick={handleMenuClick} className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-200">
          <SparklesIcon className="w-5 h-5 mr-2" />
          Projects
        </a>
        <a href="#contact" onClick={handleMenuClick} className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-200">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
