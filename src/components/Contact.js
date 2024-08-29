import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false); // State for controlling pop-up visibility
  const [loading, setLoading] = useState(false); // State for controlling loader visibility
  const formRef = useRef(null);

  useEffect(() => {
    const handleUpdateForm = (event) => {
      const { name, email, subject, message } = event.detail;
      setFormData({ name, email, subject, message });
    };

    const handleFormEvent = (event) => {
      if (event.type === 'updateForm') {
        handleUpdateForm(event);
      }
    };

    window.addEventListener('updateForm', handleFormEvent);

    return () => {
      window.removeEventListener('updateForm', handleFormEvent);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader
    sendEmail(formData);
  };

  const sendEmail = async (formData) => {
    try {
      const response = await fetch('https://recive-mail.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false); // Hide the loader

      if (result.success) {
        console.log('Email sent successfully:', result);
        setShowPopup(true); // Show the pop-up
        setTimeout(() => {
          setShowPopup(false); // Hide the pop-up after 3 seconds
        }, 3000);
        // Optionally reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send mail. Please try again.');
      }
    } catch (error) {
      setLoading(false); // Hide the loader in case of error
      console.error('Form submission error:', error);
      alert('An error occurred while sending the mail. Please try again.');
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
          ref={formRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 max-w-lg mx-auto bg-white shadow-md rounded-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-gray-800 text-white py-3 rounded font-semibold shadow-md hover:bg-gray-700 transition-colors"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="flex justify-center items-center">
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        {/* Pop-up */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-semibold">Thank you for connecting with us!</h2>
              <p className="mt-2 text-gray-600">We will get back to you shortly.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
