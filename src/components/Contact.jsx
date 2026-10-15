import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapPin, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
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
        message: 'Message sent successfully! I\'ll get back to you soon.'
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
        message: 'Failed to send message. Please try again or email me directly.'
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
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex items-start gap-4 
                  bg-gray-50 dark:bg-[#111111] 
                  rounded-xl p-5 
                  border border-gray-200 dark:border-gray-800
                  hover:border-primary-500/50 dark:hover:border-primary-500/50
                  hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10
                  transition-all duration-300 
                  overflow-hidden"
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 
                  bg-gradient-to-br from-primary-500/0 to-primary-500/0 
                  group-hover:from-primary-500/5 group-hover:to-primary-500/0
                  rounded-full blur-2xl 
                  transition-all duration-500" 
                />

                {/* Icon */}
                <div className="relative w-12 h-12 flex-shrink-0
                  bg-primary-100 dark:bg-primary-900/20 
                  rounded-xl flex items-center justify-center 
                  group-hover:bg-primary-600 dark:group-hover:bg-primary-500 
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 
                    text-primary-600 dark:text-primary-400 
                    group-hover:text-white 
                    transition-colors duration-300" 
                  />
                </div>

                {/* Text */}
                <div className="relative min-w-0">
                  <h4 className="text-sm font-semibold uppercase tracking-wide 
                    text-gray-500 dark:text-gray-500 
                    mb-1 
                    transition-colors duration-300">
                    {item.label}
                  </h4>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-800 dark:text-white 
                        hover:text-primary-600 dark:hover:text-primary-400 
                        transition-colors duration-200 
                        break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 dark:text-white transition-colors duration-300 break-words">
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
              className="relative bg-gray-50 dark:bg-[#111111] 
                rounded-xl p-8 
                border border-gray-200 dark:border-gray-800
                transition-colors duration-300 
                overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 
                bg-gradient-to-br from-primary-500/5 to-primary-500/0
                rounded-full blur-3xl 
                pointer-events-none" 
              />

              {/* Status Message */}
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    key={status.type}
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`relative mb-6 p-4 rounded-lg border flex items-start gap-3 ${
                      status.type === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' 
                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                    }`}
                  >
                    {status.type === 'success' && (
                      <FaCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-sm font-medium">{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium 
                    text-gray-700 dark:text-gray-300 
                    mb-2 transition-colors duration-300">
                    Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 
                      bg-white dark:bg-[#0a0a0a] 
                      border border-gray-300 dark:border-gray-800 
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-gray-600 
                      rounded-lg 
                      focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 
                      hover:border-gray-400 dark:hover:border-gray-700
                      outline-none transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium 
                    text-gray-700 dark:text-gray-300 
                    mb-2 transition-colors duration-300">
                    Email <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 
                      bg-white dark:bg-[#0a0a0a] 
                      border border-gray-300 dark:border-gray-800 
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-gray-600 
                      rounded-lg 
                      focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 
                      hover:border-gray-400 dark:hover:border-gray-700
                      outline-none transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="relative mb-6">
                <label className="block text-sm font-medium 
                  text-gray-700 dark:text-gray-300 
                  mb-2 transition-colors duration-300">
                  Message <span className="text-primary-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 
                    bg-white dark:bg-[#0a0a0a] 
                    border border-gray-300 dark:border-gray-800 
                    text-gray-900 dark:text-white 
                    placeholder-gray-400 dark:placeholder-gray-600 
                    rounded-lg 
                    focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 
                    hover:border-gray-400 dark:hover:border-gray-700
                    outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                className={`relative inline-flex items-center justify-center 
                  px-8 py-3 
                  bg-primary-600 dark:bg-primary-500 
                  text-white rounded-lg font-medium text-sm
                  transition-all duration-300 
                  shadow-lg shadow-primary-500/25 
                  hover:shadow-xl hover:shadow-primary-500/40 
                  ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700 dark:hover:bg-primary-400'}`}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
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