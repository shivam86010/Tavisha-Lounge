// // src/components/HeroBanner.js
// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroBanner = () => {
//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//         >
//           <source src="https://assets.mixkit.co/videos/preview/mixkit-restaurant-interior-with-tables-and-chairs-43315-large.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-4xl"
//         >
//           <motion.h1 
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-soft-cream mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <span className="text-metallic-gold ">Tavisha</span> Lounge
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl lg:text-3xl text-metallic-gold mb-8 font-light"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             Where Royal Heritage Meets Culinary Excellence
//           </motion.p>
          
//           <motion.p 
//             className="text-lg md:text-xl text-soft-cream mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1, duration: 1 }}
//           >
//             Experience the epitome of luxury dining with authentic flavors crafted for royalty
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.4, duration: 0.8 }}
//           >
//             <button className="bg-royal-maroon hover:bg-royal-maroon-dark text-metallic-gold px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Reserve a Table
//             </button>
//             <button className="bg-burnt-orange hover:bg-burnt-orange-dark text-soft-cream px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Order Now
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-metallic-gold rounded-full mt-2"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroBanner;

// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMapPin, FiClock, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const MotionLink = motion(Link);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'About', to: '/about' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Reservations', to: '/reservations' },
    { name: 'Contact', to: '/contacts' }
  ];

  const getHeaderClasses = () => {
    if (isScrolled) {
      return 'bg-soft-cream shadow-lg py-2 text-charcoal';
    }
    if (isHomePage) {
      return 'bg-transparent py-4 text-soft-cream';
    }
    return 'bg-charcoal py-4 text-soft-cream';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-royal-maroon text-soft-cream py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FiMapPin className="text-metallic-gold" />
              <span>123 Royal Street, Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiPhone className="text-metallic-gold" />
              <span>+91 98765 43210</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <FiClock className="text-metallic-gold" />
            <span>Open Today: 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getHeaderClasses()}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold font-serif z-50">
              Tavisha <span className="text-burnt-orange">Lounge</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <MotionLink
                  key={item.name}
                  to={item.to}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-charcoal hover:text-royal-maroon' : 'text-soft-cream hover:text-metallic-gold'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </MotionLink>
              ))}

              <button className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300">
                Reserve Table
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-2xl z-50 ${
                isScrolled ? 'text-charcoal' : 'text-soft-cream'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                className="fixed top-0 right-0 h-full w-64 bg-soft-cream shadow-lg lg:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="p-6">
                  <button
                    className="absolute top-4 right-4 text-2xl text-charcoal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiX />
                  </button>
                  <nav className="mt-8 flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-charcoal hover:text-royal-maroon font-medium py-2 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold mt-4">
                      Reserve Table
                    </button>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;