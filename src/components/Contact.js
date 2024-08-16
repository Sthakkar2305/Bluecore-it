import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-semibold text-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p 
          className="text-lg mt-4 text-gray-600 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          We would love to hear from you! Whether you have a question or need further information about our services, feel free to reach out.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 max-w-lg mx-auto bg-white shadow-md rounded-lg p-8"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Email"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Message" rows="4"></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-gray-800 text-white py-3 rounded font-semibold shadow-md hover:bg-gray-700 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
