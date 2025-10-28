// src/components/MenuQuiz.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHelpCircle, FiSmile, FiAward, FiClock } from 'react-icons/fi';

const MenuQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What's your preferred spice level?",
      options: [
        { id: 'mild', label: 'Mild & Aromatic', description: 'Gentle flavors with subtle spices' },
        { id: 'medium', label: 'Balanced Heat', description: 'Well-rounded spice that enhances flavor' },
        { id: 'spicy', label: 'Fiery & Bold', description: 'Adventurous heat that packs a punch' }
      ],
      icon: FiHelpCircle
    },
    {
      id: 2,
      question: "What type of dining experience are you looking for?",
      options: [
        { id: 'quick', label: 'Quick & Casual', description: 'Perfect for lunch or busy evenings' },
        { id: 'comfort', label: 'Comfort Food', description: 'Hearty dishes that feel like home' },
        { id: 'luxury', label: 'Royal Experience', description: 'Premium dishes for special occasions' }
      ],
      icon: FiAward
    },
    {
      id: 3,
      question: "Any dietary preferences?",
      options: [
        { id: 'veg', label: 'Vegetarian', description: 'Plant-based deliciousness' },
        { id: 'nonveg', label: 'Non-Vegetarian', description: 'Meat and seafood specialties' },
        { id: 'mixed', label: 'Mixed Selection', description: 'Best of both worlds' }
      ],
      icon: FiSmile
    }
  ];

  const recommendations = {
    'mild-quick-veg': {
      title: "Royal Vegetarian Delight",
      dishes: ["Paneer Tikka Masala", "Vegetable Biryani", "Garlic Naan"],
      description: "Perfect blend of mild spices and quick vegetarian favorites"
    },
    'spicy-luxury-nonveg': {
      title: "Royal Feast Experience",
      dishes: ["Butter Chicken Royal", "Hyderabadi Biryani", "Tandoori Platter"],
      description: "Bold flavors for a luxurious non-vegetarian dining experience"
    },
    'medium-comfort-mixed': {
      title: "Comfort Classics Mix",
      dishes: ["Dal Makhani", "Rogan Josh", "Butter Naan"],
      description: "Balanced comfort food combining vegetarian and non-vegetarian favorites"
    }
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    
    if (currentStep < quizQuestions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 500);
    } else {
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const getRecommendation = () => {
    const key = `${answers[1]}-${answers[2]}-${answers[3]}`;
    return recommendations[key] || recommendations['medium-comfort-mixed'];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const Icon = quizQuestions[currentStep].icon;

  return (
    <section className="py-16 bg-gradient-to-br from-royal-maroon to-purple-900 text-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FiHelpCircle className="w-8 h-8 text-metallic-gold" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Find Your <span className="text-metallic-gold">Perfect</span> Meal
            </h2>
          </div>
          <div className="w-20 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take our quick quiz and let us recommend the perfect dishes for your taste
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              {quizQuestions.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    index <= currentStep
                      ? 'bg-metallic-gold text-royal-maroon'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
              ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-metallic-gold h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`question-${currentStep}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 text-charcoal"
              >
                <div className="text-center mb-8">
                  <Icon className="w-12 h-12 text-royal-maroon mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {quizQuestions[currentStep].question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quizQuestions[currentStep].options.map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => handleAnswer(quizQuestions[currentStep].id, option.id)}
                      className="p-6 bg-soft-cream rounded-xl border-2 border-transparent hover:border-royal-maroon transition-all duration-300 text-left group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <h4 className="font-bold text-royal-maroon mb-2 text-lg">
                        {option.label}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 text-charcoal text-center"
              >
                <FiAward className="w-16 h-16 text-metallic-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-royal-maroon mb-4">
                  {getRecommendation().title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getRecommendation().description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">Recommended Dishes:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {getRecommendation().dishes.map((dish, index) => (
                      <motion.span
                        key={dish}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-royal-maroon text-metallic-gold px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {dish}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={resetQuiz}
                  className="bg-metallic-gold text-royal-maroon px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Quiz Again
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuQuiz;