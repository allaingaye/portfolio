import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaCoffee, FaBriefcase } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const Hero = () => {
  // Option: Choose your preferred profile image method
  // Option 1: Use GitHub Avatar (Professional)
  // const profileImage = "https://avatars.githubusercontent.com/u/YOUR_USER_ID?v=4";
  
  // Option 2: Use Initials (No image needed)
  const profileInitials = "AL";
  
  // Option 3: Use Emoji (No image needed)
  const profileEmoji = "👨‍💻";

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold"
              >
                Available for Work
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl text-gray-700 font-medium"
              >
                {personalInfo.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-lg"
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#portfolio" className="group inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                View My Work
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-medium hover:border-primary-600 hover:text-primary-600 transition-all duration-300">
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { icon: FaCode, value: personalInfo.yearsExperience, label: "Years Experience" },
                { icon: FaBriefcase, value: personalInfo.projectsCompleted, label: "Projects Completed" },
                { icon: FaCoffee, value: personalInfo.happyClients, label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <stat.icon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Profile Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInRight}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Profile Image Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden border-4 border-white bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                
                {/* CHOOSE ONE OPTION BELOW: */}
                
                {/* OPTION A: Professional Initials */}
                <div className="text-center">
                  <span className="text-8xl md:text-9xl font-bold text-white">
                    {profileInitials}
                  </span>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    Software Engineer
                  </p>
                </div>
                
                {/* OPTION B: Professional Emoji */}
                {/* <div className="text-center">
                  <span className="text-8xl md:text-9xl block">{profileEmoji}</span>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    Software Engineer
                  </p>
                </div> */}
                
                {/* OPTION C: Image URL (Uncomment when you have a photo URL) */}
                {/* <img 
                  src="https://avatars.githubusercontent.com/u/YOUR_USER_ID?v=4"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                /> */}
                
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;