import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Crown, Diamond, Star, Award, Wine, Coffee, Utensils, Users,
  Calendar, Clock, MapPin, Phone, Mail, Check, X, ChevronLeft,
  Maximize2, Minimize2, Heart, Share2, Camera, Wind, Wifi,
  ParkingCircle, Accessibility, Speaker, Sparkles, Gem,
  ArrowLeft, ChevronRight, Star as StarIcon, Sun, Moon
} from 'lucide-react';

// Venue Data (matching the ones in GrandMenu)
const VENUES = {
  'the-wine-cellar': {
    id: 'the-wine-cellar',
    name: 'THE WINE CELLAR',
    fullName: 'The Royal Wine Cellar',
    tagline: 'Where Vintages Tell Stories',
    description: 'An intimate dining experience surrounded by over 500 rare vintages from the world\'s most prestigious vineyards. This temperature-controlled sanctuary houses our most prized collection, with bottles dating back to 1945.',
    longDescription: 'Descend into our underground wine sanctuary, where the air is perfumed with the essence of aged oak and noble grapes. The walls are lined with over 500 carefully curated labels from Bordeaux, Burgundy, Tuscany, and beyond. Each bottle tells a story of its terroir, vintage, and the hands that crafted it. Our master sommelier, with decades of experience, guides you through an olfactory journey that spans continents and centuries. The intimate dining table, carved from a single slab of century-old oak, seats 12 guests in quiet luxury. Crystal decanters catch the soft, warm light as wines breathe and open, revealing their deepest secrets. This is not merely a meal; it is a communion with history itself.',
    capacity: '12 guests',
    price: '₹25,000',
    pricePeriod: 'per person (minimum 6 guests)',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    icon: Wine,
    color: 'amber',
    features: [
      { icon: Wine, name: '500+ Rare Wines', description: 'Curated collection from 15 countries' },
      { icon: Users, name: 'Private Sommelier', description: 'Dedicated wine expert' },
      { icon: Utensils, name: '6-Course Tasting Menu', description: 'Chef\'s wine pairing selection' },
      { icon: Wind, name: 'Climate Controlled', description: 'Perfect 55°F, 70% humidity' },
      { icon: Gem, name: 'Crystal Decanters', description: 'Riedel Sommelier Series' },
      { icon: Sparkles, name: 'Candlelit Ambiance', description: 'Intimate, romantic setting' }
    ],
    inclusions: [
      'Welcome champagne (Dom Pérignon)',
      '6-course tasting menu by Executive Chef',
      '5 premium wine pairings',
      'Sommelier-led wine education',
      'Personalized tasting notes',
      'Complimentary valet parking',
      'Souvenir crystal wine glass',
      'Private butler service'
    ],
    diningOptions: [
      { name: 'The Epicurean Journey', description: '8 courses with rare vintage pairings', price: '₹35,000' },
      { name: 'The Connoisseur\'s Choice', description: '6 courses with premium pairings', price: '₹25,000' },
      { name: 'Wine Tasting Experience', description: '12 premium wines with canapés', price: '₹18,000' }
    ],
    schedule: {
      monday: '7:00 PM - 11:00 PM',
      tuesday: '7:00 PM - 11:00 PM',
      wednesday: 'Closed',
      thursday: '7:00 PM - 11:00 PM',
      friday: '6:30 PM - 11:30 PM',
      saturday: '6:30 PM - 11:30 PM',
      sunday: '6:30 PM - 10:30 PM'
    },
    chef: {
      name: 'Chef Pierre Dubois',
      title: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Wine is bottled poetry, and food is its perfect companion.'
    },
    sommelier: {
      name: 'Marco Rossi',
      title: 'Master Sommelier',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Every bottle has a story waiting to be uncorked.'
    },
    reviews: [
      {
        name: 'Mr. Vikram Rathore',
        date: 'February 2024',
        rating: 5,
        comment: 'An unforgettable evening. The 1982 Château Margaux paired with the Wagyu beef was transcendent.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Mrs. Anita Singhania',
        date: 'January 2024',
        rating: 5,
        comment: 'The sommelier\'s knowledge is extraordinary. He selected wines that perfectly complemented each course.',
        image: 'https://images.unsplash.com/photo-1494790108777-383fd5c8a4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      }
    ],
    faq: [
      { q: 'What is the dress code?', a: 'Black tie optional. Formal evening wear recommended.' },
      { q: 'Can we bring our own wine?', a: 'Yes, corkage fee of ₹5,000 per bottle (limit 2 bottles).' },
      { q: 'Is the venue wheelchair accessible?', a: 'Yes, we have a dedicated elevator to the wine cellar.' },
      { q: 'Can dietary restrictions be accommodated?', a: 'Absolutely. Please inform us 48 hours in advance.' }
    ]
  },
  'the-terrace-garden': {
    id: 'the-terrace-garden',
    name: 'THE TERRACE GARDEN',
    fullName: 'The Imperial Terrace Garden',
    tagline: 'Dining Under the Stars',
    description: 'Alfresco dining at its finest, with panoramic city views and a magical ambiance created by thousands of twinkling lights.',
    longDescription: 'Perched atop our palace, the Terrace Garden offers an enchanting escape from the city below. Ancient banyan trees provide natural canopy while fairy lights cascade like glowing waterfalls. The open-air kitchen features a custom-built wood-fired oven and live grilling station, where chefs prepare delicacies as you watch. The fragrance of jasmine and rose perfumes the air as you dine under a canopy of stars. Our retractable roof ensures perfect weather year-round, and during special evenings, you might be treated to a private performance by classical musicians. The garden features rare heirloom plants, a koi pond, and intimate dining pavilions for those seeking privacy. As the sun sets over the city skyline, the terrace transforms into Mumbai\'s most romantic dining destination.',
    capacity: '60 guests',
    price: '₹15,000',
    pricePeriod: 'per person (min 10 guests for private events)',
    images: [
      'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    icon: Sun,
    color: 'emerald',
    features: [
      { icon: Star, name: 'Open-Air Kitchen', description: 'Live grilling & wood-fired oven' },
      { icon: Moon, name: 'Starlit Dining', description: 'Retractable roof, fairy lights' },
      { icon: Wind, name: 'Climate Controlled', description: 'Mist cooling system' },
      { icon: Sparkles, name: 'Live Entertainment', description: 'Classical musicians' },
      { icon: Camera, name: 'City Views', description: 'Panoramic Mumbai skyline' },
      { icon: Gem, name: 'Private Pavilions', description: 'Intimate dining pods' }
    ],
    inclusions: [
      'Welcome cocktails',
      '5-course curated menu',
      'Live grill station access',
      'Sommelier-selected wines',
      'Private pavilion (for groups of 4+)',
      'Valet parking',
      'Complimentary photography',
      'Take-home aromatic candle'
    ],
    diningOptions: [
      { name: 'Sunset Soirée', description: 'Evening dining with live music', price: '₹15,000' },
      { name: 'Starlight Romance', description: 'Private pavilion with premium champagne', price: '₹22,000' },
      { name: 'Garden Party', description: 'Full buyout for celebrations', price: '₹8,00,000' }
    ],
    schedule: {
      monday: '6:30 PM - 11:00 PM',
      tuesday: '6:30 PM - 11:00 PM',
      wednesday: '6:30 PM - 11:00 PM',
      thursday: '6:30 PM - 11:00 PM',
      friday: '6:00 PM - 11:30 PM',
      saturday: '6:00 PM - 11:30 PM',
      sunday: '6:00 PM - 10:30 PM'
    },
    chef: {
      name: 'Chef Arjun Mehra',
      title: 'Culinary Director',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'The garden inspires my cooking. Fresh herbs picked moments before serving.'
    },
    reviews: [
      {
        name: 'Raj & Neha Kapoor',
        date: 'February 2024',
        rating: 5,
        comment: 'We celebrated our anniversary here. The private pavilion under the stars was magical.',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      }
    ],
    faq: [
      { q: 'What happens if it rains?', a: 'Our retractable roof closes automatically, ensuring uninterrupted dining.' },
      { q: 'Is the garden heated in winter?', a: 'Yes, we have elegant outdoor heaters and cozy blankets.' },
      { q: 'Can we book for a proposal?', a: 'Absolutely. Our team can arrange a magical setting.' }
    ]
  },
  'the-maharani-suite': {
    id: 'the-maharani-suite',
    name: 'THE MAHARANI SUITE',
    fullName: 'The Maharani Royal Suite',
    tagline: 'Opulence Redefined',
    description: 'Our most exclusive private dining room, adorned with hand-carved marble, gold leaf detailing, and antique chandeliers.',
    longDescription: 'Step into a world of unparalleled opulence. The Maharani Suite is a masterpiece of royal architecture, featuring hand-carved Makrana marble walls inlaid with semi-precious stones, 24-karat gold leaf ceiling medallions, and original crystal chandeliers from 1920s Belgium. The central dining table, a single piece of Burmese teak, seats 20 in regal comfort. Antique thrones serve as chairs at the head of the table, reserved for the hosts of honor. The suite includes a private ante-room for pre-dinner cocktails, a dedicated kitchen where your personal chef prepares each course, and a balcony overlooking the royal courtyard. Gold-plated cutlery, Limoges porcelain, and Baccarat crystal complete the tablescape. A personal butler attends to your every need, while a live sitar player performs in the corner upon request.',
    capacity: '20 guests',
    price: '₹50,000',
    pricePeriod: 'per person (minimum 8 guests)',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    icon: Diamond,
    color: 'purple',
    features: [
      { icon: Gem, name: 'Gold Leaf Decor', description: '24-karat gold detailing' },
      { icon: Crown, name: 'Antique Thrones', description: 'Seating for hosts of honor' },
      { icon: Sparkles, name: 'Private Chef', description: 'Dedicated culinary team' },
      { icon: Users, name: 'Personal Butler', description: 'Royal service' },
      { icon: Camera, name: 'Live Musician', description: 'Upon request' },
      { icon: Wine, name: 'Private Cellar', description: 'Exclusive collection' }
    ],
    inclusions: [
      'Welcome in suite with champagne',
      '10-course royal tasting menu',
      'Premium wine pairing',
      'Personal butler service',
      'Live classical music',
      'Rose petal turndown',
      'Gold-plated cutlery',
      'Royal souvenir gift box',
      'Private photographer',
      'Luxury car transfer'
    ],
    diningOptions: [
      { name: 'The Royal Feast', description: '10 courses with rare vintages', price: '₹50,000' },
      { name: 'Emperor\'s Choice', description: 'Custom menu with personal chef', price: '₹75,000' },
      { name: 'Wedding Celebration', description: 'Full suite buyout', price: '₹2,50,000' }
    ],
    schedule: {
      monday: 'By appointment',
      tuesday: 'By appointment',
      wednesday: 'By appointment',
      thursday: 'By appointment',
      friday: '7:00 PM - 11:30 PM',
      saturday: '7:00 PM - 11:30 PM',
      sunday: '7:00 PM - 10:30 PM'
    },
    chef: {
      name: 'Chef Priya Sharma',
      title: 'Pastry Director',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'Creating desserts worthy of royalty is my passion. Each plate is a jewel.'
    },
    reviews: [
      {
        name: 'Maharaja Yadvendra Singh',
        date: 'December 2023',
        rating: 5,
        comment: 'It reminded me of my ancestral palace. The attention to detail is extraordinary.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      }
    ],
    faq: [
      { q: 'How far in advance should we book?', a: 'At least 2 weeks recommended for the full experience.' },
      { q: 'Can we arrange a marriage proposal?', a: 'Yes, we create unforgettable proposal experiences.' },
      { q: 'Is there a dress code?', a: 'Royal regalia encouraged. Black tie mandatory.' }
    ]
  }
};

// Gallery Modal Component
const GalleryModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-50"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
      
      <img
        src={images[currentIndex]}
        alt={`Gallery ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
      />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onNext(idx)} // Simplified for demo
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'w-8 bg-amber-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Venue Detail Component
const VenueDetailPage = () => {
  const { venueId } = useParams();
  const navigate = useNavigate();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      if (VENUES[venueId]) {
        setVenue(VENUES[venueId]);
      }
      setLoading(false);
    }, 500);
  }, [venueId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-amber-500 rounded-full animate-spin border-t-transparent" />
            <Crown className="absolute inset-0 m-auto w-12 h-12 text-amber-500 animate-pulse" />
          </div>
          <p className="text-gray-400">Summoning royal elegance...</p>
        </div>
      </div>
    );
  }

  if (!venue) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Diamond className="w-20 h-20 text-amber-500/50 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Venue Not Found</h2>
          <p className="text-gray-400 mb-8">The royal chamber you seek does not exist.</p>
          <button
            onClick={() => navigate('/menu')}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl"
          >
            Return to Grand Menu
          </button>
        </div>
      </div>
    );
  }

  const Icon = venue.icon;
  const colorClasses = {
    amber: 'from-amber-500 to-amber-600',
    emerald: 'from-emerald-500 to-green-500',
    purple: 'from-purple-500 to-pink-500'
  }[venue.color] || 'from-amber-500 to-rose-500';

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => navigate('/menu')}
        className="fixed top-24 left-8 z-40 flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Grand Menu</span>
      </button>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={venue.images[0]}
            alt={venue.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-amber-500/20 to-transparent animate-float"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-3 text-sm mb-6 animate-slideDown">
                <span className="text-gray-500">Royal Enclave</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
                <span className="text-gray-400">Private Dining</span>
                <ChevronRight className="w-4 h-4 text-gray-600" />
                <span className="text-amber-500">{venue.name}</span>
              </div>

              {/* Title */}
              <h1 className="text-7xl md:text-8xl font-bold font-serif mb-6 animate-slideUp">
                <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
                  {venue.fullName}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-2xl text-amber-500 mb-8 animate-slideUp" style={{ animationDelay: '100ms' }}>
                {venue.tagline}
              </p>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '200ms' }}>
                {venue.description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-8 mb-12 animate-slideUp" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-amber-500" />
                  <div>
                    <span className="block text-2xl font-bold text-white">{venue.capacity}</span>
                    <span className="text-sm text-gray-400">Capacity</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Diamond className="w-6 h-6 text-amber-500" />
                  <div>
                    <span className="block text-2xl font-bold text-white">{venue.price}</span>
                    <span className="text-sm text-gray-400">Starting from</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 animate-slideUp" style={{ animationDelay: '400ms' }}>
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 transform hover:scale-105">
                  Inquire Availability
                </button>
                <button 
                  onClick={() => setGalleryOpen(true)}
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-amber-500/30 text-amber-500 rounded-2xl text-lg font-semibold hover:bg-amber-500/20 transition-all duration-300"
                >
                  Virtual Tour
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-xl border-2 border-amber-500/30 rounded-2xl hover:bg-amber-500/20 transition-all duration-300"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-amber-500'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16 border-b border-gray-800">
          {['overview', 'experiences', 'gallery', 'reviews', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-lg font-medium capitalize transition-all duration-300 relative ${
                activeTab === tab 
                  ? 'text-amber-500' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-20">
              {/* Long Description */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500" />
                  <Icon className="w-8 h-8 text-amber-500" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500" />
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {venue.longDescription}
                </p>
              </div>

              {/* Features Grid */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    Royal Amenities
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {venue.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
                          <FeatureIcon className="w-12 h-12 text-amber-500 mb-6" />
                          <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-3xl p-12 border border-gray-800">
                <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    What's Included
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {venue.inclusions.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-colors">
                        <Check className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chef & Sommelier */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Chef Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000" />
                  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 overflow-hidden">
                    <div className="flex items-center gap-6">
                      <img
                        src={venue.chef.image}
                        alt={venue.chef.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-amber-500"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{venue.chef.name}</h3>
                        <p className="text-amber-500 mb-3">{venue.chef.title}</p>
                        <p className="text-gray-400 italic">"{venue.chef.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sommelier Card (if exists) */}
                {venue.sommelier && (
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000" />
                    <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 overflow-hidden">
                      <div className="flex items-center gap-6">
                        <img
                          src={venue.sommelier.image}
                          alt={venue.sommelier.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-amber-500"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{venue.sommelier.name}</h3>
                          <p className="text-amber-500 mb-3">{venue.sommelier.title}</p>
                          <p className="text-gray-400 italic">"{venue.sommelier.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Experiences Tab */}
          {activeTab === 'experiences' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Curated Experiences
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {venue.diningOptions.map((option, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
                      <h3 className="text-2xl font-bold text-white mb-3">{option.name}</h3>
                      <p className="text-gray-400 mb-6">{option.description}</p>
                      <p className="text-3xl font-bold text-amber-500 mb-6">{option.price}</p>
                      <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                        Select Experience
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Visual Journey
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venue.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setGalleryIndex(index);
                      setGalleryOpen(true);
                    }}
                    className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Maximize2 className="w-5 h-5 text-amber-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && venue.reviews && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Royal Testimonials
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {venue.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-white">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-600'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && venue.faq && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 font-serif">
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <div className="space-y-4">
                {venue.faq.map((item, index) => (
                  <div key={index} className="group">
                    <details className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 [&[open]]:border-amber-500/30 transition-all duration-300">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <h3 className="text-lg font-semibold text-white group-open:text-amber-500 transition-colors">
                          {item.q}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-amber-500 group-open:rotate-90 transition-transform" />
                      </summary>
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Section */}
        <div className="mt-20 p-12 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-3xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-center mb-4 font-serif">
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Reserve Your Royal Experience
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Complete the form below and our royal concierge will respond within 2 hours
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Select Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select time</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
                  <input
                    type="number"
                    min="1"
                    max={venue.capacity.split(' ')[0]}
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">&nbsp;</label>
                <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 font-semibold">
                  Check Availability
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500">
              By proceeding, you agree to our cancellation policy and terms of service.
              A 50% deposit is required to secure your booking.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <GalleryModal
          images={venue.images}
          currentIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
          onPrev={() => setGalleryIndex((prev) => (prev > 0 ? prev - 1 : venue.images.length - 1))}
          onNext={() => setGalleryIndex((prev) => (prev < venue.images.length - 1 ? prev + 1 : 0))}
        />
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VenueDetailPage;