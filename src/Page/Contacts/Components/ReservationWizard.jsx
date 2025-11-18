// ReservationWizard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Clock, 
  Sofa, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  X,
  Crown,
  Home,
  Trees,
  UsersRound
} from 'lucide-react';

const ReservationWizard = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    guests: 2,
    date: '',
    time: '',
    seating: '',
    occasion: ''
  });

  const seatingOptions = [
    { value: 'royal', label: 'Royal Booth', icon: Crown, description: 'Premium luxury seating' },
    { value: 'cozy', label: 'Cozy Corner', icon: Sofa, description: 'Intimate and comfortable' },
    { value: 'family', label: 'Family Area', icon: UsersRound, description: 'Spacious for groups' },
    { value: 'outdoor', label: 'Garden View', icon: Trees, description: 'Natural ambiance' }
  ];

  const timeSlots = [
    '10:00 AM - Breakfast',
    '12:00 PM - Lunch', 
    '02:00 PM - Afternoon',
    '06:00 PM - Dinner',
    '08:00 PM - Evening'
  ];

  const occasions = [
    'Birthday Celebration',
    'Anniversary',
    'Business Dinner',
    'Family Gathering',
    'Date Night',
    'Just Dining'
  ];

  const handleChange = (field, value) => {
    setReservationData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log('Reservation:', reservationData);
    setStep(5);
  };

  const resetWizard = () => {
    setStep(1);
    setReservationData({
      guests: 2,
      date: '',
      time: '',
      seating: '',
      occasion: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-metallic-gold hover:text-soft-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-3 text-metallic-gold mb-4"
                >
                  <Crown className="w-8 h-8" />
                  <h2 className="text-2xl font-serif font-bold">Royal Reservation</h2>
                </motion.div>
                <p className="text-metallic-gold/80 font-sans">
                  Let us craft your perfect dining experience
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-center mt-6">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans font-bold transition-all duration-300 ${
                      step >= stepNum 
                        ? 'bg-metallic-gold text-royal-maroon' 
                        : 'bg-metallic-gold/30 text-metallic-gold'
                    }`}>
                      {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                    </div>
                    {stepNum < 5 && (
                      <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
                        step > stepNum ? 'bg-metallic-gold' : 'bg-metallic-gold/30'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-96 overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* Step 1: Guests & Date */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="flex items-center gap-2 font-sans text-charcoal font-semibold mb-4 text-lg">
                        <Users className="w-5 h-5 text-royal-maroon" />
                        Number of Guests
                      </label>
                      <select
                        value={reservationData.guests}
                        onChange={(e) => handleChange('guests', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-soft-cream rounded-xl focus:border-metallic-gold focus:outline-none transition-all duration-300 bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                        <option value="9+">9+ People (Large Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 font-sans text-charcoal font-semibold mb-4 text-lg">
                        <Calendar className="w-5 h-5 text-royal-maroon" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={reservationData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-soft-cream rounded-xl focus:border-metallic-gold focus:outline-none transition-all duration-300 bg-white"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Time */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="flex items-center gap-2 font-sans text-charcoal font-semibold mb-4 text-lg">
                        <Clock className="w-5 h-5 text-royal-maroon" />
                        Preferred Time
                      </label>
                      <div className="grid gap-3">
                        {timeSlots.map((slot, index) => (
                          <motion.button
                            key={index}
                            type="button"
                            onClick={() => handleChange('time', slot)}
                            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                              reservationData.time === slot
                                ? 'border-metallic-gold bg-metallic-gold/10'
                                : 'border-soft-cream hover:border-royal-maroon'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="font-sans font-semibold text-charcoal">
                              {slot}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Seating */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="flex items-center gap-2 font-sans text-charcoal font-semibold mb-4 text-lg">
                        <Sofa className="w-5 h-5 text-royal-maroon" />
                        Seating Preference
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {seatingOptions.map((option) => {
                          const Icon = option.icon;
                          return (
                            <motion.button
                              key={option.value}
                              type="button"
                              onClick={() => handleChange('seating', option.value)}
                              className={`p-4 border-2 rounded-xl text-center transition-all duration-300 group ${
                                reservationData.seating === option.value
                                  ? 'border-metallic-gold bg-metallic-gold/10'
                                  : 'border-soft-cream hover:border-royal-maroon'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Icon className="w-8 h-8 text-royal-maroon mx-auto mb-2 group-hover:scale-110 transition-transform" />
                              <div className="font-sans font-semibold text-charcoal text-sm mb-1">
                                {option.label}
                              </div>
                              <div className="font-sans text-charcoal/60 text-xs">
                                {option.description}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Occasion */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="flex items-center gap-2 font-sans text-charcoal font-semibold mb-4 text-lg">
                        <Crown className="w-5 h-5 text-royal-maroon" />
                        Special Occasion
                      </label>
                      <div className="grid gap-3">
                        {occasions.map((occasion, index) => (
                          <motion.button
                            key={index}
                            type="button"
                            onClick={() => handleChange('occasion', occasion)}
                            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                              reservationData.occasion === occasion
                                ? 'border-metallic-gold bg-metallic-gold/10'
                                : 'border-soft-cream hover:border-royal-maroon'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="font-sans font-semibold text-charcoal">
                              {occasion}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-serif text-royal-maroon">
                      Reservation Received!
                    </h3>
                    
                    <p className="font-sans text-charcoal/70 leading-relaxed">
                      We've noted your preferences for {reservationData.guests} guests on {reservationData.date}. 
                      Our team will contact you shortly to confirm your royal experience.
                    </p>

                    <div className="bg-metallic-gold/10 rounded-xl p-4">
                      <p className="font-sans text-charcoal text-sm">
                        💫 Expect a confirmation call within 2 hours
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {step < 5 && (
              <div className="px-8 pb-8 flex gap-4">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-royal-maroon text-royal-maroon font-sans font-semibold rounded-xl hover:bg-royal-maroon hover:text-metallic-gold transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
                
                <motion.button
                  onClick={step === 4 ? handleSubmit : nextStep}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-royal-maroon to-burnt-orange text-metallic-gold font-sans font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step === 4 ? 'Complete Reservation' : 'Continue'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            )}

            {step === 5 && (
              <div className="px-8 pb-8">
                <motion.button
                  onClick={resetWizard}
                  className="w-full bg-metallic-gold text-royal-maroon font-sans font-semibold py-3 rounded-xl hover:bg-soft-cream transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Another Experience
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationWizard;