// src/components/gallery/InteractiveTimeline.js
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InteractiveTimeline = () => {
  const [activeYear, setActiveYear] = useState(2020);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const timelineEvents = [
    {
      year: 2018,
      title: "The Beginning",
      description: "Tavisha Lounge opens its doors with a vision to redefine Indian fine dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      milestones: ["Grand Opening", "First 5-star review", "Signature menu launch"]
    },
    {
      year: 2019,
      title: "Culinary Recognition",
      description: "Awarded 'Best Indian Restaurant' in the city for innovative cuisine",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      milestones: ["City's Best Award", "Chef featured in magazine", "Menu expansion"]
    },
    {
      year: 2020,
      title: "Adapting with Grace",
      description: "Navigated challenges with innovative dining experiences and safety measures",
      image: "https://images.unsplash.com/photo-1544148103-0413e5d127d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      milestones: ["Outdoor dining setup", "Contactless service", "Community support"]
    },
    {
      year: 2021,
      title: "Royal Expansion",
      description: "Introduced the Royal Thali experience and expanded seating capacity",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      milestones: ["Royal Thali launch", "Private dining area", "Wine pairing menu"]
    },
    {
      year: 2022,
      title: "Cultural Hub",
      description: "Became a destination for cultural events and live music performances",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      milestones: ["Live music nights", "Cultural festivals", "Artist collaborations"]
    },
    {
      year: 2023,
      title: "Modern Legacy",
      description: "Continuing to innovate while honoring traditional culinary heritage",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1981&q=80",
      milestones: ["Sustainable initiatives", "Chef training program", "Global recognition"]
    }
  ];

  const activeEvent = timelineEvents.find(event => event.year === activeYear);

  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-br from-charcoal to-royal-maroon">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-metallic-gold mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-soft-cream max-w-2xl mx-auto">
            From humble beginnings to becoming a culinary landmark
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-metallic-gold bg-opacity-30"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center space-x-6 cursor-pointer group"
                  onClick={() => setActiveYear(event.year)}
                >
                  {/* Year Marker */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    activeYear === event.year
                      ? 'bg-metallic-gold text-royal-maroon scale-110 shadow-lg'
                      : 'bg-white bg-opacity-20 text-soft-cream group-hover:bg-opacity-30'
                  }`}>
                    {event.year}
                  </div>

                  {/* Event Preview */}
                  <motion.div
                    className={`flex-1 p-4 rounded-2xl transition-all duration-300 ${
                      activeYear === event.year
                        ? 'bg-metallic-gold bg-opacity-20 border-2 border-metallic-gold'
                        : 'bg-white bg-opacity-10 group-hover:bg-opacity-20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="font-semibold text-soft-cream mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{event.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active Event Display */}
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">
                  {activeEvent.title}
                </h3>
                <p className="text-metallic-gold font-semibold">{activeEvent.year}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-charcoal text-lg mb-6 leading-relaxed">
                {activeEvent.description}
              </p>

              {/* Milestones */}
              <div>
                <h4 className="font-semibold text-royal-maroon mb-3">Key Milestones:</h4>
                <ul className="space-y-2">
                  {activeEvent.milestones.map((milestone, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-charcoal"
                    >
                      <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
                      <span>{milestone}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>2018</span>
                  <span>2023</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-metallic-gold h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((activeEvent.year - 2018) / (2023 - 2018)) * 100}%` 
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-8 text-metallic-gold opacity-20 text-6xl"
        >
          ⏳
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;