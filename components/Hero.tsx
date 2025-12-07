import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import Button from './ui/Button';
import { PROFILE } from '../constants';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-navy-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Image Section - Top on mobile, Left on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="public/Young Man in Smart Attire.png" 
                alt={PROFILE.name}
                className="relative w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-navy-800 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Text Section - Center on mobile, Left on Desktop */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Available for hire
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 dark:text-white mb-6">
                Hi, I'm {PROFILE.name.split(' ')[0]}.<br />
                <span className="bg-gradient-to-r from-navy-600 to-cyan-500 bg-clip-text text-transparent">
                  Full Stack Developer.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-navy-600 dark:text-warmGray-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
                I craft accessible, high-performance web applications using MERN Stack, modern UI principles, and clean code.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button onClick={() => scrollToSection('contact')} variant="primary" icon={<ArrowRight size={18} />}>
                  Let's Talk
                </Button>
                <Button onClick={() => scrollToSection('projects')} variant="ghost" icon={<Terminal size={18} />}>
                  View Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 md:mt-20 flex justify-center md:justify-start gap-8 text-navy-400 dark:text-warmGray-600 grayscale opacity-70"
            >
              {/* Subtle logo strip */}
              <div className="flex gap-2 items-center"><span className="font-bold text-lg md:text-xl">MongoDB</span></div>
              <div className="flex gap-2 items-center"><span className="font-bold text-lg md:text-xl">Express</span></div>
              <div className="flex gap-2 items-center"><span className="font-bold text-lg md:text-xl">React</span></div>
              <div className="flex gap-2 items-center"><span className="font-bold text-lg md:text-xl">Node</span></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;