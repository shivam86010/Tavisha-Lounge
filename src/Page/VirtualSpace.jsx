import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Pause,
  Map,
  Info,
  Volume2,
  Compass,
  Camera,
  Eye,
  Heart,
  Share2,
  X,
  ZoomIn,
  ZoomOut,
  Navigation,
  Star,
  Sparkles,
  Users,
  Calendar,
  Clock,
  Award,
  Music,
  Instagram,
  Twitter,
  Facebook,
  ArrowUp,
  Bookmark,
  MessageCircle,
  Video,
  Headphones,
  Droplets,
  TrendingUp,
  Crown as CrownIcon,
  Scan,
  Wallet,
  Send,
  Check,
  Gift,
  Lightbulb,
  Sun,
  Moon,
  Crown,
  Play,
  Image as ImageIcon,
  Copy,
  MessageSquare,
  
} from "lucide-react";

const VirtualSpace = () => {
  const navigate = useNavigate();
  
  // Existing states
  const [currentScene, setCurrentScene] = useState("entrance");
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [viewMode, setViewMode] = useState("standard");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [likedSpots, setLikedSpots] = useState({});
  const [fullscreen, setFullscreen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [showVirtualAssistant, setShowVirtualAssistant] = useState(false);
  const [assistantMessage, setAssistantMessage] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: "",
  });
  const [ambientSound, setAmbientSound] = useState(false);
  const [soundVolume, setSoundVolume] = useState(0.3);
  const [weatherInfo, setWeatherInfo] = useState({
    temp: "24°C",
    condition: "Clear Sky",
    humidity: "65%",
    wind: "12 km/h",
    feelsLike: "23°C",
    uvIndex: "5",
  });
  const [showWeather, setShowWeather] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [userExperience, setUserExperience] = useState({
    timeSpent: 0,
    hotspotsClicked: 0,
    scenesVisited: 1,
    favorites: 0,
    shares: 0,
  });
  
  // New premium states
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showARMode, setShowARMode] = useState(false);
  const [showVRMode, setShowVRMode] = useState(false);
  const [showVoiceGuidance, setShowVoiceGuidance] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Welcome to Tavisha! How can I assist you today?", sender: "bot", time: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showPhotoBooth, setShowPhotoBooth] = useState(false);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [showGuestBook, setShowGuestBook] = useState(false);
  const [guestBookEntries, setGuestBookEntries] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [showVirtualGift, setShowVirtualGift] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [achievements, setAchievements] = useState([
    { id: 1, name: "First Steps", description: "Visit your first space", unlocked: false, icon: "👣" },
    { id: 2, name: "Explorer", description: "Visit all 5 spaces", unlocked: false, icon: "🗺️" },
    { id: 3, name: "Hotspot Hunter", description: "Discover 5 hotspots", unlocked: false, icon: "🎯" },
    { id: 4, name: "Photo Enthusiast", description: "Take your first screenshot", unlocked: false, icon: "📸" },
    { id: 5, name: "Share the Love", description: "Share a hotspot", unlocked: false, icon: "💝" },
    { id: 6, name: "Night Owl", description: "View a space at night", unlocked: false, icon: "🦉" },
    { id: 7, name: "Tour Guide", description: "Complete auto-rotate tour", unlocked: false, icon: "🎬" },
  ]);
  const [showMoodLighting, setShowMoodLighting] = useState(false);
  const [moodColor, setMoodColor] = useState("#d4af37");
  const [showAmbientSounds, setShowAmbientSounds] = useState(false);
  const [selectedAmbientSound, setSelectedAmbientSound] = useState("jazz");
  const [showLoyaltyPoints, setShowLoyaltyPoints] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [inviteCode, setInviteCode] = useState("TAVISHA" + Math.random().toString(36).substring(2, 8).toUpperCase());
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [showVirtualEvent, setShowVirtualEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showAmenityModal, setShowAmenityModal] = useState(false);
  
  const audioRef = useRef(null);
  const voiceGuidanceRef = useRef(null);
  const chatEndRef = useRef(null);
  const sceneStartTimeRef = useRef(Date.now());

  // Function to close all modals (for Control Bar auto-close)
  const closeAllModals = () => {
    setShowMap(false);
    setShowStats(false);
    setShowAchievements(false);
    setShowLoyaltyPoints(false);
    setShowVirtualAssistant(false);
    setShowLiveChat(false);
    setShowPhotoBooth(false);
    setShowGuestBook(false);
    setShowVirtualGift(false);
    setShowInviteFriends(false);
    setShowFeedback(false);
    setShowVirtualEvent(false);
    setShowAmbientSounds(false);
    setShowMoodLighting(false);
    setShowAmenityModal(false);
    setSelectedHotspot(null);
    setShowShareMenu(false);
  };

  // Toggle function with auto-close
  const toggleModal = (modalSetter, modalState, modalName) => {
    if (modalState) {
      modalSetter(false);
    } else {
      closeAllModals();
      modalSetter(true);
    }
  };

  // Ambient sounds library
  const ambientSoundsLibrary = {
    jazz: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    classical: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    nature: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lounge: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  };

  // Voice guidance phrases
  const voiceGuidancePhrases = {
    entrance: "Welcome to the Grand Entrance. Marvel at the stunning crystal chandelier and marble staircase.",
    dining: "Enter the Grand Dining Hall, where culinary excellence meets elegant ambiance.",
    lounge: "Relax in the Velvet Lounge. Enjoy signature cocktails and live jazz music.",
    terrace: "Experience the Sky Terrace with panoramic city views and infinity pool.",
    private: "Discover our Private Suites, perfect for intimate celebrations and business meetings.",
  };

  // Virtual events
  const virtualEvents = [
    { id: 1, name: "Wine Tasting Masterclass", date: "2024-04-15", time: "7:00 PM", spots: 25, price: "₹5,000", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Chef's Table Experience", date: "2024-04-20", time: "8:00 PM", spots: 12, price: "₹12,000", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Jazz Night Special", date: "2024-04-25", time: "9:00 PM", spots: 50, price: "₹2,500", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  // Amenity data for modal
  const amenityDetails = {
    "Valet Parking": {
      title: "Valet Parking Service",
      description: "Our complimentary valet parking service ensures a seamless arrival experience. Our professional valets will park your vehicle securely while you enjoy your visit.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Complimentary for all guests", "24/7 availability", "Secure monitored parking", "Electric vehicle charging available"],
      price: "Complimentary",
    },
    "24/7 Concierge": {
      title: "24/7 Concierge Service",
      description: "Our dedicated concierge team is available around the clock to assist with any request, from restaurant reservations to private jet charters.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["24/7 availability", "Multi-lingual staff", "Personal shopping assistance", "Event planning services"],
      price: "Complimentary",
    },
    "Welcome Champagne": {
      title: "Welcome Champagne",
      description: "Begin your experience with a glass of premium champagne upon arrival. Our sommelier-selected vintage sets the tone for an unforgettable visit.",
      image: "https://images.unsplash.com/photo-1551028718-5b0f7f9b6b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Premium vintage selection", "Served upon arrival", "Non-alcoholic options available", "Complimentary with all bookings"],
      price: "Complimentary",
    },
    "Personal Butler": {
      title: "Personal Butler Service",
      description: "Experience the pinnacle of luxury with your dedicated personal butler, attending to your every need throughout your visit.",
      image: "https://images.unsplash.com/photo-1578985545064-2f5b5c4a5e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Dedicated personal butler", "Customized service", "Priority reservations", "Special requests accommodated"],
      price: "Included with Private Suites",
    },
    "Private Chef": {
      title: "Private Chef Experience",
      description: "Enjoy a custom-crafted menu prepared by our Michelin-starred chef in the intimacy of your private dining space.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Custom menu creation", "Dietary accommodations", "Interactive dining experience", "Wine pairing available"],
      price: "From ₹15,000",
    },
    "Wine Pairing": {
      title: "Expert Wine Pairing",
      description: "Our master sommelier will curate the perfect wine selection to complement your culinary journey.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Sommelier consultation", "Rare vintage selections", "Flight tastings available", "Private cellar tours"],
      price: "From ₹5,000",
    },
    "Live Music": {
      title: "Live Music Entertainment",
      description: "Enjoy nightly performances from world-renowned jazz artists, classical musicians, and acoustic performers.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Live performances nightly", "Jazz, classical, and contemporary", "Private performances available", "Artist meet-and-greets"],
      price: "Included with dining",
    },
    "Custom Menus": {
      title: "Custom Menu Design",
      description: "Work with our culinary team to create a bespoke menu tailored to your preferences and dietary needs.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Personalized menu creation", "Dietary restrictions accommodated", "Seasonal ingredients", "Presentation consultation"],
      price: "From ₹8,000",
    },
    "Signature Cocktails": {
      title: "Signature Cocktail Collection",
      description: "Indulge in our exclusive collection of signature cocktails, crafted with premium spirits and house-made infusions.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["100+ signature cocktails", "Premium spirits", "Custom cocktail creation", "Mixology classes available"],
      price: "From ₹1,800",
    },
    "Cigar Lounge": {
      title: "Private Cigar Lounge",
      description: "Relax in our temperature-controlled cigar lounge featuring an extensive selection of premium cigars from around the world.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Humidor lockers available", "Premium cigar selection", "Ventilation system", "Whiskey pairing menu"],
      price: "Membership available",
    },
    "Private Booths": {
      title: "Private Dining Booths",
      description: "Intimate semi-private booths offering the perfect setting for romantic dinners and small gatherings.",
      image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Soundproofed privacy", "Personal service button", "Curtain enclosures available", "Ideal for 2-6 guests"],
      price: "Reservation required",
    },
    "Infinity Pool": {
      title: "Infinity Pool",
      description: "Experience our stunning heated infinity pool with underwater lighting and breathtaking city skyline views.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Heated year-round", "Underwater lighting", "Poolside service", "Sun loungers included"],
      price: "₹5,000 per session",
    },
    "Private Cabanas": {
      title: "Private Cabanas",
      description: "Luxury cabanas featuring personal butler service, climate control, and premium amenities for ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Personal butler", "Climate controlled", "Mini-bar included", "Private sunbeds"],
      price: "From ₹15,000",
    },
    "Fire Pits": {
      title: "Ambient Fire Pits",
      description: "Gather around our elegant fire pits, perfect for evening conversations and cozy moments under the stars.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Multiple seating areas", "S'mores service available", "Evening reservations", "Heated comfort"],
      price: "Complimentary",
    },
    "Retractable Roof": {
      title: "Retractable Roof System",
      description: "Enjoy al fresco dining regardless of weather with our state-of-the-art retractable roof system.",
      image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Weather-controlled", "Star-gazing mode", "Climate regulated", "Year-round access"],
      price: "Included",
    },
    "Private Fireplace": {
      title: "Private Fireplace",
      description: "Cozy up to your own private fireplace in our exclusive suites, creating the perfect intimate atmosphere.",
      image: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Gas fireplace", "Ambient lighting", "Cozy seating", "Perfect for romance"],
      price: "Suite exclusive",
    },
    "Wine Cellar Access": {
      title: "Exclusive Wine Cellar Access",
      description: "Explore our temperature-controlled wine cellar featuring over 2,500 rare vintages from around the world.",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: ["Guided tours", "Private tastings", "Rare vintage selection", "Sommelier-led experiences"],
      price: "From ₹15,000",
    },
  };

  // Track user experience
  useEffect(() => {
    const interval = setInterval(() => {
      setUserExperience(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + 1,
      }));
      if (userExperience.timeSpent % 60 === 0 && userExperience.timeSpent > 0) {
        setLoyaltyPoints(prev => prev + 10);
        showNotificationMessage("🎉 You earned 10 loyalty points!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scene visits and unlock achievements
  useEffect(() => {
    setUserExperience(prev => ({
      ...prev,
      scenesVisited: Math.min(prev.scenesVisited + 1, Object.keys(scenes).length),
    }));
    
    const updatedAchievements = [...achievements];
    if (userExperience.scenesVisited === Object.keys(scenes).length && !updatedAchievements[1].unlocked) {
      updatedAchievements[1].unlocked = true;
      setAchievements(updatedAchievements);
      showNotificationMessage("🏆 Achievement Unlocked: Explorer! You've visited all spaces.");
      setLoyaltyPoints(prev => prev + 50);
    }
  }, [currentScene]);

  // Track hotspots clicked for achievements
  useEffect(() => {
    if (userExperience.hotspotsClicked >= 5 && !achievements[2].unlocked) {
      const updatedAchievements = [...achievements];
      updatedAchievements[2].unlocked = true;
      setAchievements(updatedAchievements);
      showNotificationMessage("🎯 Achievement Unlocked: Hotspot Hunter! You've discovered 5 hotspots.");
      setLoyaltyPoints(prev => prev + 30);
    }
  }, [userExperience.hotspotsClicked]);

 
  

  // Auto-scroll chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Check if first time visitor
  useEffect(() => {
    const hasVisited = localStorage.getItem("virtual_tour_visited");
    if (hasVisited) {
      setShowGuide(false);
    }
  }, []);

  const closeGuide = () => {
    setShowGuide(false);
    localStorage.setItem("virtual_tour_visited", "true");
    showNotificationMessage("✨ Welcome to your virtual tour! Click on glowing hotspots to explore.");
  };

  // Ambient sound effect
  useEffect(() => {
    if (ambientSound && audioRef.current) {
      audioRef.current.src = ambientSoundsLibrary[selectedAmbientSound];
      audioRef.current.volume = soundVolume;
      audioRef.current.loop = true;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [ambientSound, soundVolume, selectedAmbientSound]);

  // Voice guidance
  useEffect(() => {
    if (showVoiceGuidance && voiceGuidanceRef.current) {
      const utterance = new SpeechSynthesisUtterance(voiceGuidancePhrases[currentScene]);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }, [showVoiceGuidance, currentScene]);

  // Screenshot function
  const takeScreenshot = () => {
    const canvas = document.createElement("canvas");
    const img = document.querySelector("img");
    if (img) {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.download = `tavisha-${currentScene}-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
      setCapturedPhotos(prev => [...prev, canvas.toDataURL()]);
      showNotificationMessage("📸 Screenshot saved! Check your downloads.");
      
      if (!achievements[3].unlocked) {
        const updatedAchievements = [...achievements];
        updatedAchievements[3].unlocked = true;
        setAchievements(updatedAchievements);
        showNotificationMessage("🏆 Achievement Unlocked: Photo Enthusiast!");
        setLoyaltyPoints(prev => prev + 20);
      }
    }
  };

  // Night time achievement
  useEffect(() => {
    if (timeOfDay === "night" && !achievements[5].unlocked) {
      const updatedAchievements = [...achievements];
      updatedAchievements[5].unlocked = true;
      setAchievements(updatedAchievements);
      showNotificationMessage("🦉 Achievement Unlocked: Night Owl!");
      setLoyaltyPoints(prev => prev + 25);
    }
  }, [timeOfDay]);

  // Auto-rotate achievement
  useEffect(() => {
    if (isAutoRotating) {
      const autoRotateInterval = setInterval(() => {
        if (!achievements[6].unlocked) {
          const updatedAchievements = [...achievements];
          updatedAchievements[6].unlocked = true;
          setAchievements(updatedAchievements);
          showNotificationMessage("🎬 Achievement Unlocked: Tour Guide!");
          setLoyaltyPoints(prev => prev + 40);
        }
      }, 30000);
      return () => clearInterval(autoRotateInterval);
    }
  }, [isAutoRotating]);

  // Handle share for achievements
  const handleShareWithAchievement = (platform) => {
    handleShare(platform);
    if (!achievements[4].unlocked) {
      const updatedAchievements = [...achievements];
      updatedAchievements[4].unlocked = true;
      setAchievements(updatedAchievements);
      showNotificationMessage("💝 Achievement Unlocked: Share the Love!");
      setLoyaltyPoints(prev => prev + 15);
    }
  };

  // Handle live chat
  const sendChatMessage = () => {
    if (!newMessage.trim()) return;
    setChatMessages(prev => [...prev, { id: Date.now(), text: newMessage, sender: "user", time: new Date() }]);
    setTimeout(() => {
      const responses = [
        "Thank you for your message! Our concierge will get back to you shortly.",
        "Great question! Would you like to schedule a private tour?",
        "I'd be happy to help with your booking. What date are you interested in?",
        "Thanks for reaching out! Our team will assist you within minutes.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: "bot", time: new Date() }]);
    }, 1000);
    setNewMessage("");
  };

  // Handle guest book submission
  const addGuestBookEntry = () => {
    if (!guestName.trim() || !guestMessage.trim()) return;
    setGuestBookEntries(prev => [...prev, { id: Date.now(), name: guestName, message: guestMessage, date: new Date() }]);
    setGuestName("");
    setGuestMessage("");
    showNotificationMessage("📝 Thank you for signing our guest book!");
    setLoyaltyPoints(prev => prev + 10);
  };

  // Handle virtual gift selection
  const sendVirtualGift = (gift) => {
    setSelectedGift(gift);
    showNotificationMessage(`🎁 You sent a ${gift.name}! The recipient will be notified.`);
    setLoyaltyPoints(prev => prev + 20);
    setTimeout(() => setShowVirtualGift(false), 2000);
  };

  // Handle feedback submission
  const submitFeedback = () => {
    if (!feedbackComment.trim()) return;
    showNotificationMessage(`⭐ Thank you for your ${feedbackRating}-star rating!`);
    setLoyaltyPoints(prev => prev + 25);
    setShowFeedback(false);
    setFeedbackComment("");
  };

  // Invite friends
  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode);
    showNotificationMessage("📋 Invite code copied! Share with friends to earn points.");
    setLoyaltyPoints(prev => prev + 5);
  };

  // Register for virtual event
  const registerForEvent = (event) => {
    setCurrentEvent(event);
    showNotificationMessage(`🎉 Registered for ${event.name}! Check your email for details.`);
    setLoyaltyPoints(prev => prev + 30);
  };

  // Handle amenity click
  const handleAmenityClick = (amenity) => {
    if (amenityDetails[amenity]) {
      setSelectedAmenity(amenityDetails[amenity]);
      setShowAmenityModal(true);
    }
  };

  // Tour scenes data
  const scenes = {
    entrance: {
      id: "entrance",
      name: "Grand Entrance",
      subtitle: "Welcome to Royal Opulence",
      description: "Step into a world of timeless elegance where every detail speaks of luxury and sophistication.",
      longDescription: "As you enter through our magnificent doors, you're greeted by a soaring ceiling featuring hand-painted frescoes and a stunning Murano crystal chandelier.",
      image: {
        day: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        night: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
      amenities: ["Valet Parking", "24/7 Concierge", "Welcome Champagne", "Personal Butler"],
      hotspots: [
        {
          id: 1,
          x: 65,
          y: 45,
          title: "Royal Chandelier",
          description: "Handcrafted crystal chandelier from Murano, Italy.",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          price: "₹2.5 Cr",
          availability: "Viewable 24/7",
          type: "artwork",
        },
        {
          id: 2,
          x: 30,
          y: 60,
          title: "Concierge Desk",
          description: "24/7 personalized service with dedicated butlers.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          price: "Complimentary",
          availability: "Always Available",
          type: "service",
        },
      ],
      stats: {
        area: "5,000 sq ft",
        capacity: "200 guests",
        built: "2020",
        architect: "Foster + Partners",
        rating: "5.0 ★",
      },
    },
    dining: {
      id: "dining",
      name: "Grand Dining Hall",
      subtitle: "Culinary Excellence",
      description: "Experience gastronomic artistry in our magnificent dining hall.",
      image: {
        day: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        night: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gallery: [],
      amenities: ["Private Chef", "Wine Pairing", "Live Music", "Custom Menus"],
      hotspots: [],
      stats: {
        area: "8,000 sq ft",
        capacity: "120 guests",
        chef: "Antoine Dubois (3★ Michelin)",
        wine: "2,500+ labels",
        rating: "4.9 ★",
      },
    },
    lounge: {
      id: "lounge",
      name: "Velvet Lounge",
      subtitle: "Sophisticated Relaxation",
      description: "Unwind in our plush lounge featuring live jazz, signature cocktails.",
      image: {
        day: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        night: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gallery: [],
      amenities: ["Signature Cocktails", "Live Jazz", "Cigar Lounge", "Private Booths"],
      hotspots: [],
      stats: {
        area: "3,500 sq ft",
        capacity: "80 guests",
        cocktails: "100+ signatures",
        music: "Live nightly",
        rating: "4.8 ★",
      },
    },
    terrace: {
      id: "terrace",
      name: "Sky Terrace",
      subtitle: "Al Fresco Grandeur",
      description: "Dine under the stars on our open-air terrace with panoramic city views.",
      image: {
        day: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        night: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gallery: [],
      amenities: ["Infinity Pool", "Private Cabanas", "Fire Pits", "Retractable Roof"],
      hotspots: [],
      stats: {
        height: "45th floor",
        capacity: "150 guests",
        pool: "25m infinity",
        view: "360° cityscape",
        rating: "4.9 ★",
      },
    },
    private: {
      id: "private",
      name: "Private Suites",
      subtitle: "Intimate Luxury",
      description: "Exclusive private dining rooms designed for unforgettable moments.",
      image: {
        day: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        night: "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gallery: [],
      amenities: ["Private Fireplace", "Personal Chef", "Wine Cellar Access", "24/7 Butler"],
      hotspots: [],
      stats: {
        suites: "6 exclusive",
        capacity: "8-24 guests",
        butler: "24/7 service",
        privacy: "Guaranteed",
        rating: "5.0 ★",
      },
    },
  };

  const currentSceneData = scenes[currentScene];
  const currentImage = currentSceneData?.image?.[timeOfDay] || currentSceneData?.image?.day;

  // Auto-rotate effect
  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      const sceneKeys = Object.keys(scenes);
      let currentIndex = sceneKeys.indexOf(currentScene);
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % sceneKeys.length;
        navigateToScene(sceneKeys[nextIndex]);
        currentIndex = nextIndex;
      }, 6000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoRotating, currentScene]);

  const navigateToScene = (sceneKey) => {
    setTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentScene(sceneKey);
      setSelectedHotspot(null);
      setTimeout(() => {
        setTransitioning(false);
      }, 500);
    }, 300);
  };

  const handleHotspotClick = (hotspot) => {
    setSelectedHotspot(hotspot);
    setUserExperience(prev => ({
      ...prev,
      hotspotsClicked: prev.hotspotsClicked + 1,
    }));
  };

  const toggleLike = (id) => {
    setLikedSpots((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    if (!likedSpots[id]) {
      setUserExperience(prev => ({ ...prev, favorites: prev.favorites + 1 }));
      showNotificationMessage("❤️ Added to your favorites!");
    }
  };

  const toggleTimeOfDay = () => {
    setTimeOfDay(timeOfDay === "day" ? "night" : "day");
    showNotificationMessage(timeOfDay === "day" ? "🌙 Switching to Night Mode" : "☀️ Switching to Day Mode");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
      showNotificationMessage("🎬 Entering Fullscreen Mode");
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Experience the luxury of ${currentSceneData.name} at Tavisha!`;
    
    switch(platform) {
      case 'instagram':
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        showNotificationMessage("🔗 Link copied to clipboard!");
        break;
      default:
        break;
    }
    setShowShareMenu(false);
    setUserExperience(prev => ({ ...prev, shares: prev.shares + 1 }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking details:", bookingDetails);
    showNotificationMessage("✨ Booking request sent! Our concierge will contact you shortly.");
    setShowBookingModal(false);
    setBookingDetails({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", specialRequests: "" });
    setLoyaltyPoints(prev => prev + 50);
  };

  const getAssistantResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("price") || lowerMsg.includes("cost")) {
      return "Our experiences range from ₹5,000 for cocktail sessions to ₹1,50,000 for the Presidential Suite. Would you like specific pricing for any space?";
    } else if (lowerMsg.includes("book") || lowerMsg.includes("reserve")) {
      return "I'd be happy to help you book! Please click the 'Book Now' button on any hotspot or use the main booking form.";
    } else if (lowerMsg.includes("timing") || lowerMsg.includes("hour")) {
      return "Our spaces are available from 11 AM to 2 AM daily. Private suites can be booked for extended hours upon request.";
    } else if (lowerMsg.includes("dress") || lowerMsg.includes("code")) {
      return "We maintain a smart casual dress code. Jackets are recommended for gentlemen in the evening.";
    } else {
      return "Thank you for your interest! Our concierge team would be delighted to assist you with any questions.";
    }
  };

  const handleAssistantSubmit = (e) => {
    e.preventDefault();
    if (!assistantMessage.trim()) return;
    const response = getAssistantResponse(assistantMessage);
    showNotificationMessage(`💬 Virtual Assistant: ${response}`);
    setAssistantMessage("");
  };

  // Gift options
  const virtualGifts = [
    { id: 1, name: "Champagne Toast", price: "₹2,500", icon: "🥂", points: 25 },
    { id: 2, name: "Rose Bouquet", price: "₹3,000", icon: "🌹", points: 30 },
    { id: 3, name: "Chocolate Box", price: "₹1,500", icon: "🍫", points: 15 },
    { id: 4, name: "VIP Experience", price: "₹10,000", icon: "👑", points: 100 },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Audio Element */}
      <audio ref={audioRef} loop />

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] animate-slideDown">
          <div className="bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{notificationMessage}</span>
          </div>
        </div>
      )}

      {/* Main Tour Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            transitioning ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
          style={showMoodLighting ? { filter: `drop-shadow(0 0 20px ${moodColor})` } : {}}
        >
          <img
            src={currentImage}
            alt={currentSceneData?.name}
            className={`w-full h-full object-cover transition-transform duration-[10s] ${
              viewMode === "immersive" ? "scale-110" : "scale-100"
            }`}
            onLoad={() => setImageLoaded(true)}
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>

        {/* Loading Overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-40">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 border-4 border-metallic-gold/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-metallic-gold rounded-full border-t-transparent animate-spin"></div>
                <Crown className="absolute inset-0 m-auto w-8 h-8 text-metallic-gold animate-pulse" />
              </div>
              <p className="text-metallic-gold text-sm tracking-wider">LOADING VIRTUAL EXPERIENCE...</p>
            </div>
          </div>
        )}

        {/* Welcome Guide */}
        {showGuide && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-royal-maroon to-[#0a0a0a] rounded-3xl p-8 border-2 border-metallic-gold/30 text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-metallic-gold rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full p-4">
                  <Compass className="w-12 h-12 text-charcoal" />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-metallic-gold mb-3">Virtual Space Tour</h3>
              <p className="text-soft-cream/80 mb-6 leading-relaxed">Explore our luxury spaces through this immersive experience. Click on glowing hotspots to discover hidden details.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-left p-3 bg-white/5 rounded-xl">
                  <div className="w-8 h-8 bg-metallic-gold/20 rounded-full flex items-center justify-center"><Eye className="w-4 h-4 text-metallic-gold" /></div>
                  <span className="text-sm text-soft-cream/70">Click on glowing dots to explore features</span>
                </div>
                <div className="flex items-center gap-3 text-left p-3 bg-white/5 rounded-xl">
                  <div className="w-8 h-8 bg-metallic-gold/20 rounded-full flex items-center justify-center"><Navigation className="w-4 h-4 text-metallic-gold" /></div>
                  <span className="text-sm text-soft-cream/70">Use arrow buttons to navigate between spaces</span>
                </div>
                <div className="flex items-center gap-3 text-left p-3 bg-white/5 rounded-xl">
                  <div className="w-8 h-8 bg-metallic-gold/20 rounded-full flex items-center justify-center"><Maximize2 className="w-4 h-4 text-metallic-gold" /></div>
                  <span className="text-sm text-soft-cream/70">Zoom in/out to see intricate details</span>
                </div>
              </div>
              <button onClick={closeGuide} className="w-full py-4 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all duration-300">Begin Your Journey</button>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
          <button onClick={() => {
            const sceneKeys = Object.keys(scenes);
            const currentIndex = sceneKeys.indexOf(currentScene);
            const prevIndex = (currentIndex - 1 + sceneKeys.length) % sceneKeys.length;
            navigateToScene(sceneKeys[prevIndex]);
          }} className="w-12 h-12 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all duration-300 border border-white/20 group">
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          <button onClick={() => {
            const sceneKeys = Object.keys(scenes);
            const currentIndex = sceneKeys.indexOf(currentScene);
            const nextIndex = (currentIndex + 1) % sceneKeys.length;
            navigateToScene(sceneKeys[nextIndex]);
          }} className="w-12 h-12 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all duration-300 border border-white/20 group">
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Hotspots */}
        {currentSceneData?.hotspots?.map((hotspot) => (
          <button key={hotspot.id} onClick={() => handleHotspotClick(hotspot)} className="absolute z-30 group" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: "translate(-50%, -50%)" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold rounded-full animate-ping opacity-75"></div>
              <div className="relative w-5 h-5 bg-metallic-gold rounded-full shadow-lg group-hover:scale-150 transition-transform duration-300 cursor-pointer"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {hotspot.title}
              </div>
            </div>
          </button>
        ))}

        {/* Main Info Card */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-auto md:bottom-8 md:left-8 max-w-lg z-30">
          <div className="bg-black/50 backdrop-blur-2xl rounded-2xl p-6 border border-metallic-gold/30">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-metallic-gold text-xs tracking-wider block mb-1">CURRENT SPACE</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{currentSceneData?.name}</h2>
                <p className="text-metallic-gold/80 text-sm">{currentSceneData?.subtitle}</p>
              </div>
              <button onClick={() => setShowInfo(!showInfo)} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all">
                <Info className="w-5 h-5" />
              </button>
            </div>
            {showInfo && (
              <div className="mt-4 pt-4 border-t border-metallic-gold/20 animate-slideDown">
                <p className="text-soft-cream/80 text-sm leading-relaxed mb-4">{currentSceneData?.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(currentSceneData?.stats || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-soft-cream/50 capitalize">{key}:</span>
                      <span className="text-metallic-gold font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowBookingModal(true)} className="w-full py-2 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl text-sm hover:shadow-xl transition-all">
                  Book This Experience
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hotspot Modal */}
        {selectedHotspot && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40">
              <div className="relative h-48">
                <img src={selectedHotspot.image} alt={selectedHotspot.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedHotspot(null)} className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-metallic-gold transition-all">
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-metallic-gold/90 rounded-full text-xs text-charcoal font-bold">{selectedHotspot.type?.toUpperCase()}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-serif font-bold text-metallic-gold">{selectedHotspot.title}</h3>
                  <button onClick={() => toggleLike(selectedHotspot.id)} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <Heart className={`w-5 h-5 ${likedSpots[selectedHotspot.id] ? "fill-red-500 text-red-500" : "text-metallic-gold"}`} />
                  </button>
                </div>
                <p className="text-soft-cream/80 text-sm leading-relaxed mb-4">{selectedHotspot.description}</p>
                {selectedHotspot.price && (
                  <div className="flex items-center justify-between mb-4 p-3 bg-white/5 rounded-xl">
                    <span className="text-soft-cream/60 text-sm">Price</span>
                    <span className="text-metallic-gold font-bold">{selectedHotspot.price}</span>
                  </div>
                )}
                {selectedHotspot.availability && (
                  <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded-xl">
                    <span className="text-soft-cream/60 text-sm">Availability</span>
                    <span className="text-soft-cream/80 text-sm">{selectedHotspot.availability}</span>
                  </div>
                )}
                <div className="flex gap-3">
                  <button onClick={() => { setSelectedHotspot(null); setShowBookingModal(true); }} className="flex-1 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all">Book Now</button>
                  <button onClick={() => setShowShareMenu(!showShareMenu)} className="px-4 py-3 border border-metallic-gold/30 text-metallic-gold rounded-xl hover:bg-metallic-gold/10 transition-all relative">
                    <Share2 className="w-5 h-5" />
                    {showShareMenu && (
                      <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-xl rounded-xl p-2 border border-metallic-gold/30 flex gap-2 animate-slideUp">
                        <button onClick={() => handleShareWithAchievement('instagram')} className="p-2 hover:bg-white/10 rounded-lg"><Instagram className="w-4 h-4" /></button>
                        <button onClick={() => handleShareWithAchievement('twitter')} className="p-2 hover:bg-white/10 rounded-lg"><Twitter className="w-4 h-4" /></button>
                        <button onClick={() => handleShareWithAchievement('facebook')} className="p-2 hover:bg-white/10 rounded-lg"><Facebook className="w-4 h-4" /></button>
                        <button onClick={() => handleShareWithAchievement('copy')} className="p-2 hover:bg-white/10 rounded-lg"><Copy className="w-4 h-4" /></button>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Amenity Modal */}
        {showAmenityModal && selectedAmenity && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40">
              <div className="relative h-48">
                <img src={selectedAmenity.image} alt={selectedAmenity.title} className="w-full h-full object-cover" />
                <button onClick={() => setShowAmenityModal(false)} className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-metallic-gold transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold mb-3">{selectedAmenity.title}</h3>
                <p className="text-soft-cream/80 text-sm leading-relaxed mb-4">{selectedAmenity.description}</p>
                <div className="space-y-2 mb-4">
                  {selectedAmenity.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-metallic-gold rounded-full"></div>
                      <span className="text-soft-cream/70">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl mb-4">
                  <span className="text-soft-cream/60 text-sm">Price</span>
                  <span className="text-metallic-gold font-bold">{selectedAmenity.price}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => { setShowAmenityModal(false); setShowBookingModal(true); }} className="flex-1 py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all">
                    Book This Experience
                  </button>
                  <button onClick={() => setShowAmenityModal(false)} className="px-4 py-3 border border-metallic-gold/30 text-metallic-gold rounded-xl hover:bg-metallic-gold/10 transition-all">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Control Bar with Auto-Close */}
        <div className="absolute bottom-6 right-6 z-30">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-2 flex flex-wrap gap-2 border border-white/20 max-w-md">
            <button onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Zoom In"><ZoomIn className="w-5 h-5" /></button>
            <button onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Zoom Out"><ZoomOut className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={() => toggleModal(setIsAutoRotating, isAutoRotating, 'autoRotate')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isAutoRotating ? "bg-metallic-gold text-black" : "bg-white/10 text-white hover:bg-metallic-gold hover:text-black"}`} title="Auto-rotate Tour">
              {isAutoRotating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button onClick={takeScreenshot} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Take Screenshot"><ImageIcon className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowPhotoBooth, showPhotoBooth, 'photoBooth')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Photo Booth"><Camera className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={() => toggleModal(setAmbientSound, ambientSound, 'ambientSound')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${ambientSound ? "bg-metallic-gold text-black" : "bg-white/10 text-white hover:bg-metallic-gold hover:text-black"}`} title="Ambient Sound"><Headphones className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowAmbientSounds, showAmbientSounds, 'ambientSounds')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Sound Library"><Music className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={toggleFullscreen} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Fullscreen"><Maximize2 className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowVRMode, showVRMode, 'vrMode')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="VR Mode"><Video className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowARMode, showARMode, 'arMode')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="AR Mode"><Scan className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={toggleTimeOfDay} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Toggle Day/Night">
              {timeOfDay === "day" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button onClick={() => toggleModal(setShowMoodLighting, showMoodLighting, 'moodLighting')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Mood Lighting"><Lightbulb className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={() => toggleModal(setShowMap, showMap, 'map')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${showMap ? "bg-metallic-gold text-black" : "bg-white/10 text-white hover:bg-metallic-gold hover:text-black"}`} title="Show Map"><Map className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowStats, showStats, 'stats')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Tour Stats"><TrendingUp className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowAchievements, showAchievements, 'achievements')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Achievements"><Award className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowLoyaltyPoints, showLoyaltyPoints, 'loyalty')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Loyalty Points"><Wallet className="w-5 h-5" /></button>
            <div className="w-px h-10 bg-white/20"></div>
            <button onClick={() => toggleModal(setShowVirtualAssistant, showVirtualAssistant, 'assistant')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Virtual Assistant"><MessageCircle className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowLiveChat, showLiveChat, 'chat')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-metallic-gold hover:text-black transition-all" title="Live Chat"><MessageSquare className="w-5 h-5" /></button>
            <button onClick={() => toggleModal(setShowVoiceGuidance, showVoiceGuidance, 'voice')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${showVoiceGuidance ? "bg-metallic-gold text-black" : "bg-white/10 text-white hover:bg-metallic-gold hover:text-black"}`} title="Voice Guidance"><Volume2 className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Photo Booth Modal */}
        {showPhotoBooth && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-2xl mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">📸 Photo Booth</h3>
                <button onClick={() => setShowPhotoBooth(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {capturedPhotos.slice(-6).map((photo, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-metallic-gold/30">
                    <img src={photo} alt={`Screenshot ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <button onClick={takeScreenshot} className="w-full py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                <Camera className="w-5 h-5" /> Capture New Photo
              </button>
            </div>
          </div>
        )}

        {/* VR Mode Modal */}
        {showVRMode && (
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-spin-slow"></div>
                <Video className="w-16 h-16 text-metallic-gold absolute inset-0 m-auto" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-metallic-gold mb-4">VR Mode Coming Soon</h3>
              <p className="text-soft-cream/70 mb-6">Experience our spaces in immersive virtual reality with your VR headset.</p>
              <button onClick={() => setShowVRMode(false)} className="px-8 py-3 bg-metallic-gold text-charcoal rounded-xl font-bold hover:shadow-2xl transition-all">Close</button>
            </div>
          </div>
        )}

        {/* AR Mode Modal */}
        {showARMode && (
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-metallic-gold rounded-full animate-pulse"></div>
                <Scan className="w-16 h-16 text-metallic-gold absolute inset-0 m-auto" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-metallic-gold mb-4">AR Mode Coming Soon</h3>
              <p className="text-soft-cream/70 mb-6">Place virtual furniture and decorations in your space using AR technology.</p>
              <button onClick={() => setShowARMode(false)} className="px-8 py-3 bg-metallic-gold text-charcoal rounded-xl font-bold hover:shadow-2xl transition-all">Close</button>
            </div>
          </div>
        )}

        {/* Mood Lighting Controls */}
        {showMoodLighting && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30 animate-slideDown">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30">
              <div className="flex items-center gap-4">
                <span className="text-metallic-gold text-sm">Mood Color:</span>
                <input type="color" value={moodColor} onChange={(e) => setMoodColor(e.target.value)} className="w-10 h-10 rounded-lg cursor-pointer" />
                <button onClick={() => setShowMoodLighting(false)} className="px-3 py-1 bg-white/10 rounded-lg text-white text-sm">Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Ambient Sound Library */}
        {showAmbientSounds && (
          <div className="absolute bottom-24 right-6 z-30 animate-slideUp">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30 w-64">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-metallic-gold text-sm font-bold flex items-center gap-2"><Music className="w-4 h-4" /> Ambient Sounds</h4>
                <button onClick={() => setShowAmbientSounds(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2">
                {Object.keys(ambientSoundsLibrary).map((sound) => (
                  <button key={sound} onClick={() => setSelectedAmbientSound(sound)} className={`w-full text-left p-2 rounded-lg transition-all ${selectedAmbientSound === sound ? "bg-metallic-gold/20 border border-metallic-gold/50" : "hover:bg-white/10"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-white capitalize">{sound}</span>
                      {selectedAmbientSound === sound && <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>}
                    </div>
                  </button>
                ))}
                <div className="pt-2 border-t border-metallic-gold/20">
                  <label className="text-soft-cream/60 text-xs block mb-1">Volume</label>
                  <input type="range" min="0" max="1" step="0.01" value={soundVolume} onChange={(e) => setSoundVolume(parseFloat(e.target.value))} className="w-full" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Panel */}
        {showAchievements && (
          <div className="absolute top-24 right-6 z-30 animate-slideDown max-h-96 overflow-y-auto">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30 w-80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-metallic-gold text-sm font-bold flex items-center gap-2"><Award className="w-4 h-4" /> Achievements</h4>
                <button onClick={() => setShowAchievements(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`p-3 rounded-xl ${achievement.unlocked ? "bg-metallic-gold/10 border border-metallic-gold/30" : "bg-white/5 opacity-50"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${achievement.unlocked ? "text-metallic-gold" : "text-white"}`}>{achievement.name}</p>
                        <p className="text-xs text-soft-cream/60">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && <Check className="w-4 h-4 text-metallic-gold" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Loyalty Points Panel */}
        {showLoyaltyPoints && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30 animate-slideDown">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <p className="text-soft-cream/60 text-xs">Your Loyalty Points</p>
                  <p className="text-2xl font-bold text-metallic-gold">{loyaltyPoints}</p>
                </div>
                <button onClick={() => setShowLoyaltyPoints(false)} className="px-3 py-1 bg-white/10 rounded-lg text-white text-sm">Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Live Chat */}
        {showLiveChat && (
          <div className="absolute bottom-24 right-6 z-30 animate-slideUp w-80">
            <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-metallic-gold/30 flex flex-col h-96">
              <div className="flex items-center justify-between p-4 border-b border-metallic-gold/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center"><MessageSquare className="w-4 h-4 text-charcoal" /></div>
                  <h4 className="text-metallic-gold font-bold">Live Concierge</h4>
                </div>
                <button onClick={() => setShowLiveChat(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === "user" ? "bg-metallic-gold/20 text-white" : "bg-white/10 text-soft-cream/80"}`}>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-[10px] text-soft-cream/40 mt-1">{msg.time.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <div className="p-4 border-t border-metallic-gold/20 flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendChatMessage()} placeholder="Type your message..." className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" />
                <button onClick={sendChatMessage} className="px-3 py-2 bg-metallic-gold/20 rounded-xl text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all"><Send className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Panel */}
        {showStats && (
          <div className="absolute top-24 right-6 z-30 animate-slideDown">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30 w-64">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-metallic-gold text-sm font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Your Tour Stats</h4>
                <button onClick={() => setShowStats(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Time Spent</span><span className="text-metallic-gold font-bold">{Math.floor(userExperience.timeSpent / 60)}m {userExperience.timeSpent % 60}s</span></div>
                <div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Scenes Explored</span><span className="text-metallic-gold font-bold">{userExperience.scenesVisited}/{Object.keys(scenes).length}</span></div>
                <div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Hotspots Discovered</span><span className="text-metallic-gold font-bold">{userExperience.hotspotsClicked}</span></div>
                <div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Favorites</span><span className="text-metallic-gold font-bold">{userExperience.favorites}</span></div>
                <div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Shares</span><span className="text-metallic-gold font-bold">{userExperience.shares}</span></div>
                <div className="pt-2 border-t border-metallic-gold/20"><div className="flex justify-between"><span className="text-soft-cream/60 text-sm">Current Scene</span><span className="text-metallic-gold text-sm">{currentSceneData?.name}</span></div></div>
              </div>
            </div>
          </div>
        )}

        {/* Virtual Assistant */}
        {showVirtualAssistant && (
          <div className="absolute bottom-24 right-6 z-30 animate-slideUp">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30 w-80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-metallic-gold to-amber-600 rounded-full flex items-center justify-center"><MessageCircle className="w-4 h-4 text-charcoal" /></div>
                  <h4 className="text-metallic-gold text-sm font-bold">Virtual Concierge</h4>
                </div>
                <button onClick={() => setShowVirtualAssistant(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <p className="text-soft-cream/70 text-xs mb-3">Ask me anything about our spaces, pricing, or availability!</p>
              <form onSubmit={handleAssistantSubmit} className="flex gap-2">
                <input type="text" value={assistantMessage} onChange={(e) => setAssistantMessage(e.target.value)} placeholder="Type your question..." className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" />
                <button type="submit" className="px-3 py-2 bg-metallic-gold/20 rounded-xl text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all"><Send className="w-4 h-4" /></button>
              </form>
            </div>
          </div>
        )}

        {/* Weather Widget */}
        {showWeather && (
          <div className="absolute top-24 left-6 z-30">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-4 py-2 border border-metallic-gold/30 flex items-center gap-3">
              <Sun className="w-5 h-5 text-metallic-gold" />
              <div className="text-white text-sm">{weatherInfo.temp}</div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="text-soft-cream/60 text-xs">{weatherInfo.condition}</div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-1"><Droplets className="w-3 h-3 text-metallic-gold" /><span className="text-soft-cream/60 text-xs">{weatherInfo.humidity}</span></div>
              <button onClick={() => setShowWeather(false)} className="text-soft-cream/40 hover:text-metallic-gold"><X className="w-3 h-3" /></button>
            </div>
          </div>
        )}

        {/* Mini Map */}
        {showMap && (
          <div className="absolute bottom-24 right-6 z-30 animate-slideUp">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-metallic-gold/30 w-72">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-metallic-gold text-sm font-bold flex items-center gap-2"><Navigation className="w-4 h-4" /> Tour Map</h4>
                <button onClick={() => setShowMap(false)} className="text-soft-cream/60 hover:text-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {Object.entries(scenes).map(([key, scene]) => (
                  <button key={key} onClick={() => navigateToScene(key)} className={`w-full text-left p-3 rounded-xl transition-all ${currentScene === key ? "bg-metallic-gold/20 border border-metallic-gold/50" : "hover:bg-white/10"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${currentScene === key ? "bg-metallic-gold" : "bg-white/40"}`}></div>
                      <div className="flex-1"><p className={`text-sm font-medium ${currentScene === key ? "text-metallic-gold" : "text-white"}`}>{scene.name}</p><p className="text-xs text-soft-cream/60">{scene.subtitle}</p></div>
                      {scene.stats.rating && (<div className="flex items-center gap-1"><Star className="w-3 h-3 text-metallic-gold fill-metallic-gold" /><span className="text-xs text-soft-cream/60">{scene.stats.rating}</span></div>)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Guest Book */}
        {showGuestBook && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-lg mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">📖 Guest Book</h3>
                <button onClick={() => setShowGuestBook(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="max-h-64 overflow-y-auto mb-4 space-y-2">
                {guestBookEntries.slice(-5).map((entry) => (
                  <div key={entry.id} className="bg-white/5 rounded-xl p-3">
                    <p className="text-metallic-gold text-sm font-bold">{entry.name}</p>
                    <p className="text-soft-cream/70 text-xs">{entry.message}</p>
                    <p className="text-soft-cream/40 text-[10px] mt-1">{new Date(entry.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
              <input type="text" placeholder="Your Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="w-full bg-white/10 rounded-xl px-4 py-2 mb-2 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" />
              <textarea placeholder="Your Message" value={guestMessage} onChange={(e) => setGuestMessage(e.target.value)} rows="3" className="w-full bg-white/10 rounded-xl px-4 py-2 mb-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50"></textarea>
              <button onClick={addGuestBookEntry} className="w-full py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all">Sign Guest Book</button>
            </div>
          </div>
        )}

        {/* Virtual Gifts */}
        {showVirtualGift && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">🎁 Send a Virtual Gift</h3>
                <button onClick={() => setShowVirtualGift(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-3">
                {virtualGifts.map((gift) => (
                  <button key={gift.id} onClick={() => sendVirtualGift(gift)} className="w-full p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{gift.icon}</span>
                      <div className="text-left">
                        <p className="text-white font-medium">{gift.name}</p>
                        <p className="text-metallic-gold text-sm">{gift.price}</p>
                      </div>
                    </div>
                    <span className="text-soft-cream/60 text-xs">+{gift.points} pts</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Invite Friends */}
        {showInviteFriends && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">👥 Invite Friends</h3>
                <button onClick={() => setShowInviteFriends(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <p className="text-soft-cream/70 text-sm mb-4">Share your unique invite code and earn loyalty points when friends join!</p>
              <div className="flex gap-2 mb-4">
                <input type="text" value={inviteCode} readOnly className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-metallic-gold font-mono text-center focus:outline-none" />
                <button onClick={copyInviteCode} className="px-4 py-3 bg-metallic-gold/20 rounded-xl text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all"><Copy className="w-5 h-5" /></button>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleShareWithAchievement('whatsapp')} className="flex-1 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all">Share via WhatsApp</button>
                <button onClick={() => handleShareWithAchievement('telegram')} className="flex-1 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all">Share via Telegram</button>
              </div>
            </div>
          </div>
        )}

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="max-w-md mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">⭐ Rate Your Experience</h3>
                <button onClick={() => setShowFeedback(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setFeedbackRating(star)} className="text-3xl transition-all hover:scale-110">
                    {star <= feedbackRating ? <Star className="w-8 h-8 fill-metallic-gold text-metallic-gold" /> : <Star className="w-8 h-8 text-soft-cream/30" />}
                  </button>
                ))}
              </div>
              <textarea placeholder="Tell us about your experience..." value={feedbackComment} onChange={(e) => setFeedbackComment(e.target.value)} rows="4" className="w-full bg-white/10 rounded-xl px-4 py-3 mb-4 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50"></textarea>
              <button onClick={submitFeedback} className="w-full py-3 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all">Submit Feedback</button>
            </div>
          </div>
        )}

        {/* Virtual Events */}
        {showVirtualEvent && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn overflow-y-auto">
            <div className="max-w-2xl mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40 p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-metallic-gold">🎪 Virtual Events</h3>
                <button onClick={() => setShowVirtualEvent(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-4">
                {virtualEvents.map((event) => (
                  <div key={event.id} className="bg-white/5 rounded-xl overflow-hidden">
                    <div className="h-32 overflow-hidden">
                      <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-xl font-bold text-white mb-2">{event.name}</h4>
                      <div className="flex gap-4 mb-3 text-sm">
                        <span className="text-metallic-gold flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                        <span className="text-metallic-gold flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                        <span className="text-metallic-gold flex items-center gap-1"><Users className="w-3 h-3" /> {event.spots} spots</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-metallic-gold">{event.price}</span>
                        <button onClick={() => registerForEvent(event)} className="px-4 py-2 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all">Register</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Amenities Quick View with Click Handler */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-30 hidden md:flex gap-2">
          {currentSceneData?.amenities?.slice(0, 4).map((amenity, idx) => (
            <div
              key={idx}
              onClick={() => handleAmenityClick(amenity)}
              className="bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-full border border-metallic-gold/30 text-xs text-soft-cream/80 hover:text-metallic-gold hover:border-metallic-gold transition-all cursor-pointer"
            >
              {amenity}
            </div>
          ))}
        </div>

        {/* Scene Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {Object.keys(scenes).map((key) => (
            <button key={key} onClick={() => navigateToScene(key)} className={`transition-all duration-300 ${currentScene === key ? "w-6 h-2 bg-metallic-gold rounded-full" : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/80"}`} />
          ))}
        </div>

        {/* Royal Badge */}
        <div className="absolute top-24 left-6 z-30">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-metallic-gold/30">
            <Crown className="w-4 h-4 text-metallic-gold" />
            <span className="text-metallic-gold text-xs font-bold tracking-wider">EXCLUSIVE VIRTUAL ACCESS</span>
          </div>
        </div>

        {/* Immersive Mode Indicator */}
        {viewMode === "immersive" && (
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-metallic-gold/30">
            <span className="text-metallic-gold text-xs flex items-center gap-2"><Compass className="w-4 h-4" /> IMMERSIVE MODE • Move your cursor to explore</span>
          </div>
        )}

        {/* Enhanced Menu Bar with Premium Features */}
        <div className="absolute top-24 right-6 z-30 flex flex-col gap-2">
          <button onClick={() => toggleModal(setShowGuestBook, showGuestBook, 'guestBook')} className="w-10 h-10 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all border border-white/20" title="Guest Book"><Bookmark className="w-5 h-5" /></button>
          <button onClick={() => toggleModal(setShowVirtualGift, showVirtualGift, 'virtualGift')} className="w-10 h-10 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all border border-white/20" title="Send Gift"><Gift className="w-5 h-5" /></button>
          <button onClick={() => toggleModal(setShowInviteFriends, showInviteFriends, 'invite')} className="w-10 h-10 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all border border-white/20" title="Invite Friends"><Users className="w-5 h-5" /></button>
          <button onClick={() => toggleModal(setShowFeedback, showFeedback, 'feedback')} className="w-10 h-10 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all border border-white/20" title="Feedback"><Star className="w-5 h-5" /></button>
          <button onClick={() => toggleModal(setShowVirtualEvent, showVirtualEvent, 'events')} className="w-10 h-10 bg-black/40 backdrop-blur-xl rounded-xl flex items-center justify-center text-metallic-gold hover:bg-metallic-gold hover:text-black transition-all border border-white/20" title="Events"><Calendar className="w-5 h-5" /></button>
        </div>

      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[60] animate-fadeIn">
          <div className="max-w-lg mx-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-3xl overflow-hidden border-2 border-metallic-gold/40">
            <div className="relative h-32 bg-gradient-to-r from-metallic-gold/20 to-amber-600/20 flex items-center justify-center">
              <Crown className="w-12 h-12 text-metallic-gold" />
              <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-metallic-gold transition-all"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-metallic-gold mb-2">Reserve Your Experience</h3>
              <p className="text-soft-cream/70 text-sm mb-6">{currentSceneData?.name} • {currentSceneData?.subtitle}</p>
              <form onSubmit={handleBooking} className="space-y-4">
                <input type="text" placeholder="Full Name" value={bookingDetails.name} onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" required />
                <input type="email" placeholder="Email Address" value={bookingDetails.email} onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" required />
                <input type="tel" placeholder="Phone Number" value={bookingDetails.phone} onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" placeholder="Date" value={bookingDetails.date} onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" required />
                  <input type="time" placeholder="Time" value={bookingDetails.time} onChange={(e) => setBookingDetails({...bookingDetails, time: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50" required />
                </div>
                <select value={bookingDetails.guests} onChange={(e) => setBookingDetails({...bookingDetails, guests: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-metallic-gold/50">
                  <option value="2">2 Guests</option><option value="4">4 Guests</option><option value="6">6 Guests</option><option value="8">8 Guests</option><option value="10">10+ Guests</option>
                </select>
                <select value={bookingDetails.occasion} onChange={(e) => setBookingDetails({...bookingDetails, occasion: e.target.value})} className="w-full bg-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-metallic-gold/50">
                  <option value="">Select Occasion (Optional)</option><option value="Anniversary">Anniversary</option><option value="Birthday">Birthday</option><option value="Business">Business Dinner</option><option value="Proposal">Proposal</option><option value="Other">Other</option>
                </select>
                <textarea placeholder="Special Requests (Optional)" value={bookingDetails.specialRequests} onChange={(e) => setBookingDetails({...bookingDetails, specialRequests: e.target.value})} rows="2" className="w-full bg-white/10 rounded-xl px-4 py-3 text-white placeholder-soft-cream/50 focus:outline-none focus:border-metallic-gold/50"></textarea>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-metallic-gold to-amber-600 text-charcoal font-bold rounded-xl hover:shadow-2xl transition-all duration-300">Submit Request</button>
              </form>
              <p className="text-center text-soft-cream/40 text-xs mt-4">Our concierge will contact you within 24 hours to confirm your booking</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </div>
  );
};

export default VirtualSpace;