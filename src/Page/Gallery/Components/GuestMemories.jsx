// GuestMemories.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GuestMemories = ({ selectedMood, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const guestMemories = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Birthday Celebration at Tavisha",
      mood: "celebration",
      testimonial: "The perfect venue for our family celebration!"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      caption: "Romantic Dinner Date",
      mood: "romantic",
      testimonial: "An unforgettable evening with amazing ambiance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Family Gathering",
      mood: "family",
      testimonial: "Great food and wonderful service for our family"
    }
  ];

  const filteredMemories = selectedMood === 'all' 
    ? guestMemories 
    : guestMemories.filter(memory => memory.mood === selectedMood);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredMemories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredMemories.length]);

  return (
    <section className="py-16 bg-royal-maroon/10 rounded-3xl p-8">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Guest Memories & Events
      </motion.h2>
      
      <div className="relative h-96 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            onClick={() => onImageClick(filteredMemories[currentIndex])}
          >
            <img 
              src={filteredMemories[currentIndex].src} 
              alt={filteredMemories[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/80 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-metallic-gold font-serif text-2xl font-bold mb-2">
                  {filteredMemories[currentIndex].caption}
                </p>
                <p className="text-soft-cream font-sans text-lg">
                  {filteredMemories[currentIndex].testimonial}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {filteredMemories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-metallic-gold' : 'bg-soft-cream/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestMemories;

// src/components/gallery/GuestMemories.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBirthdayCake, FaGlassCheers, FaMusic, FaHeart } from 'react-icons/fa';

// const GuestMemories = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const guestEvents = [
//     {
//       id: 1,
//       type: 'birthday',
//       icon: <FaBirthdayCake className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
//       title: "Birthday Celebrations",
//       description: "Making every birthday memorable with personalized cakes and surprises",
//       testimonials: [
//         "Best birthday dinner ever! The staff surprised me with a custom cake!",
//         "They made our daughter's 16th birthday so special!"
//       ]
//     },
//     {
//       id: 2,
//       type: 'anniversary',
//       icon: <FaHeart className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Romantic Anniversaries",
//       description: "Intimate settings for couples celebrating their love stories",
//       testimonials: [
//         "Our 10th anniversary was magical here!",
//         "Perfect ambiance for a romantic celebration"
//       ]
//     },
//     {
//       id: 3,
//       type: 'corporate',
//       icon: <FaGlassCheers className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Corporate Events",
//       description: "Elegant spaces for business dinners and team celebrations",
//       testimonials: [
//         "Perfect venue for our company anniversary!",
//         "Professional service for our corporate event"
//       ]
//     },
//     {
//       id: 4,
//       type: 'live-music',
//       icon: <FaMusic className="w-8 h-8" />,
//       image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Live Music Nights",
//       description: "Weekly performances creating magical evening experiences",
//       testimonials: [
//         "The live sitar music transported us to another world!",
//         "Friday nights with live music are our favorite!"
//       ]
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % guestEvents.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + guestEvents.length) % guestEvents.length);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-soft-cream to-charcoal/5">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
//             Guest Memories & Events
//           </h2>
//           <p className="text-xl text-charcoal max-w-2xl mx-auto">
//             Celebrating life's special moments with our Tavisha family
//           </p>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative max-w-6xl mx-auto">
//           <div className="overflow-hidden rounded-3xl shadow-2xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative"
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden">
//                   {/* Image Side */}
//                   <div className="relative h-96 lg:h-auto">
//                     <img
//                       src={guestEvents[currentSlide].image}
//                       alt={guestEvents[currentSlide].title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t" />
                    
//                     {/* Event Type Badge */}
//                     <div className="absolute top-6 left-6 bg-metallic-gold text-royal-maroon px-4 py-2 rounded-full flex items-center space-x-2">
//                       {guestEvents[currentSlide].icon}
//                       <span className="font-semibold">{guestEvents[currentSlide].title}</span>
//                     </div>
//                   </div>

//                   {/* Content Side */}
//                   <div className="p-8 lg:p-12 flex flex-col justify-center">
//                     <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">
//                       {guestEvents[currentSlide].title}
//                     </h3>
//                     <p className="text-lg text-charcoal mb-6 leading-relaxed">
//                       {guestEvents[currentSlide].description}
//                     </p>

//                     {/* Testimonials */}
//                     <div className="space-y-4 mb-8">
//                       <h4 className="font-semibold text-burnt-orange">Guest Stories:</h4>
//                       {guestEvents[currentSlide].testimonials.map((testimonial, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.2 }}
//                           className="bg-soft-cream rounded-lg p-4 border-l-4 border-metallic-gold"
//                         >
//                           <p className="text-sm text-charcoal italic">"{testimonial}"</p>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* CTA */}
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-royal-maroon text-metallic-gold px-8 py-3 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors w-fit"
//                     >
//                       Plan Your Event
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300"
//           >
//             ←
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300"
//           >
//             →
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center space-x-3 mt-6">
//             {guestEvents.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentSlide === index ? 'bg-royal-maroon scale-125' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Event Types Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
//         >
//           {guestEvents.map((event, index) => (
//             <motion.div
//               key={event.id}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//               onClick={() => setCurrentSlide(index)}
//             >
//               <div className="text-royal-maroon mb-3 flex justify-center">
//                 {event.icon}
//               </div>
//               <h4 className="font-semibold text-charcoal">{event.title}</h4>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default GuestMemories;