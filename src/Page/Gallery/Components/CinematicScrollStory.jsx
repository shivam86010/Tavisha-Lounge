// CinematicScrollStory.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CinematicScrollStory = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0, 0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  const storySteps = [
    {
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      title: "Morning Preparation",
      description: "Our chefs begin crafting the day's culinary masterpieces"
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Lunch Service",
      description: "The restaurant comes alive with the midday energy"
    },
    {
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Golden Hour",
      description: "Evening light transforms Tavisha into a royal sanctuary"
    },
    {
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Night Ambiance",
      description: "Candlelit dinners and unforgettable celebrations"
    }
  ];

  return (
    <section ref={sectionRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ opacity, scale }}
        >
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.5 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-royal-maroon/40 flex items-center justify-center">
                <div className="text-center text-soft-cream px-4">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-sans max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicScrollStory;