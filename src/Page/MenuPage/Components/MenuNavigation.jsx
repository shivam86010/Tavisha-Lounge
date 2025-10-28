// src/components/MenuNavigation.js
import React from 'react';
import { motion } from 'framer-motion';

const MenuNavigation = ({ activeCategory, setActiveCategory, menuCategories }) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {menuCategories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-royal-maroon text-metallic-gold shadow-lg'
              : 'bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold shadow-md'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default MenuNavigation;