import React from 'react';
import { motion } from 'framer-motion';
import './style.css'; // Adjust path as needed

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          
          {/* Left Side - Title */}
          <motion.div 
            className="flex-shrink-0 text-center md:text-left md:w-1/3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug md:text-center">
              About Us
            </h2>
          </motion.div>

          {/* Right Side - Company Description */}
          <motion.div 
            className="md:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Bluecore IT, we offer cutting-edge IT solutions designed to drive your business forward in the digital age. Our expertise spans web development, mobile applications, and cloud services, all tailored to meet your specific needs. Partner with us to achieve seamless digital transformation and operational excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
