import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
        <div className="flex justify-center mt-4 space-x-4">
          <motion.a 
            href="https://www.linkedin.com/in/bluecore-it-094700324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/bluecore_it" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
