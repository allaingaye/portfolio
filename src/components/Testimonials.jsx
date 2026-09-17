import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People <span className="text-yellow-300">Say</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've worked with
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 
                rounded-3xl p-8 md:p-12 
                shadow-2xl dark:shadow-gray-950/50 
                transition-colors duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="w-12 h-12 
                text-primary-400 dark:text-primary-500 
                mb-6 transition-colors duration-300" 
              />

              {/* Testimonial Content */}
              <p className="text-xl 
                text-gray-700 dark:text-gray-300 
                leading-relaxed mb-6 
                transition-colors duration-300"
              >
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 
                    bg-primary-100 dark:bg-primary-900/40 
                    rounded-full flex items-center justify-center mr-4 
                    transition-colors duration-300"
                >
                  <span className="text-2xl">👤</span>
                </motion.div>
                <div>
                  <h4 className="font-semibold 
                    text-gray-800 dark:text-white 
                    transition-colors duration-300"
                  >
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 
              w-12 h-12 
              bg-white dark:bg-gray-800 
              rounded-full shadow-lg 
              flex items-center justify-center 
              hover:bg-gray-50 dark:hover:bg-gray-700 
              transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-6 h-6 
              text-gray-600 dark:text-gray-300 
              transition-colors duration-300" 
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 
              w-12 h-12 
              bg-white dark:bg-gray-800 
              rounded-full shadow-lg 
              flex items-center justify-center 
              hover:bg-gray-50 dark:hover:bg-gray-700 
              transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-6 h-6 
              text-gray-600 dark:text-gray-300 
              transition-colors duration-300" 
            />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;