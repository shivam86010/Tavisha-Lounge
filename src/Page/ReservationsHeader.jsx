// src/components/RoyalReservations.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Icons
import {
  Crown, Diamond, Gem, Star,PartyPopper ,Gift ,Award ,Globe ,
  Clock, Phone, Mail, MapPin,Palette ,Eye ,Camera ,Calendar ,
  CheckCircle, ChevronRight, ChevronLeft, AlertCircle,Users ,
  Music, Flower2, Shield, Wine ,Utensils ,ChefHat ,
  Mountain, Compass as CompassIcon,Sparkles ,
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
  },
  {
    id: 'quartet',
    name: 'String Quartet',
    duration: '3 hours',
  },
  {
    id: 'pianist',
    name: 'Concert Pianist',
    duration: '4 hours',
  },
  {
    id: 'singer',
    name: 'Opera Singer',
    duration: '2 hours',
  }
];

const TIME_SLOTS = [
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

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
const ThreeDCard = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
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
    <div className={`${bgColor} backdrop-blur-md rounded-xl p-4 shadow-2xl border-l-4 border-metallic-gold text-white`}>
      <p className="text-sm">{message}</p>
    </div>
  );
};

// NotificationCenter Component
const NotificationCenter = ({ notifications, onClose }) => {
  return (
    <>
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
    </>
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
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl relative ${
                currentStep > i + 1
                  ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                  : currentStep === i + 1
                  ? 'bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-metallic-gold'
                  : 'bg-charcoal/50 text-soft-cream/30 border-2 border-metallic-gold/20'
              }`}
            >
              {currentStep > i + 1 ? (
                <CheckCircle className="h-8 w-8" />
              ) : (
                i + 1
              )}
            </div>
            <span className={`mt-3 text-xs font-medium tracking-wider ${
              currentStep >= i + 1 ? 'text-metallic-gold' : 'text-soft-cream/30'
            }`}>
              {label}
            </span>
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`w-24 h-0.5 mx-4 ${
                currentStep > i + 1 ? 'bg-metallic-gold' : 'bg-metallic-gold/20'
              }`}
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


  const formRef = useRef(null);
  const packagesRef = useRef(null);


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

  
  

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
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

  

  return (
    <div className="min-h-screen bg-charcoal text-soft-cream overflow-x-hidden relative">
    
      <NotificationCenter 
        notifications={notifications} 
        onClose={removeNotification}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Royal Palace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal" />
          
          {/* Static Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1), transparent 50%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            {/* Royal Seal */}
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0">
                <div className="w-full h-full border-2 border-metallic-gold rounded-full" />
              </div>
              
              <div className="absolute inset-4">
                <div className="w-full h-full border-2 border-metallic-gold/50 rounded-full border-dashed" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Crown className="w-20 h-20 text-metallic-gold" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-7xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                TAVISHA
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-metallic-gold mb-2 tracking-[0.3em]">
              THE PALACE OF ROYAL DINING
            </h2>

            {/* Description */}
            <p className="text-lg text-soft-cream/80 max-w-3xl mx-auto mb-8">
              Where every meal is a coronation and every guest is treated like royalty
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ThreeDCard>
                <button
                  className="group relative px-8 py-3 bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-transform"
                  onClick={() => formRef.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })}
                >
                  <span className="relative z-10">BEGIN YOUR CORONATION</span>
                </button>
              </ThreeDCard>

              <ThreeDCard>
                <button
                  className="px-8 py-3 bg-transparent border-2 border-metallic-gold text-metallic-gold rounded-xl font-bold text-lg hover:bg-metallic-gold/10 hover:scale-105 transition-all"
                  onClick={() => packagesRef.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })}
                >
                  EXPLORE PACKAGES
                </button>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </section>
      

{/* ==================== ROYAL HERITAGE SHOWCASE ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 5 L55 30 L30 55 L5 30 L30 5" stroke="%23D4AF37" fill="none" stroke-width="0.5"/%3E%3C/svg%3E")',
      backgroundSize: '60px 60px'
    }} />
  </div>

  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-10">
      <div className="inline-block p-4 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-full mb-2">
        <Crown className="w-8 h-8 text-metallic-gold" />
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-2 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          THE ROYAL HERITAGE
        </span>
      </h2>
      <p className="text-xl text-soft-cream/60 max-w-3xl mx-auto">
        Three decades of culinary excellence, passed down through generations
      </p>
    </div>

    {/* Timeline Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          year: '1995',
          title: 'THE FOUNDING',
          desc: 'Tavisha established in the heart of Old Delhi',
          icon: '👑',
          gradient: 'from-amber-500 to-amber-600'
        },
        {
          year: '2005',
          title: 'FIRST MICHELIN STAR',
          desc: 'India\'s first Michelin-starred restaurant',
          icon: '⭐',
          gradient: 'from-yellow-500 to-amber-500'
        },
        {
          year: '2015',
          title: 'ROYAL EXPANSION',
          desc: 'The Grand Tavisha opens in Mumbai',
          icon: '🏛️',
          gradient: 'from-rose-500 to-pink-600'
        },
        {
          year: '2024',
          title: 'GLOBAL ACCLAIM',
          desc: '47 international awards and counting',
          icon: '🏆',
          gradient: 'from-purple-500 to-indigo-600'
        }
      ].map((item, index) => (
        <div key={index} className="group relative">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
          
          {/* Card */}
          <div className="relative bg-charcoal/80 backdrop-blur-sm border border-metallic-gold/20 rounded-3xl p-8 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
            {/* Year Badge */}
            <div className={`absolute -top-4 left-8 bg-gradient-to-r ${item.gradient} px-6 py-1 rounded-full`}>
              <span className="text-sm font-bold text-charcoal">{item.year}</span>
            </div>
            
            {/* Icon */}
            <div className="text-5xl mb-4 mt-2">{item.icon}</div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            
            {/* Description */}
            <p className="text-soft-cream/70">{item.desc}</p>
            
            {/* Decorative Line */}
            <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} mt-6 group-hover:w-20 transition-all duration-500`} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ==================== ROYAL TESTIMONIALS CAROUSEL ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Royal Dining"
      className="w-full h-full object-cover opacity-10"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal" />
  </div>

  <div className="relative container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-10">
      <div className="inline-block p-4 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-full mb-2">
        <Star className="w-8 h-8 text-metallic-gold" />
      </div>
      <h2 className="text-3xl md:text-6xl font-bold mb-2 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          VOICES OF ROYALTY
        </span>
      </h2>
      <p className="text-xl text-soft-cream/60 max-w-3xl mx-auto">
        What our distinguished guests say about their royal experience
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: 'Maharaja Yadvendra Singh',
          role: 'Royal Patron',
          quote: 'Tavisha reminds me of my ancestral palace kitchens. The authenticity of flavors is truly remarkable.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Mrs. Anita Singhania',
          role: 'Business Tycoon',
          quote: 'The hospitality is unparalleled. Every visit feels like a celebration, and the staff remembers your preferences.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1494790108777-383fd5c8a4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Mr. Vikram Rathore',
          role: 'Industrialist',
          quote: 'I\'ve dined at the world\'s best restaurants, but Tavisha has a soul. It\'s not just food; it\'s an emotion.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        }
      ].map((testimonial, index) => (
        <div key={index} className="group relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
          
          {/* Card */}
          <div className="relative bg-charcoal/80 backdrop-blur-sm border border-metallic-gold/20 rounded-3xl p-6 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
            {/* Quote Mark */}
            <div className="absolute top-6 right-6 text-6xl text-metallic-gold/20 font-serif">"</div>
            
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-metallic-gold"
              />
              <div>
                <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                <p className="text-metallic-gold text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            {/* Quote */}
            <p className="text-soft-cream/80 italic mb-4">"{testimonial.quote}"</p>
            
            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-metallic-gold text-metallic-gold" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ==================== ROYAL PRIVATE DINING ==================== */}
<section className="py-10 relative">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Private Dining"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
  </div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-2xl ml-auto">
      {/* Section Header */}
      <div >
        <div className="inline-block p-4 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-full ">
          <Diamond className="w-8 h-8 text-metallic-gold" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-1 font-serif">
          <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
            PRIVATE PAVILIONS
          </span>
        </h2>
        <p className="text-xl text-soft-cream/70 mb-4">
          Intimate dining experiences in our exclusive private chambers
        </p>
      </div>

      {/* Pavilion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: 'THE MAHARAJA SUITE',
            capacity: '8 guests',
            price: '₹50,000',
            features: ['Personal butler', 'Antique thrones', 'Heirloom silverware'],
            gradient: 'from-amber-500 to-amber-600'
          },
          {
            name: 'THE GARDEN PAVILION',
            capacity: '12 guests',
            price: '₹35,000',
            features: ['Al fresco dining', 'Fairy lights', 'Fountain views'],
            gradient: 'from-emerald-500 to-green-600'
          },
          {
            name: 'THE WINE VAULT',
            capacity: '6 guests',
            price: '₹75,000',
            features: ['Wine cellar dining', 'Master sommelier', 'Rare vintages'],
            gradient: 'from-rose-500 to-pink-600'
          },
          {
            name: 'THE CELESTIAL DECK',
            capacity: '10 guests',
            price: '₹60,000',
            features: ['Stargazing', 'Personal astronomer', 'Infinity view'],
            gradient: 'from-purple-500 to-indigo-600'
          }
        ].map((pavilion, index) => (
          <div key={index} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${pavilion.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all`} />
            
            <div className="relative bg-charcoal/60 backdrop-blur-md rounded-2xl p-6 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all hover:-translate-y-2">
              <h3 className="text-xl font-bold text-white mb-2">{pavilion.name}</h3>
              <p className="text-metallic-gold mb-3">{pavilion.capacity}</p>
              
              <ul className="space-y-2 mb-2">
                {pavilion.features.map((feature, i) => (
                  <li key={i} className="text-sm text-soft-cream/70 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-metallic-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-metallic-gold">{pavilion.price}</span>
                <button className="px-4 py-1 bg-metallic-gold/20 rounded-lg text-sm font-bold text-metallic-gold hover:bg-metallic-gold hover:text-charcoal transition-all">
                  INQUIRE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



{/* ==================== ROYAL CULINARY EXPERIENCES ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Luxurious Background */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
      alt="Luxury Dining"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-royal-maroon/30" />
    
    {/* Ornate Pattern Overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 15 L85 50 L50 85 L15 50 L50 15" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
      backgroundSize: '100px 100px'
    }} />
  </div>

  <div className="relative container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center ">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="relative w-24 h-24 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-3xl flex items-center justify-center mb-4 transform rotate-12 mx-auto">
          <Utensils className="w-12 h-12 text-charcoal transform -rotate-12" />
        </div>
      </div>
      <h2 className="text-3xl md:text-6xl font-bold mb-2 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          ROYAL CULINARY EXPERIENCES
        </span>
      </h2>
      <p className="text-xl text-soft-cream/60 max-w-3xl mx-auto">
        A gastronomic journey through India's royal kitchens, curated by our master chefs
      </p>
      
      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-metallic-gold to-transparent" />
        <Crown className="w-5 h-5 text-metallic-gold" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-metallic-gold to-transparent" />
      </div>
    </div>

    {/* Signature Dishes Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      {[
        {
          title: "MAHARAJA'S THALI",
          description: "A 24-course royal feast featuring dishes from across India",
          price: "₹12,000",
          chef: "Chef Rajesh Mehta",
          image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          highlights: ["Gold leaf garnish", "Heirloom recipes", "12 regional specialties"],
          gradient: "from-amber-500 to-amber-600"
        },
        {
          title: "ROYAL ROGAN JOSH",
          description: "Slow-cooked Kashmiri lamb curry with aromatic spices",
          price: "₹4,500",
          chef: "Chef Rajesh Mehta",
          image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          highlights: ["24-hour marination", "Kashmiri saffron", "Traditional method"],
          gradient: "from-rose-500 to-pink-600"
        },
        {
          title: "IMPERIAL BIRYANI",
          description: "Fragrant rice layered with premium meats and saffron",
          price: "₹3,800",
          chef: "Chef Abdul Qadir",
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          highlights: ["Dum pukht style", "Hyderabadi spices", "Silver varq"],
          gradient: "from-emerald-500 to-green-600"
        }
      ].map((dish, index) => (
        <div key={index} className="group relative h-[520px]">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${dish.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
          
          {/* Main Card */}
          <div className="relative h-full bg-gradient-to-b from-charcoal/90 to-charcoal rounded-3xl overflow-hidden border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
            
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
              
              {/* Price Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-metallic-gold to-amber-600 px-6 py-1 rounded-full shadow-2xl">
                <span className="text-lg font-bold text-charcoal">{dish.price}</span>
              </div>
              
              {/* Chef Badge */}
              <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-md px-4 py-1 rounded-full border border-metallic-gold/30">
                <ChefHat className="w-4 h-4 text-metallic-gold inline mr-2" />
                <span className="text-metallic-gold text-sm">{dish.chef}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{dish.title}</h3>
              <p className="text-soft-cream/70 mb-2 leading-relaxed">{dish.description}</p>
              
              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {dish.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Gem className="w-4 h-4 text-metallic-gold" />
                    <span className="text-soft-cream/80">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Order Button */}
              <button className="w-full py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                EXPERIENCE THIS DISH
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Chef's Table Experience */}
    <div className="relative bg-gradient-to-br from-royal-maroon/80 to-charcoal rounded-3xl p-12 border-2 border-metallic-gold/30  overflow-hidden">
      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-metallic-gold/40 rounded-tl-3xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-metallic-gold/40 rounded-tr-3xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-metallic-gold/40 rounded-bl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-metallic-gold/40 rounded-br-3xl" />
      
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center">
              <Crown className="w-10 h-10 text-charcoal" />
            </div>
            <div>
              <p className="text-metallic-gold text-sm tracking-wider">EXCLUSIVE EXPERIENCE</p>
              <h3 className="text-3xl font-bold text-white">THE CHEF'S TABLE</h3>
            </div>
          </div>
          
          <p className="text-soft-cream/80 text-lg mb-6 leading-relaxed">
            Join our master chefs for an intimate 12-course journey through India's royal kitchens. 
            Witness culinary artistry firsthand as dishes are prepared right before your eyes.
          </p>
          
          <div className="flex gap-4">
            <button className="group px-8 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
              <span>BOOK THE TABLE</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-3 bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold rounded-xl font-bold hover:bg-metallic-gold hover:text-charcoal transition-all">
              VIEW MENU
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-3xl opacity-30 blur-2xl" />
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Chef's Table"
            className="relative rounded-2xl shadow-2xl"
          />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 bg-metallic-gold text-charcoal px-6 py-1 rounded-full font-bold shadow-2xl animate-pulse">
            Limited to 8 guests
          </div>
        </div>
      </div>
    </div>

   
   
  </div>
</section>


{/* ==================== ROYAL GALLERY & MASTERPIECES ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Background with Ornate Pattern */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon/30 via-charcoal to-charcoal" />
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M40 10 L70 40 L40 70 L10 40 L40 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
      backgroundSize: '80px 80px'
    }} />
  </div>

  <div className="relative container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-10">
      <div className="inline-block relative">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse" />
        <div className="relative w-20 h-20 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center mb-4 transform rotate-45 mx-auto">
          <Gem className="w-10 h-10 text-charcoal transform -rotate-45" />
        </div>
      </div>
      <h2 className="text-3xl md:text-6xl font-bold mb-1 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          ROYAL GALLERY
        </span>
      </h2>
      <p className="text-xl text-soft-cream/60 max-w-3xl mx-auto">
        A visual journey through the artistry and elegance of Tavisha
      </p>
    </div>

    {/* Featured Gallery Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      {/* Featured Large Image */}
      <div className="relative group h-[500px] rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Grand Dining Hall"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        
        {/* Ornate Frame */}
        <div className="absolute inset-6 border-2 border-metallic-gold/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 p-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-metallic-gold/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Crown className="w-6 h-6 text-metallic-gold" />
            </div>
            <span className="text-metallic-gold tracking-wider text-sm">FEATURED</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">The Grand Dining Hall</h3>
          <p className="text-soft-cream/80 text-lg max-w-md">Where 150 guests dine in palatial splendor under crystal chandeliers</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {GALLERY_IMAGES.slice(0, 4).map((image, index) => (
          <div key={image.id} className="relative group h-[240px] rounded-2xl overflow-hidden">
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-white font-bold text-lg">{image.title}</h4>
              <p className="text-metallic-gold text-sm">{image.caption}</p>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-metallic-gold/60 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>

    {/* Art Collection Showcase */}
    <div className="relative bg-gradient-to-br from-royal-maroon/40 to-charcoal/90 rounded-3xl p-8 border border-metallic-gold/30 mb-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-rose-500/20 to-transparent rounded-full blur-3xl" />
      
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center">
              <Palette className="w-8 h-8 text-charcoal" />
            </div>
            <div>
              <p className="text-metallic-gold text-sm tracking-wider">CURATED COLLECTION</p>
              <h3 className="text-3xl font-bold text-white">The Royal Art</h3>
            </div>
          </div>
          
          <p className="text-soft-cream/80 text-lg mb-8 leading-relaxed">
            Tavisha houses an exquisite collection of 47 original artworks spanning three centuries. 
            From Mughal miniature paintings to contemporary Indian masters, each piece tells a story 
            of India's rich cultural tapestry.
          </p>
          
          <button className="group px-8 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
            <span>VIEW FULL COLLECTION</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-3xl opacity-30 blur-2xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1531913764164-f2af33884fc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl">
                <img src={img} alt={`Art ${i+1}`} className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-charcoal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Masterpiece Carousel */}
    <div className="relative">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">SIGNATURE MASTERPIECES</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Rajasthani Royal Procession",
            artist: "Raja Ravi Varma",
            year: "1895",
            image: "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Mughal Garden of Paradise",
            artist: "Ustad Mansur",
            year: "1720",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Cosmic Dance of Shiva",
            artist: "M.F. Hussain",
            year: "1985",
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ].map((art, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
            
            <div className="relative bg-charcoal/80 backdrop-blur-sm border border-metallic-gold/20 rounded-2xl overflow-hidden hover:border-metallic-gold/40 transition-all hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-full border border-metallic-gold/30">
                  <span className="text-metallic-gold text-sm font-bold">{art.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{art.title}</h4>
                <p className="text-metallic-gold">{art.artist}</p>
                
                <button className="mt-4 w-full py-3 bg-charcoal/50 border border-metallic-gold/30 text-metallic-gold rounded-xl hover:bg-metallic-gold hover:text-charcoal transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Virtual Tour CTA */}
    <div className="mt-10 text-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-2xl blur-2xl opacity-30 animate-pulse" />
        <button className="relative px-12 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 mx-auto">
          <Camera className="w-6 h-6" />
          TAKE A VIRTUAL TOUR
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <p className="text-soft-cream/60 mt-2">Experience the grandeur of Tavisha from anywhere in the world</p>
    </div>
  </div>
</section>



      {/* ==================== RESERVATION FORM SECTION ==================== */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                BEGIN YOUR CORONATION
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              Every detail matters when you're dining like royalty
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-10">
            <ProgressSteps currentStep={currentStep} />
          </div>

          {/* Form Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-charcoal/80 backdrop-blur-xl rounded-3xl p-8 border border-metallic-gold/20 shadow-2xl">
                {/* Step 1: Basic Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-metallic-gold mb-6">ROYAL IDENTITY</h3>
                    
                    {/* Title Selection */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-2">
                        Royal Title
                      </label>
                      <select
                        value={formData.royalTitle}
                        onChange={(e) => handleInputChange('royalTitle', e.target.value)}
                        className="w-full px-6 py-3 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
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
                          className={`w-full px-6 py-3 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
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
                          className={`w-full px-6 py-3 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
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
                          className={`w-full px-6 py-3 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
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
                          className={`w-full px-6 py-3 bg-charcoal/50 border-2 rounded-xl focus:outline-none text-soft-cream ${
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
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-metallic-gold ">DINING PREFERENCES</h3>

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
                        className="w-full px-6 py-3 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
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
                          <button
                            key={time}
                            onClick={() => handleInputChange('time', time)}
                            className={`py-3 px-2 rounded-xl text-sm font-medium transition-all hover:scale-105 ${
                              formData.time === time
                                ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                                : 'bg-charcoal/50 text-soft-cream/70 hover:bg-royal-maroon/30 border border-metallic-gold/20'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-2">
                        Number of Guests
                      </label>
                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => handleInputChange('guests', Math.max(1, formData.guests - 1))}
                          className="w-12 h-12 rounded-full bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold text-2xl hover:scale-110 transition-transform"
                        >
                          −
                        </button>
                        
                        <span className="text-4xl font-bold text-metallic-gold">{formData.guests}</span>
                        
                        <button
                          onClick={() => handleInputChange('guests', Math.min(20, formData.guests + 1))}
                          className="w-12 h-12 rounded-full bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold text-2xl hover:scale-110 transition-transform"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Occasion Selection */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-2">
                        Select Occasion
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {ROYAL_OCCASIONS.map((occasion) => {
                          const Icon = occasion.icon;
                          return (
                            <button
                              key={occasion.id}
                              onClick={() => handleInputChange('occasion', occasion.id)}
                              className={`p-3 rounded-xl text-left transition-all hover:scale-105 ${
                                formData.occasion === occasion.id
                                  ? `bg-gradient-to-r ${occasion.gradient} text-charcoal`
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20 hover:bg-royal-maroon/30'
                              }`}
                            >
                              <Icon className="h-8 w-8 mb-2" />
                              <div className="font-bold">{occasion.title}</div>
                              <div className="text-sm opacity-70">{occasion.description}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dining Preference */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-2">
                        Dining Preference
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {ROYAL_DINING.map((dining) => {
                          const Icon = dining.icon;
                          return (
                            <button
                              key={dining.id}
                              onClick={() => handleInputChange('diningPreference', dining.id)}
                              className={`p-3 rounded-xl text-left transition-all hover:scale-105 ${
                                formData.diningPreference === dining.id
                                  ? `bg-gradient-to-r ${dining.gradient} text-charcoal`
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20 hover:bg-royal-maroon/30'
                              }`}
                            >
                              <Icon className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{dining.title}</div>
                              <div className="text-xs opacity-70">{dining.cuisine}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Seating Preference */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-2">
                        Seating Preference
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {ROYAL_SEATING.map((seat) => {
                          const Icon = seat.icon;
                          return (
                            <button
                              key={seat.id}
                              onClick={() => handleInputChange('seating', seat.id)}
                              className={`p-4 rounded-xl text-left transition-all hover:scale-105 ${
                                formData.seating === seat.id
                                  ? 'bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal'
                                  : 'bg-charcoal/50 text-soft-cream/70 border border-metallic-gold/20 hover:bg-royal-maroon/30'
                              }`}
                            >
                              <Icon className="h-6 w-6 mb-2" />
                              <div className="font-bold text-sm">{seat.name}</div>
                              <div className="text-xs opacity-70">{seat.description}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Royal Upgrades */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-metallic-gold mb-6">ROYAL UPGRADES</h3>



                    {/* Entertainment */}
                    <div>
                      <label className="block text-sm font-medium text-metallic-gold mb-4">
                        Entertainment Options
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {ENTERTAINMENT_OPTIONS.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleAddonToggle(option.id)}
                            className={`p-4 rounded-xl text-left transition-all hover:scale-105 ${
                              selectedAddons.includes(option.id)
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                : 'bg-charcoal/50 border border-metallic-gold/20 hover:bg-royal-maroon/30'
                            }`}
                          >
                            <Music className="h-6 w-6 mb-2" />
                            <div className="font-bold text-sm">{option.name}</div>
                            <div className="text-xs opacity-70">{option.duration}</div>
                          
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-metallic-gold mb-6">CONFIRM YOUR CORONATION</h3>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-8">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Crown className="h-5 w-5 text-metallic-gold" />
                        RESERVATION SUMMARY
                      </h4>

                      <div className="space-y-3">
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
                        rows="3"
                        className="w-full px-6 py-3 bg-charcoal/50 border-2 border-metallic-gold/30 rounded-xl focus:border-metallic-gold focus:outline-none text-soft-cream"
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
                    <button
                      onClick={handleBack}
                      className="px-8 py-3 text-soft-cream/60 hover:text-metallic-gold transition-colors flex items-center gap-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 4 ? (
                    <button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-10 py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                      Continue
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-10 py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 disabled:opacity-50"
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
                    </button>
                  )}
                </div>
              </div>
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
                      <div
                        className="h-full bg-gradient-to-r from-metallic-gold to-yellow-600"
                        style={{ width: '75%' }}
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
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
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

                  <div className="space-y-2">
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
      <section  className="py-10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                ROYAL EXPERIENCES
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              Choose from our curated collection of premium royal packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROYAL_OCCASIONS.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <ThreeDCard key={pkg.id} intensity={10}>
                  <div
                    className={`relative bg-gradient-to-br ${pkg.gradient} rounded-2xl p-6 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
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
                      <Icon className="h-12 w-12 mb-2" />

                      <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                      <p className="text-sm opacity-80 mb-2">{pkg.description}</p>

                      <div className="space-y-2 mb-4">
                        {pkg.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">{pkg.price}</span>
                        <button
                          className="px-4 py-2 bg-charcoal/20 rounded-lg text-sm font-bold hover:scale-110 transition-transform"
                          onClick={() => {
                            setSelectedPackage(pkg.id);
                            formRef.current?.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }}
                        >
                          SELECT
                        </button>
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== ROYAL GALLERY ==================== */}
      <section  className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                ROYAL GALLERY
              </span>
            </h2>
            <p className="text-lg text-soft-cream/60 max-w-3xl mx-auto">
              A glimpse into the world of royal dining
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUCCESS MODAL ==================== */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-xl">
          <div className="max-w-2xl w-full bg-gradient-to-br from-royal-maroon to-charcoal rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden border-2 border-metallic-gold/30">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-metallic-gold rounded-full" />
              <Crown className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-metallic-gold" />
            </div>

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
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-charcoal px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                RETURN HOME
              </button>

              <button
                onClick={() => window.print()}
                className="bg-charcoal/50 text-metallic-gold px-8 py-3 rounded-xl font-bold border border-metallic-gold/30 hover:scale-105 transition-transform"
              >
                PRINT DETAILS
              </button>
            </div>
          </div>
        </div>
      )}

     {/* ==================== ROYAL PRIVATE EVENTS & CELEBRATIONS ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Opulent Background with Gold Particles */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Royal Celebration"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-royal-maroon/90 via-charcoal/95 to-charcoal" />
  
  </div>

  <div className="relative container mx-auto px-4">
    {/* Section Header with Royal Crest */}
    <div className="text-center mb-10">
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="relative w-40 h-40">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_20s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
          
          {/* Middle Ring */}
          <div className="absolute inset-4 border-2 border-metallic-gold/60 rounded-full" />
          
          {/* Inner Ring */}
          <div className="absolute inset-8 border border-metallic-gold/30 rounded-full" />
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl transform rotate-45 flex items-center justify-center">
              <PartyPopper className="w-12 h-12 text-charcoal transform -rotate-45" />
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-6xl font-bold mb-2 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          ROYAL CELEBRATIONS
        </span>
      </h2>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold" />
        <Gem className="w-6 h-6 text-metallic-gold animate-pulse" />
        <div className="w-24 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold" />
      </div>
      
      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
        Where your most cherished moments become legendary tales
      </p>
    </div>

    {/* Main Event Showcase */}
    <div className="grid lg:grid-cols-2 gap-8 mb-10">
      {/* Wedding Package */}
      <div className="group relative h-[550px]">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
        
        <div className="relative h-full rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Royal Wedding"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
          
          {/* Ornate Overlay */}
          <div className="absolute inset-6 border-2 border-metallic-gold/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Diamond className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-metallic-gold text-sm tracking-wider">FROM ₹15,00,000</span>
                <h3 className="text-3xl font-bold text-white">IMPERIAL WEDDING</h3>
              </div>
            </div>
            
            <p className="text-soft-cream/80 text-lg max-w-md mb-6">
              Your fairytale wedding in our palatial settings, with every detail crafted to perfection
            </p>
          
            <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              PLAN YOUR WEDDING
            </button>
          </div>
        </div>
      </div>

      {/* Corporate & Private Events */}
      <div className="grid grid-rows-2 gap-8">
        {/* Corporate Gala */}
        <div className="group relative h-[254px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
          
          <div className="relative h-full rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Corporate Gala"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="w-8 h-8 text-metallic-gold" />
                  <h3 className="text-3xl font-bold text-white">CORPORATE GALA</h3>
                </div>
                <p className="text-soft-cream/80 mb-4">From ₹5,00,000 | Up to 300 guests</p>
                <button className="px-6 py-3 bg-metallic-gold/20 border border-metallic-gold/30 text-metallic-gold rounded-xl hover:bg-metallic-gold hover:text-charcoal transition-all">
                  INQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Birthday Celebration */}
        <div className="group relative h-[254px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
          
          <div className="relative h-full rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Birthday Celebration"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-charcoal via-charcoal/90 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex items-center justify-end text-right">
              <div className="flex-1">
                <div className="flex items-center justify-end gap-3 mb-3">
                  <h3 className="text-3xl font-bold text-white">MILESTONE BIRTHDAY</h3>
                  <Gift className="w-8 h-8 text-metallic-gold" />
                </div>
                <p className="text-soft-cream/80 mb-4">From ₹1,50,000 | Custom packages available</p>
                <button className="px-6 py-3 bg-metallic-gold/20 border border-metallic-gold/30 text-metallic-gold rounded-xl hover:bg-metallic-gold hover:text-charcoal transition-all">
                  CELEBRATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    {/* Event Planning Timeline */}
    <div className="relative bg-gradient-to-br p-4 from-royal-maroon/80 to-charcoal/90 rounded-3xl  border border-metallic-gold/30 mb-20">
      <h3 className="text-3xl font-bold text-white text-center mb-4">YOUR ROYAL JOURNEY</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: '01', title: 'CONSULTATION', desc: 'Meet with our event curator', icon: '🤝' },
          { step: '02', title: 'PLANNING', desc: 'Customize every detail', icon: '📋' },
          { step: '03', title: 'PREPARATION', desc: 'Royal setup & rehearsal', icon: '⚜️' },
          { step: '04', title: 'CELEBRATION', desc: 'Your unforgettable moment', icon: '🎉' }
        ].map((item, i) => (
          <div key={i} className="text-center relative">
            {i < 3 && (
              <div className="absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-metallic-gold to-transparent hidden md:block" />
            )}
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 hover:rotate-0 transition-transform">
                <span className="text-3xl text-charcoal transform -rotate-12 hover:rotate-0 transition-transform">
                  {item.icon}
                </span>
              </div>
              <div className="text-xl font-bold text-metallic-gold mb-1">{item.step}</div>
              <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
              <p className="text-soft-cream/60">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Past Events Gallery */}
    <div className="mb-10">
      <h3 className="text-3xl font-bold text-white text-center mb-8">LEGENDARY CELEBRATIONS</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ].map((img, i) => (
          <div key={i} className="group relative h-64 overflow-hidden rounded-2xl">
            <img src={img} alt={`Event ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-metallic-gold font-bold">Royal Wedding</p>
              <p className="text-sm">2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Final CTA */}
    <div className="text-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-2xl blur-3xl opacity-30 animate-pulse" />
        <button className="relative px-20 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-2xl font-bold text-xl hover:scale-105 transition-all flex items-center gap-4 mx-auto">
          <Crown className="w-6 h-6" />
          BEGIN YOUR CELEBRATION
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <p className="text-soft-cream/60 mt-2 text-lg">Let our event curators create magic for your special day</p>
    </div>
  </div>
</section>

{/* ==================== ROYAL MEMBERSHIP & CONCIERGE ==================== */}
<section className="py-10 relative overflow-hidden">
  {/* Opulent Background with Gold Accents */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-royal-maroon/50 to-charcoal" />

  </div>

  <div className="relative container mx-auto px-4">
    {/* Section Header with Diamond */}
    <div className="text-center mb-10">
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-500 rounded-3xl blur-3xl opacity-40 animate-pulse" />
        <div className="relative w-20 h-20 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-3xl transform rotate-45 flex items-center justify-center">
          <Diamond className="w-14 h-14 text-charcoal transform -rotate-45" />
        </div>
      </div>
      
      <h2 className="text-3xl md:text-6xl font-bold mb-2 font-serif">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          THE ROYAL CIRCLE
        </span>
      </h2>
      
      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto mb-4">
        An exclusive membership for those who appreciate the finest things in life
      </p>
      
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
          <Crown className="w-6 h-6 text-metallic-gold" />
        </div>
        <span className="text-metallic-gold text-lg">Join an elite community of connoisseurs</span>
        <div className="w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center">
          <Crown className="w-6 h-6 text-metallic-gold" />
        </div>
      </div>
    </div>

    {/* Membership Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-10">
      {/* Silver Membership */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
        
        <div className="relative bg-charcoal/90 backdrop-blur-sm border-2 border-gray-500/30 rounded-3xl p-8 hover:border-gray-400/40 transition-all duration-500 hover:-translate-y-4">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 group-hover:rotate-0 transition-transform">
              <Award className="w-10 h-10 text-white transform -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">SILVER</h3>
            <div className="text-3xl font-bold text-gray-400 mb-1">₹50,000</div>
            <p className="text-soft-cream/60">/year</p>
          </div>
          
          <ul className="space-y-2 mb-8">
            {[
              'Priority reservations',
              '2 complimentary tasting menus',
              '10% on all dining',
              'Welcome cocktail'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-soft-cream/80">
                <CheckCircle className="w-5 h-5 text-gray-400" />
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 border-2 border-gray-400/30 text-gray-400 rounded-xl font-bold hover:bg-gray-400 hover:text-charcoal transition-all">
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Gold Membership */}
      <div className="group relative scale-105 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all" />
        
        <div className="relative bg-gradient-to-br from-charcoal to-royal-maroon border-4 border-metallic-gold rounded-3xl p-8 hover:-translate-y-4 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-metallic-gold to-amber-600 px-8 py-1 rounded-full whitespace-nowrap">
            <span className="text-sm font-bold text-charcoal">MOST POPULAR</span>
          </div>
          
          <div className="text-center mb-4 mt-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 group-hover:rotate-0 transition-transform">
              <Crown className="w-10 h-10 text-charcoal transform -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">GOLD</h3>
            <div className="text-3xl font-bold text-metallic-gold mb-1">₹1,50,000</div>
            <p className="text-soft-cream/60">/year</p>
          </div>
          
          <ul className="space-y-2 mb-8">
            {[
              'All Silver benefits',
              '4 premium wine tastings',
              'Private dining access',
              '20% on all dining',
              'Birthday celebration',
              'Personal concierge'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-soft-cream/80">
                <Crown className="w-5 h-5 text-metallic-gold" />
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
            JOIN NOW
          </button>
        </div>
      </div>

      {/* Platinum Membership */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
        
        <div className="relative bg-charcoal/90 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:-translate-y-4">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 group-hover:rotate-0 transition-transform">
              <Gem className="w-10 h-10 text-white transform -rotate-12 group-hover:rotate-0 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">PLATINUM</h3>
            <div className="text-3xl font-bold text-purple-400 mb-1">₹3,00,000</div>
            <p className="text-soft-cream/60">/year</p>
          </div>
          
          <ul className="space-y-2 mb-8">
            {[
              'All Gold benefits',
              'Unlimited private dining',
              '24/7 personal concierge',
              'Exclusive chef\'s table',
              'Complimentary chauffeur',
              'Global privileges'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-soft-cream/80">
                <Gem className="w-5 h-5 text-purple-400" />
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-3 border-2 border-purple-500/30 text-purple-400 rounded-xl font-bold hover:bg-purple-500 hover:text-white transition-all">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>

  
    {/* Final Royal Promise */}
    <div className="text-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-rose-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="relative w-40 h-40 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_15s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
          <div className="absolute inset-4 border-2 border-metallic-gold/30 rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
            <Crown className="w-10 h-10 text-charcoal" />
          </div>
        </div>
      </div>
      
      <h3 className="text-3xl font-bold text-white mb-2 font-serif">
        THE ROYAL PROMISE
      </h3>
      <p className="text-xl text-soft-cream/70 max-w-2xl mx-auto">
        Every guest is royalty, every moment is magic, every memory is forever
      </p>
      
      
      
    </div>
  </div>
</section>



    


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