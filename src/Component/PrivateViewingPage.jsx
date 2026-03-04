// src/components/PrivateViewingPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, Calendar, Users, Phone, Check, Eye,
  Crown, Diamond, Star, Sparkles, Gem, Gift, MapPin,
  Clock, Palette, Camera, Music, Award, BookOpen,
  Heart, Shield, Trophy, Coffee, Sun, Moon, Wine,
  X, Mail, Map, Compass, Feather, Key, 
  VenetianMask, Scroll, Gem as GemIcon, Brush,
  Landmark, GalleryVertical, Infinity, CircleDollarSign,
  Utensils, GlassWater, ChefHat, PartyPopper
} from 'lucide-react';

const PrivateViewingPage = () => {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [visibleSections, setVisibleSections] = useState({});
  const [hoveredArt, setHoveredArt] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const artworks = [
    {
      id: 1,
      title: "The Royal Procession",
      artist: "Raja Ravi Varma",
      year: "1895",
      price: "₹2.5 Cr",
      image: "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A masterpiece depicting royal court life in 19th century Rajasthan",
      medium: "Oil on Canvas",
      dimensions: "48\" x 72\"",
      location: "East Wing Gallery",
      provenance: "Royal Collection of Jaipur"
    },
    {
      id: 2,
      title: "Mughal Garden of Paradise",
      artist: "Ustad Mansur",
      year: "1720",
      price: "₹3.2 Cr",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exquisite miniature painting from the Mughal era with 24-karat gold detailing",
      medium: "Gold leaf on Paper",
      dimensions: "24\" x 36\"",
      location: "Heritage Gallery",
      provenance: "Collection of Maharaja of Jodhpur"
    },
    {
      id: 3,
      title: "Cosmic Dance of Shiva",
      artist: "M.F. Hussain",
      year: "1985",
      price: "₹4.8 Cr",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern masterpiece by India's most celebrated contemporary artist",
      medium: "Acrylic on Canvas",
      dimensions: "60\" x 96\"",
      location: "Modern Wing",
      provenance: "Private Collection, Mumbai"
    },
    {
      id: 4,
      title: "Tanjore Goddess",
      artist: "Anonymous",
      year: "1820",
      price: "₹1.8 Cr",
      image: "https://images.unsplash.com/photo-1531913764164-f2af33884fc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Traditional South Indian painting with precious stones and 24-karat gold",
      medium: "Gold leaf on Wood",
      dimensions: "36\" x 48\"",
      location: "Sacred Art Gallery",
      provenance: "Tanjore Palace Collection"
    }
  ];

  const curators = [
    {
      name: "Dr. Anjali Sharma",
      role: "Chief Curator",
      expertise: "Rajasthani Miniatures",
      experience: "25 years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Every stroke tells a story of our glorious past.",
      education: "Oxford University",
      specializations: ["Mughal Art", "Rajput Paintings", "Manuscripts"]
    },
    {
      name: "Prof. Rajiv Menon",
      role: "Modern Art Specialist",
      expertise: "Contemporary Indian Art",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Art is the bridge between tradition and tomorrow.",
      education: "Royal College of Art, London",
      specializations: ["Progressive Artists", "Contemporary", "Installations"]
    },
    {
      name: "Dr. Meera Krishnan",
      role: "Conservation Expert",
      expertise: "Art Restoration",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Preserving heritage for eternity.",
      education: "Courtauld Institute of Art",
      specializations: ["Conservation", "Technical Analysis", "Provenance Research"]
    }
  ];

  const collections = [
    {
      name: "Mughal Masterpieces",
      pieces: 12,
      era: "16th-18th Century",
      icon: <Crown className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Jahangir's Dream", "Mansur's Flora", "Padshahnama"]
    },
    {
      name: "Rajasthani Miniatures",
      pieces: 18,
      era: "17th-19th Century",
      icon: <Palette className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Kishangarh Radha", "Mewar Ramayana", "Bundi Ragamala"]
    },
    {
      name: "Contemporary Masters",
      pieces: 15,
      era: "20th-21st Century",
      icon: <Brush className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Hussain's Horses", "Souza's Nudes", "Raza's Bindu"]
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "Curator's Choice",
      duration: "2 hours",
      price: "₹25,000",
      description: "Private tour with Chief Curator, access to reserve collection",
      icon: <GemIcon className="w-6 h-6" />,
      includes: [
        "Champagne reception",
        "Behind-the-scenes access", 
        "Collection catalog",
        "Personalized consultation"
      ],
      highlights: [
        "Exclusive access to vault",
        "Meet the conservation team",
        "Rare manuscript viewing"
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Art & Wine Evening",
      duration: "3 hours",
      price: "₹35,000",
      description: "Curated art viewing paired with premium wine tasting",
      icon: <Wine className="w-6 h-6" />,
      includes: [
        "Premium wine pairing",
        "Artisanal canapés", 
        "Artist meet & greet",
        "Sommelier guidance"
      ],
      highlights: [
        "Grand Cru wines",
        "Live classical music",
        "Private gallery access"
      ],
      image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Conservation Workshop",
      duration: "4 hours",
      price: "₹40,000",
      description: "Hands-on experience with conservation techniques",
      icon: <Shield className="w-6 h-6" />,
      includes: [
        "Expert guidance",
        "Materials provided", 
        "Certificate of participation",
        "Technical analysis demo"
      ],
      highlights: [
        "Work on real artifacts",
        "Learn restoration techniques",
        "Take-home toolkit"
      ],
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Photography Session",
      duration: "3 hours",
      price: "₹30,000",
      description: "Professional photography with masterpieces as backdrop",
      icon: <Camera className="w-6 h-6" />,
      includes: [
        "Professional photographer",
        "Private gallery access", 
        "Digital portfolio",
        "Hair & makeup artist"
      ],
      highlights: [
        "Exclusive after-hours access",
        "Fine art prints included",
        "Personal photo album"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const acquisitions = [
    {
      year: "2024",
      title: "Rare Pichwai Collection",
      value: "₹8.5 Cr",
      pieces: 6,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      year: "2023",
      title: "Bengal School Masterpieces",
      value: "₹6.2 Cr",
      pieces: 9,
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      year: "2022",
      title: "Deccan Sultanate Art",
      value: "₹4.7 Cr",
      pieces: 5,
      image: "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
     
      {/* Ornate Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M60 10 L110 60 L60 110 L10 60 L60 10" stroke="%23F59E0B" fill="none" stroke-width="0.5"/%3E%3C/svg%3E")',
          backgroundSize: '120px 120px'
        }} />
      </div>

      <div className="pt-20 px-4">
        {/* Opulent Hero Section - Updated with new image */}
        <section className="relative h-[100vh]  overflow-hidden group">
          {/* Hero Background - Updated image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Royal Gallery Interior"
              className="w-full h-full object-cover scale-105 transition-transform duration-[20000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
          </div>

          {/* Ornate Gold Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.5) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                {/* Royal Seal Animation */}
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
                  <div className="absolute inset-3 border-2 border-amber-500/50 rounded-full animate-pulse" />
                  <div className="absolute inset-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Palette className="w-10 h-10 text-gray-900" />
                  </div>
                </div>

                <p className="text-amber-500 tracking-[0.3em] text-sm mb-4">EST. 1995 · PRIVATE COLLECTION</p>
                
                <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                    The Royal
                  </span>
                  <br />
                  <span className="text-3xl md:text-5xl text-white/90 font-light tracking-[0.2em]">
                    COLLECTION
                  </span>
                </h1>

                <div className="flex items-center gap-6 mb-4">
                  <div className="w-24 h-px bg-gradient-to-r from-amber-500 to-amber-300" />
                  <p className="text-2xl text-amber-500/90 font-light">Where Art Meets Eternity</p>
                  <div className="w-24 h-px bg-gradient-to-l from-amber-500 to-amber-300" />
                </div>

                <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
                  Step into a realm where centuries of artistic mastery await your private viewing. 
                  Each piece tells a story of emperors, dynasties, and the soul of India.
                </p>

                {/* Royal Stats */}
                <div className="flex gap-12">
                  <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">47+</div>
                    <div className="text-sm tracking-wider text-gray-400">MASTERPIECES</div>
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
                  <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">3</div>
                    <div className="text-sm tracking-wider text-gray-400">CENTURIES</div>
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
                  <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">12</div>
                    <div className="text-sm tracking-wider text-gray-400">MASTER ARTISTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-8 h-14 border-2 border-amber-500/30 rounded-full flex justify-center">
                <div className="w-1.5 h-4 bg-gradient-to-b from-amber-500 to-amber-300 rounded-full mt-3 animate-[bounce_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Masterpieces Gallery - Fixed equal height cards */}
        <section id="collection" data-observe className={`max-w-7xl mx-auto mb-16 transition-all duration-1000 transform ${
          visibleSections.collection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="text-center mb-10">
            <p className="text-amber-500 tracking-[0.3em] text-sm mb-4">THE COLLECTION</p>
            <h2 className="text-3xl md:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Curated Masterpieces
              </span>
            </h2>
            <div className="w-96 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                onMouseEnter={() => setHoveredArt(artwork.id)}
                onMouseLeave={() => setHoveredArt(null)}
                onClick={() => setSelectedArtwork(artwork)}
                className="group relative cursor-pointer h-[630px]" // Fixed height for all cards
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
                
                {/* Main Card - Fixed height with flex column */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-gray-800 hover:border-amber-500/40 transition-all duration-700 hover:-translate-y-2 flex flex-col">
                  
                  {/* Image Container - Fixed height */}
                  <div className="relative h-[350px] flex-shrink-0 overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                    
                    {/* Ornate Corner Decorations */}
                    <div className="absolute top-6 left-6 w-20 h-20 border-t-4 border-l-4 border-amber-500/40 rounded-tl-3xl" />
                    <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 border-amber-500/40 rounded-tr-3xl" />
                    <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 border-amber-500/40 rounded-bl-3xl" />
                    <div className="absolute bottom-6 right-6 w-20 h-20 border-b-4 border-r-4 border-amber-500/40 rounded-br-3xl" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-6 py-1 rounded-full border border-amber-500/30">
                      <span className="text-amber-500 font-bold text-lg">{artwork.year}</span>
                    </div>

                    {/* Quick View Overlay */}
                    <div className={`absolute inset-0 bg-gray-950/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 ${
                      hoveredArt === artwork.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Eye className="w-8 h-8 text-gray-900" />
                        </div>
                        <p className="text-white text-lg font-bold">Click to View Details</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content - Scrollable if needed */}
                  <div className="relative p-4 flex-1 overflow-y-auto">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{artwork.title}</h3>
                        <p className="text-lg text-amber-500">{artwork.artist}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-500">{artwork.price}</p>
                        <p className="text-xs text-gray-500">Value</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">{artwork.description}</p>
                    
                    {/* Artwork Details Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">MEDIUM</p>
                        <p className="text-sm text-white font-medium">{artwork.medium}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">DIMENSIONS</p>
                        <p className="text-sm text-white font-medium">{artwork.dimensions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">LOCATION</p>
                        <p className="text-sm text-amber-500 font-medium">{artwork.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">PROVENANCE</p>
                        <p className="text-sm text-white font-medium truncate">{artwork.provenance}</p>
                      </div>
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {selectedArtwork?.id === artwork.id && (
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping" />
                        <div className="relative w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Curators of Eminence */}
        <section id="curators" data-observe className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 transform ${
          visibleSections.curators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="text-center mb-10">
            <p className="text-amber-500 tracking-[0.3em] text-sm mb-4">THE GUARDIANS</p>
            <h2 className="text-3xl md:text-6xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Masters of the Craft
              </span>
            </h2>
            <div className="w-96 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curators.map((curator, index) => (
              <div key={index} className="group relative h-[550px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-[2rem] overflow-hidden border border-gray-800 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Image with Frame */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={curator.image} 
                      alt={curator.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-6 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-1 rounded-full shadow-2xl">
                      <span className="text-sm font-bold text-gray-900">{curator.experience}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{curator.name}</h3>
                    <p className="text-amber-500 text-lg mb-1">{curator.role}</p>
                    <p className="text-sm text-gray-400 mb-2">{curator.education}</p>
                    
                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {curator.specializations.map((spec, i) => (
                        <span key={i} className="text-xs bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full border border-amber-500/30">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 italic text-lg">"{curator.quote}"</p>
                    
                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Royal Collections */}
        <section id="collections" data-observe className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 transform ${
          visibleSections.collections ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="text-center mb-10">
            <p className="text-amber-500 tracking-[0.3em] text-sm mb-4">CURATED GALLERIES</p>
            <h2 className="text-3xl md:text-6xl font-bold font-serif mb-6">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                The Royal Galleries
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group relative h-[500px] rounded-[2rem] overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                      {collection.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{collection.name}</h3>
                    <p className="text-amber-500 text-lg mb-2">{collection.era}</p>
                    <p className="text-gray-300 mb-4">{collection.pieces} Masterpieces</p>
                    
                    {/* Highlights - Hidden by default, shown on hover */}
                    <div className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                      <p className="text-sm text-gray-400 font-semibold">Collection Highlights:</p>
                      <ul className="space-y-1">
                        {collection.highlights.map((item, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                            <Diamond className="w-3 h-3 text-amber-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Ornate Border on Hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-amber-500/40 rounded-[2rem] transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Exclusive Experiences - Enhanced Beautiful Design */}
        <section id="experiences" data-observe className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 transform ${
          visibleSections.experiences ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 rounded-[3rem] blur-3xl animate-pulse" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-[3rem] border-2 border-amber-500/30 p-16 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-500/20 to-transparent rounded-full blur-3xl" />
              
              {/* Ornate Corner Decorations */}
              <div className="absolute top-8 left-8 w-32 h-32 border-t-4 border-l-4 border-amber-500/40 rounded-tl-3xl" />
              <div className="absolute top-8 right-8 w-32 h-32 border-t-4 border-r-4 border-amber-500/40 rounded-tr-3xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 border-b-4 border-l-4 border-amber-500/40 rounded-bl-3xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border-b-4 border-r-4 border-amber-500/40 rounded-br-3xl" />

              {/* Section Header */}
              <div className="relative text-center mb-10">
                <div className="inline-block p-6 bg-gradient-to-br from-amber-500/20 to-rose-500/20 rounded-full mb-4 animate-pulse">
                  <Gem className="w-12 h-12 text-amber-500" />
                </div>
                <p className="text-amber-500 tracking-[0.3em] text-sm mb-3">LUXURY CURATED</p>
                <h2 className="text-3xl md:text-6xl font-bold font-serif mb-3">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-rose-400 bg-clip-text text-transparent">
                    Royal Experiences
                  </span>
                </h2>
                <div className="w-96 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-6" />
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Indulge in unparalleled artistic journeys crafted exclusively for connoisseurs
                </p>
              </div>

              {/* Experience Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    onMouseEnter={() => setSelectedExperience(exp.id)}
                    onMouseLeave={() => setSelectedExperience(null)}
                    className="group relative cursor-pointer"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
                    
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-gray-800 hover:border-amber-500/40 transition-all duration-700 hover:-translate-y-2">
                      
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={exp.image} 
                          alt={exp.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                        
                        {/* Price Badge */}
                        <div className="absolute top-4 right-6 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-1 rounded-full shadow-2xl">
                          <span className="text-lg font-bold text-gray-900">{exp.price}</span>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-amber-500/30">
                          <Clock className="w-4 h-4 text-amber-500 inline mr-2" />
                          <span className="text-amber-500 font-medium">{exp.duration}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="text-amber-500">{exp.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                            <p className="text-amber-500/80 text-sm tracking-wider">EXCLUSIVE EXPERIENCE</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-2 leading-relaxed">{exp.description}</p>
                        
                        {/* Expandable Details */}
                        <div className={`space-y-4 overflow-hidden transition-all duration-500 ${
                          selectedExperience === exp.id ? 'max-h-96' : 'max-h-0'
                        }`}>
                          {/* Includes Section */}
                          <div className="pt-4 border-t border-amber-500/20">
                            <p className="text-sm text-amber-500 font-semibold mb-3 flex items-center gap-2">
                              <Gem className="w-4 h-4" />
                              EXPERIENCE INCLUDES
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                              {exp.includes.map((item, i) => (
                                <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                  <Check className="w-3 h-3 text-amber-500 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Highlights Section */}
                          <div>
                            <p className="text-sm text-amber-500 font-semibold mb-3 flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              HIGHLIGHTS
                            </p>
                            <ul className="space-y-2">
                              {exp.highlights.map((item, i) => (
                                <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                                  <Diamond className="w-3 h-3 text-amber-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Reserve Button */}
                        <button className="w-full mt-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/30 transition-all transform group-hover:scale-[1.02]">
                          Reserve This Experience
                        </button>
                        
                        {/* View Details Indicator */}
                        <div className="absolute bottom-8 right-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-5 h-5 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Experience Note */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-3">Looking for something uniquely tailored?</p>
                <button className="group inline-flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-amber-500/30 text-amber-500 rounded-xl font-bold hover:bg-amber-500 hover:text-gray-900 transition-all">
                  <span>Request Custom Experience</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Recent Acquisitions */}
        <section id="acquisitions" data-observe className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 transform ${
          visibleSections.acquisitions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="text-center mb-10">
            <p className="text-amber-500 tracking-[0.3em] text-sm mb-2">NEW ADDITIONS</p>
            <h2 className="text-3xl md:text-6xl font-bold font-serif mb-3">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Recent Acquisitions
              </span>
            </h2>
            <div className="w-80 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acquisitions.map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all" />
                
                <div className="relative bg-gray-900/50 rounded-[2rem] overflow-hidden border border-gray-800 hover:border-amber-500/40 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-amber-500 font-bold">{item.year}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-500 text-lg font-bold">{item.value}</span>
                      <span className="text-gray-400">{item.pieces} pieces</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Royal Booking Experience */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="relative">
            {/* Ornate Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-[3rem] opacity-20 blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-[3rem] border-2 border-amber-500/30 p-16 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-rose-500/10 to-transparent rounded-full blur-3xl" />
              
              {/* Ornate Corner Decorations */}
              <div className="absolute top-8 left-8 w-32 h-32 border-t-4 border-l-4 border-amber-500/40 rounded-tl-3xl" />
              <div className="absolute top-8 right-8 w-32 h-32 border-t-4 border-r-4 border-amber-500/40 rounded-tr-3xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 border-b-4 border-l-4 border-amber-500/40 rounded-bl-3xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border-b-4 border-r-4 border-amber-500/40 rounded-br-3xl" />

              <div className="relative text-center mb-8">
                <div className="inline-block p-5 bg-amber-500/10 rounded-full mb-5">
                  <Gem className="w-12 h-12 text-amber-500" />
                </div>
                <h2 className="text-3xl md:text-6xl font-bold font-serif mb-3">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                    Schedule Your Private Viewing
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Experience art in its purest form with our expert curators in an intimate setting
                </p>
              </div>

              {/* Form Steps */}
              <div className="flex justify-center gap-4 mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}>
                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      formStep >= step 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 shadow-2xl shadow-amber-500/50' 
                        : 'bg-gray-800 text-gray-500'
                    }`}>
                      {formStep > step ? <Check className="w-8 h-8" /> : step}
                      {formStep === step && (
                        <div className="absolute -inset-2 bg-amber-500/30 rounded-full animate-ping" />
                      )}
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-1 mx-4 ${
                        formStep > step ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-gray-800'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <div className="max-w-5xl mx-auto">
                {formStep === 1 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                      <span className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 text-2xl">1</span>
                      Select Your Masterpiece
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {artworks.map((artwork) => (
                        <label
                          key={artwork.id}
                          className={`relative p-5 bg-gray-800/50 rounded-2xl border-2 cursor-pointer transition-all ${
                            selectedArtwork?.id === artwork.id
                              ? 'border-amber-500 bg-amber-500/10 shadow-2xl shadow-amber-500/20'
                              : 'border-gray-700 hover:border-amber-500/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="artwork"
                            className="absolute opacity-0"
                            checked={selectedArtwork?.id === artwork.id}
                            onChange={() => setSelectedArtwork(artwork)}
                          />
                          <p className="font-bold text-white text-lg mb-1">{artwork.title}</p>
                          <p className="text-amber-500 mb-2">{artwork.artist}</p>
                          <p className="text-sm text-gray-400">{artwork.year} · {artwork.location}</p>
                          {selectedArtwork?.id === artwork.id && (
                            <div className="absolute top-4 right-4">
                              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-gray-900" />
                              </div>
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                      <span className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 text-2xl">2</span>
                      Your Royal Details
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="col-span-2 md:col-span-1 p-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none text-lg transition-all"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="col-span-2 md:col-span-1 p-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none text-lg transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="col-span-2 p-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none text-lg transition-all"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="col-span-2 p-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none text-lg transition-all"
                      />
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                      <span className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 text-2xl">3</span>
                      Schedule Your Visit
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-2 p-3 bg-gray-800/50 rounded-xl border-2 border-gray-700">
                        <label className="block text-sm text-gray-400 ">Preferred Date</label>
                        <input
                          type="date"
                          className="w-full bg-transparent text-white  focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 p-3 bg-gray-800/50 rounded-xl border-2 border-gray-700">
                        <label className="block text-sm text-gray-400 ">Preferred Time</label>
                        <select className="w-full bg-transparent text-white  focus:outline-none">
                          <option className="bg-gray-900">10:00 AM</option>
                          <option className="bg-gray-900">11:00 AM</option>
                          <option className="bg-gray-900">12:00 PM</option>
                          <option className="bg-gray-900">2:00 PM</option>
                          <option className="bg-gray-900">3:00 PM</option>
                          <option className="bg-gray-900">4:00 PM</option>
                        </select>
                      </div>
                      <textarea
                        placeholder="Special Requests (Optional)"
                        rows="2"
                        className="col-span-2 p-3 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none text-lg transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {formStep > 1 && (
                    <button
                      onClick={() => setFormStep(prev => prev - 1)}
                      className="group px-10 border-2 border-amber-500/30 text-amber-500 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-gray-900 transition-all flex items-center gap-3"
                    >
                      <ChevronRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      Previous
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (formStep < 3) {
                        setFormStep(prev => prev + 1);
                      } else {
                        alert('Your royal viewing request has been received. Our curator will contact you shortly.');
                        navigate('/');
                      }
                    }}
                    className={`group px-10 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all ml-auto flex items-center gap-3`}
                  >
                    {formStep === 3 ? 'Confirm Royal Booking' : 'Continue'}
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Information Cards */}
        <section className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Viewing Hours",
                detail1: "Tuesday - Sunday",
                detail2: "11:00 AM - 7:00 PM"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Private Curator",
                detail1: "Dr. Anjali Sharma",
                detail2: "Available for tours"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Art Concierge",
                detail1: "24/7 Assistance",
                detail2: "+91 98765 43211"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                detail1: "East Wing, Level 3",
                detail2: "Tavisha Grand"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-5 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <div className="text-amber-500">{item.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">{item.detail1}</p>
                  <p className="text-amber-500 font-bold text-lg">{item.detail2}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Royal Seal Footer */}
        <div className="max-w-7xl mx-auto text-center py-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full blur-3xl opacity-20" />
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-[spin_20s_linear_infinite]" style={{ borderStyle: 'dotted' }} />
              <div className="absolute inset-4 border-2 border-amber-500/30 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-gray-900" />
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-400 mt-8 font-serif">Experience Art Like Never Before</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
        </div>
      </div>
    </div>
  );
};

export default PrivateViewingPage;