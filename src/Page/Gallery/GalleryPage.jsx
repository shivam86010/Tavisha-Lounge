// GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection  from './Components/HeroSection';
import MoodFilter from './Components/MoodFilter';
import CinematicScrollStory from './Components/CinematicScrollStory';
import AmbianceGallery from './Components/AmbianceGallery';
// import CulinaryArt from './components/CulinaryArt';
// import ChefTeam from './components/ChefTeam';
// import GuestMemories from './components/GuestMemories';
// import SignatureShots from './components/SignatureShots';
// import GalleryCTA from './components/GalleryCTA';
import DayNightToggle from './Components/DayNightToggle';
import SoundAmbiance from './Components/SoundAmbiance';
import ParticleBackground from './Components/ParticleBackground';
// import ImageModal from './components/ImageModal';
// import MemoryWall from './components/MemoryWall';
// import BehindKitchen from './components/BehindKitchen';

const GalleryPage = () => {
  const [selectedMood, setSelectedMood] = useState('all');
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState([]);

  const handleImageLike = (imageId) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-1000 ${
      isNightMode ? 'bg-charcoal text-soft-cream' : 'bg-soft-cream text-charcoal'
    }`}>
      <ParticleBackground isNightMode={isNightMode} />
      
      <HeroSection isNightMode={isNightMode} />
      
      <div className="container mx-auto px-4 py-8">
        <MoodFilter selectedMood={selectedMood} onMoodChange={setSelectedMood} />
        <DayNightToggle isNightMode={isNightMode} onToggle={setIsNightMode} />
        <SoundAmbiance />
        
        <CinematicScrollStory />
        <AmbianceGallery 
          selectedMood={selectedMood}
          onImageClick={setSelectedImage}
          onImageLike={handleImageLike}
          likedImages={likedImages}
        />
        {/* <CulinaryArt 
          selectedMood={selectedMood}
          onImageClick={setSelectedImage}
        /> */}
        {/* <ChefTeam 
          onImageClick={setSelectedImage}
        />
        <GuestMemories 
          selectedMood={selectedMood}
          onImageClick={setSelectedImage}
        /> */}
        {/* <SignatureShots 
          onImageClick={setSelectedImage}
          onImageLike={handleImageLike}
          likedImages={likedImages}
        />
        <MemoryWall />
        <BehindKitchen /> */}
      </div>
      
      {/* <GalleryCTA isNightMode={isNightMode} />
      
      <ImageModal 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      /> */}

    </div>
  );
};

export default GalleryPage;