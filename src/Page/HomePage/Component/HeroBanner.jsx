// src/components/HeroBanner.js
import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-restaurant-interior-with-tables-and-chairs-43315-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-soft-cream mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-metallic-gold ">Tavisha</span> Lounge
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-metallic-gold mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Where Royal Heritage Meets Culinary Excellence
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-soft-cream mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Experience the epitome of luxury dining with authentic flavors crafted for royalty
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button className="bg-royal-maroon hover:bg-royal-maroon-dark text-metallic-gold px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve a Table
            </button>
            <button className="bg-burnt-orange hover:bg-burnt-orange-dark text-soft-cream px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-metallic-gold rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;


