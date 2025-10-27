// src/components/OurStory.js
import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#7A1E1E 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tavisha Lounge Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-metallic-gold rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              The <span className="text-royal-maroon">Tavisha</span> Legacy
            </h2>
            <div className="w-24 h-1 bg-metallic-gold mb-8"></div>
            
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Founded in 1998, Tavisha Lounge emerged from a vision to create a dining experience 
              that transcends mere cuisine. Our founder, Rajesh Mehta, envisioned a space where 
              every meal tells a story of royal heritage and culinary artistry.
            </p>
            
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Drawing inspiration from the royal kitchens of Rajasthan and Mughal traditions, 
              we've curated a menu that honors ancient recipes while embracing contemporary 
              culinary techniques. Each dish is a masterpiece, crafted with the finest ingredients 
              and served with the warmth of Indian hospitality.
            </p>
            
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              Today, Tavisha Lounge stands as a testament to our commitment to excellence, 
              where every guest is treated like royalty and every meal becomes a cherished memory.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-soft-cream p-4 rounded-lg">
                <div className="text-2xl font-bold text-royal-maroon">25+</div>
                <div className="text-sm text-charcoal">Years of Excellence</div>
              </div>
              <div className="bg-soft-cream p-4 rounded-lg">
                <div className="text-2xl font-bold text-royal-maroon">50+</div>
                <div className="text-sm text-charcoal">Signature Dishes</div>
              </div>
              <div className="bg-soft-cream p-4 rounded-lg">
                <div className="text-2xl font-bold text-royal-maroon">10k+</div>
                <div className="text-sm text-charcoal">Happy Guests</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;