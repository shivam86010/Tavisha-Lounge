// // ElegantHero.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Crown, MapPin, Phone, Mail } from 'lucide-react';

// const ElegantHero = ({ onReservationClick }) => {
//   const quickContacts = [
//     { icon: MapPin, text: 'Royal Heritage Road', subtext: 'City Center' },
//     { icon: Phone, text: '+91 9XXXX XXXXX', subtext: '10 AM - 11 PM' },
//     { icon: Mail, text: 'hello@tavishalounge.com', subtext: 'Quick Response' }
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Layers */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon/85 via-royal-maroon/70 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />
        
//         {/* Animated Gold Accents */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metallic-gold/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         >
//           {/* Crown Icon */}
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="flex justify-center mb-8"
//           >
//             <div className="p-4 bg-metallic-gold/20 rounded-full backdrop-blur-sm">
//               <Crown className="w-12 h-12 text-metallic-gold" />
//             </div>
//           </motion.div>

//           {/* Main Title */}
//           <motion.h1 
//             className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-soft-cream mb-6 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//           >
//             Get in Touch
//           </motion.h1>
          
//           <motion.div
//             className="text-xl md:text-3xl font-serif text-metallic-gold mb-8 italic"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             with Tavisha Lounge
//           </motion.div>

//           <motion.p 
//             className="text-lg md:text-xl font-sans text-soft-cream/90 max-w-3xl mx-auto leading-relaxed mb-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1, duration: 1 }}
//           >
//             Where conversations begin and connections grow in an atmosphere of royal elegance
//           </motion.p>

//           {/* Quick Contact Info */}
//           <motion.div 
//             className="flex flex-wrap justify-center gap-8 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//           >
//             {quickContacts.map((contact, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-center gap-3 text-soft-cream/80 group"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <contact.icon className="w-5 h-5 text-metallic-gold group-hover:scale-110 transition-transform" />
//                 <div className="text-left">
//                   <div className="font-sans font-semibold text-sm">{contact.text}</div>
//                   <div className="font-sans text-xs opacity-70">{contact.subtext}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.8 }}
//           >
//             <motion.button
//               onClick={onReservationClick}
//               className="group relative bg-transparent border-2 border-metallic-gold text-metallic-gold font-sans font-semibold py-4 px-8 rounded-full hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-500 overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 Reserve Your Experience
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="group-hover:translate-x-1 transition-transform duration-300"
//                 >
//                   →
//                 </motion.span>
//               </span>
//               <div className="absolute inset-0 bg-metallic-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.6, duration: 1 }}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="text-metallic-gold text-center"
//         >
//           <div className="text-sm font-sans mb-2">Scroll to Explore</div>
//           <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-metallic-gold rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ElegantHero;


// ChromaHero.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

const ChromaHero = ({ onReservationClick }) => {
  const [currentWord, setCurrentWord] = useState(0);
  
  const rotatingWords = ['Experience', 'Taste', 'Feel', 'Enjoy'];
  const contactInfo = [
    { icon: MapPin, text: 'Royal Heritage Road' },
    { icon: Phone, text: '+91 9XXXX XXXXX' },
    { icon: Mail, text: 'hello@tavishalounge.com' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Animated Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-sans text-sm font-medium">
              Welcome to Royal Dining
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-none">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {rotatingWords[currentWord]}
              </motion.div>
            </AnimatePresence>
            <span className="text-4xl md:text-6xl font-bold text-white ml-4">ROYALTY</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Where every conversation begins with elegance and every connection 
          grows with exceptional service in an atmosphere of pure luxury.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-slate-300 font-sans font-medium">{info.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={onReservationClick}
            className="group relative bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-sans font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Reserve Your Experience
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          <motion.button
            className="group relative bg-transparent border-2 border-white/20 text-white font-sans font-semibold py-4 px-8 rounded-2xl hover:border-purple-400 hover:text-purple-300 transition-all duration-500 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Our World
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400 text-center"
        >
          <div className="text-sm font-sans mb-2 text-slate-400">Scroll to Connect</div>
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChromaHero;