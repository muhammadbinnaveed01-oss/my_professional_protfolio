import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code2 } from 'lucide-react';
import { PROFILE, SKILLS, EDUCATION, ACHIEVEMENTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">My Story</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">Professional Background</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Narrative & Education */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            {/* Profile Header Block */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 text-center md:text-left">
              <img 
                src="public/muhamad-bin-naveed.jpg" 
                alt={PROFILE.name} 
                className="w-32 h-32 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300 border-4 border-white dark:border-navy-800"
              />
              <div className="mt-2">
                <h4 className="text-2xl font-bold text-navy-900 dark:text-white">{PROFILE.name}</h4>
                <p className="text-cyan-600 dark:text-cyan-400 font-medium text-lg">{PROFILE.title}</p>
                <p className="text-navy-500 dark:text-warmGray-400 text-sm mt-1">{PROFILE.location}</p>
              </div>
            </div>

            <p className="text-lg text-navy-700 dark:text-warmGray-300 leading-relaxed mb-8">
              {PROFILE.about}
            </p>

            <div className="space-y-8">
              <h4 className="flex items-center gap-2 text-xl font-bold text-navy-900 dark:text-white">
                <BookOpen className="text-cyan-500" size={24} /> Education
              </h4>
              <div className="space-y-6 border-l-2 border-navy-100 dark:border-navy-800 pl-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-cyan-500 border-2 border-white dark:border-navy-900"></span>
                    <h5 className="font-semibold text-navy-900 dark:text-white">{edu.degree}</h5>
                    <p className="text-navy-600 dark:text-warmGray-400">{edu.institution}</p>
                    <span className="text-sm text-cyan-600 dark:text-cyan-400">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-6">
               <h4 className="flex items-center gap-2 text-xl font-bold text-navy-900 dark:text-white">
                <Award className="text-cyan-500" size={24} /> Key Achievements
              </h4>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id} className="flex items-start gap-3 text-navy-700 dark:text-warmGray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {ach.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <div className="bg-warmGray-50 dark:bg-navy-800 rounded-river p-8 shadow-sm">
              <h4 className="flex items-center gap-2 text-xl font-bold text-navy-900 dark:text-white mb-6">
                <Code2 className="text-cyan-500" size={24} /> Technical Arsenal
              </h4>
              
              <div className="mb-8">
                <h5 className="text-sm font-semibold text-navy-500 dark:text-warmGray-400 mb-4 uppercase tracking-wider">Frontend & Design</h5>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === 'frontend').map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h5 className="text-sm font-semibold text-navy-500 dark:text-warmGray-400 mb-4 uppercase tracking-wider">Backend & Database</h5>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === 'backend').map((skill) => (
                     <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-navy-500 dark:text-warmGray-400 mb-4 uppercase tracking-wider">Tools & Soft Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => ['tools', 'soft'].includes(s.category)).map((skill) => (
                     <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="px-4 py-2 bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-700 rounded-lg text-sm font-medium text-navy-700 dark:text-warmGray-200 shadow-sm hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors cursor-default">
    {name}
  </span>
);

export default About;