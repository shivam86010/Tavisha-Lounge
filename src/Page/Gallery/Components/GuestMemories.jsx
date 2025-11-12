// GuestMemories.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GuestMemories = ({ selectedMood, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const guestMemories = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Birthday Celebration at Tavisha",
      mood: "celebration",
      testimonial: "The perfect venue for our family celebration!"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      caption: "Romantic Dinner Date",
      mood: "romantic",
      testimonial: "An unforgettable evening with amazing ambiance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Family Gathering",
      mood: "family",
      testimonial: "Great food and wonderful service for our family"
    }
  ];

  const filteredMemories = selectedMood === 'all' 
    ? guestMemories 
    : guestMemories.filter(memory => memory.mood === selectedMood);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredMemories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredMemories.length]);

  return (
    <section className="py-16 bg-royal-maroon/10 rounded-3xl p-8">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Guest Memories & Events
      </motion.h2>
      
      <div className="relative h-96 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            onClick={() => onImageClick(filteredMemories[currentIndex])}
          >
            <img 
              src={filteredMemories[currentIndex].src} 
              alt={filteredMemories[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/80 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-metallic-gold font-serif text-2xl font-bold mb-2">
                  {filteredMemories[currentIndex].caption}
                </p>
                <p className="text-soft-cream font-sans text-lg">
                  {filteredMemories[currentIndex].testimonial}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {filteredMemories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-metallic-gold' : 'bg-soft-cream/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestMemories;