// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ isNightMode }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Restaurant ambiance */}
      <img 
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Tavisha Lounge Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-royal-maroon opacity-60"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-metallic-gold px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Experience the Royal Vibe
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Every corner of Tavisha Lounge is designed with heart — from our food to our ambiance.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;