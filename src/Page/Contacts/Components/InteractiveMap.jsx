import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Train,
  Phone,
  ExternalLink
} from 'lucide-react';

const InteractiveMap = () => {
  const [activeInfo, setActiveInfo] = useState('location');

  const locationInfo = {
    address: 'Royal Heritage Road, City Center, 560001',
    coordinates: '12.9716° N, 77.5946° E'
  };

  const transportation = [
    { icon: Car, type: 'Car', time: '5 min', details: 'Ample valet parking available' },
    { icon: Train, type: 'Metro', time: '3 min', details: '500m from City Center Station' },
    { icon: '🚍', type: 'Bus', time: '8 min', details: 'Stop right outside the restaurant' }
  ];

  const nearbyLandmarks = [
    'Royal Shopping Mall - 200m',
    'City Central Park - 400m', 
    'Heritage Museum - 600m',
    'Business District - 800m'
  ];

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-white to-soft-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-royal-maroon mb-4">
            Find Us Easily
          </h2>
          <p className="text-xl font-sans text-charcoal/70 max-w-2xl mx-auto">
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
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-metallic-gold/20">
              {/* Map Visual */}
              <div className="h-96 bg-gradient-to-br from-royal-maroon/10 to-metallic-gold/5 relative overflow-hidden">
                {/* Mock Interactive Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 bg-royal-maroon rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <MapPin className="w-10 h-10 text-metallic-gold" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mx-4"
                    >
                      <h3 className="font-serif text-royal-maroon text-xl mb-2">
                        Tavisha Lounge
                      </h3>
                      <p className="font-sans text-charcoal/70 text-sm">
                        {locationInfo.address}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Map Elements */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-metallic-gold/30 rounded-full" />
                <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-burnt-orange/30 rounded-full" />
                <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-royal-maroon/20 rounded-full" />
                
                {/* Animated Route */}
                <motion.div
                  className="absolute bottom-10 left-10 w-32 h-1 bg-metallic-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>

              {/* Map Controls */}
              <div className="p-6 bg-soft-cream border-t border-soft-cream">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <motion.a
                    href="https://maps.google.com/?q=Tavisha+Lounge+Royal+Heritage+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-royal-maroon text-metallic-gold font-sans font-semibold py-3 px-6 rounded-xl hover:bg-burnt-orange transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Navigation className="w-4 h-4" />
                    Open in Maps
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <div className="flex items-center gap-4 text-charcoal/60">
                    <Clock className="w-4 h-4" />
                    <span className="font-sans text-sm">10 AM - 11 PM</span>
                  </div>
                </div>
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
            <div className="flex gap-4 border-b border-soft-cream">
              {['location', 'transport', 'landmarks'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveInfo(tab)}
                  className={`pb-4 px-2 font-sans font-semibold capitalize transition-all duration-300 border-b-2 ${
                    activeInfo === tab
                      ? 'text-royal-maroon border-royal-maroon'
                      : 'text-charcoal/60 border-transparent hover:text-royal-maroon'
                  }`}
                >
                  {tab === 'location' && 'Location Details'}
                  {tab === 'transport' && 'Transportation'}
                  {tab === 'landmarks' && 'Nearby'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeInfo === 'location' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-soft-cream">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-royal-maroon mt-1" />
                      <div>
                        <h4 className="font-serif text-royal-maroon text-lg mb-2">
                          Our Address
                        </h4>
                        <p className="font-sans text-charcoal leading-relaxed">
                          {locationInfo.address}
                        </p>
                        <p className="font-sans text-charcoal/60 text-sm mt-2">
                          Coordinates: {locationInfo.coordinates}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-royal-maroon/5 to-metallic-gold/5 rounded-2xl p-6">
                    <h4 className="font-serif text-royal-maroon text-lg mb-4">
                      Quick Contact
                    </h4>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-royal-maroon" />
                      <a 
                        href="tel:+919XXXXXXXX" 
                        className="font-sans font-semibold text-charcoal hover:text-royal-maroon transition-colors"
                      >
                        +91 9XXXX XXXXX
                      </a>
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
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-soft-cream"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {typeof Icon === 'function' ? (
                          <Icon className="w-8 h-8 text-royal-maroon" />
                        ) : (
                          <span className="text-2xl">{Icon}</span>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h5 className="font-sans font-semibold text-charcoal">
                              {item.type}
                            </h5>
                            <span className="bg-metallic-gold/20 text-royal-marown px-2 py-1 rounded-full text-xs font-sans font-semibold">
                              {item.time}
                            </span>
                          </div>
                          <p className="font-sans text-charcoal/60 text-sm">
                            {item.details}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {activeInfo === 'landmarks' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {nearbyLandmarks.map((landmark, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-soft-cream"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-3 h-3 bg-metallic-gold rounded-full" />
                      <span className="font-sans text-charcoal">{landmark}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-metallic-gold/10 to-burnt-orange/5 rounded-2xl p-6 text-center"
            >
              <h4 className="font-serif text-royal-maroon text-lg mb-2">
                Need Directions?
              </h4>
              <p className="font-sans text-charcoal/70 text-sm mb-4">
                Our team is ready to guide you
              </p>
              <motion.a
                href="tel:+919XXXXXXXX"
                className="inline-flex items-center gap-2 bg-royal-maroon text-metallic-gold font-sans font-semibold py-3 px-6 rounded-xl hover:bg-burnt-orange transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call for Directions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;