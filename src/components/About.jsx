import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaAward, FaCode, FaHeart } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
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
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  const features = [
    {
      icon: FaAward,
      title: "Experience",
      description: `${personalInfo.yearsExperience} years of hands-on experience`
    },
    {
      icon: FaCode,
      title: "Projects",
      description: `${personalInfo.projectsCompleted} projects completed`
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "Creating solutions that make a difference"
    }
  ];

  return (
    <section 
      id="about" 
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            Get to know more about my background, experience, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with YOUR PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background animation */}
              <motion.div
                animate={{
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 rounded-3xl"
              ></motion.div>
              
              {/* Image Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl dark:shadow-gray-950/50 transition-colors duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800">
                  <img 
                    src="/profile.jpeg" 
                    alt={`${personalInfo.name} - Software Engineer`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content with Stagger Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300"
            >
              Software Developer & Engineer
            </motion.h3>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="space-y-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 
                  bg-primary-600 text-white rounded-full font-medium 
                  hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600
                  transition-all duration-300
                  shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Let's Talk
                <FiExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center px-6 py-3 
                  border-2 border-primary-600 dark:border-primary-400 
                  text-primary-600 dark:text-primary-400 
                  rounded-full font-medium 
                  hover:bg-primary-50 dark:hover:bg-primary-900/20
                  transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;