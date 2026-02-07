import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays,CheckIcon , Bookmark, Clock, User, ChevronLeft, ChevronRight, Search, Tag, BookOpen, Star, Heart, Share2, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [savedPosts, setSavedPosts] = useState([]);
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
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true,
      likes: 124,
      shares: 45
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
      image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      featured: false,
      likes: 89,
      shares: 32
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
      image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      featured: true,
      likes: 156,
      shares: 67
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
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      likes: 78,
      shares: 28
    },

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedPosts, setLikedPosts] = useState([]);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Featured' ? post.featured : post.category === selectedCategory);
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

  // Handle like
  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Featured posts (for sidebar)
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream/50">
      {/* Hero Header */}

<div className="relative overflow-hidden bg-gradient-to-b from-white via-soft-cream to-white">
  {/* Background Elements */}
  <div className="absolute inset-0">
    {/* Decorative Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal-maroon rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-metallic-gold rounded-full blur-3xl"></div>
    </div>
    
    {/* Geometric Pattern */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-royal-maroon"/>
      </svg>
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-serif leading-tight">
          <span className="block text-charcoal">Taste the</span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-royal-maroon via-royal-maroon-dark to-royal-maroon bg-clip-text text-transparent">
              Extraordinary
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
          Where every dish tells a story, and every meal becomes a cherished memory. 
          Experience culinary artistry at its finest.
        </p>

       
       

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-metallic-gold font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-royal-maroon font-semibold px-8 py-4 rounded-xl border-2 border-royal-maroon/20 hover:border-royal-maroon hover:shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            <span>Book a Table</span>
            <CalendarDays className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Right Content - Image/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        {/* Main Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-royal-maroon via-metallic-gold to-royal-maroon p-1 rounded-3xl">
            <div className="w-full h-full bg-white rounded-3xl"></div>
          </div>
          
          {/* Image */}
          <div className="relative z-10 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Tavisha Lounge Interior"
              className="w-full h-[500px] object-cover rounded-3xl transform hover:scale-110 transition-transform duration-1000"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
          </div>

          {/* Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl w-64 z-20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-metallic-gold/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-metallic-gold" />
              </div>
              <div>
                <div className="font-bold text-charcoal">Michelin Star</div>
                <div className="text-sm text-gray-500">2024 Award</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Recognized for culinary excellence</div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -top-6 -right-6 bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-5 shadow-2xl w-56 z-20"
          >
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <CheckIcon className="h-4 w-4 text-metallic-gold" />
                <div className="font-bold">Chef's Special</div>
              </div>
              <div className="text-sm opacity-90">Seasonal Tasting Menu</div>
              <div className="text-xs opacity-70 mt-2">Available exclusively</div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-metallic-gold/5 to-transparent rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-royal-maroon/5 to-transparent rounded-full blur-2xl -z-10"></div>
      </motion.div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Posts */}
          <div className="lg:w-3/4">
          
            {/* Featured Post */}
            {(currentPage === 1) && (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-metallic-gold text-royal-marold px-4 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                      <span className="text-white/80">{filteredPosts[0].category}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-white/90 text-lg mb-6 max-w-3xl">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-metallic-gold rounded-full flex items-center justify-center text-royal-marold font-bold">
                            {filteredPosts[0].author.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{filteredPosts[0].author}</div>
                            <div className="text-white/70 text-sm">{formatDate(filteredPosts[0].date)}</div>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {filteredPosts[0].readTime}
                        </div>
                      </div>
                      <button className="group bg-metallic-gold text-royal-marold px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-600 transition-all duration-300">
                        Read Story
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPosts.slice(currentPage === 1 ? 1 : 0).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Save Button */}
                  <button
                    onClick={() => handleSave(post.id)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-md"
                  >
                    <Bookmark className={`h-5 w-5 ${savedPosts.includes(post.id) ? 'fill-royal-maroon text-royal-maroon' : 'text-gray-400'}`} />
                  </button>

                  {/* Post Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-metallic-gold to-yellow-600 text-royal-marold px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-royal-maroon bg-royal-maroon/10 px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-charcoal mb-3 font-serif group-hover:text-royal-maroon transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-royal-maroon/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-royal-maroon" />
                      </div>
                      <div>
                        <div className="font-semibold text-charcoal text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            likedPosts.includes(post.id)
                              ? 'text-red-500'
                              : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`h-5 w-5 ${likedPosts.includes(post.id) ? 'fill-red-500' : ''}`} />
                          <span className="text-sm font-medium">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                        </button>
                        
                        <button className="text-gray-400 hover:text-royal-maroon transition-colors duration-300">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Read More Button */}
                      <button className="group text-royal-maroon hover:text-royal-maroon-dark font-semibold text-sm flex items-center gap-2">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-gray-600">
                    Page <span className="font-bold text-royal-maroon">{currentPage}</span> of{" "}
                    <span className="font-bold text-royal-maroon">{totalPages}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        currentPage === 1
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                          : "bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold shadow-soft"
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl font-medium transition-all duration-300 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-royal-maroon to-royal-maroon-dark text-metallic-gold shadow-lg scale-110"
                            : "bg-white text-charcoal hover:bg-gray-50 shadow-soft"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        currentPage === totalPages
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                          : "bg-white text-charcoal hover:bg-royal-maroon hover:text-metallic-gold shadow-soft"
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 space-y-8">
              {/* Featured Stories */}
              <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="h-5 w-5 text-metallic-gold fill-metallic-gold" />
                  <h3 className="text-xl font-bold text-charcoal font-serif">Featured Stories</h3>
                </div>
                <div className="space-y-6">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal group-hover:text-royal-maroon transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="text-sm text-gray-500 mt-1">
                            {formatDate(post.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-6 text-white shadow-soft-lg">
                <div className="w-12 h-12 bg-metallic-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-metallic-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Join Our Culinary Journey</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Subscribe to receive exclusive recipes, stories, and special offers
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-metallic-gold"
                  />
                  <button className="w-full bg-metallic-gold text-royal-marold font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
<div className="relative overflow-hidden bg-gradient-to-b from-white via-soft-cream/30 to-soft-cream/50 py-24">

 
 

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Heading & Description */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-left"
      >
       
       

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 font-serif leading-tight">
          <span className="block">Experience the</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-maroon via-royal-maroon-dark to-metallic-gold">
            Art of Dining
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
          At Tavisha Lounge, every meal is a masterpiece. Our chefs craft unforgettable experiences 
          using the finest ingredients, traditional techniques.
        </p>

      </motion.div>

      {/* Right Side - Information Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-white via-white to-soft-cream rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:shadow-3xl transition-all duration-500">
          {/* Card Decorative Header */}
          <div className="relative h-3 bg-gradient-to-r from-royal-maroon via-metallic-gold to-royal-maroon"></div>
          
          <div className="p-8">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-maroon/10 to-metallic-gold/10 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-metallic-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal font-serif">Premium Reservation</h3>
                <p className="text-gray-500">Guaranteed seating experience</p>
              </div>
            </div>

            {/* Booking Information */}
            <div className="space-y-6 mb-8">
              
              

   
   

              <div className="p-4 bg-gradient-to-br from-soft-cream to-white rounded-xl border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Special Offer</div>
                    <div className="font-bold text-royal-maroon">Complimentary Dessert</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-metallic-gold/20 to-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-metallic-gold" />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">For reservations made 48+ hours in advance</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group w-full bg-gradient-to-r from-royal-maroon via-royal-maroon-dark to-royal-maroon text-metallic-gold font-bold text-lg py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <span>Reserve Your Royal Experience</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Additional Note */}
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>Reservation confirmation within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-metallic-gold/5 to-transparent rounded-full blur-2xl -z-10"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tl from-royal-maroon/5 to-transparent rounded-full blur-2xl -z-10"></div>
      </motion.div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BlogPage;

