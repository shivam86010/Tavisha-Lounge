// MirrorCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MirrorCard = ({ image, onImageClick, onImageLike, isLiked }) => {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Image */}
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.4 }
        }}
        onClick={() => onImageClick(image)}
      >
        <img 
          src={image.src} 
          alt={image.caption}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-soft-cream font-sans text-lg font-semibold">
              {image.caption}
            </p>
          </div>
          
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onImageLike(image.id);
            }}
            className="absolute top-4 right-4 p-2 bg-royal-maroon/80 rounded-full"
          >
            <motion.span
              animate={{ scale: isLiked ? 1.2 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {isLiked ? '❤️' : '🤍'}
            </motion.span>
          </button>
        </div>
      </motion.div>
      
      {/* Reflection */}
      <div className="mt-2 opacity-60 transform scale-y-[-1]">
        <img 
          src={image.src} 
          alt=""
          className="w-full h-16 object-cover object-top rounded-2xl opacity-50 blur-[1px]"
        />
      </div>
    </motion.div>
  );
};

export default MirrorCard;