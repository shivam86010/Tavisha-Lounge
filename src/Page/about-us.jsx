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
 const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [heroTextVisible, setHeroTextVisible] = useState(false);

  useEffect(() => {
    // Hero text animation
    setTimeout(() => setHeroTextVisible(true), 500);

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
    { 
      year: 1995, 
      event: "The Genesis", 
      icon: "👑", 
      desc: "Tavisha founded in the heart of Old Delhi",
      image: "https://images.unsplash.com/photo-1607232365083-b26d655c3c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "A single dining room with 10 tables, serving authentic royal recipes passed down through generations."
    },
    { 
      year: 2005, 
      event: "First Michelin Star", 
      icon: "⭐", 
      desc: "India's first Michelin-starred restaurant",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Recognition for culinary excellence and innovation in preserving traditional Indian cuisine."
    },
    { 
      year: 2015, 
      event: "Mumbai Expansion", 
      icon: "🏛️", 
      desc: "The Grand Tavisha opens in Royal Enclave",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "A palatial 15,000 sq ft space featuring private dining pavilions and an open kitchen theatre."
    },
    { 
      year: 2020, 
      event: "Royal Gardens", 
      icon: "🌿", 
      desc: "5 acres of organic heirloom gardens",
      image: "https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Cultivating rare spices and heritage vegetables to ensure authentic flavors in every dish."
    },
    { 
      year: 2024, 
      event: "Global Recognition", 
      icon: "🏆", 
      desc: "47th International Award",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Named among the World's 50 Best Restaurants, with 12 Michelin stars across our culinary team."
    }
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

       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Opulent Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tavisha Grand Interior"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite]"
          />
          
          {/* Ornate Gold Overlay Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 5 L55 30 L30 55 L5 30 L30 5" stroke="%23F59E0B" fill="none" stroke-width="0.5"/%3E%3C/svg%3E")',
              backgroundSize: '80px 80px'
            }} />
          </div>
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent animate-[gradientShift_8s_ease-in-out_infinite]" />

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 text-center z-20">
          <div className="max-w-5xl mx-auto">
            {/* Animated Royal Seal */}
            <div className={`relative w-40 h-40 mx-auto mb-8 transition-all duration-1000 transform ${heroTextVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-[spin_12s_linear_infinite]" 
                   style={{ borderStyle: 'dotted' }} />
              
              {/* Middle pulsing ring */}
              <div className="absolute inset-3 border-2 border-amber-500/70 rounded-full animate-pulse" 
                   style={{ animationDuration: '3s' }} />
              
              {/* Inner ring with rotating elements */}
              <div className="absolute inset-6 border border-amber-500/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
              
              {/* Center Crown */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Crown className="w-16 h-16 text-amber-500 animate-[float_4s_ease-in-out_infinite]" />
              </div>
              
              {/* Orbiting Dots */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-500 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(70px)`,
                    animation: `orbitPulse 3s ease-in-out infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Animated Text Reveal with Stagger */}
            <div className="space-y-6">
              <p className={`text-amber-500 tracking-[0.3em] text-sm transition-all duration-1000 delay-300 ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                EST. 1995
              </p>
              
              <h1 className={`text-7xl md:text-9xl font-bold font-serif mb-6 transition-all duration-1000 delay-500 ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent relative">
                  TAVISHA
                  <span className="absolute -top-6 -right-8 text-2xl animate-ping">👑</span>
                </span>
                <br />
                <span className="text-5xl md:text-7xl text-white/90 font-light tracking-[0.3em]">
                  GRAND
                </span>
              </h1>
              
              {/* Animated Divider */}
              <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-700 ${heroTextVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500 animate-[expandWidth_1.5s_ease-out]" />
                <Diamond className="w-6 h-6 text-amber-500 animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500 animate-[expandWidth_1.5s_ease-out]" />
              </div>
              
              <p className={`text-2xl md:text-3xl text-amber-400/90 font-light mb-8 transition-all duration-1000 delay-900 ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Where Royal Heritage Meets Modern Luxury
              </p>
              
              <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-1100 ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Welcome to a realm where centuries-old culinary traditions are reborn through artistic innovation. 
                Every visit is a journey through India's royal past, presented with contemporary grandeur.
              </p>
            </div>

            {/* Opulent Buttons with Hover Effects */}
            <div className={`flex justify-center gap-6 mt-12 transition-all duration-1000 delay-1300 ${heroTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Discover Our Story
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <button className="group relative px-10 py-5 border-2 border-amber-500/30 text-amber-500 rounded-2xl font-bold text-lg overflow-hidden hover:border-amber-500 transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Diamond className="w-5 h-5" />
                  Virtual Tour
                </span>
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/30 rounded-2xl transition-all duration-500 scale-0 group-hover:scale-100" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-16 border-2 border-amber-500/30 rounded-full flex justify-center">
              <div className="w-1.5 h-4 bg-gradient-to-b from-amber-500 to-amber-300 rounded-full mt-3 animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-amber-500/70 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
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
         <section className="py-20 relative overflow-hidden">
        {/* Opulent Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">THROUGH THE AGES</p>
            <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Chronicle
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          {/* Interactive Timeline */}
          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-between items-center mb-16 relative">
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent top-1/2 transform -translate-y-1/2" />
              
              {milestones?.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimelineIndex(index)}
                  className={`relative z-10 group focus:outline-none transition-all duration-500 ${
                    activeTimelineIndex === index ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeTimelineIndex === index 
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-2xl shadow-amber-500/50' 
                      : 'bg-gray-900 border-2 border-amber-500/30 group-hover:border-amber-500'
                  }`}>
                    <span className="text-3xl">{milestone.icon}</span>
                  </div>
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${
                    activeTimelineIndex === index 
                      ? 'opacity-100 text-amber-500 font-bold' 
                      : 'opacity-0 group-hover:opacity-100 text-gray-400'
                  }`}>
                    {milestone.year}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Timeline Content */}
            <div className="relative mt-20">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-amber-500 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image with Frame */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700" />
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={milestones[activeTimelineIndex].image}
                      alt={milestones[activeTimelineIndex].event}
                      className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Ornate Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-amber-500/60 rounded-tl-2xl" />
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-500/60 rounded-tr-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-amber-500/60 rounded-bl-2xl" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-amber-500/60 rounded-br-2xl" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full">
                      <span className="text-2xl font-bold text-gray-900">{milestones[activeTimelineIndex].year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-white font-serif">
                    {milestones[activeTimelineIndex].event}
                  </h3>
                  
                  <p className="text-2xl text-amber-500">
                    {milestones[activeTimelineIndex].desc}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {milestones[activeTimelineIndex].details}
                  </p>
                  
                  {/* Achievement Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-amber-500/20">
                      <div className="text-2xl font-bold text-amber-500">{activeTimelineIndex  + 1}</div>
                      <div className="text-xs text-gray-400">Milestone</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-amber-500/20">
                      <div className="text-2xl font-bold text-amber-500">🏆</div>
                      <div className="text-xs text-gray-400">Achievement</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-amber-500/20">
                      <div className="text-2xl font-bold text-amber-500">✨</div>
                      <div className="text-xs text-gray-400">Legacy</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={() => setActiveTimelineIndex(prev => (prev > 0 ? prev - 1 : milestones.length - 1))}
            className="w-14 h-14 bg-gray-900/50 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Timeline Dots */}
          <div className="flex gap-3">
            {milestones?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTimelineIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTimelineIndex === index
                    ? 'w-10 bg-gradient-to-r from-amber-500 to-amber-600'
                    : 'bg-amber-500/30 hover:bg-amber-500/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setActiveTimelineIndex(prev => (prev < milestones.length - 1 ? prev + 1 : 0))}
            className="w-14 h-14 bg-gray-900/50 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
            </div>
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

       {/* NEW SECTION 1: Royal Art Collection */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1465146344425-f3d94f0c5b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Art Gallery"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">CURATED MASTERPIECES</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Art Collection
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-2xl text-amber-500 font-serif">
                A gallery of heritage and opulence
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tavisha houses an exquisite collection of 47 original artworks spanning three centuries. 
                From Mughal miniature paintings to contemporary Indian masters, each piece tells a story 
                of India's rich cultural tapestry.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-900/50 rounded-2xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-500 mb-2">47+</div>
                  <div className="text-sm text-gray-400">Original Artworks</div>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-2xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-500 mb-2">3</div>
                  <div className="text-sm text-gray-400">Centuries of Art</div>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-2xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-500 mb-2">12</div>
                  <div className="text-sm text-gray-400">Rajasthani Masters</div>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-2xl border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-500 mb-2">₹5Cr+</div>
                  <div className="text-sm text-gray-400">Collection Value</div>
                </div>
              </div>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Request Private Viewing
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1531913764164-f2af33884fc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              ].map((img, i) => (
                <div key={i} className="relative group overflow-hidden rounded-2xl">
                  <img src={img} alt={`Art ${i+1}`} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Royal Wellness & Spa */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-gray-950/90 to-gray-950/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl ml-auto">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">HOLISTIC INDULGENCE</p>
            <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Wellness
              </span>
            </h2>

            <div className="space-y-8">
              <p className="text-xl text-gray-300">
                Before or after your dining experience, retreat to our exclusive spa sanctuary. 
                Ancient Ayurvedic treatments meet modern luxury in our 10,000 sq ft wellness pavilion.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Royal Abhyanga</h3>
                  <p className="text-gray-400 text-sm">Four-hand synchronized massage with warm herbal oils</p>
                </div>
                <div className="p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Gemstone Therapy</h3>
                  <p className="text-gray-400 text-sm">Healing with precious stones and crystals</p>
                </div>
                <div className="p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Gold Facial</h3>
                  <p className="text-gray-400 text-sm">24-karat gold leaf treatment for radiant skin</p>
                </div>
                <div className="p-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Yoga Pavilion</h3>
                  <p className="text-gray-400 text-sm">Private sessions with master yogis</p>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-amber-500">6:00</div>
                  <div className="text-sm text-gray-400">AM - 10:00 PM</div>
                </div>
                <div className="w-px h-12 bg-amber-500/30" />
                <div>
                  <div className="text-3xl font-bold text-amber-500">12</div>
                  <div className="text-sm text-gray-400">Treatment Rooms</div>
                </div>
                <div className="w-px h-12 bg-amber-500/30" />
                <div>
                  <div className="text-3xl font-bold text-amber-500">24</div>
                  <div className="text-sm text-gray-400">Carat Gold</div>
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

     {/* NEW SECTION 3: Private Events & Celebrations */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-950 to-gray-950" />
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">CELEBRATE IN STYLE</p>
            <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Royal Celebrations
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wedding Events */}
            <div className="group relative h-[500px] overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Royal Wedding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <PartyPopper className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Royal Weddings</h3>
                <p className="text-gray-300 mb-4">Celebrate your special day in palatial splendor</p>
                <div className="flex items-center gap-2 text-amber-500">
                  <span>Up to 500 guests</span>
                  <Diamond className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Corporate Events */}
            <div className="group relative h-[500px] overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Corporate Event"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Users className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Corporate Galas</h3>
                <p className="text-gray-300 mb-4">Impress clients and reward your team</p>
                <div className="flex items-center gap-2 text-amber-500">
                  <span>AV equipment & concierge</span>
                  <Diamond className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Birthday Celebrations */}
            <div className="group relative h-[500px] overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Birthday Celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Gift className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Milestone Birthdays</h3>
                <p className="text-gray-300 mb-4">Make every year unforgettable</p>
                <div className="flex items-center gap-2 text-amber-500">
                  <span>Custom cakes & decorations</span>
                  <Diamond className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-2xl font-bold text-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Plan Your Royal Celebration
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
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

     
     


{/* Private Dining Experience - NEW SECTION */}
<section className="relative py-32 overflow-hidden">
  {/* Lavish Background */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Private Dining"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
  </div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl ml-auto">
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-amber-500 tracking-[0.3em] text-sm mb-4">EXCLUSIVE EXPERIENCES</p>
        <h2 className="text-6xl md:text-7xl font-bold font-serif mb-6">
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
            The Private Pavilions
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Maharaja Suite */}
        <div className="group relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2">
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-all" />
          <Crown className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">The Maharaja Suite</h3>
          <p className="text-gray-400 mb-4">An intimate 8-seat chamber with antique thrones, personal butler, and heirloom silverware.</p>
          <div className="flex items-center gap-2 text-amber-500">
            <Diamond className="w-4 h-4" />
            <span className="text-sm">Starting at ₹50,000</span>
          </div>
        </div>

        {/* Garden Pavilion */}
        <div className="group relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2">
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-all" />
          <Flower2 className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">The Garden Pavilion</h3>
          <p className="text-gray-400 mb-4">Al fresco dining surrounded by heirloom roses and fountains, under a canopy of fairy lights.</p>
          <div className="flex items-center gap-2 text-amber-500">
            <Diamond className="w-4 h-4" />
            <span className="text-sm">Perfect for romantic dinners</span>
          </div>
        </div>

        {/* Wine Cellar */}
        <div className="group relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2">
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-all" />
          <Wine className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">The Vault</h3>
          <p className="text-gray-400 mb-4">Dine inside our temperature-controlled wine cellar surrounded by 2000+ rare vintages.</p>
          <div className="flex items-center gap-2 text-amber-500">
            <Diamond className="w-4 h-4" />
            <span className="text-sm">Curated wine pairing included</span>
          </div>
        </div>

        {/* Rooftop Terrace */}
        <div className="group relative bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2">
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/40 transition-all" />
          <Moon className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">The Celestial Deck</h3>
          <p className="text-gray-400 mb-4">Stargaze while you dine with a personal astronomer and telescope at your table.</p>
          <div className="flex items-center gap-2 text-amber-500">
            <Diamond className="w-4 h-4" />
            <span className="text-sm">Available on clear nights</span>
          </div>
        </div>
      </div>

      {/* Reserve Button */}
      <div className="mt-12 text-right">
        <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            Inquire About Private Dining
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </div>
    </div>
  </div>
</section>


{/* Signature Experiences - NEW SECTION */}
<section className="py-20 relative bg-gray-950">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">CURATED EXPERIENCES</p>
      <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
        <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
          Beyond The Plate
        </span>
      </h2>
    </div>

    {/* Experience Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Chef's Table Experience */}
      <div className="group relative h-[600px] overflow-hidden rounded-3xl">
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Chef's Table"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="w-8 h-8 text-amber-500" />
            <h3 className="text-3xl font-bold text-white">The Chef's Table</h3>
          </div>
          <p className="text-gray-300 mb-4">A 12-course journey through India's royal kitchens, prepared right before your eyes by our Master Chefs.</p>
          
          {/* Hidden content that appears on hover */}
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <div className="pt-4 border-t border-amber-500/30">
              <p className="text-amber-500 mb-2">Includes:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• Personal interaction with Chef Rajesh</li>
                <li>• Signed cookbook & recipe card</li>
                <li>• Champagne pairing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Royal Tasting Menu */}
      <div className="group relative h-[600px] overflow-hidden rounded-3xl">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Royal Tasting"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="flex items-center gap-3 mb-4">
            <Gem className="w-8 h-8 text-amber-500" />
            <h3 className="text-3xl font-bold text-white">The Royal Tasting</h3>
          </div>
          <p className="text-gray-300 mb-4">Sample 24 signature dishes from across India, each paired with rare wines and champagnes.</p>
          
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <div className="pt-4 border-t border-amber-500/30">
              <p className="text-amber-500 mb-2">Includes:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• 24 course tasting menu</li>
                <li>• Premium wine pairing</li>
                <li>• Take-home tasting journal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spice Market Tour */}
      <div className="group relative h-[600px] overflow-hidden rounded-3xl">
        <img 
          src="https://images.unsplash.com/photo-1536596331127-90dbba5aaa4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Spice Tour"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-amber-500" />
            <h3 className="text-3xl font-bold text-white">Spice Market Tour</h3>
          </div>
          <p className="text-gray-300 mb-4">Join our head chef on a private tour of Mumbai's oldest spice market, followed by a cooking class.</p>
          
          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <div className="pt-4 border-t border-amber-500/30">
              <p className="text-amber-500 mb-2">Includes:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• Private car & guide</li>
                <li>• Cooking class with chef</li>
                <li>• Spice kit to take home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Experience Calendar */}
    <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-950 rounded-3xl p-10 border border-amber-500/20">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div>
          <h4 className="text-2xl font-bold text-white mb-2">Upcoming Special Experiences</h4>
          <p className="text-gray-400">Book early as seats are limited</p>
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-amber-500 font-bold">DEC 24</div>
            <div className="text-white">Christmas Royal Feast</div>
          </div>
          <div className="text-center">
            <div className="text-amber-500 font-bold">DEC 31</div>
            <div className="text-white">New Year's Gala</div>
          </div>
          <div className="text-center">
            <div className="text-amber-500 font-bold">JAN 15</div>
            <div className="text-white">Wine Masterclass</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* The Royal Cellar - NEW SECTION */}
<section className="py-20 relative">
  {/* Background with parallax */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1541850328335-982615e8343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Wine Cellar"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/90" />
  </div>

  <div className="relative container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">THE ROYAL CELLAR</p>
        <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
            A Treasury of Liquid Gold
          </span>
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg mb-10">
          <p>
            Hidden beneath Tavisha lies one of Asia's most extraordinary wine collections. 
            Over 5,000 labels from the world's most prestigious vineyards, including vintages 
            that predate the restaurant itself.
          </p>
        </div>

        {/* Wine Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="text-center p-4 bg-black/40 rounded-2xl border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-500 mb-1">5000+</div>
            <div className="text-sm text-gray-400">Wine Labels</div>
          </div>
          <div className="text-center p-4 bg-black/40 rounded-2xl border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-500 mb-1">1875</div>
            <div className="text-sm text-gray-400">Oldest Vintage</div>
          </div>
          <div className="text-center p-4 bg-black/40 rounded-2xl border border-amber-500/20">
            <div className="text-3xl font-bold text-amber-500 mb-1">15</div>
            <div className="text-sm text-gray-400">Master Sommeliers</div>
          </div>
        </div>

        {/* Featured Wines */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">Curator's Choice</h4>
          <div className="flex gap-4">
            <div className="flex-1 p-4 bg-black/40 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <p className="text-amber-500 font-bold">Château Margaux 1996</p>
              <p className="text-sm text-gray-400">Bordeaux, France</p>
            </div>
            <div className="flex-1 p-4 bg-black/40 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <p className="text-amber-500 font-bold">Domaine de la Romanée-Conti 2005</p>
              <p className="text-sm text-gray-400">Burgundy, France</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Wine Tasting Experience */}
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-3xl p-10 border-2 border-amber-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">Wine Tasting Experiences</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
              <Wine className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-white font-bold mb-1">Royal Flight</h4>
                <p className="text-gray-400 text-sm">5 premium Indian wines paired with small plates</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
              <Gem className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-white font-bold mb-1">Grand Cru Journey</h4>
                <p className="text-gray-400 text-sm">6 legendary Bordeaux vintages with cheese pairings</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-xl">
              <Crown className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-white font-bold mb-1">Imperial Collection</h4>
                <p className="text-gray-400 text-sm">Private tasting of rare Champagnes & Burgundies</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
            Book a Tasting
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Royal Membership - NEW SECTION */}
<section className="py-20 relative overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_50%)]" />
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.1),transparent_50%)]" />
  </div>

  <div className="relative container mx-auto px-4">
    <div className="text-center mb-16">
      <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">EXCLUSIVE ACCESS</p>
      <h2 className="text-6xl md:text-7xl font-bold font-serif mb-4">
        <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
          The Royal Circle
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Join an elite community of connoisseurs who appreciate the finest things in life
      </p>
    </div>

    {/* Membership Tiers */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Silver Tier */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-gray-400/40 transition-all duration-500 hover:-translate-y-4">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Silver</h3>
            <div className="text-3xl font-bold text-gray-400 mb-2">₹50,000<span className="text-sm text-gray-500">/year</span></div>
            <p className="text-gray-400">For the occasional epicure</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-300">
              <Sparkles className="w-5 h-5 text-gray-400" />
              <span>Priority reservations</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Sparkles className="w-5 h-5 text-gray-400" />
              <span>2 complimentary chef's tasting menus</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Sparkles className="w-5 h-5 text-gray-400" />
              <span>10% on all dining</span>
            </li>
          </ul>
          
          <button className="w-full py-4 border-2 border-gray-400/30 text-gray-400 rounded-xl font-bold hover:bg-gray-400 hover:text-gray-900 transition-all">
            Enquire
          </button>
        </div>
      </div>

      {/* Gold Tier */}
      <div className="group relative scale-105 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all" />
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-amber-500 rounded-3xl p-8 hover:-translate-y-4 transition-all duration-500">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 rounded-full">
            <span className="text-sm font-bold text-gray-900">MOST POPULAR</span>
          </div>
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Gold</h3>
            <div className="text-3xl font-bold text-amber-500 mb-2">₹1,50,000<span className="text-sm text-gray-500">/year</span></div>
            <p className="text-gray-400">For the true connoisseur</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-300">
              <Crown className="w-5 h-5 text-amber-500" />
              <span>All Silver benefits</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Crown className="w-5 h-5 text-amber-500" />
              <span>4 premium wine tastings</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Crown className="w-5 h-5 text-amber-500" />
              <span>Private dining room access</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Crown className="w-5 h-5 text-amber-500" />
              <span>20% on all dining</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Crown className="w-5 h-5 text-amber-500" />
              <span>Birthday celebration package</span>
            </li>
          </ul>
          
          <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
            Join Now
          </button>
        </div>
      </div>

      {/* Platinum Tier */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-4">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Diamond className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Platinum</h3>
            <div className="text-3xl font-bold text-amber-300 mb-2">₹3,00,000<span className="text-sm text-gray-500">/year</span></div>
            <p className="text-gray-400">The ultimate indulgence</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-300">
              <Diamond className="w-5 h-5 text-amber-300" />
              <span>All Gold benefits</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Diamond className="w-5 h-5 text-amber-300" />
              <span>Unlimited access to private pavilions</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Diamond className="w-5 h-5 text-amber-300" />
              <span>Personal concierge 24/7</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Diamond className="w-5 h-5 text-amber-300" />
              <span>Invitations to exclusive chef's table events</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Diamond className="w-5 h-5 text-amber-300" />
              <span>Complimentary chauffeured transfers</span>
            </li>
          </ul>
          
          <button className="w-full py-4 border-2 border-amber-500/30 text-amber-500 rounded-xl font-bold hover:bg-amber-500 hover:text-gray-900 transition-all">
            Enquire
          </button>
        </div>
      </div>
    </div>

    {/* Membership Benefits Banner */}
    <div className="mt-16 p-8 bg-gradient-to-r from-amber-500/10 to-transparent rounded-3xl border border-amber-500/20">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <Gift className="w-10 h-10 text-amber-500" />
          <div>
            <h4 className="text-xl font-bold text-white">Exclusive Member Events</h4>
            <p className="text-gray-400">Quarterly gatherings with master chefs and sommeliers</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Calendar className="w-10 h-10 text-amber-500" />
          <div>
            <h4 className="text-xl font-bold text-white">Priority Access</h4>
            <p className="text-gray-400">Book up to 3 months in advance</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-10 h-10 text-amber-500" />
          <div>
            <h4 className="text-xl font-bold text-white">Global Privileges</h4>
            <p className="text-gray-400">Benefits at partner restaurants worldwide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </div>
  );
};

export default AboutPage;

