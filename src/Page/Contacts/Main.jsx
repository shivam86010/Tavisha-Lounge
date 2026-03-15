import React, { useState, useEffect } from 'react';
import { 
  Crown, MapPin, Phone, Mail, Clock, Send, 
  ChevronRight, Gem, Sparkles, Users,  Instagram, Facebook, 
  Twitter, Linkedin,  Navigation, Diamond, Trophy, 
  Star, Wine,  Utensils, Camera, Calendar,
  Award,  Heart, Globe, Sun, 
  ChefHat, Bell, Key, Car, Wifi, Wind,Briefcase ,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const quickContacts = [
    { icon: MapPin, text: 'Royal Heritage Road, City Center', subtext: 'Tavisha Grand, Mumbai', gradient: 'from-amber-500 to-amber-600' },
    { icon: Phone, text: '+91 98765 43210', subtext: '24/7 Concierge Service', gradient: 'from-rose-500 to-pink-600' },
    { icon: Mail, text: 'royal@tavisha.com', subtext: 'Quick Response Within 2 Hours', gradient: 'from-emerald-500 to-green-600' },
    { icon: Clock, text: '11:00 AM - 11:30 PM', subtext: 'Open Daily · Last Seating 10:30 PM', gradient: 'from-purple-500 to-indigo-600' }
  ];

  const faqs = [
    {
      question: "What is the dress code?",
      answer: "We maintain a sophisticated elegant dress code. Gentlemen are requested to wear jackets (available on request), and formal or semi-formal attire is appreciated for all guests."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely. Our chefs are delighted to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please inform us at least 24 hours in advance."
    },
    {
      question: "Is there private parking available?",
      answer: "Yes, we offer valet parking for all our guests. Additionally, we have a secure underground parking facility with 24/7 surveillance."
    },
    {
      question: "Can I book for large groups?",
      answer: "We welcome group bookings of up to 24 guests in our private dining rooms. For larger events, please contact our events team for personalized arrangements."
    }
  ];

  const teamMembers = [
    {
      name: "Chef Rajesh Mehta",
      role: "Executive Chef",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: "Royal Indian Cuisine",
      signature: "Tandoori Lobster"
    },
    {
      name: "Priya Sharma",
      role: "Head of Hospitality",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1551836026-d5c8c2d86232?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: "Guest Experience",
      signature: "Wine Pairing Expert"
    },
    {
      name: "Shyam",
      role: "Master Mixologist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1581299894007-9c115449a7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: "Signature Cocktails",
      signature: "Royal Old Fashioned"
    }
  ];

  const awards = [
    { icon: "⭐", title: "Michelin Star", year: "2023", description: "Culinary Excellence", color: "from-red-500 to-rose-600" },
    { icon: "🏆", title: "Best Indian Restaurant", year: "2024", description: "World Culinary Awards", color: "from-blue-500 to-cyan-600" },
    { icon: "🍷", title: "Wine Spectator Award", year: "2023", description: "Best Wine List", color: "from-purple-500 to-violet-600" },
    { icon: "👑", title: "Royal Culinary Excellence", year: "2024", description: "Presidential Award", color: "from-amber-500 to-yellow-600" }
  ];

  const amenities = [
    { icon: Wine, name: "Premium Wine Cellar", description: "500+ International Labels", gradient: "from-purple-500 to-pink-500" },
    { icon: ChefHat, name: "Private Chefs Table", description: "Interactive Dining Experience", gradient: "from-orange-500 to-red-500" },
    { icon: Car, name: "Valet Parking", description: "24/7 Complimentary Service", gradient: "from-blue-500 to-indigo-500" },
    { icon: Key, name: "Private Dining Rooms", description: "For Exclusive Gatherings", gradient: "from-emerald-500 to-teal-500" },
    { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary for Guests", gradient: "from-cyan-500 to-blue-500" },
    { icon: Wind, name: "Climate Controlled", description: "Perfect Ambiance Always", gradient: "from-green-500 to-emerald-500" }
  ];

  const experiences = [
    {
      title: "Royal Tasting Menu",
      description: "An 8-course journey through royal Indian cuisine",
      price: "₹8,500",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "3 hours",
      chef: "Chef Rajesh"
    },
    {
      title: "Wine Masterclass",
      description: "Explore rare vintages with our sommelier",
      price: "₹5,500",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "2 hours",
      chef: "Priya Sharma"
    },
    {
      title: "Mixology Workshop",
      description: "Craft signature cocktails with our experts",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "2.5 hours",
      chef: "Master Shyam"
    }
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Grand Dining Hall",
      category: "Interior"
    },
    {
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Private Terrace",
      category: "Outdoor"
    },
    {
      image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Wine Cellar",
      category: "Cellar"
    },
    {
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Signature Dish",
      category: "Cuisine"
    }
  ];

  const testimonials = [
    {
      name: "Mr. & Mrs. Kapoor",
      role: "Regular Patrons",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The royal treatment and impeccable service make every visit special. Truly a gem in Mumbai's culinary scene.",
      rating: 5,
      visit: "Celebrating 25th Anniversary"
    },
    {
      name: "Rajiv Mehta",
      role: "Corporate Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Hosted our board dinner here. The private dining room and curated menu exceeded all expectations.",
      rating: 5,
      visit: "Business Dinner"
    },
    {
      name: "Ananya Singh",
      role: "Food Critic",
      image: "https://images.unsplash.com/photo-1494790108777-466d829d29b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Every dish tells a story of royal heritage. The attention to detail is remarkable.",
      rating: 5,
      visit: "Food Review"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry. Our concierge will contact you shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ==================== ENHANCED HERO SECTION ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tavisha Lounge"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-maroon/90 via-royal-maroon/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/20"></div>
        </div>

  
        {/* Ornate Overlay Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M60 10 L110 60 L60 110 L10 60 L60 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
            backgroundSize: '120px 120px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          {/* Animated Crown */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold blur-2xl opacity-30 rounded-full animate-pulse"></div>
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_15s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
                <div className="absolute inset-3 border-2 border-metallic-gold/50 rounded-full animate-pulse" />
                <div className="absolute inset-6 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
                  <Crown className="w-12 h-12 text-charcoal" />
                </div>
              </div>
            </div>
          </div>

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-amber-200 via-metallic-gold to-amber-200 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold" />
            <Diamond className="w-6 h-6 text-metallic-gold animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold" />
          </div>

          <p className="text-lg md:text-xl text-soft-cream/90 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Where conversations begin and connections grow in an atmosphere of royal elegance
          </p>

          {/* Quick Contact Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quickContacts.map((contact, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <contact.icon className="w-4 h-4 text-metallic-gold" />
                  <span className="text-soft-cream/90 text-sm">{contact.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="group relative px-10 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-metallic-gold/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Reserve Your Experience
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            <button
              className="group px-10 py-3 border-2 border-metallic-gold text-metallic-gold rounded-full font-bold text-lg hover:bg-metallic-gold/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Concierge</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 1: AWARDS & ACCOLADES ==================== */}
      <section className="py-8 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block">RECOGNITION</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Awards & Accolades
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Celebrating excellence in royal hospitality and culinary mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-500 hover:-translate-y-4">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${award.color} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="text-6xl mb-4 animate-pulse">{award.icon}</div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{award.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-metallic-gold font-bold">{award.year}</span>
                    <span className="w-1 h-1 bg-metallic-gold rounded-full"></span>
                    <span className="text-soft-cream/60 text-sm">{award.description}</span>
                  </div>
                  
                  <div className="w-12 h-0.5 bg-gradient-to-r from-metallic-gold to-transparent group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: RESERVATION & CONTACT FORM ==================== */}
      <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M40 10 L70 40 L40 70 L10 40 L40 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
          backgroundSize: '80px 80px'
        }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">ROYAL RESERVATIONS</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Make an Inquiry
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Our concierge team will respond within 2 hours to confirm your royal experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {quickContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700`} />
                    <div className="relative">
                      <div className={`p-3 bg-gradient-to-br ${contact.gradient} rounded-xl w-fit mb-4`}>
                        <contact.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white font-bold text-lg mb-1">{contact.text}</p>
                      <p className="text-soft-cream/60 text-sm">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Preview */}
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-metallic-gold" />
                  <span className="text-white font-bold">Royal Heritage Road, Mumbai</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-metallic-gold/30">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="col-span-2 md:col-span-1 px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white placeholder-soft-cream/50 focus:border-metallic-gold focus:outline-none transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-2 md:col-span-1 px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white placeholder-soft-cream/50 focus:border-metallic-gold focus:outline-none transition-all"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white placeholder-soft-cream/50 focus:border-metallic-gold focus:outline-none transition-all"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white placeholder-soft-cream/50 focus:border-metallic-gold focus:outline-none transition-all"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl">
                    <Users className="w-5 h-5 text-metallic-gold" />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                  </div>
                  <input
                    type="date"
                    className="px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white focus:border-metallic-gold focus:outline-none transition-all"
                    required
                  />
                </div>

                <textarea
                  placeholder="Special Requests or Message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-white placeholder-soft-cream/50 focus:border-metallic-gold focus:outline-none transition-all"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-metallic-gold/30 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: ROYAL AMENITIES ==================== */}
      <section className="py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">EXCLUSIVE OFFERINGS</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Royal Amenities
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Experience unparalleled luxury with our exclusive amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-bl-full"></div>
                  
                  {/* Icon with Animated Gradient */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${amenity.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <amenity.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{amenity.name}</h3>
                  <p className="text-soft-cream/70 mb-3">{amenity.description}</p>
                  
                  {/* Animated Line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-metallic-gold to-transparent group-hover:w-24 transition-all duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: CURATED EXPERIENCES ==================== */}
      <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">SIGNATURE EXPERIENCES</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Curated Journeys
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Immerse yourself in exclusive culinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-metallic-gold/30 group-hover:border-metallic-gold transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    
                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold py-1 px-4 rounded-full">
                      {exp.price}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-metallic-gold text-sm">{exp.chef}</span>
                      <span className="w-1 h-1 bg-metallic-gold rounded-full"></span>
                      <span className="text-soft-cream/60 text-sm">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-soft-cream/70 mb-4">{exp.description}</p>
                    
                    <button className="text-metallic-gold font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: ROYAL TESTIMONIALS ==================== */}
      <section className="py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">GUEST EXPERIENCES</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Royal Testimonials
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              What our esteemed guests say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/30 group-hover:border-metallic-gold transition-all duration-500">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl font-serif text-metallic-gold/20">"</div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-metallic-gold text-metallic-gold" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-soft-cream/90 text-lg mb-6 italic">{testimonial.quote}</p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-metallic-gold"
                    />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-metallic-gold text-sm">{testimonial.role}</p>
                      <p className="text-soft-cream/60 text-xs">{testimonial.visit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: MEET THE TEAM ==================== */}
      <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 5 L55 30 L30 55 L5 30 L30 5" stroke="%23D4AF37" fill="none" stroke-width="0.5"/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">ROYAL CULINARY TEAM</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Masters of Craft
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Meet the artisans behind your royal dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-metallic-gold/30 group-hover:border-metallic-gold transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-metallic-gold px-3 py-1 rounded-full text-sm border border-metallic-gold/30">
                      {member.experience}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-metallic-gold mb-2">{member.role}</p>
                    <p className="text-soft-cream/70 text-sm mb-3">{member.expertise}</p>
                    <p className="text-soft-cream/60 text-sm italic">Signature: {member.signature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: GALLERY ==================== */}
      <section className="py-10 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block">VISUAL JOURNEY</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Royal Gallery
              </span>
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              A glimpse into the world of Tavisha Grand
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-metallic-gold text-sm">{item.category}</p>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-metallic-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-metallic-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: FAQ ==================== */}
      <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
  </div>

  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-10">
      <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">
        QUESTIONS & ANSWERS
      </span>

      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          Frequently Asked
        </span>
      </h2>

      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
        Everything you need to know about your royal experience
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-sm rounded-xl border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-500 overflow-hidden"
        >
          <button
            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between"
          >
            <span className="text-white font-bold text-lg">
              {faq.question}
            </span>

            {/* + / - Icon */}
            <span className="text-metallic-gold text-2xl font-bold transition-all duration-300">
              {activeFaq === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`px-6 overflow-hidden transition-all duration-500 ${
              activeFaq === index ? "pb-6 max-h-40" : "max-h-0"
            }`}
          >
            <p className="text-soft-cream/70">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ==================== SECTION 9: VIRTUAL PALACE EXPERIENCE ==================== */}
<section className="py-12 px-4 relative overflow-hidden">
  {/* Opulent Background with Depth */}
  <div className="absolute inset-0">
    {/* Elegant Pattern Overlay - More Sophisticated */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 20 L140 80 L80 140 L20 80 L80 20' stroke='%23D4AF37' fill='none' stroke-width='0.8'/%3E%3Ccircle cx='80' cy='80' r='25' stroke='%23D4AF37' fill='none' stroke-width='0.8'/%3E%3C/svg%3E")`,
      backgroundSize: '160px 160px'
    }} />
    
    {/* Subtle Light Leak */}
    <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-metallic-gold/5 to-transparent blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Spectacular Section Header - More Refined */}
    <div className="text-center mb-10">
     
      {/* Title with Elegant Typography - Enhanced */}
      <div className="relative">
        {/* <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-16 bg-gradient-to-b from-metallic-gold/60 to-transparent"></div> */}
        
        <span className="text-metallic-gold tracking-[0.5em] text-sm font-light block">
          ✦  VIRTUAL REALITY EXPERIENCE  ✦
        </span>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-300 via-metallic-gold to-amber-300 bg-clip-text text-transparent">
            Virtual Palace
          </span>
          {" "}
          <span className="bg-gradient-to-r from-white via-metallic-gold to-white bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
            Experience
          </span>
        </h2>
        
        {/* Decorative Line with Gems - More Elaborate */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold"></div>
          <div className="flex gap-2">
            <Diamond className="w-5 h-5 text-metallic-gold animate-spin-slow" />
            <Diamond className="w-5 h-5 text-metallic-gold animate-spin-slow animation-delay-200" />
            <Diamond className="w-5 h-5 text-metallic-gold animate-spin-slow animation-delay-400" />
          </div>
          <div className="w-32 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold"></div>
        </div>
        
        <p className=" md:text-xl text-soft-cream/90 max-w-4xl mx-auto font-light leading-relaxed">
          Step into a world of unparalleled luxury from the comfort of your home. 
          Explore every exquisite detail of our royal palace through our immersive virtual journey,
          <span className="text-metallic-gold"> where reality meets royalty.</span>
        </p>
      </div>
    </div>

    {/* Main Virtual Tour Showcase - Enhanced */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-14">
      {/* Left Side - Main Tour Preview with 3D Effect */}
      <div className="relative group ">
 
 
        <div className="relative h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border-4 border-metallic-gold/40 group-hover:border-metallic-gold shadow-2xl transform group-hover:scale-[1.02] group-hover:rotate-1 transition-all duration-700">
          {/* Main Image with Parallax */}
          <div className="relative h-[550px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Grand Royal Hall"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-2000"
            />
            
            {/* Layered Gradient Overlays - More Sophisticated */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-royal-maroon/60 via-transparent to-charcoal/60"></div>
            
           
           
            
            {/* 360° Badge with Animation - Enhanced */}
            <div className="absolute top-10 left-12   z-20">
              <div className="relative">
            
                <div className="relative bg-gradient-to-r from-metallic-gold to-amber-600 px-8 py-1 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                  <span className="text-charcoal font-bold flex items-center gap-3 text-xl">
                    <span className="text-xl animate-spin-slow">⟳</span>
                    <span>LIVE 360° TOUR</span>
                  </span>
                </div>
              </div>
            </div>
          
            
            {/* Ornate Corner Decorations - Enhanced */}
            <div className="absolute top-8 left-8 w-32 h-32 border-t-4 border-l-4 border-metallic-gold rounded-tl-3xl"></div>
            <div className="absolute top-8 right-8 w-32 h-32 border-t-4 border-r-4 border-metallic-gold rounded-tr-3xl"></div>
            <div className="absolute bottom-8 left-8 w-32 h-32 border-b-4 border-l-4 border-metallic-gold rounded-bl-3xl"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 border-b-4 border-r-4 border-metallic-gold rounded-br-3xl"></div>
            
     
          </div>
          
          {/* Tour Info with Gold Accent - Enhanced */}
          <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full animate-pulse"></div>
              <span className="text-metallic-gold text-sm tracking-wider">FEATURED TOUR</span>
            </div>
            <h3 className="text-4xl font-serif font-bold text-white mb-3">Grand Royal Hall</h3>
            <p className="text-metallic-gold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-metallic-gold rounded-full animate-pulse"></span>
              Immersive 360° Virtual Walkthrough
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-metallic-gold/20 rounded-xl backdrop-blur-sm border border-metallic-gold/30">
                  <Users className="w-5 h-5 text-metallic-gold" />
                </div>
                <div>
                  <p className="text-soft-cream/50 text-xs tracking-wider">CAPACITY</p>
                  <p className="text-white font-bold text-lg">120 Guests</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-metallic-gold/60 via-metallic-gold/30 to-transparent"></div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-metallic-gold/20 rounded-xl backdrop-blur-sm border border-metallic-gold/30">
                  <Wine className="w-5 h-5 text-metallic-gold" />
                </div>
                <div>
                  <p className="text-soft-cream/50 text-xs tracking-wider">WINE COLLECTION</p>
                  <p className="text-white font-bold text-lg">500+ Labels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Tour Gallery */}
      <div className="space-y-4">
        {/* Gallery Grid with Hover Effects - Enhanced */}
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              title: "Private Dining",
              detail: "24 Guests • Intimate Setting",
              icon: Users,
              gradient: "from-purple-600 to-pink-600"
            },
            {
              image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              title: "Wine Cellar",
              detail: "Rare Vintages • Tasting Room",
              icon: Wine,
              gradient: "from-amber-600 to-orange-600"
            },
            {
              image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              title: "Royal Terrace",
              detail: "Panoramic Views • Sunset",
              icon: Sun,
              gradient: "from-blue-600 to-cyan-600"
            },
            {
              image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              title: "Chef's Table",
              detail: "Interactive • 8 Seats",
              icon: ChefHat,
              gradient: "from-red-600 to-rose-600"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group/tour relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover/tour:opacity-50 blur-2xl transition-all duration-700`}></div>
              
              <div className="relative h-60 rounded-2xl overflow-hidden border-2 border-metallic-gold/30 group-hover/tour:border-metallic-gold shadow-2xl transform group-hover/tour:scale-[1.03] group-hover/tour:-translate-y-2 transition-all duration-500">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover/tour:scale-125 transition-transform duration-1000"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent opacity-0 group-hover/tour:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Overlay - Enhanced */}
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center transform translate-y-[-15px] opacity-0 group-hover/tour:translate-y-0 group-hover/tour:opacity-100 transition-all duration-500 shadow-2xl border-2 border-white/20`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content Overlay - Enhanced */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover/tour:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full animate-pulse"></div>
                    <span className="text-soft-cream/90 text-sm">{item.detail}</span>
                  </div>
                </div>
                
                {/* View Badge - Enhanced */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-metallic-gold/50">
                  <span className="text-metallic-gold text-sm flex items-center gap-1.5">
                    <span className="animate-spin-slow text-xs">⟳</span>
                    <span>360° PREVIEW</span>
                  </span>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/tour:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Virtual Experience Features */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border-2 border-metallic-gold/30 shadow-2xl hover:border-metallic-gold/50 transition-all duration-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
           
              <div className="relative w-16 h-16 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-8 h-8 text-charcoal" />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">Premium Virtual Features</h4>
              <p className="text-soft-cream/60 text-sm">Experience every detail in stunning clarity</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 ">
            {[
              { icon: "⟳", text: "360° Panoramic Views", desc: "Full rotation" },
              { icon: "🔍", text: "Zoom Architecture", desc: "4x digital zoom" },
              { icon: "🌓", text: "Day/Night Mode", desc: "Real-time switch" },
              { icon: "🎥", text: "Guided Tours", desc: "Expert narration" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-300">
                <span className="text-metallic-gold text-2xl">{feature.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{feature.text}</p>
                  <p className="text-soft-cream/40 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        
        
          
          <button className=" mt-4 group relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            <div className="relative px-8 py-3 flex items-center justify-center gap-3">
              <span className="text-charcoal font-bold text-lg tracking-wide">BEGIN VIRTUAL JOURNEY</span>
              <ChevronRight className="w-5 h-5 text-charcoal group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>


    {/* Call to Action - Enhanced */}
    <div className="text-center">
      <div className="relative inline-block">
        <button className="relative px-10 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-full font-bold text-2xl hover:shadow-xl transition-all duration-500 transform  border-2 border-white/20">
          <span className="flex items-center gap-4">
            <Camera className="w-8 h-8 animate-pulse" />
            <span>Explore the Palace Virtually</span>
            <Crown className="w-8 h-8 animate-bounce" />
          </span>
        </button>
      </div>
  
    </div>
  </div>


</section>

{/* ==================== SECTION 10: ROYAL CONCIERGE SERVICES ==================== */}
<section className="py-10 px-4 relative overflow-hidden">
  {/* Premium Background with Gold Texture */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-royal-maroon/20 to-[#1a0f0a]"></div>
    
    {/* Gold Filigree Pattern */}
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 10L90 50L50 90L10 50L50 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3Ccircle cx="50" cy="50" r="15" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
      backgroundSize: '100px 100px'
    }} />
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header with Royal Crest */}
    <div className="text-center mb-10">
  
      <span className="text-metallic-gold tracking-[0.4em] text-sm font-bold block ">PERSONALIZED ATTENTION</span>
      
      <h2 className="text-3xl md:text-6xl font-serif font-bold mb-2">
        <span className="bg-gradient-to-r from-amber-300 via-metallic-gold to-amber-300 bg-clip-text text-transparent">
          Royal Concierge
        </span>
      </h2>
      
      <p className="text-xl text-soft-cream/80 max-w-3xl mx-auto">
        Your personal butler, available 24/7 to curate unforgettable experiences
      </p>
    </div>

    {/* Concierge Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {[
        {
          icon: Calendar,
          title: "Event Planning",
          description: "Birthdays, anniversaries, corporate events",
          gradient: "from-purple-500 to-pink-500",
          features: ["Custom menus", "Floral arrangements", "Entertainment booking"]
        },
        {
          icon: Car,
          title: "Luxury Transport",
          description: "Chauffeur service & valet parking",
          gradient: "from-blue-500 to-cyan-500",
          features: ["Rolls Royce fleet", "Helicopter transfers", "Yacht charters"]
        },
        {
          icon: Globe,
          title: "Travel Arrangements",
          description: "Domestic & international bookings",
          gradient: "from-green-500 to-emerald-500",
          features: ["5-star hotels", "Private jets", "Visa assistance"]
        },
        {
          icon: Heart,
          title: "Special Occasions",
          description: "Romantic dinners & proposals",
          gradient: "from-red-500 to-rose-500",
          features: ["Private setups", "Photography", "Custom cakes"]
        }
      ].map((service, idx) => (
        <div
          key={idx}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-500 hover:-translate-y-4">
            {/* Icon with Gradient */}
            <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
            <p className="text-soft-cream/70 text-sm mb-4">{service.description}</p>
            
            {/* Features List */}
            <div className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-1 bg-metallic-gold rounded-full"></div>
                  <span className="text-soft-cream/60">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="text-metallic-gold font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Personal Butler Section */}
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-metallic-gold/30">
      <div className="absolute -top-6 left-12 bg-gradient-to-r from-metallic-gold to-amber-600 px-8 py-2 rounded-full">
        <span className="text-charcoal font-bold text-sm">24/7 DEDICATED SERVICE</span>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Butler Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center">
              <Bell className="w-10 h-10 text-charcoal" />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-white">Your Personal Butler</h3>
              <p className="text-metallic-gold">Available 24/7 for royal treatment</p>
            </div>
          </div>
          
          <p className="text-soft-cream/80 text-lg mb-8 leading-relaxed">
            Experience the epitome of personalized service with your dedicated royal butler. 
            From pre-arrival preferences to special surprises during your visit, every detail 
            is meticulously crafted to exceed your expectations.
          </p>
          
          <div className="space-y-4">
            {[
              "Personalized welcome based on your preferences",
              "Priority reservations at exclusive events",
              "Customized dining experiences",
              "Special occasion celebrations"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
                </div>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side - Butler Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-3xl opacity-30 blur-xl"></div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-metallic-gold/30">
            <img 
              src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Personal Butler"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            
            {/* Contact Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-metallic-gold" />
                <span className="font-bold">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-white mt-2">
                <Mail className="w-5 h-5 text-metallic-gold" />
                <span>butler@tavisha.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== SECTION 11: PRIVATE EVENTS & CELEBRATIONS ==================== */}
<section className="py-10 px-4 relative overflow-hidden">
  {/* Background with Event Venue */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Event Venue"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]"></div>
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header */}
    <div className="text-center mb-10">
     
     
      
      <span className="text-metallic-gold tracking-[0.4em] text-sm font-bold block ">EXCLUSIVE GATHERINGS</span>
      
      <h2 className="text-3xl md:text-6xl font-serif font-bold mb-2">
        <span className="bg-gradient-to-r from-amber-300 via-metallic-gold to-amber-300 bg-clip-text text-transparent">
          Private Events
        </span>
      </h2>
      
      <p className="text-lg text-soft-cream/80 max-w-3xl mx-auto">
        Host your most memorable celebrations in royal splendor
      </p>
    </div>

    {/* Event Spaces Grid */}
    <div className="grid lg:grid-cols-3 gap-8 mb-10">
      {[
        {
          title: "The Grand Ballroom",
          capacity: "Up to 300 guests",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          features: ["Chandelier ceiling", "Private stage", "Built-in sound system"],
          price: "₹2,50,000",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          title: "Royal Terrace",
          capacity: "Up to 150 guests",
          image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          features: ["Skyline views", "Open bar setup", "Fire pit lounge"],
          price: "₹1,50,000",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          title: "Intimate Library",
          capacity: "Up to 40 guests",
          image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          features: ["Antique decor", "Private bar", "Wine cellar access"],
          price: "₹80,000",
          gradient: "from-amber-500 to-orange-500"
        }
      ].map((space, idx) => (
        <div
          key={idx}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
          
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-metallic-gold/30 group-hover:border-metallic-gold transition-all duration-500">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              
              {/* Price Tag */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-metallic-gold to-amber-600 px-4 py-2 rounded-full">
                <span className="text-charcoal font-bold">{space.price}</span>
                <span className="text-charcoal/70 text-xs ml-1">starting</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{space.title}</h3>
              <p className="text-metallic-gold text-sm mb-3">{space.capacity}</p>
              
              {/* Features */}
              <div className="space-y-2 mb-4">
                {space.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-metallic-gold rounded-full"></div>
                    <span className="text-soft-cream/70">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full px-4 py-3 border-2 border-metallic-gold text-metallic-gold rounded-xl font-bold hover:bg-metallic-gold/10 transition-all">
                Inquire About Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Event Packages */}
    <div className="grid lg:grid-cols-2 gap-8">
      {[
        {
          title: "Wedding Package",
          icon: "💍",
          includes: [
            "Exclusive venue booking (8 hours)",
            "Customized royal menu",
            "Wedding cake & champagne toast",
            "Floral decorations",
            "Live music quartet",
            "Wedding coordinator",
            "Bridal suite access",
            "Photography services"
          ],
          price: "₹5,00,000",
          gradient: "from-pink-500 to-rose-500"
        },
        {
          title: "Corporate Package",
          icon: "💼",
          includes: [
            "Conference facilities",
            "AV equipment & WiFi",
            "Gourmet catering",
            "Welcome drinks",
            "Notepads & pens",
            "Dedicated event manager",
            "Parking validation",
            "Custom branding options"
          ],
          price: "₹3,50,000",
          gradient: "from-blue-500 to-indigo-500"
        }
      ].map((pkg, idx) => (
        <div
          key={idx}
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-metallic-gold/30 hover:border-metallic-gold transition-all duration-500"
        >
          <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${pkg.gradient} opacity-10 rounded-bl-full`}></div>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{pkg.icon}</span>
            <div>
              <h3 className="text-3xl font-serif font-bold text-white">{pkg.title}</h3>
              <p className="text-metallic-gold">Complete celebration package</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {pkg.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-metallic-gold rounded-full"></div>
                <span className="text-soft-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-soft-cream/60 text-sm">Starting from</span>
              <p className="text-4xl font-serif font-bold text-metallic-gold">{pkg.price}</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl transition-all">
              Customize Package
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






{/* ==================== SECTION 10: THE CULINARY ATELIER ==================== */}
<section className="py-10 px-4 relative overflow-hidden">
  {/* Sophisticated Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]"></div>
    
    {/* Subtle Texture Overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 5 L55 30 L30 55 L5 30 L30 5" stroke="%23D4AF37" fill="none" stroke-width="0.5"/%3E%3C/svg%3E")',
      backgroundSize: '60px 60px'
    }} />
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-10">
      <div>
        <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">MASTERS AT WORK</span>
        <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-2">
          The Culinary {" "}
          <span className="text-metallic-gold">Atelier</span>
        </h2>
        <p className="text-soft-cream/70 max-w-xl">
          Where passion meets precision, and every dish tells a story of heritage
        </p>
      </div>
      
      <div className="hidden md:block">
        <ChefHat className="w-16 h-16 text-metallic-gold/30" />
      </div>
    </div>

    {/* Chef's Showcase */}
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Featured Chef */}
      <div className="lg:col-span-2 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-metallic-gold/50 to-amber-600/50 rounded-3xl blur-lg opacity-30"></div>
        
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-metallic-gold/30">
          <div className="grid md:grid-cols-2">
            {/* Chef Image */}
            <div className="relative h-[400px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Executive Chef"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]"></div>
            </div>
            
            {/* Chef Details */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-metallic-gold text-sm">EXECUTIVE CHEF</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Rajesh Mehta</h3>
                <p className="text-soft-cream/80">25+ years of culinary excellence</p>
              </div>
              
              <p className="text-soft-cream/70 mb-6 leading-relaxed">
                "Cooking is not just about following recipes; it's about creating memories 
                that linger on the palate and in the heart. Every dish I create tells a 
                story of our royal heritage."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-metallic-gold" />
                  <span className="text-sm text-soft-cream/80">Michelin Star</span>
                </div>
                <div className="w-px h-4 bg-metallic-gold/30"></div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-metallic-gold" />
                  <span className="text-sm text-soft-cream/80">Culinary Olympiad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Dishes */}
      <div className="space-y-4">
        {[
          {
            name: "Tandoori Lobster",
            description: "Fresh lobster marinated in royal spices",
            chef: "Chef Rajesh",
            time: "45 min",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          },
          {
            name: "Saffron Risotto",
            description: "Creamy arborio rice with Kashmiri saffron",
            chef: "Chef Priya",
            time: "30 min",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          },
          {
            name: "Chocolate Fondant",
            description: "Molten center with gold leaf finish",
            chef: "Chef Amit",
            time: "25 min",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          }
        ].map((dish, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-metallic-gold/20 hover:border-metallic-gold/60 transition-all duration-500 hover:-translate-x-2"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-white font-bold mb-1">{dish.name}</h4>
              <p className="text-soft-cream/60 text-xs mb-2">{dish.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-metallic-gold text-xs">{dish.chef}</span>
                <span className="w-1 h-1 bg-metallic-gold/30 rounded-full"></span>
                <span className="text-soft-cream/40 text-xs">{dish.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Culinary Philosophy */}
    <div className="mt-8 grid md:grid-cols-3 gap-8">
      {[
        {
          icon: Utensils,
          title: "Farm to Table",
          desc: "Fresh ingredients from local purveyors"
        },
        {
          icon: Wine,
          title: "Perfect Pairings",
          desc: "Expertly curated wine selections"
        },
        {
          icon: Heart,
          title: "Passion & Pride",
          desc: "Every dish crafted with love"
        }
      ].map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="inline-flex p-4 bg-white/5 rounded-2xl border border-metallic-gold/30 mb-4">
            <item.icon className="w-6 h-6 text-metallic-gold" />
          </div>
          <h4 className="text-white font-bold mb-2">{item.title}</h4>
          <p className="text-soft-cream/60 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ==================== SECTION 11: PRIVATE DINING EXPERIENCES ==================== */}
<section className="py-10 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
  {/* Atmospheric Background */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Dining Ambiance"
      className="w-full h-full object-cover opacity-10"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header */}
    <div className="text-center mb-8">
      <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block ">INTIMATE GATHERINGS</span>
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          Private Dining
        </span>
      </h2>
      <p className="text-lg text-soft-cream/70 max-w-3xl mx-auto">
        Exquisite spaces for your most cherished moments
      </p>
    </div>

    {/* Dining Rooms Showcase */}
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {[
        {
          name: "The Maharaja Suite",
          capacity: "24 guests",
          description: "Opulent dining room with hand-carved furniture and antique chandeliers",
          image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          features: ["Private butler", "Custom menu", "Wine cellar access", "Live music"]
        },
        {
          name: "The Garden Pavilion",
          capacity: "40 guests",
          description: "Enchanting glass-enclosed space overlooking royal gardens",
          image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          features: ["Open terrace", "Fire pits", "Garden view", "Evening lighting"]
        }
      ].map((room, idx) => (
        <div
          key={idx}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
          
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-metallic-gold/30 group-hover:border-metallic-gold transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              
              {/* Capacity Badge */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-metallic-gold/30">
                <Users className="w-4 h-4 text-metallic-gold inline mr-2" />
                <span className="text-white">{room.capacity}</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-3">{room.name}</h3>
              <p className="text-soft-cream/70 mb-4">{room.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-metallic-gold rounded-full"></div>
                    <span className="text-soft-cream/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full px-6 py-3 border-2 border-metallic-gold text-metallic-gold rounded-xl font-bold hover:bg-metallic-gold/10 transition-all">
                Reserve This Space
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Dining Experiences Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Romantic Dinner",
          price: "₹15,000",
          includes: ["Private table", "Champagne", "Rose petals", "Custom menu"],
          icon: Heart
        },
        {
          title: "Family Celebration",
          price: "₹35,000",
          includes: ["Family style dining", "Birthday cake", "Decorations", "Photographer"],
          icon: Users
        },
        {
          title: "Business Dinner",
          price: "₹25,000",
          includes: ["Conference setup", "AV equipment", "Welcome drinks", "Notepads"],
          icon: Briefcase
        }
      ].map((exp, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/30 hover:border-metallic-gold/60 transition-all duration-500 hover:-translate-y-2"
        >
          <exp.icon className="w-10 h-10 text-metallic-gold mb-4" />
          <h4 className="text-xl font-serif font-bold text-white mb-2">{exp.title}</h4>
          <p className="text-metallic-gold text-2xl font-bold mb-4">{exp.price}</p>
          <div className="space-y-2 mb-6">
            {exp.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-metallic-gold rounded-full"></div>
                <span className="text-soft-cream/70">{item}</span>
              </div>
            ))}
          </div>
          <button className="text-metallic-gold text-sm font-bold flex items-center gap-2 group">
            Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>








{/* ==================== SECTION 12: THE SECRET GARDEN ==================== */}
<section className="py-4 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
  {/* Natural Elements Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-transparent to-emerald-950/30"></div>
  
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Secret Garden Header */}
    <div className="relative mb-10">
      <div className="absolute left-0 top-0 w-52 h-52">
        <div className="absolute inset-0 border-2 border-metallic-gold/20 rounded-full"></div>
        <div className="absolute inset-8 border border-metallic-gold/40 rounded-full"></div>
        <div className="absolute inset-16 bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-full"></div>
      </div>
      
      <div className="text-center">
        <div className="inline-block p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl border border-metallic-gold/30 mb-4 backdrop-blur-sm">
          <span className="text-4xl">🌺</span>
        </div>
        
        <span className="text-metallic-gold text-xs tracking-[0.5em] font-light block ">HIDDEN PARADISE</span>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
          The Secret {" "}
          <span className="bg-gradient-to-r from-green-300 via-metallic-gold to-emerald-300 bg-clip-text text-transparent">
            Garden
          </span>
        </h2>
        <p className="text-soft-cream/70 max-w-2xl mx-auto">
          An enchanting oasis hidden within the palace walls, where nature and luxury intertwine
        </p>
      </div>
      
      <div className="absolute right-0 bottom-0 w-52 h-52">
        <div className="absolute inset-0 border-2 border-metallic-gold/20 rounded-full"></div>
        <div className="absolute inset-8 border border-metallic-gold/40 rounded-full"></div>
        <div className="absolute inset-16 bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-full"></div>
      </div>
    </div>

    {/* Garden Features */}
    <div className="grid lg:grid-cols-2 gap-8 mb-6">
      {/* Left Side - Garden Image with Overlay */}
      <div className="relative h-[500px] rounded-3xl overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Secret Garden"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Magical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        
        
        {/* Garden Quote */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-white text-2xl font-serif italic mb-2">
            "Where every flower tells a story"
          </p>
          <p className="text-metallic-gold text-sm">- The Garden Keeper</p>
        </div>
      </div>

      {/* Right Side - Garden Elements */}
      <div className="space-y-6">
        {[
          {
            title: "The Moonlit Pavilion",
            description: "Dine under the stars surrounded by night-blooming flowers",
                    icon: "🌙",
            features: ["Private dining for 8", "Star projection", "Night garden views"],
            time: "Sunset to Dawn"
          },
          {
            title: "The Herb Alchemist",
            description: "Fresh herbs and edible flowers grown in our secret garden",
            icon: "🌿",
            features: ["50+ herb varieties", "Daily harvest", "Chef's selection"],
            time: "Morning harvest"
          },
          {
            title: "The Whispering Fountain",
            description: "Ancient fountain said to grant dining wishes",
            icon: "💧",
            features: ["Wishing coins", "Moon reflections", "Soothing sounds"],
            time: "Always flowing"
          }
        ].map((element, idx) => (
          <div
            key={idx}
            className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/30 hover:border-metallic-gold/60 transition-all duration-500 hover:-translate-x-2"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{element.icon}</div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-white">{element.title}</h3>
                  <span className="text-metallic-gold text-xs bg-metallic-gold/10 px-3 py-1 rounded-full">
                    {element.time}
                  </span>
                </div>
                
                <p className="text-soft-cream/70 text-sm mb-3">{element.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {element.features.map((feature, i) => (
                    <span key={i} className="text-xs text-soft-cream/50 bg-white/5 px-2 py-1 rounded-full border border-metallic-gold/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Garden Events Calendar */}
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          event: "Full Moon Dinner",
          date: "Every Full Moon",
          menu: "Lunar tasting menu",
          spots: "8 seats",
          icon: "🌕"
        },
        {
          event: "Herbal Workshop",
          date: "Saturday Mornings",
          menu: "Learn herb pairing",
          spots: "12 seats",
          icon: "🌱"
        },
        {
          event: "Garden Cocktails",
          date: "Sunset Hours",
          menu: "Floral mixology",
          spots: "20 seats",
          icon: "🍸"
        }
      ].map((event, idx) => (
        <div
          key={idx}
          className="relative bg-gradient-to-br from-emerald-950/30 to-transparent rounded-xl p-4 border border-metallic-gold/30 text-center group hover:border-metallic-gold transition-all duration-500"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{event.icon}</div>
          <h4 className="text-white font-bold mb-1">{event.event}</h4>
          <p className="text-metallic-gold text-sm mb-2">{event.date}</p>
          <p className="text-soft-cream/60 text-xs mb-3">{event.menu}</p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-soft-cream/40">{event.spots}</span>
            <button className="text-metallic-gold hover:underline">Reserve</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    </div>
  );
};

export default Contact;