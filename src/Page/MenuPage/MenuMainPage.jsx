// // // // import React, { useState, useMemo } from 'react';
// // // // import MenuPage from './Components/MenuPage';
// // // // import MenuHeader from './Components/MenuHeader';
// // // // import MenuSearchFilter from './Components/MenuSearchFilter';
// // // // import MenuNavigation from './Components/MenuNavigation';
// // // // import MenuItemsGrid from './Components/MenuItemsGrid';
// // // // import SpecialOfferBanner from './Components/SpecialOfferBanner';
// // // // import MenuHighlights from './Components/MenuHighlights';
// // // // import DietaryInfo from './Components/DietaryInfo';
// // // // import PriceRangeGuide from './Components/PriceRangeGuide';
// // // // import ChefRecommendations from './Components/ChefRecommendations';
// // // // import MenuQuiz from './Components/MenuQuiz';
// // // // import CookingProcess from './Components/CookingProcess'; 
// // // // import NutritionFacts from './Components/NutritionFacts';

// // // // const MenuMainPage = () => {
// // // //   const [activeCategory, setActiveCategory] = useState('starters');
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [filters, setFilters] = useState({
// // // //     vegetarian: false,
// // // //     spicy: false,
// // // //     chefSpecial: false
// // // //   });
// // // //   const [sortBy, setSortBy] = useState('name');

// // // //   const menuCategories = [
// // // //     { id: 'starters', name: 'Royal Starters', icon: '🥘' },
// // // //     { id: 'mains', name: 'Main Course', icon: '🍛' },
// // // //     { id: 'biryanis', name: 'Signature Biryanis', icon: '🍚' },
// // // //     { id: 'breads', name: 'Traditional Breads', icon: '🫓' },
// // // //     { id: 'desserts', name: 'Royal Desserts', icon: '🍨' },
// // // //     { id: 'beverages', name: 'Beverages', icon: '🥤' }
// // // //   ];

// // // //   const menuItems = {
// // // //     starters: [
// // // //       {
// // // //         id: 1,
// // // //         name: "Murgh Malai Tikka",
// // // //         description: "Creamy chicken tikka marinated in cheese and mild spices",
// // // //         price: "$18",
// // // //         spicy: false,
// // // //         vegetarian: false,
// // // //         chefSpecial: true,
// // // //         rating: 4.8
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         name: "Paneer Tikka Royal",
// // // //         description: "Cottage cheese chunks marinated in royal spices and grilled",
// // // //         price: "$16",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: true,
// // // //         rating: 4.7
// // // //       },
// // // //       {
// // // //         id: 3,
// // // //         name: "Lahsooni Jhinga",
// // // //         description: "Tiger prawns in garlic and herb marinade",
// // // //         price: "$22",
// // // //         spicy: true,
// // // //         vegetarian: false,
// // // //         chefSpecial: false,
// // // //         rating: 4.6
// // // //       },
// // // //       {
// // // //         id: 4,
// // // //         name: "Vegetable Galouti",
// // // //         description: "Fine minced vegetable kebabs with royal spices",
// // // //         price: "$14",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.5
// // // //       }
// // // //     ],
// // // //     mains: [
// // // //       {
// // // //         id: 5,
// // // //         name: "Butter Chicken Royal",
// // // //         description: "Tender chicken in rich tomato and butter gravy",
// // // //         price: "$24",
// // // //         spicy: false,
// // // //         vegetarian: false,
// // // //         chefSpecial: true,
// // // //         rating: 4.9
// // // //       },
// // // //       {
// // // //         id: 6,
// // // //         name: "Rogan Josh",
// // // //         description: "Traditional lamb curry from Kashmir",
// // // //         price: "$28",
// // // //         spicy: true,
// // // //         vegetarian: false,
// // // //         chefSpecial: false,
// // // //         rating: 4.7
// // // //       },
// // // //       {
// // // //         id: 7,
// // // //         name: "Paneer Makhani",
// // // //         description: "Cottage cheese in creamy tomato gravy",
// // // //         price: "$20",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: true,
// // // //         rating: 4.8
// // // //       },
// // // //       {
// // // //         id: 8,
// // // //         name: "Dal Makhani Royal",
// // // //         description: "Black lentils slow-cooked overnight",
// // // //         price: "$16",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.6
// // // //       }
// // // //     ],
// // // //     biryanis: [
// // // //       {
// // // //         id: 9,
// // // //         name: "Royal Dum Biryani",
// // // //         description: "Aromatic basmati rice with choice of meat and saffron",
// // // //         price: "$32",
// // // //         spicy: true,
// // // //         vegetarian: false,
// // // //         chefSpecial: true,
// // // //         rating: 4.9
// // // //       },
// // // //       {
// // // //         id: 10,
// // // //         name: "Vegetable Biryani",
// // // //         description: "Fragrant rice with seasonal vegetables and spices",
// // // //         price: "$22",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.5
// // // //       },
// // // //       {
// // // //         id: 11,
// // // //         name: "Hyderabadi Biryani",
// // // //         description: "Spicy biryani with traditional Hyderabadi flavors",
// // // //         price: "$30",
// // // //         spicy: true,
// // // //         vegetarian: false,
// // // //         chefSpecial: false,
// // // //         rating: 4.7
// // // //       }
// // // //     ],
// // // //     breads: [
// // // //       {
// // // //         id: 12,
// // // //         name: "Naan Royal",
// // // //         description: "Traditional tandoor-baked leavened bread",
// // // //         price: "$6",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.4
// // // //       },
// // // //       {
// // // //         id: 13,
// // // //         name: "Laccha Paratha",
// // // //         description: "Multi-layered whole wheat flatbread",
// // // //         price: "$8",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.3
// // // //       },
// // // //       {
// // // //         id: 14,
// // // //         name: "Garlic Naan",
// // // //         description: "Naan topped with fresh garlic and herbs",
// // // //         price: "$8",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: true,
// // // //         rating: 4.6
// // // //       }
// // // //     ],
// // // //     desserts: [
// // // //       {
// // // //         id: 15,
// // // //         name: "Gulab Jamun",
// // // //         description: "Deep-fried milk balls in rose-flavored syrup",
// // // //         price: "$10",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.5
// // // //       },
// // // //       {
// // // //         id: 16,
// // // //         name: "Rasmalai",
// // // //         description: "Cottage cheese patties in sweetened milk",
// // // //         price: "$12",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: true,
// // // //         rating: 4.8
// // // //       },
// // // //       {
// // // //         id: 17,
// // // //         name: "Kesar Pista Kulfi",
// // // //         description: "Traditional Indian ice cream with saffron and pistachio",
// // // //         price: "$9",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.4
// // // //       }
// // // //     ],
// // // //     beverages: [
// // // //       {
// // // //         id: 18,
// // // //         name: "Mango Lassi",
// // // //         description: "Sweet yogurt drink with fresh mango",
// // // //         price: "$7",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: true,
// // // //         rating: 4.7
// // // //       },
// // // //       {
// // // //         id: 19,
// // // //         name: "Masala Chai",
// // // //         description: "Traditional Indian spiced tea",
// // // //         price: "$5",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.6
// // // //       },
// // // //       {
// // // //         id: 20,
// // // //         name: "Rose Sharbat",
// // // //         description: "Refreshing rose-flavored drink",
// // // //         price: "$6",
// // // //         spicy: false,
// // // //         vegetarian: true,
// // // //         chefSpecial: false,
// // // //         rating: 4.3
// // // //       }
// // // //     ]
// // // //   };

// // // //   // Filter and search functionality
// // // //   const filteredItems = useMemo(() => {
// // // //     let items = menuItems[activeCategory] || [];

// // // //     // Apply search filter
// // // //     if (searchQuery) {
// // // //       items = items.filter(item =>
// // // //         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //         item.description.toLowerCase().includes(searchQuery.toLowerCase())
// // // //       );
// // // //     }

// // // //     // Apply dietary filters
// // // //     if (filters.vegetarian) {
// // // //       items = items.filter(item => item.vegetarian);
// // // //     }
// // // //     if (filters.spicy) {
// // // //       items = items.filter(item => item.spicy);
// // // //     }
// // // //     if (filters.chefSpecial) {
// // // //       items = items.filter(item => item.chefSpecial);
// // // //     }

// // // //     // Apply sorting
// // // //     items.sort((a, b) => {
// // // //       switch (sortBy) {
// // // //         case 'price-low':
// // // //           return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
// // // //         case 'price-high':
// // // //           return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
// // // //         case 'rating':
// // // //           return b.rating - a.rating;
// // // //         case 'name':
// // // //         default:
// // // //           return a.name.localeCompare(b.name);
// // // //       }
// // // //     });

// // // //     return items;
// // // //   }, [activeCategory, searchQuery, filters, sortBy]);

// // // //   return (
// // // //     <MenuPage>
// // // //       {/* Header Section */}
// // // //       <MenuHeader />
      
// // // //       {/* Additional Menu Components */}
// // // //       <MenuHighlights />
// // // //       <DietaryInfo />

// // // //          <MenuQuiz />
// // // //     <CookingProcess />
// // // //     <NutritionFacts />
      
// // // //       {/* Main Menu Content */}
// // // //       <div className="container mx-auto px-4">
// // // //         <MenuSearchFilter
// // // //           searchQuery={searchQuery}
// // // //           setSearchQuery={setSearchQuery}
// // // //           filters={filters}
// // // //           setFilters={setFilters}
// // // //           sortBy={sortBy}
// // // //           setSortBy={setSortBy}
// // // //         />
        
// // // //         <MenuNavigation
// // // //           activeCategory={activeCategory}
// // // //           setActiveCategory={setActiveCategory}
// // // //           menuCategories={menuCategories}
// // // //         />
        
// // // //         <MenuItemsGrid
// // // //           filteredItems={filteredItems}
// // // //           menuItems={menuItems}
// // // //           activeCategory={activeCategory}
// // // //           searchQuery={searchQuery}
// // // //           filters={filters}
// // // //           sortBy={sortBy}
// // // //           setSearchQuery={setSearchQuery}
// // // //           setFilters={setFilters}
// // // //         />
        
// // // //         <SpecialOfferBanner />
// // // //       </div>
      
// // // //       {/* Additional Features */}
// // // //       <PriceRangeGuide />
// // // //       <ChefRecommendations />
  
// // // //     </MenuPage>
// // // //   );
// // // // };

// // // // export default MenuMainPage;





// import React, { useState, useEffect, useRef } from 'react';

// import {
//   Crown, Diamond, Star, Heart, Award,
//    Wine, Coffee,  Fish, Flame, Leaf,
//   Sun, Moon, Clock, Phone, Mail, MapPin, 
//   Facebook, Twitter, Instagram, Youtube, Linkedin,
//   ChevronRight, ChevronLeft, Search, X, Bookmark, Share2,
  

//   Coffee as CoffeeIcon, Beer as BeerIcon, Cake,
//   Utensils as UtensilsIcon, 
//   Sunrise as SunriseIcon, Sunset as SunsetIcon,
//   Moon as MoonIcon
// } from 'lucide-react';

// // ==================== RESTAURANT DATA ====================
// const RESTAURANT = {
//   name: 'TAVISHA GRAND',
//   tagline: 'WHERE ROYAL HERITAGE MEETS CULINARY ARTISTRY',
//   description: 'Step into a world of unparalleled luxury where centuries-old recipes are reimagined with contemporary flair.',
//   established: 1995,
//   awards: 47,
//   chefs: 15,
//   wines: 500,
//   address: 'Royal Enclave, Colaba, Mumbai - 400001',
//   phone: '+91 98765 43210',
//   email: 'royalty@tavisha.com',
//   hours: {
//     weekday: '11:00 AM - 11:30 PM',
//     weekend: '11:00 AM - 12:00 AM'
//   }
// };

// // ==================== MASTER CHEFS ====================
// const MASTER_CHEFS = [
//   {
//     id: 'chef-1',
//     name: 'CHEF ARJUN MEHRA',
//     title: 'Culinary Director',
//     experience: '28 years',
//     specialty: 'Royal Mughlai Cuisine',
//     image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     signature: ['Rogan Josh Royale', 'Galouti Kebab', 'Dal Makhani'],
//     awards: ['Michelin Star 2024', 'James Beard Award']
//   },
//   {
//     id: 'chef-2',
//     name: 'CHEF PIERRE DUBOIS',
//     title: 'Executive Chef',
//     experience: '22 years',
//     specialty: 'French-Indian Fusion',
//     image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     signature: ['Truffle Butter Chicken', 'Foie Gras Seekh', 'Saffron Crème'],
//     awards: ['Best Fusion Chef', 'Culinary Oscar']
//   },
//   {
//     id: 'chef-3',
//     name: 'CHEF PRIYA SHARMA',
//     title: 'Pastry Director',
//     experience: '18 years',
//     specialty: 'Royal Desserts',
//     image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     signature: ['Gold Leaf Gulab Jamun', 'Saffron Panna Cotta'],
//     awards: ['Pastry Chef of the Year', 'Gold Medal']
//   }
// ];

// // ==================== MENU SECTIONS ====================
// const MENU_SECTIONS = [
//   {
//     id: 'royal-beginnings',
//     title: 'ROYAL BEGINNINGS',
//     subtitle: 'THE GRAND OVERTURE',
//     description: 'Exquisite starters that set the stage for an unforgettable culinary journey.',
//     icon: Crown,
//     color: 'amber',
//     image: 'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 8
//   },
//   {
//     id: 'imperial-soups',
//     title: 'IMPERIAL SOUPS',
//     subtitle: 'WARMTH OF THE KINGDOM',
//     description: 'Rich, aromatic broths that have warmed the hearts of emperors.',
//     icon: Diamond,
//     color: 'rose',
//     image: 'https://images.unsplash.com/photo-1547592166-23ac45744e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 6
//   },
//   {
//     id: 'tandoor-royale',
//     title: 'TANDOOR ROYALE',
//     subtitle: 'FLAMES OF THE PALACE',
//     description: 'Traditional clay oven delicacies with secret royal recipes.',
//     icon: Flame,
//     color: 'orange',
//     image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 12
//   },
//   {
//     id: 'signature-curries',
//     title: 'SIGNATURE CURRIES',
//     subtitle: 'THE CROWN JEWELS',
//     description: 'The pinnacle of culinary artistry, passed down through generations.',
//     icon: Award,
//     color: 'purple',
//     image: 'https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
//     itemCount: 15
//   },
//   {
//     id: 'imperial-biryani',
//     title: 'IMPERIAL BIRYANI',
//     subtitle: 'THE FEAST OF KINGS',
//     description: 'Layered rice dishes that are the crown jewel of our kitchen.',
//     icon: Star,
//     color: 'blue',
//     image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 8
//   },
//   {
//     id: 'seafood-empire',
//     title: 'SEAFOOD EMPIRE',
//     subtitle: 'OCEAN\'S BOUNTY',
//     description: 'The finest catch from the seven seas, prepared with royal techniques.',
//     icon: Fish,
//     color: 'cyan',
//     image: 'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 10
//   },
//   {
//     id: 'vegetarian-kingdom',
//     title: 'VEGETARIAN KINGDOM',
//     subtitle: 'CELEBRATION OF NATURE',
//     description: 'Plant-based cuisine that proves vegetables can be truly royal.',
//     icon: Leaf,
//     color: 'green',
//     image: 'https://images.unsplash.com/photo-1540189542934-92e24afc7e7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 14
//   },
//   {
//     id: 'royal-desserts',
//     title: 'ROYAL DESSERTS',
//     subtitle: 'SWEET CULMINATIONS',
//     description: 'End your feast on a sweet note with desserts fit for royalty.',
//     icon: Cake,
//     color: 'pink',
//     image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 12
//   },
//   {
//     id: 'wine-cellar',
//     title: 'WINE CELLAR',
//     subtitle: 'THE ROYAL COLLECTION',
//     description: 'An extensive selection of the world\'s finest wines.',
//     icon: Wine,
//     color: 'red',
//     image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     itemCount: 50
//   }
// ];

// // ==================== DISHES DATA ====================
// const ROYAL_DISHES = [
//   {
//     id: 'dish-001',
//     sectionId: 'royal-beginnings',
//     name: 'TANDOORI TIGER PRAWNS',
//     subtitle: 'The Monarch\'s Choice',
//     description: 'Jumbo prawns marinated in a secret blend of 25 royal spices, grilled to perfection.',
//     price: 2800,
//     calories: 320,
//     prepTime: '25 mins',
//     spiceLevel: 3,
//     isVegetarian: false,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: true,
//     rating: 4.9,
//     reviews: 312,
//     image: 'https://images.unsplash.com/photo-1625943553852-781c6ab46f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     ingredients: ['Tiger Prawns', 'Kashmiri Chili', 'Kasuri Methi', 'Saffron', 'Ginger-Garlic', 'Mustard Oil'],
//     origin: 'Coastal India',
//     winePairing: 'Sancerre'
//   },
//   {
//     id: 'dish-002',
//     sectionId: 'royal-beginnings',
//     name: 'LUCKNOWI GALOUTI KEBAB',
//     subtitle: 'The Nawab\'s Delight',
//     description: 'Melt-in-your-mouth kebabs made with 160 spices, a testament to culinary genius.',
//     price: 2400,
//     calories: 290,
//     prepTime: '45 mins',
//     spiceLevel: 2,
//     isVegetarian: false,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: true,
//     rating: 5.0,
//     reviews: 456,
//     image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     ingredients: ['Minced Lamb', 'Raw Papaya', 'Rose Petals', 'Kewra Water', 'Green Cardamom'],
//     origin: 'Lucknow',
//     winePairing: 'Champagne'
//   },
//   {
//     id: 'dish-003',
//     sectionId: 'imperial-soups',
//     name: 'ROYAL MULLIGATAWNY',
//     subtitle: 'The Anglo-Indian Classic',
//     description: 'Traditional lentil soup with coconut milk, elevated with saffron.',
//     price: 1200,
//     calories: 180,
//     prepTime: '25 mins',
//     spiceLevel: 2,
//     isVegetarian: true,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: false,
//     rating: 4.8,
//     reviews: 234,
//     image: 'https://images.unsplash.com/photo-1547592166-23ac45744e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     ingredients: ['Masoor Dal', 'Coconut Milk', 'Saffron', 'Curry Leaves', 'Ginger'],
//     origin: 'Tamil Nadu',
//     winePairing: 'Riesling'
//   },
//   {
//     id: 'dish-004',
//     sectionId: 'tandoor-royale',
//     name: 'PESHAWARI CHICKEN TIKKA',
//     subtitle: 'The Frontier Classic',
//     description: 'Chicken marinated in traditional Peshawari spices, grilled over charcoal.',
//     price: 2200,
//     calories: 340,
//     prepTime: '30 mins',
//     spiceLevel: 3,
//     isVegetarian: false,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: true,
//     rating: 4.9,
//     reviews: 289,
//     image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     ingredients: ['Chicken', 'Peshawari Spices', 'White Cumin', 'Ginger', 'Garlic'],
//     origin: 'Peshawar',
//     winePairing: 'Shiraz'
//   },
//   {
//     id: 'dish-005',
//     sectionId: 'signature-curries',
//     name: 'ROGAN JOSH ROYALE',
//     subtitle: 'The Kashmiri Masterpiece',
//     description: 'Tender lamb cooked in a rich gravy of Kashmiri chilies and aromatic spices.',
//     price: 2600,
//     calories: 420,
//     prepTime: '50 mins',
//     spiceLevel: 3,
//     isVegetarian: false,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: true,
//     rating: 5.0,
//     reviews: 567,
//     image: 'https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
//     ingredients: ['Lamb', 'Kashmiri Chilies', 'Fennel', 'Ginger', 'Yogurt'],
//     origin: 'Kashmir',
//     winePairing: 'Pinot Noir'
//   },
//   {
//     id: 'dish-006',
//     sectionId: 'imperial-biryani',
//     name: 'MURG DUM BIRYANI',
//     subtitle: 'The Nizam\'s Legacy',
//     description: 'Layered chicken biryani with saffron, cooked in a sealed pot.',
//     price: 2400,
//     calories: 520,
//     prepTime: '45 mins',
//     spiceLevel: 2,
//     isVegetarian: false,
//     isVegan: false,
//     isGlutenFree: true,
//     isSignature: true,
//     rating: 4.9,
//     reviews: 678,
//     image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     ingredients: ['Basmati Rice', 'Chicken', 'Saffron', 'Fried Onions', 'Mint'],
//     origin: 'Hyderabad',
//     winePairing: 'Shiraz'
//   }
// ];

// // ==================== UTILITY FUNCTIONS ====================
// const getColorClasses = (color) => {
//   const colors = {
//     amber: {
//       bg: 'bg-amber-500',
//       bgLight: 'bg-amber-500/10',
//       text: 'text-amber-500',
//       border: 'border-amber-500/30',
//       gradient: 'from-amber-500 to-yellow-500'
//     },
//     rose: {
//       bg: 'bg-rose-500',
//       bgLight: 'bg-rose-500/10',
//       text: 'text-rose-500',
//       border: 'border-rose-500/30',
//       gradient: 'from-rose-500 to-pink-500'
//     },
//     orange: {
//       bg: 'bg-orange-500',
//       bgLight: 'bg-orange-500/10',
//       text: 'text-orange-500',
//       border: 'border-orange-500/30',
//       gradient: 'from-orange-500 to-red-500'
//     },
//     purple: {
//       bg: 'bg-purple-500',
//       bgLight: 'bg-purple-500/10',
//       text: 'text-purple-500',
//       border: 'border-purple-500/30',
//       gradient: 'from-purple-500 to-indigo-500'
//     },
//     blue: {
//       bg: 'bg-blue-500',
//       bgLight: 'bg-blue-500/10',
//       text: 'text-blue-500',
//       border: 'border-blue-500/30',
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     cyan: {
//       bg: 'bg-cyan-500',
//       bgLight: 'bg-cyan-500/10',
//       text: 'text-cyan-500',
//       border: 'border-cyan-500/30',
//       gradient: 'from-cyan-500 to-teal-500'
//     },
//     green: {
//       bg: 'bg-green-500',
//       bgLight: 'bg-green-500/10',
//       text: 'text-green-500',
//       border: 'border-green-500/30',
//       gradient: 'from-green-500 to-emerald-500'
//     },
//     pink: {
//       bg: 'bg-pink-500',
//       bgLight: 'bg-pink-500/10',
//       text: 'text-pink-500',
//       border: 'border-pink-500/30',
//       gradient: 'from-pink-500 to-rose-500'
//     },
//     red: {
//       bg: 'bg-red-500',
//       bgLight: 'bg-red-500/10',
//       text: 'text-red-500',
//       border: 'border-red-500/30',
//       gradient: 'from-red-500 to-rose-500'
//     }
//   };
//   return colors[color] || colors.amber;
// };

// // ==================== ANIMATION CLASSES ====================
// const animations = {
//   fadeIn: 'animate-fadeIn',
//   slideUp: 'animate-slideUp',
//   slideDown: 'animate-slideDown',
//   slideLeft: 'animate-slideLeft',
//   slideRight: 'animate-slideRight',
//   scaleIn: 'animate-scaleIn',
//   rotateIn: 'animate-rotateIn',
//   bounce: 'animate-bounce',
//   pulse: 'animate-pulse',
//   shimmer: 'animate-shimmer',
//   float: 'animate-float',
//   glow: 'animate-glow'
// };

// // ==================== COMPONENTS ====================

// // Background Particles (CSS only)
// const BackgroundParticles = () => (
//   <div className="fixed inset-0 pointer-events-none overflow-hidden">
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(122,30,30,0.05)_0%,transparent_50%)]" />
//     {[...Array(20)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent animate-float"
//         style={{
//           width: `${Math.random() * 10 + 2}px`,
//           height: `${Math.random() * 10 + 2}px`,
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animationDelay: `${Math.random() * 5}s`,
//           animationDuration: `${Math.random() * 10 + 10}s`
//         }}
//       />
//     ))}
//   </div>
// );

// // Section Card
// const GrandSectionCard = ({ section, index, onSelect }) => {
//   const Icon = section.icon;
//   const colors = getColorClasses(section.color);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="group relative cursor-pointer transform transition-all duration-700 hover:-translate-y-2"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => onSelect(section.id)}
//     >
//       {/* Card Background */}
//       <div className="relative h-96 rounded-3xl overflow-hidden">
//         {/* Image */}
//         <img
//           src={section.image}
//           alt={section.title}
//           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
//             isHovered ? 'scale-110' : 'scale-100'
//           }`}
//         />
        
//         {/* Overlay */}
//         <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-500 ${
//           isHovered ? 'opacity-90' : 'opacity-80'
//         }`} />

//         {/* Content */}
//         <div className="absolute inset-0 p-8 flex flex-col justify-end">
//           {/* Icon */}
//           <div className={`absolute top-6 right-6 transition-all duration-500 ${
//             isHovered ? 'rotate-180 scale-110' : ''
//           }`}>
//             <Icon className={`w-12 h-12 ${colors.text} opacity-50`} />
//           </div>

//           {/* Title */}
//           <h3 className="text-3xl font-bold text-white mb-2 font-serif transform transition-transform duration-500 group-hover:translate-x-2">
//             {section.title}
//           </h3>
          
//           <p className={`text-lg mb-2 transition-all duration-500 ${
//             isHovered ? 'text-yellow-400' : 'text-white/80'
//           }`}>
//             {section.subtitle}
//           </p>
          
//           <p className="text-sm text-white/60 mb-4 line-clamp-2">
//             {section.description}
//           </p>

//           {/* Footer */}
//           <div className="flex items-center justify-between">
//             <span className={`text-sm ${colors.text}`}>
//               {section.itemCount} Royal Dishes
//             </span>
//             <div className={`flex items-center gap-2 transition-transform duration-500 ${
//               isHovered ? 'translate-x-2' : ''
//             }`}>
//               <span className={`text-sm ${colors.text}`}>Explore</span>
//               <ChevronRight className={`w-4 h-4 ${colors.text}`} />
//             </div>
//           </div>
//         </div>

//         {/* Border Glow */}
//         <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 ${
//           isHovered ? colors.border : ''
//         }`} />
//       </div>
//     </div>
//   );
// };

// // Dish Card
// const GrandDishCard = ({ dish, onToggleWishlist, isInWishlist }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const spiceLevel = '🌶️'.repeat(dish.spiceLevel);

//   return (
//     <div className="group relative">
      
      
//     </div>
//   );
// };

// // Chef Card
// const GrandChefCard = ({ chef, index }) => {
//   return (
//     <div className="group relative animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
//       <div className="bg-gradient-to-br from-gray-900/90 to-gray-900 backdrop-blur-xl rounded-3xl border border-yellow-500/20 p-8 overflow-hidden hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2">
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        
//         {/* Image */}
//         <div className="relative mb-6">
//           <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 group-hover:scale-110 transition-transform duration-500">
//             <img
//               src={chef.image}
//               alt={chef.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 animate-ping" style={{ animationDuration: '3s' }} />
//         </div>

//         {/* Info */}
//         <h3 className="text-xl font-bold text-yellow-400 text-center mb-1 group-hover:scale-105 transition-transform duration-300">
//           {chef.name}
//         </h3>
//         <p className="text-sm text-gray-400 text-center mb-2">{chef.title}</p>
//         <p className="text-xs text-gray-500 text-center mb-4">{chef.experience}</p>

//         {/* Signature Dishes */}
//         <div className="mb-4">
//           <h4 className="text-xs font-semibold text-yellow-400 mb-2 text-center">Signature</h4>
//           <div className="flex flex-wrap justify-center gap-2">
//             {chef.signature.map((dish, i) => (
//               <span
//                 key={i}
//                 className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-yellow-500/20 hover:text-yellow-400 transition-colors duration-300"
//               >
//                 {dish}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Awards */}
//         <div className="space-y-1">
//           {chef.awards.map((award, i) => (
//             <div key={i} className="flex items-center justify-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//               <Award className="w-3 h-3 text-yellow-400" />
//               {award}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== MAIN COMPONENT ====================
// const GrandMenu = () => {
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [wishlist, setWishlist] = useState([]);
//   const [isDayMode, setIsDayMode] = useState(true);
//   const [selectedCurrency, setSelectedCurrency] = useState('INR');
//   const [showWelcome, setShowWelcome] = useState(true);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const sectionsRef = useRef(null);
//   const menuRef = useRef(null);

//   // Filter dishes based on selected section and search
//   const filteredDishes = ROYAL_DISHES.filter(dish => 
//     dish.sectionId === selectedSection &&
//     (dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//      dish.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   // Scroll progress
//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalScroll) * 100;
//       setScrollProgress(progress);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Welcome screen timeout
//   useEffect(() => {
//     const timer = setTimeout(() => setShowWelcome(false), 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Toggle wishlist
//   const toggleWishlist = (dishId) => {
//     setWishlist(prev => 
//       prev.includes(dishId) 
//         ? prev.filter(id => id !== dishId) 
//         : [...prev, dishId]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
//       {/* Background Effects */}
//       <BackgroundParticles />

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-500 via-red-800 to-yellow-500 z-50 transition-all duration-300"
//            style={{ width: `${scrollProgress}%` }} />

//       {/* Welcome Modal */}
//       {showWelcome && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-2xl animate-fadeIn">
//           <div className="text-center animate-scaleIn">
//             <div className="relative w-40 h-40 mx-auto mb-8 animate-float">
//               <div className="absolute inset-0 border-4 border-yellow-500 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
//               <div className="absolute inset-4 border-2 border-yellow-500/50 rounded-full animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }} />
//               <Crown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-yellow-500 animate-pulse" />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-4 font-serif animate-slideUp">
//               TAVISHA GRAND
//             </h1>
//             <p className="text-xl text-gray-400 animate-slideUp" style={{ animationDelay: '200ms' }}>
//               Where every meal is a masterpiece
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-xl border-b border-yellow-500/20">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center gap-2 group">
//               <Crown className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
//               <span className="text-xl font-bold font-serif bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
//                 TAVISHA GRAND
//               </span>
//             </div>

//             {/* Controls */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setIsDayMode(!isDayMode)}
//                 className="p-2 rounded-full bg-gray-800 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors duration-300"
//               >
//                 {isDayMode ? 
//                   <Sun className="w-5 h-5 text-yellow-500" /> : 
//                   <Moon className="w-5 h-5 text-yellow-500" />
//                 }
//               </button>
              
//               <select
//                 value={selectedCurrency}
//                 onChange={(e) => setSelectedCurrency(e.target.value)}
//                 className="bg-gray-800 border border-yellow-500/30 rounded-lg px-3 py-1 text-sm text-gray-200 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
//               >
//                 <option value="INR">🇮🇳 INR</option>
//                 <option value="USD">🇺🇸 USD</option>
//                 <option value="EUR">🇪🇺 EUR</option>
//                 <option value="GBP">🇬🇧 GBP</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-32 pb-20">
//         {/* Hero Section */}
//         <section className="text-center mb-20 animate-fadeIn">
//           <div className="relative w-24 h-24 mx-auto mb-8 group">
//             <div className="absolute inset-0 bg-yellow-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
//             <div className="absolute inset-2 bg-yellow-500/30 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
//             <Crown className="relative w-full h-full text-yellow-500 animate-float" />
//           </div>
          
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif">
//             <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
//               ROYAL MENU
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8 animate-slideUp">
//             {RESTAURANT.description}
//           </p>

//         </section>

//         {/* Menu Sections */}
//         {!selectedSection ? (
//           <>
//             <section ref={sectionsRef} className="mb-20">
//               <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif animate-slideUp">
//                 <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
//                   CULINARY COLLECTIONS
//                 </span>
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {MENU_SECTIONS.map((section, index) => (
//                   <GrandSectionCard
//                     key={section.id}
//                     section={section}
//                     index={index}
//                     onSelect={setSelectedSection}
//                   />
//                 ))}
//               </div>
//             </section>

//             {/* Master Chefs Section */}
//             <section className="mb-20">
//               <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif animate-slideUp">
//                 <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
//                   MASTER CHEFS
//                 </span>
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {MASTER_CHEFS.map((chef, index) => (
//                   <GrandChefCard key={chef.id} chef={chef} index={index} />
//                 ))}
//               </div>
//             </section>
//           </>
//         ) : (
//           /* Selected Section Menu */
//           <section ref={menuRef} className="animate-fadeIn">
//             {/* Back Button */}
//             <button
//               onClick={() => {
//                 setSelectedSection(null);
//                 setSearchTerm('');
//               }}
//               className="mb-8 flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors group"
//             >
//               <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
//               Back to Collections
//             </button>

//             {/* Section Header */}
//             <div className="mb-8 animate-slideUp">
//               <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 font-serif">
//                 {MENU_SECTIONS.find(s => s.id === selectedSection)?.title}
//               </h2>
//               <p className="text-lg text-gray-400">
//                 {MENU_SECTIONS.find(s => s.id === selectedSection)?.description}
//               </p>
//             </div>

           
           

//             {/* Dishes Grid */}
//             {filteredDishes.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredDishes.map((dish, index) => (
//                   <div key={dish.id} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
//                     <GrandDishCard
//                       dish={dish}
//                       onToggleWishlist={toggleWishlist}
//                       isInWishlist={wishlist.includes(dish.id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16 bg-gray-900/50 rounded-3xl border border-yellow-500/20 animate-scaleIn">
//                 <Search className="w-16 h-16 text-yellow-500/30 mx-auto mb-4" />
//                 <p className="text-gray-400 text-xl mb-4">No royal dishes found</p>
//                 <button
//                   onClick={() => setSearchTerm('')}
//                   className="text-yellow-500 hover:text-gray-200 transition-colors"
//                 >
//                   Clear Search
//                 </button>
//               </div>
//             )}
//           </section>
//         )}
//       </main>

//       {/* Wishlist Floating Button */}
//       {wishlist.length > 0 && (
//         <div className="fixed bottom-8 right-8 z-40 animate-slideUp">
//           <button className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full px-6 py-3 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
//             <div className="flex items-center gap-2">
//               <Bookmark className="w-5 h-5 fill-current" />
//               <span>{wishlist.length} Saved</span>
//             </div>
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
//           </button>
//         </div>
//       )}
  
//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideLeft {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         @keyframes rotateIn {
//           from {
//             opacity: 0;
//             transform: rotate(-10deg) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: rotate(0) scale(1);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }
        
//         @keyframes glow {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(234, 179, 8, 0.2);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(234, 179, 8, 0.4);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out;
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.8s ease-out;
//         }
        
//         .animate-slideLeft {
//           animation: slideLeft 0.8s ease-out;
//         }
        
//         .animate-slideRight {
//           animation: slideRight 0.8s ease-out;
//         }
        
//         .animate-scaleIn {
//           animation: scaleIn 0.6s ease-out;
//         }
        
//         .animate-rotateIn {
//           animation: rotateIn 0.8s ease-out;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animate-shimmer {
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
//           background-size: 1000px 100%;
//           animation: shimmer 2s linear infinite;
//         }
        
//         .animate-glow {
//           animation: glow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GrandMenu;


//current working code
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Crown, Diamond, Star, Award,Check,Phone,Mail,Sparkles,
  Wine, Fish, Flame, Leaf,
  Sun, Moon, Clock,
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  ChevronRight, ChevronLeft, Search, X, Bookmark,
  Coffee as CoffeeIcon, Beer as BeerIcon, Cake,
  Utensils as UtensilsIcon,
  Sunrise as SunriseIcon, Sunset as SunsetIcon,
  Moon as MoonIcon,  Trophy, Medal,
  
} from 'lucide-react';

// ==================== RESTAURANT DATA ====================
const RESTAURANT = {
  name: 'TAVISHA GRAND',
  tagline: 'WHERE ROYAL HERITAGE MEETS CULINARY ARTISTRY',
  description: 'Step into a world of unparalleled luxury where centuries-old recipes are reimagined with contemporary flair.',
  established: 1995,
  awards: 47,
  chefs: 15,
  wines: 500,
  address: 'Royal Enclave, Colaba, Mumbai - 400001',
  phone: '+91 98765 43210',
  email: 'royalty@tavisha.com',
  hours: {
    weekday: '11:00 AM - 11:30 PM',
    weekend: '11:00 AM - 12:00 AM'
  },
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
};

// ==================== MASTER CHEFS ====================
const MASTER_CHEFS = [
  {
    id: 'chef-1',
    name: 'CHEF ARJUN MEHRA',
    title: 'Culinary Director',
    experience: '28 years',
    specialty: 'Royal Mughlai Cuisine',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    signature: ['Rogan Josh Royale', 'Galouti Kebab', 'Dal Makhani'],
    awards: ['Michelin Star 2024', 'James Beard Award'],
    bio: 'Master of traditional Mughlai cuisine with a modern twist. Trained under the last royal chefs of Lucknow.',
    philosophy: 'Food is not just sustenance, it\'s an emotion that connects generations.',
    signatureDish: 'Rogan Josh Royale',
    michelinStars: 2,
    instagram: '@chefarjunmehra',
    dishes: [
      { name: 'Rogan Josh Royale', price: 2600, image: 'https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Galouti Kebab', price: 2400, image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Dal Makhani', price: 1200, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    id: 'chef-2',
    name: 'CHEF PIERRE DUBOIS',
    title: 'Executive Chef',
    experience: '22 years',
    specialty: 'French-Indian Fusion',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    signature: ['Truffle Butter Chicken', 'Foie Gras Seekh', 'Saffron Crème'],
    awards: ['Best Fusion Chef', 'Culinary Oscar'],
    bio: 'French master who fell in love with Indian spices. Creates magic by blending two rich culinary traditions.',
    philosophy: 'The best dishes are born when cultures collide on a plate.',
    signatureDish: 'Truffle Butter Chicken',
    michelinStars: 3,
    instagram: '@chefpierredubois',
    dishes: [
      { name: 'Truffle Butter Chicken', price: 3200, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Foie Gras Seekh', price: 3800, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Saffron Crème', price: 1400, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
    ]
  },
  {
    id: 'chef-3',
    name: 'CHEF PRIYA SHARMA',
    title: 'Pastry Director',
    experience: '18 years',
    specialty: 'Royal Desserts',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    signature: ['Gold Leaf Gulab Jamun', 'Saffron Panna Cotta'],
    awards: ['Pastry Chef of the Year', 'Gold Medal'],
    bio: 'Reimagining traditional Indian sweets with global techniques. Each dessert tells a story of royalty.',
    philosophy: 'Desserts should be an experience, not just a sweet ending.',
    signatureDish: 'Gold Leaf Gulab Jamun',
    michelinStars: 1,
    instagram: '@chefpriyasharma',
    dishes: [
      { name: 'Gold Leaf Gulab Jamun', price: 1800, image: 'https://images.unsplash.com/photo-1621265041135-7aa639fd8f06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Saffron Panna Cotta', price: 1600, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
      { name: 'Rose Phirni', price: 1200, image: 'https://images.unsplash.com/photo-1621265041135-7aa639fd8f06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
    ]
  }
];

// ==================== MENU SECTIONS ====================
const MENU_SECTIONS = [
  {
    id: 'royal-beginnings',
    title: 'ROYAL BEGINNINGS',
    subtitle: 'THE GRAND OVERTURE',
    description: 'Exquisite starters that set the stage for an unforgettable culinary journey.',
    icon: Crown,
    color: 'amber',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    itemCount: 8
  },
  {
    id: 'imperial-soups',
    title: 'IMPERIAL SOUPS',
    subtitle: 'WARMTH OF THE KINGDOM',
    description: 'Rich, aromatic broths that have warmed the hearts of emperors.',
    icon: Diamond,
    color: 'rose',
    image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    itemCount: 6
  },
  {
    id: 'tandoor-royale',
    title: 'TANDOOR ROYALE',
    subtitle: 'FLAMES OF THE PALACE',
    description: 'Traditional clay oven delicacies with secret royal recipes.',
    icon: Flame,
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1571805341302-f857308690e3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    itemCount: 12
  },
  {
    id: 'signature-curries',
    title: 'SIGNATURE CURRIES',
    subtitle: 'THE CROWN JEWELS',
    description: 'The pinnacle of culinary artistry, passed down through generations.',
    icon: Award,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1602881917445-0b1ba001addf?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    itemCount: 15
  },
  {
    id: 'imperial-biryani',
    title: 'IMPERIAL BIRYANI',
    subtitle: 'THE FEAST OF KINGS',
    description: 'Layered rice dishes that are the crown jewel of our kitchen.',
    icon: Star,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    itemCount: 8
  },
];

// ==================== DISHES DATA ====================
export const ROYAL_DISHES = [
  {
    id: 'dish-001',
    sectionId: 'royal-beginnings',
    name: 'TANDOORI TIGER PRAWNS',
    subtitle: 'The Monarch\'s Choice',
    description: 'Jumbo prawns marinated in a secret blend of 25 royal spices, grilled to perfection.',
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
       image: 'https://images.unsplash.com/photo-1602881917445-0b1ba001addf?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  images: [
    'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ],
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
    history: 'This recipe dates back to the royal kitchens of the Mughal Empire, where it was created for emperors who craved the flavors of the coast.',
    chef: {
      name: 'CHEF ARJUN MEHRA',
      title: 'Culinary Director',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      note: 'This dish represents my interpretation of a recipe passed down through five generations.'
    },
    winePairing: 'Sancerre',
    wineNotes: 'The crisp acidity and mineral notes of Sancerre complement the succulent prawns perfectly.',
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
    pairings: [
      { type: 'Wine', name: 'Sancerre', price: 4500 },
      { type: 'Wine', name: 'Chablis', price: 4200 },
      { type: 'Beer', name: 'Belgian Witbier', price: 800 },
      { type: 'Cocktail', name: 'Saffron Martini', price: 1200 }
    ]
  },
  {
    id: 'dish-002',
    sectionId: 'royal-beginnings',
    name: 'LUCKNOWI GALOUTI KEBAB',
    subtitle: 'The Nawab\'s Delight',
    description: 'Melt-in-your-mouth kebabs made with 160 spices, a testament to culinary genius.',
    longDescription: 'These legendary kebabs are the crowning glory of Lucknowi cuisine. Made with finely minced lamb and over 160 spices, each kebab is a labor of love that takes 48 hours to prepare. The secret lies in the addition of raw papaya as a natural tenderizer and the inclusion of rose petals and kewra water that give these kebabs their distinctive aroma.',
    price: 2400,
    calories: 290,
    protein: '22g',
    carbs: '8g',
    fat: '16g',
    prepTime: '45 mins',
    cookingTime: '12 mins',
    totalTime: '57 mins',
    spiceLevel: 2,
    difficulty: 'Expert',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSignature: true,
    isSeasonal: false,
    isChefSpecial: true,
    rating: 5.0,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1599487488172-70625c04c805?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    ],
    ingredients: [
      { name: 'Minced Lamb', quantity: '500g', notes: 'From young lamb' },
      { name: 'Raw Papaya', quantity: '2 tbsp', notes: 'For tenderizing' },
      { name: 'Rose Petals', quantity: '1 tbsp', notes: 'Dried' },
      { name: 'Kewra Water', quantity: '1 tsp', notes: 'For aroma' },
      { name: 'Green Cardamom', quantity: '10 pods', notes: 'Ground' }
    ],
    origin: 'Lucknow',
    history: 'Created for the Nawabs of Lucknow who demanded kebabs so tender they would melt on the tongue without chewing.',
    chef: {
      name: 'CHEF ARJUN MEHRA',
      title: 'Culinary Director',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      note: 'The secret to perfect Galouti is patience. The mince must be ground to a paste and rested overnight.'
    },
    winePairing: 'Champagne',
    wineNotes: 'The bubbles and acidity cut through the richness of the lamb.',
    beerPairing: 'Belgian Dubbel',
    cocktailPairing: 'Rose Saffron Martini',
    allergens: ['Lamb'],
    dietaryInfo: ['Contains Meat', 'Gluten-Free'],
    servingSize: '4 pieces',
    serves: '1-2 people',
    bestFor: ['Starter', 'Special Occasions'],
    availableFrom: '6:00 PM',
    availableTo: '11:00 PM',
    minOrder: 1,
    maxOrder: 8,
    tags: ['Signature', 'Royal', 'Lucknowi', 'Kebab'],
    awards: [
      { name: 'Best Kebab 2024', organization: 'Food Critics Circle' }
    ],
    pairings: [
      { type: 'Wine', name: 'Champagne', price: 5500 },
      { type: 'Beer', name: 'Belgian Dubbel', price: 900 },
      { type: 'Cocktail', name: 'Rose Saffron Martini', price: 1300 }
    ]
  },
];

// ==================== SPECIAL EVENTS ====================
const SPECIAL_EVENTS = [
  {
    id: 'event-1',
    title: 'ROYAL WINE DINNER',
    date: 'March 15, 2024',
    time: '7:30 PM',
    description: 'An exclusive 7-course dinner paired with rare vintage wines from the royal cellars.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 15000,
    spots: 20,
    chef: 'CHEF PIERRE DUBOIS'
  },
  {
    id: 'event-2',
    title: 'MASTERCLASS: ART OF BIRYANI',
    date: 'March 22, 2024',
    time: '11:00 AM',
    description: 'Learn the secrets of perfect biryani from Master Chef Arjun Mehra.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 8000,
    spots: 15,
    chef: 'CHEF ARJUN MEHRA'
  },
  
  
];

// ==================== GALLERY IMAGES ====================
const GALLERY_IMAGES = [
  {
    id: 'gallery-1',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'The Grand Dining Hall',
    category: 'Interior'
  },
  {
    id: 'gallery-2',
    image: 'https://images.unsplash.com/photo-1550966871-3ed0c5d92f9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Chef\'s Table Experience',
    category: 'Experience'
  },
  {
    id: 'gallery-3',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Plating Perfection',
    category: 'Cuisine'
  },
  {
    id: 'gallery-4',
    image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Wine Cellar',
    category: 'Cellar'
  },
  {
    id: 'gallery-5',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Private Dining',
    category: 'Interior'
  },
  {
    id: 'gallery-6',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Kitchen Theatre',
    category: 'Experience'
  }
];

// ==================== UTILITY FUNCTIONS ====================
const getColorClasses = (color) => {
  const colors = {
    amber: {
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-500/10',
      text: 'text-amber-500',
      border: 'border-amber-500/30',
      gradient: 'from-amber-500 to-yellow-500'
    },
    rose: {
      bg: 'bg-rose-500',
      bgLight: 'bg-rose-500/10',
      text: 'text-rose-500',
      border: 'border-rose-500/30',
      gradient: 'from-rose-500 to-pink-500'
    },
    orange: {
      bg: 'bg-orange-500',
      bgLight: 'bg-orange-500/10',
      text: 'text-orange-500',
      border: 'border-orange-500/30',
      gradient: 'from-orange-500 to-red-500'
    },
    purple: {
      bg: 'bg-purple-500',
      bgLight: 'bg-purple-500/10',
      text: 'text-purple-500',
      border: 'border-purple-500/30',
      gradient: 'from-purple-500 to-indigo-500'
    },
    blue: {
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-500/10',
      text: 'text-blue-500',
      border: 'border-blue-500/30',
      gradient: 'from-blue-500 to-cyan-500'
    },
    cyan: {
      bg: 'bg-cyan-500',
      bgLight: 'bg-cyan-500/10',
      text: 'text-cyan-500',
      border: 'border-cyan-500/30',
      gradient: 'from-cyan-500 to-teal-500'
    },
    green: {
      bg: 'bg-green-500',
      bgLight: 'bg-green-500/10',
      text: 'text-green-500',
      border: 'border-green-500/30',
      gradient: 'from-green-500 to-emerald-500'
    },
    pink: {
      bg: 'bg-pink-500',
      bgLight: 'bg-pink-500/10',
      text: 'text-pink-500',
      border: 'border-pink-500/30',
      gradient: 'from-pink-500 to-rose-500'
    },
    red: {
      bg: 'bg-red-500',
      bgLight: 'bg-red-500/10',
      text: 'text-red-500',
      border: 'border-red-500/30',
      gradient: 'from-red-500 to-rose-500'
    }
  };
  return colors[color] || colors.amber;
};

// Background Particles
const BackgroundParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(122,30,30,0.05)_0%,transparent_50%)]" />
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent animate-float"
        style={{
          width: `${Math.random() * 10 + 2}px`,
          height: `${Math.random() * 10 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`
        }}
      />
    ))}
  </div>
);

// Search Bar Component (keeping it even though not used, in case you need it elsewhere)
const GrandSearchBar = ({ onSearch, placeholder = "Search royal delicacies..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative transition-all duration-500 ${
      isFocused ? 'scale-105' : 'scale-100'
    }`}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-8 py-5 bg-gray-900/50 backdrop-blur-xl border-2 border-yellow-500/30 rounded-2xl focus:border-yellow-500 focus:outline-none text-gray-200 placeholder-gray-500 pl-16 pr-14 text-lg transition-all duration-300 shadow-2xl"
      />
      <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-yellow-500 w-6 h-6" />
      {searchTerm && (
        <button
          onClick={() => {
            setSearchTerm('');
            onSearch('');
          }}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

// Section Card
const GrandSectionCard = ({ section, index, onSelect }) => {
  const Icon = section.icon;
  const colors = getColorClasses(section.color);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer transform transition-all duration-700 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(section.id)}
    >
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={section.image}
          alt={section.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-80'
        }`} />

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className={`absolute top-6 right-6 transition-all duration-500 ${
            isHovered ? 'rotate-180 scale-110' : ''
          }`}>
            <Icon className={`w-12 h-12 ${colors.text} opacity-50`} />
          </div>

          <h3 className="text-3xl font-bold text-white mb-2 font-serif transform transition-transform duration-500 group-hover:translate-x-2">
            {section.title}
          </h3>
          
          <p className={`text-lg mb-2 transition-all duration-500 ${
            isHovered ? 'text-yellow-400' : 'text-white/80'
          }`}>
            {section.subtitle}
          </p>
          
          <p className="text-sm text-white/60 mb-4 line-clamp-2">
            {section.description}
          </p>

          <div className="flex items-center justify-between">
            <span className={`text-sm ${colors.text}`}>
              {section.itemCount} Royal Dishes
            </span>
            <div className={`flex items-center gap-2 transition-transform duration-500 ${
              isHovered ? 'translate-x-2' : ''
            }`}>
              <span className={`text-sm ${colors.text}`}>Explore</span>
              <ChevronRight className={`w-4 h-4 ${colors.text}`} />
            </div>
          </div>
        </div>

        <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 ${
          isHovered ? colors.border : ''
        }`} />
      </div>
    </div>
  );
};


// Enhanced Chef Card
const GrandChefCard = ({ chef, index, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative animate-slideUp cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onExplore(chef.id)}
    >
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-xl rounded-3xl border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-yellow-500/20">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-500 to-red-600 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={chef.image}
            alt={chef.name}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {/* Michelin Stars */}
          <div className="absolute top-4 right-4 flex gap-1">
            {[...Array(chef.michelinStars)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/30">
            <span className="text-yellow-400 font-semibold">{chef.experience}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8">
          {/* Name & Title */}
          <h3 className="text-2xl font-bold text-yellow-400 mb-1 font-serif group-hover:scale-105 transition-transform duration-300">
            {chef.name}
          </h3>
          <p className="text-gray-400 mb-4">{chef.title}</p>

          {/* Specialty */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-yellow-500/80 mb-2">SPECIALTY</h4>
            <p className="text-gray-300 text-lg">{chef.specialty}</p>
          </div>

          {/* Signature Dishes */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-yellow-500/80 mb-3">SIGNATURE DISHES</h4>
            <div className="flex flex-wrap gap-2">
              {chef.signature.map((dish, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-yellow-500/20 hover:bg-yellow-500/20 hover:text-yellow-400 transition-all duration-300"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-yellow-500/80 mb-3">AWARDS</h4>
            <div className="space-y-2">
              {chef.awards.map((award, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  {award}
                </div>
              ))}
            </div>
          </div>

          {/* Explore Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onExplore(chef.id);
            }}
            className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Chef's World
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};


// Event Card
const EventCard = ({ event }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2">
    <img src={event.image} alt={event.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h3>
      <p className="text-gray-300 mb-2">{event.date} • {event.time}</p>
      <p className="text-gray-400 text-sm mb-4">{event.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">₹{event.price}</span>
        <span className="text-sm text-yellow-500">{event.spots} spots left</span>
      </div>
      <button className="w-full mt-4 bg-yellow-500/20 text-yellow-400 py-2 rounded-xl border border-yellow-500/30 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300">
        Reserve Now
      </button>
    </div>
  </div>
);

// Gallery Card
const GalleryCard = ({ item }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500">
    <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
      <p className="text-gray-300">{item.category}</p>
    </div>
  </div>
);

// ==================== MAIN COMPONENT ====================
const GrandMenu = () => {
  const navigate = useNavigate();
  
  const [wishlist, setWishlist] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedChef, setSelectedChef] = useState(null);
  
  const handleDishSelect = (dishId) => {
    navigate(`/menu/${dishId}`);
  };

  const handleSectionSelect = (sectionId) => {
    // Find the first dish in this section
    const firstDishInSection = ROYAL_DISHES.find(dish => dish.sectionId === sectionId);
    if (firstDishInSection) {
      // Navigate to the dish detail page with the dish ID
      navigate(`/menu/${firstDishInSection.id}`);
    } else {
      // If no dish found, you might want to show a message or navigate to a default page
      console.log('No dishes found in this section');
      // Optionally navigate to a section page or show a notification
    }
  };

  const toggleWishlist = (dishId) => {
    setWishlist(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId) 
        : [...prev, dishId]
    );
  };

  const sectionsRef = useRef(null);
  
  // Welcome screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      <BackgroundParticles />
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-2xl animate-fadeIn">
          <div className="text-center animate-scaleIn">
            <div className="relative w-40 h-40 mx-auto mb-8 animate-float">
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute inset-4 border-2 border-yellow-500/50 rounded-full animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }} />
              <Crown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-yellow-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-4 font-serif animate-slideUp">
              TAVISHA GRAND
            </h1>
            <p className="text-xl text-gray-400 animate-slideUp" style={{ animationDelay: '200ms' }}>
              Where every meal is a masterpiece
            </p>
          </div>
        </div>
      )}
   
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <section className="relative h-[80vh] mb-20 rounded-3xl overflow-hidden animate-fadeIn">
          {/* Background Image */}
          <img 
            src={RESTAURANT.heroImage}
            alt="Tavisha Grand Restaurant"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6 animate-slideUp">
                  <div className="w-16 h-0.5 bg-yellow-500" />
                  <span className="text-yellow-500 font-semibold tracking-widest">EST. {RESTAURANT.established}</span>
                </div>
                
                <h1 className="text-7xl md:text-8xl font-bold mb-6 font-serif animate-slideUp" style={{ animationDelay: '100ms' }}>
                  <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
                    ROYAL MENU
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 mb-8 max-w-2xl animate-slideUp" style={{ animationDelay: '200ms' }}>
                  {RESTAURANT.description}
                </p>
                
                <div className="flex gap-4 animate-slideUp" style={{ animationDelay: '300ms' }}>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
                    Explore Menu
                  </button>
                  <button className="border-2 border-yellow-500/30 text-yellow-500 font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-500/10 transition-all duration-300">
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Menu Sections - Now navigates to dish detail */}
        <section ref={sectionsRef} className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              CULINARY COLLECTIONS
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Discover our meticulously curated menu sections, each telling a unique story of royal culinary heritage
          </p>
          
          {/* Grid layout for all sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_SECTIONS.map((section, index) => (
              <GrandSectionCard
                key={section.id}
                section={section}
                index={index}
                onSelect={handleSectionSelect}
              />
            ))}
          </div>
        </section>

        {/* Enhanced Master Chefs Section */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              MASTER CHEFS
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Meet the culinary artists behind your extraordinary dining experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MASTER_CHEFS.map((chef, index) => (
              <GrandChefCard 
                key={chef.id} 
                chef={chef} 
                index={index}
                onExplore={setSelectedChef}
              />
            ))}
          </div>
        </section>

        {/* Special Events Section */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              SPECIAL EVENTS
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Exclusive culinary experiences curated by our master chefs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIAL_EVENTS.map((event, index) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        

        {/* ==================== ROYAL EXPERIENCES SECTION ==================== */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              ROYAL EXPERIENCES
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Immerse yourself in exclusive dining experiences crafted for royalty
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chef's Table Experience */}
            <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Chef's Table"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
              </div>
              
              <div className="relative p-8 h-[500px] flex flex-col justify-end">
                <div className="absolute top-8 right-8">
                  <Crown className="w-16 h-16 text-yellow-500/30 group-hover:text-yellow-500/50 transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-bold text-yellow-400 mb-3 font-serif">THE CHEF'S TABLE</h3>
                <p className="text-xl text-white mb-4">An intimate culinary journey</p>
                <p className="text-gray-300 mb-6">
                  Seated at the heart of our kitchen, witness the artistry of our master chefs as they create a personalized 10-course tasting menu exclusively for you.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">10</span>
                    <span className="text-sm text-gray-400">Exclusive Courses</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">3</span>
                    <span className="text-sm text-gray-400">Master Chefs</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">4 hrs</span>
                    <span className="text-sm text-gray-400">Culinary Journey</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">₹15k</span>
                    <span className="text-sm text-gray-400">Per Person</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 transform group-hover:scale-105">
                  Reserve Chef's Table
                </button>
              </div>
            </div>

            {/* Royal Wine Tasting */}
            <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Wine Tasting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
              </div>
              
              <div className="relative p-8 h-[500px] flex flex-col justify-end">
                <div className="absolute top-8 right-8">
                  <Wine className="w-16 h-16 text-yellow-500/30 group-hover:text-yellow-500/50 transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-bold text-yellow-400 mb-3 font-serif">ROYAL WINE EXPERIENCE</h3>
                <p className="text-xl text-white mb-4">Journey through 500+ labels</p>
                <p className="text-gray-300 mb-6">
                  Descend into our temperature-controlled wine cellar housing over 500 rare vintages. Guided by our sommelier, explore the world's finest wines paired with artisanal cheeses.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">500+</span>
                    <span className="text-sm text-gray-400">Wine Labels</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">15</span>
                    <span className="text-sm text-gray-400">Countries</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">7</span>
                    <span className="text-sm text-gray-400">Course Pairing</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                    <span className="block text-2xl font-bold text-yellow-400">₹8.5k</span>
                    <span className="text-sm text-gray-400">Per Person</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 transform group-hover:scale-105">
                  Book Wine Experience
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ROYAL TESTIMONIALS SECTION ==================== */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              VOICES OF ROYALTY
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            What our esteemed guests say about their royal dining experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl text-yellow-500/20 font-serif">"</div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Guest"
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">Rajiv Mehta</h4>
                  <p className="text-yellow-500">Business Tycoon</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">
                "Tavisha Grand isn't just a restaurant; it's a journey through India's royal culinary heritage. The Galouti Kebabs literally melt in your mouth. A truly regal experience."
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-sm text-gray-500">Dined on February 15, 2024</p>
              
              <div className="absolute bottom-6 right-6">
                <Medal className="w-8 h-8 text-yellow-500/30" />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl text-yellow-500/20 font-serif">"</div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108777-383fd5c8a4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Guest"
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">Sarah Johnson</h4>
                  <p className="text-yellow-500">Food Critic, Michelin Guide</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">
                "The fusion of French techniques with Indian spices at Chef Pierre's table is nothing short of revolutionary. The Truffle Butter Chicken deserves its own standing ovation."
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-sm text-gray-500">Dined on January 28, 2024</p>
              
              <div className="absolute bottom-6 right-6">
                <Medal className="w-8 h-8 text-yellow-500/30" />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl text-yellow-500/20 font-serif">"</div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Guest"
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">Michael Chang</h4>
                  <p className="text-yellow-500">CEO, Luxury Hotels International</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 italic">
                "From the moment you step in, every detail screams royalty. The wine cellar is a treasure trove, and the service is impeccable. This is how fine dining should be."
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-sm text-gray-500">Dined on February 10, 2024</p>
              
              <div className="absolute bottom-6 right-6">
                <Medal className="w-8 h-8 text-yellow-500/30" />
              </div>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gray-900/50 to-gray-950/50 rounded-3xl border border-yellow-500/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400">Overall Rating</p>
                <p className="text-sm text-gray-500">Based on 2,847 reviews</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">#1</div>
                <p className="text-gray-400">Fine Dining</p>
                <p className="text-sm text-gray-500">Mumbai 2024</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">97%</div>
                <p className="text-gray-400">Would Return</p>
                <p className="text-sm text-gray-500">Guest Satisfaction</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
                <p className="text-gray-400">International Awards</p>
                <p className="text-sm text-gray-500">2023-2024</p>
              </div>
            </div>
          </div>
        </section>

      {/* // Add these sections after the Special Events section and before the Gallery section */}

        {/* ==================== THE ROYAL CELLAR ==================== */}
        <section className="mb-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            {/* Section Header with Ornate Design */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
                <Wine className="w-8 h-8 text-amber-500" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                  THE ROYAL CELLAR
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A curated collection of the world's finest vintages, aged to perfection in our temperature-controlled cellars
              </p>
            </div>

            {/* Featured Wine Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Premium Wine Collection */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000" />
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 overflow-hidden">
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative flex flex-col md:flex-row gap-8 items-center">
                    {/* Wine Image with Bottle Effect */}
                    <div className="relative w-48 h-96">
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 to-rose-500/30 rounded-full blur-2xl transform rotate-12" />
                      <img 
                        src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Premium Wine Collection"
                        className="relative h-full w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Wine Details */}
                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 bg-amber-500/20 rounded-full text-amber-500 text-sm font-semibold mb-4 border border-amber-500/30">
                        ✦ SIGNATURE COLLECTION ✦
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-2">Château Margaux 2010</h3>
                      <p className="text-amber-500 mb-4">Premier Grand Cru Classé</p>
                      
                      <p className="text-gray-400 mb-6">
                        A legendary vintage from Bordeaux's most prestigious estate. Notes of blackcurrant, violet, and cedar with an extraordinarily long finish.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-black/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-amber-500">98</div>
                          <div className="text-xs text-gray-400">Wine Spectator</div>
                        </div>
                        <div className="bg-black/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-amber-500">100</div>
                          <div className="text-xs text-gray-400">Robert Parker</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-white">₹85,000</span>
                          <span className="text-gray-500 text-sm ml-2">per bottle</span>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 transform hover:scale-105">
                          Reserve Bottle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rare Vintage Selection */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-1000" />
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 overflow-hidden">
                  
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-48 h-96">
                      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/30 to-purple-500/30 rounded-full blur-2xl transform -rotate-12" />
                      <img 
                        src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Rare Vintage"
                        className="relative h-full w-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 bg-rose-500/20 rounded-full text-rose-500 text-sm font-semibold mb-4 border border-rose-500/30">
                        ✦ RARE RESERVE ✦
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-2">Domaine de la Romanée-Conti 2015</h3>
                      <p className="text-rose-500 mb-4">Grand Cru, Burgundy</p>
                      
                      <p className="text-gray-400 mb-6">
                        The pinnacle of Pinot Noir. Exquisite aromas of rose petal, cherry, and exotic spices. Only 6,000 bottles produced annually.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-black/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-rose-500">100</div>
                          <div className="text-xs text-gray-400">Decanter</div>
                        </div>
                        <div className="bg-black/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-rose-500">19.5</div>
                          <div className="text-xs text-gray-400">Jancis Robinson</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-white">₹2,50,000</span>
                          <span className="text-gray-500 text-sm ml-2">per bottle</span>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-xl hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-500 transform hover:scale-105">
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wine Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Champagne', count: 48, icon: '🥂', color: 'amber' },
                { name: 'Red Wine', count: 156, icon: '🍷', color: 'rose' },
                { name: 'White Wine', count: 98, icon: '🥂', color: 'amber' },
                { name: 'Whisky', count: 72, icon: '🥃', color: 'rose' },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500/30 transition-all duration-300">
                    <span className="text-4xl mb-3 block">{item.icon}</span>
                    <h4 className="text-white font-semibold mb-1">{item.name}</h4>
                    <p className="text-amber-500 text-sm">{item.count} Labels</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PRIVATE DINING & ROYAL SUITES ==================== */}
        <section className="mb-20">
          {/* Section Header with Golden Ornament */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-12 h-12 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl" />
                <Crown className="w-10 h-10 text-amber-500" />
                <div className="w-12 h-12 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
                  PRIVATE DINING
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Intimate spaces designed for life's most memorable moments, where every detail is tailored to perfection
              </p>
            </div>
          </div>

          {/* Main Feature - Maharaja's Hall */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden mb-8 group">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Maharaja's Hall"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent" />
            
            {/* Ornate Border */}
            <div className="absolute inset-6 border-2 border-amber-500/20 rounded-2xl pointer-events-none" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-12">
                <div className="max-w-2xl">
                  <div className="inline-block px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-500 font-semibold mb-6 border border-amber-500/30">
                    ✦ THE MAHARAJA'S HALL ✦
                  </div>
                  
                  <h3 className="text-5xl font-bold text-white mb-4 font-serif">A Hall Fit for Kings</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Our crown jewel, this majestic hall features hand-carved pillars, crystal chandeliers, and a private balcony overlooking the royal gardens.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500 mb-1">40</div>
                      <div className="text-sm text-gray-400">Guests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500 mb-1">2</div>
                      <div className="text-sm text-gray-400">Private Chefs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500 mb-1">360°</div>
                      <div className="text-sm text-gray-400">Garden View</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                      Inquire Availability
                    </button>
                    <button className="px-8 py-4 border-2 border-amber-500/30 text-amber-500 rounded-xl hover:bg-amber-500/10 transition-all duration-300">
                      Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'THE WINE CELLAR',
                description: 'Intimate dining surrounded by 500+ rare vintages',
                capacity: '12 guests',
                image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                icon: Wine
              },
              {
                name: 'THE TERRACE GARDEN',
                description: 'Alfresco dining under the stars with city views',
                capacity: '60 guests',
                image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                icon: Sun
              },
              {
                name: 'THE MAHARANI SUITE',
                description: 'Opulent private room with royal decor and butler service',
                capacity: '20 guests',
                image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                icon: Diamond
              }
            ].map((venue, index) => {
              const Icon = venue.icon;
              return (
                <div key={index} className="group relative h-96 rounded-3xl overflow-hidden">
                  <img 
                    src={venue.image}
                    alt={venue.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/30 rounded-tl-2xl" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/30 rounded-br-2xl" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-amber-500 mb-3" />
                      <h4 className="text-2xl font-bold text-white mb-2">{venue.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{venue.description}</p>
                      <p className="text-amber-500 text-sm font-semibold">{venue.capacity}</p>
                    </div>
                    
                    <button 
                     onClick={() => navigate(`/venue/${venue.id}`)}
                    className="w-full py-3 bg-white/10 backdrop-blur-sm border border-amber-500/30 rounded-xl text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300">
                      Explore Venue
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Events Banner */}
          <div className="mt-8 p-10 bg-gradient-to-r from-gray-900/50 to-gray-950/50 rounded-3xl border border-amber-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-3">Plan Your Royal Event</h4>
                <p className="text-gray-400 max-w-2xl">
                  Weddings, anniversaries, corporate galas — our dedicated events team ensures every moment is extraordinary.
                </p>
              </div>
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 whitespace-nowrap">
                  Request Proposal
                </button>
                <button className="px-8 py-4 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition-all duration-300 whitespace-nowrap">
                  View Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* ==================== THE ROYAL LEGACY ==================== */}
        <section className="mb-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
            
            {/* Heritage Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>

          <div className="relative">
            {/* Section Header with Royal Seal */}
            <div className="text-center mb-16">
              <div className="inline-block relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 border-2 border-amber-500 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-2 border border-amber-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <Crown className="absolute inset-0 m-auto w-10 h-10 text-amber-500" />
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                  THE ROYAL LEGACY
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Three decades of culinary excellence, preserving heritage while embracing innovation
              </p>
            </div>

            {/* Timeline Journey */}
            <div className="relative mb-20">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
              
              <div className="space-y-16">
                {/* 1995 - Founding */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 group">
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-gray-900 font-bold">'95</span>
                      </div>
                      <h3 className="text-2xl font-bold text-amber-500 mb-3">The Humble Beginning</h3>
                      <p className="text-gray-400">Founded by Chef Arjun Mehra's grandfather in the heart of Old Delhi, Tavisha began as a 10-table restaurant serving authentic Mughlai cuisine to discerning patrons.</p>
                      <div className="mt-4 text-sm text-gray-500">28 years of culinary heritage</div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1552566624-52f8b3add7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Original Restaurant"
                      className="rounded-3xl h-48 w-full object-cover shadow-2xl border border-amber-500/20"
                    />
                  </div>
                </div>

                {/* 2005 - First Michelin Star */}
                <div className="relative flex items-center flex-row-reverse">
                  <div className="w-1/2 pl-12">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 group">
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Star className="w-6 h-6 text-gray-900 fill-gray-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-500 mb-3">First Michelin Star</h3>
                      <p className="text-gray-400">Tavisha became the first Indian restaurant to receive a Michelin star, recognizing our commitment to preserving royal recipes while innovating presentation.</p>
                      <div className="mt-4 flex gap-2">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pr-12 text-right">
                    <img 
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Michelin Star Ceremony"
                      className="rounded-3xl h-48 w-full object-cover shadow-2xl border border-amber-500/20"
                    />
                  </div>
                </div>

                {/* 2015 - Expansion to Mumbai */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 group">
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Diamond className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-500 mb-3">The Grand Opening</h3>
                      <p className="text-gray-400">Tavisha Grand opened in Mumbai's Royal Enclave, featuring 15,000 sq ft of opulent dining space, private cellars, and our signature chef's table.</p>
                      <div className="mt-4 text-sm text-gray-500">Now serving 500+ guests daily</div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <img 
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Tavisha Grand Mumbai"
                      className="rounded-3xl h-48 w-full object-cover shadow-2xl border border-amber-500/20"
                    />
                  </div>
                </div>

                {/* 2024 - Present Day */}
                <div className="relative flex items-center flex-row-reverse">
                  <div className="w-1/2 pl-12">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 group">
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Award className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-500 mb-3">Global Recognition</h3>
                      <p className="text-gray-400">Today, with 47 international awards, 15 master chefs, and a wine cellar of 500+ labels, Tavisha Grand stands as India's premier dining destination.</p>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-2xl font-bold text-amber-500">47</div>
                          <div className="text-xs text-gray-500">Awards</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-amber-500">15</div>
                          <div className="text-xs text-gray-500">Chefs</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-amber-500">28</div>
                          <div className="text-xs text-gray-500">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pr-12 text-right">
                    <img 
                      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Present Day Excellence"
                      className="rounded-3xl h-48 w-full object-cover shadow-2xl border border-amber-500/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {[
                { number: '28', label: 'Years of Excellence', icon: Crown },
                { number: '47', label: 'International Awards', icon: Award },
                { number: '15', label: 'Master Chefs', icon: Medal },
                { number: '500+', label: 'Rare Wines', icon: Wine }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500">
                      <Icon className="w-10 h-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        
        {/* ==================== ROYAL CONCIERGE SERVICES ==================== */}
        <section className="mb-20">
          {/* Background with Gold Overlay */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Concierge Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-16">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/30 mb-6">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="text-amber-500 font-semibold">BEYOND DINING</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
                  <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
                    ROYAL CONCIERGE
                  </span>
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Personalized services that transform your visit into an unforgettable royal experience
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Private Jet Catering */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">Private Jet Catering</h3>
                      <p className="text-gray-400 mb-6">Gourmet meals prepared by our chefs and delivered to your aircraft, anywhere in India.</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Customized 5-course menus</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Temperature-controlled packaging</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">4-hour advance notice</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 font-semibold">
                        Inquire Pricing
                      </button>
                    </div>
                  </div>
                </div>

                {/* Personal Chef Service */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">Personal Chef Service</h3>
                      <p className="text-gray-400 mb-6">A master chef from Tavisha Grand comes to your home for intimate dinner parties or special occasions.</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Choice of any master chef</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Full service team included</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Custom menu planning</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 font-semibold">
                        Book a Chef
                      </button>
                    </div>
                  </div>
                </div>

                {/* Luxury Gift Hampers */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">Royal Gift Hampers</h3>
                      <p className="text-gray-400 mb-6">Curated collections of our signature products, rare wines, and gourmet delicacies, beautifully presented.</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Signature spice collections</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Rare vintage wines</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">Personalized engraving</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 font-semibold">
                        Explore Hampers
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Private Car Service', icon: '🚗' },
                  { name: 'Hotel Partnerships', icon: '🏨' },
                  { name: 'Event Planning', icon: '✨' },
                  { name: 'Wine Advisory', icon: '🍷' }
                ].map((service, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center hover:border-amber-500/30 transition-all duration-300">
                      <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{service.icon}</span>
                      <span className="text-sm text-gray-400 group-hover:text-amber-500 transition-colors">{service.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Concierge Contact */}
              <div className="mt-12 p-8 bg-gradient-to-r from-gray-900/50 to-gray-950/50 rounded-2xl border border-amber-500/20 text-center">
                <p className="text-gray-300 mb-4">
                  <span className="text-amber-500 font-semibold">24/7 Personal Concierge:</span> Available for our esteemed guests
                </p>
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span className="text-white">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <span className="text-white">concierge@tavisha.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* ==================== ROYAL COLLECTIBLES ==================== */}
<section className="mb-20">
  <div className="relative">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-bold font-serif mb-4">
        <span className="bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
          ROYAL COLLECTIBLES
        </span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Take a piece of Tavisha Grand home with our exclusive range of luxury merchandise
      </p>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          name: 'Signature Spice Box',
          desc: '12 rare spice blends from our royal kitchen',
          price: '₹4,500',
          image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Best Seller'
        },
        {
          name: 'Gold-Plated Cutlery Set',
          desc: '24K gold-plated, handcrafted in Jaipur',
          price: '₹25,000',
          image: 'https://images.unsplash.com/photo-1584990347449-a5f2feb2af77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Limited Edition'
        },
        {
          name: 'Chef\'s Recipe Book',
          desc: 'Hand-signed by all 15 master chefs',
          price: '₹8,500',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'Exclusive'
        },
        {
          name: 'Royal Tea Collection',
          desc: 'Premium teas from Darjeeling & Assam',
          price: '₹3,200',
          image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          badge: 'New'
        }
      ].map((product, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-4 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-2 right-2 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                {product.badge}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{product.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-amber-500">{product.price}</span>
              <button className="px-4 py-2 bg-amber-500/20 text-amber-500 rounded-xl text-sm hover:bg-amber-500 hover:text-gray-900 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Gift Card Promo */}
    <div className="mt-8 p-8 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-3xl border border-amber-500/20 flex items-center justify-between">
      <div>
        <h4 className="text-2xl font-bold text-white mb-2">Royal Gift Cards</h4>
        <p className="text-gray-400">The perfect gift for special occasions</p>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
          Buy Gift Card
        </button>
        <button className="px-6 py-3 border-2 border-amber-500/30 text-amber-500 rounded-xl hover:bg-amber-500/10 transition-all duration-300">
          Check Balance
        </button>
      </div>
    </div>
  </div>
</section>


{/* ==================== ROYAL GARDENS & SUSTAINABILITY ==================== */}
<section className="mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Side - Gardens */}
    <div className="relative h-[600px] rounded-3xl overflow-hidden group">
      <img 
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Royal Gardens"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-3 mb-4">
          <Leaf className="w-6 h-6 text-green-400" />
          <span className="text-green-400 font-semibold">SUSTAINABILITY FIRST</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3 font-serif">Our Royal Gardens</h3>
        <p className="text-gray-300 mb-6 max-w-lg">
          5 acres of organic heirloom vegetables, rare herbs, and edible flowers, grown using traditional methods passed down through generations.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl font-bold text-green-400">45+</div>
            <div className="text-sm text-gray-400">Heirloom Varieties</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-400">Organic & Pesticide-Free</div>
          </div>
        </div>
        
        <button className="mt-6 px-6 py-3 border-2 border-green-400/30 text-green-400 rounded-xl hover:bg-green-400/10 transition-all duration-300">
          Schedule Garden Tour
        </button>
      </div>
    </div>

    {/* Right Side - Sustainability Initiatives */}
    <div className="space-y-6">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
        <h4 className="text-2xl font-bold text-white mb-6 font-serif">Zero Waste Commitment</h4>
        <div className="space-y-4">
          {[
            { title: 'Composting Program', desc: '100% of kitchen waste composted for gardens', progress: 100 },
            { title: 'Plastic-Free', desc: 'Eliminated single-use plastics entirely', progress: 100 },
            { title: 'Water Conservation', desc: 'Rainwater harvesting & smart irrigation', progress: 85 },
            { title: 'Local Sourcing', desc: '85% ingredients from within 100km', progress: 85 }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-white">{item.title}</span>
                <span className="text-green-400">{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
        <h4 className="text-2xl font-bold text-white mb-6 font-serif">Seasonal Harvest</h4>
        <div className="grid grid-cols-4 gap-4 text-center">
          {['Spring', 'Summer', 'Monsoon', 'Winter'].map((season, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                <Sun className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
              </div>
              <div className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">{season}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Our menu changes with the seasons, featuring the freshest harvest from our gardens
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-serif animate-slideUp">
            <span className="bg-gradient-to-r from-yellow-500 via-white to-yellow-500 bg-clip-text text-transparent">
              ROYAL GALLERY
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            A visual journey through our palace of culinary arts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((item, index) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(234, 179, 8, 0.4);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        
        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out;
        }
        
        .animate-slideRight {
          animation: slideRight 0.8s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
        
        .animate-rotateIn {
          animation: rotateIn 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GrandMenu;