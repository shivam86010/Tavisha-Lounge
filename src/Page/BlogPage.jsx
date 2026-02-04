// src/components/BlogPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, User, ChevronLeft, ChevronRight, Search, Tag } from 'lucide-react';

const BlogPage = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Fine Dining: A Tavisha Lounge Experience",
      excerpt: "Discover how our chefs combine traditional techniques with modern innovation to create unforgettable culinary experiences.",
      content: "At Tavisha Lounge, we believe fine dining is more than just exceptional food—it's a symphony of flavors, presentation, and atmosphere. Our executive chef shares insights into the meticulous process behind each dish.",
      author: "Chef Arjun Mehra",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Culinary Arts",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "The Perfect Wine Pairing for Royal Indian Cuisine",
      excerpt: "Explore our sommelier's guide to selecting wines that complement the rich flavors of our signature dishes.",
      content: "Pairing wine with Indian cuisine requires understanding the balance of spices and flavors. Our sommelier has curated a selection that enhances every note of our royal dishes.",
      author: "Sommelier Priya Sharma",
      date: "2024-03-10",
      readTime: "4 min read",
      category: "Wine & Beverages",
      image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 3,
      title: "Behind the Scenes: Crafting Our Royal Thali",
      excerpt: "A journey through the creation of our signature Royal Thali, featuring seven courses of culinary excellence.",
      content: "Each element of our Royal Thali tells a story of regional cuisine and royal heritage. From sourcing ingredients to final presentation, every detail matters.",
      author: "Executive Chef Rajiv Kapoor",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Signature Dishes",
      image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
    },
    {
      id: 4,
      title: "Sustainable Sourcing: Our Commitment to Quality",
      excerpt: "How Tavisha Lounge partners with local farmers and producers to ensure the freshest ingredients while supporting communities.",
      content: "Sustainability isn't just a trend—it's our responsibility. We work directly with organic farms and ethical suppliers to bring you the finest ingredients.",
      author: "Sustainability Director Meera Patel",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "The History of Royal Dining Traditions",
      excerpt: "Explore how ancient royal dining customs influence modern luxury dining experiences at Tavisha Lounge.",
      content: "From Mughal courts to Rajput palaces, Indian royal dining has a rich history. We honor these traditions while adapting them for contemporary discerning palates.",
      author: "Cultural Historian Dr. Amit Desai",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "History & Culture",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Mastering the Art of Indian Bread Making",
      excerpt: "Learn about the diverse world of Indian breads and how our chefs perfect each variety in our clay oven.",
      content: "From fluffy naan to crisp parathas, Indian bread making is an art form. Our master bakers share their techniques for creating the perfect accompaniment to every dish.",
      author: "Master Baker Sanjay Verma",
      date: "2024-02-15",
      readTime: "5 min read",
      category: "Culinary Techniques",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 7,
      title: "Seasonal Ingredients: Spring Menu Preview",
      excerpt: "Get a first look at our upcoming spring menu featuring seasonal produce and fresh flavors.",
      content: "As winter fades, we welcome spring with a menu that celebrates renewal. Fresh greens, tender vegetables, and light preparations take center stage.",
      author: "Menu Development Chef Ananya Reddy",
      date: "2024-02-10",
      readTime: "4 min read",
      category: "Seasonal Menus",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80"
    },
    {
      id: 8,
      title: "Creating the Perfect Dining Ambiance",
      excerpt: "Discover how lighting, music, and decor work together to create Tavisha Lounge's signature atmosphere.",
      content: "A great dining experience engages all senses. Our design team explains how every element contributes to an atmosphere of relaxed luxury.",
      author: "Interior Designer Rohan Malhotra",
      date: "2024-02-05",
      readTime: "5 min read",
      category: "Ambiance & Design",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 9,
      title: "The Health Benefits of Traditional Spices",
      excerpt: "Explore how the spices used in our dishes offer more than just flavor—they're packed with health benefits.",
      content: "Turmeric, cumin, cardamom—these aren't just flavor enhancers. Ayurvedic principles guide our use of spices for both taste and wellness.",
      author: "Wellness Consultant Dr. Neha Gupta",
      date: "2024-01-30",
      readTime: "6 min read",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 6;

  // Categories
  const categories = ['All', 'Culinary Arts', 'Wine & Beverages', 'Signature Dishes', 'Sustainability', 'History & Culture', 'Culinary Techniques', 'Seasonal Menus', 'Ambiance & Design', 'Health & Wellness'];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle next/previous
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Tavisha Lounge Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-metallic-gold mb-4 font-serif">
              Tavisha Lounge Blog
            </h1>
            <p className="text-xl md:text-2xl text-soft-cream mb-8 max-w-2xl mx-auto">
              Stories from our kitchen, insights from our experts, and the art of royal dining
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-charcoal opacity-70" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-royal-maroon focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="w-full md:w-auto">
              <select
                className="w-full md:w-auto px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-metallic-gold focus:border-transparent bg-white"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-royal-maroon text-metallic-gold'
                    : 'bg-white text-charcoal hover:bg-gray-100'
                } shadow-soft`}
              >
                <Tag className="h-4 w-4" />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-royal-maroon text-metallic-gold px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-charcoal mb-3 font-serif hover:text-royal-maroon transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-charcoal">
                          {post.author}
                        </span>
                      </div>

                      <button className="text-royal-maroon hover:text-royal-maroon-dark font-medium text-sm flex items-center gap-1 group">
                        Read More
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-gray-200">
              <div className="text-gray-600">
                Showing <span className="font-semibold text-charcoal">{indexOfFirstPost + 1}</span> to{" "}
                <span className="font-semibold text-charcoal">
                  {Math.min(indexOfLastPost, filteredPosts.length)}
                </span>{" "}
                of <span className="font-semibold text-charcoal">{filteredPosts.length}</span> articles
              </div>

              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold"
                  } shadow-soft`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                          currentPage === pageNumber
                            ? "bg-royal-maroon text-metallic-gold font-semibold"
                            : "bg-white text-charcoal hover:bg-gray-100"
                        } shadow-soft`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2 text-gray-400">...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                          currentPage === totalPages
                            ? "bg-royal-maroon text-metallic-gold font-semibold"
                            : "bg-white text-charcoal hover:bg-gray-100"
                        } shadow-soft`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold"
                  } shadow-soft`}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* No Results Message */
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className="bg-royal-maroon hover:bg-royal-maroon-dark text-metallic-gold px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-center text-white">
          <h2 className="text-2xl font-bold mb-4 font-serif">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest stories, recipes, and exclusive offers from Tavisha Lounge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-metallic-gold text-charcoal"
            />
            <button className="bg-metallic-gold hover:bg-yellow-600 text-royal-maroon font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;