import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-warmGray-50 dark:bg-navy-950 border-t border-navy-100 dark:border-navy-800 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-navy-600 dark:text-warmGray-400 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p className="text-navy-400 dark:text-warmGray-600 text-xs mt-2">
          Built with React.js, Tailwind CSS & Controlled Energy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;