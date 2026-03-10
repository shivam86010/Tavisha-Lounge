// // import React, { useState , useEffect} from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FiCompass, FiZoomIn, FiPlay, FiPause } from 'react-icons/fi';


// // const GalleryPage = () => {
// // const [activeRoom, setActiveRoom] = useState('main-dining');
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [zoomLevel, setZoomLevel] = useState(1);

// //   const tourRooms = {
// //     'main-dining': {
// //       name: 'Main Dining Hall',
// //       description: 'Experience the grandeur of our primary dining space with royal decor and elegant seating',
// //       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
// //       features: ['Royal Throne Seating', 'Golden Chandeliers', 'Traditional Artwork'],
// //       capacity: '80 guests'
// //     },
// //     'private-dining': {
// //       name: 'Private Dining Room',
// //       description: 'Intimate space for special celebrations and business meetings',
// //       image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
// //       features: ['Exclusive Service', 'Customized Menus', 'Sound System'],
// //       capacity: '20 guests'
// //     },
// //     'lounge-area': {
// //       name: 'Lounge & Bar',
// //       description: 'Relaxed atmosphere perfect for pre-dinner drinks and casual gatherings',
// //       image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
// //       features: ['Signature Cocktails', 'Comfort Seating', 'Live Music Corner'],
// //       capacity: '40 guests'
// //     },
// //     'outdoor-terrace': {
// //       name: 'Outdoor Terrace',
// //       description: 'Al fresco dining with beautiful views and natural ambiance',
// //       image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
// //       features: ['Garden Views', 'Weather Protection', 'Evening Lighting'],
// //       capacity: '50 guests'
// //     },
// //     'chef-table': {
// //       name: "Chef's Table",
// //       description: 'Exclusive culinary experience with direct view of kitchen operations',
// //       image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
// //       features: ['Kitchen View', 'Chef Interaction', 'Tasting Menus'],
// //       capacity: '8 guests'
// //     }
// //   };

// //   const handleZoomIn = () => {
// //     setZoomLevel(prev => Math.min(prev + 0.25, 2));
// //   };

// //   const handleZoomOut = () => {
// //     setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
// //   };

// //     const [currentSeason, setCurrentSeason] = useState('spring');
// //     const [isTransitioning, setIsTransitioning] = useState(false);
  
// //     const seasons = {
// //       spring: {
// //         name: 'Spring Blossoms',
// //         color: 'from-green-400 to-pink-400',
// //         icon: '🌸',
// //         description: 'Fresh beginnings and floral arrangements',
// //         images: [
// //           "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
// //           "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
// //         ]
// //       },
// //       summer: {
// //         name: 'Summer Coolers',
// //         color: 'from-yellow-400 to-orange-400',
// //         icon: '☀️',
// //         description: 'Refreshing ambiance and vibrant energy',
// //         images: [
// //           "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
// //           "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
// //         ]
// //       },
// //       monsoon: {
// //         name: 'Monsoon Magic',
// //         color: 'from-blue-400 to-purple-400',
// //         icon: '🌧️',
// //         description: 'Cozy interiors and warm beverages',
// //         images: [
// //           "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
// //           "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
// //         ]
// //       },
// //       winter: {
// //         name: 'Winter Warmth',
// //         color: 'from-gray-400 to-blue-200',
// //         icon: '⛄',
// //         description: 'Warm lighting and comforting cuisine',
// //         images: [
// //           "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
// //           "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
// //         ]
// //       }
// //     };
  
// //     const handleSeasonChange = (season) => {
// //       setIsTransitioning(true);
// //       setTimeout(() => {
// //         setCurrentSeason(season);
// //         setIsTransitioning(false);
// //       }, 500);
// //     };
  
// //     // Auto-rotate seasons
// //     useEffect(() => {
// //       const interval = setInterval(() => {
// //         const seasonKeys = Object.keys(seasons);
// //         const currentIndex = seasonKeys.indexOf(currentSeason);
// //         const nextIndex = (currentIndex + 1) % seasonKeys.length;
// //         handleSeasonChange(seasonKeys[nextIndex]);
// //       }, 8000);
  
// //       return () => clearInterval(interval);
// //     }, [currentSeason]);
  
  

// //   return (
// //     <>
      
// //       <section className="relative h-screen flex items-center justify-center overflow-hidden">
// //       {/* Background Image - Restaurant ambiance */}
// //       <img 
// //         src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
// //         alt="Tavisha Lounge Interior"
// //         className="absolute inset-0 w-full h-full object-cover"
// //         loading='lazy'
// //       />
      
// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-royal-maroon opacity-60"></div>
      
// //       {/* Content */}
// //       <motion.div 
// //         className="relative z-10 text-center text-metallic-gold px-4"
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 1.2, ease: "easeOut" }}
// //       >
// //         <motion.h1 
// //           className="text-5xl md:text-7xl font-serif font-bold mb-6"
// //           initial={{ y: 50, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.3, duration: 0.8 }}
// //         >
// //           Experience the Royal Vibe
// //         </motion.h1>
// //         <motion.p 
// //           className="text-xl md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed"
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.6, duration: 0.8 }}
// //         >
// //           Every corner of Tavisha Lounge is designed with heart — from our food to our ambiance.
// //         </motion.p>
// //       </motion.div>
// //     </section>
      
// //  <section className="py-20 bg-gradient-to-br from-soft-cream to-metallic-gold/10">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-12"
// //         >
// //           <div className="flex items-center justify-center space-x-3 mb-6">
// //             <FiCompass className="w-8 h-8 text-royal-maroon" />
// //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon">
// //               Virtual Tour
// //             </h2>
// //           </div>
// //           <p className="text-xl text-charcoal max-w-2xl mx-auto">
// //             Explore Tavisha Lounge from the comfort of your home
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* Room Selector */}
// //           <div className="space-y-4">
// //             <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4">
// //               Explore Spaces
// //             </h3>
// //             {Object.entries(tourRooms).map(([key, room]) => (
// //               <motion.button
// //                 key={key}
// //                 onClick={() => setActiveRoom(key)}
// //                 className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
// //                   activeRoom === key
// //                     ? 'bg-royal-maroon text-metallic-gold shadow-lg'
// //                     : 'bg-white text-charcoal hover:bg-gray-50 shadow-md'
// //                 }`}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //               >
// //                 <h4 className="font-semibold text-lg mb-1">{room.name}</h4>
// //                 <p className="text-sm opacity-80 line-clamp-2">{room.description}</p>
// //               </motion.button>
// //             ))}
// //           </div>

// //           {/* Main Tour Viewer */}
// //           <div className="lg:col-span-2">
// //             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
// //               {/* Viewer Header */}
// //               <div className="bg-royal-maroon p-4 flex justify-between items-center">
// //                 <h3 className="text-metallic-gold font-semibold text-lg">
// //                   {tourRooms[activeRoom].name}
// //                 </h3>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={handleZoomOut}
// //                     disabled={zoomLevel <= 0.5}
// //                     className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold disabled:opacity-50"
// //                   >
// //                     -
// //                   </button>
// //                   <button
// //                     onClick={handleZoomIn}
// //                     disabled={zoomLevel >= 2}
// //                     className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold disabled:opacity-50"
// //                   >
// //                     +
// //                   </button>
// //                   <button
// //                     onClick={() => setIsPlaying(!isPlaying)}
// //                     className="w-8 h-8 bg-metallic-gold bg-opacity-20 rounded flex items-center justify-center text-metallic-gold"
// //                   >
// //                     {isPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Image Viewer */}
// //               <div className="relative h-96 overflow-hidden">
// //                 <motion.img
// //                   src={tourRooms[activeRoom].image}
// //                   alt={tourRooms[activeRoom].name}
// //                   className="w-full h-full object-cover"
// //                   style={{ scale: zoomLevel }}
// //                   animate={{ scale: zoomLevel }}
// //                   transition={{ duration: 0.3 }}
// //                 />
                
// //                 {/* Interactive Hotspots */}
// //                 <div className="absolute inset-0">
// //                   {tourRooms[activeRoom].features.map((feature, index) => (
// //                     <motion.div
// //                       key={feature}
// //                       initial={{ scale: 0 }}
// //                       animate={{ scale: 1 }}
// //                       transition={{ delay: index * 0.1 }}
// //                       className="absolute w-6 h-6 bg-metallic-gold rounded-full flex items-center justify-center cursor-pointer shadow-lg"
// //                       style={{
// //                         top: `${20 + (index * 15)}%`,
// //                         left: `${30 + (index * 10)}%`
// //                       }}
// //                       whileHover={{ scale: 1.2 }}
// //                     >
// //                       <div className="w-2 h-2 bg-royal-maroon rounded-full"></div>
// //                     </motion.div>
// //                   ))}
// //                 </div>

// //                 {/* Zoom Level Indicator */}
// //                 <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
// //                   {Math.round(zoomLevel * 100)}%
// //                 </div>
// //               </div>

// //               {/* Room Details */}
// //               <div className="p-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <h4 className="font-semibold text-royal-maroon mb-3">Features:</h4>
// //                     <ul className="space-y-2">
// //                       {tourRooms[activeRoom].features.map((feature, index) => (
// //                         <motion.li
// //                           key={feature}
// //                           initial={{ opacity: 0, x: -20 }}
// //                           animate={{ opacity: 1, x: 0 }}
// //                           transition={{ delay: index * 0.1 }}
// //                           className="flex items-center space-x-2 text-charcoal"
// //                         >
// //                           <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
// //                           <span>{feature}</span>
// //                         </motion.li>
// //                       ))}
// //                     </ul>
// //                   </div>
                  
// //                   <div>
// //                     <h4 className="font-semibold text-royal-maroon mb-3">Room Info:</h4>
// //                     <div className="space-y-2 text-charcoal">
// //                       <div className="flex justify-between">
// //                         <span>Capacity:</span>
// //                         <span className="font-semibold">{tourRooms[activeRoom].capacity}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Setting:</span>
// //                         <span className="font-semibold">{activeRoom.split('-').join(' ')}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Best For:</span>
// //                         <span className="font-semibold text-right">
// //                           {activeRoom === 'main-dining' && 'Large Gatherings'}
// //                           {activeRoom === 'private-dining' && 'Special Events'}
// //                           {activeRoom === 'lounge-area' && 'Casual Meetings'}
// //                           {activeRoom === 'outdoor-terrace' && 'Romantic Dinners'}
// //                           {activeRoom === 'chef-table' && 'Culinary Experiences'}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* CTA */}
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.5 }}
// //                   className="mt-6 text-center"
// //                 >
// //                   <button className="bg-royal-maroon text-metallic-gold px-8 py-3 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors">
// //                     Book This Space
// //                   </button>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Auto-tour Indicator */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 1 }}
// //           className="text-center mt-8"
// //         >
// //           <div className="inline-flex items-center space-x-2 bg-white bg-opacity-80 rounded-full px-6 py-3 shadow-lg">
// //             <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'}`}></div>
// //             <span className="text-sm text-charcoal">
// //               {isPlaying ? 'Auto-tour enabled' : 'Click play for auto-tour'}
// //             </span>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>

// //       <section className="py-20 bg-gradient-to-br from-soft-cream to-charcoal/10">
// //             <div className="max-w-7xl mx-auto px-4">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8 }}
// //                 className="text-center mb-12"
// //               >
// //                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
// //                   Seasonal Transformations
// //                 </h2>
// //                 <p className="text-xl text-charcoal max-w-2xl mx-auto">
// //                   Experience how Tavisha Lounge transforms with the rhythm of nature
// //                 </p>
// //               </motion.div>
      
// //               {/* Season Selector */}
// //               <div className="flex justify-center mb-12">
// //                 <div className="bg-white rounded-2xl p-2 shadow-lg">
// //                   <div className="flex flex-wrap justify-center gap-2">
// //                     {Object.entries(seasons).map(([key, season]) => (
// //                       <motion.button
// //                         key={key}
// //                         onClick={() => handleSeasonChange(key)}
// //                         className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
// //                           currentSeason === key
// //                             ? `bg-gradient-to-r ${season.color} text-white shadow-lg`
// //                             : 'bg-gray-100 text-charcoal hover:bg-gray-200'
// //                         }`}
// //                         whileHover={{ scale: 1.05 }}
// //                         whileTap={{ scale: 0.95 }}
// //                       >
// //                         <span className="text-xl">{season.icon}</span>
// //                         <span>{season.name}</span>
// //                       </motion.button>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
      
// //               {/* Seasonal Display */}
// //               <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
// //                 <AnimatePresence mode="wait">
// //                   {!isTransitioning && (
// //                     <motion.div
// //                       key={currentSeason}
// //                       initial={{ opacity: 0 }}
// //                       animate={{ opacity: 1 }}
// //                       exit={{ opacity: 0 }}
// //                       transition={{ duration: 0.8 }}
// //                       className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
// //                     >
// //                       {/* Background Images */}
// //                       <div className="absolute inset-0">
// //                         <div className="grid grid-cols-2 h-full">
// //                           {seasons[currentSeason].images.map((image, index) => (
// //                             <motion.div
// //                               key={index}
// //                               initial={{ scale: 1.1 }}
// //                               animate={{ scale: 1 }}
// //                               transition={{ duration: 1.5 }}
// //                               className="relative"
// //                             >
// //                               <img
// //                                 src={image}
// //                                 alt={`${seasons[currentSeason].name} ${index + 1}`}
// //                                 className="w-full h-full object-cover"
// //                               />
// //                               <div className="absolute inset-0 bg-black bg-opacity-30" />
// //                             </motion.div>
// //                           ))}
// //                         </div>
// //                       </div>
      
// //                       {/* Content Overlay */}
// //                       <div className="absolute inset-0 flex items-center justify-center">
// //                         <motion.div
// //                           initial={{ y: 50, opacity: 0 }}
// //                           animate={{ y: 0, opacity: 1 }}
// //                           transition={{ duration: 0.8, delay: 0.3 }}
// //                           className="text-center text-white p-8"
// //                         >
// //                           <motion.div
// //                             initial={{ scale: 0 }}
// //                             animate={{ scale: 1 }}
// //                             transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
// //                             className="text-6xl mb-4"
// //                           >
// //                             {seasons[currentSeason].icon}
// //                           </motion.div>
// //                           <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">
// //                             {seasons[currentSeason].name}
// //                           </h3>
// //                           <p className="text-xl md:text-2xl max-w-2xl mx-auto">
// //                             {seasons[currentSeason].description}
// //                           </p>
// //                         </motion.div>
// //                       </div>
      
// //                       {/* Seasonal Specials */}
// //                       <motion.div
// //                         initial={{ x: -100, opacity: 0 }}
// //                         animate={{ x: 0, opacity: 1 }}
// //                         transition={{ duration: 0.8, delay: 0.7 }}
// //                         className="absolute bottom-6 left-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 text-white"
// //                       >
// //                         <h4 className="font-semibold mb-2">Seasonal Specials:</h4>
// //                         <ul className="text-sm space-y-1">
// //                           <li>• Special themed menu</li>
// //                           <li>• Seasonal decorations</li>
// //                           <li>• Exclusive beverages</li>
// //                         </ul>
// //                       </motion.div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
      
// //               {/* Season Details Grid */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: 0.5 }}
// //                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
// //               >
// //                 {Object.entries(seasons).map(([key, season]) => (
// //                   <motion.div
// //                     key={key}
// //                     whileHover={{ scale: 1.05, y: -5 }}
// //                     className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
// //                       currentSeason === key ? 'border-metallic-gold' : 'border-transparent'
// //                     }`}
// //                     onClick={() => handleSeasonChange(key)}
// //                   >
// //                     <div className="text-4xl mb-3">{season.icon}</div>
// //                     <h4 className="font-semibold text-charcoal mb-2">{season.name}</h4>
// //                     <p className="text-sm text-gray-600">{season.description}</p>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>
// //             </div>
// //           </section>
    

// //     </>
// //   );
// // };

// // export default GalleryPage;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiCompass, FiZoomIn, FiPlay, FiPause, FiChevronRight, 
//   FiStar, FiUsers, FiCalendar, FiMapPin, FiCamera,
//   FiMaximize2, FiMinimize2, FiRotateCw, FiHeart,
//   FiSun, FiCloud, FiMoon, FiWind
// } from 'react-icons/fi';
// import { GiCrown, GiChampagneCork, GiCandles, GiWineGlass } from 'react-icons/gi';

// const GalleryPage = () => {
//   const [activeRoom, setActiveRoom] = useState('main-dining');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showFeature, setShowFeature] = useState(null);
//   const [currentSeason, setCurrentSeason] = useState('spring');
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState({});

//   const tourRooms = {
//     'main-dining': {
//       name: 'The Grand Salon',
//       subtitle: 'Royal Dining Experience',
//       description: 'Step into opulence with our magnificent main dining hall, where every detail speaks of royalty and refinement.',
//       longDescription: 'Adorned with crystal chandeliers and hand-carved wooden panels, this space transforms every meal into a celebration of luxury. The warm amber lighting creates an intimate atmosphere while the vaulted ceilings add grandeur to your dining experience.',
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       gallery: [
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ],
//       features: ['Royal Throne Seating', 'Crystal Chandeliers', 'Ornate Ceilings', 'Private Butler Service'],
//       capacity: '80 guests',
//       ambience: 'Formal Elegant',
//       bestFor: 'Wedding Receptions, Gala Dinners',
//       icon: <GiCrown className="w-6 h-6" />
//     },
//     'private-dining': {
//       name: 'The Amber Room',
//       subtitle: 'Intimate Luxury',
//       description: 'An exclusive enclave for discerning guests seeking privacy without compromising on grandeur.',
//       longDescription: 'Wrapped in warm amber tones and plush velvet, this intimate space features a private fireplace and curated art collection. Perfect for celebrations that demand exclusivity and personalized attention.',
//       image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//       gallery: [
//         "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//         "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1617098474202-0d0d7f60c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ],
//       features: ['Private Fireplace', 'Wine Cellar Access', 'Personal Chef', 'Dedicated Sommelier'],
//       capacity: '20 guests',
//       ambience: 'Intimate Cozy',
//       bestFor: 'Business Dinners, Anniversary Celebrations',
//       icon: <GiChampagneCork className="w-6 h-6" />
//     },
//     'lounge-area': {
//       name: 'The Velvet Lounge',
//       subtitle: 'Artful Sophistication',
//       description: 'Where mixology meets artistry in a setting that whispers luxury at every turn.',
//       longDescription: 'Sink into plush velvet seating while master mixologists craft signature cocktails. The lounge features a 24-karat gold leaf bar and live acoustic performances in an acoustically perfected space.',
//       image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//       gallery: [
//         "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//         "https://images.unsplash.com/photo-1572111509797-5e9a2e8c40b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ],
//       features: ['Gold Leaf Bar', 'Live Acoustic Stage', 'Signature Cocktails', 'Cigar Lounge'],
//       capacity: '40 guests',
//       ambience: 'Sophisticated Casual',
//       bestFor: 'Cocktail Parties, Networking Events',
//       icon: <GiWineGlass className="w-6 h-6" />
//     },
//     'outdoor-terrace': {
//       name: 'The Sky Terrace',
//       subtitle: 'Al Fresco Grandeur',
//       description: 'Dine under the stars in our rooftop paradise with panoramic city views.',
//       longDescription: 'Surrounded by lush greenery and twinkling fairy lights, this open-air terrace offers retractable glass roof for year-round comfort. Heated flooring and misting systems ensure perfect ambiance in any weather.',
//       image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       gallery: [
//         "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ],
//       features: ['Infinity Edge', 'Fire Pits', 'Heated Flooring', 'Retractable Roof'],
//       capacity: '50 guests',
//       ambience: 'Romantic Open-air',
//       bestFor: 'Sunset Dinners, Garden Parties',
//       icon: <GiCandles className="w-6 h-6" />
//     },
//     'chef-table': {
//       name: "The Culinary Theater",
//       subtitle: 'Epicurean Journey',
//       description: 'Witness culinary magic unfold in this exclusive chef\'s table experience.',
//       longDescription: 'Positioned at the heart of our kitchen, this marble counter seats you front-row to culinary artistry. Interact with our executive chef while enjoying personalized tasting menus paired with rare vintages.',
//       image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
//       gallery: [
//         "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
//         "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ],
//       features: ['Chef Interaction', 'Custom Menus', 'Wine Pairing', 'Kitchen Tour'],
//       capacity: '8 guests',
//       ambience: 'Interactive Exclusive',
//       bestFor: 'Food Enthusiasts, Special Occasions',
//       icon: <GiCrown className="w-6 h-6" />
//     }
//   };

//   const seasons = {
//     spring: {
//       name: 'Spring Blossom',
//       color: 'from-emerald-400 via-rose-300 to-amber-200',
//       icon: <FiSun className="w-8 h-8" />,
//       description: 'Where romance blooms with every petal',
//       details: 'Cherry blossom arrangements • Spring tasting menu • Rosé selections',
//       images: [
//         "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ]
//     },
//     summer: {
//       name: 'Summer Radiance',
//       color: 'from-amber-400 via-orange-400 to-rose-400',
//       icon: <FiCloud className="w-8 h-8" />,
//       description: 'Golden days and luminous nights',
//       details: 'Citrus infusions • Coastal inspired decor • Chilled delicacies',
//       images: [
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//       ]
//     },
//     monsoon: {
//       name: 'Monsoon Mystique',
//       color: 'from-slate-700 via-blue-800 to-purple-700',
//       icon: <FiCloud className="w-8 h-8" />,
//       description: 'Dramatic skies, intimate vibes',
//       details: 'Truffle specialties • Rain-inspired cocktails • Cozy corners',
//       images: [
//         "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
//       ]
//     },
//     winter: {
//       name: 'Winter Opulence',
//       color: 'from-slate-300 via-blue-200 to-amber-100',
//       icon: <FiMoon className="w-8 h-8" />,
//       description: 'Where warmth meets winter magic',
//       details: 'Fireplace settings • Winter truffles • Mulled wine bar',
//       images: [
//         "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//         "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
//       ]
//     }
//   };

//   const handleZoomIn = () => {
//     setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
//   };

//   const handleZoomOut = () => {
//     setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
//   };

//   const handleSeasonChange = (season) => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentSeason(season);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   const toggleLike = (roomId) => {
//     setIsLiked(prev => ({ ...prev, [roomId]: !prev[roomId] }));
//   };

//   // Auto-rotate seasons
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const seasonKeys = Object.keys(seasons);
//       const currentIndex = seasonKeys.indexOf(currentSeason);
//       const nextIndex = (currentIndex + 1) % seasonKeys.length;
//       handleSeasonChange(seasonKeys[nextIndex]);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [currentSeason]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-amber-50/30">
//       {/* Hero Section - Enhanced Luxury */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background with Parallax */}
//         <motion.div 
//           className="absolute inset-0"
//           animate={{ scale: 1.1 }}
//           transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
//             alt="Tavisha Lounge Interior"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
        
//         {/* Luxury Overlay with Pattern */}
//         <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/90 via-royal-maroon/50 to-transparent"></div>
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }}></div>
        
//         {/* Animated Content */}
//         <motion.div 
//           className="relative z-10 text-center px-4 max-w-5xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
//             className="flex justify-center mb-8"
//           >
//             <div className="w-24 h-24 bg-metallic-gold/20 rounded-full backdrop-blur-sm flex items-center justify-center border-2 border-metallic-gold">
//               <GiCrown className="w-12 h-12 text-metallic-gold" />
//             </div>
//           </motion.div>
          
//           <motion.h1 
//             className="text-6xl md:text-8xl font-serif font-bold text-metallic-gold mb-6 tracking-wide"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             Royal Vibe
//           </motion.h1>
          
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "180px" }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="h-0.5 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto mb-8"
//           />
          
//           <motion.p 
//             className="text-xl md:text-2xl text-soft-cream max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             Where every corner tells a story of luxury, every detail whispers elegance
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.3 }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//           >
//             <div className="animate-bounce">
//               <FiChevronRight className="w-8 h-8 text-metallic-gold rotate-90" />
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Virtual Tour Section - Premium Design */}
//       <section className="py-24 px-4 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-metallic-gold/5 to-transparent"></div>
        
//         <div className="max-w-7xl mx-auto relative">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <span className="text-metallic-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
//               Explore Our Spaces
//             </span>
//             <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-maroon mb-6">
//               Virtual Grand Tour
//             </h2>
//             <div className="w-24 h-0.5 bg-gradient-to-r from-royal-maroon via-metallic-gold to-royal-maroon mx-auto"></div>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Room Selector - Luxury Cards */}
//             <div className="lg:col-span-4 space-y-4">
//               {Object.entries(tourRooms).map(([key, room]) => (
//                 <motion.button
//                   key={key}
//                   onClick={() => setActiveRoom(key)}
//                   className={`w-full relative overflow-hidden rounded-2xl transition-all duration-500 ${
//                     activeRoom === key
//                       ? 'bg-gradient-to-r from-royal-maroon to-royal-maroon/90 shadow-2xl scale-105'
//                       : 'bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg'
//                   }`}
//                   whileHover={{ x: 10 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="p-6 flex items-center space-x-4">
//                     <div className={`p-3 rounded-xl ${
//                       activeRoom === key ? 'bg-metallic-gold/20' : 'bg-royal-maroon/10'
//                     }`}>
//                       {room.icon}
//                     </div>
//                     <div className="flex-1 text-left">
//                       <h3 className={`font-serif font-bold text-lg ${
//                         activeRoom === key ? 'text-metallic-gold' : 'text-royal-maroon'
//                       }`}>
//                         {room.name}
//                       </h3>
//                       <p className={`text-sm ${
//                         activeRoom === key ? 'text-soft-cream/80' : 'text-charcoal/60'
//                       }`}>
//                         {room.subtitle}
//                       </p>
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleLike(key);
//                       }}
//                       className="p-2"
//                     >
//                       <FiHeart className={`w-5 h-5 ${
//                         isLiked[key] ? 'fill-red-500 text-red-500' : 'text-gray-400'
//                       }`} />
//                     </button>
//                   </div>
                  
//                   {activeRoom === key && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="absolute left-0 top-0 h-full w-1 bg-metallic-gold"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Main Viewer - Premium Display */}
//             <div className="lg:col-span-8">
//               <motion.div
//                 key={activeRoom}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-metallic-gold/20"
//               >
//                 {/* Viewer Header with Gold Accents */}
//                 <div className="bg-gradient-to-r from-royal-maroon to-royal-maroon/90 p-6">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="text-metallic-gold font-serif text-2xl font-bold mb-1">
//                         {tourRooms[activeRoom].name}
//                       </h3>
//                       <p className="text-soft-cream/80 text-sm">
//                         {tourRooms[activeRoom].subtitle}
//                       </p>
//                     </div>
                    
//                     <div className="flex space-x-3">
//                       <button
//                         onClick={handleZoomOut}
//                         disabled={zoomLevel <= 0.5}
//                         className="w-10 h-10 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all disabled:opacity-30"
//                       >
//                         <FiMinimize2 className="w-5 h-5" />
//                       </button>
//                       <button
//                         onClick={handleZoomIn}
//                         disabled={zoomLevel >= 2.5}
//                         className="w-10 h-10 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all disabled:opacity-30"
//                       >
//                         <FiMaximize2 className="w-5 h-5" />
//                       </button>
//                       <button
//                         onClick={() => setIsPlaying(!isPlaying)}
//                         className="w-10 h-10 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all"
//                       >
//                         {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Image Viewer with Interactive Elements */}
//                 <div className="relative h-[500px] overflow-hidden group">
//                   <motion.img
//                     src={tourRooms[activeRoom].gallery[activeImageIndex]}
//                     alt={tourRooms[activeRoom].name}
//                     className="w-full h-full object-cover"
//                     style={{ scale: zoomLevel }}
//                     animate={{ scale: zoomLevel }}
//                     transition={{ duration: 0.3 }}
//                   />
                  
//                   {/* Gallery Navigation */}
//                   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     {tourRooms[activeRoom].gallery.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setActiveImageIndex(index)}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           activeImageIndex === index 
//                             ? 'w-8 bg-metallic-gold' 
//                             : 'bg-white/50 hover:bg-white'
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* Luxury Hotspots */}
//                   {tourRooms[activeRoom].features.map((feature, index) => (
//                     <motion.div
//                       key={feature}
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="absolute"
//                       style={{
//                         top: `${20 + (index * 12)}%`,
//                         left: `${30 + (index * 8)}%`
//                       }}
//                     >
//                       <div 
//                         className="relative group/hotspot"
//                         onMouseEnter={() => setShowFeature(feature)}
//                         onMouseLeave={() => setShowFeature(null)}
//                       >
//                         <div className="w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center cursor-pointer shadow-xl animate-pulse">
//                           <div className="w-3 h-3 bg-royal-maroon rounded-full"></div>
//                         </div>
                        
//                         <AnimatePresence>
//                           {showFeature === feature && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: 10 }}
//                               className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-royal-maroon text-metallic-gold px-4 py-2 rounded-xl text-sm shadow-xl"
//                             >
//                               {feature}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   ))}

//                   {/* Zoom Indicator */}
//                   <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
//                     {Math.round(zoomLevel * 100)}% View
//                   </div>
//                 </div>

//                 {/* Room Details - Premium Info */}
//                 <div className="p-8">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Description */}
//                     <div className="md:col-span-2">
//                       <h4 className="font-serif text-royal-maroon text-lg mb-3 flex items-center">
//                         <FiStar className="w-5 h-5 text-metallic-gold mr-2" />
//                         The Experience
//                       </h4>
//                       <p className="text-charcoal/80 leading-relaxed">
//                         {tourRooms[activeRoom].longDescription}
//                       </p>
                      
//                       <div className="mt-6 grid grid-cols-2 gap-4">
//                         {tourRooms[activeRoom].features.map((feature) => (
//                           <div key={feature} className="flex items-center space-x-2">
//                             <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
//                             <span className="text-sm text-charcoal/70">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Details Card */}
//                     <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 border border-metallic-gold/20">
//                       <h4 className="font-serif text-royal-maroon text-lg mb-4">Details</h4>
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center pb-2 border-b border-metallic-gold/20">
//                           <span className="text-charcoal/60">Capacity</span>
//                           <span className="font-semibold text-royal-maroon">{tourRooms[activeRoom].capacity}</span>
//                         </div>
//                         <div className="flex justify-between items-center pb-2 border-b border-metallic-gold/20">
//                           <span className="text-charcoal/60">Ambience</span>
//                           <span className="font-semibold text-royal-maroon">{tourRooms[activeRoom].ambience}</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-charcoal/60">Best For</span>
//                           <span className="font-semibold text-royal-maroon text-right">{tourRooms[activeRoom].bestFor}</span>
//                         </div>
//                       </div>

//                       {/* CTA Button */}
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="w-full mt-6 bg-gradient-to-r from-royal-maroon to-royal-maroon/90 text-metallic-gold py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
//                       >
//                         <span>Inquire About This Space</span>
//                         <FiChevronRight className="w-4 h-4" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Seasonal Transformations - Enhanced Luxury */}
//       <section className="py-24 px-4 relative">
//         <div className="absolute inset-0 bg-gradient-to-b from-royal-maroon/5 to-metallic-gold/5"></div>
        
//         <div className="max-w-7xl mx-auto relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <span className="text-metallic-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
//               Nature's Palette
//             </span>
//             <h2 className="text-5xl md:text-6xl font-serif font-bold text-royal-maroon mb-6">
//               Seasonal Poetry
//             </h2>
//             <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
//               Watch our spaces transform with the rhythm of seasons, each bringing its own magic
//             </p>
//           </motion.div>

//           {/* Season Selector - Luxury Tabs */}
//           <div className="flex justify-center mb-12">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-metallic-gold/20">
//               <div className="flex flex-wrap justify-center gap-2">
//                 {Object.entries(seasons).map(([key, season]) => (
//                   <motion.button
//                     key={key}
//                     onClick={() => handleSeasonChange(key)}
//                     className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
//                       currentSeason === key
//                         ? 'text-white'
//                         : 'text-charcoal/60 hover:text-royal-maroon'
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {currentSeason === key && (
//                       <motion.div
//                         layoutId="seasonBackground"
//                         className={`absolute inset-0 bg-gradient-to-r ${season.color}`}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                     <span className="relative z-10 flex items-center space-x-2">
//                       <span className="text-xl">{season.icon}</span>
//                       <span>{season.name}</span>
//                     </span>
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Seasonal Display - Premium Showcase */}
//           <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-metallic-gold/20">
//             <AnimatePresence mode="wait">
//               {!isTransitioning && (
//                 <motion.div
//                   key={currentSeason}
//                   initial={{ opacity: 0, scale: 1.1 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 1 }}
//                   className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
//                 >
//                   {/* Image Gallery */}
//                   <div className="absolute inset-0 grid grid-cols-2">
//                     {seasons[currentSeason].images.map((image, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ scale: 1.2 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 2 }}
//                         className="relative overflow-hidden"
//                       >
//                         <img
//                           src={image}
//                           alt={`${seasons[currentSeason].name} ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Content Overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <motion.div
//                       initial={{ y: 50, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 0.8, delay: 0.5 }}
//                       className="text-center text-white p-8 max-w-3xl"
//                     >
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
//                         className="text-7xl mb-6 flex justify-center"
//                       >
//                         {seasons[currentSeason].icon}
//                       </motion.div>
                      
//                       <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
//                         {seasons[currentSeason].name}
//                       </h3>
                      
//                       <p className="text-2xl mb-6 font-light drop-shadow-lg">
//                         {seasons[currentSeason].description}
//                       </p>
                      
//                       <div className="w-24 h-0.5 bg-metallic-gold mx-auto mb-6"></div>
                      
//                       <p className="text-lg text-white/90 drop-shadow-lg">
//                         {seasons[currentSeason].details}
//                       </p>
//                     </motion.div>
//                   </div>

//                   {/* Seasonal Specials Card */}
//                   <motion.div
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white border border-white/30 max-w-xs"
//                   >
//                     <h4 className="font-serif text-xl mb-3 flex items-center">
//                       <FiStar className="w-5 h-5 mr-2 text-metallic-gold" />
//                       Seasonal Highlights
//                     </h4>
//                     <ul className="space-y-2 text-sm">
//                       <li className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
//                         Curated seasonal menu
//                       </li>
//                       <li className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
//                         Themed decorations
//                       </li>
//                       <li className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
//                         Exclusive cocktail pairings
//                       </li>
//                     </ul>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Season Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
//           >
//             {Object.entries(seasons).map(([key, season]) => (
//               <motion.div
//                 key={key}
//                 whileHover={{ y: -10 }}
//                 className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl ${
//                   currentSeason === key ? 'ring-2 ring-metallic-gold' : ''
//                 }`}
//                 onClick={() => handleSeasonChange(key)}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-90`}></div>
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
//                 <div className="relative p-6 text-white">
//                   <div className="text-4xl mb-3">{season.icon}</div>
//                   <h4 className="font-serif text-xl font-bold mb-2">{season.name}</h4>
//                   <p className="text-sm text-white/80 line-clamp-2">{season.description}</p>
                  
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "40px" }}
//                     className="h-0.5 bg-metallic-gold mt-4"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Floating Action Button - Premium Experience */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 2, type: "spring" }}
//         className="fixed bottom-8 right-8 bg-gradient-to-r from-royal-maroon to-royal-maroon/90 text-metallic-gold p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FiCamera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
//         <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-royal-maroon text-metallic-gold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           Book a Private Tour
//         </span>
//       </motion.button>
//     </div>
//   );
// };

// export default GalleryPage;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause,
  Heart, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Camera,
  Compass, 
  Eye, 
  Bookmark,
  Crown,
  Sparkles,
  Wine,
  Utensils,
  Sun,
  Cloud,
  Moon,
  Wind,
  Diamond,
  PartyPopper,
  ChefHat,
  Flame,
  Leaf,
  Snowflake
} from 'lucide-react';

const GalleryPage = () => {
  const [activeRoom, setActiveRoom] = useState('main-dining');
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const [showFeature, setShowFeature] = useState(null);
  const [isHoveringRoom, setIsHoveringRoom] = useState(null);
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const seasons = {
    spring: {
      name: 'Spring Blossom',
      color: 'from-emerald-400 via-rose-300 to-amber-200',
      icon: <Leaf className="w-8 h-8" />,
      description: 'Where romance blooms with every petal',
      details: 'Cherry blossom arrangements • Spring tasting menu • Rosé selections',
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    summer: {
      name: 'Summer Radiance',
      color: 'from-amber-400 via-orange-400 to-rose-400',
      icon: <Sun className="w-8 h-8" />,
      description: 'Golden days and luminous nights',
      details: 'Citrus infusions • Coastal inspired decor • Chilled delicacies',
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    monsoon: {
      name: 'Monsoon Mystique',
      color: 'from-slate-700 via-blue-800 to-purple-700',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Dramatic skies, intimate vibes',
      details: 'Truffle specialties • Rain-inspired cocktails • Cozy corners',
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    },
    winter: {
      name: 'Winter Opulence',
      color: 'from-slate-300 via-blue-200 to-amber-100',
      icon: <Snowflake className="w-8 h-8" />,
      description: 'Where warmth meets winter magic',
      details: 'Fireplace settings • Winter truffles • Mulled wine bar',
      images: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    }
  };

  const tourRooms = {
    'main-dining': {
      name: 'The Grand Salon',
      subtitle: 'Royal Dining Experience',
      description: 'Step into opulence with our magnificent main dining hall.',
      longDescription: 'Adorned with crystal chandeliers and hand-carved wooden panels, this space transforms every meal into a celebration of luxury.',
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Royal Throne Seating', 'Crystal Chandeliers', 'Ornate Ceilings', 'Private Butler Service'],
      capacity: '80 guests',
      ambience: 'Formal Elegant',
      bestFor: 'Wedding Receptions, Gala Dinners',
      icon: <Crown className="w-6 h-6" />
    },
    'private-dining': {
      name: 'The Amber Room',
      subtitle: 'Intimate Luxury',
      description: 'An exclusive enclave for discerning guests.',
      longDescription: 'Wrapped in warm amber tones and plush velvet, this intimate space features a private fireplace.',
      image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1617098474202-0d0d7f60c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Private Fireplace', 'Wine Cellar Access', 'Personal Chef', 'Dedicated Sommelier'],
      capacity: '20 guests',
      ambience: 'Intimate Cozy',
      bestFor: 'Business Dinners, Anniversary Celebrations',
      icon: <PartyPopper className="w-6 h-6" />
    },
    'lounge-area': {
      name: 'The Velvet Lounge',
      subtitle: 'Artful Sophistication',
      description: 'Where mixology meets artistry.',
      longDescription: 'Sink into plush velvet seating while master mixologists craft signature cocktails.',
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1572111509797-5e9a2e8c40b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Gold Leaf Bar', 'Live Acoustic Stage', 'Signature Cocktails', 'Cigar Lounge'],
      capacity: '40 guests',
      ambience: 'Sophisticated Casual',
      bestFor: 'Cocktail Parties, Networking Events',
      icon: <Wine className="w-6 h-6" />
    },
    'outdoor-terrace': {
      name: 'The Sky Terrace',
      subtitle: 'Al Fresco Grandeur',
      description: 'Dine under the stars.',
      longDescription: 'Surrounded by lush greenery and twinkling fairy lights, this open-air terrace offers panoramic views.',
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Infinity Edge', 'Fire Pits', 'Heated Flooring', 'Retractable Roof'],
      capacity: '50 guests',
      ambience: 'Romantic Open-air',
      bestFor: 'Sunset Dinners, Garden Parties',
      icon: <Flame className="w-6 h-6" />
    },
    'chef-table': {
      name: "The Culinary Theater",
      subtitle: 'Epicurean Journey',
      description: 'Witness culinary magic unfold.',
      longDescription: 'Positioned at the heart of our kitchen, this marble counter seats you front-row to culinary artistry.',
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Chef Interaction', 'Custom Menus', 'Wine Pairing', 'Kitchen Tour'],
      capacity: '8 guests',
      ambience: 'Interactive Exclusive',
      bestFor: 'Food Enthusiasts, Special Occasions',
      icon: <ChefHat className="w-6 h-6" />
    }
  };

  const handleSeasonChange = (season) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSeason(season);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const seasonKeys = Object.keys(seasons);
      const currentIndex = seasonKeys.indexOf(currentSeason);
      const nextIndex = (currentIndex + 1) % seasonKeys.length;
      handleSeasonChange(seasonKeys[nextIndex]);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSeason]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Ultra-Luxury Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            scale: 1.1,
            rotate: [0, 1, -1, 0] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tavisha Lounge"
            className="w-full h-full object-cover"
          />
          {/* Multi-layered Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/90"></div>
        </motion.div>

        {/* Animated Gold Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L61.6 35.8L90 40L70 60L75.8 90L50 75L24.2 90L30 60L10 40L38.4 35.8L50 10z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-metallic-gold rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -30, 30, -30],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Central Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Royal Emblem */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold blur-2xl opacity-30 rounded-full"></div>
              <div className="relative w-32 h-32 border-2 border-metallic-gold rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Crown className="w-16 h-16 text-metallic-gold" />
              </div>
            </div>
          </motion.div>

          {/* Animated Text Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-serif font-bold text-metallic-gold mb-6 tracking-wider"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              TAVISHA
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto mb-8"
          />

          <motion.p 
            className="text-2xl md:text-3xl text-soft-cream/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Where Royalty Meets Modern Elegance
          </motion.p>

          {/* Luxury CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-metallic-gold text-royal-maroon font-semibold rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Experience Luxury</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-metallic-gold text-metallic-gold font-semibold rounded-full hover:bg-metallic-gold/10 transition-all duration-300 backdrop-blur-sm"
            >
              Virtual Tour
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-metallic-gold/60 text-sm tracking-widest">DISCOVER</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-px h-16 bg-gradient-to-b from-metallic-gold to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra-Luxury Virtual Grand Tour */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M0,200 Q400,100 800,200 T1600,200"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header with Royal Treatment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-metallic-gold blur-xl opacity-20"></div>
                <Diamond className="w-16 h-16 text-metallic-gold relative" />
              </div>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-serif font-bold text-metallic-gold mb-6">
              The Grand Tour
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-metallic-gold/40"></div>
              <span className="text-metallic-gold/60 tracking-[0.3em] text-sm">ROYAL COLLECTION</span>
              <div className="w-12 h-px bg-metallic-gold/40"></div>
            </div>

            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto font-light">
              Journey through our meticulously curated spaces, each telling its own story of luxury and refinement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Room Selector - Vertical Timeline Style */}
            <div className="lg:col-span-4">
              <div className="space-y-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-metallic-gold/40 via-metallic-gold/20 to-transparent"></div>
                
                {Object.entries(tourRooms).map(([key, room], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className={`absolute left-8 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 transition-all duration-500 ${
                        activeRoom === key 
                          ? 'border-metallic-gold bg-metallic-gold shadow-lg shadow-metallic-gold/50' 
                          : 'border-metallic-gold/30 bg-transparent'
                      }`}
                      style={{ top: '2rem' }}
                      animate={activeRoom === key ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />

                    <motion.button
                      onClick={() => setActiveRoom(key)}
                      onHoverStart={() => setIsHoveringRoom(key)}
                      onHoverEnd={() => setIsHoveringRoom(null)}
                      className={`w-full ml-16 p-6 rounded-2xl transition-all duration-500 relative overflow-hidden ${
                        activeRoom === key
                          ? 'bg-gradient-to-r from-metallic-gold/20 to-transparent border border-metallic-gold/50 shadow-2xl'
                          : 'bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10'
                      }`}
                      whileHover={{ x: 10 }}
                    >
                      {/* Hover Effect */}
                      <AnimatePresence>
                        {isHoveringRoom === key && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-metallic-gold/10 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="flex items-center space-x-4 relative z-10">
                        <div className={`p-4 rounded-xl ${
                          activeRoom === key 
                            ? 'bg-metallic-gold text-royal-maroon' 
                            : 'bg-metallic-gold/10 text-metallic-gold'
                        }`}>
                          {room.icon}
                        </div>
                        
                        <div className="flex-1 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-serif font-bold text-lg ${
                              activeRoom === key ? 'text-metallic-gold' : 'text-white'
                            }`}>
                              {room.name}
                            </h3>
                            <span className="text-xs text-metallic-gold/60">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <p className="text-sm text-soft-cream/60">{room.subtitle}</p>
                          
                          {/* Capacity Tag */}
                          <div className="flex items-center mt-2 space-x-2">
                            <Users className="w-3 h-3 text-metallic-gold/40" />
                            <span className="text-xs text-metallic-gold/40">{room.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Main Viewer - Palace Worthy */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoom}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Main Image Container */}
                  <div className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-metallic-gold/20">
                    <motion.img
                      src={tourRooms[activeRoom].gallery[activeImageIndex]}
                      alt={tourRooms[activeRoom].name}
                      className="w-full h-full object-cover"
                      style={{ scale: zoomLevel }}
                      animate={{ scale: zoomLevel }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Control Bar - Floating Luxury */}
                    <motion.div 
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/20"
                    >
                      <div className="flex items-center justify-between">
                        {/* Room Info */}
                        <div>
                          <h4 className="text-metallic-gold font-serif text-xl font-bold mb-1">
                            {tourRooms[activeRoom].name}
                          </h4>
                          <p className="text-soft-cream/60 text-sm">{tourRooms[activeRoom].subtitle}</p>
                        </div>

                        {/* Controls */}
                        <div className="flex space-x-3">
                          <button
                            onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Minimize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Maximize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-12 h-12 bg-metallic-gold rounded-xl flex items-center justify-center text-royal-maroon hover:bg-metallic-gold/90 transition-all"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Gallery Thumbnails */}
                      <div className="flex mt-4 space-x-2">
                        {tourRooms[activeRoom].gallery.map((img, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                              activeImageIndex === idx 
                                ? 'border-metallic-gold scale-110' 
                                : 'border-transparent opacity-50 hover:opacity-100'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <img src={img} alt={`View ${idx + 1}`} className="w-16 h-16 object-cover" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Feature Hotspots */}
                    {tourRooms[activeRoom].features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="absolute"
                        style={{ top: `${20 + idx * 10}%`, left: `${30 + idx * 8}%` }}
                      >
                        <div className="relative group/hotspot">
                          <div className="w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center cursor-pointer shadow-xl animate-pulse">
                            <div className="w-3 h-3 bg-royal-maroon rounded-full"></div>
                          </div>
                          
                          <AnimatePresence>
                            {showFeature === feature && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-black/90 backdrop-blur-sm text-metallic-gold px-4 py-2 rounded-xl text-sm border border-metallic-gold/30"
                              >
                                {feature}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}

                    {/* Like Button */}
                    <button
                      onClick={() => setIsLiked(prev => ({ ...prev, [activeRoom]: !prev[activeRoom] }))}
                      className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center border border-metallic-gold/20 hover:bg-metallic-gold/20 transition-all"
                    >
                      <Heart className={`w-5 h-5 ${
                        isLiked[activeRoom] ? 'fill-red-500 text-red-500' : 'text-metallic-gold'
                      }`} />
                    </button>
                  </div>

                  {/* Room Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {/* Description */}
                    <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h4 className="text-metallic-gold font-serif text-2xl mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-3" />
                        The Experience
                      </h4>
                      <p className="text-soft-cream/70 leading-relaxed mb-6">
                        {tourRooms[activeRoom].longDescription}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {tourRooms[activeRoom].features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
                            <span className="text-sm text-soft-cream/60">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-2xl p-8 border border-metallic-gold/20">
                      <h4 className="text-metallic-gold font-serif text-xl mb-6">Details</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Capacity</span>
                          <span className="text-white font-semibold">{tourRooms[activeRoom].capacity}</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Ambience</span>
                          <span className="text-white font-semibold">{tourRooms[activeRoom].ambience}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-soft-cream/60">Best For</span>
                          <span className="text-white font-semibold text-right">{tourRooms[activeRoom].bestFor}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/80 text-royal-maroon font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Book This Experience</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Poetry Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="flex justify-center mb-6"
            >
              <Sparkles className="w-12 h-12 text-metallic-gold" />
            </motion.div>
            
            <span className="text-metallic-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              Nature's Palette
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-metallic-gold mb-6">
              Seasonal Poetry
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-2xl mx-auto">
              Watch our spaces transform with the rhythm of seasons, each bringing its own magic
            </p>
          </motion.div>

          {/* Season Selector - Luxury Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-metallic-gold/20">
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(seasons).map(([key, season]) => (
                  <motion.button
                    key={key}
                    onClick={() => handleSeasonChange(key)}
                    className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                      currentSeason === key
                        ? 'text-white'
                        : 'text-soft-cream/60 hover:text-metallic-gold'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentSeason === key && (
                      <motion.div
                        layoutId="seasonBackground"
                        className={`absolute inset-0 bg-gradient-to-r ${season.color}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-xl">{season.icon}</span>
                      <span>{season.name}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Seasonal Display - Premium Showcase */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-metallic-gold/20">
            <AnimatePresence mode="wait">
              {!isTransitioning && (
                <motion.div
                  key={currentSeason}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
                >
                  {/* Image Gallery */}
                  <div className="absolute inset-0 grid grid-cols-2">
                    {seasons[currentSeason].images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        className="relative overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`${seasons[currentSeason].name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-center text-white p-8 max-w-3xl"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                        className="text-7xl mb-6 flex justify-center"
                      >
                        {seasons[currentSeason].icon}
                      </motion.div>
                      
                      <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                        {seasons[currentSeason].name}
                      </h3>
                      
                      <p className="text-2xl mb-6 font-light drop-shadow-lg">
                        {seasons[currentSeason].description}
                      </p>
                      
                      <div className="w-24 h-0.5 bg-metallic-gold mx-auto mb-6"></div>
                      
                      <p className="text-lg text-white/90 drop-shadow-lg">
                        {seasons[currentSeason].details}
                      </p>
                    </motion.div>
                  </div>

                  {/* Seasonal Specials Card */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20 max-w-xs"
                  >
                    <h4 className="font-serif text-xl mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-metallic-gold" />
                      Seasonal Highlights
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                        Curated seasonal menu
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                        Themed decorations
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                        Exclusive cocktail pairings
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Season Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {Object.entries(seasons).map(([key, season]) => (
              <motion.div
                key={key}
                whileHover={{ y: -10 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl ${
                  currentSeason === key ? 'ring-2 ring-metallic-gold' : ''
                }`}
                onClick={() => handleSeasonChange(key)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                <div className="relative p-6 text-white">
                  <div className="text-4xl mb-3">{season.icon}</div>
                  <h4 className="font-serif text-xl font-bold mb-2">{season.name}</h4>
                  <p className="text-sm text-white/80 line-clamp-2">{season.description}</p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "40px" }}
                    className="h-0.5 bg-metallic-gold mt-4"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/90 text-royal-maroon p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-royal-maroon text-metallic-gold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Book a Private Tour
        </span>
      </motion.button>
    </div>
  );
};

export default GalleryPage;