import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, Users, Briefcase,Sparkles,Calendar,ArrowRight } from 'lucide-react';
import { Circle } from "lucide-react";


const CelebrationSection = () => {
  const celebrations = [
    { 
      type: 'Birthday Dinners', 
      emoji: '🎂',
      icon: Cake,
      description: 'Make your special day unforgettable with personalized celebrations',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      type: 'Anniversary Surprises', 
      emoji: '💝',
      icon: Heart,
      description: 'Romantic settings for your love story milestones',
      color: 'from-red-500 to-pink-500'
    },
    { 
      type: 'Family Gatherings', 
      emoji: '👨‍👩‍👧‍👦',
      icon: Users,
      description: 'Spacious arrangements for cherished family moments',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      type: 'Corporate Lunches', 
      emoji: '💼',
      icon: Briefcase,
      description: 'Professional ambiance for business meetings and networking',
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon/5 via-metallic-gold/5 to-burnt-orange/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-metallic-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-burnt-orange/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl">
              <Sparkles className="w-8 h-8 text-metallic-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-royal-maroon">
              Celebrations & Events
            </h2>
          </motion.div>
          
          <p className="text-xl font-sans text-charcoal/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Planning something special? Let us help you create unforgettable moments 
            in our royal ambiance with personalized service.
          </p>
        </motion.div>

        {/* Celebration Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {celebrations.map((celebration, index) => {
            const Icon = celebration.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-soft-cream overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${celebration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold/20 to-burnt-orange/10 rounded-2xl flex items-center justify-center group-hover:from-metallic-gold/30 group-hover:to-burnt-orange/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-royal-maroon" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-royal-maroon mb-3">
                    {celebration.type}
                  </h3>
                  
                  <p className="font-sans text-charcoal/70 leading-relaxed mb-6">
                    {celebration.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    className="flex items-center gap-2 font-sans text-sm font-semibold text-royal-maroon opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Plan Celebration
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-royal-maroon/5 to-metallic-gold/5 border-l-4 border-metallic-gold p-8 rounded-r-2xl mb-8">
            <p className="text-2xl md:text-3xl font-serif text-royal-maroon italic mb-4">
              "Tell us your idea — we'll turn it into a royal moment."
            </p>
          </div>

          <motion.button
            className="group relative bg-gradient-to-r from-royal-maroon to-burnt-orange text-metallic-gold font-sans font-bold py-5 px-12 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Calendar className="w-6 h-6" />
              Book Your Celebration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-metallic-gold to-burnt-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  'linear-gradient(45deg, #D4AF37, #C55A11)',
                  'linear-gradient(45deg, #C55A11, #D4AF37)',
                  'linear-gradient(45deg, #D4AF37, #C55A11)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CelebrationSection;