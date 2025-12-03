// // src/components/ContactLocation.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// const ContactLocation = () => {
//     // console.log("my contect page are show ")
//   const [activeDay, setActiveDay] = useState(0);

//   const openingHours = [
//     { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
//     { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
//     { day: 'Sunday', hours: '11:00 AM - 9:00 PM' },
//     { day: 'Special Holidays', hours: '10:00 AM - 8:00 PM' }
//   ];

//   const contactInfo = [
//     {
//       icon: FiMapPin,
//       title: 'Our Location',
//       details: ['123 Royal Street', 'Mumbai, Maharashtra 400001', 'India'],
//       color: 'text-red-500'
//     },
//     {
//       icon: FiPhone,
//       title: 'Phone Number',
//       details: ['+91 98765 43210', '+91 98765 43211'],
//       color: 'text-green-500'
//     },
//     {
//       icon: FiMail,
//       title: 'Email Address',
//       details: ['reservations@tavishalounge.com', 'info@tavishalounge.com'],
//       color: 'text-blue-500'
//     },
//     {
//       icon: FiClock,
//       title: 'Opening Hours',
//       details: ['Mon-Sun: 11:00 AM - 11:00 PM', 'Special hours on holidays'],
//       color: 'text-purple-500'
//     }
//   ];

//   const socialLinks = [
//     { icon: FiFacebook, href: '#', color: 'hover:text-blue-500' },
//     { icon: FiTwitter, href: '#', color: 'hover:text-blue-400' },
//     { icon: FiInstagram, href: '#', color: 'hover:text-pink-500' }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   const pulseAnimation = {
//     initial: { scale: 1 },
//     animate: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-soft-cream">
//       <div className="container mx-auto px-4">
//         <p>hello</p>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
//             Visit <span className="text-royal-maroon">Tavisha</span> Lounge
//           </h2>
//           <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
//           <p className="text-lg text-charcoal max-w-2xl mx-auto">
//             Experience royal dining in the heart of Mumbai. Find us easily and plan your visit.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//           >
//             <motion.h3
//               variants={itemVariants}
//               className="text-2xl font-bold text-royal-maroon mb-8"
//             >
//               Get In Touch
//             </motion.h3>

//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.div
//                   key={item.title}
//                   variants={itemVariants}
//                   className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//                   whileHover={{ y: -5, scale: 1.02 }}
//                 >
//                   <motion.div
//                     className={`p-3 rounded-full bg-soft-cream ${item.color}`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <item.icon className="w-6 h-6" />
//                   </motion.div>
//                   <div>
//                     <h4 className="font-bold text-charcoal mb-2">{item.title}</h4>
//                     {item.details.map((detail, i) => (
//                       <p key={i} className="text-gray-600">{detail}</p>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <motion.div
//               variants={itemVariants}
//               className="flex space-x-4 mt-8"
//             >
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-burnt-orange transition-colors duration-300"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Map & Hours */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Interactive Map */}
//             <motion.div
//               className="bg-white rounded-2xl shadow-xl overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="relative h-64 bg-gradient-to-br from-royal-maroon to-burnt-orange flex items-center justify-center">
//                 <motion.div
//                   className="text-center text-soft-cream"
//                   variants={pulseAnimation}
//                   initial="initial"
//                   animate="animate"
//                 >
//                   <FiMapPin className="w-12 h-12 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">Tavisha Lounge</h3>
//                   <p className="text-metallic-gold">123 Royal Street, Mumbai</p>
//                 </motion.div>
                
//                 {/* Animated Location Pin */}
//                 <motion.div
//                   className="absolute bottom-4 right-4 w-8 h-8 bg-metallic-gold rounded-full"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.7, 1, 0.7]
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 />
//               </div>
//               <div className="p-6">
//                 <h4 className="font-bold text-charcoal mb-4">How to Reach Us</h4>
//                 <div className="space-y-2 text-gray-600">
//                   <p>🚇 Nearest Metro: Royal Station (200m)</p>
//                   <p>🚌 Bus Stop: Heritage Square (150m)</p>
//                   <p>🚗 Parking: Valet available</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Opening Hours */}
//             <motion.div
//               className="bg-white rounded-2xl shadow-xl p-6"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <h3 className="text-xl font-bold text-royal-maroon mb-6">Opening Hours</h3>
//               <div className="space-y-4">
//                 {openingHours.map((schedule, index) => (
//                   <motion.div
//                     key={schedule.day}
//                     className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
//                       activeDay === index
//                         ? 'bg-royal-maroon text-metallic-gold'
//                         : 'bg-gray-50 text-charcoal hover:bg-gray-100'
//                     }`}
//                     onClick={() => setActiveDay(index)}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <span className="font-medium">{schedule.day}</span>
//                     <span className={activeDay === index ? 'text-metallic-gold' : 'text-burnt-orange'}>
//                       {schedule.hours}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Special Notice */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="mt-6 p-4 bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-lg"
//               >
//                 <p className="text-sm text-charcoal text-center">
//                   <strong>Note:</strong> We recommend making reservations during peak hours and weekends to ensure availability.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Quick Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
//         >
//           <motion.a
//             href="#reservations"
//             className="bg-royal-maroon text-metallic-gold px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-royal-maroon-dark transition-colors duration-300"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Reserve a Table
//           </motion.a>
//           <motion.a
//             href="tel:+919876543210"
//             className="bg-burnt-orange text-soft-cream px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-burnt-orange-dark transition-colors duration-300"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Call Us Now
//           </motion.a>
//           <motion.a
//             href="https://maps.google.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border-2 border-royal-maroon text-royal-maroon px-8 py-4 rounded-lg font-bold text-lg text-center hover:bg-royal-maroon hover:text-soft-cream transition-all duration-300"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Directions
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactLocation;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const ContactLocation = () => {
  const [activeDay, setActiveDay] = useState(0);

  const openingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Special Holidays', hours: '10:00 AM - 8:00 PM' }
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Location',
      details: ['123 Royal Street', 'Mumbai, Maharashtra 400001', 'India'],
      color: 'text-red-500'
    },
    {
      icon: FiPhone,
      title: 'Phone Number',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'text-green-500'
    },
    {
      icon: FiMail,
      title: 'Email Address',
      details: ['reservations@tavishalounge.com', 'info@tavishalounge.com'],
      color: 'text-blue-500'
    },
    {
      icon: FiClock,
      title: 'Opening Hours',
      details: ['Mon-Sun: 11:00 AM - 11:00 PM', 'Special hours on holidays'],
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', color: 'hover:text-blue-500' },
    { icon: FiTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FiInstagram, href: '#', color: 'hover:text-pink-500' }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 px-4">
            Visit <span className="text-royal-maroon">Tavisha</span> Lounge
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-metallic-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-charcoal max-w-2xl mx-auto px-4">
            Experience royal dining in the heart of Mumbai. Find us easily and plan your visit.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Information - Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="order-2 lg:order-1"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-royal-maroon mb-6 md:mb-8 text-center lg:text-left"
            >
              Get In Touch
            </motion.h3>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <motion.div
                    className={`p-2 sm:p-3 rounded-full bg-soft-cream ${item.color} flex-shrink-0 self-center sm:self-start`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <div className="text-center sm:text-left flex-1">
                    <h4 className="font-bold text-charcoal mb-2 text-lg sm:text-xl">{item.title}</h4>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm sm:text-base">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mt-6 md:mt-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-burnt-orange transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Map & Hours - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            {/* Interactive Map */}
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-royal-maroon to-burnt-orange flex items-center justify-center">
                <motion.div
                  className="text-center text-soft-cream px-4"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <FiMapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Tavisha Lounge</h3>
                  <p className="text-metallic-gold text-sm sm:text-base md:text-lg mt-1">123 Royal Street, Mumbai</p>
                </motion.div>
                
                {/* Animated Location Pin */}
                <motion.div
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-metallic-gold rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="font-bold text-charcoal mb-3 sm:mb-4 text-lg sm:text-xl">How to Reach Us</h4>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-center space-x-2">
                    <span>🚇</span>
                    <span>Nearest Metro: Royal Station (200m)</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>🚌</span>
                    <span>Bus Stop: Heritage Square (150m)</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>🚗</span>
                    <span>Parking: Valet available</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-royal-maroon mb-4 sm:mb-6 text-center sm:text-left">
                Opening Hours
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {openingHours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeDay === index
                        ? 'bg-royal-maroon text-metallic-gold'
                        : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveDay(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-sm sm:text-base mb-1 sm:mb-0 text-center sm:text-left">
                      {schedule.day}
                    </span>
                    <span className={`text-sm sm:text-base text-center sm:text-right ${
                      activeDay === index ? 'text-metallic-gold' : 'text-burnt-orange'
                    }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Special Notice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-lg"
              >
                <p className="text-xs sm:text-sm text-charcoal text-center">
                  <strong>Note:</strong> We recommend making reservations during peak hours and weekends to ensure availability.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 md:mt-12"
        >
          <motion.a
            href="#reservations"
            className="bg-royal-maroon text-metallic-gold px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg text-center hover:bg-royal-maroon-dark transition-colors duration-300 flex-1 sm:flex-none max-w-xs mx-auto sm:mx-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve a Table
          </motion.a>
          <motion.a
            href="tel:+919876543210"
            className="bg-burnt-orange text-soft-cream px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg text-center hover:bg-burnt-orange-dark transition-colors duration-300 flex-1 sm:flex-none max-w-xs mx-auto sm:mx-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us Now
          </motion.a>
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-royal-maroon text-royal-maroon px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg text-center hover:bg-royal-maroon hover:text-soft-cream transition-all duration-300 flex-1 sm:flex-none max-w-xs mx-auto sm:mx-0"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.a>
        </motion.div>

        {/* Additional Contact Info for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="lg:hidden mt-8 text-center"
        >
          <div className="bg-royal-maroon text-soft-cream rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-sm">
              <p>📞 <a href="tel:+919876543210" className="underline">+91 98765 43210</a></p>
              <p>📧 <a href="mailto:info@tavishalounge.com" className="underline">info@tavishalounge.com</a></p>
              <p>📍 123 Royal Street, Mumbai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocation;