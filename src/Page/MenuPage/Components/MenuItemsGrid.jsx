// src/components/MenuItemsGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const MenuItemsGrid = ({ filteredItems, menuItems, activeCategory, searchQuery, filters, sortBy }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <p className="text-charcoal">
          Showing {filteredItems.length} of {menuItems[activeCategory]?.length} items
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </motion.div>

      {/* Menu Items Grid */}
      {filteredItems.length > 0 ? (
        <motion.div
          key={activeCategory + searchQuery + JSON.stringify(filters) + sortBy}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-royal-maroon">{item.name}</h3>
                      {item.chefSpecial && (
                        <span className="flex items-center space-x-1 bg-metallic-gold text-royal-maroon px-2 py-1 rounded-full text-xs font-bold">
                          <FiStar className="w-3 h-3" />
                          <span>Chef's Pick</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <FiStar className="text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-burnt-orange">{item.price}</span>
                </div>
                <p className="text-charcoal mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center space-x-4">
                  {item.vegetarian && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Vegetarian
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Spicy
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl text-charcoal">No items found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilters({ vegetarian: false, spicy: false, chefSpecial: false });
            }}
            className="mt-4 bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </>
  );
};

export default MenuItemsGrid;