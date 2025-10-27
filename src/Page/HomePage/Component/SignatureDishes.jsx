// src/components/SignatureDishes.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: "Royal Butter Chicken",
    description: "Tender chicken in a rich tomato and butter sauce with royal spices",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$28"
  },
  {
    id: 2,
    name: "Saffron Biryani",
    description: "Fragrant basmati rice with premium spices and choice of meat",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$32"
  },
  {
    id: 3,
    name: "Tandoori Platter",
    description: "Assorted grilled delicacies from our traditional clay oven",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$45"
  },
  {
    id: 4,
    name: "Royal Thali",
    description: "Complete dining experience with 12 authentic dishes",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$65"
  }
];

const SignatureDishes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

  return (
    <section className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our <span className="text-royal-maroon">Signature</span> Creations
          </h2>
          <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Handcrafted dishes that tell the story of our royal heritage and culinary mastery
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl">
                  <div className="h-96 md:h-full">
                    <img
                      src={dishes[currentIndex].image}
                      alt={dishes[currentIndex].name}
                      className="w-full h-full object-cover rounded-l-2xl"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-royal-maroon mb-4">
                      {dishes[currentIndex].name}
                    </h3>
                    <p className="text-charcoal text-lg mb-6">
                      {dishes[currentIndex].description}
                    </p>
                    <div className="text-2xl font-bold text-burnt-orange mb-6">
                      {dishes[currentIndex].price}
                    </div>
                    <button className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300">
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-metallic-gold text-royal-maroon w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-metallic-gold text-royal-maroon w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-royal-maroon' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;