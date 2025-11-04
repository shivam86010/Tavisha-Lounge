// DayNightToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DayNightToggle = ({ isNightMode, onToggle }) => {
  return (
    <motion.div 
      className="fixed top-24 right-4 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button
        onClick={onToggle}
        className={`p-3 rounded-full shadow-2xl font-sans font-bold flex items-center gap-2 ${
          isNightMode 
            ? 'bg-charcoal text-metallic-gold border border-metallic-gold' 
            : 'bg-soft-cream text-royal-maroon border border-royal-maroon'
        }`}
      >
        <motion.span
          animate={{ rotate: isNightMode ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isNightMode ? '🌙' : '☀️'}
        </motion.span>
        {isNightMode ? 'Night' : 'Day'}
      </button>
    </motion.div>
  );
};

export default DayNightToggle;