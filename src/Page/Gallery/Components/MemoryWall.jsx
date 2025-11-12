// MemoryWall.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MemoryWall = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - In production, you'd use Instagram Graph API
  const mockInstagramData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Celebrating my birthday at Tavisha Lounge! Amazing food and ambiance! 🎉 #TavishaLounge #BirthdayCelebration",
      username: "priya_sharma",
      timestamp: "2 hours ago",
      likes: 124,
      comments: 23,
      userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      caption: "Romantic dinner date at the most beautiful restaurant! ❤️ #TavishaLounge #DateNight #RomanticDinner",
      username: "rahul_verma",
      timestamp: "1 day ago",
      likes: 89,
      comments: 15,
      userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Family dinner done right! Kids loved it, parents loved it even more! 👨‍👩‍👧‍👦 #TavishaLounge #FamilyTime #Foodie",
      username: "anita_patel",
      timestamp: "2 days ago",
      likes: 156,
      comments: 34,
      userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      caption: "The Shahi Paneer here is absolutely divine! 🤤 #TavishaLounge #FoodPhotography #IndianCuisine",
      username: "foodie_delhi",
      timestamp: "3 days ago",
      likes: 267,
      comments: 42,
      userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "The attention to detail in every aspect is phenomenal! ✨ #TavishaLounge #FineDining #LuxuryExperience",
      username: "luxury_living",
      timestamp: "4 days ago",
      likes: 189,
      comments: 28,
      userImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      caption: "Perfect spot for business dinners. Professional yet warm ambiance! 💼 #TavishaLounge #BusinessDinner #Networking",
      username: "corporate_champ",
      timestamp: "5 days ago",
      likes: 76,
      comments: 12,
      userImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchInstagramPosts = async () => {
      setLoading(true);
      try {
        // In real implementation, you would use:
        // const response = await fetch(`/api/instagram-posts`);
        // const data = await response.json();
        
        // Using mock data for demonstration
        setTimeout(() => {
          setInstagramPosts(mockInstagramData);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setInstagramPosts(mockInstagramData); // Fallback to mock data
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-soft-cream/50 rounded-3xl my-8">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-serif text-center mb-12 text-royal-maroon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Live Guest Moments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-soft-cream rounded-2xl shadow-lg p-4 animate-pulse"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
              >
                <div className="bg-charcoal/20 h-64 rounded-lg mb-4"></div>
                <div className="bg-charcoal/20 h-4 rounded w-3/4 mb-2"></div>
                <div className="bg-charcoal/20 h-4 rounded w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-soft-cream/50 rounded-3xl my-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif text-royal-maroon mb-4">
            Live Guest Moments
          </h2>
          <p className="text-xl text-charcoal font-sans max-w-2xl mx-auto mb-6">
            Real experiences shared by our guests. Join the conversation using 
            <span className="text-royal-maroon font-bold"> #TavishaLounge</span>
          </p>
          <motion.a
            href="https://instagram.com/your-restaurant-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-maroon to-burnt-orange text-soft-cream font-sans font-bold rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📸</span>
            Follow us on Instagram
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3 border-b border-soft-cream">
                <img
                  src={post.userImage}
                  alt={post.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-sans font-semibold text-charcoal">
                    {post.username}
                  </p>
                  <p className="text-sm text-charcoal/60">{post.timestamp}</p>
                </div>
                <button className="text-charcoal/60 hover:text-royal-maroon transition-colors">
                  ⋮
                </button>
              </div>

              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex gap-4 mb-3">
                  <button className="flex items-center gap-1 text-charcoal/70 hover:text-royal-maroon transition-colors">
                    <span className="text-xl">❤️</span>
                    <span className="font-sans text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-charcoal/70 hover:text-royal-maroon transition-colors">
                    <span className="text-xl">💬</span>
                    <span className="font-sans text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-charcoal/70 hover:text-royal-maroon transition-colors">
                    <span className="text-xl">📤</span>
                  </button>
                  <button className="ml-auto text-charcoal/70 hover:text-royal-maroon transition-colors">
                    <span className="text-xl">📌</span>
                  </button>
                </div>

                {/* Caption */}
                <div className="mb-3">
                  <p className="font-sans text-charcoal line-clamp-2">
                    <span className="font-semibold mr-2">{post.username}</span>
                    {post.caption}
                  </p>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1">
                  {post.caption.match(/#\w+/g)?.map((hashtag, idx) => (
                    <span
                      key={idx}
                      className="text-royal-maroon font-sans text-sm hover:underline cursor-pointer"
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="mt-3 pt-3 border-t border-soft-cream">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 font-sans text-sm bg-transparent border-none outline-none placeholder-charcoal/40"
                    />
                    <button className="text-royal-maroon font-sans font-semibold text-sm hover:text-burnt-orange transition-colors">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time Updates Indicator */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-metallic-gold/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-sans text-sm text-charcoal">
              Live updates from #TavishaLounge
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryWall;