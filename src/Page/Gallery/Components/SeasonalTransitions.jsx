// src/components/gallery/SeasonalTransitions.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SeasonalTransitions = () => {
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const seasons = {
    spring: {
      name: 'Spring Blossoms',
      color: 'from-green-400 to-pink-400',
      icon: '🌸',
      description: 'Fresh beginnings and floral arrangements',
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    summer: {
      name: 'Summer Coolers',
      color: 'from-yellow-400 to-orange-400',
      icon: '☀️',
      description: 'Refreshing ambiance and vibrant energy',
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    monsoon: {
      name: 'Monsoon Magic',
      color: 'from-blue-400 to-purple-400',
      icon: '🌧️',
      description: 'Cozy interiors and warm beverages',
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    },
    winter: {
      name: 'Winter Warmth',
      color: 'from-gray-400 to-blue-200',
      icon: '⛄',
      description: 'Warm lighting and comforting cuisine',
      images: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    }
  };

  const handleSeasonChange = (season) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSeason(season);
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-rotate seasons
  useEffect(() => {
    const interval = setInterval(() => {
      const seasonKeys = Object.keys(seasons);
      const currentIndex = seasonKeys.indexOf(currentSeason);
      const nextIndex = (currentIndex + 1) % seasonKeys.length;
      handleSeasonChange(seasonKeys[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSeason]);

  return (
    <section className="py-20 bg-gradient-to-br from-soft-cream to-charcoal/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
            Seasonal Transformations
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Experience how Tavisha Lounge transforms with the rhythm of nature
          </p>
        </motion.div>

        {/* Season Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(seasons).map(([key, season]) => (
                <motion.button
                  key={key}
                  onClick={() => handleSeasonChange(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    currentSeason === key
                      ? `bg-gradient-to-r ${season.color} text-white shadow-lg`
                      : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{season.icon}</span>
                  <span>{season.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal Display */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <motion.div
                key={currentSeason}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
              >
                {/* Background Images */}
                <div className="absolute inset-0">
                  <div className="grid grid-cols-2 h-full">
                    {seasons[currentSeason].images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative"
                      >
                        <img
                          src={image}
                          alt={`${seasons[currentSeason].name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center text-white p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="text-6xl mb-4"
                    >
                      {seasons[currentSeason].icon}
                    </motion.div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                      {seasons[currentSeason].name}
                    </h3>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                      {seasons[currentSeason].description}
                    </p>
                  </motion.div>
                </div>

                {/* Seasonal Specials */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute bottom-6 left-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 text-white"
                >
                  <h4 className="font-semibold mb-2">Seasonal Specials:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Special themed menu</li>
                    <li>• Seasonal decorations</li>
                    <li>• Exclusive beverages</li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Season Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {Object.entries(seasons).map(([key, season]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                currentSeason === key ? 'border-metallic-gold' : 'border-transparent'
              }`}
              onClick={() => handleSeasonChange(key)}
            >
              <div className="text-4xl mb-3">{season.icon}</div>
              <h4 className="font-semibold text-charcoal mb-2">{season.name}</h4>
              <p className="text-sm text-gray-600">{season.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalTransitions;