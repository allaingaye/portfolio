import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaCoffee, FaBriefcase, FaBolt } from 'react-icons/fa';
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
      className="relative min-h-screen flex items-center pt-16 
        bg-gradient-to-br from-blue-50 via-white to-purple-50 
        dark:from-black dark:via-black dark:to-black 
        overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background orbs (subtle, floating) */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-72 h-72 
          bg-primary-400/20 dark:bg-primary-500/10 
          rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 
          bg-purple-400/20 dark:bg-purple-500/10 
          rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              {/* Availability Badge - Interactive */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-4 py-1.5 
                  bg-primary-50 dark:bg-primary-900/20 
                  text-primary-700 dark:text-primary-300 
                  rounded-full text-sm font-medium 
                  border border-primary-100 dark:border-primary-800/50
                  hover:border-primary-300 dark:hover:border-primary-600/50
                  hover:shadow-md hover:shadow-primary-500/10
                  transition-all duration-300 cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Work · Remote
                <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-300" />
              </motion.a>
              
              {/* Heading with Animated Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-gray-900 dark:text-white transition-colors duration-300">
                  Hi, I'm
                </span>
                <span className="animated-gradient-text inline-block">
                  {personalInfo.name.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.04,
                        duration: 0.4,
                        ease: 'easeOut'
                      }}
                      className="inline-block hover:scale-125 transition-transform duration-200 cursor-default"
                      whileHover={{ 
                        y: -6,
                        transition: { duration: 0.15 }
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
              
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-2xl 
                  text-gray-600 dark:text-gray-400 
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
              <motion.a 
                href="#portfolio" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center px-6 py-3 
                  bg-primary-600 dark:bg-primary-500 
                  text-white rounded-full font-medium 
                  hover:bg-primary-700 dark:hover:bg-primary-400 
                  transition-all duration-300 
                  shadow-lg shadow-primary-500/25 
                  hover:shadow-xl hover:shadow-primary-500/40
                  overflow-hidden"
              >
                {/* Shine effect on hover */}
                <span className="absolute inset-0 
                  bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  -translate-x-full group-hover:translate-x-full 
                  transition-transform duration-1000" 
                />
                <span className="relative flex items-center">
                  View My Work
                  <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-6 py-3 
                  bg-white dark:bg-[#111111] 
                  text-gray-700 dark:text-gray-200 
                  border border-gray-200 dark:border-gray-800 
                  rounded-full font-medium 
                  hover:border-primary-600 dark:hover:border-primary-400 
                  hover:text-primary-600 dark:hover:text-primary-400 
                  transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-6 
                border-t border-gray-100 dark:border-gray-800/50 
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
                  whileHover={{ y: -4 }}
                  className="group flex items-center space-x-3 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg 
                    bg-primary-50 dark:bg-primary-900/20 
                    flex items-center justify-center 
                    group-hover:bg-primary-600 dark:group-hover:bg-primary-500
                    group-hover:scale-110
                    transition-all duration-300"
                  >
                    <stat.icon className="w-5 h-5 
                      text-primary-600 dark:text-primary-400 
                      group-hover:text-white 
                      transition-colors duration-300" 
                    />
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