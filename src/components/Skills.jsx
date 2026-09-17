import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

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

const Skills = () => {
  const skillCategories = [
    skills.frontend,
    skills.backend,
    skills.database,
    skills.ai
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            Technical expertise and proficiency across various technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800/50 
                rounded-2xl p-8 
                shadow-md hover:shadow-xl 
                dark:shadow-gray-950/50 
                transition-all duration-300 
                border border-gray-100 dark:border-gray-800"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold 
                text-gray-800 dark:text-white 
                mb-6 flex items-center 
                transition-colors duration-300"
              >
                <span className="w-1 h-8 
                  bg-gradient-to-b from-primary-500 to-primary-700 
                  dark:from-primary-400 dark:to-primary-600 
                  rounded-full mr-3"
                ></span>
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    {/* Skill Name + Percentage */}
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm transition-colors duration-300">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden transition-colors duration-300">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-primary-500 to-primary-700 
                          dark:from-primary-400 dark:to-primary-600 
                          h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;