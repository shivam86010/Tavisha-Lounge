// src/components/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CalendarDays, Clock, User, Heart, Share2, Bookmark, 
  ArrowLeft, ChevronRight, MessageCircle, Facebook, 
  Twitter, Instagram, Linkedin, Mail, Printer,
  ThumbsUp, MessageSquare, BookOpen, Star, Award,
  ChefHat, Wine, Coffee, Sparkles
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(124);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Mock blog post data (in real app, fetch based on id)
  const post = {
    id: parseInt(id),
    title: "The Art of Fine Dining: A Tavisha Lounge Experience",
    subtitle: "Discover how our chefs combine tradition with innovation",
    content: `
      <p class="lead">At Tavisha Lounge, we believe fine dining is more than just exceptional food—it's a symphony of flavors, presentation, and atmosphere that creates unforgettable memories.</p>
      
      <h2>The Philosophy Behind Every Dish</h2>
      <p>Our culinary journey begins with a simple yet profound philosophy: every ingredient tells a story. From the aromatic spices sourced directly from local farmers to the premium imported ingredients, each component is carefully selected to create harmonious flavor profiles that dance on your palate.</p>
      
      <blockquote>
        "Cooking is an art, but fine dining is a performance. Every plate that leaves our kitchen is a masterpiece crafted with passion, precision, and purpose."
        <cite>— Chef Arjun Mehra, Executive Chef</cite>
      </blockquote>
      
      <h2>Traditional Techniques, Modern Innovation</h2>
      <p>While we honor traditional Indian cooking methods passed down through generations, we're not afraid to innovate. Our chefs constantly experiment with molecular gastronomy techniques, deconstruction of classic dishes, and unexpected flavor combinations that surprise and delight our guests.</p>
      
      <p>The result? Dishes that pay homage to royal heritage while pushing the boundaries of contemporary cuisine. Our signature dish, the Deconstructed Biryani, is a perfect example—traditional flavors presented in an entirely new way.</p>
      
      <h2>The Dining Experience</h2>
      <p>Fine dining at Tavisha Lounge extends beyond the plate. Our meticulously designed interior creates an ambiance of understated luxury, with warm lighting, elegant table settings, and subtle aromatic notes that prepare your senses for the culinary journey ahead.</p>
      
      <p>Our sommelier-curated wine list features over 200 labels from prestigious vineyards worldwide, each selected to complement our diverse menu. For those seeking something different, our mixologists have crafted signature cocktails that incorporate Indian spices and ingredients in unexpected ways.</p>
      
      <h2>Seasonal Menus, Timeless Quality</h2>
      <p>We believe in letting nature guide our menu. With each season, our chefs create new tasting menus that showcase the finest ingredients available. Spring brings delicate flavors and fresh produce, while winter calls for rich, warming spices and hearty preparations.</p>
      
      <p>This commitment to seasonality ensures that no two visits to Tavisha Lounge are ever the same, yet the quality remains consistently exceptional.</p>
      
      <h2>The Royal Treatment</h2>
      <p>Our name, Tavisha, draws inspiration from royal traditions, and we strive to treat every guest like royalty. From the moment you step through our doors, our attentive staff anticipates your needs, guiding you through your culinary journey with knowledge and grace.</p>
      
      <p>Private dining rooms are available for special occasions, each offering an intimate setting for celebrations, business dinners, or romantic evenings. Our dedicated events team ensures every detail is perfect.</p>
    `,
    author: {
      name: "Chef Arjun Mehra",
      role: "Executive Chef",
      avatar: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "With over 20 years of culinary experience across three continents, Chef Arjun brings a unique perspective to traditional Indian cuisine. Trained at Le Cordon Bleu and former head chef at Michelin-starred restaurants, he now leads the culinary vision at Tavisha Lounge.",
      specialties: ["Modern Indian Cuisine", "Molecular Gastronomy", "Wine Pairing"],
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Culinary Arts",
    tags: ["Fine Dining", "Indian Cuisine", "Chef's Special", "Luxury Dining"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
    ],
    likes: 124,
    shares: 45,
    comments: 18,
    featured: true,
    relatedPosts: [
      {
        id: 2,
        title: "The Perfect Wine Pairing for Royal Indian Cuisine",
        excerpt: "Explore our sommelier's guide to selecting wines that complement our signature dishes.",
        image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        date: "2024-03-10",
        readTime: "4 min read"
      },
      {
        id: 3,
        title: "Behind the Scenes: Crafting Our Royal Thali",
        excerpt: "A journey through the creation of our signature Royal Thali.",
        image: "https://images.unsplash.com/photo-1585937421612-70ca003675ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
        date: "2024-03-05",
        readTime: "6 min read"
      },
      {
        id: 4,
        title: "Sustainable Sourcing: Our Commitment to Quality",
        excerpt: "How we partner with local farmers for the freshest ingredients.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        date: "2024-02-28",
        readTime: "4 min read"
      }
    ]
  };

  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
    
    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('h2[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      email: `mailto:?subject=${title}&body=Check out this article: ${url}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
    setShowShareMenu(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Table of contents from headings
  const tableOfContents = [
    { id: 'philosophy', title: 'The Philosophy Behind Every Dish' },
    { id: 'techniques', title: 'Traditional Techniques, Modern Innovation' },
    { id: 'experience', title: 'The Dining Experience' },
    { id: 'seasonal', title: 'Seasonal Menus, Timeless Quality' },
    { id: 'royal', title: 'The Royal Treatment' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-cream via-white to-soft-cream/50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl"
            >
              {/* Back Button */}
              <button
                onClick={() => navigate('/blog')}
                className="group flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Blog</span>
              </button>

              {/* Category */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-metallic-gold text-royal-maroon px-4 py-1.5 rounded-full text-sm font-bold">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="flex items-center gap-1 text-metallic-gold">
                    <Star className="h-4 w-4 fill-metallic-gold" />
                    <span className="text-white text-sm">Featured Story</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif leading-tight">
                {post.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/80 mb-8 max-w-3xl">
                {post.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-metallic-gold">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{post.author.name}</div>
                    <div className="text-white/60 text-sm">{post.author.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/70">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-metallic-gold rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents - Sidebar (Sticky) */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-metallic-gold" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-royal-maroon text-metallic-gold font-medium'
                          : 'text-gray-600 hover:text-royal-maroon hover:bg-royal-maroon/5'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card */}
              <div className="bg-gradient-to-br from-royal-maroon to-royal-maroon-dark rounded-2xl p-6 text-white shadow-soft-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-metallic-gold">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{post.author.name}</h4>
                    <p className="text-metallic-gold text-sm">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">{post.author.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.author.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={post.author.social.twitter} className="text-white/60 hover:text-metallic-gold transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={post.author.social.instagram} className="text-white/60 hover:text-metallic-gold transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={post.author.social.linkedin} className="text-white/60 hover:text-metallic-gold transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                <h3 className="text-lg font-bold text-charcoal mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-soft-cream text-charcoal px-3 py-1.5 rounded-lg text-sm hover:bg-royal-maroon hover:text-metallic-gold transition-colors duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="lg:w-2/4">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              {/* Gallery Images */}
              <div className="grid grid-cols-3 gap-4 mb-8 not-prose">
                {post.images.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Content with HTML */}
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-content"
              />

              {/* Action Buttons */}
              <div className="not-prose flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      liked
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${liked ? 'fill-white' : ''}`} />
                    <span>{likesCount}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-royal-maroon hover:text-metallic-gold transition-all duration-300">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-royal-maroon hover:text-metallic-gold transition-all duration-300"
                    >
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>

                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl p-2 z-20 min-w-[200px]"
                      >
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Facebook className="h-4 w-4 text-blue-600" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Twitter className="h-4 w-4 text-sky-500" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-blue-700" />
                          <span>LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('email')}
                          className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Mail className="h-4 w-4 text-gray-600" />
                          <span>Email</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Printer className="h-4 w-4 text-gray-600" />
                          <span>Copy Link</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSaved(!saved)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    saved
                      ? 'bg-royal-maroon text-metallic-gold'
                      : 'bg-gray-100 text-gray-600 hover:bg-royal-maroon hover:text-metallic-gold'
                  }`}
                >
                  <Bookmark className={`h-5 w-5 ${saved ? 'fill-metallic-gold' : ''}`} />
                  <span>{saved ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </motion.article>
          </div>

          {/* Related Posts Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                <h3 className="text-lg font-bold text-charcoal mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-metallic-gold" />
                  You Might Also Like
                </h3>
                <div className="space-y-6">
                  {post.relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal group-hover:text-royal-maroon transition-colors duration-300 line-clamp-2 text-sm">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <CalendarDays className="h-3 w-3" />
                            <span>{formatDate(related.date)}</span>
                            <Clock className="h-3 w-3 ml-1" />
                            <span>{related.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-gradient-to-br from-metallic-gold to-yellow-600 rounded-2xl p-6 text-royal-maroon shadow-soft-lg">
                <h3 className="text-lg font-bold mb-2">Never Miss a Story</h3>
                <p className="text-sm mb-4 opacity-90">
                  Subscribe to get exclusive recipes and culinary insights
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-royal-maroon"
                />
                <button className="w-full bg-royal-maroon text-metallic-gold font-semibold py-2 rounded-lg hover:bg-royal-maroon-dark transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white py-16 mt-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-charcoal mb-8 font-serif flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-metallic-gold" />
            Comments ({post.comments})
          </h2>

          {/* Comment Form */}
          <div className="bg-soft-cream rounded-2xl p-6 mb-8">
            <textarea
              placeholder="Share your thoughts..."
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-royal-maroon mb-4"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300">
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {/* Sample Comment */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-royal-maroon/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-royal-maroon" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Rahul Sharma</div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                This was such an insightful read! I've dined at Tavisha Lounge multiple times, and this article perfectly captures the essence of the experience. The attention to detail is remarkable.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-500 hover:text-royal-maroon transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">12</span>
                </button>
                <button className="text-sm text-gray-500 hover:text-royal-maroon transition-colors">
                  Reply
                </button>
              </div>
            </div>

            {/* Another Comment */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-metallic-gold/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-metallic-gold" />
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Priya Kapoor</div>
                  <div className="text-xs text-gray-500">3 days ago</div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                Chef Arjun is truly a master of his craft. I attended his masterclass last month, and his passion for Indian cuisine is inspiring. Can't wait to try the new seasonal menu!
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-500 hover:text-royal-maroon transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-sm">8</span>
                </button>
                <button className="text-sm text-gray-500 hover:text-royal-maroon transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="text-royal-maroon hover:text-royal-maroon-dark font-semibold flex items-center gap-2 mx-auto">
              <span>Load More Comments</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-royal-maroon to-royal-maroon-dark py-20">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-metallic-gold"/>
          </svg>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-metallic-gold mb-4 font-serif">
              Join Our Culinary Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to receive exclusive recipes, behind-the-scenes stories, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              />
              <button className="bg-metallic-gold text-royal-maroon font-semibold px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for Blog Content */}
      <style jsx>{`
        .blog-content {
          @apply text-gray-700 leading-relaxed;
        }
        
        .blog-content h2 {
          @apply text-2xl md:text-3xl font-bold text-charcoal mt-12 mb-6 font-serif scroll-mt-32;
          id: attr(id);
        }
        
        .blog-content p {
          @apply mb-6;
        }
        
        .blog-content p.lead {
          @apply text-xl text-royal-maroon font-medium mb-8;
        }
        
        .blog-content blockquote {
          @apply relative my-8 py-6 px-8 bg-soft-cream rounded-2xl border-l-4 border-metallic-gold;
        }
        
        .blog-content blockquote p {
          @apply text-lg italic text-charcoal mb-4;
        }
        
        .blog-content blockquote cite {
          @apply text-sm text-gray-600 not-italic flex items-center gap-2;
        }
        
        .blog-content blockquote cite:before {
          content: '—';
          @apply text-metallic-gold;
        }
        
        .blog-content ul, .blog-content ol {
          @apply mb-6 pl-6;
        }
        
        .blog-content li {
          @apply mb-2;
        }
        
        .blog-content img {
          @apply rounded-2xl shadow-soft-lg my-8;
        }
        
        .blog-content a {
          @apply text-royal-maroon hover:text-royal-maroon-dark underline transition-colors;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;