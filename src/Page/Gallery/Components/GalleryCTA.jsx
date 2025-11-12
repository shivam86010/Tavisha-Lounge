// GalleryCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GalleryCTA = ({ isNightMode }) => {
  return (
    <section className={`py-20 ${isNightMode ? 'bg-charcoal' : 'bg-royal-maroon'} transition-colors duration-1000`}>
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold mb-6">
          Every Picture Tells a Story — Come Create Yours at Tavisha Lounge
        </h2>
        <p className="text-xl text-soft-cream font-sans mb-8 max-w-2xl mx-auto">
          Experience the royal treatment, exquisite cuisine, and unforgettable moments that await you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-8 py-4 bg-metallic-gold text-royal-maroon font-sans font-bold rounded-full text-lg hover:bg-soft-cream transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Table
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-metallic-gold text-metallic-gold font-sans font-bold rounded-full text-lg hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Online
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryCTA;