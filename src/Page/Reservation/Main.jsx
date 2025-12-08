// src/components/ReservationPage.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiClock, 
  FiUsers, 
  FiChevronRight,
  FiCheck,
  FiHeart,
  FiStar,
  FiCoffee,
  FiChevronLeft,
  FiUser,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiChevronDown,
  FiChevronUp,
  FiX
} from 'react-icons/fi';
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";


import { 
  FaBirthdayCake, 
  FaGlassCheers, 
  FaHandshake,
  FaCalendarAlt,
  FaChair
} from 'react-icons/fa';

const ReservationPage = () => {
  const [step, setStep] = useState(0);
  const [reservationData, setReservationData] = useState({
    occasion: '',
    date: '',
    time: '',
    seating: '',
    guests: '2',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const occasions = [
    { id: 'romantic', icon: '❤️', name: 'Romantic Dinner', color: 'from-pink-500 to-rose-600', description: 'Intimate candlelit setting' },
    { id: 'family', icon: '👨‍👩‍👧', name: 'Family Gathering', color: 'from-blue-500 to-cyan-600', description: 'Cozy family time' },
    { id: 'birthday', icon: '🎉', name: 'Birthday Celebration', color: 'from-purple-500 to-pink-600', description: 'Special birthday surprise' },
    { id: 'business', icon: '🤝', name: 'Business Dinner', color: 'from-gray-600 to-blue-700', description: 'Professional setting' },
    { id: 'anniversary', icon: '🥂', name: 'Anniversary', color: 'from-red-500 to-pink-600', description: 'Milestone celebration' },
    { id: 'casual', icon: '☕', name: 'Casual Visit', color: 'from-green-500 to-emerald-600', description: 'Relaxed dining' }
  ];

  const timeSlots = [
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '6:00 PM', available: false },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true },
    { time: '8:00 PM', available: true },
    { time: '8:30 PM', available: false },
  ];

  const seatingOptions = [
    { 
      id: 'royal-booth', 
      name: 'Royal Booth', 
      icon: <FaCrown className="w-6 h-6" />,
      description: 'Private & cozy luxury seating',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      capacity: '2-4 guests',
      features: ['Private setting', 'Premium comfort', 'Exclusive service']
    },
    { 
      id: 'window-side', 
      name: 'Window Side Table', 
      icon: <FiCoffee className="w-6 h-6" />,
      description: 'Natural light with city views',
      image: 'https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      capacity: '2-6 guests',
      features: ['Scenic views', 'Bright ambiance', 'Perfect for photos']
    },
    { 
      id: 'garden-view', 
      name: 'Garden View Seating', 
      icon: <FaStar className="w-6 h-6" />,
      description: 'Tranquil garden atmosphere',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      capacity: '2-8 guests',
      features: ['Natural setting', 'Fresh air access', 'Relaxing environment']
    },
    { 
      id: 'family-lounge', 
      name: 'Family Lounge Area', 
      icon: <FaGlassCheers className="w-6 h-6" />,
      description: 'Spacious family-friendly area',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      capacity: '4-8 guests',
      features: ['Comfortable seating', 'Family friendly', 'Extra space']
    },
    { 
      id: 'candlelight', 
      name: 'Candlelight Premium Table', 
      icon: <FaBirthdayCake className="w-6 h-6" />,
      description: 'Romantic candlelit atmosphere',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      capacity: '2 guests',
      features: ['Romantic setting', 'Premium service', 'Special arrangements']
    }
  ];

  const faqItems = [
    {
      question: 'Do I need to prepay for reservation?',
      answer: 'No, reservations are completely free at Tavisha Lounge. Payments are made only for your dining order when you visit.'
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes! You can modify your reservation by calling us at +91 98765 43210 or by replying to your confirmation email.'
    },
    {
      question: 'How long can we hold the table?',
      answer: 'We hold your table for 15 minutes after the reserved time. For special celebrations, we recommend arriving on time.'
    },
    {
      question: 'Are special arrangements available?',
      answer: 'Absolutely! We offer birthday cakes, anniversary decorations, and special menu requests. Mention your requirements in the special requests section.'
    },
    {
      question: 'Is there a dress code?',
      answer: 'While we welcome all guests, smart casual attire is recommended to match our royal ambiance.'
    }
  ];

  const benefits = [
    // { icon: '✓', title: 'Instant Confirmation', description: 'Get immediate table confirmation' },
    { icon: '🎯', title: 'Special Seating', description: 'Request preferred seating arrangements' },
    { icon: '🎂', title: 'Celebration Setup', description: 'Birthday & anniversary arrangements' },
    { icon: '✨', title: 'Hassle-Free', description: 'Smooth, easy reservation process' },
    { icon: '👑', title: 'Royal Treatment', description: 'Attentive, personalized service' }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      setStep(5);
    }, 1500);
  };

  const getStepTitle = () => {
    const titles = [
      "Reserve Your Royal Experience",
      "Choose Your Occasion",
      "Select Date & Time",
      "Pick Your Seating Experience",
      "Complete Your Details",
      "Confirmation"
    ];
    return titles[step];
  };

  return (
    <div className="min-h-screen bg-soft-cream overflow-hidden">
      {/* Step Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={prevStep}
              className={`flex items-center space-x-2 text-royal-maroon ${step === 0 ? 'opacity-0' : ''}`}
            >
              <FiChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            
            <div className="flex items-center space-x-4">
              {[0, 1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                    step >= s 
                      ? 'bg-royal-maroon text-metallic-gold' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > s ? <FiCheck className="w-4 h-4" /> : s + 1}
                  </div>
                  {s < 5 && (
                    <div className={`w-12 h-1 transition-all duration-300 ${
                      step > s ? 'bg-royal-maroon' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600">
              Step {step + 1} of 6
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20">
        {step === 0 && (
          <section className="relative min-h-screen flex items-center">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
                alt="Royal Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-royal-maroon/80"></div>
              
              {/* Floating Gold Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-metallic-gold rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-24 h-24 bg-metallic-gold/20 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <FaCrown className="w-12 h-12 text-metallic-gold" />
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
                  Reserve Your Royal Experience
                </h1>
                
                <p className="text-xl md:text-2xl text-metallic-gold mb-8 max-w-3xl mx-auto leading-relaxed">
                  At Tavisha Lounge, every table is more than a seat — it's a space where memories are created.
                </p>
                
                <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
                  Whether you are planning a quiet family dinner, a romantic evening, or a special celebration, 
                  we invite you to reserve your table and experience hospitality fit for royalty.
                </p>

                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-metallic-gold text-royal-maroon px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-colors duration-300 shadow-2xl"
                >
                  Begin My Reservation
                </motion.button>
              </motion.div>
            </div>
          </section>
        )}

        {step === 1 && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-4">
                  What's the Occasion?
                </h2>
                <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                  Choose the vibe that matches your dining moment
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {occasions.map((occasion) => (
                  <motion.div
                    key={occasion.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setReservationData({...reservationData, occasion: occasion.id});
                      setTimeout(nextStep, 300);
                    }}
                    className={`bg-white rounded-2xl p-6 cursor-pointer border-2 transition-all duration-300 group ${
                      reservationData.occasion === occasion.id 
                        ? 'border-metallic-gold shadow-xl' 
                        : 'border-transparent hover:border-metallic-gold/50'
                    }`}
                  >
                    <div className={`h-2 rounded-t-2xl mb-6 bg-gradient-to-r ${occasion.color}`}></div>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {occasion.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                      {occasion.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {occasion.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-4">
                  Pick Your Perfect Moment
                </h2>
                <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                  We craft moments — choose the time that suits your story
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Calendar */}
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-charcoal flex items-center">
                      <FiCalendar className="w-5 h-5 mr-2" />
                      Select Date
                    </h3>
                    <div className="text-royal-maroon font-semibold">
                      {reservationData.date || 'Pick a date'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-sm text-gray-500 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, i) => {
                      const day = i + 1;
                      const isToday = day === new Date().getDate();
                      const isSelected = reservationData.date === `2024-01-${day.toString().padStart(2, '0')}`;
                      
                      return (
                        <button
                          key={i}
                          onClick={() => setReservationData({...reservationData, date: `2024-01-${day.toString().padStart(2, '0')}`})}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                            isSelected 
                              ? 'bg-royal-maroon text-metallic-gold' 
                              : isToday
                              ? 'bg-metallic-gold/20 text-royal-maroon'
                              : 'hover:bg-gray-100 text-charcoal'
                          }`}
                        >
                          {day <= 31 ? day : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-charcoal flex items-center">
                      <FiClock className="w-5 h-5 mr-2" />
                      Select Time
                    </h3>
                    <div className="text-royal-maroon font-semibold">
                      {reservationData.time || 'Pick a time'}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => setReservationData({...reservationData, time: slot.time})}
                        disabled={!slot.available}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          reservationData.time === slot.time
                            ? 'bg-royal-maroon text-metallic-gold'
                            : slot.available
                            ? 'bg-gray-100 hover:bg-metallic-gold/20 hover:text-royal-maroon text-charcoal'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="font-medium">{slot.time}</div>
                        {!slot.available && (
                          <div className="text-xs mt-1 text-red-500">Full</div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-royal-maroon rounded mr-2"></div>
                        <span>Selected</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                        <span>Unavailable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {reservationData.date && reservationData.time && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-8"
                >
                  <button
                    onClick={nextStep}
                    className="bg-royal-maroon text-metallic-gold px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                  >
                    Continue to Seating Selection
                  </button>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-4">
                  Select Your Seating Experience
                </h2>
                <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                  Choose the perfect setting for your dining experience
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {seatingOptions.map((seat) => (
                  <motion.div
                    key={seat.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setReservationData({...reservationData, seating: seat.id})}
                    className={`bg-white rounded-2xl overflow-hidden shadow-soft border-2 transition-all duration-300 cursor-pointer group ${
                      reservationData.seating === seat.id 
                        ? 'border-metallic-gold' 
                        : 'border-transparent hover:border-metallic-gold/30'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <img
                          src={seat.image}
                          alt={seat.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-royal-maroon">
                              {seat.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-serif font-bold text-charcoal">
                                {seat.name}
                              </h3>
                              <p className="text-sm text-gray-600">{seat.capacity}</p>
                            </div>
                          </div>
                          
                          {reservationData.seating === seat.id && (
                            <div className="w-6 h-6 bg-metallic-gold rounded-full flex items-center justify-center">
                              <FiCheck className="w-4 h-4 text-royal-maroon" />
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-4">{seat.description}</p>
                        
                        <div className="space-y-2">
                          {seat.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <FiStar className="w-3 h-3 text-metallic-gold mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {reservationData.seating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-8"
                >
                  <button
                    onClick={nextStep}
                    className="bg-royal-maroon text-metallic-gold px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                  >
                    Continue with Guest Details
                  </button>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="py-20">
            <div className="max-w-2xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-4">
                  Complete Your Details
                </h2>
                <p className="text-xl text-charcoal/80">
                  Final step to secure your royal experience
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        <FiUser className="inline w-4 h-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={reservationData.name}
                        onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        <FiPhone className="inline w-4 h-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={reservationData.phone}
                        onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all duration-300"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      <FiMail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={reservationData.email}
                      onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      <FiUsers className="inline w-4 h-4 mr-2" />
                      Number of Guests
                    </label>
                    <select
                      value={reservationData.guests}
                      onChange={(e) => setReservationData({...reservationData, guests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all duration-300"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      <FiMessageCircle className="inline w-4 h-4 mr-2" />
                      Special Requests
                    </label>
                    <textarea
                      value={reservationData.specialRequests}
                      onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all duration-300 resize-none"
                      placeholder="Tell us what will make your experience magical ✨"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-royal-maroon to-burnt-orange text-metallic-gold py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Confirm My Reservation
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>
        )}

        {step === 5 && (
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <FiCheck className="w-16 h-16 text-white" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">
                  🎉 Your Royal Table Has Been Reserved!
                </h2>
                
                <p className="text-xl text-charcoal mb-8 leading-relaxed max-w-2xl mx-auto">
                  We are preparing something special just for you. 
                  A confirmation email has been sent to {reservationData.email}.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                    Reservation Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <p className="text-gray-600 mb-1">Date & Time</p>
                      <p className="font-semibold text-charcoal">
                        {reservationData.date} at {reservationData.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Guests</p>
                      <p className="font-semibold text-charcoal">
                        {reservationData.guests} {reservationData.guests === '1' ? 'Guest' : 'Guests'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Seating</p>
                      <p className="font-semibold text-charcoal">
                        {seatingOptions.find(s => s.id === reservationData.seating)?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Confirmation</p>
                      <p className="font-semibold text-charcoal">
                        #TBL-{Date.now().toString().slice(-8)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-royal-maroon text-metallic-gold px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                  >
                    Add to Calendar
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-royal-maroon text-royal-maroon px-8 py-4 rounded-full font-semibold hover:bg-royal-maroon hover:text-metallic-gold transition-all duration-300 ml-4"
                  >
                    View Our Menu
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-royal-maroon mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-charcoal">{item.question}</span>
                  {openFAQ === index ? (
                    <FiChevronUp className="w-5 h-5 text-royal-maroon" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-royal-maroon" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-700">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-royal-maroon to-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Your Table Awaits You
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Step into a world of royal flavors, cozy ambiance, and unforgettable hospitality. 
            Reserve your table today and let us craft a special dining moment just for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-metallic-gold text-royal-maroon px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
            >
              Reserve Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-metallic-gold text-metallic-gold px-8 py-4 rounded-full font-semibold hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-300"
            >
              Call Us Instantly
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;