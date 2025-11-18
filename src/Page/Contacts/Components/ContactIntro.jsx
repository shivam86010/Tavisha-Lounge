// ContactIntro.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, MessageCircle, Star } from 'lucide-react';

const ContactIntro = () => {
  const promises = [
    { 
      icon: Clock, 
      text: 'Quick responses',
      description: 'Typically within 2 hours during business hours'
    },
    { 
      icon: Heart, 
      text: 'Friendly staff',
      description: 'Warm, personalized service always'
    },
    { 
      icon: Star, 
      text: 'Personalized attention',
      description: 'Every guest treated like royalty'
    },
    { 
      icon: MessageCircle, 
      text: 'Hassle-free communication',
      description: 'Simple, clear, and effective'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-royal-maroon mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We'd Love to Hear From You
          </motion.h2>
          
          <motion.p 
            className="text-xl text-charcoal/80 font-sans leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Tavisha Lounge, every guest is family — and every message matters.
            Whether you're planning a celebration, booking a special table, giving feedback, 
            or simply saying hello, our team is here to assist you with warmth and care.
          </motion.p>

          {/* Our Promise Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-metallic-gold/20 to-burnt-orange/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="w-8 h-8 text-royal-maroon" />
                  </div>
                </div>
                
                <h3 className="font-serif text-xl text-royal-maroon mb-3">
                  {promise.text}
                </h3>
                
                <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="bg-gradient-to-r from-royal-maroon/5 to-metallic-gold/5 border-l-4 border-metallic-gold p-8 rounded-r-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-serif text-royal-maroon italic text-center">
              "Your experience matters. Your voice matters. You matter."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactIntro;