import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'A web-based project management tool.' },
    { title: 'Project Two', description: 'A mobile app for online shopping.' },
    { title: 'Project Three', description: 'A cloud-based CRM platform.' },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700 mt-4">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
