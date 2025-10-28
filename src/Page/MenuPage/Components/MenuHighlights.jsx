// src/components/MenuHighlights.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiClock } from 'react-icons/fi';

const MenuHighlights = () => {
  const highlights = [
    {
      icon: FiAward,
      title: "Chef's Special",
      description: "Exclusive dishes crafted by our master chefs",
      count: "15+ Specials",
      color: "from-royal-maroon to-purple-600"
    },
    {
      icon: FiStar,
      title: "Most Popular",
      description: "Guest favorites that keep them coming back",
      count: "25+ Favorites",
      color: "from-burnt-orange to-red-500"
    },
    {
      icon: FiClock,
      title: "Quick Bites",
      description: "Perfect for those with limited time",
      count: "10+ Options",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-soft-cream to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Menu <span className="text-royal-maroon">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Discover the standout features of our royal menu curated for exceptional dining experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <highlight.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-charcoal mb-2">{highlight.title}</h3>
              <p className="text-gray-600 mb-3">{highlight.description}</p>
              <div className="text-royal-maroon font-semibold">{highlight.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;