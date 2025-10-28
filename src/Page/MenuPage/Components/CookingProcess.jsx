// src/components/CookingProcess.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUsers, FiStar } from 'react-icons/fi';
import { LuChefHat } from "react-icons/lu";
import CookingProcessDetail from './CookingProcessDetail';

const CookingProcess = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(0);

  
  const handleLearnMore = (processIndex) => {
    setSelectedProcess(processIndex);
    setShowDetail(true);
  };
  const cookingProcesses = [
    {
      step: 1,
      title: "Ingredient Selection",
      description: "We source the finest ingredients from local markets and trusted suppliers",
      duration: "Daily",
      icon: FiStar,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details: ["Fresh vegetables", "Premium spices", "Locally sourced meats", "Organic herbs"]
    },
    {
      step: 2,
      title: "Traditional Preparation",
      description: "Ancient techniques meet modern hygiene standards in our kitchen",
      duration: "2-4 hours",
      icon: LuChefHat,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details: ["Hand-ground spices", "Slow marination", "Clay oven cooking", "Traditional tools"]
    },
    {
      step: 3,
      title: "Master Cooking",
      description: "Our chefs bring decades of experience to every dish they create",
      duration: "30-45 mins",
      icon: FiClock,
      image: "https://images.unsplash.com/photo-1605522469906-3fe226e356d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details: ["Precision timing", "Temperature control", "Layered flavors", "Artistic plating"]
    },
    {
      step: 4,
      title: "Quality Check",
      description: "Every dish undergoes strict quality checks before serving",
      duration: "5-10 mins",
      icon: FiUsers,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details: ["Taste testing", "Visual inspection", "Temperature verification", "Garnish perfection"]
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
            The <span className="text-royal-maroon">Art</span> of Royal Cooking
          </h2>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Discover the meticulous process behind every dish that makes it truly royal
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Process Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cookingProcesses.map((process, index) => (
              <motion.button
                key={process.step}
                onClick={() => setActiveProcess(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProcess === index
                    ? 'bg-royal-maroon text-metallic-gold shadow-lg'
                    : 'bg-white text-charcoal shadow-md hover:bg-royal-maroon hover:text-metallic-gold'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <process.icon className="w-5 h-5" />
                <span>Step {process.step}</span>
              </motion.button>
            ))}
          </div>

          {/* Process Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcess}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={cookingProcesses[activeProcess].image}
                    alt={cookingProcesses[activeProcess].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 bg-metallic-gold text-royal-maroon px-3 py-1 rounded-full text-sm font-bold">
                    Step {cookingProcesses[activeProcess].step}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <FiClock className="w-4 h-4" />
                      <span className="text-sm">{cookingProcesses[activeProcess].duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-royal-maroon mb-4">
                    {cookingProcesses[activeProcess].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cookingProcesses[activeProcess].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cookingProcesses[activeProcess].details.map((detail, index) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-burnt-orange rounded-full"></div>
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Process Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {cookingProcesses.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeProcess ? 'bg-royal-maroon' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <motion.button
                      onClick={() => handleLearnMore(activeProcess)}
                      className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: "25+", label: "Years Experience" },
              { number: "50+", label: "Traditional Recipes" },
              { number: "100%", label: "Fresh Ingredients" },
              { number: "4", label: "Quality Checks" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-royal-maroon mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showDetail && (
          <CookingProcessDetail
            onClose={() => setShowDetail(false)}
            selectedProcess={selectedProcess}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CookingProcess;