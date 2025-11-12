// src/components/gallery/AwardsRecognition.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiCalendar } from 'react-icons/fi';
import { FaTrophy } from "react-icons/fa";


const AwardsRecognition = () => {
  const [activeYear, setActiveYear] = useState('2023');

  const awardsByYear = {
    '2023': [
      {
        id: 1,
        title: "Best Fine Dining Restaurant",
        organization: "India Hospitality Awards",
        category: "Excellence in Dining",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Recognized for exceptional service and culinary innovation",
        significance: "Highest honor in Indian restaurant industry"
      },
      {
        id: 2,
        title: "Sustainable Restaurant Award",
        organization: "Green Eats Foundation",
        category: "Environmental Responsibility",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "For implementing eco-friendly practices and local sourcing",
        significance: "Leading the way in sustainable dining"
      }
    ],
    '2022': [
      {
        id: 3,
        title: "Chef of the Year",
        organization: "Culinary Arts Association",
        category: "Individual Excellence",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        description: "Executive Chef Rajesh Kumar for innovative Indian cuisine",
        significance: "National recognition for culinary expertise"
      },
      {
        id: 4,
        title: "Wine & Dine Excellence",
        organization: "International Wine Society",
        category: "Beverage Program",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        description: "Outstanding wine pairing with Indian cuisine",
        significance: "First Indian restaurant to receive this honor"
      }
    ],
    '2021': [
      {
        id: 5,
        title: "Best Restaurant Design",
        organization: "Design & Architecture Awards",
        category: "Interior Design",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "For blending traditional Indian elements with modern design",
        significance: "International recognition for aesthetic excellence"
      }
    ]
  };

  const allAwards = Object.values(awardsByYear).flat();

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-royal-maroon">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FaTrophy className="w-8 h-8 text-metallic-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold">
              Awards & Recognition
            </h2>
          </div>
          <p className="text-xl text-soft-cream max-w-2xl mx-auto">
            Celebrating excellence and innovation in Indian fine dining
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {Object.keys(awardsByYear).map((year) => (
            <motion.button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeYear === year
                  ? 'bg-metallic-gold text-royal-maroon shadow-lg'
                  : 'bg-white bg-opacity-20 text-soft-cream hover:bg-opacity-30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCalendar className="w-4 h-4" />
              <span>{year}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Awards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <AnimatePresence mode="wait">
            {awardsByYear[activeYear].map((award, index) => (
              <motion.div
                key={award.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
              >
                {/* Award Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-metallic-gold rounded-full flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-royal-maroon" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-royal-maroon text-metallic-gold px-3 py-1 rounded-full text-sm font-semibold">
                    {activeYear}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-royal-maroon mb-2">
                    {award.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-charcoal">
                      <FiStar className="w-4 h-4 text-burnt-orange" />
                      <span className="font-semibold">{award.organization}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Category: {award.category}
                    </div>
                  </div>

                  <p className="text-charcoal mb-4 leading-relaxed">
                    {award.description}
                  </p>

                  <div className="bg-soft-cream rounded-lg p-3 border-l-4 border-metallic-gold">
                    <p className="text-sm text-charcoal">
                      <span className="font-semibold">Significance:</span> {award.significance}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-metallic-gold to-burnt-orange rounded-3xl p-8 text-royal-maroon"
        >
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            Our Journey in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{allAwards.length}+</div>
              <div className="text-sm">Awards & Recognitions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">International Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Press Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-metallic-gold mb-6">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {['Forbes', 'Times Food', 'Conde Nast', 'Food & Wine', 'BBC Good Food'].map((publication, index) => (
              <motion.div
                key={publication}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-soft-cream font-semibold text-lg"
              >
                {publication}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsRecognition;