// // CinematicScrollStory.jsx
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const CinematicScrollStory = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0, 0, 1]);
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

//   const storySteps = [
//     {
//       image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
//       title: "Morning Preparation",
//       description: "Our chefs begin crafting the day's culinary masterpieces"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Lunch Service",
//       description: "The restaurant comes alive with the midday energy"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
//       title: "Golden Hour",
//       description: "Evening light transforms Tavisha into a royal sanctuary"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Night Ambiance",
//       description: "Candlelit dinners and unforgettable celebrations"
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="h-[400vh] relative">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <motion.div 
//           className="absolute inset-0"
//           style={{ opacity, scale }}
//         >
//           {storySteps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="absolute inset-0"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               viewport={{ amount: 0.5 }}
//             >
//               <img
//                 src={step.image}
//                 alt={step.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-royal-maroon/40 flex items-center justify-center">
//                 <div className="text-center text-soft-cream px-4">
//                   <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4">
//                     {step.title}
//                   </h3>
//                   <p className="text-xl md:text-2xl font-sans max-w-2xl">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CinematicScrollStory;

// src/components/gallery/ChefSpecialCreations.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  FiClock, FiStar, FiAward } from 'react-icons/fi';
import { LuChefHat } from "react-icons/lu";

const ChefSpecialCreations = () => {
  const [activeDish, setActiveDish] = useState(0);

  const chefSpecials = [
    {
      id: 1,
      name: "Royal Heritage Thali",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1981&q=80",
      description: "A grand platter featuring 12 traditional dishes from different regions of India",
      preparation: "48 hours marination, slow-cooked in traditional vessels",
      ingredients: ["Saffron-infused biryani", "12-hour slow-cooked curry", "Freshly ground spices", "Organic vegetables"],
      story: "Inspired by royal kitchens of Rajasthan, this thali represents centuries of culinary heritage",
      chefTip: "Start with the appetizers and progress to main courses for the complete experience",
      cookingTime: "45 minutes",
      difficulty: "Expert",
      awards: ["Best Traditional Dish 2023", "Chef's Choice Award"]
    },
    {
      id: 2,
      name: "Tandoori Symphony",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "An assortment of clay oven specialties featuring marinated meats and vegetables",
      preparation: "Traditional clay oven cooking with secret spice blends",
      ingredients: ["Premium cuts of meat", "Yogurt marinade", "Signature spice mix", "Fresh herbs"],
      story: "Our head chef's family recipe passed down through three generations of tandoor masters",
      chefTip: "Squeeze fresh lemon juice before the first bite to enhance flavors",
      cookingTime: "30 minutes",
      difficulty: "Advanced",
      awards: ["Tandoor Excellence Award", "Customer Favorite"]
    },
    {
      id: 3,
      name: "Monsoon Magic Platter",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      description: "Seasonal specialties that capture the essence of monsoon with warm, comforting flavors",
      preparation: "Traditional monsoon recipes with contemporary presentation",
      ingredients: ["Seasonal produce", "Warming spices", "Fresh greens", "Artisanal breads"],
      story: "Created during the rainy season of 2021, this platter brings comfort and warmth to gloomy days",
      chefTip: "Perfect with a cup of our signature masala chai",
      cookingTime: "35 minutes",
      difficulty: "Intermediate",
      awards: ["Seasonal Innovation Award"]
    }
  ];

  const nextDish = () => {
    setActiveDish((prev) => (prev + 1) % chefSpecials.length);
  };

  const prevDish = () => {
    setActiveDish((prev) => (prev - 1 + chefSpecials.length) % chefSpecials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-royal-maroon to-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <LuChefHat className="w-8 h-8 text-metallic-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold">
              Chef's Special Creations
            </h2>
          </div>
          <p className="text-xl text-soft-cream max-w-2xl mx-auto">
            Masterpieces crafted with passion, tradition, and innovation
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Dish Carousel */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDish}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Image Side */}
                <div className="relative h-96 lg:h-full">
                  <img
                    src={chefSpecials[activeDish].image}
                    alt={chefSpecials[activeDish].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t" />
                  
                  {/* Dish Badges */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <div className="bg-metallic-gold text-royal-maroon px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <FiClock className="w-3 h-3" />
                      <span>{chefSpecials[activeDish].cookingTime}</span>
                    </div>
                    <div className="bg-royal-maroon text-metallic-gold px-3 py-1 rounded-full text-sm font-semibold">
                      {chefSpecials[activeDish].difficulty}
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="absolute bottom-6 left-6">
                    <div className="flex flex-wrap gap-2">
                      {chefSpecials[activeDish].awards.map((award, index) => (
                        <div
                          key={index}
                          className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1"
                        >
                          <FiAward className="w-3 h-3" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">
                    {chefSpecials[activeDish].name}
                  </h3>
                  
                  <p className="text-lg text-charcoal mb-6 leading-relaxed">
                    {chefSpecials[activeDish].description}
                  </p>

                  {/* Preparation */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-burnt-orange mb-2">Preparation:</h4>
                    <p className="text-charcoal">{chefSpecials[activeDish].preparation}</p>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-burnt-orange mb-2">Key Ingredients:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {chefSpecials[activeDish].ingredients.map((ingredient, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-charcoal"
                        >
                          <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
                          <span className="text-sm">{ingredient}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Story & Chef Tip */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-burnt-orange mb-1">The Story:</h4>
                      <p className="text-sm text-charcoal italic">
                        "{chefSpecials[activeDish].story}"
                      </p>
                    </div>
                    <div className="bg-soft-cream rounded-lg p-4 border-l-4 border-metallic-gold">
                      <h4 className="font-semibold text-royal-maroon mb-1">Chef's Tip:</h4>
                      <p className="text-sm text-charcoal">
                        {chefSpecials[activeDish].chefTip}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors"
                    >
                      Add to Order
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-royal-maroon text-royal-maroon px-6 py-3 rounded-full font-semibold hover:bg-royal-maroon hover:text-metallic-gold transition-all"
                    >
                      View Recipe
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevDish}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextDish}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Dish Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {chefSpecials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDish(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDish === index ? 'bg-metallic-gold scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Quick Dish Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {chefSpecials.map((dish, index) => (
              <motion.div
                key={dish.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  activeDish === index ? 'border-metallic-gold' : 'border-transparent'
                }`}
                onClick={() => setActiveDish(index)}
              >
                <div className="w-16 h-16 bg-metallic-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiStar className="w-6 h-6 text-metallic-gold" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">{dish.name}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{dish.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpecialCreations;