// src/components/SeasonalBookingPage.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCalendar, FiClock, FiUsers, FiArrowLeft, FiCheck, FiStar } from 'react-icons/fi';
// import { LuChefHat } from "react-icons/lu";

// const SeasonalBookingPage = ({ seasonalSpecial, onClose, onBookingSuccess }) => {
//   const [bookingStep, setBookingStep] = useState(1);
//   const [bookingData, setBookingData] = useState({
//     date: '',
//     time: '',
//     guests: '2',
//     name: '',
//     phone: '',
//     email: '',
//     specialRequests: '',
//     includeWinePairing: false,
//     includeDessert: false
//   });

//   const timeSlots = ['11:00 AM', '12:30 PM', '2:00 PM', '6:00 PM', '7:30 PM', '9:00 PM'];
//   const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

//   const seasonalAddons = {
//     'Winter Royal Thali': [
//       { id: 'wine', name: 'Mulled Wine Pairing', price: '$25', description: 'Specially curated winter wines' },
//       { id: 'dessert', name: 'Winter Dessert Platter', price: '$18', description: 'Seasonal sweets collection' }
//     ],
//     'Summer Coolers Feast': [
//       { id: 'mocktails', name: 'Summer Mocktail Pairing', price: '$20', description: 'Refreshing seasonal drinks' },
//       { id: 'icecream', name: 'Artisanal Ice Cream', price: '$12', description: 'Handcrafted summer flavors' }
//     ],
//     'Monsoon Spice Journey': [
//       { id: 'chai', name: 'Premium Tea Selection', price: '$15', description: 'Warming monsoon tea varieties' },
//       { id: 'pakora', name: 'Extra Pakora Platter', price: '$22', description: 'Additional monsoon snacks' }
//     ]
//   };

//   const handleInputChange = (field, value) => {
//     setBookingData(prev => ({ ...prev, [field]: value }));
//   };

//   const nextStep = () => setBookingStep(prev => prev + 1);
//   const prevStep = () => setBookingStep(prev => prev - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate API call
//     setTimeout(() => {
//       onBookingSuccess(bookingData);
//       setBookingStep(4);
//     }, 1500);
//   };

//   const calculateTotal = () => {
//     const basePrice = parseInt(seasonalSpecial.price.replace('$', ''));
//     let addonsTotal = 0;
    
//     if (bookingData.includeWinePairing) {
//       addonsTotal += seasonalAddons[seasonalSpecial.name]?.[0] ? 
//         parseInt(seasonalAddons[seasonalSpecial.name][0].price.replace('$', '')) : 0;
//     }
//     if (bookingData.includeDessert) {
//       addonsTotal += seasonalAddons[seasonalSpecial.name]?.[1] ? 
//         parseInt(seasonalAddons[seasonalSpecial.name][1].price.replace('$', '')) : 0;
//     }
    
//     return basePrice + addonsTotal;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-y-auto"
//     >
//       <motion.div
//         initial={{ scale: 0.8, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         className="bg-soft-cream rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-6 text-soft-cream relative">
//           <button
//             onClick={onClose}
//             className="absolute left-6 top-6 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
//           >
//             <FiArrowLeft className="w-5 h-5" />
//           </button>
          
//           <div className="text-center">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">Book {seasonalSpecial.name}</h2>
//             <p className="text-metallic-gold">Step {bookingStep} of 3</p>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center mt-4 space-x-4">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
//                   bookingStep >= step ? 'bg-metallic-gold text-royal-maroon' : 'bg-white bg-opacity-20 text-white'
//                 }`}>
//                   {step}
//                 </div>
//                 {step < 3 && <div className="w-8 h-1 bg-white bg-opacity-20 mx-2"></div>}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="p-6 md:p-8">
//           <AnimatePresence mode="wait">
//             {bookingStep === 1 && (
//               <motion.div
//                 key="step1"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6"
//               >
//                 <div className="text-center mb-6">
//                   <FiCalendar className="w-12 h-12 text-royal-maroon mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-charcoal mb-2">Select Date & Time</h3>
//                   <p className="text-gray-600">Choose when you'd like to enjoy your seasonal experience</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-charcoal mb-2">Date</label>
//                     <input
//                       type="date"
//                       value={bookingData.date}
//                       onChange={(e) => handleInputChange('date', e.target.value)}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-charcoal mb-2">Number of Guests</label>
//                     <select
//                       value={bookingData.guests}
//                       onChange={(e) => handleInputChange('guests', e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                     >
//                       {guestOptions.map(option => (
//                         <option key={option} value={option}>
//                           {option} {option === '1' ? 'Guest' : 'Guests'}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-charcoal mb-3">Preferred Time</label>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                     {timeSlots.map((time) => (
//                       <motion.button
//                         key={time}
//                         type="button"
//                         onClick={() => handleInputChange('time', time)}
//                         className={`p-3 rounded-lg border-2 transition-all duration-300 ${
//                           bookingData.time === time
//                             ? 'border-royal-maroon bg-royal-maroon bg-opacity-10 text-royal-maroon'
//                             : 'border-gray-300 text-gray-600 hover:border-royal-maroon hover:text-royal-maroon'
//                         }`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {time}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.button
//                   onClick={nextStep}
//                   disabled={!bookingData.date || !bookingData.time}
//                   className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Continue to Details
//                 </motion.button>
//               </motion.div>
//             )}

//             {bookingStep === 2 && (
//               <motion.div
//                 key="step2"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6"
//               >
//                 <div className="text-center mb-6">
//                   <FiUsers className="w-12 h-12 text-royal-maroon mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-charcoal mb-2">Your Information</h3>
//                   <p className="text-gray-600">Tell us how we can prepare for your visit</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       value={bookingData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
//                     <input
//                       type="tel"
//                       value={bookingData.phone}
//                       onChange={(e) => handleInputChange('phone', e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                       placeholder="Your phone number"
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-semibold text-charcoal mb-2">Email Address</label>
//                     <input
//                       type="email"
//                       value={bookingData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-charcoal mb-2">Special Requests</label>
//                   <textarea
//                     value={bookingData.specialRequests}
//                     onChange={(e) => handleInputChange('specialRequests', e.target.value)}
//                     rows="3"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
//                     placeholder="Any dietary restrictions, allergies, or special celebration notes..."
//                   />
//                 </div>

//                 {/* Seasonal Add-ons */}
//                 <div className="border-t pt-6">
//                   <h4 className="text-lg font-semibold text-charcoal mb-4">Seasonal Enhancements</h4>
//                   <div className="space-y-3">
//                     {seasonalAddons[seasonalSpecial.name]?.map((addon, index) => (
//                       <motion.label
//                         key={addon.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-royal-maroon transition-all duration-300"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={index === 0 ? bookingData.includeWinePairing : bookingData.includeDessert}
//                           onChange={(e) => handleInputChange(
//                             index === 0 ? 'includeWinePairing' : 'includeDessert', 
//                             e.target.checked
//                           )}
//                           className="rounded text-royal-maroon focus:ring-royal-maroon"
//                         />
//                         <div className="flex-1">
//                           <div className="flex justify-between items-center">
//                             <span className="font-semibold text-charcoal">{addon.name}</span>
//                             <span className="text-burnt-orange font-bold">{addon.price}</span>
//                           </div>
//                           <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
//                         </div>
//                       </motion.label>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex space-x-4">
//                   <motion.button
//                     onClick={prevStep}
//                     className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Back
//                   </motion.button>
//                   <motion.button
//                     onClick={nextStep}
//                     className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Review Booking
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}

//             {bookingStep === 3 && (
//               <motion.div
//                 key="step3"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6"
//               >
//                 <div className="text-center mb-6">
//                   <FiCheck className="w-12 h-12 text-royal-maroon mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-charcoal mb-2">Confirm Your Booking</h3>
//                   <p className="text-gray-600">Review your seasonal experience details</p>
//                 </div>

//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//                   {/* Seasonal Special Summary */}
//                   <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-200">
//                     <img
//                       src={seasonalSpecial.image}
//                       alt={seasonalSpecial.name}
//                       className="w-20 h-20 object-cover rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <h4 className="text-xl font-bold text-royal-maroon mb-2">{seasonalSpecial.name}</h4>
//                       <p className="text-gray-600 text-sm mb-2">{seasonalSpecial.description}</p>
//                       <div className="flex items-center space-x-4 text-sm text-gray-500">
//                         <div className="flex items-center space-x-1">
//                           <FiCalendar className="w-4 h-4" />
//                           <span>{seasonalSpecial.duration}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <FiStar className="w-4 h-4 text-yellow-400" />
//                           <span>Seasonal Special</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-burnt-orange">{seasonalSpecial.price}</div>
//                       <div className="text-sm text-gray-500">per person</div>
//                     </div>
//                   </div>

//                   {/* Booking Details */}
//                   <div className="space-y-4 mb-6">
//                     <h5 className="font-semibold text-charcoal">Booking Details:</h5>
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <span className="text-gray-600">Date:</span>
//                         <div className="font-semibold">{bookingData.date}</div>
//                       </div>
//                       <div>
//                         <span className="text-gray-600">Time:</span>
//                         <div className="font-semibold">{bookingData.time}</div>
//                       </div>
//                       <div>
//                         <span className="text-gray-600">Guests:</span>
//                         <div className="font-semibold">{bookingData.guests} {bookingData.guests === '1' ? 'Guest' : 'Guests'}</div>
//                       </div>
//                       <div>
//                         <span className="text-gray-600">Contact:</span>
//                         <div className="font-semibold">{bookingData.phone}</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Add-ons */}
//                   {(bookingData.includeWinePairing || bookingData.includeDessert) && (
//                     <div className="mb-6">
//                       <h5 className="font-semibold text-charcoal mb-3">Selected Enhancements:</h5>
//                       <div className="space-y-2">
//                         {bookingData.includeWinePairing && seasonalAddons[seasonalSpecial.name]?.[0] && (
//                           <div className="flex justify-between text-sm">
//                             <span>{seasonalAddons[seasonalSpecial.name][0].name}</span>
//                             <span className="text-burnt-orange font-semibold">
//                               {seasonalAddons[seasonalSpecial.name][0].price}
//                             </span>
//                           </div>
//                         )}
//                         {bookingData.includeDessert && seasonalAddons[seasonalSpecial.name]?.[1] && (
//                           <div className="flex justify-between text-sm">
//                             <span>{seasonalAddons[seasonalSpecial.name][1].name}</span>
//                             <span className="text-burnt-orange font-semibold">
//                               {seasonalAddons[seasonalSpecial.name][1].price}
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Total */}
//                   <div className="border-t pt-4">
//                     <div className="flex justify-between items-center text-lg font-bold">
//                       <span>Total Amount:</span>
//                       <span className="text-royal-maroon">${calculateTotal()}</span>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">*Includes taxes. Service charge additional</p>
//                   </div>
//                 </div>

//                 <div className="flex space-x-4">
//                   <motion.button
//                     onClick={prevStep}
//                     className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Back
//                   </motion.button>
//                   <motion.button
//                     onClick={handleSubmit}
//                     className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Confirm Booking
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}

//             {bookingStep === 4 && (
//               <motion.div
//                 key="step4"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FiCheck className="w-10 h-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-charcoal mb-4">Booking Confirmed!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for booking the {seasonalSpecial.name}. We've sent a confirmation to {bookingData.email}
//                 </p>
//                 <div className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-2xl p-6 mb-6">
//                   <h4 className="font-semibold text-royal-maroon mb-2">What to Expect:</h4>
//                   <ul className="text-sm text-gray-600 space-y-1 text-left">
//                     <li>• Confirmation email with details</li>
//                     <li>• Reminder 24 hours before your booking</li>
//                     <li>• Special seasonal welcome drink</li>
//                     <li>• Chef's personalized attention</li>
//                   </ul>
//                 </div>
//                 <div className="flex space-x-4">
//                   <motion.button
//                     onClick={onClose}
//                     className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Close
//                   </motion.button>
//                   <motion.button
//                     onClick={() => {
//                       onClose();
//                       // You can add navigation to home or menu here
//                     }}
//                     className="flex-1 border border-royal-maroon text-royal-maroon py-3 rounded-lg font-semibold hover:bg-royal-maroon hover:text-soft-cream transition-all duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Book Another
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SeasonalBookingPage;

// src/components/SeasonalBookingPage.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiUsers, FiArrowLeft, FiCheck, FiStar, FiX } from 'react-icons/fi';

const SeasonalBookingPage = ({ seasonalSpecial, onClose, onBookingSuccess }) => {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
    includeWinePairing: false,
    includeDessert: false
  });

  const timeSlots = ['11:00 AM', '12:30 PM', '2:00 PM', '6:00 PM', '7:30 PM', '9:00 PM'];
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const seasonalAddons = {
    'Winter Royal Thali': [
      { id: 'wine', name: 'Mulled Wine Pairing', price: '$25', description: 'Specially curated winter wines' },
      { id: 'dessert', name: 'Winter Dessert Platter', price: '$18', description: 'Seasonal sweets collection' }
    ],
    'Summer Coolers Feast': [
      { id: 'mocktails', name: 'Summer Mocktail Pairing', price: '$20', description: 'Refreshing seasonal drinks' },
      { id: 'icecream', name: 'Artisanal Ice Cream', price: '$12', description: 'Handcrafted summer flavors' }
    ],
    'Monsoon Spice Journey': [
      { id: 'chai', name: 'Premium Tea Selection', price: '$15', description: 'Warming monsoon tea varieties' },
      { id: 'pakora', name: 'Extra Pakora Platter', price: '$22', description: 'Additional monsoon snacks' }
    ]
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setBookingStep(prev => prev + 1);
  const prevStep = () => setBookingStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      onBookingSuccess(bookingData);
      setBookingStep(4);
    }, 1500);
  };

  const calculateTotal = () => {
    const basePrice = parseInt(seasonalSpecial.price.replace('$', ''));
    let addonsTotal = 0;
    
    if (bookingData.includeWinePairing) {
      addonsTotal += seasonalAddons[seasonalSpecial.name]?.[0] ? 
        parseInt(seasonalAddons[seasonalSpecial.name][0].price.replace('$', '')) : 0;
    }
    if (bookingData.includeDessert) {
      addonsTotal += seasonalAddons[seasonalSpecial.name]?.[1] ? 
        parseInt(seasonalAddons[seasonalSpecial.name][1].price.replace('$', '')) : 0;
    }
    
    return basePrice + addonsTotal;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-soft-cream rounded-xl sm:rounded-2xl lg:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-4 sm:p-6 text-soft-cream relative">
          <div className="flex items-center justify-between mb-4 sm:mb-0">
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="sm:hidden w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Book {seasonalSpecial.name}</h2>
            <p className="text-metallic-gold text-sm sm:text-base">Step {bookingStep} of 3</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mt-4 space-x-2 sm:space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                  bookingStep >= step ? 'bg-metallic-gold text-royal-maroon' : 'bg-white bg-opacity-20 text-white'
                }`}>
                  {step}
                </div>
                {step < 3 && <div className="w-4 sm:w-8 h-1 bg-white bg-opacity-20 mx-1 sm:mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-200px)] sm:max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {bookingStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <FiCalendar className="w-8 h-8 sm:w-12 sm:h-12 text-royal-maroon mx-auto mb-2 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">Select Date & Time</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Choose when you'd like to enjoy your seasonal experience</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Number of Guests</label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                    >
                      {guestOptions.map(option => (
                        <option key={option} value={option}>
                          {option} {option === '1' ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-3">Preferred Time</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        type="button"
                        onClick={() => handleInputChange('time', time)}
                        className={`p-2 sm:p-3 text-xs sm:text-sm rounded-lg border-2 transition-all duration-300 ${
                          bookingData.time === time
                            ? 'border-royal-maroon bg-royal-maroon bg-opacity-10 text-royal-maroon'
                            : 'border-gray-300 text-gray-600 hover:border-royal-maroon hover:text-royal-maroon'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={nextStep}
                  disabled={!bookingData.date || !bookingData.time}
                  className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-royal-maroon-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue to Details
                </motion.button>
              </motion.div>
            )}

            {bookingStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <FiUsers className="w-8 h-8 sm:w-12 sm:h-12 text-royal-maroon mx-auto mb-2 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">Your Information</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Tell us how we can prepare for your visit</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Email Address</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Special Requests</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    rows="3"
                    className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                    placeholder="Any dietary restrictions, allergies, or special celebration notes..."
                  />
                </div>

                {/* Seasonal Add-ons */}
                <div className="border-t pt-4 sm:pt-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3 sm:mb-4">Seasonal Enhancements</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {seasonalAddons[seasonalSpecial.name]?.map((addon, index) => (
                      <motion.label
                        key={addon.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-royal-maroon transition-all duration-300"
                      >
                        <input
                          type="checkbox"
                          checked={index === 0 ? bookingData.includeWinePairing : bookingData.includeDessert}
                          onChange={(e) => handleInputChange(
                            index === 0 ? 'includeWinePairing' : 'includeDessert', 
                            e.target.checked
                          )}
                          className="rounded text-royal-maroon focus:ring-royal-maroon mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                            <span className="font-semibold text-charcoal text-sm sm:text-base truncate">{addon.name}</span>
                            <span className="text-burnt-orange font-bold text-sm sm:text-base whitespace-nowrap">{addon.price}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{addon.description}</p>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={nextStep}
                    className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-royal-maroon-dark transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Review Booking
                  </motion.button>
                </div>
              </motion.div>
            )}

            {bookingStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <FiCheck className="w-8 h-8 sm:w-12 sm:h-12 text-royal-maroon mx-auto mb-2 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">Confirm Your Booking</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Review your seasonal experience details</p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                  {/* Seasonal Special Summary */}
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                    <img
                      src={seasonalSpecial.image}
                      alt={seasonalSpecial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mx-auto sm:mx-0"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-royal-maroon mb-2">{seasonalSpecial.name}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2">{seasonalSpecial.description}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{seasonalSpecial.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                          <span>Seasonal Special</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-right w-full sm:w-auto">
                      <div className="text-xl sm:text-2xl font-bold text-burnt-orange">{seasonalSpecial.price}</div>
                      <div className="text-xs sm:text-sm text-gray-500">per person</div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <h5 className="font-semibold text-charcoal text-sm sm:text-base">Booking Details:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <div className="font-semibold truncate">{bookingData.date}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Time:</span>
                        <div className="font-semibold">{bookingData.time}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Guests:</span>
                        <div className="font-semibold">{bookingData.guests} {bookingData.guests === '1' ? 'Guest' : 'Guests'}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Contact:</span>
                        <div className="font-semibold truncate">{bookingData.phone}</div>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons */}
                  {(bookingData.includeWinePairing || bookingData.includeDessert) && (
                    <div className="mb-4 sm:mb-6">
                      <h5 className="font-semibold text-charcoal text-sm sm:text-base mb-2 sm:mb-3">Selected Enhancements:</h5>
                      <div className="space-y-1 sm:space-y-2">
                        {bookingData.includeWinePairing && seasonalAddons[seasonalSpecial.name]?.[0] && (
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="truncate">{seasonalAddons[seasonalSpecial.name][0].name}</span>
                            <span className="text-burnt-orange font-semibold whitespace-nowrap ml-2">
                              {seasonalAddons[seasonalSpecial.name][0].price}
                            </span>
                          </div>
                        )}
                        {bookingData.includeDessert && seasonalAddons[seasonalSpecial.name]?.[1] && (
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="truncate">{seasonalAddons[seasonalSpecial.name][1].name}</span>
                            <span className="text-burnt-orange font-semibold whitespace-nowrap ml-2">
                              {seasonalAddons[seasonalSpecial.name][1].price}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="flex justify-between items-center text-base sm:text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-royal-maroon">${calculateTotal()}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">*Includes taxes. Service charge additional</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    onClick={prevStep}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={handleSubmit}
                    className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-royal-maroon-dark transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Confirm Booking
                  </motion.button>
                </div>
              </motion.div>
            )}

            {bookingStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 sm:py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FiCheck className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">Booking Confirmed!</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Thank you for booking the {seasonalSpecial.name}. We've sent a confirmation to {bookingData.email}
                </p>
                <div className="bg-metallic-gold bg-opacity-10 border border-metallic-gold border-opacity-30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-royal-maroon text-sm sm:text-base mb-2">What to Expect:</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1 text-left">
                    <li>• Confirmation email with details</li>
                    <li>• Reminder 24 hours before your booking</li>
                    <li>• Special seasonal welcome drink</li>
                    <li>• Chef's personalized attention</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    onClick={onClose}
                    className="flex-1 bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-royal-maroon-dark transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      onClose();
                      // You can add navigation to home or menu here
                    }}
                    className="flex-1 border border-royal-maroon text-royal-maroon py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-royal-maroon hover:text-soft-cream transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Another
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SeasonalBookingPage;