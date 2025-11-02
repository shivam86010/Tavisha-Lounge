// src/components/DietaryInfo.js
import React from 'react';
import { motion } from 'framer-motion';
import {  FiZap, FiUsers, FiAlertCircle } from 'react-icons/fi';
import { FaLeaf } from "react-icons/fa";

const DietaryInfo = () => {
  const dietarySymbols = [
    {
      icon: FaLeaf,
      label: "Vegetarian",
      description: "Plant-based dishes without meat",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: FiZap,
      label: "Spicy",
      description: "Dishes with bold, spicy flavors",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: FiUsers,
      label: "Chef's Special",
      description: "Signature creations by our chefs",
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    // {
    //   icon: FiAlertCircle,
    //   label: "Allergen Info",
    //   description: "Ask staff for allergen details",
    //   color: "text-blue-600",
    //   bgColor: "bg-blue-100"
    // }
  ];

  const dietaryOptions = [
    {
      type: "Vegetarian",
      count: "45+ dishes",
      description: "Complete plant-based menu options"
    },
    {
      type: "Vegan",
      count: "25+ dishes",
      description: "Dairy-free and egg-free options"
    },
    {
      type: "Gluten-Free",
      count: "30+ dishes",
      description: "Specially prepared gluten-free meals"
    },
    {
      type: "Dairy-Free",
      count: "35+ dishes",
      description: "Lactose-free alternatives available"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Dietary <span className="text-royal-maroon">Information</span>
          </h2>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            We cater to various dietary preferences and requirements with carefully crafted options
          </p>
        </motion.div>

        {/* Dietary Symbols */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">Menu Symbols Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {dietarySymbols.map((symbol, index) => (
              <motion.div
                key={symbol.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`p-2 rounded-full ${symbol.bgColor} ${symbol.color}`}>
                  <symbol.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{symbol.label}</div>
                  <div className="text-xs text-gray-600">{symbol.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dietary Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">Available Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dietaryOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-soft-cream rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <h4 className="text-lg font-bold text-royal-maroon mb-2">{option.type}</h4>
                <div className="text-2xl font-bold text-burnt-orange mb-2">{option.count}</div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-charcoal">
              <strong>Note:</strong> Please inform our staff about any specific dietary requirements or allergies. 
              Our chefs will be happy to accommodate your needs and ensure a safe, enjoyable dining experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DietaryInfo;