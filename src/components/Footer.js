import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Bluecore IT. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#home" className="hover:underline text-gray-400">Home</a>
          <a href="#about" className="hover:underline text-gray-400">About</a>
          <a href="#services" className="hover:underline text-gray-400">Services</a>
          <a href="#projects" className="hover:underline text-gray-400">Projects</a>
          <a href="#contact" className="hover:underline text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
