import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePopupChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = () => {
    const { name, email, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length >= 2 && emailPattern.test(email) && message.length > 0) {
      // Hide the popup
      setShowPopup(false);
      
      // Scroll to the contact form
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      
      // Automatically update the contact form fields
      document.getElementById('name').value = name;
      document.getElementById('email').value = email;
      document.getElementById('message').value = message;
    } else {
      alert('Please enter a valid name, email address, and message.');
    }
  };

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
          action="https://recive-mail.vercel.app/send-email"
          method="POST"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 max-w-lg mx-auto bg-white shadow-md rounded-lg p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
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

      {/* Popup */}
      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Free Consultancy</h2>
            <p className="mb-4">Get in touch with us for a free consultation!</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handlePopupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handlePopupChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              value={formData.message}
              onChange={handlePopupChange}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handlePopupSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
              >
                Get Consultation
              </button>
              <button
                onClick={handlePopupClose}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
