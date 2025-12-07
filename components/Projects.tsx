import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-warmGray-50 dark:bg-navy-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">Selected Works</h3>
          <p className="mt-4 text-navy-600 dark:text-warmGray-400 max-w-2xl mx-auto">
            A selection of projects that demonstrate my ability to solve problems and create value using the MERN stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Shimmer Loading State
            [1, 2, 3].map((n) => (
              <div key={n} className="bg-white dark:bg-navy-900 rounded-river p-6 h-80 animate-pulse border border-gray-100 dark:border-navy-800">
                <div className="h-48 bg-gray-200 dark:bg-navy-800 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-navy-800 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-navy-800 rounded w-full"></div>
              </div>
            ))
          ) : (
            PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white dark:bg-navy-900 rounded-river border border-navy-100 dark:border-navy-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-navy-50 dark:bg-navy-800 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
           <FolderGit2 size={24} />
        </div>

        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-warmGray-400 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-navy-50 dark:bg-navy-800 text-navy-600 dark:text-warmGray-300 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-navy-50 dark:border-navy-800">
        <a 
          href={project.liveLink} 
          className="flex items-center gap-1.5 text-sm font-semibold text-navy-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
        <a 
          href={project.githubLink} 
          className="flex items-center gap-1.5 text-sm font-semibold text-navy-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
        >
          <Github size={16} /> Source
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;