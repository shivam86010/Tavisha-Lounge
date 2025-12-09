import React, { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform,
  useMotionValue,
  useSpring 
} from 'framer-motion';
import { 
  Calendar, Clock, Users, User, Phone, Mail, MessageSquare, 
  Check, Sparkles, Star, Crown, Heart, Coffee, Cake, Briefcase,
  ChevronRight, MapPin, Shield, Award, Wine, Utensils, Moon,
  Sun, Gem, Globe, Music, Flower, Palette, Watch, Zap
} from 'lucide-react';

const ReservationPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeating, setSelectedSeating] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  const handleInputChange  = ()=>{

  }
  const handleBack = ()=>{
    
  }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const occasions = [
    { 
      id: 1, 
      name: 'Romantic Dinner', 
      icon: Heart, 
      color: 'from-pink-500/30 via-rose-500/20 to-pink-500/30',
      emoji: '❤️',
      description: 'Intimate & Memorable'
    },
    { 
      id: 2, 
      name: 'Family Gathering', 
      icon: Users, 
      color: 'from-blue-500/30 via-indigo-500/20 to-blue-500/30',
      emoji: '👨‍👩‍👧',
      description: 'Warm & Joyful'
    },
    { 
      id: 3, 
      name: 'Birthday Celebration', 
      icon: Cake, 
      color: 'from-purple-500/30 via-violet-500/20 to-purple-500/30',
      emoji: '🎉',
      description: 'Festive & Fun'
    },
    { 
      id: 4, 
      name: 'Business Dinner', 
      icon: Briefcase, 
      color: 'from-gray-500/30 via-slate-600/20 to-gray-500/30',
      emoji: '🤝',
      description: 'Professional & Refined'
    },
    { 
      id: 5, 
      name: 'Anniversary', 
      icon: Gem, 
      color: 'from-amber-500/30 via-orange-500/20 to-amber-500/30',
      emoji: '💎',
      description: 'Elegant & Special'
    },
    { 
      id: 6, 
      name: 'Casual Visit', 
      icon: Coffee, 
      color: 'from-emerald-500/30 via-teal-500/20 to-emerald-500/30',
      emoji: '☕',
      description: 'Relaxed & Cozy'
    }
  ];

  const seatingOptions = [
    { 
      id: 1, 
      name: 'Royal Booth', 
      description: 'Private & Intimate Setting',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&w=1200&h=800',
      capacity: '2-4 Guests',
      price: 'Premium',
      features: ['Velvet Seating', 'Private Space', 'Exclusive Service', 'Personal Butler'],
      icon: Crown
    },
    { 
      id: 2, 
      name: 'Window Side', 
      description: 'Panoramic City Views',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&w=1200&h=800',
      capacity: '2-6 Guests',
      price: 'Standard',
      features: ['City View', 'Natural Light', 'Sunset Views', 'Quiet Ambiance'],
      icon: Globe
    },
    { 
      id: 3, 
      name: 'Garden View', 
      description: 'Natural Greenery Surroundings',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&w=1200&h=800',
      capacity: '2-8 Guests',
      price: 'Premium',
      features: ['Garden Access', 'Fresh Air', 'Natural Light', 'Tranquil'],
      icon: Flower
    },
    { 
      id: 4, 
      name: 'Family Lounge', 
      description: 'Spacious & Comfortable',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&w=1200&h=800',
      capacity: '4-10 Guests',
      price: 'Standard',
      features: ['Large Table', 'Kid Friendly', 'Flexible Seating', 'Entertainment'],
      icon: Users
    },
    { 
      id: 5, 
      name: 'Candlelight Table', 
      description: 'Romantic Atmosphere',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&w=1200&h=800',
      capacity: '2 Guests',
      price: 'Premium',
      features: ['Candlelit', 'Rose Petals', 'Wine Pairing', 'Live Music'],
      icon: Music
    }
  ];

  const timeSlots = [
    { time: '17:00', label: 'Golden Hour', available: true, icon: Sun },
    { time: '18:30', label: 'Sunset Views', available: true, icon: Sun },
    { time: '19:00', label: 'Prime Time', available: false, icon: Star },
    { time: '20:00', label: 'Evening Elegance', available: true, icon: Moon },
    { time: '21:30', label: 'Night Serenity', available: true, icon: Moon },
    { time: '22:00', label: 'Late Royalty', available: true, icon: Crown }
  ];

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date,
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      number: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  });

  const steps = [
    { id: 1, name: 'Occasion', icon: Heart },
    { id: 2, name: 'Date & Time', icon: Calendar },
    { id: 3, name: 'Seating', icon: Crown },
    { id: 4, name: 'Details', icon: User },
    { id: 5, name: 'Confirm', icon: Check }
  ];

  // Floating particles component
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            rotate: Math.random() * 360,
          }}
          animate={{
            x: [null, Math.random() * 100 + 'vw'],
            y: [null, Math.random() * 100 + 'vh'],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="w-1 h-1 bg-gradient-to-r from-metallic-gold/50 to-amber-300/50 rounded-full" />
        </motion.div>
      ))}
      {/* Gold dust effect */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-0.5 h-0.5 bg-metallic-gold/20 rounded-full"
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        />
      ))}
    </div>
  );

  // Animated background
  const AnimatedBackground = () => (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(122, 30, 30, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(250, 243, 224, 0.08) 0%, transparent 50%)`,
          backgroundSize: '400% 400%',
        }}
      />
    </div>
  );

  // Enhanced step components
  const stepComponents = [
    // Step 1: Occasion Selection
    <motion.div
      key="occasion"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold via-amber-500 to-metallic-gold rounded-full blur-xl opacity-50" />
          <div className="absolute inset-4 bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-full flex items-center justify-center">
            <Heart className="w-16 h-16 text-white" />
          </div>
        </motion.div>
        <h2 className="text-5xl font-serif text-charcoal mb-6">
          What's the <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold to-amber-500">Occasion</span>?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select the perfect mood for your royal dining experience
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {occasions.map((occasion, index) => {
          const Icon = occasion.icon;
          return (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${occasion.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
                animate={{ opacity: selectedOccasion?.id === occasion.id ? 0.3 : 0 }}
              />
              
              <button
                onClick={() => setSelectedOccasion(occasion)}
                className={`relative w-full p-8 rounded-3xl border-2 transition-all duration-500 group overflow-hidden ${
                  selectedOccasion?.id === occasion.id
                    ? 'border-metallic-gold bg-gradient-to-br from-white to-soft-cream shadow-2xl shadow-metallic-gold/30'
                    : 'border-white/50 bg-white/80 backdrop-blur-sm hover:border-metallic-gold/50 hover:shadow-xl'
                }`}
              >
                {/* Animated border */}
                {selectedOccasion?.id === occasion.id && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="absolute inset-[2px] bg-white rounded-3xl" />
                  </motion.div>
                )}
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${occasion.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  >
                    <span className="text-3xl">{occasion.emoji}</span>
                  </motion.div>
                  
                  <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-royal-maroon transition-colors">
                    {occasion.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{occasion.description}</p>
                  
                  <motion.div
                    className="flex items-center justify-center text-metallic-gold"
                    initial={false}
                    animate={{ opacity: selectedOccasion?.id === occasion.id ? 1 : 0 }}
                  >
                    <ChevronRight className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Selected</span>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>,

    // Step 2: Date & Time
    <motion.div
      key="datetime"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-16"
    >
      <div className="text-center mb-16">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full blur-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <Calendar className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-5xl font-serif text-charcoal mb-6">
          Pick Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Perfect Moment</span>
        </h2>
        <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
          "We craft moments — choose the time that suits your royal story."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Date Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-charcoal">Select Date</h3>
              <p className="text-gray-500">Choose your royal date</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {dates.map((dateObj, index) => {
              const isSelected = selectedDate?.toDateString() === dateObj.date.toDateString();
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(dateObj.date)}
                  className={`relative p-5 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? 'border-metallic-gold bg-gradient-to-br from-royal-maroon to-royal-maroon-dark text-white shadow-xl'
                      : 'border-white/50 bg-white/80 backdrop-blur-sm hover:border-metallic-gold/50 hover:shadow-lg'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-amber-500/20"
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="text-2xl font-serif font-bold">{dateObj.number}</div>
                    <div className="text-sm opacity-75 mt-1">{dateObj.day}</div>
                    <div className="text-xs opacity-60 mt-2">{dateObj.month}</div>
                  </div>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <Check className="w-4 h-4 text-metallic-gold" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Time Selection */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-metallic-gold to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-charcoal">Available Times</h3>
              <p className="text-gray-500">Select your preferred time</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot, index) => {
              const Icon = slot.icon;
              const isSelected = selectedTime === slot.time;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${
                    !slot.available
                      ? 'border-white/30 bg-gray-50/50 cursor-not-allowed opacity-50'
                      : isSelected
                      ? 'border-metallic-gold bg-gradient-to-br from-white to-soft-cream shadow-xl'
                      : 'border-white/50 bg-white/80 backdrop-blur-sm hover:border-metallic-gold/50 hover:shadow-lg'
                  }`}
                  disabled={!slot.available}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-metallic-gold/10 to-amber-500/10"
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-5 h-5 text-gray-500" />
                      {!slot.available ? (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                          Booked
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-metallic-gold transition-colors" />
                      )}
                    </div>
                    <div className="font-serif text-xl">{slot.time}</div>
                    <div className="text-sm text-gray-500 mt-1">{slot.label}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <Sun className="w-6 h-6 text-amber-500" />
              <div>
                <h4 className="font-medium text-blue-800">Golden Hour Recommendation</h4>
                <p className="text-sm text-blue-600 mt-1">
                  Early evening slots offer breathtaking sunset views over the city
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>,

    // Step 3: Seating Experience
    <motion.div
      key="seating"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-16"
    >
      <div className="text-center mb-16">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-full blur-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
              <Crown className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-5xl font-serif text-charcoal mb-6">
          Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Seating Experience</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose where your royal moment will unfold in our exclusive lounge
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {seatingOptions.map((seat, index) => {
          const Icon = seat.icon;
          const isSelected = selectedSeating?.id === seat.id;
          return (
            <motion.div
              key={seat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative"
            >
              <button
                onClick={() => setSelectedSeating(seat)}
                className={`w-full rounded-3xl overflow-hidden border-2 transition-all duration-500 group relative ${
                  isSelected
                    ? 'border-metallic-gold shadow-2xl shadow-metallic-gold/30'
                    : 'border-white/50 hover:border-metallic-gold/50 hover:shadow-xl'
                }`}
              >
                {/* Premium gradient overlay */}
                {seat.price === 'Premium' && (
                  <motion.div
                    className="absolute top-4 left-4 z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-full flex items-center gap-2 shadow-lg">
                      <Crown className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">Premium</span>
                    </div>
                  </motion.div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={seat.image} 
                    alt={seat.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Selection indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <Check className="w-6 h-6 text-metallic-gold" />
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <div className="p-8 bg-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-royal-maroon" />
                        <h3 className="font-serif text-2xl text-charcoal">{seat.name}</h3>
                      </div>
                      <p className="text-gray-600">{seat.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-lg text-charcoal">{seat.capacity}</div>
                      <div className="text-sm text-gray-500">{seat.price}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {seat.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-soft-cream to-white text-gray-700 text-sm rounded-full border border-gray-100"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>,

    // Step 4: Guest Details
    <motion.div
      key="details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      <div className="text-center mb-16">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-5xl font-serif text-charcoal mb-6">
          Guest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Details</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete your royal reservation with personal details
        </p>
      </div>

      <form className="max-w-2xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              label: 'Full Name',
              name: 'name',
              icon: User,
              placeholder: 'John Smith',
              type: 'text'
            },
            {
              label: 'Phone Number',
              name: 'phone',
              icon: Phone,
              placeholder: '+1 (555) 123-4567',
              type: 'tel'
            },
            {
              label: 'Email Address',
              name: 'email',
              icon: Mail,
              placeholder: 'john@example.com',
              type: 'email'
            }
          ].map((field, index) => {
            const Icon = field.icon;
            return (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <label className="block text-lg font-medium text-charcoal">
                  {field.label}
                </label>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-white/50 bg-white/80 backdrop-blur-sm rounded-2xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all"
                    placeholder={field.placeholder}
                    required
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <label className="block text-lg font-medium text-charcoal">
            Special Requests
          </label>
          <motion.div whileHover={{ scale: 1.01 }} className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full pl-12 pr-4 py-4 border-2 border-white/50 bg-white/80 backdrop-blur-sm rounded-2xl focus:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/20 transition-all resize-none"
              placeholder="Tell us what will make your experience magical ✨"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-r from-soft-cream/80 to-white/80 rounded-3xl border border-white/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-metallic-gold" />
            <span className="text-xl font-medium text-charcoal">Your Information is Secure</span>
          </div>
          <p className="text-gray-600">
            We value your privacy. Your details will only be used for reservation purposes 
            and will never be shared with third parties. All data is encrypted and securely stored.
          </p>
        </motion.div>
      </form>
    </motion.div>,

    // Step 5: Confirmation
    <motion.div
      key="confirmation"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="py-12"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-40 h-40 mx-auto mb-12"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold/40 to-amber-500/40 rounded-full blur-2xl" />
          <div className="absolute inset-8 bg-gradient-to-br from-metallic-gold to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
            <Check className="w-20 h-20 text-white" />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl font-serif text-charcoal mb-8">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold to-amber-500">Royal Table</span> Has Been Reserved! 🎉
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are preparing something special just for you. 
          See you soon at Tavisha Lounge for an unforgettable royal experience.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="bg-gradient-to-br from-white to-soft-cream rounded-3xl p-12 shadow-2xl border border-white/50 backdrop-blur-sm">
          <h3 className="font-serif text-4xl text-center text-charcoal mb-12">
            Reservation Summary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                label: 'Occasion', 
                value: selectedOccasion?.name, 
                icon: Heart,
                color: 'from-pink-500/20 to-rose-500/20'
              },
              { 
                label: 'Date & Time', 
                value: `${selectedDate?.toLocaleDateString()} at ${selectedTime}`, 
                icon: Calendar,
                color: 'from-blue-500/20 to-indigo-600/20'
              },
              { 
                label: 'Seating', 
                value: selectedSeating?.name, 
                icon: Crown,
                color: 'from-emerald-500/20 to-teal-600/20'
              },
              { 
                label: 'Guest', 
                value: formData.name, 
                icon: User,
                color: 'from-purple-500/20 to-pink-600/20'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-white/50`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-7 h-7 text-royal-maroon" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-serif text-2xl text-charcoal mt-1">{item.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {formData.specialRequests && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-100/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="w-7 h-7 text-blue-600" />
                <span className="text-xl font-medium text-blue-800">Special Request</span>
              </div>
              <p className="text-gray-700 text-lg italic">"{formData.specialRequests}"</p>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-white rounded-full text-lg font-medium shadow-xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-royal-maroon-dark to-royal-maroon"
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 border-2 border-metallic-gold text-metallic-gold rounded-full text-lg font-medium hover:bg-metallic-gold/5 transition-colors shadow-lg"
        >
          <Utensils className="w-5 h-5 inline mr-3" />
          View Menu
        </motion.button>
      </motion.div>
    </motion.div>
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-cream/30 via-white to-soft-cream/20 overflow-hidden">
      <FloatingParticles />
      <AnimatedBackground />
      
      {/* Mouse follower for premium effect */}
      <motion.div
        className="fixed pointer-events-none z-50 w-96 h-96"
        style={{
          x: springX,
          y: springY,
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, 
                rgba(122, 30, 30, 0.2) 0%, 
                rgba(212, 175, 55, 0.15) 25%, 
                rgba(250, 243, 224, 0.1) 50%, 
                rgba(212, 175, 55, 0.15) 75%, 
                rgba(122, 30, 30, 0.2) 100%)`,
              backgroundSize: '400% 400%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-elegant-table-setting-in-a-restaurant-39813-large.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="relative z-10 container mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Animated crown */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold via-amber-500 to-metallic-gold rounded-full blur-2xl opacity-50" />
                <Crown className="relative w-32 h-32 text-metallic-gold drop-shadow-2xl" />
              </div>
            </motion.div>
            
            {/* Main title with gradient */}
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 leading-none">
              <span className="block">Reserve Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold via-amber-300 to-metallic-gold">
                Royal Experience
              </span>
            </h1>
            
            {/* Subtitle with animated underline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              Step into a world of flavor, elegance, and warmth. 
              Your table awaits — crafted with care, prepared with love.
            </motion.p>
            
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(0)}
              className="group relative px-16 py-6 rounded-full overflow-hidden shadow-2xl"
            >
              {/* Button background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-metallic-gold via-amber-500 to-metallic-gold"
                initial={false}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                <Sparkles className="w-8 h-8 text-royal-maroon" />
                <span className="text-2xl font-medium text-royal-maroon">
                  Begin My Reservation
                </span>
                <ChevronRight className="w-6 h-6 text-royal-maroon group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
          <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center mx-auto">
            <div className="w-2 h-4 bg-white/60 rounded-full mt-4" />
          </div>
        </motion.div>
      </section>

      {/* Trust Building Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white to-soft-cream/30" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto text-center mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-serif text-charcoal mb-12"
            >
              Your Comfort, <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-maroon to-royal-maroon-dark">Our Priority</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              At Tavisha Lounge, every table is more than a seat — it's a space where memories are created. 
              Experience hospitality fit for royalty.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white to-soft-cream rounded-full border border-gray-100 shadow-lg backdrop-blur-sm"
            >
              <Shield className="w-6 h-6 text-metallic-gold" />
              <span className="text-xl text-gray-700">
                "A seamless reservation experience, crafted for your comfort."
              </span>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Zap, title: 'Instant Confirmation', desc: 'Immediate booking confirmation' },
              { icon: Star, title: 'Custom Requests', desc: 'Personalize your experience' },
              { icon: Cake, title: 'Celebrations', desc: 'Special birthday arrangements' },
              { icon: Award, title: 'Hassle-Free', desc: 'Smooth and easy process' },
              { icon: Users, title: 'Attentive Staff', desc: 'Professional service' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <div className="relative p-8 bg-white rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                    {/* Icon with glow effect */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-20 h-20 mx-auto mb-8"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-500/20 to-indigo-600/20' : 
                        index === 1 ? 'from-amber-500/20 to-orange-500/20' :
                        index === 2 ? 'from-purple-500/20 to-pink-600/20' :
                        index === 3 ? 'from-emerald-500/20 to-teal-600/20' : 
                        'from-rose-500/20 to-pink-500/20'} rounded-full blur-xl`} />
                      <div className={`absolute inset-4 bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-indigo-600' : 
                        index === 1 ? 'from-amber-500 to-orange-500' :
                        index === 2 ? 'from-purple-500 to-pink-600' :
                        index === 3 ? 'from-emerald-500 to-teal-600' : 
                        'from-rose-500 to-pink-500'} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="font-serif text-xl text-charcoal mb-4 text-center group-hover:text-royal-maroon transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Journey */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-white/50 to-soft-cream/20">
        <div className="container mx-auto">
          {/* Progress Steps - Enhanced */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="relative">
              <div className="flex items-center justify-between relative z-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index <= currentStep;
                  const isCurrent = index === currentStep;
                  
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <motion.button
                        onClick={() => setCurrentStep(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`relative w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-metallic-gold to-amber-500 border-white shadow-2xl'
                            : 'bg-white border-gray-200 shadow-lg'
                        }`}
                      >
                        <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        
                        {isCurrent && (
                          <motion.div
                            className="absolute -inset-2 border-2 border-metallic-gold/30 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                      
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 font-medium whitespace-nowrap ${
                        isActive ? 'text-charcoal' : 'text-gray-400'
                      }`}>
                        {step.name}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Progress line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full" />
              <motion.div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-metallic-gold to-amber-500 -translate-y-1/2 z-0 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-4xl shadow-2xl border border-white/50 p-12 min-h-[700px]">
              <AnimatePresence mode="wait">
                {stepComponents[currentStep]}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-between mt-20 pt-12 border-t border-gray-100/50"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className={`px-10 py-4 rounded-xl border-2 font-medium transition-all duration-300 flex items-center gap-3 ${
                      currentStep === 0
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-royal-maroon text-royal-maroon hover:bg-gradient-to-r hover:from-royal-maroon hover:to-royal-maroon-dark hover:text-white'
                    }`}
                    disabled={currentStep === 0}
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                    Back
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => currentStep === 3 ? handleSubmit(new Event('submit')) : handleNext()}
                    className="group px-10 py-4 bg-gradient-to-r from-metallic-gold to-amber-500 text-royal-maroon rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                  >
                    {currentStep === 3 ? 'Confirm Reservation' : 'Continue'}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl font-serif text-charcoal mb-12">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-maroon to-royal-maroon-dark">Questions</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about reserving your royal experience
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                q: 'Do I need to prepay for reservation?',
                a: 'No, reservations are completely free. Payments are made only for your dining order at the restaurant.',
                icon: Shield
              },
              {
                q: 'Can I modify my booking?',
                a: 'Yes, you can easily modify your reservation by calling us directly or updating it through our online system up to 2 hours before your booking time.',
                icon: Calendar
              },
              {
                q: 'How long can we hold the table?',
                a: 'We hold your table for 15 minutes after the reserved time. Please let us know if you are running late.',
                icon: Watch
              }
            ].map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-soft-cream rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-white/50">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold/10 to-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-metallic-gold" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-serif text-2xl text-charcoal mb-6 group-hover:text-royal-maroon transition-colors">
                          {faq.q}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background with particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon via-royal-maroon-dark to-charcoal" />
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-metallic-gold/30 rounded-full"
              animate={{
                y: [0, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 container mx-auto text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold via-amber-500 to-metallic-gold rounded-full blur-2xl opacity-50" />
              <Crown className="relative w-40 h-40 text-metallic-gold drop-shadow-2xl" />
            </div>
          </motion.div>
          
          <h2 className="text-7xl font-serif text-white mb-12">
            Your Table Awaits You
          </h2>
          
          <p className="text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
            Step into a world of royal flavors, cozy ambiance, and unforgettable hospitality. 
            Reserve your table today and let us craft a special dining moment just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-6 rounded-full overflow-hidden shadow-2xl"
              onClick={() => setCurrentStep(0)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-metallic-gold via-amber-500 to-metallic-gold"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              <span className="relative z-10 flex items-center gap-4 text-2xl font-medium text-royal-maroon">
                <Sparkles className="w-7 h-7" />
                Reserve Now
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-6 border-2 border-metallic-gold text-metallic-gold rounded-full text-2xl font-medium hover:bg-metallic-gold/10 transition-colors shadow-xl"
            >
              <Phone className="w-7 h-7 inline mr-4" />
              Call Us Instantly
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-charcoal">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="w-10 h-10 text-metallic-gold" />
                </motion.div>
                <span className="font-serif text-3xl text-white">Tavisha Lounge</span>
              </div>
              <p className="text-white/70 text-lg">
                © {new Date().getFullYear()} Royal Dining Experience. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-royal-maroon/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-metallic-gold" />
              </div>
              <div>
                <div className="text-white/90 text-lg">123 Royal Avenue</div>
                <div className="text-white/70">London, UK</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add the missing handleSubmit function
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  console.log('Form submitted:', formData);
  // Show success message or proceed to next step
};

export default ReservationPage;