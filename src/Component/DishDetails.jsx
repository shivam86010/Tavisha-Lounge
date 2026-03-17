// src/components/DishDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Crown, Star, Clock, ChefHat, Award, Users, Heart,
  Share2, Bookmark, ChevronLeft, ChevronRight, Sparkles,
  AlertCircle, CheckCircle, Utensils, Wine, Calendar,
  X, Info, MessageCircle, ShoppingBag
} from 'lucide-react';

// ==================== DISHES DATA ====================
const DISHES_DETAILS = {
  'MAHARAJA\'S THALI': {
    id: 'mahara-thali',
    title: "MAHARAJA'S THALI",
    subtitle: "A 24-Course Royal Feast",
    price: "₹12,000",
    chef: "Chef Rajesh Mehta",
    chefExperience: "25+ Years of Royal Cuisine",
    rating: 4.9,
    reviews: 347,
    image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Experience the grandeur of royal Indian dining with our signature Maharaja's Thali. This elaborate 24-course feast brings together the finest dishes from across India's royal kitchens, each prepared using centuries-old recipes and techniques passed down through generations.",
    longDescription: "The Maharaja's Thali is not just a meal; it's a journey through India's rich culinary heritage. Each course is carefully curated to represent different regions and royal houses, from the rich, creamy gravies of Lucknow to the fiery curries of Rajasthan, and from the delicate flavors of Bengal to the aromatic biryanis of Hyderabad. Served on a traditional silver thali, this experience includes 12 main courses, 6 accompaniments, 4 breads, and 2 desserts, each prepared with the finest ingredients and traditional cooking methods.",
    highlights: [
      "Gold leaf garnish on select dishes",
      "Heirloom recipes from 7 royal houses",
      "12 regional specialties from across India",
      "Traditional silver thali service",
      "Personalized chef's explanation"
    ],
    ingredients: [
      { name: "Premium Indian Spices", icon: "🌶️", description: "Hand-selected from across India" },
      { name: "Saffron from Kashmir", icon: "🌸", description: "Pure Pampore saffron" },
      { name: "Black Cardamom", icon: "🌰", description: "Smoked for authentic flavor" },
      { name: "Rose Water", icon: "🌹", description: "Distilled from Damask roses" },
      { name: "Gold Leaf (24K)", icon: "✨", description: "Edible pure gold garnish" },
      { name: "Royal Basmati Rice", icon: "🍚", description: "Aged for 2 years" }
    ],
    courseStructure: [
      {
        course: "Welcome Drinks",
        items: ["Chilled Rose Sarbat", "Masala Chaas", "Saffron Milk"],
        description: "Traditional welcome beverages to awaken the palate"
      },
      {
        course: "Appetizers (6 Courses)",
        items: ["Galouti Kebabs", "Paneer Tikka", "Fish Amritsari", "Vegetable Seekh", "Chicken Malai Tikka", "Hara Bhara Kebab"],
        description: "Melt-in-your-mouth starters from Lucknow's royal kitchens"
      },
      {
        course: "Main Course (12 Dishes)",
        items: ["Rogan Josh", "Butter Chicken", "Dal Makhani", "Paneer Lababdar", "Nihari", "Kadhai Chicken", "Malai Kofta", "Fish Curry", "Chana Masala", "Bhindi Do Pyaza", "Baingan Bharta", "Methi Malai Matar"],
        description: "An extensive array of royal gravies and curries"
      }
    ],
    winePairing: [
      {
        wine: "Châteauneuf-du-Pape",
        region: "Rhône Valley, France",
        price: "₹25,000",
        pairing: "Perfect with rich, spicy curries",
        image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    reviews: [
      {
        name: "Maharaja Yadvendra Singh",
        rating: 5,
        comment: "Reminds me of my grandmother's kitchen. Authentic royal recipes executed perfectly.",
        date: "2 weeks ago",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
      }
    ],
    preparationTime: "90-120 minutes",
    serves: "2-3 persons",
    dietaryInfo: ["Contains Dairy", "Contains Nuts", "Contains Gluten"],
    availability: "Available Daily 7 PM - 11 PM",
    specialNote: "Requires 48 hours advance booking"
  },
  'ROYAL ROGAN JOSH': {
    id: 'rogan-josh',
    title: "ROYAL ROGAN JOSH",
    subtitle: "Slow-cooked Kashmiri Lamb Curry",
    price: "₹4,500",
    chef: "Chef Rajesh Mehta",
    chefExperience: "25+ Years of Royal Cuisine",
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "A signature Kashmiri delicacy featuring tender lamb slow-cooked in a rich gravy of aromatic spices.",
    highlights: [
      "24-hour marination process",
      "Authentic Kashmiri saffron",
      "Traditional slow-cooking method"
    ],
    ingredients: [
      { name: "Kashmiri Lamb", icon: "🐑", description: "Tender young lamb from Kashmir valley" },
      { name: "Kashmiri Chillies", icon: "🌶️", description: "Mild heat, deep red color" }
    ],
    preparationTime: "180 minutes",
    serves: "2 persons",
    availability: "Available Daily",
    specialNote: "Best enjoyed with Kashmiri naan"
  },
  'IMPERIAL BIRYANI': {
    id: 'imperial-biryani',
    title: "IMPERIAL BIRYANI",
    subtitle: "Fragrant Layered Rice Masterpiece",
    price: "₹3,800",
    chef: "Chef Abdul Qadir",
    chefExperience: "30+ Years of Dum Pukht",
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Our Imperial Biryani is a celebration of the royal Dum Pukht tradition.",
    highlights: [
      "Dum pukht style cooking",
      "Hyderabadi spice blend",
      "Silver varq garnish"
    ],
    ingredients: [
      { name: "Aged Basmati Rice", icon: "🍚", description: "2-year aged rice" },
      { name: "Premium Meat", icon: "🥩", description: "Tender meat cuts" }
    ],
    preparationTime: "120 minutes",
    serves: "2-3 persons",
    availability: "Available Daily",
    specialNote: "Best served with mirchi ka salan"
  }
};

// ==================== COMPONENTS ====================

// 3D Card Effect
const ThreeDCard = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
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

// Image Gallery Component
const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div 
        className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
        onClick={() => setShowLightbox(true)}
      >
        <img
          src={images[selectedImage]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
        
        {/* Image Counter */}
        <div className="absolute top-6 right-6 bg-charcoal/80 backdrop-blur-sm px-4 py-1 rounded-full border border-metallic-gold/30">
          <span className="text-metallic-gold">{selectedImage + 1} / {images.length}</span>
        </div>
        
        {/* Zoom Indicator */}
        <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-metallic-gold/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-metallic-gold flex items-center gap-2">
            <Info className="w-4 h-4" />
            Click to enlarge
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedImage === index ? 'ring-4 ring-metallic-gold' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={img} 
                alt={`${title} ${index + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-8">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-8 right-8 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center hover:bg-metallic-gold/40 transition-colors z-10"
          >
            <X className="w-6 h-6 text-metallic-gold" />
          </button>
          
          <button
            onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="absolute left-8 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center hover:bg-metallic-gold/40 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-metallic-gold" />
          </button>
          
          <img
            src={images[selectedImage]}
            alt={title}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
          />
          
          <button
            onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="absolute right-8 w-12 h-12 bg-metallic-gold/20 rounded-full flex items-center justify-center hover:bg-metallic-gold/40 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-metallic-gold" />
          </button>
        </div>
      )}
    </div>
  );
};

// Rating Component
const Rating = ({ rating, reviews = 0 }) => {
  // Ensure rating is a number
  const numericRating = typeof rating === 'number' ? rating : parseFloat(rating) || 0;
  const numericReviews = typeof reviews === 'number' ? reviews : parseInt(reviews) || 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(numericRating)
                ? 'fill-metallic-gold text-metallic-gold'
                : i < numericRating
                ? 'fill-metallic-gold/50 text-metallic-gold/50'
                : 'text-soft-cream/30'
            }`}
          />
        ))}
      </div>
      <span className="text-metallic-gold font-bold">{numericRating.toFixed(1)}</span>
      {numericReviews > 0 && (
        <>
          <span className="text-soft-cream/40">•</span>
          <span className="text-soft-cream/60">{numericReviews} reviews</span>
        </>
      )}
    </div>
  );
};

// Main DishDetails Component
const DishDetails = () => {
  const navigate = useNavigate();
  const { dishName } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      try {
        const decodedDishName = decodeURIComponent(dishName || '');
        const foundDish = DISHES_DETAILS[decodedDishName];
        setDish(foundDish || null);
      } catch (error) {
        console.error('Error loading dish:', error);
        setDish(null);
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dishName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-spin border-t-transparent" />
            <Crown className="absolute inset-0 m-auto w-12 h-12 text-metallic-gold animate-pulse" />
          </div>
          <p className="text-metallic-gold text-xl animate-pulse">PREPARING YOUR ROYAL DISH...</p>
        </div>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-20 h-20 text-metallic-gold mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">DISH NOT FOUND</h2>
          <p className="text-soft-cream/60 mb-8">The royal dish you're looking for isn't on our menu</p>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold hover:scale-105 transition-transform"
          >
            RETURN TO MENU
          </button>
        </div>
      </div>
    );
  }

  // Calculate total price
  const basePrice = parseInt(dish.price.replace(/[^0-9]/g, '')) || 0;
  const totalPrice = basePrice * quantity;

  return (
    <div className="min-h-screen bg-charcoal text-soft-cream overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dish.image}
            alt={dish.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
          
          {/* Ornate Overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 20 L80 50 L50 80 L20 50 L50 20" stroke="%23D4AF37" fill="none" stroke-width="2"/%3E%3C/svg%3E")',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Navigation */}
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-charcoal/80 backdrop-blur-md rounded-xl border border-metallic-gold/30 hover:bg-metallic-gold/20 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-metallic-gold group-hover:-translate-x-1 transition-transform" />
            <span className="text-metallic-gold">BACK TO MENU</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-8 right-8 z-20 flex gap-4">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-12 h-12 bg-charcoal/80 backdrop-blur-md rounded-xl border border-metallic-gold/30 hover:bg-metallic-gold/20 transition-all group"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-6 h-6 mx-auto transition-colors ${
              isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-metallic-gold'
            }`} />
          </button>
          
          <button 
            className="w-12 h-12 bg-charcoal/80 backdrop-blur-md rounded-xl border border-metallic-gold/30 hover:bg-metallic-gold/20 transition-all"
            aria-label="Share"
          >
            <Share2 className="w-6 h-6 text-metallic-gold mx-auto" />
          </button>
          
          <button 
            className="w-12 h-12 bg-charcoal/80 backdrop-blur-md rounded-xl border border-metallic-gold/30 hover:bg-metallic-gold/20 transition-all"
            aria-label="Save"
          >
            <Bookmark className="w-6 h-6 text-metallic-gold mx-auto" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 z-10">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Royal Seal */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-charcoal" />
                </div>
                <span className="text-metallic-gold tracking-wider">SIGNATURE DISH</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-2 font-serif">
                <span className="bg-gradient-to-r from-metallic-gold via-white to-metallic-gold bg-clip-text text-transparent">
                  {dish.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-soft-cream/80 mb-4">{dish.subtitle}</p>
              
              <Rating rating={dish.rating} reviews={dish.reviews} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-metallic-gold/20">
            {[
              { id: 'overview', label: 'OVERVIEW', icon: Info },
              { id: 'courses', label: 'COURSE STRUCTURE', icon: Utensils },
              { id: 'ingredients', label: 'INGREDIENTS', icon: ShoppingBag },
              { id: 'pairing', label: 'WINE PAIRING', icon: Wine },
              { id: 'reviews', label: 'REVIEWS', icon: MessageCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const hasContent = tab.id === 'courses' ? dish.courseStructure : 
                                tab.id === 'ingredients' ? dish.ingredients :
                                tab.id === 'pairing' ? dish.winePairing :
                                tab.id === 'reviews' ? dish.reviews : true;
              
              if (!hasContent) return null;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 font-bold transition-all relative ${
                    isActive
                      ? 'text-metallic-gold'
                      : 'text-soft-cream/40 hover:text-soft-cream/60'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{tab.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-metallic-gold to-transparent" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Description */}
                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-8 border border-metallic-gold/20">
                    <h3 className="text-2xl font-bold text-metallic-gold mb-4">THE STORY</h3>
                    <p className="text-soft-cream/80 text-lg leading-relaxed mb-4">{dish.description}</p>
                    {dish.longDescription && (
                      <p className="text-soft-cream/70 leading-relaxed">{dish.longDescription}</p>
                    )}
                  </div>

                  {/* Highlights */}
                  {dish.highlights && dish.highlights.length > 0 && (
                    <div className="bg-gradient-to-br from-royal-maroon/30 to-charcoal rounded-2xl p-8 border border-metallic-gold/30">
                      <h3 className="text-2xl font-bold text-metallic-gold mb-6">ROYAL HIGHLIGHTS</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dish.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-metallic-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-metallic-gold" />
                            </div>
                            <span className="text-soft-cream/90">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dish.preparationTime && (
                      <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-4 text-center border border-metallic-gold/20">
                        <Clock className="w-6 h-6 text-metallic-gold mx-auto mb-2" />
                        <div className="text-sm text-soft-cream/60">Prep Time</div>
                        <div className="font-bold text-metallic-gold text-sm">{dish.preparationTime}</div>
                      </div>
                    )}
                    
                    {dish.serves && (
                      <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-4 text-center border border-metallic-gold/20">
                        <Users className="w-6 h-6 text-metallic-gold mx-auto mb-2" />
                        <div className="text-sm text-soft-cream/60">Serves</div>
                        <div className="font-bold text-metallic-gold text-sm">{dish.serves}</div>
                      </div>
                    )}
                    
                    {dish.chef && (
                      <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-4 text-center border border-metallic-gold/20">
                        <ChefHat className="w-6 h-6 text-metallic-gold mx-auto mb-2" />
                        <div className="text-sm text-soft-cream/60">Chef</div>
                        <div className="font-bold text-metallic-gold text-sm">{dish.chef}</div>
                      </div>
                    )}
                    
                    {dish.chefExperience && (
                      <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-4 text-center border border-metallic-gold/20">
                        <Award className="w-6 h-6 text-metallic-gold mx-auto mb-2" />
                        <div className="text-sm text-soft-cream/60">Experience</div>
                        <div className="font-bold text-metallic-gold text-sm">{dish.chefExperience}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Course Structure Tab */}
              {activeTab === 'courses' && dish.courseStructure && dish.courseStructure.length > 0 && (
                <div className="space-y-6">
                  {dish.courseStructure.map((course, index) => (
                    <div key={index} className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                      <h3 className="text-xl font-bold text-metallic-gold mb-3">{course.course}</h3>
                      {course.description && (
                        <p className="text-soft-cream/70 text-sm mb-4">{course.description}</p>
                      )}
                      {course.items && course.items.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-soft-cream/80">
                              <CheckCircle className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Ingredients Tab */}
              {activeTab === 'ingredients' && dish.ingredients && dish.ingredients.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dish.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all">
                      <div className="text-4xl mb-3">{ingredient.icon || '🍽️'}</div>
                      <h4 className="font-bold text-white mb-2">{ingredient.name}</h4>
                      <p className="text-sm text-soft-cream/60">{ingredient.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Wine Pairing Tab */}
              {activeTab === 'pairing' && dish.winePairing && dish.winePairing.length > 0 && (
                <div className="space-y-4">
                  {dish.winePairing.map((wine, index) => (
                    <div key={index} className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20 flex flex-col md:flex-row gap-6">
                      <img 
                        src={wine.image} 
                        alt={wine.wine} 
                        className="w-full md:w-24 h-48 md:h-24 object-cover rounded-xl"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{wine.wine}</h4>
                        <p className="text-metallic-gold text-sm mb-2">{wine.region}</p>
                        <p className="text-soft-cream/70 text-sm mb-2">{wine.pairing}</p>
                        <div className="text-lg font-bold text-metallic-gold">{wine.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && dish.reviews && dish.reviews.length > 0 && (
                <div className="space-y-4">
                  {dish.reviews.map((review, index) => (
                    <div key={index} className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-metallic-gold"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                          }}
                        />
                        <div>
                          <h4 className="font-bold text-white">{review.name}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Rating rating={review.rating} reviews={0} />
                            <span className="text-soft-cream/40">•</span>
                            <span className="text-sm text-soft-cream/60">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-soft-cream/80 italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Order & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Price Card */}
                <ThreeDCard>
                  <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-8 border border-metallic-gold/30">
                    <div className="text-4xl font-bold text-metallic-gold mb-2">{dish.price}</div>
                    <div className="text-soft-cream/60 mb-6">per person</div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-metallic-gold">Quantity</span>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-full bg-charcoal/50 border border-metallic-gold/30 text-metallic-gold text-xl hover:bg-metallic-gold/20 transition-all"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-2xl font-bold text-metallic-gold">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-full bg-charcoal/50 border border-metallic-gold/30 text-metallic-gold text-xl hover:bg-metallic-gold/20 transition-all"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center mb-6 pt-4 border-t border-metallic-gold/30">
                      <span className="text-metallic-gold">Total</span>
                      <span className="text-3xl font-bold text-white">
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Order Buttons */}
                    <button className="w-full py-4 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal rounded-xl font-bold text-lg mb-3 hover:scale-105 transition-transform">
                      BOOK THIS DISH
                    </button>
                    
                    <button className="w-full py-4 bg-charcoal/50 border-2 border-metallic-gold/30 text-metallic-gold rounded-xl font-bold hover:bg-metallic-gold/20 transition-all">
                      ADD TO CART
                    </button>
                  </div>
                </ThreeDCard>

                {/* Availability Card */}
                {dish.availability && (
                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                    <h4 className="font-bold text-metallic-gold mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Availability
                    </h4>
                    <p className="text-soft-cream/80 mb-2">{dish.availability}</p>
                    {dish.specialNote && (
                      <div className="mt-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                        <p className="text-amber-500 text-sm flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{dish.specialNote}</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Dietary Info */}
                {dish.dietaryInfo && dish.dietaryInfo.length > 0 && (
                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 border border-metallic-gold/20">
                    <h4 className="font-bold text-metallic-gold mb-4">Dietary Information</h4>
                    <div className="space-y-2">
                      {dish.dietaryInfo.map((info, index) => (
                        <div key={index} className="flex items-center gap-2 text-soft-cream/70">
                          <div className="w-2 h-2 bg-metallic-gold rounded-full" />
                          <span className="text-sm">{info}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chef's Note */}
                <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-6 border border-amber-500/30">
                  <h4 className="font-bold text-amber-500 mb-2 flex items-center gap-2">
                    <ChefHat className="w-5 h-5" />
                    Chef's Note
                  </h4>
                  <p className="text-soft-cream/70 italic text-sm">
                    "Every dish is prepared with the same love and care as I would for my own family. 
                    Each ingredient is hand-picked to ensure the highest quality royal dining experience."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt={dish.chef}
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                      }}
                    />
                    <div>
                      <p className="font-bold text-white text-sm">{dish.chef}</p>
                      <p className="text-xs text-soft-cream/60">Executive Chef</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          {dish.gallery && dish.gallery.length > 0 && (
            <section className="mt-16">
              <h3 className="text-2xl font-bold text-metallic-gold mb-6">VISUAL JOURNEY</h3>
              <ImageGallery images={dish.gallery} title={dish.title} />
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default DishDetails;