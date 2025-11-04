// MoodFilter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MoodFilter = ({ selectedMood, onMoodChange }) => {
  const moods = [
    { id: 'all', label: 'All', emoji: '🌟' },
    { id: 'romantic', label: 'Romantic Evenings', emoji: '🕯️' },
    { id: 'family', label: 'Family Time', emoji: '👨‍👩‍👧' },
    { id: 'celebration', label: 'Celebrations', emoji: '🎉' },
    { id: 'fine-dining', label: 'Fine Dining', emoji: '🍽️' },
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12 p-6 bg-royal-maroon-dark rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {moods.map((mood) => (
        <motion.button
          key={mood.id}
          onClick={() => onMoodChange(mood.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-lg transition-all duration-300 ${
            selectedMood === mood.id
              ? 'bg-metallic-gold text-royal-maroon shadow-lg'
              : 'bg-soft-cream text-charcoal hover:bg-metallic-gold hover:text-royal-maroon'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">{mood.emoji}</span>
          {mood.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default MoodFilter;