// src/components/MenuMap.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMap, FiCompass, FiNavigation, FiArrowRight } from 'react-icons/fi';



const MenuMap = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const menuSections = [
    {
      id: 'starters',
      name: 'Royal Starters',
      description: 'Begin your journey with exquisite appetizers',
      position: 'top-10 left-20',
      color: 'bg-green-500',
      count: '12 items',
      popular: 'Murgh Malai Tikka'
    },
    {
      id: 'mains',
      name: 'Main Course',
      description: 'Hearty main dishes with rich flavors',
      position: 'top-40 left-60',
      color: 'bg-blue-500',
      count: '18 items',
      popular: 'Butter Chicken Royal'
    },
    {
      id: 'biryanis',
      name: 'Signature Biryanis',
      description: 'Fragrant rice dishes with royal heritage',
      position: 'top-20 right-40',
      color: 'bg-amber-500',
      count: '8 items',
      popular: 'Royal Dum Biryani'
    },
    {
      id: 'breads',
      name: 'Traditional Breads',
      description: 'Freshly baked breads from our tandoor',
      position: 'bottom-40 left-40',
      color: 'bg-orange-500',
      count: '10 items',
      popular: 'Garlic Naan'
    },
    {
      id: 'desserts',
      name: 'Royal Desserts',
      description: 'Sweet endings to your royal feast',
      position: 'bottom-20 right-20',
      color: 'bg-pink-500',
      count: '15 items',
      popular: 'Rasmalai'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      description: 'Refreshing drinks and traditional beverages',
      position: 'bottom-10 right-60',
      color: 'bg-purple-500',
      count: '12 items',
      popular: 'Mango Lassi'
    }
  ];

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-charcoal to-gray-900 text-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FiMap className="w-8 h-8 text-metallic-gold" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Menu <span className="text-metallic-gold">Explorer</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Navigate through our royal menu with this interactive guide to discover culinary treasures
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gray-800 rounded-3xl p-8 min-h-[500px] border-2 border-metallic-gold border-opacity-20"
          >
            {/* Central Restaurant Icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              variants={floatingAnimation}
              animate="animate"
            >
              <div className="bg-royal-maroon text-metallic-gold w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-2 border-metallic-gold">
                <FiNavigation className="w-8 h-8" />
              </div>
            </motion.div>

            {/* Menu Section Points */}
            {menuSections.map((section) => (
              <motion.div
                key={section.id}
                className={`absolute ${section.position} cursor-pointer group`}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Point */}
                <motion.div
                  className={`w-6 h-6 ${section.color} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white text-charcoal rounded-2xl p-4 shadow-2xl z-10"
                    >
                      <div className="text-center">
                        <h3 className="font-bold text-lg text-royal-maroon mb-2">
                          {section.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {section.description}
                        </p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-burnt-orange font-semibold">
                            {section.count}
                          </span>
                          <span className="text-gray-500">
                            Popular: {section.popular}
                          </span>
                        </div>
                        <motion.button
                          className="mt-3 w-full bg-royal-maroon text-metallic-gold py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-1 hover:bg-royal-maroon-dark transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Explore Section</span>
                          <FiArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                      
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Connection Lines (Optional) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {menuSections.map((section) => (
                <motion.line
                  key={section.id}
                  x1="50%"
                  y1="50%"
                  x2={section.position.includes('left') ? '25%' : section.position.includes('right') ? '75%' : '50%'}
                  y2={section.position.includes('top') ? '25%' : section.position.includes('bottom') ? '75%' : '50%'}
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-metallic-gold text-center mb-6">
              Menu Sections Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {menuSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className={`w-4 h-4 ${section.color} rounded-full`}></div>
                  <div>
                    <div className="text-sm font-semibold text-white">{section.name}</div>
                    <div className="text-xs text-gray-400">{section.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8"
          >
            <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl mx-auto border border-gray-700">
              <FiCompass className="w-8 h-8 text-metallic-gold mx-auto mb-3" />
              <p className="text-gray-300 text-sm">
                <strong>Pro Tip:</strong> Use the interactive map above to explore different menu sections. 
                Hover over any point to see details and click to jump directly to that section.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuMap;