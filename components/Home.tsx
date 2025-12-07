import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { SectionId } from '../types';
import { ViewState } from '../App';

interface HomeProps {
  setActiveSection: (section: SectionId) => void;
  onNavigate: (view: ViewState, section?: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection, onNavigate }) => {

  // Scroll to section logic helper
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Active Section Tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  // Mouse Follow Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the 32px circle
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Mouse Follower Blob */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-500/30 blur-sm pointer-events-none z-50 hidden md:block"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none z-0 hidden md:block"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;