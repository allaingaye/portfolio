import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaMobile, FaPalette, FaServer, 
  FaCloud, FaBriefcase, FaArrowRight 
} from 'react-icons/fa';
import { services } from '../data/data';

// Map service icons to react-icons
const iconMap = {
  'Code2': FaCode,
  'Smartphone': FaMobile,
  'Palette': FaPalette,
  'Server': FaServer,
  'Cloud': FaCloud,
  'Briefcase': FaBriefcase,
};

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

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300"
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
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            I offer a wide range of services to help bring your digital ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCode;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col 
                  bg-white dark:bg-[#111111] 
                  rounded-xl p-8 
                  border border-gray-200 dark:border-gray-800
                  hover:border-primary-500/50 dark:hover:border-primary-500/50
                  hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10
                  transition-all duration-300 
                  overflow-hidden"
              >
                {/* Decorative corner gradient (subtle) */}
                <div className="absolute top-0 right-0 w-32 h-32 
                  bg-gradient-to-br from-primary-500/0 to-primary-500/0 
                  group-hover:from-primary-500/5 group-hover:to-primary-500/0
                  rounded-full blur-2xl 
                  transition-all duration-500" 
                />

                {/* Icon Container */}
                <div className="relative w-14 h-14 
                  bg-primary-100 dark:bg-primary-900/20 
                  rounded-xl flex items-center justify-center mb-6 
                  group-hover:bg-primary-600 dark:group-hover:bg-primary-500 
                  group-hover:scale-110
                  transition-all duration-300"
                >
                  <IconComponent className="w-7 h-7 
                    text-primary-600 dark:text-primary-400 
                    group-hover:text-white 
                    transition-colors duration-300" 
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold 
                  text-gray-800 dark:text-white 
                  mb-3 
                  group-hover:text-primary-600 dark:group-hover:text-primary-400 
                  transition-colors duration-300"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed 
                  transition-colors duration-300 mb-4">
                  {service.description}
                </p>

                {/* Subtle "Learn more" hint (appears on hover) */}
                <div className="relative mt-auto pt-4 
                  border-t border-gray-100 dark:border-gray-800
                  opacity-0 group-hover:opacity-100 
                  -translate-x-2 group-hover:translate-x-0
                  transition-all duration-300"
                >
                  <span className="inline-flex items-center text-sm font-medium 
                    text-primary-600 dark:text-primary-400">
                    Available
                    <FaArrowRight className="w-3 h-3 ml-2 
                      group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;