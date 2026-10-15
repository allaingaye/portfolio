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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative flex flex-col 
                bg-gray-50 dark:bg-[#111111] 
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

              {/* Category Title */}
              <h3 className="relative text-xl font-bold 
                text-gray-800 dark:text-white 
                mb-6 flex items-center 
                transition-colors duration-300"
              >
                {/* Accent bar with subtle animation */}
                <motion.span 
                  className="w-1 h-8 
                    bg-gradient-to-b from-primary-500 to-primary-700 
                    dark:from-primary-400 dark:to-primary-600 
                    rounded-full mr-3"
                  whileHover={{ scaleY: 1.15 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </span>
              </h3>

              {/* Skills List */}
              <div className="relative space-y-5">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group/skill"
                  >
                    {/* Skill Name + Percentage */}
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm 
                        transition-colors duration-200 
                        group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400"
                      >
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm 
                        transition-colors duration-200"
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full bg-gray-200 dark:bg-[#1a1a1a] 
                      rounded-full h-2 overflow-hidden 
                      transition-colors duration-300"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        className="relative bg-gradient-to-r from-primary-500 to-primary-700 
                          dark:from-primary-400 dark:to-primary-600 
                          h-2 rounded-full"
                      >
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 
                          bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          -translate-x-full group-hover/skill:translate-x-full 
                          transition-transform duration-1000" 
                        />
                      </motion.div>
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