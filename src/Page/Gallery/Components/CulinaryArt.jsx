// CulinaryArt.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const CulinaryArt = ({ selectedMood, onImageClick }) => {
  const scrollRef = useRef(null);
  
  const culinaryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      title: "Shahi Paneer Tavisha Style",
      description: "Crafted with Passion, Served with Pride.",
      mood: "fine-dining"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Royal Biryani Experience",
      description: "Every Dish is a Canvas of Flavor.",
      mood: "family"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Tandoori Specialties",
      description: "Where Tradition Meets Taste.",
      mood: "fine-dining"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Gourmet Plating",
      description: "Art on a Plate, Love in Every Bite.",
      mood: "romantic"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=2066&q=80",
      title: "Fresh Ingredients",
      description: "Farm to Table Excellence.",
      mood: "fine-dining"
    }
  ];

  const filteredImages = selectedMood === 'all' 
    ? culinaryImages 
    : culinaryImages.filter(img => img.mood === selectedMood);

  return (
    <section className="py-16">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Culinary Art
      </motion.h2>
      
      <div className="relative">
        <motion.div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={scrollRef}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="flex-shrink-0 w-80 md:w-96"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => onImageClick(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-metallic-gold font-serif text-xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-soft-cream font-sans">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryArt;