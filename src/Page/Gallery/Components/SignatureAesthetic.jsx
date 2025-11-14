// src/components/gallery/SignatureAesthetic.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInstagram, FiHeart, FiShare2 } from 'react-icons/fi';

const SignatureAesthetic = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const aestheticCategories = [
    { id: 'all', name: 'All Aesthetics' },
    { id: 'table-setting', name: 'Table Settings' },
    { id: 'food-styling', name: 'Food Styling' },
    { id: 'ambiance', name: 'Ambiance' },
    { id: 'details', name: 'Fine Details' }
  ];

  const aestheticShots = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519677100203-65cd82b0d8b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'table-setting',
      title: "Golden Cutlery Arrangement",
      caption: "Elegance in Every Detail",
      instagramLikes: 1247,
      tags: ["#TavishaLounge", "#FineDining", "#Luxury"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'food-styling',
      title: "Artisanal Plating",
      caption: "A Feast for the Eyes",
      instagramLikes: 892,
      tags: ["#FoodArt", "#Culinary", "#TavishaLounge"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'ambiance',
      title: "Candlelight Ambiance",
      caption: "Warmth in Golden Glow",
      instagramLikes: 1563,
      tags: ["#Ambiance", "#Romantic", "#TavishaLounge"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'details',
      title: "Maroon & Gold Napkins",
      caption: "Royal Color Palette",
      instagramLikes: 734,
      tags: ["#Details", "#Luxury", "#TavishaLounge"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'table-setting',
      title: "Fine China Collection",
      caption: "Traditional Meets Contemporary",
      instagramLikes: 945,
      tags: ["#TableSetting", "#Elegance", "#TavishaLounge"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: 'food-styling',
      title: "Spice Presentation",
      caption: "Colors of Tradition",
      instagramLikes: 1123,
      tags: ["#Spices", "#IndianCuisine", "#TavishaLounge"]
    }
  ];

  const filteredShots = activeCategory === 'all' 
    ? aestheticShots 
    : aestheticShots.filter(shot => shot.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-royal-maroon to-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold mb-6">
            Signature Aesthetic Shots
          </h2>
          <p className="text-xl text-soft-cream max-w-2xl mx-auto">
            Instagram-worthy moments that capture the essence of Tavisha Lounge
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {aestheticCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-metallic-gold text-royal-maroon shadow-lg'
                  : 'bg-white bg-opacity-20 text-soft-cream hover:bg-opacity-30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Aesthetic Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredShots.map((shot, index) => (
              <motion.div
                key={shot.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Instagram Style Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center">
                          <FiInstagram className="w-4 h-4 text-royal-maroon" />
                        </div>
                        <span className="text-white font-semibold">tavisha_lounge</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <FiHeart className="w-5 h-5" />
                        <span className="text-sm">{shot.instagramLikes}</span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      <h3 className="text-white font-semibold text-lg mb-2">{shot.title}</h3>
                      <p className="text-gray-200 text-sm mb-3">{shot.caption}</p>
                      <div className="flex flex-wrap gap-2">
                        {shot.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-metallic-gold text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                        <FiHeart className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                        <FiShare2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-1">{shot.title}</h3>
                  <p className="text-sm text-gray-600">{shot.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-metallic-gold to-burnt-orange rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
              Share Your Tavisha Moment
            </h3>
            <p className="text-royal-maroon mb-6">
              Tag @tavisha_lounge and use #TavishaLounge for a chance to be featured
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-royal-maroon text-metallic-gold px-8 py-3 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors flex items-center space-x-2 mx-auto"
            >
              <FiInstagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureAesthetic;