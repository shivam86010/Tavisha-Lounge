import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiUsers, FiClock } from 'react-icons/fi';

const ChefShowcase = () => {
  const [activeChef, setActiveChef] = useState(0);

  const chefs = [
    {
      id: 1,
      name: "Master Chef Rajesh Mehta",
      specialty: "Royal Mughlai Cuisine",
      experience: "25+ years",
      awards: "15+ Culinary Awards",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      signatureDishes: ["Butter Chicken Royal", "Dum Biryani", "Rogan Josh"],
      description: "Trained in the royal kitchens of Rajasthan, Chef Rajesh brings authentic royal recipes with a modern touch.",
      stats: { recipes: 150, trainees: 45, rating: 4.9 }
    },
    {
      id: 2,
      name: "Chef Priya Sharma",
      specialty: "Modern Indian Fusion",
      experience: "15+ years",
      awards: "8 Innovation Awards",
      image: "https://images.unsplash.com/photo-1551836026-d5c8c2d86232?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      signatureDishes: ["Deconstructed Samosa", "Molecular Gulab Jamun", "Fusion Tacos"],
      description: "Blending traditional Indian flavors with contemporary techniques for a unique dining experience.",
      stats: { recipes: 89, trainees: 28, rating: 4.8 }
    },
    {
      id: 3,
      name: "Chef Arjun Kapoor",
      specialty: "Tandoor & Grill Master",
      experience: "20+ years",
      awards: "12 Excellence Awards",
      image: "https://images.unsplash.com/photo-1581299894007-9c115449a7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      signatureDishes: ["Tandoori Platter", "Seekh Kebabs", "Peshawari Tikka"],
      description: "Master of the traditional clay oven, creating smoky, flavorful dishes that tell stories of heritage.",
      stats: { recipes: 120, trainees: 35, rating: 4.9 }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-cream to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-metallic-gold rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-royal-maroon rounded-full opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our <span className="text-royal-maroon">Culinary</span> Artists
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-metallic-gold mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-charcoal max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover the masterminds behind our royal culinary creations, each bringing decades of expertise and passion to your plate.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chef Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                variants={itemVariants}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeChef === index
                    ? 'bg-royal-maroon text-soft-cream shadow-2xl scale-105'
                    : 'bg-white text-charcoal shadow-lg hover:shadow-xl hover:scale-102'
                }`}
                onClick={() => setActiveChef(index)}
                whileHover={{ 
                  scale: activeChef === index ? 1.05 : 1.02,
                  y: -5
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className={`w-16 h-16 rounded-full object-cover border-2 ${
                        activeChef === index ? 'border-metallic-gold' : 'border-royal-maroon'
                      }`}
                    />
                    {activeChef === index && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-metallic-gold rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiStar className="w-3 h-3 text-royal-maroon" />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{chef.name}</h3>
                    <p className={`text-sm ${
                      activeChef === index ? 'text-metallic-gold' : 'text-burnt-orange'
                    }`}>
                      {chef.specialty}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiAward className={`w-6 h-6 ${
                      activeChef === index ? 'text-metallic-gold' : 'text-royal-maroon'
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Chef Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChef}
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: -10 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={chefs[activeChef].image}
                  alt={chefs[activeChef].name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 text-soft-cream">
                  <h3 className="text-2xl font-bold">{chefs[activeChef].name}</h3>
                  <p className="text-metallic-gold">{chefs[activeChef].specialty}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-charcoal mb-6 leading-relaxed">
                  {chefs[activeChef].description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div
                    className="text-center p-3 bg-soft-cream rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiClock className="w-6 h-6 text-royal-maroon mx-auto mb-2" />
                    <div className="text-sm font-bold text-charcoal">{chefs[activeChef].experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-3 bg-soft-cream rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiUsers className="w-6 h-6 text-royal-maroon mx-auto mb-2" />
                    <div className="text-sm font-bold text-charcoal">{chefs[activeChef].stats.trainees}</div>
                    <div className="text-xs text-gray-600">Trainees</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-3 bg-soft-cream rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiStar className="w-6 h-6 text-royal-maroon mx-auto mb-2" />
                    <div className="text-sm font-bold text-charcoal">{chefs[activeChef].stats.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </motion.div>
                </div>

                <div>
                  <h4 className="font-bold text-charcoal mb-3">Signature Dishes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {chefs[activeChef].signatureDishes.map((dish, index) => (
                      <motion.span
                        key={dish}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="px-3 py-1 bg-royal-maroon text-metallic-gold rounded-full text-sm"
                      >
                        {dish}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ChefShowcase;