// SoundAmbiance.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SoundAmbiance = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <>
      <motion.button
        onClick={toggleSound}
        className="fixed top-24 left-4 z-50 p-3 bg-royal-maroon text-metallic-gold rounded-full shadow-2xl font-sans font-bold flex items-center gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <span>{isPlaying ? '🔊' : '🔇'}</span>
        Ambiance
      </motion.button>
      
      <audio
        ref={audioRef}
        loop
        src="/audio/restaurant-ambiance.mp3" // Add your ambiance audio file
      />
    </>
  );
};

export default SoundAmbiance;