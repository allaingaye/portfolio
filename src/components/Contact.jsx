import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapPin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // Your EmailJS credentials
    const SERVICE_ID = 'service_j43ag0b';
    const TEMPLATE_ID = 'template_rlce80o';
    const PUBLIC_KEY = 'RMiVGBBgutYvF5W3k';

    const templateParams = {
      title: 'Portfolio Contact Message',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      current_time: new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
      }),
    };

    try {
      emailjs.init(PUBLIC_KEY);
      
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('SUCCESS!', response.status, response.text);
      
      setStatus({
        type: 'success',
        message: '✅ Message sent successfully! I\'ll get back to you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('FAILED...', error);
      setStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: FaMapPin, label: 'Location', value: personalInfo.location },
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, link: `tel:${personalInfo.phone}` }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title dark:text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            Get in touch to discuss your project or just say hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                    {item.label}
                  </h4>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-md 
                border border-gray-100 dark:border-gray-800 
                transition-colors duration-300"
            >
              {/* Status Message */}
              {status.message && (
                <div className={`mb-4 p-4 rounded-lg border ${
                  status.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                }`}>
                  {status.message}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 
                      bg-white dark:bg-gray-900 
                      border border-gray-300 dark:border-gray-700 
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-gray-500 
                      rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                      outline-none transition"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 
                      bg-white dark:bg-gray-900 
                      border border-gray-300 dark:border-gray-700 
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-gray-500 
                      rounded-lg 
                      focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                      outline-none transition"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 
                    bg-white dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 
                    text-gray-900 dark:text-white 
                    placeholder-gray-400 dark:placeholder-gray-500 
                    rounded-lg 
                    focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                    outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                className={`inline-flex items-center px-8 py-3 
                  bg-primary-600 dark:bg-primary-500 
                  text-white rounded-lg font-medium 
                  transition-all duration-300 
                  shadow-lg shadow-primary-500/25 
                  hover:shadow-xl hover:shadow-primary-500/30 
                  ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700 dark:hover:bg-primary-600'}`}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;