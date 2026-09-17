import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaCoffee, FaBriefcase } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import WorldGlobe from './WorldGlobe';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 
        bg-gradient-to-br from-blue-50 via-white to-purple-50 
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
        overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInLeft}
            className="space-y-8 lg:pr-8"
          >
            <div className="space-y-4">
              {/* Availability Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 
                  bg-primary-50 dark:bg-primary-900/30 
                  text-primary-700 dark:text-primary-300 
                  rounded-full text-sm font-medium 
                  border border-primary-100 dark:border-primary-800/50
                  transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for Work · Remote
              </motion.span>
              
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-gray-900 dark:text-white transition-colors duration-300">
                  Hi, I'm
                </span>
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
              
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-2xl 
                  text-gray-600 dark:text-gray-300 
                  font-medium transition-colors duration-300"
              >
                {personalInfo.title}
              </motion.h2>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg 
                  text-gray-600 dark:text-gray-400 
                  max-w-lg leading-relaxed transition-colors duration-300"
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#portfolio" 
                className="group inline-flex items-center px-6 py-3 
                  bg-primary-600 dark:bg-primary-500 
                  text-white rounded-full font-medium 
                  hover:bg-primary-700 dark:hover:bg-primary-600 
                  transition-all duration-300 
                  shadow-lg shadow-primary-500/25 
                  hover:shadow-xl hover:shadow-primary-500/30"
              >
                View My Work
                <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 
                  bg-white dark:bg-gray-800 
                  text-gray-700 dark:text-gray-200 
                  border border-gray-200 dark:border-gray-700 
                  rounded-full font-medium 
                  hover:border-primary-600 dark:hover:border-primary-400 
                  hover:text-primary-600 dark:hover:text-primary-400 
                  transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-6 
                border-t border-gray-100 dark:border-gray-800 
                transition-colors duration-300"
            >
              {[
                { icon: FaCode, value: personalInfo.yearsExperience, label: "Years Experience" },
                { icon: FaBriefcase, value: personalInfo.projectsCompleted, label: "Projects Completed" },
                { icon: FaCoffee, value: personalInfo.happyClients, label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-lg 
                    bg-primary-50 dark:bg-primary-900/30 
                    flex items-center justify-center 
                    transition-colors duration-300"
                  >
                    <stat.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Globe */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInRight}
            className="hidden lg:block relative"
          >
            <WorldGlobe />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;