import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-800">Welcome to Bluecore IT</h1>
        <p className="text-lg mt-4 text-gray-600">Innovative Solutions for Your Business Growth</p>
        <motion.a 
          href="#about"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition-colors"
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
