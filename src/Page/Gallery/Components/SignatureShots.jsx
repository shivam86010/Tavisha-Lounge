// SignatureShots.jsx
import React from 'react';
import { motion } from 'framer-motion';
import MirrorCard from './MirrorCard';

const SignatureShots = ({ onImageClick, onImageLike, likedImages }) => {
  const signatureShots = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Elegance in Every Detail.",
      mood: "fine-dining"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Golden Cutlery & Royal Setting",
      mood: "fine-dining"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      caption: "A Feast for the Eyes",
      mood: "romantic"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578305998417-3d4d6ef31b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      caption: "Maroon & Gold Ambiance",
      mood: "fine-dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Artistic Plating",
      mood: "fine-dining"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      caption: "Candlelight Dining",
      mood: "romantic"
    }
  ];

  return (
    <section className="py-16">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Signature Aesthetic Shots
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signatureShots.map((shot, index) => (
          <motion.div
            key={shot.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <MirrorCard
              image={shot}
              onImageClick={onImageClick}
              onImageLike={onImageLike}
              isLiked={likedImages.includes(shot.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SignatureShots;