// ImageModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white text-2xl p-2 hover:text-metallic-gold transition-colors"
            >
              ✕
            </button>
            <img
              src={image.src}
              alt={image.caption || image.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {(image.caption || image.title) && (
              <div className="absolute bottom-0 left-0 right-0 bg-royal-maroon/90 text-soft-cream p-4 rounded-b-lg">
                <h3 className="font-serif text-xl font-bold">
                  {image.title || ''}
                </h3>
                <p className="font-sans">
                  {image.caption || image.description}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;