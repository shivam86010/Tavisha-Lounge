// src/components/RoyalDishDetail.jsx
import React, { useState, useEffect } from 'react';
import {
  Crown, Diamond, Star, Award, Clock, Flame, Leaf,
  Wine, Fish, ChefHat, Heart, Share2, Bookmark,
  ChevronLeft, ChevronRight, Info, Sparkles,
  Thermometer, Droplets, Scale, Users, Calendar,
  MapPin, Phone, Mail, Globe, Instagram,
  Facebook, Twitter, AlertCircle, CheckCircle,
  XCircle, Utensils, Coffee, GlassWater,
  Salad, Pizza, Soup, Beef, Wheat,
  Egg, Milk, Apple, Copy, Maximize2,
  Minimize2, Play, Pause, Volume2,
  VolumeX, ThumbsUp, MessageCircle,
  TrendingUp, Award as AwardIcon
} from 'lucide-react';

// Mock data for related dishes
const RELATED_DISHES = [
  {
    id: 'related-1',
    name: 'TANDOORI TIGER PRAWNS',
    price: 2800,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'related-2',
    name: 'LUCKNOWI GALOUTI KEBAB',
    price: 2400,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'related-3',
    name: 'TRUFFLE BUTTER CHICKEN',
    price: 3200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

// Customer reviews
const CUSTOMER_REVIEWS = [
  {
    id: 'review-1',
    name: 'RAJIV MALHOTRA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'Absolutely divine! The flavors are perfectly balanced. This is what royal cuisine should taste like. The presentation was spectacular and the service impeccable.',
    likes: 24,
    dishes: ['Truffle Butter Chicken', 'Garlic Naan']
  },
  {
    id: 'review-2',
    name: 'ANITA SHARMA',
    avatar: 'https://images.unsplash.com/photo-1494790108777-466fd34549c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '5 days ago',
    comment: 'Best Indian fine dining experience in the city. The attention to detail in every dish is remarkable. Highly recommended for special occasions.',
    likes: 18,
    dishes: ['Dal Makhani', 'Tandoori Platter']
  },
  {
    id: 'review-3',
    name: 'VIKRAM SINGH',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 4,
    date: '1 week ago',
    comment: 'Excellent food and ambiance. The wine pairing suggestions were perfect. A bit pricey but worth every penny for the experience.',
    likes: 12,
    dishes: ['Rogan Josh', 'Biryani']
  }
];

const RoyalDishDetail = ({ dish, onBack, onAddToWishlist, isInWishlist }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPairingGuide, setShowPairingGuide] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  
  // Sample dish data (replace with actual props)
  const dishData = dish || {
    id: 'dish-001',
    name: 'TANDOORI TIGER PRAWNS',
    subtitle: 'The Monarch\'s Choice',
    description: 'Jumbo prawns marinated in a secret blend of 25 royal spices, grilled to perfection in our traditional clay oven. This dish represents the pinnacle of coastal Indian cuisine, prepared using techniques passed down through generations of master chefs.',
    longDescription: 'Our signature Tandoori Tiger Prawns are a testament to the rich culinary heritage of India\'s coastal regions. Each prawn is carefully selected for its size and freshness, then marinated for 24 hours in a proprietary blend of 25 hand-ground spices including Kashmiri chili, kasuri methi, and a hint of saffron. The marination process, developed over decades, ensures that every bite is infused with complex flavors while maintaining the natural sweetness of the prawns. Grilled in our traditional clay tandoor at precisely 450°C, the prawns emerge with a perfect char and smoky aroma that elevates this dish to royal status.',
    price: 2800,
    calories: 320,
    protein: '28g',
    carbs: '12g',
    fat: '18g',
    prepTime: '25 mins',
    cookingTime: '15 mins',
    totalTime: '40 mins',
    spiceLevel: 3,
    difficulty: 'Expert',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSignature: true,
    isSeasonal: false,
    isChefSpecial: true,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    videoUrl: 'https://example.com/video.mp4',
    ingredients: [
      { name: 'Tiger Prawns', quantity: '6 pieces', notes: 'Fresh, jumbo-sized' },
      { name: 'Kashmiri Chili', quantity: '2 tbsp', notes: 'For color and heat' },
      { name: 'Kasuri Methi', quantity: '1 tbsp', notes: 'Dried fenugreek leaves' },
      { name: 'Saffron', quantity: '1/4 tsp', notes: 'Kashmiri saffron' },
      { name: 'Ginger-Garlic Paste', quantity: '2 tbsp', notes: 'Freshly ground' },
      { name: 'Mustard Oil', quantity: '3 tbsp', notes: 'For authentic flavor' },
      { name: 'Greek Yogurt', quantity: '1/2 cup', notes: 'For marination' },
      { name: 'Lemon Juice', quantity: '2 tbsp', notes: 'Freshly squeezed' }
    ],
    origin: 'Coastal India',
    history: 'This recipe dates back to the royal kitchens of the Mughal Empire, where it was created for emperors who craved the flavors of the coast. The combination of tandoor cooking with coastal ingredients represents the fusion of two great culinary traditions.',
    chef: {
      name: 'CHEF ARJUN MEHRA',
      title: 'Culinary Director',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      note: 'This dish represents my interpretation of a recipe passed down through five generations of royal chefs.'
    },
    winePairing: 'Sancerre',
    wineNotes: 'The crisp acidity and mineral notes of Sancerre complement the succulent prawns perfectly, while its citrus undertones enhance the subtle spice blend.',
    beerPairing: 'Belgian Witbier',
    cocktailPairing: 'Saffron Martini',
    allergens: ['Shellfish', 'Dairy'],
    dietaryInfo: ['Contains Shellfish', 'Contains Dairy', 'Gluten-Free'],
    servingSize: '6 pieces',
    serves: '2 people',
    bestFor: ['Dinner', 'Special Occasions', 'Date Night'],
    availableFrom: '6:00 PM',
    availableTo: '11:00 PM',
    minOrder: 1,
    maxOrder: 10,
    tags: ['Signature', 'Premium', 'Seafood', 'Tandoori'],
    awards: [
      { name: 'Best Seafood Dish 2024', organization: 'Culinary Excellence Awards' },
      { name: 'People\'s Choice Award', organization: 'Food Critics Circle' }
    ],
    certifications: ['Sustainable Seafood', 'Traditional Recipe'],
    pairings: [
      { type: 'Wine', name: 'Sancerre', price: 4500 },
      { type: 'Wine', name: 'Chablis', price: 4200 },
      { type: 'Beer', name: 'Belgian Witbier', price: 800 },
      { type: 'Cocktail', name: 'Saffron Martini', price: 1200 }
    ],
    similarDishes: RELATED_DISHES,
    reviews: CUSTOMER_REVIEWS,
    nutritionFacts: {
      calories: 320,
      totalFat: '18g',
      saturatedFat: '4g',
      cholesterol: '180mg',
      sodium: '720mg',
      totalCarbs: '12g',
      dietaryFiber: '2g',
      sugars: '3g',
      protein: '28g',
      vitaminA: '15%',
      vitaminC: '8%',
      calcium: '6%',
      iron: '20%'
    }
  };

  // Handle fullscreen image
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsImageFullscreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Calculate total price
  const totalPrice = dishData.price * quantity;

  // Spice level indicator
  const renderSpiceLevel = () => {
    const levels = [1, 2, 3];
    return (
      <div className="flex items-center gap-1">
        {levels.map(level => (
          <Flame
            key={level}
            className={`w-5 h-5 ${
              level <= dishData.spiceLevel 
                ? 'text-red-500 fill-red-500' 
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Fullscreen Image Modal */}
      {isImageFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={() => setIsImageFullscreen(false)}
            className="absolute top-8 right-8 text-gray-400 hover:text-white z-10"
          >
            <XCircle className="w-10 h-10" />
          </button>
          
          <button
            onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : dishData.images.length - 1))}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <img
            src={dishData.images[selectedImage]}
            alt={dishData.name}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button
            onClick={() => setSelectedImage(prev => (prev < dishData.images.length - 1 ? prev + 1 : 0))}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {dishData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedImage 
                    ? 'w-8 bg-yellow-500' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </button>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Menu</span>
          <ChevronRight className="w-4 h-4" />
          <span>Royal Beginnings</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-yellow-500">{dishData.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div 
              className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => setIsImageFullscreen(true)}
            >
              <img
                src={dishData.images[selectedImage]}
                alt={dishData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-12 h-12 text-white" />
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {dishData.isSignature && (
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    SIGNATURE
                  </div>
                )}
                {dishData.isChefSpecial && (
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1">
                    <ChefHat className="w-4 h-4" />
                    CHEF'S SPECIAL
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/30">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold text-white">{dishData.rating}</span>
                  <span className="text-gray-400 text-sm">({dishData.reviews})</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {dishData.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === selectedImage 
                      ? 'ring-2 ring-yellow-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Dish Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-yellow-500 mb-2 font-serif">
                {dishData.name}
              </h1>
              <p className="text-xl text-gray-400">{dishData.subtitle}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-2xl border border-yellow-500/20">
                <Clock className="w-5 h-5 text-yellow-500 mb-2" />
                <p className="text-sm text-gray-400">Prep Time</p>
                <p className="font-bold text-white">{dishData.prepTime}</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-2xl border border-yellow-500/20">
                <Thermometer className="w-5 h-5 text-yellow-500 mb-2" />
                <p className="text-sm text-gray-400">Spice Level</p>
                <div className="mt-1">{renderSpiceLevel()}</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-2xl border border-yellow-500/20">
                <Users className="w-5 h-5 text-yellow-500 mb-2" />
                <p className="text-sm text-gray-400">Serves</p>
                <p className="font-bold text-white">{dishData.serves}</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-2xl border border-yellow-500/20">
                <Flame className="w-5 h-5 text-yellow-500 mb-2" />
                <p className="text-sm text-gray-400">Calories</p>
                <p className="font-bold text-white">{dishData.calories}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">DESCRIPTION</h3>
              <p className="text-gray-300 leading-relaxed">{dishData.description}</p>
            </div>

            {/* Dietary Info */}
            <div className="flex flex-wrap gap-3">
              {dishData.isVegetarian && (
                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30 flex items-center gap-1">
                  <Leaf className="w-4 h-4" />
                  Vegetarian
                </span>
              )}
              {dishData.isVegan && (
                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30 flex items-center gap-1">
                  <Leaf className="w-4 h-4" />
                  Vegan
                </span>
              )}
              {dishData.isGlutenFree && (
                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30 flex items-center gap-1">
                  <Wheat className="w-4 h-4" />
                  Gluten Free
                </span>
              )}
              {dishData.allergens.map((allergen, index) => (
                <span key={index} className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm border border-red-500/30 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {allergen}
                </span>
              ))}
            </div>

            {/* Price and Actions */}
            <div className="pt-6 border-t border-yellow-500/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Price per serving</p>
                  <p className="text-4xl font-bold text-yellow-500">₹{dishData.price}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isLiked 
                        ? 'bg-red-500/20 text-red-500 border-red-500/30' 
                        : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-red-500'
                    } border`}
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button
                    onClick={() => onAddToWishlist(dishData.id)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isInWishlist 
                        ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' 
                        : 'bg-gray-800 text-gray-400 border-gray-700 hover:text-yellow-500'
                    } border`}
                  >
                    <Bookmark className={`w-6 h-6 ${isInWishlist ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button
                    onClick={() => {
                      setIsShared(true);
                      setTimeout(() => setIsShared(false), 2000);
                    }}
                    className="p-3 bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400">Quantity:</span>
                <div className="flex items-center bg-gray-900 rounded-xl border border-yellow-500/30">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => Math.min(dishData.maxOrder, prev + 1))}
                    className="px-4 py-2 text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-400">Max: {dishData.maxOrder}</span>
              </div>

              {/* Special Requests */}
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Special Requests</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any allergies, dietary preferences, or special instructions..."
                  className="w-full px-4 py-3 bg-gray-900 border border-yellow-500/30 rounded-xl focus:border-yellow-500 focus:outline-none text-gray-200 placeholder-gray-600"
                  rows="3"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 text-lg">
                  Add to Cart • ₹{totalPrice}
                </button>
                <button className="flex-1 border-2 border-yellow-500/30 text-yellow-500 font-bold py-4 px-6 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 text-lg">
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-yellow-500/20 mb-8">
          <div className="flex gap-8">
            {['details', 'ingredients', 'pairings', 'reviews', 'story'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-lg font-semibold capitalize transition-all duration-300 relative ${
                  activeTab === tab 
                    ? 'text-yellow-500' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[60vh] mb-16">
          {activeTab === 'details' && (
            <div className="grid grid-cols-3 gap-8">
              {/* Main Details */}
              <div className="col-span-2 space-y-8">
                {/* Long Description */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">The Experience</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{dishData.longDescription}</p>
                </div>

                {/* Nutritional Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-yellow-500">Nutritional Information</h3>
                    <button
                      onClick={() => setShowNutrition(!showNutrition)}
                      className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      {showNutrition ? 'Show Less' : 'View Full Details'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                      <p className="text-gray-400 mb-1">Calories</p>
                      <p className="text-xl font-bold text-white">{dishData.nutritionFacts.calories}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                      <p className="text-gray-400 mb-1">Protein</p>
                      <p className="text-xl font-bold text-white">{dishData.nutritionFacts.protein}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                      <p className="text-gray-400 mb-1">Carbs</p>
                      <p className="text-xl font-bold text-white">{dishData.nutritionFacts.totalCarbs}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                      <p className="text-gray-400 mb-1">Fat</p>
                      <p className="text-xl font-bold text-white">{dishData.nutritionFacts.totalFat}</p>
                    </div>
                  </div>

                  {showNutrition && (
                    <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-yellow-500/20">
                      <h4 className="text-lg font-semibold text-yellow-500 mb-4">Complete Nutrition Facts</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(dishData.nutritionFacts).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-yellow-500/10">
                            <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Awards & Recognition */}
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">Awards & Recognition</h3>
                  <div className="space-y-4">
                    {dishData.awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-4 bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                        <AwardIcon className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-white">{award.name}</p>
                          <p className="text-gray-400 text-sm">{award.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Chef's Note */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <ChefHat className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-lg font-bold text-yellow-500">CHEF'S NOTE</h3>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={dishData.chef.image}
                      alt={dishData.chef.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                    />
                    <div>
                      <p className="font-bold text-white">{dishData.chef.name}</p>
                      <p className="text-sm text-gray-400">{dishData.chef.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{dishData.chef.note}"</p>
                </div>

                {/* Origin & History */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-lg font-bold text-yellow-500 mb-4">ORIGIN & HISTORY</h3>
                  <p className="text-gray-300 mb-2"><span className="text-yellow-500">Origin:</span> {dishData.origin}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{dishData.history}</p>
                </div>

                {/* Availability */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-lg font-bold text-yellow-500 mb-4">AVAILABILITY</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Available from:</span>
                      <span className="text-white font-semibold">{dishData.availableFrom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Available to:</span>
                      <span className="text-white font-semibold">{dishData.availableTo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Minimum order:</span>
                      <span className="text-white font-semibold">{dishData.minOrder} serving</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-lg font-bold text-yellow-500 mb-4">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {dishData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-yellow-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="grid grid-cols-2 gap-8">
              {/* Ingredients List */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">Ingredients</h3>
                <div className="space-y-4">
                  {dishData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start gap-4 bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <Salad className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold text-white">{ingredient.name}</span>
                          <span className="text-yellow-500 font-semibold">{ingredient.quantity}</span>
                        </div>
                        {ingredient.notes && (
                          <p className="text-sm text-gray-400 mt-1">{ingredient.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Process */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">Preparation Process</h3>
                <div className="space-y-6">
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-3">Marination</h4>
                    <p className="text-gray-300">The prawns are marinated for 24 hours in a blend of 25 hand-ground spices, including Kashmiri chili, kasuri methi, and saffron, along with Greek yogurt and mustard oil.</p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-3">Grilling</h4>
                    <p className="text-gray-300">Grilled in a traditional clay tandoor at 450°C for 12-15 minutes, ensuring a perfect char while keeping the prawns juicy and tender.</p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
                    <h4 className="text-lg font-semibold text-yellow-500 mb-3">Finishing</h4>
                    <p className="text-gray-300">Finished with a drizzle of lemon juice and a sprinkle of chaat masala, served with mint chutney and pickled onions.</p>
                  </div>
                </div>

                {/* Allergen Warning */}
                <div className="mt-6 bg-red-500/10 p-6 rounded-xl border border-red-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-red-500">Allergen Information</h4>
                  </div>
                  <p className="text-gray-300">Contains: {dishData.allergens.join(', ')}</p>
                  <p className="text-sm text-gray-400 mt-2">Prepared in a kitchen that handles nuts, dairy, and gluten.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pairings' && (
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">Perfect Pairings</h3>
              
              {/* Wine Pairing */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Wine className="w-6 h-6 text-yellow-500" />
                    <h4 className="text-xl font-bold text-yellow-500">Wine Pairing</h4>
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">{dishData.winePairing}</p>
                  <p className="text-gray-400 mb-4">{dishData.wineNotes}</p>
                  <button className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-1">
                    View Wine Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <GlassWater className="w-6 h-6 text-yellow-500" />
                    <h4 className="text-xl font-bold text-yellow-500">Cocktail Pairing</h4>
                  </div>
                  <p className="text-2xl font-bold text-white mb-2">{dishData.cocktailPairing}</p>
                  <p className="text-gray-400 mb-4">A sophisticated cocktail that complements the royal flavors of this dish.</p>
                  <button className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-1">
                    View Cocktail Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* All Pairings */}
              <h4 className="text-xl font-bold text-yellow-500 mb-4">More Pairing Options</h4>
              <div className="grid grid-cols-2 gap-4">
                {dishData.pairings.map((pairing, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">{pairing.type}</span>
                      <p className="font-bold text-white">{pairing.name}</p>
                    </div>
                    <span className="text-yellow-500 font-bold">₹{pairing.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-yellow-500">Customer Reviews</h3>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2 rounded-full font-bold hover:shadow-2xl transition-all duration-300">
                  Write a Review
                </button>
              </div>

              {/* Rating Summary */}
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20 mb-8">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-yellow-500">{dishData.rating}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(dishData.rating)
                              ? 'fill-yellow-500 text-yellow-500'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Based on {dishData.reviews} reviews</p>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 w-8">{star} ★</span>
                        <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : 2}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 w-8">
                          {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '7%' : '3%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {dishData.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white">{review.name}</h4>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-300 mb-3">{review.comment}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {review.dishes.map((dish, i) => (
                              <span key={i} className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
                                {dish}
                              </span>
                            ))}
                          </div>
                          <button className="flex items-center gap-1 text-gray-400 hover:text-yellow-500 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">{review.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold">
                  Load More Reviews
                </button>
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-500 mb-6">The Story Behind the Dish</h3>
                
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-3">Royal Origins</h4>
                  <p className="text-gray-300 leading-relaxed">
                    This recipe was first created in the royal kitchens of the Mughal Empire in the 17th century. 
                    It was said to be Emperor Shah Jahan's favorite dish, prepared only on special occasions by his 
                    personal chef.
                  </p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-3">Generations of Expertise</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The recipe has been passed down through five generations of royal chefs, each adding their own 
                    touch while preserving the original essence. Chef Arjun Mehra learned it from his grandfather, 
                    who served as the head chef in the last royal household of Lucknow.
                  </p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-3">Modern Interpretation</h4>
                  <p className="text-gray-300 leading-relaxed">
                    While respecting tradition, Chef Arjun has introduced subtle refinements - using sustainable 
                    seafood, incorporating modern cooking techniques, and presenting the dish in a way that appeals 
                    to contemporary connoisseurs.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Timeline */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-4">Culinary Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-20 text-yellow-500 font-bold">1650</div>
                      <div className="flex-1">
                        <p className="text-white">First created in Mughal royal kitchen</p>
                        <p className="text-sm text-gray-400">For Emperor Shah Jahan</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 text-yellow-500 font-bold">1857</div>
                      <div className="flex-1">
                        <p className="text-white">Recipe passed to royal chefs of Lucknow</p>
                        <p className="text-sm text-gray-400">Preserved during the rebellion</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 text-yellow-500 font-bold">1975</div>
                      <div className="flex-1">
                        <p className="text-white">Introduced to fine dining</p>
                        <p className="text-sm text-gray-400">First restaurant adaptation</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 text-yellow-500 font-bold">2024</div>
                      <div className="flex-1">
                        <p className="text-white">Awarded Best Seafood Dish</p>
                        <p className="text-sm text-gray-400">Culinary Excellence Awards</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Significance */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-3">Cultural Significance</h4>
                  <p className="text-gray-300 leading-relaxed">
                    This dish represents the fusion of two great culinary traditions - the tandoor cooking of 
                    North India and the seafood expertise of the coastal regions. It symbolizes the cultural 
                    exchange that occurred during the Mughal Empire and continues to influence Indian cuisine today.
                  </p>
                </div>

                {/* Featured In */}
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-500 mb-3">Featured In</h4>
                  <div className="space-y-2">
                    <p className="text-gray-300">• Culinary Excellence Magazine (2024)</p>
                    <p className="text-gray-300">• Royal Recipes: A Culinary Journey (2023)</p>
                    <p className="text-gray-300">• Top 100 Indian Dishes (2023)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Dishes */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6">You May Also Like</h3>
          <div className="grid grid-cols-3 gap-6">
            {RELATED_DISHES.map((dish, index) => (
              <div
                key={dish.id}
                className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-bold text-white mb-1">{dish.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500 font-bold">₹{dish.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm text-white">{dish.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reserve Table Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-3xl border border-yellow-500/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Reserve Your Table</h3>
              <p className="text-gray-400">Experience this royal delicacy in person</p>
            </div>
            <Crown className="w-12 h-12 text-yellow-500/30" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl focus:border-yellow-500 focus:outline-none text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Time</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl focus:border-yellow-500 focus:outline-none text-gray-200"
              >
                <option value="">Select time</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Guests</label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl focus:border-yellow-500 focus:outline-none text-gray-200"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
                Check Availability
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Share Notification */}
      {isShared && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl animate-slideUp z-50 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default RoyalDishDetail;