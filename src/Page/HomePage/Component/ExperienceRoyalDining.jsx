// // src/components/ExperienceRoyalDining.js
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const ExperienceRoyalDining = () => {
//   const [offsetY, setOffsetY] = useState(0);

//   const handleScroll = () => {
//     setOffsetY(window.pageYOffset);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Parallax Background */}
//       <div 
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
//           transform: `translateY(${offsetY * 0.5}px)`
//         }}
//       >
//         <div className="absolute inset-0 bg-royal-maroon bg-opacity-70"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center text-soft-cream px-4 max-w-4xl"
//         >
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-royal-maroon">
//             Experience <span className="text-metallic-gold">Royal</span> Dining
//           </h2>
          
//           <motion.p 
//             className="text-xl md:text-2xl mb-12 leading-relaxed text-charcoal"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Immerse yourself in an ambiance of regal elegance, where every detail is crafted 
//             to transport you to the era of maharajas and royal feasts
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center"
//           >
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
//               <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Ambiance</h3>
//               <p className="text-lg text-charcoal">Palatial interiors with handcrafted decor</p>
//             </div>
            
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
//               <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Service</h3>
//               <p className="text-lg text-charcoal">Attentive staff trained in royal hospitality</p>
//             </div>
            
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-metallic-gold border-opacity-30">
//               <h3 className="text-2xl font-semibold text-metallic-gold mb-2">Cuisine</h3>
//               <p className="text-lg text-charcoal">Authentic recipes from royal kitchens</p>
//             </div>
//           </motion.div>

//           <motion.button
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="mt-12 bg-metallic-gold text-royal-maroon px-12 py-4 rounded-lg font-bold text-xl hover:bg-burnt-orange hover:text-soft-cream transition-all duration-300 transform hover:scale-105 shadow-2xl"
//           >
//             Book Your Royal Experience
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceRoyalDining;

// src/components/ExperienceRoyalDining.js
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiUsers, FiAward, FiHeart, FiClock, FiMapPin } from 'react-icons/fi';

const ExperienceRoyalDining = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: FiStar,
      title: "Royal Ambiance",
      description: "Step into palatial interiors with handcrafted decor, traditional artwork, and luxurious seating that transports you to the era of maharajas",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-600 to-royal-maroon"
    },
    {
      icon: FiUsers,
      title: "Personalized Service",
      description: "Experience attentive service from staff trained in royal hospitality traditions, ensuring every need is anticipated and met with warmth",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: FiAward,
      title: "Culinary Excellence",
      description: "Savor authentic recipes passed down through generations of royal kitchens, crafted with premium ingredients and traditional techniques",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-amber-600 to-orange-500"
    },
    {
      icon: FiHeart,
      title: "Memorable Moments",
      description: "Create cherished memories in an atmosphere designed for celebration, romance, and special occasions that last a lifetime",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-pink-600 to-rose-500"
    }
  ];

  const stats = [
    { icon: FiClock, value: "25+", label: "Years of Excellence" },
    { icon: FiAward, value: "50+", label: "Culinary Awards" },
    { icon: FiUsers, value: "10k+", label: "Happy Guests" },
    { icon: FiMapPin, value: "3", label: "Royal Locations" }
  ];

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
const Icon = features[currentFeature].icon;
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base Background */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon/80 via-purple-900/70 to-burnt-orange/60">
          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-metallic-gold rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-6 h-6 bg-soft-cream rounded-full opacity-15"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-burnt-orange rounded-full opacity-25"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Main Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-soft-cream"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Experience{' '}
              <motion.span
                className="text-metallic-gold bg-gradient-to-r from-metallic-gold to-yellow-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                Royal
              </motion.span>{' '}
              Dining
            </motion.h2>
            
            <motion.div
              className="w-32 h-1 bg-metallic-gold mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed text-soft-cream max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Immerse yourself in an ambiance of regal elegance, where every detail is crafted 
              to transport you to the era of maharajas and royal feasts
            </motion.p>
          </motion.div>

          {/* Features Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Feature Content */}
            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center mx-auto lg:mx-0`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-soft-cream" />
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-metallic-gold">
                    {features[currentFeature].title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-soft-cream leading-relaxed">
                    {features[currentFeature].description}
                  </p>

                  {/* Feature Navigation Dots */}
                  <div className="flex justify-center lg:justify-start space-x-3">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentFeature 
                            ? 'bg-metallic-gold w-8' 
                            : 'bg-soft-cream bg-opacity-50 hover:bg-opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature Image */}
            <motion.div
              className="relative"
              variants={floatingAnimation}
              animate="animate"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotateY: -180 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <img
                    src={features[currentFeature].image}
                    alt={features[currentFeature].title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-metallic-gold rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-metallic-gold border-opacity-30"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.15)" 
                }}
              >
                <stat.icon className="w-8 h-8 text-metallic-gold mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-metallic-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-soft-cream">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              className="bg-metallic-gold text-royal-maroon px-12 py-4 rounded-2xl font-bold text-xl hover:bg-yellow-500 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 0.3 }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10">Book Your Royal Experience</span>
            </motion.button>
            
            <motion.p
              className="text-soft-cream mt-6 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Limited seating available • Reserve your royal table today
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 bg-soft-cream"
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
        }}
      />
    </section>
  );
};

export default ExperienceRoyalDining;