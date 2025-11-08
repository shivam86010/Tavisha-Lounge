// AmbianceGallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import MirrorCard from './MirrorCard';

const AmbianceGallery = ({ selectedMood, onImageClick, onImageLike, likedImages }) => {
  const ambianceImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      caption: "Royal Interiors with a Modern Soul",
      mood: "fine-dining"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "The Perfect Spot for Family Gatherings",
      mood: "family"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      caption: "Golden Evenings at Tavisha Lounge",
      mood: "romantic"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Elegant Dining Experience",
      mood: "fine-dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544148103-0413e2897a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1976&q=80",
      caption: "Celebratory Atmosphere",
      mood: "celebration"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      caption: "Intimate Setting for Special Moments",
      mood: "romantic"
    }
  ];

  const filteredImages = selectedMood === 'all' 
    ? ambianceImages 
    : ambianceImages.filter(img => img.mood === selectedMood);

  return (
    <section className="py-16">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Restaurant Ambiance
      </motion.h2>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <MirrorCard
              image={image}
              onImageClick={onImageClick}
              onImageLike={onImageLike}
              isLiked={likedImages.includes(image.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AmbianceGallery;