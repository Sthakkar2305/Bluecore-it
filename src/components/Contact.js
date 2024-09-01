import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePopupChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      setShowPopup(false);
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("message").value = message;
    } else {
      alert("Please enter a valid name, email address, and message.");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://recive-mail.vercel.app/send-email",
        formData
      );
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setShowThankYou(true);
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      alert("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
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
          We would love to hear from you! Whether you have a question or need
          further information about our services, feel free to reach out.
        </motion.p>
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 max-w-lg mx-auto bg-white shadow-md rounded-lg p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
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
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Email
            </label>
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
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Subject
            </label>
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
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
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
            className="w-full bg-gray-800 text-white py-3 rounded font-semibold shadow-md hover:bg-gray-700 transition-colors flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Free Consultancy</h2>
            <p className="text-gray-600 mb-4">
              Get in touch with us for a free consultation! Fill out the form below or contact us directly for more information.
            </p>
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

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="popup-content bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for connecting with us. We appreciate you reaching out and will get back to you as soon as possible.
            </p>
            <p className="text-gray-600 mb-4">
              In the meantime, feel free to browse our website for more information about our services or contact us directly.
            </p>
            <button
              onClick={handleThankYouClose}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
