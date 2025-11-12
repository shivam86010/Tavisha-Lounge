// src/components/gallery/VirtualTour.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCompass, FiZoomIn, FiPlay, FiPause } from 'react-icons/fi';

const VirtualTour = () => {
  const [activeRoom, setActiveRoom] = useState('main-dining');
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const tourRooms = {
    'main-dining': {
      name: 'Main Dining Hall',
      description: 'Experience the grandeur of our primary dining space with royal decor and elegant seating',
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ['Royal Throne Seating', 'Golden Chandeliers', 'Traditional Artwork'],
      capacity: '80 guests'
    },
    'private-dining': {
      name: 'Private Dining Room',
      description: 'Intimate space for special celebrations and business meetings',
      image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      features: ['Exclusive Service', 'Customized Menus', 'Sound System'],
      capacity: '20 guests'
    },
    'lounge-area': {
      name: 'Lounge & Bar',
      description: 'Relaxed atmosphere perfect for pre-dinner drinks and casual gatherings',
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      features: ['Signature Cocktails', 'Comfort Seating', 'Live Music Corner'],
      capacity: '40 guests'
    },
    'outdoor-terrace': {
      name: 'Outdoor Terrace',
      description: 'Al fresco dining with beautiful views and natural ambiance',
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ['Garden Views', 'Weather Protection', 'Evening Lighting'],
      capacity: '50 guests'
    },
    'chef-table': {
      name: "Chef's Table",
      description: 'Exclusive culinary experience with direct view of kitchen operations',
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      features: ['Kitchen View', 'Chef Interaction', 'Tasting Menus'],
      capacity: '8 guests'
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-cream to-metallic-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FiCompass className="w-8 h-8 text-royal-maroon" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon">
              Virtual Tour
            </h2>
          </div>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Explore Tavisha Lounge from the comfort of your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
              Explore Spaces
            </h3>
            {Object.entries(tourRooms).map(([key, room]) => (
              <motion.button
                key={key}
                onClick={() => setActiveRoom(key)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                  activeRoom === key
                    ? 'bg-royal-maroon text-metallic-gold shadow-lg'
                    : 'bg-white text-charcoal hover:bg-gray-50 shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="font-semibold text-lg mb-1">{room.name}</h4>
                <p className="text-sm opacity-80 line-clamp-2">{room.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Main Tour Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Viewer Header */}
              <div className="bg-royal-maroon p-4 flex justify-between items-center">
                <h3 className="text-metallic-gold font-semibold text-lg">
                  {tourRooms[activeRoom].name}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold disabled:opacity-50"
                  >
                    -
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 2}
                    className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold disabled:opacity-50"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold"
                  >
                    {isPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Image Viewer */}
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={tourRooms[activeRoom].image}
                  alt={tourRooms[activeRoom].name}
                  className="w-full h-full object-cover"
                  style={{ scale: zoomLevel }}
                  animate={{ scale: zoomLevel }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Interactive Hotspots */}
                <div className="absolute inset-0">
                  {tourRooms[activeRoom].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute w-6 h-6 bg-metallic-gold rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${30 + (index * 10)}%`
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-2 h-2 bg-royal-maroon rounded-full"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Zoom Level Indicator */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-royal-maroon mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {tourRooms[activeRoom].features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-charcoal"
                        >
                          <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-royal-maroon mb-3">Room Info:</h4>
                    <div className="space-y-2 text-charcoal">
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold">{tourRooms[activeRoom].capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Setting:</span>
                        <span className="font-semibold">{activeRoom.split('-').join(' ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Best For:</span>
                        <span className="font-semibold text-right">
                          {activeRoom === 'main-dining' && 'Large Gatherings'}
                          {activeRoom === 'private-dining' && 'Special Events'}
                          {activeRoom === 'lounge-area' && 'Casual Meetings'}
                          {activeRoom === 'outdoor-terrace' && 'Romantic Dinners'}
                          {activeRoom === 'chef-table' && 'Culinary Experiences'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  <button className="bg-royal-maroon text-metallic-gold px-8 py-3 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors">
                    Book This Space
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-tour Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-80 rounded-full px-6 py-3 shadow-lg">
            <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-charcoal">
              {isPlaying ? 'Auto-tour enabled' : 'Click play for auto-tour'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTour;