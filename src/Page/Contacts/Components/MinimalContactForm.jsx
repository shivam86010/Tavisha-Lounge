// MinimalContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const MinimalContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  const reasons = [
    'Table Reservation',
    'Event/Party Booking', 
    'Menu Inquiry',
    'Feedback or Complaint',
    'General Query'
  ];

  const fieldIcons = {
    name: User,
    email: Mail,
    phone: Phone,
    message: MessageCircle
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const FieldIcon = fieldIcons[focusedField] || User;

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-soft-cream"
    >
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-royal-maroon mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Start a Conversation
        </motion.h2>
        <p className="text-lg font-sans text-charcoal/70">
          Share your thoughts and we'll ensure a royal response
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block font-sans text-charcoal font-semibold mb-3 text-lg">
            Your Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField('')}
              required
              className="w-full pl-12 pr-6 py-4 bg-transparent border-b-2 border-soft-cream focus:border-metallic-gold focus:outline-none transition-all duration-500 text-lg placeholder-charcoal/30"
              placeholder="Enter your full name"
            />
          </div>
          <AnimatePresence>
            {focusedField === 'name' && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-metallic-gold to-burnt-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block font-sans text-charcoal font-semibold mb-3 text-lg">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              required
              className="w-full pl-12 pr-6 py-4 bg-transparent border-b-2 border-soft-cream focus:border-metallic-gold focus:outline-none transition-all duration-500 text-lg placeholder-charcoal/30"
              placeholder="your.email@example.com"
            />
          </div>
          <AnimatePresence>
            {focusedField === 'email' && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-metallic-gold to-burnt-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone Field */}
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block font-sans text-charcoal font-semibold mb-3 text-lg">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              className="w-full pl-12 pr-6 py-4 bg-transparent border-b-2 border-soft-cream focus:border-metallic-gold focus:outline-none transition-all duration-500 text-lg placeholder-charcoal/30"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <AnimatePresence>
            {focusedField === 'phone' && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-metallic-gold to-burnt-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Reason Dropdown */}
        <div>
          <label className="block font-sans text-charcoal font-semibold mb-3 text-lg">
            How Can We Help You?
          </label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-transparent border-b-2 border-soft-cream focus:border-metallic-gold focus:outline-none transition-all duration-500 text-lg appearance-none"
          >
            <option value="">Select a reason</option>
            {reasons.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        {/* Message Box */}
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block font-sans text-charcoal font-semibold mb-3 text-lg">
            Your Message *
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 text-charcoal/40 w-5 h-5" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              required
              rows="6"
              className="w-full pl-12 pr-6 py-4 bg-transparent border-b-2 border-soft-cream focus:border-metallic-gold focus:outline-none transition-all duration-500 text-lg resize-none placeholder-charcoal/30"
              placeholder="Write your message... we're listening with royal attention"
            />
          </div>
          <AnimatePresence>
            {focusedField === 'message' && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-metallic-gold to-burnt-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full group relative bg-gradient-to-r from-royal-maroon to-burnt-orange text-metallic-gold font-sans font-bold py-5 px-8 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
            Send Royal Message
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-burnt-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                'linear-gradient(45deg, #D4AF37, #C55A11)',
                'linear-gradient(45deg, #C55A11, #D4AF37)',
                'linear-gradient(45deg, #D4AF37, #C55A11)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.button>
      </form>

      {/* Focus Helper */}
      <AnimatePresence>
        {focusedField && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-royal-maroon text-metallic-gold px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50"
          >
            <FieldIcon className="w-4 h-4" />
            <span className="font-sans text-sm">Currently typing in {focusedField} field</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default MinimalContactForm;