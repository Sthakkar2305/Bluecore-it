import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaJava, FaMicrochip, FaPencilRuler, FaMobileAlt, FaPalette } from 'react-icons/fa';

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      description: 'We create responsive, modern websites that are optimized for performance and usability. Whether you need a personal blog or a complex e-commerce platform, we have you covered.', 
      icon: <FaCode />
    },
    { 
      title: 'Java Development', 
      description: 'Specialized in building scalable and efficient Java applications. Our expertise ranges from enterprise software solutions to Android apps, ensuring robust and reliable results.', 
      icon: <FaJava />
    },
    { 
      title: 'IoT & Hardware Design', 
      description: 'From smart devices to custom hardware solutions, we provide comprehensive IoT and hardware design services to bring your ideas to life and enhance connectivity.', 
      icon: <FaMicrochip />
    },
    { 
      title: 'UI/UX Design', 
      description: 'Creating intuitive and engaging user experiences through meticulous UI/UX design. We focus on both aesthetics and functionality to ensure the best user interaction.', 
      icon: <FaPencilRuler />
    },
    { 
      title: 'Embedded Engineering', 
      description: 'Specializing in the development of embedded systems, we create reliable and efficient solutions that integrate software and hardware to meet specific requirements.', 
      icon: <FaMobileAlt />
    },
    { 
      title: 'Graphic Design', 
      description: 'Offering creative graphic design services that bring your brand’s vision to life. From logos to complete branding, we ensure visual appeal and consistency across all platforms.', 
      icon: <FaPalette />
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              style={{ paddingBottom: '100%' }} // Maintains square aspect ratio
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
