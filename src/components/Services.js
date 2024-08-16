import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Responsive and modern websites.' },
    { title: 'Mobile Development', description: 'Apps for both iOS and Android.' },
    { title: 'Cloud Services', description: 'Cloud architecture and consulting.' },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
