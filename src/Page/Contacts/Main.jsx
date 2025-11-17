// src/components/ContactPage.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPhone, 
  FiMapPin, 
  FiMail, 
  FiClock, 
  FiUsers, 
  FiCalendar,
  FiInstagram,
  FiFacebook,
  FiMap,
  FiChevronRight,
  FiStar
} from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [showDateTime, setShowDateTime] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'purpose') {
      setShowDateTime(value === 'Table Reservation' || value === 'Birthday Celebration' || value === 'Anniversary Dinner' || value === 'Corporate Lunch');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Reservation availability data
  const reservationStatus = {
    lunch: {
      status: 'moderate', // low, moderate, high
      slots: ['11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM']
    },
    dinner: {
      status: 'high',
      slots: ['6:00 PM', '7:30 PM']
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'low': return 'bg-green-500';
      case 'moderate': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'low': return 'Good Availability';
      case 'moderate': return 'Moderate Demand';
      case 'high': return 'High Demand';
      default: return 'Check Availability';
    }
  };

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-maroon to-charcoal">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Gold Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-metallic-gold opacity-20"
              style={{
                top: `${20 + i * 15}%`,
                left: '-10%',
                right: '-10%',
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Floating Icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 text-metallic-gold opacity-30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            <FiPhone className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-metallic-gold opacity-30"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: 1,
            }}
          >
            <FiMail className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-1/3 text-metallic-gold opacity-30"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2,
            }}
          >
            <FiMapPin className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-soft-cream px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
          >
            Connect With Tavisha
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 leading-relaxed"
          >
            We're Here to Welcome You
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-metallic-gold max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Feel free to reach out — for reservations, celebrations, inquiries, or just to say hello.
            At Tavisha Lounge, every connection begins with warmth.
          </motion.p>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-metallic-gold border-opacity-30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['📞 Reservations', '🎉 Events', '🍽 Private Dining', '📬 Queries'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg mb-1">{item.split(' ')[0]}</div>
                  <div className="text-sm text-metallic-gold">{item.split(' ')[1]}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-metallic-gold text-royal-maroon px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-metallic-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Royal Contact Information Grid */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
              Royal Contact Information
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              Multiple ways to reach us, each with the same royal treatment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiPhone className="w-8 h-8" />,
                title: "Call Us",
                main: "+91 98765-43210",
                subtitle: "Available 11 AM – 11 PM",
                tagline: "A real human will speak to you — no IVR, no waiting."
              },
              {
                icon: <FiMapPin className="w-8 h-8" />,
                title: "Visit Us",
                main: "Tavisha Lounge, Sector 52",
                subtitle: "Noida, Uttar Pradesh",
                tagline: "Find us where royal taste meets modern comfort."
              },
              {
                icon: <FiMail className="w-8 h-8" />,
                title: "Email Us",
                main: "hello@tavishalounge.com",
                subtitle: "Quick responses guaranteed",
                tagline: "For quick replies within 2 hours."
              },
              {
                icon: <FiInstagram className="w-8 h-8" />,
                title: "Social Connect",
                main: "Follow Our Journey",
                subtitle: "Instagram | Facebook | Google",
                tagline: "See our ambience before you even visit."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-metallic-gold group"
              >
                <div className="text-royal-maroon mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-royal-maroon mb-2">
                  {item.title}
                </h3>
                <div className="text-lg font-semibold text-charcoal mb-1">
                  {item.main}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {item.subtitle}
                </div>
                <div className="text-xs text-metallic-gold font-medium">
                  {item.tagline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Royal Concierge Form */}
      <section className="py-20 bg-gradient-to-br from-royal-maroon to-charcoal">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold mb-6">
              Royal Concierge Form
            </h2>
            <p className="text-xl text-soft-cream max-w-2xl mx-auto">
              Tell Us How We Can Assist You. We'll reply with care, warmth, and the right details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none transition-all duration-300">
                    Your Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none transition-all duration-300">
                    Your Email
                  </label>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none transition-all duration-300">
                    Your Phone
                  </label>
                </div>

                {/* Purpose Dropdown */}
                <div className="relative">
                  <select
                    value={formData.purpose}
                    onChange={(e) => handleInputChange('purpose', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent appearance-none"
                    required
                  >
                    <option value="">Purpose of Contact</option>
                    <option value="Table Reservation">Table Reservation</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary Dinner">Anniversary Dinner</option>
                    <option value="Corporate Lunch">Corporate Lunch</option>
                    <option value="Catering & Events">Catering & Events</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FiChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Date & Time Fields - Conditionally Rendered */}
              <AnimatePresence>
                {showDateTime && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                  >
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <label className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none">
                        Preferred Date
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent"
                      />
                      <label className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none">
                        Preferred Time
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent appearance-none"
                      >
                        <option value="">Number of Guests</option>
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <FiChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message Field */}
              <div className="mb-6">
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300 bg-transparent resize-none"
                  placeholder="Your message... (Optional)"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-metallic-gold text-royal-maroon py-4 rounded-xl font-semibold text-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Request</span>
                  <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-50% to-transparent opacity-30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Live Reservation Availability Meter */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
              Today's Reservation Status
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              We update this every hour so you get the perfect dining time for your visit.
            </p>
            <div className="text-sm text-gray-500 mt-2">
              Last updated: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lunch Availability */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4 flex items-center">
                  <FiClock className="w-6 h-6 mr-2" />
                  Lunch Slots
                  <span className="ml-2 text-sm font-normal text-gray-500">(11 AM - 3 PM)</span>
                </h3>
                
                {/* Status Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-charcoal">Availability</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      reservationStatus.lunch.status === 'low' ? 'bg-green-100 text-green-800' :
                      reservationStatus.lunch.status === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getStatusText(reservationStatus.lunch.status)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${getStatusColor(reservationStatus.lunch.status)}`}
                      style={{
                        width: reservationStatus.lunch.status === 'low' ? '80%' : 
                               reservationStatus.lunch.status === 'moderate' ? '50%' : '20%'
                      }}
                    />
                  </div>
                </div>

                {/* Available Slots */}
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Available Time Slots:</h4>
                  <div className="flex flex-wrap gap-2">
                    {reservationStatus.lunch.slots.map((slot, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dinner Availability */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-4 flex items-center">
                  <FiClock className="w-6 h-6 mr-2" />
                  Dinner Slots
                  <span className="ml-2 text-sm font-normal text-gray-500">(6 PM - 11 PM)</span>
                </h3>
                
                {/* Status Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-charcoal">Availability</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      reservationStatus.dinner.status === 'low' ? 'bg-green-100 text-green-800' :
                      reservationStatus.dinner.status === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getStatusText(reservationStatus.dinner.status)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${getStatusColor(reservationStatus.dinner.status)}`}
                      style={{
                        width: reservationStatus.dinner.status === 'low' ? '80%' : 
                               reservationStatus.dinner.status === 'moderate' ? '50%' : '20%'
                      }}
                    />
                  </div>
                </div>

                {/* Available Slots */}
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Available Time Slots:</h4>
                  <div className="flex flex-wrap gap-2">
                    {reservationStatus.dinner.slots.map((slot, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 p-4 bg-metallic-gold bg-opacity-10 rounded-xl border border-metallic-gold border-opacity-30"
            >
              <p className="text-sm text-charcoal text-center">
                💡 <strong>Pro Tip:</strong> Book 2-3 days in advance for weekend dinners and special celebrations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Map + 360° Virtual Walkthrough */}
      <section className="py-20 bg-gradient-to-br from-royal-maroon to-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold mb-6">
              Experience Tavisha Before You Arrive
            </h2>
            <p className="text-xl text-soft-cream max-w-2xl mx-auto">
              Explore our ambience, seating styles, and lighting from the comfort of your phone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-auto">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center text-charcoal">
                  <FiMap className="w-16 h-16 mx-auto mb-4 text-royal-maroon" />
                  <p className="text-lg font-semibold">Google Maps Integration</p>
                  <p className="text-sm text-gray-600 mt-2">Tavisha Lounge, Sector 52, Noida</p>
                </div>
              </div>
            </div>

            {/* 360° Virtual Tour */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Tavisha Lounge Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-metallic-gold text-royal-maroon px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center space-x-2 shadow-lg"
                >
                  <FiStar className="w-5 h-5" />
                  <span>Start Virtual Tour</span>
                </motion.button>
              </div>
              
              {/* Tour Controls Overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {['←', '→', '↑', '↓', '⟳'].map((control, index) => (
                  <motion.button
                    key={control}
                    whileHover={{ scale: 1.2, backgroundColor: 'rgba(212, 175, 55, 0.8)' }}
                    className="w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    {control}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Moments & Memories Footer */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
              We Look Forward to Hosting You
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-charcoal mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Whether it's a small dinner, a big celebration, or a casual coffee —
              at Tavisha Lounge, you're treated like family and greeted like royalty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-royal-maroon text-metallic-gold px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors shadow-lg"
              >
                Book a Table
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-royal-maroon text-royal-maroon px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon hover:text-metallic-gold transition-all duration-300"
              >
                View Our Menu
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex justify-center space-x-6 mt-8"
            >
              {[FiInstagram, FiFacebook, FiMap].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center hover:bg-royal-maroon-dark transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;