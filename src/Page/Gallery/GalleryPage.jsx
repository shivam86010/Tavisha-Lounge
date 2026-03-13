import { useState, useEffect } from "react";
import {
  ChevronRight,
  Maximize2,
  Minimize2,
  Gem,
  Wine,
  Wind,
  Sun,
  Cloud,
  Play,
  Pause,
  Heart,
  Star,
  Users,
  Camera,
  Eye,
  Crown,
  Sparkles,
  Diamond,
  PartyPopper,
  ChefHat,
  Flame,
  Leaf,
  Gift,
  Snowflake,
} from "lucide-react";

const GalleryPage = () => {
  const [activeRoom, setActiveRoom] = useState("main-dining");
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const [showFeature, setShowFeature] = useState(null);
  const [isHoveringRoom, setIsHoveringRoom] = useState(null);
  const [currentSeason, setCurrentSeason] = useState("spring");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const seasons = {
    spring: {
      name: "Spring Blossom",
      color: "from-emerald-400 via-rose-300 to-amber-200",
      icon: <Leaf className="w-8 h-8" />,
      description: "Where romance blooms with every petal",
      details:
        "Cherry blossom arrangements • Spring tasting menu • Rosé selections",
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    summer: {
      name: "Summer Radiance",
      color: "from-amber-400 via-orange-400 to-rose-400",
      icon: <Sun className="w-8 h-8" />,
      description: "Golden days and luminous nights",
      details: "Citrus infusions • Coastal inspired decor • Chilled delicacies",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    monsoon: {
      name: "Monsoon Mystique",
      color: "from-slate-700 via-blue-800 to-purple-700",
      icon: <Cloud className="w-8 h-8" />,
      description: "Dramatic skies, intimate vibes",
      details: "Truffle specialties • Rain-inspired cocktails • Cozy corners",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      ],
    },
    winter: {
      name: "Winter Opulence",
      color: "from-slate-300 via-blue-200 to-amber-100",
      icon: <Snowflake className="w-8 h-8" />,
      description: "Where warmth meets winter magic",
      details: "Fireplace settings • Winter truffles • Mulled wine bar",
      images: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      ],
    },
  };

  const tourRooms = {
    "main-dining": {
      name: "The Grand Salon",
      subtitle: "Royal Dining Experience",
      description: "Step into opulence with our magnificent main dining hall.",
      longDescription:
        "Adorned with crystal chandeliers and hand-carved wooden panels, this space transforms every meal into a celebration of luxury.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      features: [
        "Royal Throne Seating",
        "Crystal Chandeliers",
        "Ornate Ceilings",
        "Private Butler Service",
      ],

      ambience: "Formal Elegant",
      bestFor: "Wedding Receptions, Gala Dinners",
      icon: <Crown className="w-6 h-6" />,
    },
    "private-dining": {
      name: "The Amber Room",
      subtitle: "Intimate Luxury",
      description: "An exclusive enclave for discerning guests.",
      longDescription:
        "Wrapped in warm amber tones and plush velvet, this intimate space features a private fireplace.",
      image:
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1617098474202-0d0d7f60c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      features: [
        "Private Fireplace",
        "Wine Cellar Access",
        "Personal Chef",
        "Dedicated Sommelier",
      ],

      ambience: "Intimate Cozy",
      bestFor: "Business Dinners, Anniversary Celebrations",
      icon: <PartyPopper className="w-6 h-6" />,
    },
    "lounge-area": {
      name: "The Velvet Lounge",
      subtitle: "Artful Sophistication",
      description: "Where mixology meets artistry.",
      longDescription:
        "Sink into plush velvet seating while master mixologists craft signature cocktails.",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1572111509797-5e9a2e8c40b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      features: [
        "Gold Leaf Bar",
        "Live Acoustic Stage",
        "Signature Cocktails",
        "Cigar Lounge",
      ],

      ambience: "Sophisticated Casual",
      bestFor: "Cocktail Parties, Networking Events",
      icon: <Wine className="w-6 h-6" />,
    },
    "outdoor-terrace": {
      name: "The Sky Terrace",
      subtitle: "Al Fresco Grandeur",
      description: "Dine under the stars.",
      longDescription:
        "Surrounded by lush greenery and twinkling fairy lights, this open-air terrace offers panoramic views.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      features: [
        "Infinity Edge",
        "Fire Pits",
        "Heated Flooring",
        "Retractable Roof",
      ],

      ambience: "Romantic Open-air",
      bestFor: "Sunset Dinners, Garden Parties",
      icon: <Flame className="w-6 h-6" />,
    },
    "chef-table": {
      name: "The Culinary Theater",
      subtitle: "Epicurean Journey",
      description: "Witness culinary magic unfold.",
      longDescription:
        "Positioned at the heart of our kitchen, this marble counter seats you front-row to culinary artistry.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      features: [
        "Chef Interaction",
        "Custom Menus",
        "Wine Pairing",
        "Kitchen Tour",
      ],

      ambience: "Interactive Exclusive",
      bestFor: "Food Enthusiasts, Special Occasions",
      icon: <ChefHat className="w-6 h-6" />,
    },
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L61.6 35.8L90 40L70 60L75.8 90L50 75L24.2 90L30 60L10 40L38.4 35.8L50 10z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
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
            <button className="group relative px-10 py-4 bg-metallic-gold text-royal-maroon font-semibold rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Experience Luxury</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-10 py-4 border-2 border-metallic-gold text-metallic-gold font-semibold rounded-full hover:bg-metallic-gold/10 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              Virtual Tour
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-metallic-gold/60 text-sm tracking-widest">
                DISCOVER
              </span>
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
              <span className="text-metallic-gold/60 tracking-[0.3em] text-sm">
                ROYAL COLLECTION
              </span>
              <div className="w-12 h-px bg-metallic-gold/40"></div>
            </div>

            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto font-light">
              Journey through our meticulously curated spaces, each telling its
              own story of luxury and refinement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Room Selector - Vertical Timeline Style */}
            <div className="lg:col-span-4">
              <div className="space-y-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-metallic-gold/40 via-metallic-gold/20 to-transparent"></div>

                {Object.entries(tourRooms).map(([key, room], index) => (
                  <div key={key} className="relative">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-8 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 transition-all duration-500 ${
                        activeRoom === key
                          ? "border-metallic-gold bg-metallic-gold shadow-lg shadow-metallic-gold/50"
                          : "border-metallic-gold/30 bg-transparent"
                      }`}
                      style={{ top: "2rem" }}
                    />

                    <button
                      onClick={() => setActiveRoom(key)}
                      onMouseEnter={() => setIsHoveringRoom(key)}
                      onMouseLeave={() => setIsHoveringRoom(null)}
                      className={`w-full ml-16 p-6 rounded-2xl transition-all duration-500 relative overflow-hidden ${
                        activeRoom === key
                          ? "bg-gradient-to-r from-metallic-gold/20 to-transparent border border-metallic-gold/50 shadow-2xl"
                          : "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {/* Hover Effect */}
                      {isHoveringRoom === key && (
                        <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold/10 to-transparent" />
                      )}

                      <div className="flex items-center space-x-4 relative z-10">
                        <div
                          className={`p-4 rounded-xl ${
                            activeRoom === key
                              ? "bg-metallic-gold text-royal-maroon"
                              : "bg-metallic-gold/10 text-metallic-gold"
                          }`}
                        >
                          {room.icon}
                        </div>

                        <div className="flex-1 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h3
                              className={`font-serif font-bold text-lg ${
                                activeRoom === key
                                  ? "text-metallic-gold"
                                  : "text-white"
                              }`}
                            >
                              {room.name}
                            </h3>
                            <span className="text-xs text-metallic-gold/60">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p className="text-sm text-soft-cream/60">
                            {room.subtitle}
                          </p>
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
                <div key={activeRoom} className="relative">
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
                          <p className="text-soft-cream/60 text-sm">
                            {tourRooms[activeRoom].subtitle}
                          </p>
                        </div>

                        {/* Controls */}
                        <div className="flex space-x-3">
                          <button
                            onClick={() =>
                              setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
                            }
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Minimize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))
                            }
                            className="w-12 h-12 bg-metallic-gold/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold/20 transition-all border border-metallic-gold/20"
                          >
                            <Maximize2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-12 h-12 bg-metallic-gold rounded-xl flex items-center justify-center text-royal-maroon hover:bg-metallic-gold/90 transition-all"
                          >
                            {isPlaying ? (
                              <Pause className="w-5 h-5" />
                            ) : (
                              <Play className="w-5 h-5" />
                            )}
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
                                ? "border-metallic-gold scale-110"
                                : "border-transparent opacity-50 hover:opacity-100"
                            } hover:scale-105`}
                          >
                            <img
                              src={img}
                              alt={`View ${idx + 1}`}
                              className="w-16 h-16 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Like Button */}
                    <button
                      onClick={() =>
                        setIsLiked((prev) => ({
                          ...prev,
                          [activeRoom]: !prev[activeRoom],
                        }))
                      }
                      className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center border border-metallic-gold/20 hover:bg-metallic-gold/20 transition-all"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isLiked[activeRoom]
                            ? "fill-red-500 text-red-500"
                            : "text-metallic-gold"
                        }`}
                      />
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
                          <div
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
                            <span className="text-sm text-soft-cream/60">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="bg-gradient-to-br from-metallic-gold/10 to-transparent rounded-2xl p-8 border border-metallic-gold/20">
                      <h4 className="text-metallic-gold font-serif text-xl mb-6">
                        Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Capacity</span>
                          <span className="text-white font-semibold">
                            {tourRooms[activeRoom].capacity}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-metallic-gold/20">
                          <span className="text-soft-cream/60">Ambience</span>
                          <span className="text-white font-semibold">
                            {tourRooms[activeRoom].ambience}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-soft-cream/60">Best For</span>
                          <span className="text-white font-semibold text-right">
                            {tourRooms[activeRoom].bestFor}
                          </span>
                        </div>
                      </div>

                      <button className="w-full mt-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/80 text-royal-maroon font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
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
      <section className="py-10 px-4 relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <Sparkles className="w-12 h-12 text-metallic-gold" />
            </div>

            <span className="text-metallic-gold uppercase tracking-[0.3em] text-sm font-semibold  block">
              Nature's Palette
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-metallic-gold mb-2">
              Seasonal Poetry
            </h2>
            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Watch our spaces transform with the rhythm of seasons, each
              bringing its own magic
            </p>
          </div>

          {/* Season Selector - Luxury Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-metallic-gold/20">
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(seasons).map(([key, season]) => (
                  <button
                    key={key}
                    onClick={() => handleSeasonChange(key)}
                    className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden hover:scale-105 ${
                      currentSeason === key
                        ? "text-white"
                        : "text-soft-cream/60 hover:text-metallic-gold"
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
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-metallic-gold/20">
            {!isTransitioning && (
              <div
                key={currentSeason}
                className={`absolute inset-0 bg-gradient-to-br ${seasons[currentSeason].color}`}
              >
                {/* Image Gallery */}
                <div className="absolute inset-0 grid grid-cols-2">
                  {seasons[currentSeason].images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
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
                <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md rounded-2xl p-5 text-white border border-white/20 max-w-xs">
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
                  currentSeason === key ? "ring-2 ring-metallic-gold" : ""
                }`}
                onClick={() => handleSeasonChange(key)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-90`}
                ></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                <div className="relative p-6 text-white">
                  <div className="text-4xl mb-3">{season.icon}</div>
                  <h4 className="font-serif text-xl font-bold mb-2">
                    {season.name}
                  </h4>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {season.description}
                  </p>

                  <div className="h-0.5 bg-metallic-gold mt-4 w-0 group-hover:w-10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-metallic-gold to-metallic-gold/90 text-royal-maroon p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group hover:scale-110">
        <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-royal-maroon text-metallic-gold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Book a Private Tour
        </span>
      </button>

      {/* ==================== ROYAL SIGNATURE COLLECTION ==================== */}
      <section className="py-12 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M60 10 L110 60 L60 110 L10 60 L60 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-metallic-gold rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-32 h-32">
                <div
                  className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_15s_linear_infinite]"
                  style={{ borderStyle: "dotted" }}
                />
                <div className="absolute inset-4 border-2 border-metallic-gold/60 rounded-full" />
                <div className="absolute inset-8 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
                  <Crown className="w-12 h-12 text-charcoal" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-3">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                The Royal Signature
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold" />
              <Diamond className="w-6 h-6 text-metallic-gold animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold" />
            </div>

            <p className="text-xl text-soft-cream/70 max-w-4xl mx-auto">
              Curated masterpieces from our royal collection, each piece tells a
              story of heritage and artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "The Maharaja's Throne",
                artist: "M.F. Hussain",
                year: "1985",
                value: "₹4.8 Cr",
                image:
                  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-amber-500 to-amber-600",
              },
              {
                title: "Mughal Garden",
                artist: "Ustad Mansur",
                year: "1720",
                value: "₹3.2 Cr",
                image:
                  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-emerald-500 to-green-600",
              },
              {
                title: "Royal Procession",
                artist: "Raja Ravi Varma",
                year: "1895",
                value: "₹2.5 Cr",
                image:
                  "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-rose-500 to-pink-600",
              },
              {
                title: "Tanjore Goddess",
                artist: "Anonymous",
                year: "1820",
                value: "₹1.8 Cr",
                image:
                  "https://images.unsplash.com/photo-1531913764164-f2af33884fc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((piece, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${piece.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
                />

                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={piece.image}
                      alt={piece.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full border border-metallic-gold/30">
                      <span className="text-metallic-gold font-bold text-sm">
                        {piece.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {piece.title}
                    </h3>
                    <p className="text-metallic-gold text-sm mb-4">
                      {piece.artist}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-metallic-gold">
                        {piece.value}
                      </span>
                      <button className="px-4 py-2 bg-metallic-gold/20 rounded-xl text-metallic-gold text-sm font-bold hover:bg-metallic-gold hover:text-charcoal transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-royal-maroon/80 to-[#0a0a0a] rounded-3xl p-8 border-2 border-metallic-gold/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-metallic-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-charcoal" />
                  </div>
                  <div>
                    <p className="text-metallic-gold text-sm tracking-wider">
                      CURATOR'S CHOICE
                    </p>
                    <h3 className="text-3xl font-bold text-white">
                      Dr. Anjali Sharma
                    </h3>
                  </div>
                </div>

                <p className="text-soft-cream/80 text-lg mb-6 leading-relaxed">
                  "Each piece in our collection has been carefully selected to
                  represent the pinnacle of Indian artistry. From 18th-century
                  miniatures to contemporary masterpieces, these works tell the
                  story of our rich cultural heritage."
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
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-${i === 0 ? "1578302758063" : i === 1 ? "1579783902614" : i === 2 ? "1547891654" : "1531913764164"}-${i === 0 ? "0ef3e048ca89" : i === 1 ? "a3fb3927b6a5" : i === 2 ? "e66ed7ebb968" : "f2af33884fc5"}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                      alt="Art"
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center">
        {/* Cinematic Background with Parallax */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Private Dining"
            className="w-full h-full object-cover scale-105 transition-transform duration-[20s] group-hover:scale-110"
          />
          {/* Multi-layered Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30"></div>
        </div>

        {/* Ornate Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M60 10 L110 60 L60 110 L10 60 L60 10" stroke="%23D4AF37" fill="none" stroke-width="1"/%3E%3C/svg%3E")',
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Floating Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64">
            <div className="absolute inset-0 border-8 border-metallic-gold/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border-4 border-metallic-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-24 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-full blur-2xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative">
              {/* Royal Crest Animation */}
              <div className="relative w-24 h-24 mb-8">
                <div
                  className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_10s_linear_infinite]"
                  style={{ borderStyle: "dotted" }}
                />
                <div className="absolute inset-3 border-2 border-metallic-gold/50 rounded-full animate-pulse" />
                <div className="absolute inset-6 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-charcoal" />
                </div>

                {/* Orbiting Dots */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-metallic-gold rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 60}deg) translateX(40px)`,
                      animation: `orbitPulse 3s ease-in-out infinite ${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                The Private
                <br />
                <span className="bg-gradient-to-r from-metallic-gold via-amber-400 to-metallic-gold bg-clip-text text-transparent">
                  Pavilions
                </span>
              </h2>

              {/* Decorative Divider */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-20 h-px bg-gradient-to-r from-metallic-gold to-transparent"></div>
                <Gem className="w-5 h-5 text-metallic-gold" />
                <div className="w-20 h-px bg-gradient-to-l from-metallic-gold to-transparent"></div>
              </div>

              <p className="text-xl text-soft-cream/90 mb-6 leading-relaxed max-w-xl">
                Step into a world of unparalleled luxury where every detail is
                crafted for royalty. Our exclusive private chambers offer the
                perfect setting for your most intimate celebrations.
              </p>

              {/* Luxury Stats */}
              <div className="flex gap-8 mb-6">
                <div>
                  <div className="text-4xl font-bold text-metallic-gold mb-1">
                    4
                  </div>
                  <div className="text-sm text-soft-cream/60">
                    Exclusive Suites
                  </div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-metallic-gold/50 to-transparent"></div>
                <div>
                  <div className="text-4xl font-bold text-metallic-gold mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-soft-cream/60">
                    Butler Service
                  </div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-metallic-gold/50 to-transparent"></div>
                <div>
                  <div className="text-4xl font-bold text-metallic-gold mb-1">
                    5★
                  </div>
                  <div className="text-sm text-soft-cream/60">
                    Michelin Chef
                  </div>
                </div>
              </div>

              <button className="group relative px-12 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-metallic-gold/30 hover:scale-105 flex items-center gap-3">
                <span className="relative z-10">
                  Inquire About Private Dining
                </span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Right Content - Pavilion Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "Maharaja Suite",
                  capacity: "8 guests",
                  price: "₹50,000",
                  icon: "👑",
                  features: ["Personal Butler", "Antique Thrones"],
                  gradient: "from-amber-500 to-amber-600",
                },
                {
                  name: "Garden Pavilion",
                  capacity: "12 guests",
                  price: "₹35,000",
                  icon: "🌺",
                  features: ["Fountain Views", "Fairy Lights"],
                  gradient: "from-emerald-500 to-green-600",
                },
                {
                  name: "Wine Vault",
                  capacity: "6 guests",
                  price: "₹75,000",
                  icon: "🍷",
                  features: ["Sommelier", "Rare Vintages"],
                  gradient: "from-rose-500 to-pink-600",
                },
                {
                  name: "Celestial Deck",
                  capacity: "10 guests",
                  price: "₹60,000",
                  icon: "✨",
                  features: ["Stargazing", "Astronomer"],
                  gradient: "from-purple-500 to-indigo-600",
                },
              ].map((item, index) => (
                <div key={index} className="group relative perspective">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
                  />

                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-metallic-gold/30 hover:border-metallic-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-500`}
                    >
                      {item.icon}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-soft-cream/70 text-sm mb-2">
                      {item.capacity}
                    </p>

                    {/* Features */}
                    <div className="flex gap-2 mb-3">
                      {item.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white/10 rounded-full text-soft-cream/80"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <p className="text-2xl font-bold text-metallic-gold mb-3">
                      {item.price}
                    </p>

                    {/* View Details Button */}
                    <button className="w-full py-2 bg-white/5 border border-metallic-gold/30 rounded-xl text-metallic-gold text-sm font-bold hover:bg-metallic-gold hover:text-charcoal transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-10 right-10 flex gap-3">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-metallic-gold/30 animate-pulse">
            <span className="text-metallic-gold text-sm">
              ✨ Limited Availability
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-metallic-gold/30">
            <span className="text-metallic-gold text-sm">
              👑 Royal Treatment
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 relative overflow-hidden">
        {/* Opulent Background with Gold Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2a] to-[#0a0a0a]"></div>

          {/* Gold Geometric Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10L110 60L60 110L10 60L60 10' stroke='%23D4AF37' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Royal Crest Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-4">
              {/* Animated Crest */}
              <div className="relative w-32 h-32 mx-auto">
                <div
                  className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-[spin_15s_linear_infinite]"
                  style={{ borderStyle: "dotted" }}
                />
                <div className="absolute inset-3 border-2 border-metallic-gold/50 rounded-full animate-pulse" />
                <div className="absolute inset-6 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
                  <Crown className="w-10 h-10 text-charcoal" />
                </div>
              </div>
            </div>

            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block mb-1">
              L'ART DE LA TABLE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 leading-tight">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                The Art of Dining
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold" />
              <Diamond className="w-5 h-5 text-metallic-gold animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold" />
            </div>

            <p className="text-lg md:text-xl text-soft-cream/70 max-w-3xl mx-auto px-4">
              Where culinary excellence meets architectural splendor in perfect
              harmony
            </p>
          </div>

          {/* Main Feature - Grand Salon with Parallax */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block p-3 bg-gradient-to-br from-metallic-gold/20 to-amber-600/20 rounded-xl backdrop-blur-sm border border-metallic-gold/30">
                <Sparkles className="w-6 h-6 text-metallic-gold" />
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                The <span className="text-metallic-gold">Grand Salon</span>
              </h3>

              <p className="text-base md:text-lg text-soft-cream/80 leading-relaxed">
                Step into a realm of timeless elegance where crystal chandeliers
                dance with golden light. Our most prestigious dining room
                features hand-carved ceilings, original 18th-century artwork,
                and an atmosphere that transforms every meal into a celebration.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-4 gap-4 py-4">
                {[
                  { label: "Seating Capacity", value: "80 guests" },
                  { label: "Private Rooms", value: "4 suites" },
                  { label: "Michelin Stars", value: "3 ★" },
                  { label: "Wine Selection", value: "2,500+" },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-metallic-gold/30 pl-4"
                  >
                    <p className="text-2xl font-bold text-metallic-gold">
                      {feature.value}
                    </p>
                    <p className="text-xs text-soft-cream/60">
                      {feature.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-metallic-gold/30 hover:scale-105 flex items-center gap-2">
                  <span className="relative z-10">Explore Menu</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <button className="px-8 py-3 border-2 border-metallic-gold/30 text-metallic-gold rounded-xl font-bold hover:bg-metallic-gold/10 transition-all duration-300 hover:scale-105">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Right Image with Ornate Frame */}
            <div className="relative order-1 lg:order-2 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700" />

              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Grand Dining Hall"
                  className="w-full h-[400px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Ornate Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-metallic-gold/60 rounded-tl-2xl" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-metallic-gold/60 rounded-tr-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-metallic-gold/60 rounded-bl-2xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-metallic-gold/60 rounded-br-2xl" />
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-metallic-gold/30">
                  <span className="text-metallic-gold text-sm font-bold">
                    Signature Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Culinary Highlights - Luxury Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {[
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: "Michelin-Starred Chefs",
                description:
                  "Led by Chef Antoine Dubois, our culinary team has earned 12 Michelin stars across the globe",
                image:
                  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                color: "from-amber-500 to-amber-600",
                stats: "15+ Master Chefs",
              },
              {
                icon: <Wine className="w-8 h-8" />,
                title: "Curated Wine Cellar",
                description:
                  "Temperature-controlled cellar housing rare vintages dating back to 1875",
                image:
                  "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
                color: "from-rose-500 to-pink-600",
                stats: "2,500+ Labels",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Live Cooking Theaters",
                description:
                  "Interactive dining experiences where chefs create culinary masterpieces tableside",
                image:
                  "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
                color: "from-emerald-500 to-green-600",
                stats: "4 Theaters",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-3xl overflow-hidden border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                    {/* Stats Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-metallic-gold/30">
                      <span className="text-metallic-gold text-xs font-bold">
                        {item.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-metallic-gold/20 to-amber-600/20 rounded-xl">
                        <div className="text-metallic-gold">{item.icon}</div>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-soft-cream/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <button className="w-full py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-metallic-gold text-sm font-bold hover:bg-gradient-to-r hover:from-metallic-gold hover:to-amber-600 hover:text-charcoal transition-all duration-300">
                      Discover More
                    </button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-metallic-gold/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Recognition */}
          {/* Awards & Recognition */}
          <div className="relative min-h-[350px] bg-gradient-to-br from-royal-maroon/30 to-[#0a0a0a] rounded-3xl p-8 border border-metallic-gold/30">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="pt-10">
                <span className="text-metallic-gold text-sm tracking-wider mb-3 block">
                  ACCOLADES
                </span>

                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                  A Legacy of{" "}
                  <span className="text-metallic-gold">Excellence</span>
                </h3>

                <p className="text-soft-cream/70 mb-6">
                  Recognized globally for our commitment to culinary perfection
                  and unparalleled service.
                </p>

                {/* Awards */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: "⭐", label: "Michelin Star", year: "2023" },
                    { icon: "🏆", label: "Best Restaurant", year: "2024" },
                    { icon: "🍷", label: "Wine Spectator", year: "2023" },
                  ].map((award, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-3xl">{award.icon}</span>

                      <div>
                        <p className="text-white font-bold text-sm">
                          {award.label}
                        </p>
                        <p className="text-metallic-gold text-xs">
                          {award.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
                  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
                ].map((url, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden group">
                    <img
                      src={url}
                      alt="Award"
                      className="w-full h-36  object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-amber-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <button className="relative px-10 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                <span>Reserve Your Table</span>
                <Diamond className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-4 relative h-[500px] flex items-center">
        {/* Fullscreen Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Terrace View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-metallic-gold mb-3">
              Dining Above the Clouds
            </h2>

            <p className="text-xl text-soft-cream/80 mb-8 leading-relaxed">
              Perched on the 45th floor, our open-air terrace offers panoramic
              city views, infinity pools, and al fresco dining under the stars.
            </p>

            {/* Experience Features */}
            <div className="space-y-2 mb-6">
              {[
                {
                  icon: <Sun className="w-5 h-5" />,
                  text: "Sunset dining with city skyline views",
                },
                {
                  icon: <Wind className="w-5 h-5" />,
                  text: "Climate-controlled pergolas",
                },
                {
                  icon: <Flame className="w-5 h-5" />,
                  text: "Private fire pit cabanas",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-metallic-gold/10 rounded-full flex items-center justify-center text-metallic-gold">
                    {item.icon}
                  </div>
                  <span className="text-soft-cream/90">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-metallic-gold text-royal-maroon font-semibold rounded-full hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2 group">
                <span>Reserve Terrace Table</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border-2 border-metallic-gold text-metallic-gold font-semibold rounded-full hover:bg-metallic-gold/10 transition-all duration-300">
                View Gallery
              </button>
            </div>

            {/* Weather Indicator */}
            <div className="mt-6 flex items-center space-x-6 text-metallic-gold/60">
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5" />
                <span>24°C</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-5 h-5" />
                <span>Gentle Breeze</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="w-5 h-5" />
                <span>Clear Skies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THE CRYSTAL GALLERY ==================== */}
      <section className="py-10 px-4 relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto relative">
          {/* Section Header with Crystal Design */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-3">
              <span className="bg-gradient-to-r from-metallic-gold via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                The Crystal Gallery
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-metallic-gold to-transparent"></div>
              <Sparkles className="w-6 h-6 text-metallic-gold animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-metallic-gold to-transparent"></div>
            </div>

            <p className="text-xl text-soft-cream/70 max-w-3xl mx-auto">
              Where light dances through crystal and moments become masterpieces
            </p>
          </div>

          {/* Crystal Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: "Morning Light",
                artist: "Elena Rodriguez",
                medium: "Digital Art",
                size: '40" x 60"',
                image:
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-amber-400", "to-rose-400"],
                crystal: "Golden Quartz",
              },
              {
                title: "Midnight Sonata",
                artist: "James Chen",
                medium: "Oil on Canvas",
                size: '36" x 48"',
                image:
                  "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-blue-400", "to-purple-400"],
                crystal: "Sapphire",
              },
              {
                title: "Golden Hour",
                artist: "Sophie Turner",
                medium: "Photography",
                size: '30" x 45"',
                image:
                  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-amber-400", "to-yellow-400"],
                crystal: "Citrine",
              },
              {
                title: "Emerald Dreams",
                artist: "Rajiv Mehta",
                medium: "Mixed Media",
                size: '48" x 48"',
                image:
                  "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-emerald-400", "to-green-400"],
                crystal: "Emerald",
              },
              {
                title: "Ruby Romance",
                artist: "Maria Garcia",
                medium: "Acrylic",
                size: '24" x 36"',
                image:
                  "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-rose-400", "to-red-400"],
                crystal: "Ruby",
              },
              {
                title: "Amethyst Dreams",
                artist: "David Kim",
                medium: "Watercolor",
                size: '20" x 28"',
                image:
                  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                colors: ["from-purple-400", "to-violet-400"],
                crystal: "Amethyst",
              },
            ].map((item, index) => (
              <div key={index} className="group relative perspective">
                {/* Crystal Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Main Card - Crystal Facet Design */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                  {/* Prismatic Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.3) 50%, transparent 70%)`,
                      backgroundSize: "200% 200%",
                      animation: "shine 3s ease-in-out infinite",
                    }}
                  ></div>

                  {/* Image Container with Crystal Frame */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Crystal Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.colors[0]} ${item.colors[1]} mix-blend-overlay opacity-30`}
                    ></div>

                    {/* Crystal Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-metallic-gold/30 flex items-center gap-2">
                      <Gem className="w-4 h-4 text-metallic-gold" />
                      <span className="text-metallic-gold text-xs font-bold">
                        {item.crystal}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-metallic-gold text-sm mb-3">
                      {item.artist}
                    </p>

                    <div className="flex justify-between items-center text-xs text-soft-cream/60 mb-4">
                      <span>{item.medium}</span>
                      <span>{item.size}</span>
                    </div>

                    <button className="w-full py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-metallic-gold text-sm font-bold hover:bg-gradient-to-r hover:from-metallic-gold hover:to-amber-600 hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>View in Crystal Light</span>
                      <Sparkles className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE VELVET GALLERY ==================== */}
      <section className="py-10 px-4 relative overflow-hidden">
        {/* Velvet Texture Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a1a] via-[#1a0a0a] to-[#2a1a1a]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Gallery Pieces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "The Velvet Kiss",
                artist: "Isabella Rossi",
                year: "2024",
                image:
                  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "A study in texture and passion",
                price: "$45,000",
              },
              {
                title: "Midnight Lounge",
                artist: "Victor Noir",
                year: "2023",
                image:
                  "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Abstract expression in deep blues",
                price: "$38,000",
              },
            ].map((art, idx) => (
              <div key={idx} className="group relative h-[500px]">
                {/* Velvet Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-rose-950/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Main Display */}
                <div className="relative h-full bg-gradient-to-b from-rose-900/20 to-rose-950/20 rounded-3xl overflow-hidden border border-rose-800/50 group-hover:border-metallic-gold/40 transition-all duration-500">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>

                  {/* Velvet Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {art.title}
                    </h3>
                    <p className="text-metallic-gold text-lg mb-2">
                      {art.artist} · {art.year}
                    </p>
                    <p className="text-soft-cream/70 mb-4">{art.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-metallic-gold">
                        {art.price}
                      </span>
                      <button className="px-6 py-3 bg-metallic-gold text-charcoal rounded-xl font-bold hover:shadow-2xl transition-all">
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Gold Tassel */}
                  <div className="absolute top-6 right-6 w-16 h-16">
                    <div className="w-2 h-12 bg-metallic-gold mx-auto"></div>
                    <div className="w-8 h-8 bg-metallic-gold rounded-full mx-auto -mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRIVATE DINING SUITES ==================== */}
      <section className="py-10 px-4 relative overflow-hidden">
        {/* Elegant Background with Subtle Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>

          {/* Subtle Damask Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20 Q60 30 50 40 Q40 30 50 20 M50 60 Q60 70 50 80 Q40 70 50 60' stroke='%23D4AF37' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-metallic-gold tracking-[0.3em] text-sm font-bold block mb-1">
              EXCLUSIVE SPACES
            </span>

            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-2">
              <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                Private Dining Suites
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-metallic-gold to-metallic-gold"></div>
              <Diamond className="w-5 h-5 text-metallic-gold animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-metallic-gold to-metallic-gold"></div>
            </div>

            <p className="text-xl text-soft-cream/70 max-w-4xl mx-auto">
              Intimate spaces designed for unforgettable moments, where privacy
              meets unparalleled luxury
            </p>
          </div>

          {/* Main Feature Suite */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Suite Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Presidential Suite"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay with Suite Name */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-metallic-gold/30">
                    <span className="text-metallic-gold text-sm font-bold block mb-1">
                      THE PRESIDENTIAL SUITE
                    </span>
                    <h3 className="text-2xl font-serif text-white">
                      Royal Elegance
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Suite Details */}
            <div className="space-y-2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 p-2 bg-gradient-to-br from-metallic-gold/20 to-amber-600/20 rounded-xl backdrop-blur-sm border border-metallic-gold/30">
                <Crown className="w-6 h-6 text-metallic-gold" />
                <span className="text-metallic-gold text-sm font-bold">
                  FLAGSHIP SUITE
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                The Presidential
                <br />
                <span className="bg-gradient-to-r from-metallic-gold to-amber-400 bg-clip-text text-transparent">
                  Suite
                </span>
              </h3>

              <p className="text-lg text-soft-cream/80 leading-relaxed">
                Our most prestigious private dining room, featuring hand-carved
                wooden panels, a private fireplace, and an exclusive terrace
                with city views. Perfect for high-profile meetings and intimate
                celebrations.
              </p>

              {/* Suite Features */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {[
                  {
                    icon: <Users className="w-5 h-5" />,
                    label: "Capacity",
                    value: "24 guests",
                  },
                  {
                    icon: <ChefHat className="w-5 h-5" />,
                    label: "Personal Chef",
                    value: "Included",
                  },
                  {
                    icon: <Wine className="w-5 h-5" />,
                    label: "Wine Cellar",
                    value: "Private access",
                  },
                  {
                    icon: <Flame className="w-5 h-5" />,
                    label: "Fireplace",
                    value: "Yes",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-metallic-gold/20"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-metallic-gold">{item.icon}</div>
                      <span className="text-metallic-gold font-bold">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-soft-cream/60 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suite Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "The Amber Room",
                capacity: "12 guests",
                feature: "Private Wine Cellar",
                image:
                  "https://images.unsplash.com/photo-1617098474202-0d0d7f60c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-amber-500 to-amber-600",
                icon: "🍷",
              },
              {
                name: "The Garden Pavilion",
                capacity: "18 guests",
                feature: "Private Terrace",
                image:
                  "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-emerald-500 to-green-600",
                icon: "🌿",
              },
              {
                name: "The Library Lounge",
                capacity: "10 guests",
                feature: "Private Bar",
                image:
                  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-rose-500 to-pink-600",
                icon: "📚",
              },
            ].map((suite, idx) => (
              <div key={idx} className="group relative">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${suite.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
                />

                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-metallic-gold/30">
                      <span className="text-2xl">{suite.icon}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-2xl font-serif font-bold text-white mb-2">
                      {suite.name}
                    </h4>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-metallic-gold" />
                        <span className="text-soft-cream/60 text-sm">
                          {suite.capacity}
                        </span>
                      </div>
                      <span className="text-metallic-gold text-sm">
                        {suite.feature}
                      </span>
                    </div>

                    <button className="w-full py-3 bg-white/5 border border-metallic-gold/30 rounded-xl text-metallic-gold text-sm font-bold hover:bg-gradient-to-r hover:from-metallic-gold hover:to-amber-600 hover:text-charcoal transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Private Dining Experiences */}
          <div className="relative mb-20">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-r from-metallic-gold/10 via-transparent to-metallic-gold/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-royal-maroon/30 to-[#0a0a0a] rounded-3xl p-12 border border-metallic-gold/30 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-metallic-gold/40 rounded-tl-3xl"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-metallic-gold/40 rounded-tr-3xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-metallic-gold/40 rounded-bl-3xl"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-metallic-gold/40 rounded-br-3xl"></div>

              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white text-center mb-12">
                Curated{" "}
                <span className="text-metallic-gold">Private Experiences</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Chef's Table",
                    description:
                      "Interactive 12-course journey with our Master Chef",
                    price: "₹15,000",
                    unit: "per person",
                    icon: <ChefHat className="w-8 h-8" />,
                    gradient: "from-amber-500 to-amber-600",
                  },
                  {
                    title: "Wine Masterclass",
                    description:
                      "Sommelier-guided tasting of rare vintage collections",
                    price: "₹12,000",
                    unit: "per person",
                    icon: <Wine className="w-8 h-8" />,
                    gradient: "from-rose-500 to-pink-600",
                  },
                  {
                    title: "Anniversary Package",
                    description:
                      "Personalized celebration with champagne and roses",
                    price: "₹25,000",
                    unit: "per couple",
                    icon: <Gift className="w-8 h-8" />,
                    gradient: "from-emerald-500 to-green-600",
                  },
                ].map((exp, idx) => (
                  <div key={idx} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
                    />

                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all hover:-translate-y-2">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <div className="text-charcoal">{exp.icon}</div>
                      </div>

                      <h4 className="text-2xl font-bold text-white mb-3">
                        {exp.title}
                      </h4>
                      <p className="text-soft-cream/70 text-sm mb-4">
                        {exp.description}
                      </p>

                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-3xl font-bold text-metallic-gold">
                            {exp.price}
                          </span>
                          <span className="text-soft-cream/40 text-xs block">
                            {exp.unit}
                          </span>
                        </div>
                        <button className="text-metallic-gold text-sm font-bold hover:underline">
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
