import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CV from './components/CV';
import Footer from './components/Footer';
import { SectionId } from './types';

export type ViewState = 'home' | 'cv';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [refreshKey, setRefreshKey] = useState(0);

  // Theme Management
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handle navigation
  const handleNavigate = (view: ViewState, sectionId?: SectionId) => {
    // If clicking the same view, increment refreshKey to force remount/reload
    if (view === currentView && !sectionId) {
      setRefreshKey(prev => prev + 1);
    }
    
    setCurrentView(view);
    window.scrollTo(0, 0);
    
    // If navigating to a specific section on home
    if (view === 'home' && sectionId) {
      // Small delay to allow Home component to mount
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-warmGray-50 dark:bg-navy-950 transition-colors duration-300 relative flex flex-col">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {currentView === 'home' ? (
          <Home key={`home-${refreshKey}`} setActiveSection={setActiveSection} onNavigate={handleNavigate} />
        ) : (
          <CV key={`cv-${refreshKey}`} onBack={() => handleNavigate('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;