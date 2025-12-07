import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';
import { ViewState } from '../App';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: SectionId;
  currentView: ViewState;
  onNavigate: (view: ViewState, section?: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  activeSection, 
  currentView, 
  onNavigate 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: string; label: string; isPage?: boolean }[] = [
    { id: 'home', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'cv', label: 'CV', isPage: true },
  ];

  const handleNavClick = (link: { id: string; isPage?: boolean }) => {
    if (link.isPage) {
      onNavigate('cv');
    } else {
      onNavigate('home', link.id as SectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-warmGray-50/80 dark:bg-navy-950/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="text-2xl font-bold font-sans cursor-pointer text-navy-900 dark:text-white"
          onClick={() => onNavigate('home', 'home')}
        >
          MBN<span className="text-cyan-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={`text-sm font-medium transition-colors hover:text-cyan-500 relative ${
                (currentView === 'home' && activeSection === link.id && !link.isPage) || (currentView === 'cv' && link.isPage)
                  ? 'text-cyan-500' 
                  : 'text-navy-700 dark:text-warmGray-300'
              }`}
            >
              {link.label}
              {((currentView === 'home' && activeSection === link.id && !link.isPage) || (currentView === 'cv' && link.isPage)) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                />
              )}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-navy-700" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-cyan-400" /> : <Moon size={20} className="text-navy-700" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-navy-900 dark:text-white" /> : <Menu size={24} className="text-navy-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warmGray-50 dark:bg-navy-950 border-b border-navy-100 dark:border-navy-800"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`text-left text-lg font-medium ${
                    (currentView === 'home' && activeSection === link.id && !link.isPage) || (currentView === 'cv' && link.isPage)
                      ? 'text-cyan-500' 
                      : 'text-navy-700 dark:text-warmGray-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;