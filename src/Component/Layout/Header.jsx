// // // // src/components/Header.js
// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { FiMenu, FiX, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 100);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const navItems = [
// // //     { name: 'Home', href: '#home' },
// // //     { name: 'Menu', href: '/menu' },
// // //     { name: 'About', href: '/about' },
// // //     { name: 'Gallery', href: '#gallery' },
// // //     { name: 'Reservations', href: '#reservations' },
// // //     { name: 'Contact', href: '#contact' }
// // //   ];

// // //   return (
// // //     <>
// // //       {/* Top Bar */}
// // //       <div className="bg-royal-maroon  text-soft-cream py-2 px-4 text-sm">
// // //         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
// // //           <div className="flex items-center space-x-4">
// // //             <div className="flex items-center space-x-1">
// // //               <FiMapPin className="text-metallic-gold" />
// // //               <span>123 Royal Street, Mumbai, India</span>
// // //             </div>
// // //             <div className="hidden lg:flex items-center space-x-1">
// // //               <FiPhone className="text-metallic-gold" />
// // //               <span>+91 98765 43210</span>
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center space-x-1">
// // //             <FiClock className="text-metallic-gold" />
// // //             <span>Open Today: 11:00 AM - 11:00 PM</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Header */}
// // //       <motion.header
// // //         className={`fixed w-full z-50 transition-all duration-300 ${
// // //           isScrolled 
// // //             ? 'bg-soft-cream shadow-lg py-2' 
// // //             : 'bg-transparent py-4'
// // //         }`}
// // //         initial={{ y: -100 }}
// // //         animate={{ y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //       >
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex justify-between items-center">
// // //             {/* Logo */}
// // //             <motion.div
// // //               className="flex items-center space-x-3"
// // //               whileHover={{ scale: 1.05 }}
// // //             >
// // //               <div className={`text-2xl font-bold font-serif ${
// // //                 isScrolled ? 'text-royal-maroon' : 'text-metallic-gold'
// // //               }`}>
// // //                 Tavisha <span className="text-burnt-orange">Lounge</span>
// // //               </div>
// // //             </motion.div>

// // //             {/* Desktop Navigation */}
// // //             <nav className="hidden lg:flex items-center space-x-8">
// // //               {navItems.map((item, index) => (
// // //                 <motion.a
// // //                   key={item.name}
// // //                   href={item.href}
// // //                   className={`font-medium transition-colors duration-300 ${
// // //                     isScrolled 
// // //                       ? 'text-charcoal hover:text-royal-maroon' 
// // //                       : 'text-soft-cream hover:text-metallic-gold'
// // //                   }`}
// // //                   whileHover={{ y: -2 }}
// // //                   initial={{ opacity: 0, y: -20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                 >
// // //                   {item.name}
// // //                 </motion.a>
// // //               ))}
// // //               <motion.button
// // //                 className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
// // //                 whileHover={{ scale: 1.05 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //               >
// // //                 Reserve Table
// // //               </motion.button>
// // //             </nav>

// // //             {/* Mobile Menu Button */}
// // //             <button
// // //               className={`lg:hidden text-2xl ${
// // //                 isScrolled ? 'text-royal-maroon' : 'text-metallic-gold'
// // //               }`}
// // //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             >
// // //               {isMenuOpen ? <FiX /> : <FiMenu />}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Navigation */}
// // //         <AnimatePresence>
// // //           {isMenuOpen && (
// // //             <motion.div
// // //               className="lg:hidden absolute top-full left-0 w-full bg-soft-cream shadow-xl"
// // //               initial={{ opacity: 0, height: 0 }}
// // //               animate={{ opacity: 1, height: 'auto' }}
// // //               exit={{ opacity: 0, height: 0 }}
// // //               transition={{ duration: 0.3 }}
// // //             >
// // //               <div className="container mx-auto px-4 py-6">
// // //                 <nav className="flex flex-col space-y-4">
// // //                   {navItems.map((item, index) => (
// // //                     <motion.a
// // //                       key={item.name}
// // //                       href={item.href}
// // //                       className="text-charcoal hover:text-royal-maroon font-medium py-2 transition-colors duration-300"
// // //                       onClick={() => setIsMenuOpen(false)}
// // //                       initial={{ opacity: 0, x: -20 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{ delay: index * 0.1 }}
// // //                     >
// // //                       {item.name}
// // //                     </motion.a>
// // //                   ))}
// // //                   <motion.button
// // //                     className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold mt-4"
// // //                     whileTap={{ scale: 0.95 }}
// // //                   >
// // //                     Reserve Table
// // //                   </motion.button>
// // //                 </nav>
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </motion.header>
// // //     </>
// // //   );
// // // };

// // // export default Header;



// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FiMenu, FiX, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
// // import { Link } from 'react-router-dom';

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isHeroVisible, setIsHeroVisible] = useState(true);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollY = window.scrollY;
// //       setIsScrolled(scrollY > 100);
      
// //       // Check if we're in the hero section (first 80vh)
// //       setIsHeroVisible(scrollY < window.innerHeight * 0.8);
// //     };
    
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navItems = [
// //     { name: 'Home', href: '/' },
// //     { name: 'Menu', href: '/menu' },
// //     { name: 'About', href: '/about' },
// //     { name: 'Gallery', href: '/gallery' },
// //     { name: 'Reservations', href: '/reservations' },
// //     { name: 'Contact', href: '/contacts' }
// //   ];

// //   // Determine header styles based on scroll position and section  
// //   const getHeaderStyles = () => {
// //     if (isScrolled) {
// //       // When scrolled - solid backgroudn  
// //       return {
// //         background: 'bg-soft-cream shadow-lg',
// //         textColor: 'text-charcoal',
// //         hoverColor: 'hover:text-royal-maroon',
// //         buttonStyle: 'bg-royal-maroon text-metallic-gold'
// //       };
// //     } else if (isHeroVisible) {
// //       // In hero section - transparent with light text
// //       return {
// //         background: 'bg-transparent',
// //         textColor: 'text-soft-cream',
// //         hoverColor: 'hover:text-metallic-gold',
// //         buttonStyle: 'bg-royal-maroon text-metallic-gold'
// //       };
// //     } else {
// //       // Not in hero section but not scrolled - solid dark background
// //       return {
// //         background: 'bg-charcoal shadow-lg',
// //         textColor: 'text-soft-cream',
// //         hoverColor: 'hover:text-metallic-gold',
// //         buttonStyle: 'bg-royal-maroon text-metallic-gold'
// //       };
// //     }
// //   };

// //   const styles = getHeaderStyles();

// //   return (
// //     <>
// //       {/* Top Bar - Always visible with solid background */}
// //       <div className="bg-royal-maroon text-soft-cream py-2 px-4 text-sm relative z-50">
// //         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
// //           <div className="flex items-center space-x-4">
// //             <div className="flex items-center space-x-1">
// //               <FiMapPin className="text-metallic-gold" />
// //               <span>123 Royal Street, Mumbai, India</span>
// //             </div>
// //             <div className="hidden lg:flex items-center space-x-1">
// //               <FiPhone className="text-metallic-gold" />
// //               <span>+91 98765 43210</span>
// //             </div>
// //           </div>
// //           <div className="flex items-center space-x-1">
// //             <FiClock className="text-metallic-gold" />
// //             <span>Open Today: 11:00 AM - 11:00 PM</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Header */}
// //       <motion.header
// //         className={`fixed w-full z-50 bg-soft-cream transition-all duration-300 ${styles.background} ${
// //           isScrolled ? 'py-2' : 'py-4'
// //         }`}
// //         initial={{ y: -100 }}
// //         animate={{ y: 0 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-between items-center">
// //             {/* Logo */}
// //             <motion.div
// //               className="flex items-center space-x-3"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <div className={`text-2xl font-bold font-serif ${styles.textColor}`}>
// //                 Tavisha <span className="text-burnt-orange">Lounge</span>
// //               </div>
// //             </motion.div>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden lg:flex items-center space-x-8">
// //               {navItems.map((item, index) => (
// //                 <motion.a
// //                   key={item.name}
// //                   className={`font-medium transition-colors text-red-400 duration-300 ${styles.textColor} ${styles.hoverColor}`}
// //                   whileHover={{ y: -2 }}
// //                   initial={{ opacity: 0, y: -20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   {item.name}
// //                 </motion.a>
// //               ))}
// //               <motion.button
// //                 className={`${styles.buttonStyle} px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300`}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Reserve Table
// //               </motion.button>
// //             </nav>

// //             {/* Mobile Menu Button */}
// //             <button
// //               className={`lg:hidden text-2xl ${styles.textColor}`}
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             >
// //               {isMenuOpen ? <FiX /> : <FiMenu />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <AnimatePresence>
// //           {isMenuOpen && (
// //             <motion.div
// //               className="lg:hidden absolute top-full left-0 w-full bg-soft-cream shadow-xl"
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: 'auto' }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <div className="container mx-auto px-4 py-6">
// //                 <nav className="flex flex-col space-y-4">
// //                   {navItems.map((item, index) => (
// //                     <motion.a
// //                       key={item.name}
// //                       href={item.href}
// //                       className="text-charcoal hover:text-royal-maroon font-medium py-2 transition-colors duration-300"
// //                       onClick={() => setIsMenuOpen(false)}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: index * 0.1 }}
// //                     >
// //                       {item.name}
// //                     </motion.a>
// //                   ))}
// //                   <motion.button
// //                     className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold mt-4"
// //                     whileTap={{ scale: 0.95 }}
// //                   >
// //                     Reserve Table
// //                   </motion.button>
// //                 </nav>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </motion.header>

// //       {/* Add padding to the top of the first section to account for fixed header */}
// //       <style jsx>{`
// //         #home {
// //           scroll-margin-top: 120px;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default Header;



// // src/components/Header.js
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiMenu, FiX, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { TbGlassFullFilled } from 'react-icons/tb';
// import { del } from 'framer-motion/client';

// const MotionLink = motion(Link);

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsScrolled(scrollY > 100);
//       setIsHeroVisible(scrollY < window.innerHeight * 0.8);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Menu', to: '/menu' },
//     { name: 'About', to: '/about' },
//     { name: 'Gallery', to: '/gallery' },
//     { name: 'Reservations', to: '/reservations' },
//     { name: 'Contact', to: '/contacts' }
//   ];

//   const getHeaderStyles = () => {
//     if (isScrolled) {
//       return {
//         background: 'bg-soft-cream shadow-lg',
//         textColor: 'text-charcoal',
//         hoverColor: 'hover:text-royal-maroon',
//         buttonStyle: 'bg-royal-maroon text-metallic-gold'
//       };
//     } else if (isHeroVisible) {
//       return {
//         background: 'bg-transparent',
//         textColor: 'text-soft-cream',
//         hoverColor: 'hover:text-metallic-gold',
//         buttonStyle: 'bg-royal-maroon text-metallic-gold'
//       };
//     } else {
//       return {
//         background: 'bg-charcoal shadow-lg',
//         textColor: 'text-soft-cream',
//         hoverColor: 'hover:text-metallic-gold',
//         buttonStyle: 'bg-royal-maroon text-metallic-gold'
//       };
//     }
//   };

//   const styles = getHeaderStyles();

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="bg-royal-maroon text-soft-cream py-2 px-4 text-sm relative z-50">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1">
//               <FiMapPin className="text-metallic-gold" />
//               <span>123 Royal Street, Mumbai, India</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-1">
//               <FiPhone className="text-metallic-gold" />
//               <span>+91 98765 43210</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FiClock className="text-metallic-gold" />
//             <span>Open Today: 11:00 AM - 11:00 PM</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <motion.header
//         className={`fixed w-full z-50 transition-all duration-300 ${styles.background} ${
//           isScrolled ? 'py-2' : 'py-4'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <motion.div
//               className={`text-2xl font-bold font-serif ${styles.textColor}`}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Link to="/">
//                 Tavisha <span className="text-burnt-orange">Lounge</span>
//               </Link>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <MotionLink
//                   key={item.name}
//                   to={item.to}
//                   className={`font-medium transition-colors duration-300 ${styles.textColor} ${styles.hoverColor}`}
//                   whileHover={{ y: -2 }}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {item.name}
//                 </MotionLink>
//               ))}

//               <motion.button
//                 className={`${styles.buttonStyle} px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Reserve Table
//               </motion.button>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className={`lg:hidden text-2xl ${styles.textColor}`}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="lg:hidden absolute top-full left-0 w-full bg-soft-cream shadow-xl"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="container mx-auto px-4 py-6">
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item, index) => (
//                     <MotionLink
//                       key={item.name}
//                       to={item.to}
//                       onClick={() => setIsMenuOpen(false)}
//                       className="text-charcoal hover:text-royal-maroon font-medium py-2 transition-colors duration-300"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       {item.name}
//                     </MotionLink>
//                   ))}

//                   <motion.button
//                     className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold mt-4"
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Reserve Table
//                   </motion.button>
//                 </nav>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// };

// export default Header;


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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Reduced threshold for earlier background change
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
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

  // Simplified header styles
  const getHeaderClasses = () => {
    if (isScrolled) {
      return 'bg-soft-cream shadow-lg py-2 text-charcoal';
    }
    // On home page with no scroll - transparent
    if (isHomePage) {
      return 'bg-transparent py-4 text-soft-cream';
    }
    // On other pages with no scroll - solid dark
    return 'bg-charcoal py-4 text-soft-cream';
  };

  const getLinkClasses = () => {
    if (isScrolled) {
      return 'text-charcoal hover:text-royal-maroon';
    }
    return 'text-soft-cream hover:text-metallic-gold';
  };

  // Animation variants for sidebar menu
  const sidebarVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        damping: 15
      }
    })
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block bg-royal-maroon text-soft-cream py-2 px-4 text-sm relative z-50">
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
        className={`fixed w-full z-50 transition-all duration-300 ${getHeaderClasses()}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="z-50"
            >
              <Link to="/" className="text-2xl font-bold font-serif">
                Tavisha <span className="text-burnt-orange">Lounge</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <MotionLink
                  key={item.name}
                  to={item.to}
                  className={`font-medium transition-colors duration-300 ${getLinkClasses()}`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </MotionLink>
              ))}

              <motion.button
                className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Table
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-2xl z-50 ${
                isScrolled ? 'text-charcoal' : 'text-soft-cream'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div
                className="fixed top-0 right-0 h-full w-80 bg-soft-cream shadow-soft-lg lg:hidden"
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="flex flex-col h-full">
                  {/* Sidebar Header */}
                  <div className="p-6 border-b border-charcoal/10">
                    <h2 className="text-2xl font-serif font-bold text-royal-maroon">
                      Menu
                    </h2>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 py-8 px-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          custom={index}
                          variants={menuItemVariants}
                        >
                          <Link
                            to={item.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between py-3 px-4 text-charcoal hover:text-royal-maroon hover:bg-royal-maroon/5 rounded-lg transition-colors duration-300 group"
                          >
                            <span className="font-medium">{item.name}</span>
                            <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-royal-maroon" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* Sidebar Footer */}
                  <div className="p-6 border-t border-charcoal/10">
                    <motion.button
                      className="w-full bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsMenuOpen(false);
                        // Add navigation to reservations
                      }}
                    >
                      Reserve Table
                    </motion.button>
                    
                    {/* Contact Info in Sidebar */}
                    <div className="mt-6 space-y-3 text-sm text-charcoal/70">
                      <div className="flex items-center space-x-2">
                        <FiPhone className="text-metallic-gold" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMapPin className="text-metallic-gold" />
                        <span>123 Royal Street, Mumbai</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiClock className="text-metallic-gold" />
                        <span>11:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-[116px] md:h-[136px]" />
    </>
  );
};

export default Header;