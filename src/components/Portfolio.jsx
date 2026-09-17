import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioProjects } from '../data/data';

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

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Apps', 'Systems'];

  const filteredProjects = filter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === filter);

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
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
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle dark:text-gray-400">
            A collection of my recent projects and creative work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl dark:shadow-gray-950/50 
                transition-all duration-300 
                border border-gray-100 dark:border-gray-800"
            >
              {/* Project Image Area */}
              <div className="relative aspect-video bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center">
                <span className="text-6xl">📄</span>
                {project.featured && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    Featured
                  </motion.span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold 
                    bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full 
                    transition-colors duration-300"
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 dark:bg-gray-800 
                        text-gray-700 dark:text-gray-300 
                        px-2 py-1 rounded-full 
                        border border-transparent dark:border-gray-700
                        transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 
                      text-gray-700 dark:text-gray-300 
                      px-2 py-1 rounded-full 
                      border border-transparent dark:border-gray-700"
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 
                      border border-gray-300 dark:border-gray-700 
                      rounded-lg 
                      text-gray-700 dark:text-gray-300 
                      hover:border-primary-600 dark:hover:border-primary-400 
                      hover:text-primary-600 dark:hover:text-primary-400 
                      transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  {project.liveDemo !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 
                        bg-primary-600 dark:bg-primary-500 
                        text-white rounded-lg 
                        hover:bg-primary-700 dark:hover:bg-primary-600 
                        transition-all duration-300
                        shadow-lg shadow-primary-500/25"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;