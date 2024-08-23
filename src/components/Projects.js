import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    { 
      title: 'Qrcode Scanner', 
      description: 'A web-based project management tool.', 
      images: ['https://th.bing.com/th/id/OIP.iveBz3ERDsZmVUcwt3GRjwHaHa?w=980&h=980&rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.FfmWXOMFYJVOFy7o7AXRUgHaEK?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.Ca9pcWLui6EJwrYtyA5wGgHaHa?rs=1&pid=ImgDetMain'],
      details: 'A QR code scanner app is a versatile tool designed to read and interpret QR codes and barcodes. It allows users to quickly scan QR codes to access embedded information such as URLs, contact details, or Wi-Fi credentials. Additionally, the app can read various types of barcodes to retrieve product information and prices.'
    },
    { 
      title: 'Ecommerce WebSite', 
      description: 'A mobile app for online shopping.', 
      images: ['https://th.bing.com/th/id/OIP.U6wBcBxBMWsoN_-lGjivMgHaFp?rs=1&pid=ImgDetMain', 'https://blog.revampcrm.com/wp-content/uploads/2016/04/ecommerce-dashboard-e1462713923183.jpg'],
      details: 'An eCommerce website is a digital platform that enables businesses to sell products and services online. It provides a user-friendly interface where customers can browse through various categories, view detailed product descriptions, and make purchases securely.'
    },
    { 
      title: 'Duct Cleaning Electric Robot', 
      description: 'Duct Cleaning Electric Robot.', 
      images: ['https://www.hasman.co.uk/wp-content/uploads/2020/02/Lifa-Electric-Robot.png', 'https://www.automationmagazine.co.uk/wp-content/uploads/25304/cda-image-1.jpg', '/images/project-three-3.jpg'],
      details: 'A duct cleaning electric robot is a specialized device designed to navigate through air ducts and clean them efficiently. Equipped with advanced sensors, cameras, and remote control systems, these robots can remove dust, debris, allergens, and contaminants with precision.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows on small screens
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-10"
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
              className={`bg-white p-4 md:p-6 rounded-lg shadow-lg relative transition-all duration-500 ${activeIndex === index ? 'h-[600px]' : 'h-[450px]'}`}
              whileHover={{ scale: 1.05 }}
            >
              <Slider {...sliderSettings}>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img 
                      src={image} 
                      alt={project.title} // Improved alt attribute
                      className="w-full h-60 object-cover rounded-md"
                    />
                  </div>
                ))}
              </Slider>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <button 
                aria-expanded={activeIndex === index}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => toggleDetails(index)}
              >
                {activeIndex === index ? 'Show Less' : 'More Details'}
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? 'auto' : 0 
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-left overflow-hidden max-h-[150px] overflow-y-auto"
              >
                {activeIndex === index && (
                  <p className="text-gray-600">{project.details}</p>
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
