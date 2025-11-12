// src/components/gallery/CulturalHeritage.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiMusic, FiFilm, FiMapPin } from 'react-icons/fi';

const CulturalHeritage = () => {
  const [activeCategory, setActiveCategory] = useState('art');

  const culturalElements = {
    art: {
      title: "Traditional Art Forms",
      icon: <FiBook className="w-8 h-8" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          title: "Madhubani Paintings",
          description: "Ancient folk art from Bihar depicting mythology and nature",
          origin: "Mithila Region, Bihar",
          significance: "Celebrates feminine energy and natural elements"
        },
        {
          image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
          title: "Rajasthani Miniatures",
          description: "Intricate paintings showcasing royal lifestyles and legends",
          origin: "Rajasthan",
          significance: "Documents historical events and cultural practices"
        }
      ]
    },
    music: {
      title: "Classical Music",
      icon: <FiMusic className="w-8 h-8" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          title: "Sitar Performances",
          description: "Weekly classical music nights featuring renowned artists",
          origin: "North Indian Tradition",
          significance: "Preserves ancient ragas and musical traditions"
        }
      ]
    },
    cuisine: {
      title: "Culinary Heritage",
      icon: <FiMapPin className="w-8 h-8" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
          title: "Awadhi Cuisine",
          description: "Royal dishes from Lucknow with delicate flavors",
          origin: "Lucknow, Uttar Pradesh",
          significance: "Represents the sophistication of Mughlai cooking"
        },
        {
          image: "https://images.unsplash.com/photo-1585937421612-70ca5d2d3ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          title: "Chettinad Specialties",
          description: "Fiery and aromatic dishes from Tamil Nadu",
          origin: "Chettinad, Tamil Nadu",
          significance: "Showcases bold South Indian flavors"
        }
      ]
    },
    craft: {
      title: "Artisan Crafts",
      icon: <FiFilm className="w-8 h-8" />,
      items: [
        {
          image: "https://images.unsplash.com/photo-1548705083-4c2d1c63d0b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          title: "Handcrafted Pottery",
          description: "Traditional clay work from various Indian regions",
          origin: "Multiple Regions",
          significance: "Sustainable craft preserving ancient techniques"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-cream to-charcoal/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            Cultural Heritage Wall
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Celebrating the rich tapestry of Indian culture through art, music, and cuisine
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {Object.entries(culturalElements).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === key
                  ? 'bg-royal-maroon text-metallic-gold shadow-lg'
                  : 'bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-6 text-soft-cream">
                <div className="flex items-center space-x-3">
                  {culturalElements[activeCategory].icon}
                  <h3 className="text-2xl font-serif font-bold">
                    {culturalElements[activeCategory].title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {culturalElements[activeCategory].items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-soft-cream rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-serif font-bold text-royal-maroon mb-2">
                            {item.title}
                          </h4>
                          <p className="text-charcoal mb-3">{item.description}</p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <FiMapPin className="w-4 h-4 text-burnt-orange" />
                              <span className="text-charcoal">Origin: {item.origin}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-royal-maroon">Significance: </span>
                              <span className="text-charcoal">{item.significance}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Cultural Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-metallic-gold to-burnt-orange rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
            Cultural Events Calendar
          </h3>
          <p className="text-royal-maroon mb-6">
            Join us for special cultural events and traditional celebrations throughout the year
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-royal-maroon">
            <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Monthly Art Exhibitions</h4>
              <p className="text-sm">Featuring local and traditional artists</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Festival Celebrations</h4>
              <p className="text-sm">Special menus for Diwali, Holi, and more</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cultural Workshops</h4>
              <p className="text-sm">Learn traditional arts and cooking</p>
            </div>
          </div>
        </motion.div>

        {/* Heritage Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <blockquote className="text-2xl font-serif text-royal-maroon italic max-w-3xl mx-auto">
            "At Tavisha Lounge, we don't just serve food—we serve centuries of tradition, 
            stories of our ancestors, and the living heritage of India's diverse cultures."
          </blockquote>
          <p className="text-burnt-orange font-semibold mt-4">
            — Preserving Culture Through Cuisine
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalHeritage;