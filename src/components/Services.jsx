import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaMobile, FaPalette, FaServer, 
  FaCloud, FaBriefcase 
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
      className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
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
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-gray-900 
                  rounded-2xl p-8 
                  shadow-md hover:shadow-2xl 
                  dark:shadow-gray-950/50 
                  transition-all duration-300 
                  border border-gray-100 dark:border-gray-800"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 
                  bg-primary-100 dark:bg-primary-900/30 
                  rounded-xl flex items-center justify-center mb-6 
                  group-hover:bg-primary-600 dark:group-hover:bg-primary-500 
                  transition-colors duration-300"
                >
                  <IconComponent className="w-7 h-7 
                    text-primary-600 dark:text-primary-400 
                    group-hover:text-white 
                    transition-colors duration-300" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold 
                  text-gray-800 dark:text-white 
                  mb-3 transition-colors duration-300"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;