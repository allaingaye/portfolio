import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
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
  const categories = ['All', 'AI Agents', 'APIs', 'Web Apps'];

  const filteredProjects = filter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === filter);

  return (
    <section
      id="portfolio"
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
          {categories.map((category) => {
            const count = category === 'All'
              ? portfolioProjects.length
              : portfolioProjects.filter(p => p.category === category).length;

            return (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-md shadow-primary-500/20'
                    : 'bg-white dark:bg-[#111111] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {category}
                <span className={`ml-2 text-xs ${
                  filter === category ? 'text-white/70' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ y: -6 }}
                className="group flex flex-col bg-white dark:bg-[#111111] rounded-xl overflow-hidden
                  border border-gray-200 dark:border-gray-800
                  hover:border-primary-500/50 dark:hover:border-primary-500/50
                  hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10
                  transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-[#0a0a0a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium shadow-lg group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        View Live
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Category Label */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 
                    group-hover:text-primary-600 dark:group-hover:text-primary-400 
                    transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-600 dark:text-gray-400 
                          bg-gray-100 dark:bg-[#1a1a1a]
                          px-2.5 py-1 rounded-md
                          border border-gray-200 dark:border-gray-800
                          hover:border-primary-500/50 dark:hover:border-primary-500/50
                          hover:text-primary-600 dark:hover:text-primary-400
                          transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-500 
                        px-2.5 py-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="inline-flex items-center text-sm font-medium 
                        text-gray-600 dark:text-gray-400 
                        hover:text-primary-600 dark:hover:text-primary-400 
                        transition-colors duration-200"
                    >
                      <FaGithub className="w-4 h-4 mr-1.5" />
                      Code
                    </motion.a>

                    {project.liveDemo && project.liveDemo !== '#' && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="inline-flex items-center text-sm font-medium 
                          text-primary-600 dark:text-primary-400 
                          hover:text-primary-700 dark:hover:text-primary-300 
                          transition-colors duration-200 ml-auto group/link"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;