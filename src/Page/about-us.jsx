// src/components/AboutPage.js
import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, Award, Star, Crown, Diamond, 
  Sun, Moon, Coffee, Wine, ChevronRight, ChevronLeft,
  MapPin, Phone, Mail, Clock, Calendar, Gift,
  Camera, Music, Wind, Truck, Globe, BookOpen,
  Anchor, Compass, Feather, Key, Sparkles,
  Gem, Medal, Trophy, Utensils, ChefHat,
  Quote, Leaf, Flower2, PartyPopper
} from 'lucide-react';

const AboutPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [hoveredChef, setHoveredChef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Royal Authenticity",
      description: "500 years of culinary heritage preserved in every dish",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Masterful Innovation",
      description: "Where tradition meets contemporary artistry",
      gradient: "from-rose-400 to-rose-600"
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Soulful Service",
      description: "Hospitality that touches the heart and elevates the spirit",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  const features = [
    {
      title: "Authentic Indian cuisine",
      description: "with a modern royal twist passed through generations",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Elegant ambiance",
      description: "designed for families, couples, and friends in palatial surroundings",
      icon: <Diamond className="w-6 h-6" />
    },
    {
      title: "Chef's special menus",
      description: "inspired by seasonal ingredients from our royal gardens",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Personalized service",
      description: "with online ordering and reservations handled by dedicated concierge",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Friendly staff",
      description: "who treat you like family — because at Tavisha, you are family",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const teamMembers = [
    {
      name: "Chef Rajesh Mehta",
      role: "Executive Chef & Founder",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "With over 25 years of culinary experience, Chef Rajesh brings traditional royal recipes to life with modern artistry.",
      signature: "Rogan Josh Royale",
      awards: ["Michelin Star 2023", "Best Indian Chef 2022"],
      experience: "25+ years",
      quote: "Food is the language of love, spoken in every spice.",
      signatureDish: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Head of Hospitality",
      image: "https://images.unsplash.com/photo-1551836026-d5c8c2d86232?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ensuring every guest experiences the warmth and luxury of true Indian hospitality with personalized attention.",
      signature: "Guest Experience Excellence",
      awards: ["Best Hospitality Leader", "Guest Choice Award"],
      experience: "18+ years",
      quote: "Every guest is royalty, every moment is magic.",
      signatureDish: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Shyam",
      role: "Master Mixologist",
      image: "https://images.unsplash.com/photo-1581299894007-9c115449a7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Creating innovative beverages that complement our royal dining experience with liquid artistry.",
      signature: "Saffron Martini",
      awards: ["Best Mixologist 2023", "Cocktail Innovation Award"],
      experience: "15+ years",
      quote: "A great cocktail is poetry in a glass.",
      signatureDish: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Maharaja Yadvendra Singh",
      role: "Royal Patron",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Tavisha Lounge reminds me of my ancestral palace kitchens. The attention to detail, the authenticity of flavors — it's truly remarkable.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Mrs. Anita Singhania",
      role: "Business Tycoon",
      image: "https://images.unsplash.com/photo-1494790108777-383fd5c8a4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The hospitality here is unparalleled. Every visit feels like a celebration, and the staff remembers your preferences. That's luxury.",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "Mr. Vikram Rathore",
      role: "Industrialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "I've dined at the world's best restaurants, but Tavisha has a soul. It's not just food; it's an emotion.",
      rating: 5,
      date: "December 2023"
    }
  ];

  const milestones = [
    { year: 1995, event: "Tavisha founded in Old Delhi", icon: "👑", desc: "A dream was born in the heart of Old Delhi" },
    { year: 2005, event: "First Michelin Star awarded", icon: "⭐", desc: "India's first Michelin-starred restaurant" },
    { year: 2015, event: "Expansion to Mumbai", icon: "🏛️", desc: "The Grand Tavisha opens in Royal Enclave" },
    { year: 2020, event: "Royal Gardens established", icon: "🌿", desc: "5 acres of organic heirloom gardens" },
    { year: 2024, event: "47th International Award", icon: "🏆", desc: "Global recognition for culinary excellence" }
  ];

  const pressFeatures = [
    { name: "Forbes", logo: "F", title: "India's Finest Dining Destination", color: "from-blue-500 to-blue-600" },
    { name: "Conde Nast", logo: "CN", title: "Top 10 Restaurants in Asia", color: "from-red-500 to-red-600" },
    { name: "Michelin Guide", logo: "M", title: "Three Stars for Excellence", color: "from-yellow-500 to-yellow-600" },
    { name: "The New York Times", logo: "NYT", title: "A Culinary Palace in Mumbai", color: "from-gray-500 to-gray-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      {/* Floating Gold Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-amber-500/20 to-transparent animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section - Ultra Luxury */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Opulent Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tavisha Grand Interior"
            className="w-full h-full object-cover scale-105 transition-transform duration-[20000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
          
          {/* Ornate Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-5xl mx-auto">
            {/* Royal Seal */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 border-2 border-amber-500/50 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              <Crown className="absolute inset-0 m-auto w-12 h-12 text-amber-500" />
            </div>
            
            {/* Animated Text Reveal */}
            <div className="space-y-4">
              <p className="text-amber-500 tracking-[0.3em] text-sm animate-pulse">EST. 1995</p>
              
              <h1 className="text-7xl md:text-8xl font-bold font-serif mb-6">
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                  TAVISHA GRAND
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
                <Diamond className="w-6 h-6 text-amber-500" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
              </div>
              
              <p className="text-2xl text-amber-400/90 font-light mb-8">
                Where Royal Heritage Meets Modern Luxury
              </p>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Welcome to a realm where centuries-old culinary traditions are reborn through artistic innovation. 
                Every visit is a journey through India's royal past, presented with contemporary grandeur.
              </p>
            </div>

            {/* Opulent Buttons */}
            <div className="flex justify-center gap-6 mt-12">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Discover Our Story
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button className="group relative px-10 py-5 border-2 border-amber-500/30 text-amber-500 rounded-2xl font-bold text-lg overflow-hidden hover:border-amber-500 transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Diamond className="w-5 h-5" />
                  Virtual Tour
                </span>
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Opulent Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-8 h-14 border-2 border-amber-500/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-500 rounded-full mt-3 animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-amber-500/50 text-xs whitespace-nowrap">
              Scroll to Explore
            </div>
          </div>
        </div>
      </section>

      {/* Opulent Divider */}
      <div className="relative py-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-amber-500/30 rounded-full flex items-center justify-center">
          <Diamond className="w-4 h-4 text-amber-500" />
        </div>
      </div>

      {/* Royal Legacy Section */}
      <section 
        id="story" 
        data-observe 
        className={`py-20 relative transition-all duration-1000 transform ${
          visibleSections.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">OUR HERITAGE</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Legacy
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Ornate Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700" />
              
              {/* Main Image with Overlay */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tavisha Lounge Interior"
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                
                {/* Ornate Corner Decorations */}
                <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-amber-500/40 rounded-tl-3xl" />
                <div className="absolute top-8 right-8 w-24 h-24 border-t-4 border-r-4 border-amber-500/40 rounded-tr-3xl" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border-b-4 border-l-4 border-amber-500/40 rounded-bl-3xl" />
                <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-amber-500/40 rounded-br-3xl" />
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-5xl font-bold text-white mb-8 font-serif">
                A Tapestry of <span className="text-amber-500">Time</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  The word <span className="text-amber-500 font-semibold text-xl">Tavisha</span> — meaning "splendid" and "radiant" — 
                  captures the very essence of our existence. For nearly three decades, we have been the custodians of India's 
                  most precious culinary traditions.
                </p>
                <p>
                  What began as an intimate 10-table restaurant in the bylanes of Old Delhi has blossomed into India's most 
                  celebrated dining destination, where maharajas and connoisseurs alike gather to experience the pinnacle 
                  of gastronomic artistry.
                </p>
              </div>

              {/* Royal Stats with Opulent Design */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { number: '28', label: 'Years', icon: '👑' },
                  { number: '47', label: 'Awards', icon: '🏆' },
                  { number: '15', label: 'Chefs', icon: '👨‍🍳' }
                ].map((stat, index) => (
                  <div key={index} className="group relative text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
                      <span className="text-3xl mb-2 block">{stat.icon}</span>
                      <div className="text-4xl font-bold text-amber-500 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opulent Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">THROUGH THE AGES</p>
            <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Royal Timeline
              </span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Gold Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent" />

            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2">
                      <div className="text-5xl mb-4">{milestone.icon}</div>
                      <div className="text-4xl font-bold text-amber-500 mb-3">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.event}</h3>
                      <p className="text-gray-400">{milestone.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center Ornament */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-2xl shadow-2xl shadow-amber-500/30 z-10 hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Philosophy - Ultra Luxury */}
      <section 
        id="philosophy" 
        data-observe 
        className={`py-20 relative overflow-hidden transition-all duration-1000 transform ${
          visibleSections.philosophy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Opulent Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">THE ART OF FINE DINING</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Culinary Philosophy
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where cooking transcends mere preparation to become an expression of love and artistry
            </p>
          </div>

          {/* Values Cards - Opulent Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative h-80"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative h-full bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 overflow-hidden hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl" />
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon Container */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
                      <div className="text-white text-3xl">{value.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 flex-grow">{value.description}</p>
                    
                    {/* Decorative Line */}
                    <div className={`w-12 h-0.5 bg-gradient-to-r ${value.gradient} mt-4 group-hover:w-20 transition-all duration-500`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Master's Quote - Opulent Design */}
          <div className="max-w-5xl mx-auto">
            <div className="relative p-16 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border border-amber-500/20 backdrop-blur-sm">
              {/* Ornate Corners */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-500/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-500/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-500/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-500/30 rounded-br-3xl" />
              
              {/* Quote Content */}
              <div className="relative text-center">
                <div className="text-8xl text-amber-500/20 font-serif absolute -top-12 left-1/2 transform -translate-x-1/2">"</div>
                
                <p className="text-3xl text-gray-300 italic leading-relaxed mb-8 relative z-10">
                  "Whether it's a simple cup of chai or an elaborate royal thali, our goal is to make 
                  every meal memorable and meaningful. Each dish tells a story of generations past, 
                  while embracing the innovations of tomorrow."
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
                  <p className="text-amber-500 font-semibold text-xl">— Chef Rajesh Mehta</p>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Ambiance Gallery */}
      <section 
        id="ambiance" 
        data-observe 
        className={`py-20 transition-all duration-1000 transform ${
          visibleSections.ambiance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">A PALACE FOR THE SENSES</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Ambiance
              </span>
            </h2>
          </div>

          {/* Main Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Royal Dining Hall"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              
              {/* Ornate Overlay */}
              <div className="absolute inset-0 border-8 border-transparent group-hover:border-amber-500/20 transition-all duration-700" />
              
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-4xl font-bold text-white mb-2">The Grand Dining Hall</h3>
                <p className="text-amber-500 text-xl">Where 150 guests dine in palatial splendor</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Private Pavilions",
                  desc: "Intimate dining pods for special moments"
                },
                {
                  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Royal Wine Cellar",
                  desc: "500+ rare vintages from around the world"
                },
                {
                  image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Open Kitchen Theatre",
                  desc: "Live culinary performances by master chefs"
                },
                {
                  image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  title: "Terrace Garden",
                  desc: "Alfresco dining under a canopy of stars"
                }
              ].map((item, index) => (
                <div key={index} className="relative h-[240px] rounded-2xl overflow-hidden group">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-amber-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              "Deep maroon walls adorned with 24-karat gold leaf detailing",
              "Hand-blown crystal chandeliers from 1920s Belgium",
              "Antique thrones and heirloom artifacts from royal palaces"
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl border border-gray-800 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all" />
                <p className="text-lg text-gray-300 relative z-10">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Craftsmen Section */}
      <section 
        id="team" 
        data-observe 
        className={`py-20 relative transition-all duration-1000 transform ${
          visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">THE ARTISANS</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Masters of Craft
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionaries who transform ingredients into unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                onMouseEnter={() => setHoveredChef(index)}
                onMouseLeave={() => setHoveredChef(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full shadow-2xl">
                      <span className="text-sm font-bold text-gray-900">{member.experience}</span>
                    </div>

                    {/* Signature Dish Preview */}
                    {hoveredChef === index && (
                      <div className="absolute bottom-24 left-6 right-6 animate-[slideUp_0.3s_ease-out]">
                        <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-amber-500/30">
                          <p className="text-amber-500 text-sm font-semibold">Signature Dish</p>
                          <p className="text-white text-sm">{member.signature}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-amber-500 font-semibold mb-4">{member.role}</p>
                    
                    {/* Awards */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.awards.map((award, i) => (
                        <span key={i} className="text-xs bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full border border-amber-500/30 hover:bg-amber-500/30 transition-colors">
                          {award}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-400 mb-6">{member.description}</p>
                    
                    {/* Quote */}
                    <div className="border-t border-gray-800 pt-6">
                      <p className="text-sm text-gray-500 italic">"{member.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Testimonials Carousel */}
      <section 
        id="testimonials" 
        data-observe 
        className={`py-20 relative overflow-hidden transition-all duration-1000 transform ${
          visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Opulent Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">ROYAL ENDORSEMENTS</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Voices of Royalty
              </span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-[200px] text-amber-500/10 font-serif leading-none">
              "
            </div>
            
            {/* Testimonial Card */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-3xl p-16 border border-amber-500/20">
              
              {/* Profile */}
              <div className="flex flex-col items-center text-center mb-12">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="relative w-28 h-28 rounded-full object-cover border-4 border-amber-500"
                  />
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-2">{testimonials[activeTestimonial].name}</h4>
                <p className="text-amber-500 text-lg mb-4">{testimonials[activeTestimonial].role}</p>
                
                {/* Rating */}
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-2xl text-gray-300 italic text-center leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>
              
              <p className="text-center text-gray-500">Dined on {testimonials[activeTestimonial].date}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="w-14 h-14 bg-gray-900/50 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveTestimonial(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="w-14 h-14 bg-gray-900/50 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section 
        id="press" 
        data-observe 
        className={`py-20 transition-all duration-1000 transform ${
          visibleSections.press ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">GLOBAL ACCLAIM</p>
            <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                International Recognition
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {pressFeatures.map((press, index) => (
              <div key={index} className="group text-center">
                <div className={`w-28 h-28 mx-auto mb-6 bg-gradient-to-br ${press.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                  <span className="text-4xl font-bold text-white">{press.logo}</span>
                </div>
                <h4 className="text-xl text-white font-bold mb-2">{press.name}</h4>
                <p className="text-sm text-gray-400">{press.title}</p>
              </div>
            ))}
          </div>

          {/* Award Counter */}
          <div className="relative p-16 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border border-amber-500/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_70%)]" />
            
            <div className="relative">
              <div className="text-8xl font-bold text-amber-500 mb-4 animate-pulse">47</div>
              <p className="text-3xl text-white mb-4 font-serif">International Awards & Counting</p>
              <p className="text-gray-400 text-lg">Including 12 Michelin stars across our culinary team</p>
              
              <div className="flex justify-center gap-4 mt-8">
                {[...Array(12)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Opulent Design */}
      <section 
        id="why-us" 
        data-observe 
        className={`py-20 transition-all duration-1000 transform ${
          visibleSections['why-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-3xl p-16 border-2 border-amber-500/20 relative overflow-hidden">
            {/* Ornate Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                    The Tavisha Difference
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Where every detail is crafted to perfection</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-6 bg-black/40 rounded-2xl border border-gray-800 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Promise - Grand Finale */}
      <section 
        id="promise" 
        data-observe 
        className={`py-20 transition-all duration-1000 transform ${
          visibleSections.promise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-10 blur-3xl" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-3xl p-20 text-center border-2 border-amber-500/20 overflow-hidden">
              
              {/* Floating Crown */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur-2xl opacity-30" />
                  <Crown className="relative w-20 h-20 text-amber-500" />
                </div>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold font-serif mb-8">
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                  The Royal Promise
                </span>
              </h2>
              
              <p className="text-3xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto font-light">
                We promise to serve not just food, but moments. Moments filled with laughter, 
                aroma, flavor, and connection.
              </p>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
              
              <p className="text-2xl text-amber-500 mb-12 font-serif">
                Every guest is royalty — every visit, a memory worth keeping.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col items-center gap-4 mb-12">
                <div className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-lg">Royal Enclave, Colaba, Mumbai - 400001</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-lg">Open Daily • 11:00 AM - 11:30 PM</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
              </div>
              
              {/* Grand Finale Text */}
              <div className="relative">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 animate-pulse">
                  Come, dine like royalty
                </p>
                <p className="text-6xl mt-6 animate-bounce">👑</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center py-12 border-t border-gray-800">
        <p className="text-gray-500 text-sm tracking-widest">
          <span className="text-amber-500">TAVISHA GRAND</span> • SINCE 1995 • A LEGACY OF LUXURY
        </p>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;