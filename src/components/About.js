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
  At Bluecore IT, we provide a comprehensive range of services to meet your technology needs. 
  From <span className="font-semibold">Web Development</span> that ensures your online presence is modern and responsive, 
  to <span className="font-semibold">Java Development</span> for building scalable enterprise applications. 
  We specialize in <span className="font-semibold">IoT & Hardware Design</span> to bring innovative connected devices to life, 
  and <span className="font-semibold">UI/UX Design</span> that creates intuitive and engaging user experiences. 
  Our <span className="font-semibold">Embedded Engineering</span> services ensure your hardware and software work seamlessly together, 
  while our <span className="font-semibold">Graphic Design</span> capabilities help your brand stand out with visually appealing and consistent branding.
  Partner with Bluecore IT to drive your business forward with our tailored IT solutions.
</p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
