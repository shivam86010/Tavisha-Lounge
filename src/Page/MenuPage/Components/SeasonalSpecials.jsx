// src/components/SeasonalSpecials.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SeasonalBookingPage from './SeasonalBookingPage';
const SeasonalSpecials = () => {
  const [currentSpecial, setCurrentSpecial] = useState(0);
    const [showBooking, setShowBooking] = useState(false);
  const [selectedSpecial, setSelectedSpecial] = useState(null);

   const handleBookExperience = (special) => {
    setSelectedSpecial(special);
    setShowBooking(true);
  };

  const handleBookingSuccess = (bookingData) => {
    console.log('Booking successful:', bookingData);
    // You can add API call here to save booking
  };

  const seasonalSpecials = [
    {
      id: 1,
      name: "Winter Royal Thali",
      description: "A warming selection of winter specialties featuring seasonal vegetables and rich, hearty curries",
      price: "$85",
      duration: "Nov - Feb",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: ["Sarson Ka Saag", "Makki Ki Roti", "Gajar Ka Halwa", "Winter Vegetable Curry"]
    },
    {
      id: 2,
      name: "Summer Coolers Feast",
      description: "Refreshing summer dishes with cooling ingredients and light, flavorful preparations",
      price: "$75",
      duration: "Mar - Jun",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: ["Aam Panna", "Kachumber Salad", "Mint Chicken", "Summer Berry Kulfi"]
    },
    {
      id: 3,
      name: "Monsoon Spice Journey",
      description: "Comforting dishes perfect for rainy days, featuring pakoras, biryanis, and warm desserts",
      price: "$80",
      duration: "Jul - Oct",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      highlights: ["Masala Chai Pakora", "Hyderabadi Biryani", "Garma Garam Jalebi", "Corn Masala"]
    }
  ];

  const nextSpecial = () => {
    setCurrentSpecial((prev) => (prev + 1) % seasonalSpecials.length);
  };

  const prevSpecial = () => {
    setCurrentSpecial((prev) => (prev - 1 + seasonalSpecials.length) % seasonalSpecials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-royal-maroon to-purple-900 text-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seasonal <span className="text-metallic-gold">Specials</span>
          </h2>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the magic of seasonal ingredients with our rotating special menus
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSpecial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-metallic-gold text-royal-maroon w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSpecial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-metallic-gold text-royal-maroon w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpecial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={seasonalSpecials[currentSpecial].image}
                      alt={seasonalSpecials[currentSpecial].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-metallic-gold text-royal-maroon px-3 py-1 rounded-full text-sm font-bold">
                      Seasonal Special
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 text-charcoal">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1 text-burnt-orange">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{seasonalSpecials[currentSpecial].duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-royal-maroon">
                        {seasonalSpecials[currentSpecial].price}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                      {seasonalSpecials[currentSpecial].name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {seasonalSpecials[currentSpecial].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">Menu Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {seasonalSpecials[currentSpecial].highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
                            <div className="w-1 h-1 bg-burnt-orange rounded-full"></div>
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      onClick={() => handleBookExperience(seasonalSpecials[currentSpecial])}
                      className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Seasonal Experience
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {seasonalSpecials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpecial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSpecial ? 'bg-metallic-gold' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

       {/* Add the booking modal at the end */}
      <AnimatePresence>
        {showBooking && selectedSpecial && (
          <SeasonalBookingPage
            seasonalSpecial={selectedSpecial}
            onClose={() => setShowBooking(false)}
            onBookingSuccess={handleBookingSuccess}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SeasonalSpecials;