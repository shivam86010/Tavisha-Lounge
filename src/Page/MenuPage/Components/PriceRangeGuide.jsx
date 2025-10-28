// src/components/PriceRangeGuide.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiUsers, FiStar, FiAward } from 'react-icons/fi';
import { FiClock } from "react-icons/fi";


const PriceRangeGuide = () => {
  const priceRanges = [
    {
      range: "$10 - $20",
      title: "Budget Friendly",
      description: "Perfect for quick bites and individual dishes",
      icon: FiDollarSign,
      color: "from-green-500 to-emerald-600",
      items: ["Appetizers", "Breads", "Desserts", "Beverages"]
    },
    {
      range: "$20 - $35",
      title: "Premium Selection",
      description: "Main courses and signature dishes",
      icon: FiStar,
      color: "from-blue-500 to-cyan-600",
      items: ["Main Courses", "Rice Dishes", "Special Curries"]
    },
    {
      range: "$35 - $75",
      title: "Royal Experience",
      description: "Luxury dining and complete experiences",
      icon: FiAward,
      color: "from-royal-maroon to-purple-600",
      items: ["Thali Experiences", "Chef's Special", "Full Course Meals"]
    }
  ];

  const budgetMeals = [
    {
      type: "Lunch Special",
      price: "$25",
      includes: "1 Main + 1 Bread + Rice + Dessert",
      timing: "11:00 AM - 3:00 PM"
    },
    {
      type: "Business Lunch",
      price: "$35",
      includes: "2 Mains + 2 Breads + Rice + Appetizer + Dessert",
      timing: "Weekdays Only"
    },
    {
      type: "Family Pack",
      price: "$65",
      includes: "4 Mains + 6 Breads + Rice + 2 Desserts",
      timing: "All Day"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Price <span className="text-royal-maroon">Guide</span>
          </h2>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Find the perfect dining experience for your budget with our transparent pricing
          </p>
        </motion.div>

        {/* Price Range Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {priceRanges.map((range, index) => (
            <motion.div
              key={range.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${range.color} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <range.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <div className="text-2xl font-bold text-charcoal mb-2">{range.range}</div>
              <h3 className="text-xl font-semibold text-royal-maroon mb-2">{range.title}</h3>
              <p className="text-gray-600 mb-4">{range.description}</p>
              
              <div className="space-y-2">
                {range.items.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <div className="w-1 h-1 bg-burnt-orange rounded-full"></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Budget Meals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">Budget-Friendly Combos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetMeals.map((meal, index) => (
              <motion.div
                key={meal.type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-metallic-gold border-opacity-20 text-center"
                whileHover={{ y: -3, borderOpacity: 1 }}
              >
                <div className="text-3xl font-bold text-royal-maroon mb-2">{meal.price}</div>
                <h4 className="text-lg font-semibold text-charcoal mb-3">{meal.type}</h4>
                <p className="text-sm text-gray-600 mb-4">{meal.includes}</p>
                <div className="flex items-center justify-center space-x-1 text-xs text-burnt-orange">
                  <FiClock className="w-3 h-3" />
                  <span>{meal.timing}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price Transparency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-charcoal text-sm">
              <strong>Transparent Pricing:</strong> All prices include taxes. 10% service charge additional. 
              No hidden costs. Prices subject to change based on seasonal ingredient availability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceRangeGuide;