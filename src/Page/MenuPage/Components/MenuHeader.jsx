// src/components/MenuHeader.js
import React from 'react';
import { motion } from 'framer-motion';

const MenuHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-16 bg-gradient-to-br from-soft-cream to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Our <span className="text-royal-maroon">Royal</span> Menu
        </h2>
        <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
        <p className="text-lg text-charcoal max-w-2xl mx-auto">
          Discover our exquisite selection of dishes, each crafted with traditional 
          recipes and royal ingredients for an unforgettable dining experience.
        </p>
      </div>
    </motion.div>
  );
};

export default MenuHeader;