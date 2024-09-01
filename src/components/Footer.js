import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaReddit, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaUser, FaServicestack, FaProjectDiagram, FaEnvelopeOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import qrimg from "../components/Screenshot 2024-09-01 013008.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Contact Details Section */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold mb-6">Contact Us</p>
              <div className="flex items-center mb-4 text-lg justify-center md:justify-start space-x-4">
                <FaPhone className="text-2xl text-blue-500" /> 
                <a href="tel:+918487958435" className="hover:underline">+91 8487958435</a>
              </div>
              <div className="flex items-center mb-4 text-lg justify-center md:justify-start space-x-4">
                <FaEnvelope className="text-2xl text-blue-500" /> 
                <a href="mailto:bluecoreit1508@gmail.com" className="hover:underline">bluecoreit1508@gmail.com</a>
              </div>
              <div className="flex items-start mb-6 text-lg justify-center md:justify-start space-x-4 flex-wrap">
                <FaMapMarkerAlt className="text-2xl text-blue-500" />
                <span className="text-center md:text-left">3, Ajanta Society, Mahvirnagar, Himmatnagar</span>
              </div>
              <div className="flex justify-center md:justify-start mt-8">
                <img src={qrimg} alt="QR Code for Bluecore IT" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Menu Section */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold mb-6">Important Links</p>
              <div className="flex flex-col items-center md:items-start space-y-4">
                {[
                  { icon: <FaHome />, label: "Home", href: "#home" },
                  { icon: <FaUser />, label: "About", href: "#about" },
                  { icon: <FaServicestack />, label: "Services", href: "#services" },
                  { icon: <FaProjectDiagram />, label: "Projects", href: "#projects" },
                  { icon: <FaEnvelopeOpen />, label: "Contact", href: "#contact" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {item.icon}
                    <a href={item.href} className="text-lg hover:text-blue-400">{item.label}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold mb-6">Follow Us</p>
              <div className="flex flex-col items-center md:items-start space-y-4">
                {[
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bluecore-it-094700324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                  { icon: <FaFacebook />, href: "https://www.facebook.com/people/BlueCoreit/61565250418909/" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/bluecore_it" },
                  { icon: <FaReddit />, href: "https://www.reddit.com/user/bluecore_it" },
                  { icon: <FaTwitter />, href: "https://twitter.com/bluecore_it" }
                ].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bluecore IT. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
