// src/components/MenuMainPage.js
import React, { useState, useMemo } from 'react';
import MenuPage from './Components/MenuPage';
import MenuHeader from './Components/MenuHeader';
import MenuSearchFilter from './Components/MenuSearchFilter';
import MenuNavigation from './Components/MenuNavigation';
import MenuItemsGrid from './Components/MenuItemsGrid';
import SpecialOfferBanner from './Components/SpecialOfferBanner';
import MenuHighlights from './Components/MenuHighlights';
import DietaryInfo from './Components/DietaryInfo';
import SeasonalSpecials from './Components/SeasonalSpecials';
import PriceRangeGuide from './Components/PriceRangeGuide';
import ChefRecommendations from './Components/ChefRecommendations';
import MenuMap from './Components/MenuMap';
import MenuQuiz from './Components/MenuQuiz';
import CookingProcess from './Components/CookingProcess';
import NutritionFacts from './Components/NutritionFacts';

const MenuMainPage = () => {
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

  return (
    <MenuPage>
      {/* Header Section */}
      <MenuHeader />
      
      {/* Additional Menu Components */}
      <MenuHighlights />
      <DietaryInfo />
      <SeasonalSpecials />

         <MenuQuiz />
    <CookingProcess />
    <NutritionFacts />
      
      {/* Main Menu Content */}
      <div className="container mx-auto px-4">
        <MenuSearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        
        <MenuNavigation
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          menuCategories={menuCategories}
        />
        
        <MenuItemsGrid
          filteredItems={filteredItems}
          menuItems={menuItems}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          filters={filters}
          sortBy={sortBy}
          setSearchQuery={setSearchQuery}
          setFilters={setFilters}
        />
        
        <SpecialOfferBanner />
      </div>
      
      {/* Additional Features */}
      <PriceRangeGuide />
      <ChefRecommendations />
      <MenuMap />
    </MenuPage>
  );
};

export default MenuMainPage;