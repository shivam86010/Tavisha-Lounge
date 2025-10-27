// // src/components/MenuPage.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const MenuPage = () => {
//   const [activeCategory, setActiveCategory] = useState('starters');

//   const menuCategories = [
//     { id: 'starters', name: 'Royal Starters' },
//     { id: 'mains', name: 'Main Course' },
//     { id: 'biryanis', name: 'Signature Biryanis' },
//     { id: 'breads', name: 'Traditional Breads' },
//     { id: 'desserts', name: 'Royal Desserts' },
//     { id: 'beverages', name: 'Beverages' }
//   ];

//   const menuItems = {
//     starters: [
//       {
//         name: "Murgh Malai Tikka",
//         description: "Creamy chicken tikka marinated in cheese and mild spices",
//         price: "$18",
//         spicy: false,
//         vegetarian: false
//       },
//       {
//         name: "Paneer Tikka Royal",
//         description: "Cottage cheese chunks marinated in royal spices and grilled",
//         price: "$16",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Lahsooni Jhinga",
//         description: "Tiger prawns in garlic and herb marinade",
//         price: "$22",
//         spicy: true,
//         vegetarian: false
//       },
//       {
//         name: "Vegetable Galouti",
//         description: "Fine minced vegetable kebabs with royal spices",
//         price: "$14",
//         spicy: false,
//         vegetarian: true
//       }
//     ],
//     mains: [
//       {
//         name: "Butter Chicken Royal",
//         description: "Tender chicken in rich tomato and butter gravy",
//         price: "$24",
//         spicy: false,
//         vegetarian: false
//       },
//       {
//         name: "Rogan Josh",
//         description: "Traditional lamb curry from Kashmir",
//         price: "$28",
//         spicy: true,
//         vegetarian: false
//       },
//       {
//         name: "Paneer Makhani",
//         description: "Cottage cheese in creamy tomato gravy",
//         price: "$20",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Dal Makhani Royal",
//         description: "Black lentils slow-cooked overnight",
//         price: "$16",
//         spicy: false,
//         vegetarian: true
//       }
//     ],
//     biryanis: [
//       {
//         name: "Royal Dum Biryani",
//         description: "Aromatic basmati rice with choice of meat and saffron",
//         price: "$32",
//         spicy: true,
//         vegetarian: false
//       },
//       {
//         name: "Vegetable Biryani",
//         description: "Fragrant rice with seasonal vegetables and spices",
//         price: "$22",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Hyderabadi Biryani",
//         description: "Spicy biryani with traditional Hyderabadi flavors",
//         price: "$30",
//         spicy: true,
//         vegetarian: false
//       }
//     ],
//     breads: [
//       {
//         name: "Naan Royal",
//         description: "Traditional tandoor-baked leavened bread",
//         price: "$6",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Laccha Paratha",
//         description: "Multi-layered whole wheat flatbread",
//         price: "$8",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Garlic Naan",
//         description: "Naan topped with fresh garlic and herbs",
//         price: "$8",
//         spicy: false,
//         vegetarian: true
//       }
//     ],
//     desserts: [
//       {
//         name: "Gulab Jamun",
//         description: "Deep-fried milk balls in rose-flavored syrup",
//         price: "$10",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Rasmalai",
//         description: "Cottage cheese patties in sweetened milk",
//         price: "$12",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Kesar Pista Kulfi",
//         description: "Traditional Indian ice cream with saffron and pistachio",
//         price: "$9",
//         spicy: false,
//         vegetarian: true
//       }
//     ],
//     beverages: [
//       {
//         name: "Mango Lassi",
//         description: "Sweet yogurt drink with fresh mango",
//         price: "$7",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Masala Chai",
//         description: "Traditional Indian spiced tea",
//         price: "$5",
//         spicy: false,
//         vegetarian: true
//       },
//       {
//         name: "Rose Sharbat",
//         description: "Refreshing rose-flavored drink",
//         price: "$6",
//         spicy: false,
//         vegetarian: true
//       }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <section id="menu" className="py-20 bg-soft-cream">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
//             Our <span className="text-royal-maroon">Royal</span> Menu
//           </h2>
//           <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
//           <p className="text-lg text-charcoal max-w-2xl mx-auto">
//             Discover our exquisite selection of dishes, each crafted with traditional 
//             recipes and royal ingredients for an unforgettable dining experience.
//           </p>
//         </motion.div>

//         {/* Category Navigation */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-4 mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {menuCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? 'bg-royal-maroon text-metallic-gold shadow-lg'
//                   : 'bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold shadow-md'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Menu Items Grid */}
//         <motion.div
//           key={activeCategory}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
//         >
//           {menuItems[activeCategory].map((item, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-royal-maroon">{item.name}</h3>
//                   <span className="text-lg font-bold text-burnt-orange">{item.price}</span>
//                 </div>
//                 <p className="text-charcoal mb-4 leading-relaxed">{item.description}</p>
//                 <div className="flex items-center space-x-4">
//                   {item.vegetarian && (
//                     <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                       Vegetarian
//                     </span>
//                   )}
//                   {item.spicy && (
//                     <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
//                       Spicy
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Special Offer Banner */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-16 bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 text-center text-soft-cream"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Royal Thali Experience
//           </h3>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Enjoy our complete royal dining experience with 12 authentic dishes, 
//             desserts, and beverages for just $75 per person.
//           </p>
//           <motion.button
//             className="bg-metallic-gold text-royal-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-soft-cream transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Book Royal Thali
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MenuPage;

// src/components/MenuPage.js
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiStar } from 'react-icons/fi';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    vegetarian: false,
    spicy: false,
    chefSpecial: false
  });
  const [sortBy, setSortBy] = useState('name');

  const menuCategories = [
    { id: 'starters', name: 'Royal Starters', icon: '🥘' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'biryanis', name: 'Signature Biryanis', icon: '🍚' },
    { id: 'breads', name: 'Traditional Breads', icon: '🫓' },
    { id: 'desserts', name: 'Royal Desserts', icon: '🍨' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  const menuItems = {
    starters: [
      {
        id: 1,
        name: "Murgh Malai Tikka",
        description: "Creamy chicken tikka marinated in cheese and mild spices",
        price: "$18",
        spicy: false,
        vegetarian: false,
        chefSpecial: true,
        rating: 4.8
      },
      {
        id: 2,
        name: "Paneer Tikka Royal",
        description: "Cottage cheese chunks marinated in royal spices and grilled",
        price: "$16",
        spicy: false,
        vegetarian: true,
        chefSpecial: true,
        rating: 4.7
      },
      {
        id: 3,
        name: "Lahsooni Jhinga",
        description: "Tiger prawns in garlic and herb marinade",
        price: "$22",
        spicy: true,
        vegetarian: false,
        chefSpecial: false,
        rating: 4.6
      },
      {
        id: 4,
        name: "Vegetable Galouti",
        description: "Fine minced vegetable kebabs with royal spices",
        price: "$14",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.5
      }
    ],
    mains: [
      {
        id: 5,
        name: "Butter Chicken Royal",
        description: "Tender chicken in rich tomato and butter gravy",
        price: "$24",
        spicy: false,
        vegetarian: false,
        chefSpecial: true,
        rating: 4.9
      },
      {
        id: 6,
        name: "Rogan Josh",
        description: "Traditional lamb curry from Kashmir",
        price: "$28",
        spicy: true,
        vegetarian: false,
        chefSpecial: false,
        rating: 4.7
      },
      {
        id: 7,
        name: "Paneer Makhani",
        description: "Cottage cheese in creamy tomato gravy",
        price: "$20",
        spicy: false,
        vegetarian: true,
        chefSpecial: true,
        rating: 4.8
      },
      {
        id: 8,
        name: "Dal Makhani Royal",
        description: "Black lentils slow-cooked overnight",
        price: "$16",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.6
      }
    ],
    biryanis: [
      {
        id: 9,
        name: "Royal Dum Biryani",
        description: "Aromatic basmati rice with choice of meat and saffron",
        price: "$32",
        spicy: true,
        vegetarian: false,
        chefSpecial: true,
        rating: 4.9
      },
      {
        id: 10,
        name: "Vegetable Biryani",
        description: "Fragrant rice with seasonal vegetables and spices",
        price: "$22",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.5
      },
      {
        id: 11,
        name: "Hyderabadi Biryani",
        description: "Spicy biryani with traditional Hyderabadi flavors",
        price: "$30",
        spicy: true,
        vegetarian: false,
        chefSpecial: false,
        rating: 4.7
      }
    ],
    breads: [
      {
        id: 12,
        name: "Naan Royal",
        description: "Traditional tandoor-baked leavened bread",
        price: "$6",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.4
      },
      {
        id: 13,
        name: "Laccha Paratha",
        description: "Multi-layered whole wheat flatbread",
        price: "$8",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.3
      },
      {
        id: 14,
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and herbs",
        price: "$8",
        spicy: false,
        vegetarian: true,
        chefSpecial: true,
        rating: 4.6
      }
    ],
    desserts: [
      {
        id: 15,
        name: "Gulab Jamun",
        description: "Deep-fried milk balls in rose-flavored syrup",
        price: "$10",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.5
      },
      {
        id: 16,
        name: "Rasmalai",
        description: "Cottage cheese patties in sweetened milk",
        price: "$12",
        spicy: false,
        vegetarian: true,
        chefSpecial: true,
        rating: 4.8
      },
      {
        id: 17,
        name: "Kesar Pista Kulfi",
        description: "Traditional Indian ice cream with saffron and pistachio",
        price: "$9",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.4
      }
    ],
    beverages: [
      {
        id: 18,
        name: "Mango Lassi",
        description: "Sweet yogurt drink with fresh mango",
        price: "$7",
        spicy: false,
        vegetarian: true,
        chefSpecial: true,
        rating: 4.7
      },
      {
        id: 19,
        name: "Masala Chai",
        description: "Traditional Indian spiced tea",
        price: "$5",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.6
      },
      {
        id: 20,
        name: "Rose Sharbat",
        description: "Refreshing rose-flavored drink",
        price: "$6",
        spicy: false,
        vegetarian: true,
        chefSpecial: false,
        rating: 4.3
      }
    ]
  };

  // Filter and search functionality
  const filteredItems = useMemo(() => {
    let items = menuItems[activeCategory] || [];

    // Apply search filter
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply dietary filters
    if (filters.vegetarian) {
      items = items.filter(item => item.vegetarian);
    }
    if (filters.spicy) {
      items = items.filter(item => item.spicy);
    }
    if (filters.chefSpecial) {
      items = items.filter(item => item.chefSpecial);
    }

    // Apply sorting
    items.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return items;
  }, [activeCategory, searchQuery, filters, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="menu" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our <span className="text-royal-maroon">Royal</span> Menu
          </h2>
          <div className="w-24 h-1 bg-metallic-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Discover our exquisite selection of dishes, each crafted with traditional 
            recipes and royal ingredients for an unforgettable dining experience.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="lg:col-span-2 relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                />
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* Filter Toggle */}
              <div className="flex items-center space-x-2">
                <FiFilter className="text-royal-maroon" />
                <span className="font-semibold text-charcoal">Filters:</span>
              </div>
            </div>

            {/* Filter Options */}
            <div className="flex flex-wrap gap-4 mt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.vegetarian}
                  onChange={(e) => setFilters(prev => ({ ...prev, vegetarian: e.target.checked }))}
                  className="rounded text-royal-maroon focus:ring-royal-maroon"
                />
                <span className="text-charcoal">Vegetarian</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.spicy}
                  onChange={(e) => setFilters(prev => ({ ...prev, spicy: e.target.checked }))}
                  className="rounded text-royal-maroon focus:ring-royal-maroon"
                />
                <span className="text-charcoal">Spicy</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.chefSpecial}
                  onChange={(e) => setFilters(prev => ({ ...prev, chefSpecial: e.target.checked }))}
                  className="rounded text-royal-maroon focus:ring-royal-maroon"
                />
                <span className="text-charcoal">Chef's Special</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-royal-maroon text-metallic-gold shadow-lg'
                  : 'bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-charcoal">
            Showing {filteredItems.length} of {menuItems[activeCategory]?.length} items
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            key={activeCategory + searchQuery + JSON.stringify(filters) + sortBy}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-royal-maroon">{item.name}</h3>
                        {item.chefSpecial && (
                          <span className="flex items-center space-x-1 bg-metallic-gold text-royal-maroon px-2 py-1 rounded-full text-xs font-bold">
                            <FiStar className="w-3 h-3" />
                            <span>Chef's Pick</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FiStar className="text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-burnt-orange">{item.price}</span>
                  </div>
                  <p className="text-charcoal mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center space-x-4">
                    {item.vegetarian && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Vegetarian
                      </span>
                    )}
                    {item.spicy && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        Spicy
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-charcoal">No items found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilters({ vegetarian: false, spicy: false, chefSpecial: false });
              }}
              className="mt-4 bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 text-center text-soft-cream"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Royal Thali Experience
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Enjoy our complete royal dining experience with 12 authentic dishes, 
            desserts, and beverages for just $75 per person.
          </p>
          <motion.button
            className="bg-metallic-gold text-royal-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-soft-cream transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Royal Thali
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPage;