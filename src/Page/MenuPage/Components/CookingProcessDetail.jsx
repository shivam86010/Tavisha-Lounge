// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiClock, FiUsers, FiStar, FiArrowLeft, FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';
// import { LuChefHat } from "react-icons/lu";
// const CookingProcessDetail = ({ onClose, selectedProcess }) => {
    
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [hasCompleted, setHasCompleted] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const detailedProcesses = {
//     0: {
//       title: "Ingredient Selection Mastery",
//       steps: [
//         {
//           title: "Morning Market Visit",
//           description: "Our chefs personally visit local markets at 5 AM to select the freshest ingredients",
//           duration: "2 hours",
//           image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Only seasonal vegetables selected",
//             "Direct sourcing from trusted farmers",
//             "Quality inspection for each item",
//             "Organic certification verification"
//           ]
//         },
//         {
//           title: "Spice Procurement",
//           description: "Authentic spices sourced from their regions of origin for maximum flavor",
//           duration: "Weekly",
//           image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Kashmiri saffron from Pampore",
//             "Tellicherry black pepper",
//             "Byadgi chili from Karnataka",
//             "Whole spices ground daily"
//           ]
//         },
//         {
//           title: "Meat & Seafood Selection",
//           description: "Premium quality meats and seafood with strict quality standards",
//           duration: "Daily",
//           image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Free-range chicken only",
//             "Fresh seafood delivered daily",
//             "Aged meats for tenderness",
//             "Halal certification for all meats"
//           ]
//         }
//       ]
//     },
//     1: {
//       title: "Traditional Preparation Techniques",
//       steps: [
//         {
//           title: "Spice Blending",
//           description: "Ancient family recipes guide our spice combinations",
//           duration: "1 hour",
//           image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Stone grinding for optimal flavor",
//             "15 different spice blends",
//             "Family recipes from 1895",
//             "Balance of heat and aroma"
//           ]
//         },
//         {
//           title: "Marination Process",
//           description: "Slow marination allows flavors to penetrate deeply",
//           duration: "4-24 hours",
//           image: "https://images.unsplash.com/photo-1605522469906-3fe226e356d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Yogurt-based marinades",
//             "Fresh herb infusions",
//             "Temperature-controlled environment",
//             "Traditional earthen pots used"
//           ]
//         },
//         {
//           title: "Dough Preparation",
//           description: "Hand-kneaded dough for perfect bread texture",
//           duration: "2 hours",
//           image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Whole wheat flour stone ground",
//             "Natural fermentation",
//             "Hand stretching technique",
//             "Resting period for elasticity"
//           ]
//         }
//       ]
//     },
//     2: {
//       title: "Master Cooking Execution",
//       steps: [
//         {
//           title: "Tandoor Cooking",
//           description: "Traditional clay oven cooking at precise temperatures",
//           duration: "8-15 minutes",
//           image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "450°C optimal temperature",
//             "Smoky charcoal flavor",
//             "Even cooking from all sides",
//             "Traditional skewer technique"
//           ]
//         },
//         {
//           title: "Dum Cooking",
//           description: "Slow cooking in sealed pots to retain flavors",
//           duration: "30-45 minutes",
//           image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Layered cooking technique",
//             "Steam pressure building",
//             "Flavor infusion process",
//             "Aroma retention method"
//           ]
//         },
//         {
//           title: "Tadka & Finishing",
//           description: "Final flavor enhancement with tempered spices",
//           duration: "2-5 minutes",
//           image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Hot oil spice tempering",
//             "Aromatic oil infusion",
//             "Garnish with fresh herbs",
//             "Final taste adjustment"
//           ]
//         }
//       ]
//     },
//     3: {
//       title: "Quality Assurance Process",
//       steps: [
//         {
//           title: "Visual Inspection",
//           description: "Every dish is visually inspected before serving",
//           duration: "1-2 minutes",
//           image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Color consistency check",
//             "Garnish presentation",
//             "Plate cleanliness",
//             "Portion size verification"
//           ]
//         },
//         {
//           title: "Taste Testing",
//           description: "Senior chefs conduct final taste tests",
//           duration: "2-3 minutes",
//           image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Flavor balance assessment",
//             "Spice level verification",
//             "Texture quality check",
//             "Aroma intensity evaluation"
//           ]
//         },
//         {
//           title: "Temperature Check",
//           description: "Ensuring optimal serving temperature",
//           duration: "1 minute",
//           image: "https://images.unsplash.com/photo-1551503766-2c6d68cf7693?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//           details: [
//             "Hot dishes at 65-70°C",
//             "Cold dishes at 4-8°C",
//             "Heated plates for hot food",
//             "Chilled plates for cold dishes"
//           ]
//         }
//       ]
//     }
//   };

//   const currentProcess = detailedProcesses[selectedProcess];
//   const totalSteps = currentProcess.steps.length;

//     const nextStep = () => {
//     setCurrentStep(prev => {
//       const next = prev + 1;
//       if (next >= totalSteps) {
//         setHasCompleted(true);
//         if (isPlaying) setIsPlaying(false);
//         return prev;
//       }
//       return next;
//     });
//   };

//   const prevStep = () => {
//     setCurrentStep(prev => {
//       const next = prev - 1;
//       return next < 0 ? 0 : next;
//     });
//   };

//   // Auto-play
//   useEffect(() => {
//     let interval;
//     if (isPlaying) {
//       interval = setInterval(nextStep, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, currentStep]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowRight') nextStep();
//       if (event.key === 'ArrowLeft') prevStep();
//       if (event.key === ' ') setIsPlaying(!isPlaying);
//       if (event.key === 'Escape') onClose();
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [nextStep, prevStep, isPlaying, onClose]);

//   // Swipe handlers
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;
    
//     if (isLeftSwipe) nextStep();
//     if (isRightSwipe) prevStep();
    
//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   const handleProgressClick = (e) => {
//     const progressBar = e.currentTarget;
//     const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
//     const progressBarWidth = progressBar.offsetWidth;
//     const clickPercentage = clickPosition / progressBarWidth;
//     const stepIndex = Math.floor(clickPercentage * totalSteps);
    
//     setCurrentStep(Math.min(stepIndex, totalSteps - 1));
//   };


//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//        onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-y-auto"
//     >
//       <motion.div
//         initial={{ scale: 0.8, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         className="bg-soft-cream rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-6 text-soft-cream relative">
//           <button
//             onClick={onClose}
//             className="absolute left-6 top-6 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
//           >
//             <FiArrowLeft className="w-5 h-5" />
//           </button>
          
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentProcess.title}</h2>
//             <p className="text-metallic-gold">Step {currentStep + 1} of {totalSteps}</p>
//           </div>

//           {/* Progress Bar */}
//           <div className="mt-4">
//             <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
//               <motion.div
//                 className="bg-metallic-gold h-2 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6 md:p-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Image Section */}
//             <div className="relative">
//               <motion.img
//                 key={currentStep}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 src={currentProcess.steps[currentStep].image}
//                 alt={currentProcess.steps[currentStep].title}
//                 className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
//               />
              
//               {/* Step Indicator */}
//               <div className="absolute top-4 left-4 bg-metallic-gold text-royal-maroon px-3 py-1 rounded-full text-sm font-bold">
//                 Step {currentStep + 1}
//               </div>
              
//               {/* Duration */}
//               <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
//                 <FiClock className="w-3 h-3 inline mr-1" />
//                 {currentProcess.steps[currentStep].duration}
//               </div>
//             </div>

//             {/* Text Content */}
//             <div>
//               <motion.h3
//                 key={`title-${currentStep}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-2xl lg:text-3xl font-bold text-royal-maroon mb-4"
//               >
//                 {currentProcess.steps[currentStep].title}
//               </motion.h3>

//               <motion.p
//                 key={`desc-${currentStep}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-charcoal mb-6 leading-relaxed text-lg"
//               >
//                 {currentProcess.steps[currentStep].description}
//               </motion.p>

//               <motion.div
//                 key={`details-${currentStep}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="mb-6"
//               >
//                 <h4 className="font-semibold text-charcoal mb-3 text-lg">Key Features:</h4>
//                 <div className="space-y-2">
//                   {currentProcess.steps[currentStep].details.map((detail, index) => (
//                     <motion.div
//                       key={detail}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
//                       className="flex items-center space-x-3 text-charcoal"
//                     >
//                       <div className="w-2 h-2 bg-burnt-orange rounded-full flex-shrink-0"></div>
//                       <span>{detail}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Chef's Tip */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-4"
//               >
//                 <div className="flex items-center space-x-2 mb-2">
//                   <LuChefHat className="w-5 h-5 text-royal-maroon" />
//                   <span className="font-semibold text-royal-maroon">Chef's Insight:</span>
//                 </div>
//                 <p className="text-charcoal text-sm">
//                   {selectedProcess === 0 && "The quality of your ingredients determines 80% of your dish's final flavor."}
//                   {selectedProcess === 1 && "Patience in preparation is the secret ingredient you won't find in any recipe."}
//                   {selectedProcess === 2 && "True mastery lies in knowing exactly when a dish is perfectly cooked."}
//                   {selectedProcess === 3 && "We serve not just food, but an experience that engages all your senses."}
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
//             <div className="flex items-center space-x-4">
//               <motion.button
//                 onClick={prevStep}
//                 className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-royal-maroon-dark transition-colors duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiArrowLeft className="w-5 h-5" />
//               </motion.button>

//               <motion.button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className="w-12 h-12 bg-metallic-gold text-royal-maroon rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
//               </motion.button>

//               <motion.button
//                 onClick={nextStep}
//                 className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-royal-maroon-dark transition-colors duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiSkipForward className="w-5 h-5" />
//               </motion.button>
//             </div>

//             {/* Step Dots */}
//             <div className="flex space-x-2">
//               {currentProcess.steps.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentStep(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentStep ? 'bg-royal-maroon w-8' : 'bg-gray-300 hover:bg-royal-maroon'
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               onClick={onClose}
//               className="bg-charcoal text-soft-cream px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Close Tour
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CookingProcessDetail;

// src/components/CookingProcessDetail.js
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUsers, FiStar, FiArrowLeft, FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';
import { LuChefHat } from "react-icons/lu";

const CookingProcessDetail = ({ onClose, selectedProcess }) => {
  console.log('CookingProcessDetail rendered with:', { selectedProcess, onClose });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const detailedProcesses = {
    0: {
      title: "Ingredient Selection Mastery",
      steps: [
        {
          title: "Morning Market Visit",
          description: "Our chefs personally visit local markets at 5 AM to select the freshest ingredients",
          duration: "2 hours",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Only seasonal vegetables selected",
            "Direct sourcing from trusted farmers",
            "Quality inspection for each item",
            "Organic certification verification"
          ]
        },
        {
          title: "Spice Procurement",
          description: "Authentic spices sourced from their regions of origin for maximum flavor",
          duration: "Weekly",
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Kashmiri saffron from Pampore",
            "Tellicherry black pepper",
            "Byadgi chili from Karnataka",
            "Whole spices ground daily"
          ]
        },
        {
          title: "Meat & Seafood Selection",
          description: "Premium quality meats and seafood with strict quality standards",
          duration: "Daily",
          image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Free-range chicken only",
            "Fresh seafood delivered daily",
            "Aged meats for tenderness",
            "Halal certification for all meats"
          ]
        }
      ]
    },
    1: {
      title: "Traditional Preparation Techniques",
      steps: [
        {
          title: "Spice Blending",
          description: "Ancient family recipes guide our spice combinations",
          duration: "1 hour",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Stone grinding for optimal flavor",
            "15 different spice blends",
            "Family recipes from 1895",
            "Balance of heat and aroma"
          ]
        },
        {
          title: "Marination Process",
          description: "Slow marination allows flavors to penetrate deeply",
          duration: "4-24 hours",
          image: "https://images.unsplash.com/photo-1605522469906-3fe226e356d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Yogurt-based marinades",
            "Fresh herb infusions",
            "Temperature-controlled environment",
            "Traditional earthen pots used"
          ]
        },
        {
          title: "Dough Preparation",
          description: "Hand-kneaded dough for perfect bread texture",
          duration: "2 hours",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Whole wheat flour stone ground",
            "Natural fermentation",
            "Hand stretching technique",
            "Resting period for elasticity"
          ]
        }
      ]
    },
    2: {
      title: "Master Cooking Execution",
      steps: [
        {
          title: "Tandoor Cooking",
          description: "Traditional clay oven cooking at precise temperatures",
          duration: "8-15 minutes",
          image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "450°C optimal temperature",
            "Smoky charcoal flavor",
            "Even cooking from all sides",
            "Traditional skewer technique"
          ]
        },
        {
          title: "Dum Cooking",
          description: "Slow cooking in sealed pots to retain flavors",
          duration: "30-45 minutes",
          image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Layered cooking technique",
            "Steam pressure building",
            "Flavor infusion process",
            "Aroma retention method"
          ]
        },
        {
          title: "Tadka & Finishing",
          description: "Final flavor enhancement with tempered spices",
          duration: "2-5 minutes",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Hot oil spice tempering",
            "Aromatic oil infusion",
            "Garnish with fresh herbs",
            "Final taste adjustment"
          ]
        }
      ]
    },
    3: {
      title: "Quality Assurance Process",
      steps: [
        {
          title: "Visual Inspection",
          description: "Every dish is visually inspected before serving",
          duration: "1-2 minutes",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Color consistency check",
            "Garnish presentation",
            "Plate cleanliness",
            "Portion size verification"
          ]
        },
        {
          title: "Taste Testing",
          description: "Senior chefs conduct final taste tests",
          duration: "2-3 minutes",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Flavor balance assessment",
            "Spice level verification",
            "Texture quality check",
            "Aroma intensity evaluation"
          ]
        },
        {
          title: "Temperature Check",
          description: "Ensuring optimal serving temperature",
          duration: "1 minute",
          image: "https://images.unsplash.com/photo-1551503766-2c6d68cf7693?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          details: [
            "Hot dishes at 65-70°C",
            "Cold dishes at 4-8°C",
            "Heated plates for hot food",
            "Chilled plates for cold dishes"
          ]
        }
      ]
    }
  };

  // Check if selectedProcess is valid
  if (selectedProcess === undefined || selectedProcess === null) {
    console.error('Invalid selectedProcess:', selectedProcess);
    return null;
  }

  const currentProcess = detailedProcesses[selectedProcess];
  
  if (!currentProcess) {
    console.error('No process found for selectedProcess:', selectedProcess);
    return null;
  }

  const totalSteps = currentProcess.steps.length;

  const nextStep = () => {
    console.log('Next step clicked, current:', currentStep, 'total:', totalSteps);
    setCurrentStep(prev => {
      const next = prev + 1;
      if (next >= totalSteps) {
        console.log('Reached last step, setting completed');
        setHasCompleted(true);
        if (isPlaying) setIsPlaying(false);
        return prev; // Stay on last step
      }
      console.log('Moving to step:', next);
      return next;
    });
  };

  const prevStep = () => {
    console.log('Previous step clicked, current:', currentStep);
    setCurrentStep(prev => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });
  };

  // Auto-play
  useEffect(() => {
    let interval;
    if (isPlaying) {
      console.log('Auto-play started');
      interval = setInterval(nextStep, 5000);
    }
    return () => {
      if (interval) {
        console.log('Auto-play stopped');
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Key pressed:', event.key);
      if (event.key === 'ArrowRight') nextStep();
      if (event.key === 'ArrowLeft') prevStep();
      if (event.key === ' ') setIsPlaying(!isPlaying);
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextStep, prevStep, isPlaying, onClose]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) nextStep();
    if (isRightSwipe) prevStep();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Add clickable progress bar
  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const clickPercentage = clickPosition / progressBarWidth;
    const stepIndex = Math.floor(clickPercentage * totalSteps);
    
    console.log('Progress bar clicked, moving to step:', stepIndex);
    setCurrentStep(Math.min(stepIndex, totalSteps - 1));
  };

  console.log('Current state:', { currentStep, totalSteps, isPlaying, hasCompleted });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-y-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-soft-cream rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-6 text-soft-cream sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute left-6 top-6 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentProcess.title}</h2>
            <p className="text-metallic-gold">Step {currentStep + 1} of {totalSteps}</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4" onClick={handleProgressClick}>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 cursor-pointer">
              <motion.div
                className="bg-metallic-gold h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative">
              <motion.img
                key={currentStep}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={currentProcess.steps[currentStep].image}
                alt={currentProcess.steps[currentStep].title}
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Step Indicator */}
              <div className="absolute top-4 left-4 bg-metallic-gold text-royal-maroon px-3 py-1 rounded-full text-sm font-bold">
                Step {currentStep + 1}
              </div>
              
              {/* Duration */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                <FiClock className="w-3 h-3 inline mr-1" />
                {currentProcess.steps[currentStep].duration}
              </div>
            </div>

            {/* Text Content */}
            <div>
              <motion.h3
                key={`title-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl lg:text-3xl font-bold text-royal-maroon mb-4"
              >
                {currentProcess.steps[currentStep].title}
              </motion.h3>

              <motion.p
                key={`desc-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-charcoal mb-6 leading-relaxed text-lg"
              >
                {currentProcess.steps[currentStep].description}
              </motion.p>

              <motion.div
                key={`details-${currentStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h4 className="font-semibold text-charcoal mb-3 text-lg">Key Features:</h4>
                <div className="space-y-2">
                  {currentProcess.steps[currentStep].details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="flex items-center space-x-3 text-charcoal"
                    >
                      <div className="w-2 h-2 bg-burnt-orange rounded-full flex-shrink-0"></div>
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Chef's Tip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-4"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <LuChefHat className="w-5 h-5 text-royal-maroon" />
                  <span className="font-semibold text-royal-maroon">Chef's Insight:</span>
                </div>
                <p className="text-charcoal text-sm">
                  {selectedProcess === 0 && "The quality of your ingredients determines 80% of your dish's final flavor."}
                  {selectedProcess === 1 && "Patience in preparation is the secret ingredient you won't find in any recipe."}
                  {selectedProcess === 2 && "True mastery lies in knowing exactly when a dish is perfectly cooked."}
                  {selectedProcess === 3 && "We serve not just food, but an experience that engages all your senses."}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-gray-200 gap-4">
            <div className="flex items-center space-x-4 order-2 sm:order-1">
              <motion.button
                onClick={prevStep}
                className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-royal-maroon-dark transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentStep === 0}
              >
                <FiArrowLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-metallic-gold text-royal-maroon rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
              </motion.button>

              <motion.button
                onClick={nextStep}
                className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-royal-maroon-dark transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentStep === totalSteps - 1}
              >
                <FiSkipForward className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Step Dots */}
            <div className="flex space-x-2 order-1 sm:order-2">
              {currentProcess.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep ? 'bg-royal-maroon w-8' : 'bg-gray-300 hover:bg-royal-maroon'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={onClose}
              className="bg-charcoal text-soft-cream px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg order-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close Tour
            </motion.button>
          </div>

          {/* Completion Message */}
          {hasCompleted && currentStep === totalSteps - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800 text-center"
            >
              <FiStar className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="font-semibold">Congratulations! You've completed the {currentProcess.title.toLowerCase()} tour.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CookingProcessDetail;