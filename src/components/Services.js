import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaJava, FaMicrochip, FaPencilRuler, FaMobileAlt, FaPalette } from 'react-icons/fa';

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      description: 'We create responsive, modern websites that are optimized for performance and usability. Whether you need a personal blog, a corporate website, or a complex e-commerce platform, our team ensures your online presence is engaging and effective. We focus on clean code, SEO best practices, and mobile-friendly designs to help you reach your audience across all devices.', 
      icon: <FaCode />
    },
    { 
      title: 'Java Development', 
      description: 'Specialized in building scalable and efficient Java applications, our services range from developing enterprise-level software solutions to creating dynamic Android apps. We ensure robust and reliable results, with a focus on performance, security, and maintainability, tailored to meet the specific needs of your business.', 
      icon: <FaJava />
    },
    { 
      title: 'IoT & Hardware Design', 
      description: 'From smart devices to custom hardware solutions, we provide comprehensive IoT and hardware design services to bring your ideas to life. Our expertise includes developing embedded systems, designing PCB layouts, and integrating sensors and communication protocols to create innovative, connected devices that enhance functionality and user experience.', 
      icon: <FaMicrochip />
    },
    { 
      title: 'UI/UX Design', 
      description: 'Creating intuitive and engaging user experiences through meticulous UI/UX design. We prioritize user-centered design principles to craft interfaces that are both aesthetically pleasing and easy to use. Whether it’s a mobile app, a web platform, or a software application, we focus on delivering seamless interactions that drive user satisfaction and retention.', 
      icon: <FaPencilRuler />
    },
    { 
      title: 'Embedded Engineering', 
      description: 'Specializing in the development of embedded systems, we create reliable and efficient solutions that integrate software and hardware to meet specific requirements. Our services include firmware development, real-time operating systems, and custom hardware integration, ensuring your embedded devices are both powerful and cost-effective.', 
      icon: <FaMobileAlt />
    },
    { 
      title: 'Graphic Design', 
      description: 'Offering creative graphic design services that bring your brand’s vision to life. From logos and business cards to complete branding and marketing materials, we ensure visual appeal and consistency across all platforms. Our designs are tailored to capture your brand’s identity, making a lasting impression on your audience.', 
      icon: <FaPalette />
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between transform transition-transform hover:scale-105"
              style={{ height: 'auto', minHeight: '320px' }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl text-indigo-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
