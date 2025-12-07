import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'ghost' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-river font-medium transition-all duration-300 active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/30 dark:bg-cyan-500 dark:text-navy-950 dark:hover:bg-cyan-400",
    ghost: "bg-transparent text-navy-800 dark:text-warmGray-200 hover:bg-navy-100/50 dark:hover:bg-navy-800/50",
    outline: "border-2 border-navy-900 text-navy-900 dark:border-cyan-500 dark:text-cyan-500 hover:bg-navy-900 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-navy-900"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export default Button;