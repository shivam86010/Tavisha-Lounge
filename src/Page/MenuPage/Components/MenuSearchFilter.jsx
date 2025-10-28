// src/components/MenuSearchFilter.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';

const MenuSearchFilter = ({ searchQuery, setSearchQuery, filters, setFilters, sortBy, setSortBy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="lg:col-span-2 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          {/* Filter Toggle */}
          <div className="flex items-center space-x-2">
            <FiFilter className="text-royal-maroon" />
            <span className="font-semibold text-charcoal">Filters:</span>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-4 mt-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.vegetarian}
              onChange={(e) => setFilters(prev => ({ ...prev, vegetarian: e.target.checked }))}
              className="rounded text-royal-maroon focus:ring-royal-maroon"
            />
            <span className="text-charcoal">Vegetarian</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.spicy}
              onChange={(e) => setFilters(prev => ({ ...prev, spicy: e.target.checked }))}
              className="rounded text-royal-maroon focus:ring-royal-maroon"
            />
            <span className="text-charcoal">Spicy</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.chefSpecial}
              onChange={(e) => setFilters(prev => ({ ...prev, chefSpecial: e.target.checked }))}
              className="rounded text-royal-maroon focus:ring-royal-maroon"
            />
            <span className="text-charcoal">Chef's Special</span>
          </label>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuSearchFilter;