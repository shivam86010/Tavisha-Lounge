// src/components/ExperienceRoyalDining.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceRoyalDining = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-royal-maroon bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-soft-cream px-4 max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-royal-maroon">
            Experience <span className="text-metallic-gold">Royal</span> Dining
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 leading-relaxed text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Immerse yourself in an ambiance of regal elegance, where every detail is crafted 
            to transport you to the era of maharajas and royal feasts
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
              <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Ambiance</h3>
              <p className="text-lg text-charcoal">Palatial interiors with handcrafted decor</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
              <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Service</h3>
              <p className="text-lg text-charcoal">Attentive staff trained in royal hospitality</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
              <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Cuisine</h3>
              <p className="text-lg text-charcoal">Authentic recipes from royal kitchens</p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 bg-metallic-gold text-royal-maroon px-12 py-4 rounded-lg font-bold text-xl hover:bg-burnt-orange hover:text-soft-cream transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Book Your Royal Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceRoyalDining;