// src/components/NutritionFacts.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInfo, FiHeart, FiActivity, FiDroplet, FiZap } from 'react-icons/fi';

const NutritionFacts = () => {
  const [selectedDish, setSelectedDish] = useState(0);

  const dishes = [
    {
      id: 1,
      name: "Butter Chicken Royal",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      nutrition: {
        calories: 420,
        protein: 28,
        carbs: 15,
        fat: 22,
        fiber: 3,
        sodium: 680
      },
      benefits: [
        "High in protein for muscle maintenance",
        "Rich in antioxidants from tomatoes",
        "Contains healthy fats",
        "Good source of essential vitamins"
      ],
      ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices"]
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      image: "https://images.unsplash.com/photo-1565299585323-38174c13fae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      nutrition: {
        calories: 380,
        protein: 22,
        carbs: 18,
        fat: 18,
        fiber: 4,
        sodium: 520
      },
      benefits: [
        "Excellent source of calcium",
        "Rich in plant-based protein",
        "High in dietary fiber",
        "Contains probiotics from yogurt"
      ],
      ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Spices", "Cream"]
    },
    {
      id: 3,
      name: "Vegetable Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      nutrition: {
        calories: 350,
        protein: 12,
        carbs: 65,
        fat: 8,
        fiber: 7,
        sodium: 450
      },
      benefits: [
        "High in complex carbohydrates",
        "Rich in dietary fiber",
        "Packed with vitamins from vegetables",
        "Low in saturated fat"
      ],
      ingredients: ["Basmati Rice", "Mixed Vegetables", "Spices", "Herbs", "Ghee"]
    }
  ];

  const nutritionItems = [
    { icon: FiZap, label: "Calories", unit: "kcal", color: "text-orange-500" },
    { icon: FiActivity, label: "Protein", unit: "g", color: "text-blue-500" },
    { icon: FiDroplet, label: "Carbs", unit: "g", color: "text-green-500" },
    { icon: FiHeart, label: "Fat", unit: "g", color: "text-red-500" },
    { icon: FiInfo, label: "Fiber", unit: "g", color: "text-purple-500" },
    { icon: FiInfo, label: "Sodium", unit: "mg", color: "text-cyan-500" }
  ];

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
            <FiActivity className="w-8 h-8 text-metallic-gold" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Nutrition <span className="text-metallic-gold">Facts</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Make informed choices with detailed nutritional information about our royal dishes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Dish Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {dishes.map((dish, index) => (
              <motion.button
                key={dish.id}
                onClick={() => setSelectedDish(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedDish === index
                    ? 'bg-metallic-gold text-royal-maroon shadow-lg'
                    : 'bg-gray-700 text-gray-300 shadow-md hover:bg-metallic-gold hover:text-royal-maroon'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{dish.name}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDish}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image and Basic Info */}
                <div className="relative">
                  <img
                    src={dishes[selectedDish].image}
                    alt={dishes[selectedDish].name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{dishes[selectedDish].name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {dishes[selectedDish].ingredients.map((ingredient, index) => (
                        <motion.span
                          key={ingredient}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-metallic-gold bg-opacity-20 text-metallic-gold px-3 py-1 rounded-full text-sm"
                        >
                          {ingredient}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nutrition Details */}
                <div className="p-6 lg:p-8">
                  <h4 className="text-xl font-bold text-metallic-gold mb-6">Nutritional Information</h4>
                  
                  {/* Nutrition Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {nutritionItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 bg-gray-700 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                        <div className="text-2xl font-bold text-white mb-1">
                          {dishes[selectedDish].nutrition[item.label.toLowerCase()]}
                        </div>
                        <div className="text-xs text-gray-400">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Health Benefits */}
                  <div>
                    <h5 className="font-semibold text-metallic-gold mb-3">Health Benefits:</h5>
                    <div className="space-y-2">
                      {dishes[selectedDish].benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          className="flex items-center space-x-3 text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Daily Value Note */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-6 p-4 bg-gray-700 rounded-lg border-l-4 border-metallic-gold"
                  >
                    <p className="text-xs text-gray-300">
                      *Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Health Tips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-6 max-w-2xl mx-auto">
              <FiHeart className="w-8 h-8 text-metallic-gold mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-metallic-gold mb-2">Healthy Dining Tips</h4>
              <p className="text-sm text-gray-300">
                All our dishes are prepared with health-conscious cooking methods. 
                We use minimal oil, fresh ingredients, and traditional spices known for their health benefits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutritionFacts;