// src/components/EventsOffers.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiTag } from 'react-icons/fi';

const EventsOffers = () => {
  const [activeTab, setActiveTab] = useState('offers');

  const offers = [
    {
      id: 1,
      title: "Royal Family Feast",
      description: "Enjoy a complete family meal with 4 main courses, breads, rice, and desserts",
      discount: "25% OFF",
      code: "FAMILY25",
      validUntil: "2024-12-31",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Weekend Brunch Special",
      description: "Unlimited brunch with live counters, mocktails, and royal desserts",
      discount: "Buy 1 Get 1",
      code: "WEEKEND2024",
      validUntil: "2024-11-30",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Date Night Package",
      description: "Romantic dinner for two with wine pairing and special dessert",
      discount: "30% OFF",
      code: "LOVE30",
      validUntil: "2024-12-25",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Live Ghazal Night",
      description: "Experience the magic of soulful ghazals with fine dining",
      date: "Every Friday",
      time: "7:00 PM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Chef's Table Experience",
      description: "Interactive dining with our master chef and exclusive menu",
      date: "15th Monthly",
      time: "6:30 PM onwards",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Royal Cooking Masterclass",
      description: "Learn to cook authentic royal dishes with our expert chefs",
      date: "Last Sunday",
      time: "11:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Special <span className="text-royal-maroon">Events</span> & <span className="text-burnt-orange">Offers</span>
          </h2>
          <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Discover our exclusive events and limited-time offers for an extraordinary dining experience
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('offers')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'offers'
                  ? 'bg-royal-maroon text-metallic-gold'
                  : 'text-charcoal hover:text-royal-maroon'
              }`}
            >
              Special Offers
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'events'
                  ? 'bg-royal-maroon text-metallic-gold'
                  : 'text-charcoal hover:text-royal-maroon'
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'offers' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-burnt-orange text-soft-cream px-3 py-1 rounded-full font-bold">
                      {offer.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <FiTag className="text-royal-maroon" />
                        <span className="font-mono bg-gray-100 px-3 py-1 rounded text-sm">
                          {offer.code}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Valid until {offer.validUntil}
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Claim Offer
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-royal-maroon bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FiCalendar className="text-royal-maroon" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FiClock className="text-royal-maroon" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FiMapPin className="text-royal-maroon" />
                        <span>Tavisha Lounge</span>
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-royal-maroon text-metallic-gold py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Your Spot
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsOffers;