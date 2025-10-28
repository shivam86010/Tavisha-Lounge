// src/components/ReservationSystem.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiUsers, FiUser, FiPhone, FiMail } from 'react-icons/fi';

const ReservationSystem = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  const timeSlots = ['11:00 AM', '12:30 PM', '2:00 PM', '6:00 PM', '7:30 PM', '9:00 PM'];
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation submitted:', formData);
    setStep(4); // Success step
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="reservations" className="py-20 bg-charcoal text-soft-cream relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-metallic-gold rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-metallic-gold">Royal</span> Experience
          </h2>
          <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience at Tavisha Lounge
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-12"
          >
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                    step >= stepNumber
                      ? 'bg-metallic-gold text-royal-maroon border-metallic-gold'
                      : 'bg-transparent text-gray-400 border-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: step === stepNumber ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    duration: 2,
                    repeat: step === stepNumber ? Infinity : 0
                  }}
                >
                  {stepNumber}
                </motion.div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-4 ${
                    step > stepNumber ? 'bg-metallic-gold' : 'bg-gray-400'
                  }`} />
                )}
              </div>
            ))}
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl shadow-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-metallic-gold text-center mb-8">
                    Select Date & Time
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2"
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <label className="flex items-center space-x-2 text-gray-300">
                        <FiCalendar className="text-metallic-gold" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      variants={floatingAnimation}
                      animate="animate"
                    >
                      <label className="flex items-center space-x-2 text-gray-300">
                        <FiUsers className="text-metallic-gold" />
                        <span>Number of Guests</span>
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300"
                      >
                        {guestOptions.map(option => (
                          <option key={option} value={option}>{option} {option === '1' ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-300">
                      <FiClock className="text-metallic-gold" />
                      <span>Preferred Time</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          type="button"
                          onClick={() => handleInputChange('time', time)}
                          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                            formData.time === time
                              ? 'border-metallic-gold bg-metallic-gold bg-opacity-20 text-metallic-gold'
                              : 'border-gray-600 text-gray-300 hover:border-metallic-gold hover:text-metallic-gold'
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
                    disabled={!formData.date || !formData.time}
                    className="w-full bg-metallic-gold text-royal-maroon py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue to Details
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-metallic-gold text-center mb-8">
                    Your Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: FiUser, field: 'name', label: 'Full Name', type: 'text' },
                      { icon: FiPhone, field: 'phone', label: 'Phone Number', type: 'tel' },
                      { icon: FiMail, field: 'email', label: 'Email Address', type: 'email' },
                    ].map(({ icon: Icon, field, label, type }) => (
                      <motion.div
                        key={field}
                        className="space-y-2"
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <label className="flex items-center space-x-2 text-gray-300">
                          <Icon className="text-metallic-gold" />
                          <span>{label}</span>
                        </label>
                        <input
                          type={type}
                          value={formData[field]}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300"
                          placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="space-y-2"
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <label className="text-gray-300">Special Requests</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows="4"
                      className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Any special requirements or celebrations..."
                    />
                  </motion.div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={prevStep}
                      className="flex-1 bg-gray-700 text-gray-300 py-4 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Back
                    </motion.button>
                    <motion.button
                      onClick={nextStep}
                      className="flex-1 bg-metallic-gold text-royal-maroon py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Review Booking
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-metallic-gold text-center mb-8">
                    Confirm Your Reservation
                  </h3>

                  <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                    {[
                      { label: 'Date', value: formData.date },
                      { label: 'Time', value: formData.time },
                      { label: 'Guests', value: `${formData.guests} ${formData.guests === '1' ? 'Guest' : 'Guests'}` },
                      { label: 'Name', value: formData.name },
                      { label: 'Phone', value: formData.phone },
                      { label: 'Email', value: formData.email },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex justify-between items-center py-2 border-b border-gray-600"
                      >
                        <span className="text-gray-400">{item.label}:</span>
                        <span className="text-soft-cream font-semibold">{item.value}</span>
                      </motion.div>
                    ))}
                    {formData.specialRequests && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-between items-start py-2"
                      >
                        <span className="text-gray-400">Special Requests:</span>
                        <span className="text-soft-cream font-semibold text-right">{formData.specialRequests}</span>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={prevStep}
                      className="flex-1 bg-gray-700 text-gray-300 py-4 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Back
                    </motion.button>
                    <motion.button
                      onClick={handleSubmit}
                      className="flex-1 bg-metallic-gold text-royal-maroon py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Confirm Reservation
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-metallic-gold mb-4">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for choosing Tavisha Lounge. We look forward to serving you a royal dining experience.
                  </p>
                  <motion.button
                    onClick={() => setStep(1)}
                    className="bg-metallic-gold text-royal-maroon px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Another Table
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSystem;