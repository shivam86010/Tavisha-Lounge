
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause,
  Heart, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Camera,
  Compass, 
  Eye, 
  Bookmark,
  Crown,
  Sparkles,
  Wine,
  Utensils,
  Sun,
  Cloud,
  Moon,
  Wind,
  Diamond,
  PartyPopper,
  ChefHat,
  Flame,
  Leaf,Gift,
  Snowflake, CheckCircle,
} from 'lucide-react';

const GalleryPage = () => {
  const [activeRoom, setActiveRoom] = useState('main-dining');
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const [showFeature, setShowFeature] = useState(null);
  const [isHoveringRoom, setIsHoveringRoom] = useState(null);
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const seasons = {
    spring: {
      name: 'Spring Blossom',
      color: 'from-emerald-400 via-rose-300 to-amber-200',
      icon: <Leaf className="w-8 h-8" />,
      description: 'Where romance blooms with every petal',
      details: 'Cherry blossom arrangements • Spring tasting menu • Rosé selections',
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    summer: {
      name: 'Summer Radiance',
      color: 'from-amber-400 via-orange-400 to-rose-400',
      icon: <Sun className="w-8 h-8" />,
      description: 'Golden days and luminous nights',
      details: 'Citrus infusions • Coastal inspired decor • Chilled delicacies',
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    monsoon: {
      name: 'Monsoon Mystique',
      color: 'from-slate-700 via-blue-800 to-purple-700',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Dramatic skies, intimate vibes',
      details: 'Truffle specialties • Rain-inspired cocktails • Cozy corners',
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    },
    winter: {
      name: 'Winter Opulence',
      color: 'from-slate-300 via-blue-200 to-amber-100',
      icon: <Snowflake className="w-8 h-8" />,
      description: 'Where warmth meets winter magic',
      details: 'Fireplace settings • Winter truffles • Mulled wine bar',
      images: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      ]
    }
  };

  const tourRooms = {
    'main-dining': {
      name: 'The Grand Salon',
      subtitle: 'Royal Dining Experience',
      description: 'Step into opulence with our magnificent main dining hall.',
      longDescription: 'Adorned with crystal chandeliers and hand-carved wooden panels, this space transforms every meal into a celebration of luxury.',
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Royal Throne Seating', 'Crystal Chandeliers', 'Ornate Ceilings', 'Private Butler Service'],
      capacity: '80 guests',
      ambience: 'Formal Elegant',
      bestFor: 'Wedding Receptions, Gala Dinners',
      icon: <Crown className="w-6 h-6" />
    },
    'private-dining': {
      name: 'The Amber Room',
      subtitle: 'Intimate Luxury',
      description: 'An exclusive enclave for discerning guests.',
      longDescription: 'Wrapped in warm amber tones and plush velvet, this intimate space features a private fireplace.',
      image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1617098474202-0d0d7f60c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Private Fireplace', 'Wine Cellar Access', 'Personal Chef', 'Dedicated Sommelier'],
      capacity: '20 guests',
      ambience: 'Intimate Cozy',
      bestFor: 'Business Dinners, Anniversary Celebrations',
      icon: <PartyPopper className="w-6 h-6" />
    },
    'lounge-area': {
      name: 'The Velvet Lounge',
      subtitle: 'Artful Sophistication',
      description: 'Where mixology meets artistry.',
      longDescription: 'Sink into plush velvet seating while master mixologists craft signature cocktails.',
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1572111509797-5e9a2e8c40b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Gold Leaf Bar', 'Live Acoustic Stage', 'Signature Cocktails', 'Cigar Lounge'],
      capacity: '40 guests',
      ambience: 'Sophisticated Casual',
      bestFor: 'Cocktail Parties, Networking Events',
      icon: <Wine className="w-6 h-6" />
    },
    'outdoor-terrace': {
      name: 'The Sky Terrace',
      subtitle: 'Al Fresco Grandeur',
      description: 'Dine under the stars.',
      longDescription: 'Surrounded by lush greenery and twinkling fairy lights, this open-air terrace offers panoramic views.',
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Infinity Edge', 'Fire Pits', 'Heated Flooring', 'Retractable Roof'],
      capacity: '50 guests',
      ambience: 'Romantic Open-air',
      bestFor: 'Sunset Dinners, Garden Parties',
      icon: <Flame className="w-6 h-6" />
    },
    'chef-table': {
      name: "The Culinary Theater",
      subtitle: 'Epicurean Journey',
      description: 'Witness culinary magic unfold.',
      longDescription: 'Positioned at the heart of our kitchen, this marble counter seats you front-row to culinary artistry.',
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      features: ['Chef Interaction', 'Custom Menus', 'Wine Pairing', 'Kitchen Tour'],
      capacity: '8 guests',
      ambience: 'Interactive Exclusive',
      bestFor: 'Food Enthusiasts, Special Occasions',
      icon: <ChefHat className="w-6 h-6" />
    }
  };

  const handleSeasonChange = (season) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSeason(season);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const seasonKeys = Object.keys(seasons);
      const currentIndex = seasonKeys.indexOf(currentSeason);
      const nextIndex = (currentIndex + 1) % seasonKeys.length;
      handleSeasonChange(seasonKeys[nextIndex]);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSeason]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Ultra-Luxury Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tavisha Lounge"
            className="w-full h-full object-cover"
          />
          {/* Multi-layered Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/90"></div>
        </div>

        {/* Animated Gold Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L61.6 35.8L90 40L70 60L75.8 90L50 75L24.2 90L30 60L10 40L38.4 35.8L50 10z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Central Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Royal Emblem */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold blur-2xl opacity-30 rounded-full"></div>
              <div className="relative w-32 h-32 border-2 border-metallic-gold rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <Crown className="w-16 h-16 text-metallic-gold" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="overflow-hidden">
            <h1 className="text-8xl md:text-9xl font-serif font-bold text-metallic-gold mb-6 tracking-wider">
              TAVISHA
            </h1>
          </div>

          <div className="h-px w-[300px] bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto mb-8"></div>

          <p className="text-2xl md:text-3xl text-soft-cream/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-12">
            Where Royalty Meets Modern Elegance
          </p>

          {/* Luxury CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              className="group relative px-10 py-4 bg-metallic-gold text-royal-maroon font-semibold rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Experience Luxury</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              className="px-10 py-4 border-2 border-metallic-gold text-metallic-gold font-semibold rounded-full hover:bg-metallic-gold/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Virtual Tour
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-metallic-gold/60 text-sm tracking-widest">DISCOVER</span>
              <div className="w-px h-16 bg-gradient-to-b from-metallic-gold to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Virtual Grand Tour */}
      <section className="py-4 px-4 relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
        
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header with Royal Treatment */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-metallic-gold blur-xl opacity-20"></div>
                <Diamond className="w-16 h-16 text-metallic-gold relative" />
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl font-serif font-bold text-metallic-gold mb-2">
              The Grand Tour
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-px bg-metallic-gold/40"></div>
              <span className="text-metallic-gold/60 tracking-[0.3em] text-sm">ROYAL COLLECTION</span>
              <div className="w-12 h-px bg-metallic-gold/40"></div>
            </div>

            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto font-light">
              Journey through our meticulously curated spaces, each telling its own story of luxury and refinement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Room Selector - Vertical Timeline Style */}
            <div className="lg:col-span-4">
              <div className="space-y-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-metallic-gold/40 via-metallic-gold/20 to-transparent"></div>
                
                {Object.entries(tourRooms).map(([key, room], index) => (
                  <div
                    key={key}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute left-8 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 transition-all duration-500 ${
                        activeRoom === key 
                          ? 'border-metallic-gold bg-metallic-gold shadow-lg shadow-metallic-gold/50' 
                          : 'border-metallic-gold/30 bg-transparent'
                      }`}
                      style={{ top: '2rem' }}
                    />

                    <button
                      onClick={() => setActiveRoom(key)}
                      onMouseEnter={() => setIsHoveringRoom(key)}
                      onMouseLeave={() => setIsHoveringRoom(null)}
                      className={`w-full ml-16 p-6 rounded-2xl transition-all duration-500 relative overflow-hidden ${
                        activeRoom === key
                          ? 'bg-gradient-to-r from-metallic-gold/20 to-transparent border border-metallic-gold/50 shadow-2xl'
                          : 'bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {/* Hover Effect */}
                      {isHoveringRoom === key && (
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-metallic-gold/10 to-transparent"
                        />
                      )}

                      <div className="flex items-center space-x-4 relative z-10">
                        <div className={`p-4 rounded-xl ${
                          activeRoom === key 
                            ? 'bg-metallic-gold text-royal-maroon' 
                            : 'bg-metallic-gold/10 text-metallic-gold'
                        }`}>
                          {room.icon}
                        </div>
                        
                        <div className="flex-1 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-serif font-bold text-lg ${
                              activeRoom === key ? 'text-metallic-gold' : 'text-white'
                            }`}>
                              {room.name}
                            </h3>
                            <span className="text-xs text-metallic-gold/60">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <p className="text-sm text-soft-cream/60">{room.subtitle}</p>
                          
                          {/* Capacity Tag */}
                          <div className="flex items-center mt-2 space-x-2">
                            <Users className="w-3 h-3 text-metallic-gold/40" />
                            <span className="text-xs text-metallic-gold/40">{room.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Viewer - Palace Worthy */}
            <div className="lg:col-span-8">
              {activeRoom && (
                <div
                  key={activeRoom}
                  className="relative"
                >
                  {/* Main Image Container */}
                  <div className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-metallic-gold/20">
                    <img
                      src={tourRooms[activeRoom].gallery[activeImageIndex]}
                      alt={tourRooms[activeRoom].name}
                      className="w-full h-full object-cover"
                      style={{ transform: `scale(${zoomLevel})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Control Bar - Floating Luxury */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/20">
                      <div className="flex items-center justify-between">
                        {/* Room Info */}
                        <div>
                          <h4 className="text-metallic-gold font-serif text-xl font-bold mb-1">
                            {tourRooms[activeRoom].name}
                          </h4>
                          <p className="text-soft-cream/60 text-sm">{tourRooms[activeRoom].subtitle}</p>
                        </div>

                        {/* Controls */}
                        <div className="flex space-x-3">
                          <button
                            onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Minimize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Maximize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-12 h-12 bg-metallic-gold rounded-xl flex items-center justify-center text-royal-maroon hover:bg-metallic-gold/90 transition-all"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Gallery Thumbnails */}
                      <div className="flex mt-4 space-x-2">
                        {tourRooms[activeRoom].gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                              activeImageIndex === idx 
                                ? 'border-metallic-gold scale-110' 
                                : 'border-transparent opacity-50 hover:opacity-100'
                            } hover:scale-105`}
                          >
                            <img src={img} alt={`View ${idx + 1}`} className="w-16 h-16 object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Feature Hotspots */}
                    {tourRooms[activeRoom].features.map((feature, idx) => (
                      <div
                        key={feature}
                        className="absolute"
                        style={{ top: `${20 + idx * 10}%`, left: `${30 + idx * 8}%` }}
                      >
                        <div 
                          className="relative group/hotspot"
                          onMouseEnter={() => setShowFeature(feature)}
                          onMouseLeave={() => setShowFeature(null)}
                        >
                          <div className="w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center cursor-pointer shadow-xl animate-pulse">
                            <div className="w-3 h-3 bg-royal-maroon rounded-full"></div>
                          </div>
                          
                          {showFeature === feature && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-black/90 backdrop-blur-sm text-metallic-gold px-4 py-2 rounded-xl text-sm border border-metallic-gold/30">
                              {feature}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Like Button */}
                    <button
                      onClick={() => setIsLiked(prev => ({ ...prev, [activeRoom]: !prev[activeRoom] }))}
                      className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center border border-metallic-gold/20 hover:bg-metallic-gold/20 transition-all"
                    >
                      <Heart className={`w-5 h-5 ${
                        isLiked[activeRoom] ? 'fill-red-500 text-red-500' : 'text-metallic-gold'
                      }`} />
                    </button>
                  </div>

                  {/* Room Details Card */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Description */}
                    <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <h4 className="text-metallic-gold font-serif text-2xl mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-3" />
                        The Experience
                      </h4>
                      <p className="text-soft-cream/70 leading-relaxed mb-6">
                        {tourRooms[activeRoom].longDescription}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {tourRooms[activeRoom].features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
                            <span className="text-sm text-soft-cream/60">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-2xl p-8 border border-metallic-gold/20">
                      <h4 className="text-metallic-gold font-serif text-xl mb-6">Details</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Capacity</span>
                          <span className="text-white font-semibold">{tourRooms[activeRoom].capacity}</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Ambience</span>
                          <span className="text-white font-semibold">{tourRooms[activeRoom].ambience}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-soft-cream/60">Best For</span>
                          <span className="text-white font-semibold text-right">{tourRooms[activeRoom].bestFor}</span>
                        </div>
                      </div>

                      <button
                        className="w-full mt-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/80 text-royal-maroon font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                      >
                        <span>Book This Experience</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Poetry Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-metallic-gold" />
            </div>
            
            <span className="text-metallic-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              Nature's Palette
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-metallic-gold mb-6">
              Seasonal Poetry
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-2xl mx-auto">
              Watch our spaces transform with the rhythm of seasons, each bringing its own magic
            </p>
          </div>

          {/* Season Selector - Luxury Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-metallic-gold/20">
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(seasons).map(([key, season]) => (
                  <button
                    key={key}
                    onClick={() => handleSeasonChange(key)}
                    className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden hover:scale-105 ${
                      currentSeason === key
                        ? 'text-white'
                        : 'text-soft-cream/60 hover:text-metallic-gold'
                    }`}
                  >
                    {currentSeason === key && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${season.color}`}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-xl">{season.icon}</span>
                      <span>{season.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Seasonal Display - Premium Showcase */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-metallic-gold/20">
            {!isTransitioning && (
              <div
                key={currentSeason}
                className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
              >
                {/* Image Gallery */}
                <div className="absolute inset-0 grid grid-cols-2">
                  {seasons[currentSeason].images.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${seasons[currentSeason].name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                    </div>
                  ))}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8 max-w-3xl">
                    <div className="text-7xl mb-6 flex justify-center">
                      {seasons[currentSeason].icon}
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                      {seasons[currentSeason].name}
                    </h3>
                    
                    <p className="text-2xl mb-6 font-light drop-shadow-lg">
                      {seasons[currentSeason].description}
                    </p>
                    
                    <div className="w-24 h-0.5 bg-metallic-gold mx-auto mb-6"></div>
                    
                    <p className="text-lg text-white/90 drop-shadow-lg">
                      {seasons[currentSeason].details}
                    </p>
                  </div>
                </div>

                {/* Seasonal Specials Card */}
                <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20 max-w-xs">
                  <h4 className="font-serif text-xl mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-metallic-gold" />
                    Seasonal Highlights
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                      Curated seasonal menu
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                      Themed decorations
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full mr-3"></div>
                      Exclusive cocktail pairings
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Season Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {Object.entries(seasons).map(([key, season]) => (
              <div
                key={key}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  currentSeason === key ? 'ring-2 ring-metallic-gold' : ''
                }`}
                onClick={() => handleSeasonChange(key)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-90`}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                <div className="relative p-6 text-white">
                  <div className="text-4xl mb-3">{season.icon}</div>
                  <h4 className="font-serif text-xl font-bold mb-2">{season.name}</h4>
                  <p className="text-sm text-white/80 line-clamp-2">{season.description}</p>
                  
                  <div className="h-0.5 bg-metallic-gold mt-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/90 text-royal-maroon p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group hover:scale-110"
      >
        <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-royal-maroon text-metallic-gold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Book a Private Tour
        </span>
      </button>


    {/* ==================== ROYAL SIGNATURE COLLECTION ==================== */}
<section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
  {/* Opulent Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M60 10 L110 60 L60 110 L10 60 L60 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
      backgroundSize: '120px 120px'
    }} />
  </div>

  {/* Floating Gold Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-metallic-gold/30 to-transparent"
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `floatOrb ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
          filter: 'blur(2px)'
        }}
      />
    ))}
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Section Header with Royal Crest */}
    <div className="text-center mb-16">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-metallic-gold rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="relative w-32 h-32">
          {/* Rotating Ring */}
          <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_15s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
          <div className="absolute inset-4 border-2 border-metallic-gold/60 rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
            <Crown className="w-12 h-12 text-charcoal" />
          </div>
        </div>
      </div>
      
      <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
        <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
          The Royal Signature
        </span>
      </h2>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold" />
        <Diamond className="w-6 h-6 text-metallic-gold animate-pulse" />
        <div className="w-20 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold" />
      </div>
      
      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
        Curated masterpieces from our royal collection, each piece tells a story of heritage and artistry
      </p>
    </div>

    {/* Signature Pieces Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {[
        {
          title: 'The Maharaja\'s Throne',
          artist: 'M.F. Hussain',
          year: '1985',
          value: '₹4.8 Cr',
          image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          gradient: 'from-amber-500 to-amber-600'
        },
        {
          title: 'Mughal Garden',
          artist: 'Ustad Mansur',
          year: '1720',
          value: '₹3.2 Cr',
          image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          gradient: 'from-emerald-500 to-green-600'
        },
        {
          title: 'Royal Procession',
          artist: 'Raja Ravi Varma',
          year: '1895',
          value: '₹2.5 Cr',
          image: 'https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          gradient: 'from-rose-500 to-pink-600'
        },
        {
          title: 'Tanjore Goddess',
          artist: 'Anonymous',
          year: '1820',
          value: '₹1.8 Cr',
          image: 'https://images.unsplash.com/photo-1531913764164-f2af33884fc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          gradient: 'from-purple-500 to-indigo-600'
        }
      ].map((piece, index) => (
        <div key={index} className="group relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${piece.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img src={piece.image} alt={piece.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              
              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-metallic-gold/30">
                <span className="text-metallic-gold font-bold text-sm">{piece.year}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{piece.title}</h3>
              <p className="text-metallic-gold text-sm mb-4">{piece.artist}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-metallic-gold">{piece.value}</span>
                <button className="px-4 py-2 bg-metallic-gold/20 rounded-xl text-metallic-gold text-sm font-bold hover:bg-metallic-gold hover:text-charcoal transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Curator's Corner */}
    <div className="relative bg-gradient-to-br from-royal-maroon/80 to-[#0a0a0a] rounded-3xl p-12 border-2 border-metallic-gold/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-metallic-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl" />
      
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-charcoal" />
            </div>
            <div>
              <p className="text-metallic-gold text-sm tracking-wider">CURATOR'S CHOICE</p>
              <h3 className="text-3xl font-bold text-white">Dr. Anjali Sharma</h3>
            </div>
          </div>
          
          <p className="text-soft-cream/80 text-lg mb-6 leading-relaxed">
            "Each piece in our collection has been carefully selected to represent the pinnacle of Indian artistry. 
            From 18th-century miniatures to contemporary masterpieces, these works tell the story of our rich cultural heritage."
          </p>
          
          <div className="flex gap-4">
            <button className="group px-6 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2">
              <span>Schedule a Viewing</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl">
              <img 
                src={`https://images.unsplash.com/photo-${i === 0 ? '1578302758063' : i === 1 ? '1579783902614' : i === 2 ? '1547891654' : '1531913764164'}-${i === 0 ? '0ef3e048ca89' : i === 1 ? 'a3fb3927b6a5' : i === 2 ? 'e66ed7ebb968' : 'f2af33884fc5'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                alt="Art"
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==================== ROYAL TESTIMONIALS ==================== */}
<section className="py-24 px-4 relative overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Luxury Dining"
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
  </div>

  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <Star className="w-16 h-16 text-metallic-gold mx-auto mb-6" />
      <h2 className="text-5xl md:text-6xl font-serif font-bold text-metallic-gold mb-6">
        Voices of Royalty
      </h2>
      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
        What our distinguished guests say about their experience at Tavisha
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Maharaja Yadvendra Singh',
          title: 'Royal Patron',
          quote: 'Tavisha reminds me of my ancestral palace kitchens. The authenticity of flavors is truly remarkable.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Mrs. Anita Singhania',
          title: 'Business Tycoon',
          quote: 'The hospitality is unparalleled. Every visit feels like a celebration, and the staff remembers your preferences.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1494790108777-383fd5c8a4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Mr. Vikram Rathore',
          title: 'Industrialist',
          quote: 'I\'ve dined at the world\'s best restaurants, but Tavisha has a soul. It\'s not just food; it\'s an emotion.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        }
      ].map((testimonial, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 left-8 text-7xl text-metallic-gold/20 font-serif">"</div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-metallic-gold" />
              <div>
                <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                <p className="text-metallic-gold text-sm">{testimonial.title}</p>
              </div>
            </div>
            
            <p className="text-soft-cream/80 mb-6 italic">"{testimonial.quote}"</p>
            
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
<section className="py-24 px-4 relative overflow-hidden">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Private Dining"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
  </div>

  <div className="max-w-7xl mx-auto relative">
    <div className="max-w-2xl">
      <div className="inline-block p-4 bg-metallic-gold/20 rounded-2xl mb-6">
        <Diamond className="w-10 h-10 text-metallic-gold" />
      </div>
      
      <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
        The Private
        <br />
        <span className="text-metallic-gold">Pavilions</span>
      </h2>
      
      <p className="text-xl text-soft-cream/80 mb-8 leading-relaxed">
        Intimate dining experiences in our exclusive private chambers, each designed to offer the utmost privacy and luxury
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { name: 'Maharaja Suite', capacity: '8 guests', price: '₹50,000' },
          { name: 'Garden Pavilion', capacity: '12 guests', price: '₹35,000' },
          { name: 'Wine Vault', capacity: '6 guests', price: '₹75,000' },
          { name: 'Celestial Deck', capacity: '10 guests', price: '₹60,000' }
        ].map((item, index) => (
          <div key={index} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all hover:-translate-y-1">
            <h4 className="text-metallic-gold font-bold mb-1">{item.name}</h4>
            <p className="text-soft-cream/60 text-sm">{item.capacity}</p>
            <p className="text-white font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
      
      <button className="group px-10 py-5 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3">
        <span>Inquire About Private Dining</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
</section>

{/* ==================== ROYAL MEMBERSHIP ==================== */}
<section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <Crown className="w-16 h-16 text-metallic-gold mx-auto mb-6" />
      <h2 className="text-5xl md:text-6xl font-serif font-bold text-metallic-gold mb-6">
        The Royal Circle
      </h2>
      <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
        Join an elite community of connoisseurs who appreciate the finest things in life
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          tier: 'Silver',
          price: '₹50,000',
          features: ['Priority reservations', '2 complimentary menus', '10% dining discount'],
          gradient: 'from-gray-400 to-gray-500',
          icon: '🥈'
        },
        {
          tier: 'Gold',
          price: '₹1,50,000',
          features: ['All Silver benefits', '4 wine tastings', 'Private dining access', '20% discount'],
          gradient: 'from-metallic-gold to-amber-600',
          icon: '👑',
          popular: true
        },
        {
          tier: 'Platinum',
          price: '₹3,00,000',
          features: ['All Gold benefits', 'Unlimited private dining', '24/7 concierge', 'Chauffeur service'],
          gradient: 'from-purple-400 to-indigo-500',
          icon: '💎'
        }
      ].map((tier, index) => (
        <div key={index} className="group relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
          
          <div className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 ${
            tier.popular ? 'border-metallic-gold' : 'border-metallic-gold/20 hover:border-metallic-gold/40'
          } transition-all duration-500 hover:-translate-y-4`}>
            
            {tier.popular && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-metallic-gold to-amber-600 px-8 py-3 rounded-full whitespace-nowrap">
                <span className="text-sm font-bold text-charcoal">MOST POPULAR</span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">{tier.icon}</span>
              <h3 className="text-3xl font-bold text-white mb-2">{tier.tier}</h3>
              <div className="text-4xl font-bold text-metallic-gold mb-2">{tier.price}</div>
              <p className="text-soft-cream/60">/year</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-soft-cream/80">
                  <CheckCircle className="w-5 h-5 text-metallic-gold" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 ${
              tier.popular 
                ? 'bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal'
                : 'border-2 border-metallic-gold/30 text-metallic-gold hover:bg-metallic-gold hover:text-charcoal'
            } rounded-xl font-bold transition-all hover:scale-105`}>
              {tier.popular ? 'JOIN NOW' : 'ENQUIRE'}
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Membership Benefits */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
      {[
        { icon: <Calendar className="w-6 h-6" />, text: 'Priority Booking' },
        { icon: <Gift className="w-6 h-6" />, text: 'Exclusive Gifts' },
        { icon: <Users className="w-6 h-6" />, text: 'Private Events' },
        { icon: <MapPin className="w-6 h-6" />, text: 'Global Access' }
      ].map((benefit, index) => (
        <div key={index} className="text-center group">
          <div className="w-16 h-16 mx-auto bg-metallic-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-metallic-gold group-hover:text-charcoal">
            <div className="text-metallic-gold group-hover:text-charcoal transition-colors">
              {benefit.icon}
            </div>
          </div>
          <p className="text-soft-cream/80 text-sm">{benefit.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Add these animation keyframes to your existing style tag */}
<style jsx>{`
  @keyframes floatOrb {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(0) translateX(20px); }
    75% { transform: translateY(20px) translateX(10px); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>
      
    </div>
  );
};

export default GalleryPage;