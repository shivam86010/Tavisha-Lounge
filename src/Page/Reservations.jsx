import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Check,
  ChevronRight,
  Sparkles,
  Crown,
  Heart,
  Star,
  Wine,
  Utensils,
  Music
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Regular Dining',
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { 
      icon: <Crown className="w-5 h-5" />, 
      title: 'VIP Seating', 
      desc: 'Premium window tables',
      content: 'Experience luxury with our exclusive window seating offering breathtaking views of Mumbai skyline. Perfect for romantic dinners and special celebrations.'
    },
    { 
      icon: <Wine className="w-5 h-5" />, 
      title: 'Fine Wines', 
      desc: 'Curated wine selection',
      content: 'Our sommelier has curated an exceptional collection of 500+ fine wines from around the world. Enjoy perfect pairings with our gourmet cuisine.'
    },
    { 
      icon: <Music className="w-5 h-5" />, 
      title: 'Live Music', 
      desc: 'Evening performances',
      content: 'Be enchanted by live classical music performances every evening. Our talented musicians create the perfect ambiance for your dining experience.'
    },
    { 
      icon: <Utensils className="w-5 h-5" />, 
      title: 'Gourmet Cuisine', 
      desc: 'Master chef creations',
      content: 'Our award-winning master chefs create culinary masterpieces using the finest ingredients. Experience authentic flavors with modern presentations.'
    }
  ];

  const heroContents = [
    {
      title: 'VIP Dining Experience',
      subtitle: 'Reserve Your Royal Experience',
      description: 'Experience luxury with our exclusive VIP seating and personalized service. Perfect for special celebrations and romantic evenings.'
    },
    {
      title: 'Wine & Dine',
      subtitle: 'Curated Wine Experience',
      description: 'Discover our exceptional collection of fine wines perfectly paired with gourmet cuisine. A connoisseur\'s delight awaits.'
    },
    {
      title: 'Musical Evenings',
      subtitle: 'Live Entertainment',
      description: 'Be enchanted by live classical music performances while enjoying your meal. The perfect ambiance for memorable evenings.'
    },
    {
      title: 'Culinary Excellence',
      subtitle: 'Master Chef Creations',
      description: 'Savor culinary masterpieces crafted by our award-winning chefs using the finest ingredients and innovative techniques.'
    }
  ];

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: formattedDate }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      setErrors({ submit: 'Reservation failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const occasions = [
    'Regular Dining',
    'Romantic Dinner',
    'Birthday Celebration',
    'Anniversary',
    'Business Meeting',
    'Family Gathering',
    'Special Occasion'
  ];

  const timeSlots = [
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-soft-cream to-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative inline-block mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-burnt-orange rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-8 border-soft-cream">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-metallic-gold to-burnt-orange flex items-center justify-center">
                  <Check className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-metallic-gold/10 to-burnt-orange/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-metallic-gold mr-2" />
                <span className="text-sm font-medium text-charcoal">Reservation Confirmed</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                Your Royal Table Awaits
              </h1>
              
              <p className="text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto">
                Thank you for choosing Tavisha Lounge. We're excited to welcome you for an extraordinary dining experience.
              </p>
            </motion.div>

            {/* Reservation Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-lg p-8 mb-12 max-w-2xl mx-auto border border-soft-cream"
            >
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">Reservation Details</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center text-sm text-charcoal/60 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      Guest Name
                    </div>
                    <div className="text-lg font-semibold text-charcoal">{formData.fullName}</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm text-charcoal/60 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date & Time
                    </div>
                    <div className="text-lg font-semibold text-charcoal">
                      {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {formData.time}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center text-sm text-charcoal/60 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      Number of Guests
                    </div>
                    <div className="text-lg font-semibold text-charcoal">
                      {formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm text-charcoal/60 mb-2">
                      <Crown className="w-4 h-4 mr-2" />
                      Reservation Code
                    </div>
                    <div className="text-lg font-semibold text-metallic-gold">TL-{Date.now().toString().slice(-6)}</div>
                  </div>
                </div>
              </div>
              
              {formData.specialRequests && (
                <div className="mt-8 pt-8 border-t border-soft-cream">
                  <div className="text-sm text-charcoal/60 mb-2">Special Requests</div>
                  <div className="text-charcoal">{formData.specialRequests}</div>
                </div>
              )}
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-r from-metallic-gold/5 to-burnt-orange/5 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-6">What's Next?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: '📱', title: 'SMS Confirmation', desc: 'Check your phone for details' },
                    { icon: '📧', title: 'Email Receipt', desc: 'Full details in your inbox' },
                    { icon: '👑', title: 'Royal Welcome', desc: 'Prepare for exceptional service' }
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <div className="font-semibold text-charcoal mb-1">{step.title}</div>
                      <div className="text-sm text-charcoal/60">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => navigate('/')}
                className="group px-8 py-4 bg-gradient-to-r from-metallic-gold to-burnt-orange text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">Return to Home</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  const currentHero = heroContents[activeFeature];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-cream to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-charcoal via-royal-maroon to-black">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        
        {/* Left Side Navigation */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="bg-white/5 backdrop-blur-sm rounded-r-2xl p-6 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group flex items-center space-x-3 cursor-pointer"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-metallic-gold to-burnt-orange text-white scale-110' 
                    : 'bg-gradient-to-r from-metallic-gold/20 to-burnt-orange/20 text-metallic-gold group-hover:scale-110'
                }`}>
                  {feature.icon}
                </div>
                <div className="text-white">
                  <div className={`font-medium ${activeFeature === index ? 'text-metallic-gold' : ''}`}>
                    {feature.title}
                  </div>
                  <div className="text-xs text-white/60">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="bg-white/5 backdrop-blur-sm rounded-l-2xl p-6">
            <div className="text-white max-w-xs">
              <motion.h3 
                key={`feature-title-${activeFeature}`}
                className="text-xl font-serif font-bold text-metallic-gold mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {features[activeFeature].title}
              </motion.h3>
              <motion.p 
                key={`feature-content-${activeFeature}`}
                className="text-sm text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {features[activeFeature].content}
              </motion.p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-metallic-gold/20 to-burnt-orange/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <Crown className="w-4 h-4 text-metallic-gold mr-2" />
              <span className="text-sm font-medium text-white">{currentHero.title}</span>
            </motion.div>
            
            <motion.h1 
              key={`hero-title-${activeFeature}`}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentHero.subtitle}
            </motion.h1>
            
            <motion.p 
              key={`hero-desc-${activeFeature}`}
              className="text-xl text-white/80 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {currentHero.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">Make a Reservation</h2>
                <p className="text-charcoal/60">Fill in your details below to secure your table</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-charcoal flex items-center">
                    <Users className="w-5 h-5 mr-3 text-metallic-gold" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.fullName ? 'border-red-500' : 'border-charcoal/20'
                        } rounded-xl text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all`}
                        placeholder="John Smith"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.email ? 'border-red-500' : 'border-charcoal/20'
                        } rounded-xl text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.phone ? 'border-red-500' : 'border-charcoal/20'
                        } rounded-xl text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Occasion</label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-charcoal/20 rounded-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all"
                      >
                        {occasions.map((occasion) => (
                          <option key={occasion} value={occasion}>{occasion}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dining Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-charcoal flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-metallic-gold" />
                    Dining Details
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.date ? 'border-red-500' : 'border-charcoal/20'
                        } rounded-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all`}
                      />
                      {errors.date && (
                        <p className="text-sm text-red-500 mt-1">{errors.date}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.time ? 'border-red-500' : 'border-charcoal/20'
                        } rounded-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all`}
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-sm text-red-500 mt-1">{errors.time}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-charcoal">Number of Guests *</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-charcoal/20 rounded-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-charcoal">Special Requests (Optional)</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-charcoal/20 rounded-xl text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-metallic-gold/30 focus:border-metallic-gold transition-all"
                    placeholder="Any dietary restrictions, allergies, seating preferences, or celebration notes..."
                  />
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-center">{errors.submit}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-metallic-gold to-burnt-orange text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg">Processing Reservation...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">Confirm Reservation</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-charcoal to-royal-maroon rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-white/70 text-sm">123 Royal Street, Mumbai 400001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-white/70 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/70 text-sm">reservations@tavishalounge.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Opening Hours</h3>
              
              <div className="space-y-4">
                {[
                  { day: 'Monday - Thursday', hours: '11:00 AM - 11:00 PM' },
                  { day: 'Friday - Saturday', hours: '11:00 AM - 12:00 AM' },
                  { day: 'Sunday', hours: '11:00 AM - 10:00 PM' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-charcoal/10">
                    <span className="text-charcoal font-medium">{schedule.day}</span>
                    <span className="font-semibold text-metallic-gold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-metallic-gold/10 to-burnt-orange/10 rounded-3xl p-8 border border-metallic-gold/20">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Why Tavisha Lounge</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-metallic-gold">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">{feature.title}</h4>
                      <p className="text-sm text-charcoal/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-3xl p-8 text-white shadow-xl">
              <div className="text-center">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="text-white/80 text-sm mb-6">Call our concierge for last-minute bookings or special requests</p>
                <button className="w-full py-3 bg-white text-royal-maroon font-semibold rounded-xl hover:bg-white/90 transition-colors">
                  Call Now: +91 98765 43210
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center text-charcoal/60 text-sm">
          <p>© {new Date().getFullYear()} Tavisha Lounge. All reservations are subject to availability.</p>
          <p className="mt-1">We recommend booking at least 48 hours in advance for weekends and special occasions.</p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;