// // InteractiveMap.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   MapPin, 
//   Navigation, 
//   Clock, 
//   Car, 
//   Train,
//   Phone,
//   ExternalLink
// } from 'lucide-react';

// const InteractiveMap = () => {
//   const [activeInfo, setActiveInfo] = useState('location');

//   const locationInfo = {
//     address: 'Royal Heritage Road, City Center, 560001',
//     coordinates: '12.9716° N, 77.5946° E'
//   };

//   const transportation = [
//     { icon: Car, type: 'Car', time: '5 min', details: 'Ample valet parking available' },
//     { icon: Train, type: 'Metro', time: '3 min', details: '500m from City Center Station' },
//     { icon: '🚍', type: 'Bus', time: '8 min', details: 'Stop right outside the restaurant' }
//   ];

//   const nearbyLandmarks = [
//     'Royal Shopping Mall - 200m',
//     'City Central Park - 400m', 
//     'Heritage Museum - 600m',
//     'Business District - 800m'
//   ];

//   return (
//     <section id="map" className="py-20 bg-gradient-to-b from-white to-soft-cream">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif text-royal-maroon mb-4">
//             Find Us Easily
//           </h2>
//           <p className="text-xl font-sans text-charcoal/70 max-w-2xl mx-auto">
//             We're closer than you think — drop by anytime for a royal experience
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Map Container */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-metallic-gold/20">
//               {/* Map Visual */}
//               <div className="h-96 bg-gradient-to-br from-royal-maroon/10 to-metallic-gold/5 relative overflow-hidden">
//                 {/* Mock Interactive Map */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ duration: 0.6, delay: 0.3 }}
//                       className="mb-6"
//                     >
//                       <div className="w-20 h-20 bg-royal-maroon rounded-full flex items-center justify-center mx-auto shadow-2xl">
//                         <MapPin className="w-10 h-10 text-metallic-gold" />
//                       </div>
//                     </motion.div>
                    
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: 0.5 }}
//                       className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mx-4"
//                     >
//                       <h3 className="font-serif text-royal-maroon text-xl mb-2">
//                         Tavisha Lounge
//                       </h3>
//                       <p className="font-sans text-charcoal/70 text-sm">
//                         {locationInfo.address}
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Decorative Map Elements */}
//                 <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-metallic-gold/30 rounded-full" />
//                 <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-burnt-orange/30 rounded-full" />
//                 <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-royal-maroon/20 rounded-full" />
                
//                 {/* Animated Route */}
//                 <motion.div
//                   className="absolute bottom-10 left-10 w-32 h-1 bg-metallic-gold rounded-full"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 1.5, delay: 0.8 }}
//                 />
//               </div>

//               {/* Map Controls */}
//               <div className="p-6 bg-soft-cream border-t border-soft-cream">
//                 <div className="flex flex-wrap gap-4 justify-between items-center">
//                   <motion.a
//                     href="https://maps.google.com/?q=Tavisha+Lounge+Royal+Heritage+Road"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-royal-maroon text-metallic-gold font-sans font-semibold py-3 px-6 rounded-xl hover:bg-burnt-orange transition-colors duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Navigation className="w-4 h-4" />
//                     Open in Maps
//                     <ExternalLink className="w-4 h-4" />
//                   </motion.a>

//                   <div className="flex items-center gap-4 text-charcoal/60">
//                     <Clock className="w-4 h-4" />
//                     <span className="font-sans text-sm">10 AM - 11 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Location Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             {/* Info Tabs */}
//             <div className="flex gap-4 border-b border-soft-cream">
//               {['location', 'transport', 'landmarks'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveInfo(tab)}
//                   className={`pb-4 px-2 font-sans font-semibold capitalize transition-all duration-300 border-b-2 ${
//                     activeInfo === tab
//                       ? 'text-royal-maroon border-royal-maroon'
//                       : 'text-charcoal/60 border-transparent hover:text-royal-maroon'
//                   }`}
//                 >
//                   {tab === 'location' && 'Location Details'}
//                   {tab === 'transport' && 'Transportation'}
//                   {tab === 'landmarks' && 'Nearby'}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="space-y-6">
//               {activeInfo === 'location' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-6"
//                 >
//                   <div className="bg-white rounded-2xl p-6 shadow-lg border border-soft-cream">
//                     <div className="flex items-start gap-4">
//                       <MapPin className="w-6 h-6 text-royal-maroon mt-1" />
//                       <div>
//                         <h4 className="font-serif text-royal-maroon text-lg mb-2">
//                           Our Address
//                         </h4>
//                         <p className="font-sans text-charcoal leading-relaxed">
//                           {locationInfo.address}
//                         </p>
//                         <p className="font-sans text-charcoal/60 text-sm mt-2">
//                           Coordinates: {locationInfo.coordinates}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-r from-royal-maroon/5 to-metallic-gold/5 rounded-2xl p-6">
//                     <h4 className="font-serif text-royal-maroon text-lg mb-4">
//                       Quick Contact
//                     </h4>
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-royal-maroon" />
//                       <a 
//                         href="tel:+919XXXXXXXX" 
//                         className="font-sans font-semibold text-charcoal hover:text-royal-maroon transition-colors"
//                       >
//                         +91 9XXXX XXXXX
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}

//               {activeInfo === 'transport' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-4"
//                 >
//                   {transportation.map((item, index) => {
//                     const Icon = item.icon;
//                     return (
//                       <motion.div
//                         key={index}
//                         className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-soft-cream"
//                         whileHover={{ scale: 1.02 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {typeof Icon === 'function' ? (
//                           <Icon className="w-8 h-8 text-royal-maroon" />
//                         ) : (
//                           <span className="text-2xl">{Icon}</span>
//                         )}
//                         <div className="flex-1">
//                           <div className="flex items-center gap-3">
//                             <h5 className="font-sans font-semibold text-charcoal">
//                               {item.type}
//                             </h5>
//                             <span className="bg-metallic-gold/20 text-royal-marown px-2 py-1 rounded-full text-xs font-sans font-semibold">
//                               {item.time}
//                             </span>
//                           </div>
//                           <p className="font-sans text-charcoal/60 text-sm">
//                             {item.details}
//                           </p>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               )}

//               {activeInfo === 'landmarks' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="space-y-4"
//                 >
//                   {nearbyLandmarks.map((landmark, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-soft-cream"
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className="w-3 h-3 bg-metallic-gold rounded-full" />
//                       <span className="font-sans text-charcoal">{landmark}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               )}
//             </div>

//             {/* Call to Action */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="bg-gradient-to-r from-metallic-gold/10 to-burnt-orange/5 rounded-2xl p-6 text-center"
//             >
//               <h4 className="font-serif text-royal-maroon text-lg mb-2">
//                 Need Directions?
//               </h4>
//               <p className="font-sans text-charcoal/70 text-sm mb-4">
//                 Our team is ready to guide you
//               </p>
//               <motion.a
//                 href="tel:+919XXXXXXXX"
//                 className="inline-flex items-center gap-2 bg-royal-maroon text-metallic-gold font-sans font-semibold py-3 px-6 rounded-xl hover:bg-burnt-orange transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Phone className="w-4 h-4" />
//                 Call for Directions
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteractiveMap;


// LocationSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Train,
  Phone,
  ExternalLink,
  Wifi,
  ParkingCircle,
  Accessibility
} from 'lucide-react';

const LocationSection = () => {
  const [activeInfo, setActiveInfo] = useState('details');

  const locationInfo = {
    address: 'Royal Heritage Road, City Center, 560001',
    coordinates: '12.9716° N, 77.5946° E',
    landmark: 'Opposite Royal Shopping Mall'
  };

  const transportation = [
    { icon: Car, type: 'Car', time: '5 min', details: 'Ample valet parking available', color: 'from-blue-500 to-blue-600' },
    { icon: Train, type: 'Metro', time: '3 min', details: '500m from City Center Station', color: 'from-purple-500 to-purple-600' },
    { icon: '🚍', type: 'Bus', time: '8 min', details: 'Stop right outside the restaurant', color: 'from-green-500 to-green-600' }
  ];

  const amenities = [
    { icon: Wifi, feature: 'Free WiFi', available: true },
    { icon: ParkingCircle, feature: 'Valet Parking', available: true },
    { icon: Accessibility, feature: 'Wheelchair Access', available: true },
    { icon: '🍽️', feature: 'Outdoor Seating', available: true }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Saturday - Sunday', hours: '10:00 AM - 12:00 AM' },
    { day: 'Holidays', hours: '10:00 AM - 11:00 PM' }
  ];

  return (
    <section id="location" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Find Us Easily
          </h2>
          <p className="text-xl font-sans text-slate-600 max-w-2xl mx-auto">
            We're closer than you think — drop by anytime for a royal experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Interactive Map Visual */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="relative h-80 bg-slate-200 rounded-2xl overflow-hidden">
                {/* Mock Map with Interactive Elements */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg mx-4"
                    >
                      <h3 className="font-serif text-slate-900 text-lg mb-1">
                        Tavisha Lounge
                      </h3>
                      <p className="font-sans text-slate-600 text-sm">
                        {locationInfo.address}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative Map Elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-500 rounded-full animate-pulse delay-2000" />
              </div>

              {/* Map Actions */}
              <div className="flex flex-wrap gap-4 mt-6">
                <motion.a
                  href="https://maps.google.com/?q=Tavisha+Lounge+Royal+Heritage+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-900 text-white font-sans font-semibold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors duration-300 flex-1 min-w-[200px] justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href="tel:+919XXXXXXXX"
                  className="flex items-center gap-2 border-2 border-slate-300 text-slate-700 font-sans font-semibold py-3 px-6 rounded-xl hover:border-amber-500 hover:text-amber-600 transition-colors duration-300 flex-1 min-w-[200px] justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  Call for Directions
                </motion.a>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                <Clock className="w-6 h-6 text-amber-600 mb-2" />
                <h4 className="font-sans font-semibold text-slate-900 text-sm">Open Now</h4>
                <p className="font-sans text-slate-600 text-xs">Until 11:00 PM</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                <Car className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-sans font-semibold text-slate-900 text-sm">Parking</h4>
                <p className="font-sans text-slate-600 text-xs">Valet Available</p>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Tabs */}
            <div className="flex gap-4 border-b border-slate-200 overflow-x-auto">
              {['details', 'transport', 'amenities', 'hours'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveInfo(tab)}
                  className={`pb-4 px-2 font-sans font-semibold capitalize whitespace-nowrap transition-all duration-300 border-b-2 ${
                    activeInfo === tab
                      ? 'text-amber-600 border-amber-600'
                      : 'text-slate-500 border-transparent hover:text-slate-700'
                  }`}
                >
                  {tab === 'details' && 'Location Details'}
                  {tab === 'transport' && 'Transportation'}
                  {tab === 'amenities' && 'Amenities'}
                  {tab === 'hours' && 'Hours'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeInfo === 'details' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-amber-500 mt-1" />
                      <div>
                        <h4 className="font-serif text-slate-900 text-lg mb-2">
                          Our Address
                        </h4>
                        <p className="font-sans text-slate-700 leading-relaxed">
                          {locationInfo.address}
                        </p>
                        <p className="font-sans text-slate-600 text-sm mt-2">
                          <strong>Landmark:</strong> {locationInfo.landmark}
                        </p>
                        <p className="font-sans text-slate-500 text-xs mt-1">
                          Coordinates: {locationInfo.coordinates}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
                    <h4 className="font-serif text-slate-900 text-lg mb-4">
                      Quick Contact
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-amber-600" />
                        <a 
                          href="tel:+919XXXXXXXX" 
                          className="font-sans font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                        >
                          +91 9XXXX XXXXX
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-amber-600" />
                        <span className="font-sans text-slate-700">10:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeInfo === 'transport' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {transportation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-slate-200"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {typeof Icon === 'function' ? (
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                            <span className="text-xl">{Icon}</span>
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h5 className="font-sans font-semibold text-slate-800">
                              {item.type}
                            </h5>
                            <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-sans font-semibold">
                              {item.time}
                            </span>
                          </div>
                          <p className="font-sans text-slate-600 text-sm">
                            {item.details}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeInfo === 'amenities' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {typeof Icon === 'function' ? (
                          <Icon className="w-6 h-6 text-amber-500" />
                        ) : (
                          <span className="text-2xl">{Icon}</span>
                        )}
                        <div>
                          <div className="font-sans font-semibold text-slate-800 text-sm">
                            {amenity.feature}
                          </div>
                          <div className={`text-xs font-sans ${
                            amenity.available ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {amenity.available ? 'Available' : 'Not Available'}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeInfo === 'hours' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {operatingHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="font-sans font-semibold text-slate-800">
                        {schedule.day}
                      </span>
                      <span className="font-sans text-slate-600 bg-white px-3 py-1 rounded-full text-sm">
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;