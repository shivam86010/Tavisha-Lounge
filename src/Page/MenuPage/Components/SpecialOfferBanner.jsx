// src/components/SpecialOfferBanner.js
import React from 'react';
import { motion } from 'framer-motion';

const SpecialOfferBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 text-center text-soft-cream"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Royal Thali Experience
      </h3>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Enjoy our complete royal dining experience with 12 authentic dishes, 
        desserts, and beverages for just $75 per person.
      </p>
      <motion.button
        className="bg-metallic-gold text-royal-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-soft-cream transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book Royal Thali
      </motion.button>
    </motion.div>
  );
};

export default SpecialOfferBanner;