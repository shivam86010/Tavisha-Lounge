import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiStar, FiHeart } from 'react-icons/fi';
import { LuChefHat } from "react-icons/lu";

const ChefRecommendations = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const recommendations = {
    popular: [
      {
        id: 1,
        name: "Butter Chicken Royal",
        description: "Our signature dish with tender chicken in rich tomato butter gravy",
        price: "$24",
        preparation: "25 mins",
        rating: 4.9,
        loves: 1250,
        chefNote: "Perfect balance of creaminess and spices"
      },
      {
        id: 2,
        name: "Paneer Tikka Masala",
        description: "Grilled cottage cheese in aromatic tomato and cream sauce",
        price: "$20",
        preparation: "20 mins",
        rating: 4.8,
        loves: 980,
        chefNote: "Vegetarian delight with smoky flavors"
      }
    ],
    seasonal: [
      {
        id: 3,
        name: "Winter Special Thali",
        description: "Seasonal vegetables with traditional winter spices and breads",
        price: "$35",
        preparation: "30 mins",
        rating: 4.9,
        loves: 450,
        chefNote: "Warming spices perfect for cold weather"
      },
      {
        id: 4,
        name: "Saffron Infused Biryani",
        description: "Basmati rice with premium saffron and choice of meat",
        price: "$28",
        preparation: "35 mins",
        rating: 4.7,
        loves: 320,
        chefNote: "Fragrant rice dish for special occasions"
      }
    ],
    hidden: [
      {
        id: 5,
        name: "Grandma's Secret Curry",
        description: "Family recipe passed down through generations",
        price: "$26",
        preparation: "40 mins",
        rating: 4.9,
        loves: 150,
        chefNote: "Not on regular menu - ask your server"
      },
      {
        id: 6,
        name: "Royal Dessert Platter",
        description: "Assorted traditional sweets with modern presentation",
        price: "$22",
        preparation: "15 mins",
        rating: 4.8,
        loves: 280,
        chefNote: "Perfect ending to your royal experience"
      }
    ]
  };

  const tabs = [
    { id: 'popular', name: 'Most Popular', icon: FiStar },
    { id: 'seasonal', name: 'Seasonal Picks', icon: FiClock },
    { id: 'hidden', name: "Chef's Secrets", icon: FiHeart }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <LuChefHat className="w-8 h-8 text-royal-maroon" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Chef's <span className="text-royal-maroon">Recommendations</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Handpicked favorites from our master chefs based on popularity, seasonality, and secret recipes
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-royal-maroon text-metallic-gold shadow-lg'
                  : 'bg-gray-100 text-charcoal hover:bg-royal-maroon hover:text-metallic-gold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Recommendations Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {recommendations[activeTab].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-soft-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-metallic-gold hover:border-opacity-30"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-royal-maroon mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                  </div>
                  <div className="text-2xl font-bold text-burnt-orange">{item.price}</div>
                </div>

                {/* Chef's Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-lg p-4 mb-4 border-l-4 border-metallic-gold"
                >
                  <p className="text-sm text-charcoal italic">
                    <strong>Chef's Note:</strong> {item.chefNote}
                  </p>
                </motion.div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiClock className="w-4 h-4" />
                      <span>{item.preparation}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiHeart className="w-4 h-4 text-red-400" />
                      <span>{item.loves}+ loves</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="bg-royal-maroon text-metallic-gold px-4 py-2 rounded-lg text-sm font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Order
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Chef's Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 text-soft-cream max-w-4xl mx-auto">
            <LuChefHat className="w-12 h-12 mx-auto mb-4 text-metallic-gold" />
            <h3 className="text-2xl font-bold mb-4">From Our Master Chef</h3>
            <p className="text-lg mb-4 italic">
              "Each recommendation is crafted with passion and expertise. We've tasted, perfected, 
              and fallen in love with these dishes, and we're excited to share them with you."
            </p>
            <p className="text-metallic-gold font-semibold">- Chef Rajesh Mehta</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefRecommendations;