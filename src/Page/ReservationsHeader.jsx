// src/components/RoyalReservations.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Icons
import {
  Crown, Diamond, Gem, Sparkles, Star, Heart, Award,
  CalendarDays, Clock, Users, Phone, Mail, User, MapPin,
  CheckCircle, ChevronRight, ChevronLeft, AlertCircle, Camera,
  Music, ChefHat, Flower2, Shield, Compass, Sunset, Waves,
  Wind, Mountain, Navigation, Feather, GlassWater, Coffee,
  Wine, Utensils, Leaf, Gift, Bell, Volume2,
  Sun, Moon, Compass as CompassIcon,
  Navigation as NavigationIcon, Car
} from 'lucide-react';

// ==================== CONSTANTS & DATA ====================
const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Grand Dining Hall",
    caption: "Where royalty dines"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Signature Dish",
    caption: "Art on a plate"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    title: "Private Chamber",
    caption: "Intimate luxury"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    title: "Celestial Terrace",
    caption: "Dine under the stars"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    title: "Royal Thali",
    caption: "A feast for kings"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    title: "Wine Cellar",
    caption: "Vintage selections"
  }
];

const ROYAL_TITLES = [
  'Your Majesty', 'Your Highness', 'Your Excellency', 'Your Grace',
  'His Majesty', 'Her Majesty', 'His Highness', 'Her Highness',
  'The Maharaja', 'The Maharani', 'The Raja', 'The Rani',
  'The Prince', 'The Princess', 'The Duke', 'The Duchess'
];

const ROYAL_OCCASIONS = [
  {
    id: 'coronation',
    title: 'ROYAL CORONATION',
    description: 'A ceremony fit for true royalty',
    icon: Crown,
    gradient: 'from-amber-500 to-yellow-600',
    price: '₹50,000',
    features: [
      'Red carpet arrival',
      'Royal procession',
      'Coronation ceremony',
      'Crown presentation',
      'Royal banquet'
    ]
  },
  {
    id: 'wedding',
    title: 'IMPERIAL WEDDING',
    description: 'The wedding of the century',
    icon: Diamond,
    gradient: 'from-rose-500 to-pink-600',
    price: '₹150,000',
    features: [
      'Bridal suite',
      'Wedding ceremony',
      'Reception hall',
      'Photography',
      'Wedding cake'
    ]
  },
  {
    id: 'anniversary',
    title: 'GOLDEN ANNIVERSARY',
    description: 'Celebrate half a century',
    icon: Gem,
    gradient: 'from-yellow-500 to-amber-600',
    price: '₹75,000',
    features: [
      'Vow renewal',
      'Family photoshoot',
      'Memory lane',
      'Gift presentation',
      'Dance floor'
    ]
  },
  {
    id: 'birthday',
    title: 'MAJESTIC BIRTHDAY',
    description: 'Celebrate in royal style',
    icon: Star,
    gradient: 'from-purple-500 to-indigo-600',
    price: '₹35,000',
    features: [
      'Birthday setup',
      'Cake ceremony',
      'Gift presentation',
      'Live music',
      'Party favors'
    ]
  }
];

const ROYAL_DINING = [
  {
    id: 'indian',
    title: 'MAHARAJA\'S FEAST',
    cuisine: 'Indian Royal',
    description: 'Traditional recipes from royal kitchens',
    icon: Crown,
    gradient: 'from-amber-500 to-orange-600',
    price: '₹5,000'
  },
  {
    id: 'french',
    title: 'FRENCH RENAISSANCE',
    cuisine: 'French Haute',
    description: 'Classic French techniques',
    icon: Diamond,
    gradient: 'from-blue-500 to-indigo-600',
    price: '₹8,000'
  },
  {
    id: 'italian',
    title: 'LA DOLCE VITA',
    cuisine: 'Italian Regional',
    description: 'Authentic Italian flavors',
    icon: Gem,
    gradient: 'from-green-500 to-emerald-600',
    price: '₹4,500'
  },
  {
    id: 'japanese',
    title: 'JAPANESE IMPERIAL',
    cuisine: 'Kaiseki',
    description: 'The art of Japanese dining',
    icon: Star,
    gradient: 'from-red-500 to-rose-600',
    price: '₹7,000'
  }
];

const ROYAL_SEATING = [
  {
    id: 'throne',
    name: 'THE ROYAL THRONE',
    description: 'Seat yourself like a monarch',
    icon: Crown,
    features: ['Velvet upholstery', 'Gold leaf accents']
  },
  {
    id: 'window',
    name: 'PANORAMIC VISTA',
    description: 'Dine with a view',
    icon: Mountain,
    features: ['City skyline', 'Sunset view']
  },
  {
    id: 'private',
    name: 'ROYAL CHAMBER',
    description: 'Utmost privacy',
    icon: Shield,
    features: ['Private entrance', 'Personal butler']
  },
  {
    id: 'garden',
    name: 'SECRET GARDEN',
    description: 'Dine amidst nature',
    icon: Flower2,
    features: ['Outdoor setting', 'Fountain view']
  }
];

const WINE_COLLECTION = [
  {
    id: 'dom',
    name: 'Dom Pérignon Vintage 2010',
    region: 'France',
    vintage: 2010,
    price: '₹45,000'
  },
  {
    id: 'krug',
    name: 'Krug Grande Cuvée',
    region: 'France',
    vintage: 'NV',
    price: '₹35,000'
  },
  {
    id: 'petrus',
    name: 'Pétrus 2005',
    region: 'Bordeaux',
    vintage: 2005,
    price: '₹250,000'
  },
  {
    id: 'lafite',
    name: 'Château Lafite Rothschild',
    region: 'Bordeaux',
    vintage: 2000,
    price: '₹180,000'
  }
];

const ENTERTAINMENT_OPTIONS = [
  {
    id: 'orchestra',
    name: 'Royal Orchestra',
    duration: '2 hours',
    price: '₹50,000'
  },
  {
    id: 'quartet',
    name: 'String Quartet',
    duration: '3 hours',
    price: '₹25,000'
  },
  {
    id: 'pianist',
    name: 'Concert Pianist',
    duration: '4 hours',
    price: '₹15,000'
  },
  {
    id: 'singer',
    name: 'Opera Singer',
    duration: '2 hours',
    price: '₹20,000'
  }
];

const TRANSPORTATION_OPTIONS = [
  {
    id: 'rolls',
    name: 'Rolls-Royce Phantom',
    capacity: 4,
    price: '₹5,000/hour'
  },
  {
    id: 'bentley',
    name: 'Bentley Mulsanne',
    capacity: 4,
    price: '₹4,500/hour'
  },
  {
    id: 'maybach',
    name: 'Mercedes-Maybach',
    capacity: 4,
    price: '₹4,000/hour'
  },
  {
    id: 'helicopter',
    name: 'Helicopter Transfer',
    capacity: 4,
    price: '₹50,000/flight'
  }
];

const TIME_SLOTS = [
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

// ==================== ANIMATION VARIANTS ====================
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  }
};

const slideIn = (direction = 'left') => ({
  hidden: { 
    x: direction === 'left' ? -50 : 50,
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  }
});

// ==================== UTILITY FUNCTIONS ====================
const formatPrice = (price, currency = 'INR') => {
  const numPrice = parseInt(price.replace(/[^0-9]/g, ''));
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(numPrice);
};

const getTodayDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const getMaxDate = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  return maxDate;
};

// ==================== COMPONENTS ====================

// Particles Component
const Particles = ({ count = 30 }) => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;
        const startX = Math.random() * dimensions.width;
        const startY = Math.random() * dimensions.height;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-metallic-gold/30 to-transparent"
            style={{
              width: size,
              height: size,
              left: startX,
              top: startY,
              filter: 'blur(1px)'
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

// Glowing Orbs Component
const GlowingOrbs = () => {
  const orbAnimation = {
    animate: {
      x: [0, 50, 0],
      y: [0, 50, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3]
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-metallic-gold/10 to-transparent"
        animate={orbAnimation.animate}
        transition={orbAnimation.transition}
        style={{ filter: 'blur(60px)' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-l from-royal-maroon/10 to-transparent"
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ filter: 'blur(60px)' }}
      />
    </div>
  );
};

// Floating Crowns Component
const FloatingCrowns = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            rotate: Math.random() * 360
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 2
          }}
        >
          <Crown size={40 + i * 10} className="text-metallic-gold/20" />
        </motion.div>
      ))}
    </div>
  );
};

// ThreeDCard Component
const ThreeDCard = ({ children, className = '', intensity = 10 }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((centerX - x) / centerX) * intensity;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

// MagicCursor Component
const MagicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden lg:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isPointer ? 1.5 : 1
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    >
      <div className="relative">
        <div className="absolute w-8 h-8 border-2 border-metallic-gold rounded-full" />
        <div className="absolute w-1 h-1 bg-metallic-gold rounded-full top-3.5 left-3.5" />
      </div>
    </motion.div>
  );
};

// Notification Component
const Notification = ({ message, type = 'info', onClose }) => {
  const bgColor = {
    success: 'bg-green-500/90',
    error: 'bg-red-500/90',
    warning: 'bg-yellow-500/90',
    info: 'bg-charcoal/90'
  }[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`${bgColor} backdrop-blur-md rounded-xl p-4 shadow-2xl border-l-4 border-metallic-gold text-white`}
    >
      <p className="text-sm">{message}</p>
    </motion.div>
  );
};

// NotificationCenter Component
const NotificationCenter = ({ notifications, onClose }) => {
  return (
    <AnimatePresence>
      {notifications.length > 0 && (
        <div className="fixed top-24 right-8 z-50 space-y-2">
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              message={notification.message}
              type={notification.type}
              onClose={() => onClose(notification.id)}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

// ProgressSteps Component
const ProgressSteps = ({ currentStep, totalSteps = 4 }) => {
  const steps = ['ROYAL DETAILS', 'DINING PREFERENCES', 'ROYAL UPGRADES', 'CORONATION'];

  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto">
      {steps.map((label, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center">
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl relative ${
                currentStep > i + 1
                  ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                  : currentStep === i + 1
                  ? 'bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-metallic-gold'
                  : 'bg-charcoal/50 text-soft-cream/30 border-2 border-metallic-gold/20'
              }`}
              animate={currentStep === i + 1 ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 0 0 rgba(212,175,55,0.4)',
                  '0 0 0 20px rgba(212,175,55,0)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentStep > i + 1 ? (
                <CheckCircle className="h-8 w-8" />
              ) : (
                i + 1
              )}
            </motion.div>
            <span className={`mt-3 text-xs font-medium tracking-wider ${
              currentStep >= i + 1 ? 'text-metallic-gold' : 'text-soft-cream/30'
            }`}>
              {label}
            </span>
          </div>
          {i < totalSteps - 1 && (
            <motion.div
              className={`w-24 h-0.5 mx-4 ${
                currentStep > i + 1 ? 'bg-metallic-gold' : 'bg-metallic-gold/20'
              }`}
              animate={currentStep === i + 1 ? {
                scaleX: [1, 1.2, 1],
                opacity: [1, 0.5, 1]
              } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const RoyalReservations = () => {
  // State
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isDayMode, setIsDayMode] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [loyaltyPoints, setLoyaltyPoints] = useState(2500);
  const [membershipTier, setMembershipTier] = useState('Platinum');
  const [errors, setErrors] = useState({});

  // Form Data
  const [formData, setFormData] = useState({
    royalTitle: 'Your Majesty',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: new Date(),
    time: '19:00',
    guests: 2,
    occasion: 'coronation',
    diningPreference: 'indian',
    seating: 'throne',
    specialRequests: '',
    termsAccepted: false,
    privacyAccepted: false,
    marketingAccepted: false
  });

  // Refs
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const packagesRef = useRef(null);
  const galleryRef = useRef(null);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });

  // Transform values
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Handlers
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field if exists
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
    addNotification('Royal package selected', 'success');
  };

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const toggleWishlist = (itemId) => {
    setWishlist(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
    addNotification(
      wishlist.includes(itemId) ? 'Removed from wishlist' : 'Added to wishlist',
      'success'
    );
  };

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (currentStep === 4) {
      if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms';
      if (!formData.privacyAccepted) newErrors.privacy = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    addNotification('Reservation confirmed! Check your email.', 'success');
  };

  const calculateTotalPrice = useMemo(() => {
    let total = 0;
    
    if (selectedPackage) {
      const pkg = ROYAL_OCCASIONS.find(o => o.id === selectedPackage);
      if (pkg) {
        total += parseInt(pkg.price.replace(/[^0-9]/g, ''));
      }
    }
    
    total += selectedAddons.length * 5000;
    
    return total;
  }, [selectedPackage, selectedAddons]);

  // Effects
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-charcoal text-soft-cream overflow-x-hidden relative">
      {/* Global Elements */}
      <Particles count={30} />
      <GlowingOrbs />
      <FloatingCrowns />
      <MagicCursor />
      <NotificationCenter 
        notifications={notifications} 
        onClose={removeNotification}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-metallic-gold via-royal-maroon to-metallic-gold z-50"
        style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
      />

      {/* Floating Navigation */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-charcoal/80 backdrop-blur-xl rounded-full px-8 py-4 border border-metallic-gold/30 shadow-2xl">
          <div className="flex items-center gap-6">
            {['Hero', 'Reserve', 'Packages', 'Gallery'].map((item, i) => (
              <motion.button
                key={item}
                className="text-sm font-medium relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const refs = [heroRef, formRef, packagesRef, galleryRef];
                  refs[i]?.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="text-soft-cream/70 group-hover:text-metallic-gold transition-colors">
                  {item}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-metallic-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Day/Night Toggle */}
      <motion.button
        className="fixed top-32 right-8 z-40 w-12 h-12 rounded-full bg-charcoal/80 backdrop-blur-xl border border-metallic-gold/30 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDayMode(!isDayMode)}
      >
        {isDayMode ? (
          <Sun className="h-5 w-5 text-metallic-gold" />
        ) : (
          <Moon className="h-5 w-5 text-metallic-gold" />
        )}
      </motion.button>

      {/* Currency Selector */}
      <motion.select
        className="fixed top-32 left-8 z-40 bg-charcoal/80 backdrop-blur-xl border border-metallic-gold/30 rounded-xl px-4 py-2 text-soft-cream text-sm"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        whileHover={{ scale: 1.05 }}
      >
        <option value="INR">🇮🇳 INR</option>
        <option value="USD">🇺🇸 USD</option>
        <option value="EUR">🇪🇺 EUR</option>
        <option value="GBP">🇬🇧 GBP</option>
        <option value="AED">🇦🇪 AED</option>
      </motion.select>

      {/* ==================== HERO SECTION ==================== */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Royal Palace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal" />
          
          {/* Animated Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.2), transparent 30%)',
                'radial-gradient(circle at 80% 80%, rgba(212,175,55,0.2), transparent 30%)',
                'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.2), transparent 30%)',
                'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.2), transparent 30%)'
              ]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-6xl mx-auto px-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* Royal Seal */}
            <motion.div
              variants={fadeIn}
              className="w-40 h-40 mx-auto mb-8 relative"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                <div className="w-full h-full border-2 border-metallic-gold rounded-full" />
              </motion.div>
              
              <motion.div
                className="absolute inset-4"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                <div className="w-full h-full border-2 border-metallic-gold/50 rounded-full border-dashed" />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Crown className="w-20 h-20 text-metallic-gold" />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold mb-6 font-serif"
            >
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                TAVISHA
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-2xl text-metallic-gold mb-4 tracking-[0.3em]"
            >
              THE PALACE OF ROYAL DINING
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-soft-cream/80 max-w-3xl mx-auto mb-12"
            >
              Where every meal is a coronation and every guest is treated like royalty
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <ThreeDCard>
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal rounded-xl font-bold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => formRef.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })}
                >
                  <span className="relative z-10">BEGIN YOUR CORONATION</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </ThreeDCard>

              <ThreeDCard>
                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-metallic-gold text-metallic-gold rounded-xl font-bold text-lg hover:bg-metallic-gold/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => packagesRef.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })}
                >
                  EXPLORE PACKAGES
                </motion.button>
              </ThreeDCard>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-metallic-gold rounded-full mt-2"
                  animate={{
                    y: [0, 20, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== RESERVATION FORM SECTION ==================== */}
      <section ref={formRef} className="py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                BEGIN YOUR CORONATION
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              Every detail matters when you're dining like royalty
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <ProgressSteps currentStep={currentStep} />
          </div>

          {/* Form Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-charcoal/80 backdrop-blur-xl rounded-3xl p-8 border border-metallic-gold/20 shadow-2xl"
                >
                  {/* Step 1: Basic Details */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-metallic-gold mb-6">ROYAL IDENTITY</h3>
                      
                      {/* Title Selection */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Royal Title
                        </label>
                        <select
                          value={formData.royalTitle}
                          onChange={(e) => handleInputChange('royalTitle', e.target.value)}
                          className="w-full px-6 py-4 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
                        >
                          {ROYAL_TITLES.map(title => (
                            <option key={title} value={title}>{title}</option>
                          ))}
                        </select>
                      </div>

                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-metallic-gold mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`w-full px-6 py-4 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
                              errors.firstName ? 'border-red-500' : 'border-metallic-gold/30 focus:border-metallic-gold'
                            }`}
                            placeholder="Your royal first name"
                          />
                          {errors.firstName && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-metallic-gold mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`w-full px-6 py-4 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
                              errors.lastName ? 'border-red-500' : 'border-metallic-gold/30 focus:border-metallic-gold'
                            }`}
                            placeholder="Your royal last name"
                          />
                          {errors.lastName && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-metallic-gold mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-6 py-4 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
                              errors.email ? 'border-red-500' : 'border-metallic-gold/30 focus:border-metallic-gold'
                            }`}
                            placeholder="royal@email.com"
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-metallic-gold mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full px-6 py-4 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
                              errors.phone ? 'border-red-500' : 'border-metallic-gold/30 focus:border-metallic-gold'
                            }`}
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Dining Preferences */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-metallic-gold mb-6">DINING PREFERENCES</h3>

                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Preferred Date
                        </label>
                        <DatePicker
                          selected={formData.date}
                          onChange={(date) => handleInputChange('date', date)}
                          minDate={getTodayDate()}
                          maxDate={getMaxDate()}
                          className="w-full px-6 py-4 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
                          dateFormat="MMMM d, yyyy"
                          calendarClassName="bg-charcoal border border-metallic-gold/30"
                        />
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Preferred Time
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                          {TIME_SLOTS.map((time) => (
                            <motion.button
                              key={time}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleInputChange('time', time)}
                              className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                                formData.time === time
                                  ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                                  : 'bg-charcoal/50 text-soft-cream/70 hover:bg-royal-maroon/30 border border-metallic-gold/20'
                              }`}
                            >
                              {time}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Number of Guests
                        </label>
                        <div className="flex items-center gap-6">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleInputChange('guests', Math.max(1, formData.guests - 1))}
                            className="w-12 h-12 rounded-full bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold text-2xl"
                          >
                            −
                          </motion.button>
                          
                          <span className="text-4xl font-bold text-metallic-gold">{formData.guests}</span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleInputChange('guests', Math.min(20, formData.guests + 1))}
                            className="w-12 h-12 rounded-full bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold text-2xl"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>

                      {/* Occasion Selection */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Select Occasion
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {ROYAL_OCCASIONS.map((occasion) => (
                            <motion.button
                              key={occasion.id}
                              whileHover={{ scale: 1.02, y: -5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleInputChange('occasion', occasion.id)}
                              className={`p-6 rounded-xl text-left transition-all ${
                                formData.occasion === occasion.id
                                  ? `bg-gradient-to-r ${occasion.gradient} text-charcoal`
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20'
                              }`}
                            >
                              <occasion.icon className="h-8 w-8 mb-2" />
                              <div className="font-bold">{occasion.title}</div>
                              <div className="text-sm opacity-70">{occasion.description}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Dining Preference */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Dining Preference
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {ROYAL_DINING.map((dining) => (
                            <motion.button
                              key={dining.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleInputChange('diningPreference', dining.id)}
                              className={`p-4 rounded-xl text-left ${
                                formData.diningPreference === dining.id
                                  ? `bg-gradient-to-r ${dining.gradient} text-charcoal`
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20'
                              }`}
                            >
                              <dining.icon className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{dining.title}</div>
                              <div className="text-xs opacity-70">{dining.cuisine}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Seating Preference */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Seating Preference
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {ROYAL_SEATING.map((seat) => (
                            <motion.button
                              key={seat.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleInputChange('seating', seat.id)}
                              className={`p-4 rounded-xl text-left ${
                                formData.seating === seat.id
                                  ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20'
                              }`}
                            >
                              <seat.icon className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{seat.name}</div>
                              <div className="text-xs opacity-70">{seat.description}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Royal Upgrades */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-metallic-gold mb-6">ROYAL UPGRADES</h3>

                      {/* Premium Packages */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-4">
                          Select Premium Package
                        </label>
                        <div className="space-y-4">
                          {ROYAL_OCCASIONS.map((pkg) => (
                            <motion.div
                              key={pkg.id}
                              whileHover={{ scale: 1.02, x: 10 }}
                              onClick={() => handlePackageSelect(pkg.id)}
                              className={`p-6 rounded-xl cursor-pointer transition-all ${
                                selectedPackage === pkg.id
                                  ? `bg-gradient-to-r ${pkg.gradient} text-charcoal`
                                  : 'bg-charcoal/50 border border-metallic-gold/20'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${
                                  selectedPackage === pkg.id ? 'bg-charcoal/20' : 'bg-charcoal'
                                }`}>
                                  <pkg.icon className={`h-8 w-8 ${
                                    selectedPackage === pkg.id ? 'text-charcoal' : 'text-metallic-gold'
                                  }`} />
                                </div>
                                
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-bold text-lg">{pkg.title}</h4>
                                      <p className="text-sm opacity-70">{pkg.description}</p>
                                    </div>
                                    <span className="text-2xl font-bold">{pkg.price}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Wine Selection */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-4">
                          Premium Wine Selection
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {WINE_COLLECTION.map((wine) => (
                            <motion.button
                              key={wine.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => toggleWishlist(wine.id)}
                              className={`p-4 rounded-xl text-left ${
                                wishlist.includes(wine.id)
                                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                                  : 'bg-charcoal/50 border border-metallic-gold/20'
                              }`}
                            >
                              <Wine className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{wine.name}</div>
                              <div className="text-xs opacity-70">{wine.region}</div>
                              <div className="text-sm font-bold mt-2">{wine.price}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Entertainment */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-4">
                          Entertainment Options
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {ENTERTAINMENT_OPTIONS.map((option) => (
                            <motion.button
                              key={option.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleAddonToggle(option.id)}
                              className={`p-4 rounded-xl text-left ${
                                selectedAddons.includes(option.id)
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                  : 'bg-charcoal/50 border border-metallic-gold/20'
                              }`}
                            >
                              <Music className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{option.name}</div>
                              <div className="text-xs opacity-70">{option.duration}</div>
                              <div className="text-sm font-bold mt-2">{option.price}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Transportation */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-4">
                          Luxury Transportation
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {TRANSPORTATION_OPTIONS.map((option) => (
                            <motion.button
                              key={option.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleAddonToggle(option.id)}
                              className={`p-4 rounded-xl text-left ${
                                selectedAddons.includes(option.id)
                                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                                  : 'bg-charcoal/50 border border-metallic-gold/20'
                              }`}
                            >
                              <Car className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{option.name}</div>
                              <div className="text-xs opacity-70">{option.capacity} guests</div>
                              <div className="text-sm font-bold mt-2">{option.price}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-metallic-gold mb-6">CONFIRM YOUR CORONATION</h3>

                      {/* Summary */}
                      <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-8">
                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Crown className="h-5 w-5 text-metallic-gold" />
                          RESERVATION SUMMARY
                        </h4>

                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-metallic-gold">Name:</span>
                            <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-metallic-gold">Date:</span>
                            <span className="font-semibold">
                              {formData.date.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-metallic-gold">Time:</span>
                            <span className="font-semibold">{formData.time}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-metallic-gold">Guests:</span>
                            <span className="font-semibold">{formData.guests} Royal Guests</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-metallic-gold">Occasion:</span>
                            <span className="font-semibold">
                              {ROYAL_OCCASIONS.find(o => o.id === formData.occasion)?.title}
                            </span>
                          </div>

                          {selectedPackage && (
                            <div className="flex justify-between pt-4 border-t border-metallic-gold/30">
                              <span className="text-metallic-gold">Premium Package:</span>
                              <span className="font-semibold">
                                {ROYAL_OCCASIONS.find(o => o.id === selectedPackage)?.title}
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between pt-4 border-t border-metallic-gold/30 text-xl">
                            <span className="text-metallic-gold">Total:</span>
                            <span className="font-bold">
                              {formatPrice(`₹${calculateTotalPrice}`, selectedCurrency)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="block text-sm font-medium text-metallic-gold mb-2">
                          Special Requests
                        </label>
                        <textarea
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          rows="4"
                          className="w-full px-6 py-4 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
                          placeholder="Any special requests? Allergies, dietary restrictions, celebrations..."
                        />
                      </div>

                      {/* Terms */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={formData.termsAccepted}
                            onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                            className="w-5 h-5 rounded border-metallic-gold/30 text-metallic-gold focus:ring-metallic-gold bg-charcoal"
                          />
                          <label htmlFor="terms" className="text-soft-cream">
                            I accept the <span className="text-metallic-gold">Terms of Service</span>
                          </label>
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="privacy"
                            checked={formData.privacyAccepted}
                            onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                            className="w-5 h-5 rounded border-metallic-gold/30 text-metallic-gold focus:ring-metallic-gold bg-charcoal"
                          />
                          <label htmlFor="privacy" className="text-soft-cream">
                            I accept the <span className="text-metallic-gold">Privacy Policy</span>
                          </label>
                        </div>
                      </div>

                      {errors.terms && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.terms}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-metallic-gold/20">
                    {currentStep > 1 ? (
                      <motion.button
                        whileHover={{ x: -5 }}
                        onClick={handleBack}
                        className="px-8 py-3 text-soft-cream/60 hover:text-metallic-gold transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        Previous
                      </motion.button>
                    ) : (
                      <div></div>
                    )}

                    {currentStep < 4 ? (
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2 group"
                      >
                        Continue
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-charcoal" />
                            PROCESSING...
                          </>
                        ) : (
                          <>
                            CONFIRM RESERVATION
                            <Crown className="h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Loyalty Card */}
                <ThreeDCard>
                  <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-6 text-white shadow-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <Crown className="h-8 w-8 text-metallic-gold" />
                      <span className="text-metallic-gold font-bold">{membershipTier} MEMBER</span>
                    </div>

                    <div className="text-3xl font-bold mb-2">{loyaltyPoints}</div>
                    <div className="text-sm opacity-70 mb-4">Royal Points Available</div>

                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-metallic-gold to-yellow-600"
                        initial={{ width: '0%' }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>

                    <div className="mt-4 text-sm">
                      Next Tier: <span className="text-metallic-gold">Diamond (5,000 points)</span>
                    </div>
                  </div>
                </ThreeDCard>

                {/* Today's Special */}
                <ThreeDCard>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                      alt="Royal Special"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent p-6 flex flex-col justify-end">
                      <h4 className="text-white font-bold text-xl">MAHARAJA'S THALI</h4>
                      <p className="text-metallic-gold text-sm">Today's Royal Special</p>
                      <p className="text-white/70 text-xs mt-2">12-course feast • Gold leaf</p>
                    </div>
                  </div>
                </ThreeDCard>

                {/* Quick Info */}
                <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                  <h3 className="text-lg font-bold text-metallic-gold mb-4">ROYAL INFORMATION</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-metallic-gold" />
                      <span>Mon-Sun: 11:00 AM - 11:30 PM</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-metallic-gold" />
                      <span>123 Royal Street, Mumbai</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-metallic-gold" />
                      <span>+91 98765 43210</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-metallic-gold" />
                      <span>royal@tavisha.com</span>
                    </div>
                  </div>
                </div>

                {/* Wishlist */}
                {wishlist.length > 0 && (
                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                    <h3 className="text-lg font-bold text-metallic-gold mb-4">YOUR WISHLIST</h3>

                    <div className="space-y-2">
                      {wishlist.map(item => (
                        <div key={item} className="text-sm text-soft-cream/70">
                          • {WINE_COLLECTION.find(w => w.id === item)?.name || item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROYAL PACKAGES SECTION ==================== */}
      <section ref={packagesRef} className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                ROYAL EXPERIENCES
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              Choose from our curated collection of premium royal packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROYAL_OCCASIONS.map((pkg, index) => (
              <ThreeDCard key={pkg.id} intensity={10}>
                <motion.div
                  className={`relative bg-gradient-to-br ${pkg.gradient} rounded-2xl p-8 shadow-2xl overflow-hidden group`}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id={`pattern-${pkg.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${pkg.id})`} />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <pkg.icon className="h-12 w-12 mb-4" />

                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-sm opacity-80 mb-4">{pkg.description}</p>

                    <div className="space-y-2 mb-6">
                      {pkg.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{pkg.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 bg-charcoal/20 rounded-lg text-sm font-bold"
                        onClick={() => {
                          setSelectedPackage(pkg.id);
                          formRef.current?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }}
                      >
                        SELECT
                      </motion.button>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ROYAL GALLERY ==================== */}
      <section ref={galleryRef} className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                ROYAL GALLERY
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              A glimpse into the world of royal dining
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-white font-bold">{image.title}</h4>
                    <p className="text-metallic-gold text-sm">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUCCESS MODAL ==================== */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-xl"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="max-w-2xl w-full bg-gradient-to-br from-royal-maroon to-charcoal rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden border-2 border-metallic-gold/30">
              {/* Confetti Effect */}
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-metallic-gold rounded-full"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0
                  }}
                  animate={{
                    x: `${Math.random() * 400 - 200}%`,
                    y: `${Math.random() * 400 - 200}%`,
                    scale: [0, 1, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 0.5,
                    ease: "easeOut",
                    repeat: 0
                  }}
                />
              ))}

              <motion.div
                className="w-32 h-32 mx-auto mb-8 relative"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute inset-0 border-4 border-metallic-gold rounded-full" />
                <Crown className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-metallic-gold" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-metallic-gold mb-4 font-serif">
                RESERVATION CONFIRMED!
              </h2>

              <p className="text-xl text-soft-cream mb-2">
                Thank you, {formData.firstName} {formData.lastName}!
              </p>

              <p className="text-soft-cream/70 mb-8">
                A confirmation has been sent to {formData.email}
              </p>

              <div className="bg-charcoal/50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-metallic-gold mb-4">RESERVATION DETAILS</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-metallic-gold/70">Date</div>
                    <div className="font-semibold">
                      {formData.date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-metallic-gold/70">Time</div>
                    <div className="font-semibold">{formData.time}</div>
                  </div>

                  <div>
                    <div className="text-sm text-metallic-gold/70">Guests</div>
                    <div className="font-semibold">{formData.guests}</div>
                  </div>

                  <div>
                    <div className="text-sm text-metallic-gold/70">Booking ID</div>
                    <div className="font-semibold text-metallic-gold">TAV{Math.floor(Math.random() * 10000)}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-8 py-3 rounded-xl font-bold"
                >
                  RETURN HOME
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="bg-charcoal/50 text-metallic-gold px-8 py-3 rounded-xl font-bold border border-metallic-gold/30"
                >
                  PRINT DETAILS
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom DatePicker Styles */}
      <style>
        {`
          .react-datepicker {
            background-color: #2E2E2E !important;
            border-color: #D4AF37 !important;
            font-family: inherit !important;
          }
          .react-datepicker__header {
            background-color: #7A1E1E !important;
          }
          .react-datepicker__current-month,
          .react-datepicker__day-name {
            color: #D4AF37 !important;
          }
          .react-datepicker__day {
            color: #FAF3E0 !important;
          }
          .react-datepicker__day:hover {
            background-color: #D4AF37 !important;
            color: #2E2E2E !important;
          }
          .react-datepicker__day--selected,
          .react-datepicker__day--keyboard-selected {
            background-color: #D4AF37 !important;
            color: #2E2E2E !important;
          }
          .react-datepicker__day--disabled {
            color: #666 !important;
          }
          .react-datepicker__triangle {
            border-bottom-color: #7A1E1E !important;
          }
        `}
      </style>
    </div>
  );
};

export default RoyalReservations;