import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ecommerceimage from '../components/Screenshot 2024-03-06 101019.png';
import votingimage from '../components/WhatsApp Image 2024-08-24 at 2.02.25 PM.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'QR Code Scanner',
      description: 'A versatile tool designed to read and interpret QR codes and barcodes. It allows users to quickly scan QR codes to access embedded information such as URLs, contact details, or Wi-Fi credentials.',
      image: 'https://th.bing.com/th/id/OIP.iveBz3ERDsZmVUcwt3GRjwHaHa?w=980&h=980&rs=1&pid=ImgDetMain',
    },
    {
      title: 'E-commerce Website',
      description: 'A digital platform that enables businesses to sell products and services online. It provides a user-friendly interface where customers can browse through various categories, view detailed product descriptions, and make purchases securely.',
      image: ecommerceimage,
    },
    {
      title: 'Duct Cleaning Electric Robot',
      description: 'A specialized device designed to navigate through air ducts and clean them efficiently. Equipped with advanced sensors, cameras, and remote control systems, these robots can remove dust, debris, allergens, and contaminants with precision.',
      image: 'https://www.hasman.co.uk/wp-content/uploads/2020/02/Lifa-Electric-Robot.png',
    },
    {
      title: 'AI-Based Electronics Voting Machine',
      description: 'An innovative electronic voting system powered by artificial intelligence, designed to provide secure, efficient, and transparent voting experiences. The machine uses AI algorithms to ensure accuracy and prevent fraud during elections.',
      image: votingimage,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-60 md:h-60 flex justify-center items-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mt-4">{project.title}</h3>
              <button
                aria-expanded={activeIndex === index}
                className="mt-4 bg-blue-500 text-white px-4 py-2 text-sm md:text-base rounded hover:bg-blue-600"
                onClick={() => toggleDetails(index)}
              >
                {activeIndex === index ? 'Show Less' : 'More Details'}
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-left overflow-hidden"
              >
                {activeIndex === index && (
                  <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
