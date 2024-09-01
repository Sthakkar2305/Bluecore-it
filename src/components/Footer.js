import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaReddit, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaUser, FaServicestack, FaProjectDiagram, FaEnvelopeOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import qrimg from "../components/Screenshot 2024-09-01 013008.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
          {/* Contact Details Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:mr-8">
            <p className="text-xl font-bold mb-4">Contact Us</p>
            <div className="flex items-center mb-4 text-base justify-center md:justify-start space-x-3">
              <FaPhone className="text-xl text-blue-500" /> 
              <a href="tel:+918487958435" className="hover:underline">+91 8487958435</a>
            </div>
            <div className="flex items-center mb-4 text-base justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-xl text-blue-500" /> 
              <a href="mailto:bluecoreit1508@gmail.com" className="hover:underline">bluecoreit1508@gmail.com</a>
            </div>
            <div className="flex items-center mb-6 text-base justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="text-xl text-blue-500" />
              <span>3, Ajanta Society, Mahvirnagar, Himmatnagar</span>
            </div>
            <div className="flex justify-center md:justify-start mt-8">
              <img src={qrimg} alt="QR Code for Bluecore IT" className="w-32 h-32 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:mr-8">
            <p className="text-xl font-bold mb-4">Important Links</p>
            <div className="flex flex-col md:flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <FaHome className="text-lg text-blue-500" />
                <a href="#home" className="text-base hover:text-blue-400">Home</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaUser className="text-lg text-blue-500" />
                <a href="#about" className="text-base hover:text-blue-400">About</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaServicestack className="text-lg text-blue-500" />
                <a href="#services" className="text-base hover:text-blue-400">Services</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-lg text-blue-500" />
                <a href="#projects" className="text-base hover:text-blue-400">Projects</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelopeOpen className="text-lg text-blue-500" />
                <a href="#contact" className="text-base hover:text-blue-400">Contact</a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-xl font-bold mb-4">Follow Us</p>
            <div className="flex space-x-6">
              <motion.a 
                href="https://www.linkedin.com/in/bluecore-it-094700324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/people/BlueCoreit/61565250418909/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/bluecore_it" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://www.reddit.com/user/bluecore_it" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaReddit />
              </motion.a>
              <motion.a 
                href="https://twitter.com/bluecore_it" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bluecore IT. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
