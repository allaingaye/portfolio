import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCode, FaHeart, FaArrowRight, FaDownload } from 'react-icons/fa';
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
      staggerChildren: 0.15
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
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
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
          <h2 className="section-title dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            Get to know more about my background, experience, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Soft gradient glow behind photo */}
              <div className="absolute -inset-4 
                bg-gradient-to-br from-primary-500/20 via-primary-500/5 to-primary-500/20 
                dark:from-primary-500/10 dark:via-transparent dark:to-primary-500/10 
                rounded-3xl blur-2xl 
                group-hover:from-primary-500/30 group-hover:to-primary-500/30
                transition-all duration-700" 
              />

              {/* Outer ring (rotating border) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl 
                  bg-[conic-gradient(from_0deg,transparent_0deg,rgba(37,99,235,0.15)_90deg,transparent_180deg,rgba(37,99,235,0.15)_270deg,transparent_360deg)]" 
              />

              {/* Photo Card */}
              <div className="relative bg-white dark:bg-[#111111] 
                rounded-3xl p-3 
                shadow-xl dark:shadow-black/50
                border border-gray-200 dark:border-gray-800
                group-hover:border-primary-500/50 dark:group-hover:border-primary-500/50
                transition-all duration-300"
              >
                <div className="aspect-square rounded-2xl overflow-hidden 
                  bg-gradient-to-br from-gray-100 to-gray-200 
                  dark:from-[#1a1a1a] dark:to-[#0a0a0a]"
                >
                  <img 
                    src="/profile.jpeg" 
                    alt={`${personalInfo.name} - Software Engineer`} 
                    className="w-full h-full object-cover 
                      transition-transform duration-700 
                      group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Small status badge (bottom-left of photo) */}
                <div className="absolute bottom-5 left-5 
                  flex items-center gap-2 
                  px-3 py-1.5 
                  bg-white/95 dark:bg-[#0a0a0a]/95 
                  backdrop-blur-md 
                  rounded-full 
                  border border-gray-200 dark:border-gray-800
                  shadow-lg"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-800 dark:text-white">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Role Title */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block text-sm font-medium uppercase tracking-wide 
                text-primary-600 dark:text-primary-400 mb-3">
                Full-Stack Developer
              </span>
              <h3 className="text-3xl md:text-4xl font-bold 
                text-gray-900 dark:text-white 
                leading-tight">
                Software Developer &{' '}
                <span className="gradient-text">Engineer</span>
              </h3>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            {/* Feature List */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group/feature flex items-start gap-4 
                    p-4 rounded-xl 
                    bg-gray-50 dark:bg-[#111111]
                    border border-gray-200 dark:border-gray-800
                    hover:border-primary-500/50 dark:hover:border-primary-500/50
                    hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10
                    hover:-translate-y-0.5
                    transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 
                    bg-primary-100 dark:bg-primary-900/20 
                    rounded-lg flex items-center justify-center 
                    group-hover/feature:bg-primary-600 dark:group-hover/feature:bg-primary-500 
                    group-hover/feature:scale-110
                    transition-all duration-300"
                  >
                    <feature.icon className="w-5 h-5 
                      text-primary-600 dark:text-primary-400 
                      group-hover/feature:text-white 
                      transition-colors duration-300" 
                    />
                  </div>

                  {/* Text */}
                  <div className="pt-0.5">
                    <h4 className="text-sm font-semibold 
                      text-gray-900 dark:text-white 
                      mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a 
                href="#contact" 
                className="group/btn inline-flex items-center 
                  px-6 py-3 
                  bg-primary-600 dark:bg-primary-500 
                  text-white rounded-lg font-medium text-sm
                  hover:bg-primary-700 dark:hover:bg-primary-400
                  transition-all duration-300
                  shadow-lg shadow-primary-500/25 
                  hover:shadow-xl hover:shadow-primary-500/40"
              >
                Let's Talk
                <FaArrowRight className="w-3.5 h-3.5 ml-2 
                  group-hover/btn:translate-x-1 transition-transform duration-300" 
                />
              </a>
              <a 
                href="/Allaingaye_Lucien_cv.pdf" 
                download
                className="group/btn inline-flex items-center 
                  px-6 py-3 
                  border border-gray-300 dark:border-gray-800 
                  text-gray-700 dark:text-gray-300 
                  rounded-lg font-medium text-sm
                  hover:border-primary-600 dark:hover:border-primary-400 
                  hover:text-primary-600 dark:hover:text-primary-400
                  transition-all duration-300"
              >
                <FaDownload className="w-3.5 h-3.5 mr-2 
                  group-hover/btn:translate-y-0.5 transition-transform duration-300" 
                />
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