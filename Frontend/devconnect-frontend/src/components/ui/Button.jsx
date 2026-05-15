import React from 'react';
import { motion } from 'framer-motion';


export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-5 py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:brightness-110",
    secondary: "glass-panel text-slate-200 hover:bg-slate-800 border border-glassborder",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-110",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};