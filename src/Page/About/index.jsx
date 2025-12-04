// src/components/AboutPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiAward, FiStar } from 'react-icons/fi';

const AboutPage = () => {
  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Authenticity",
      description: "Staying true to Indian roots, spices, and stories"
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Innovation",
      description: "Giving every dish a modern twist that excites the senses"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Heart",
      description: "Serving with warmth, sincerity, and joy"
    }
  ];

  const features = [
    {
      title: "Authentic Indian cuisine",
      description: "with a modern royal twist"
    },
    {
      title: "Elegant ambiance",
      description: "designed for families, couples, and friends"
    },
    {
      title: "Chef's special menus",
      description: "inspired by seasonal ingredients"
    },
    {
      title: "Personalized service",
      description: "with online ordering and reservations"
    },
    {
      title: "Friendly staff",
      description: "who treat you like family"
    }
  ];

  const teamMembers = [
    {
      name: "Chef Rajesh Mehta",
      role: "Executive Chef & Founder",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "With over 25 years of culinary experience, Chef Rajesh brings traditional royal recipes to life."
    },
    {
      name: "Priya Sharma",
      role: "Head of Hospitality",
      image: "https://images.unsplash.com/photo-1551836026-d5c8c2d86232?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ensuring every guest experiences the warmth and luxury of true Indian hospitality."
    },
    {
      name: "Shyam",
      role: "Master Mixologist",
      image: "https://images.unsplash.com/photo-1581299894007-9c115449a7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Creating innovative beverages that complement our royal dining experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
            About <span className="text-royal-maroon">Tavisha</span> Lounge
          </h1>
          <div className="w-24 h-1 bg-metallic-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-metallic-gold font-light mb-8 max-w-4xl mx-auto">
            Where Royal Taste Meets Modern Comfort
          </p>
          <p className="text-lg text-charcoal max-w-3xl mx-auto leading-relaxed">
            Welcome to Tavisha Lounge, a place where every meal tells a story — of heritage, heart, and harmony. 
            Inspired by India's royal traditions and blended with modern café culture, Tavisha Lounge is more than 
            just a restaurant — it's an experience of luxury wrapped in warmth.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tavisha Lounge Interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-metallic-gold rounded-2xl hidden lg:block"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our <span className="text-royal-maroon">Story</span>
            </h2>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>
                The word <strong>Tavisha</strong> means "splendid" and "radiant" — a name chosen to reflect 
                the soul of our restaurant. Born from a passion to reimagine Indian dining, Tavisha Lounge 
                began with a simple idea: to serve traditional Indian flavors with a modern, royal touch.
              </p>
              <p>
                What started as a dream among food lovers soon evolved into a space where families celebrate 
                together, friends gather to share stories, and every guest leaves with a smile.
              </p>
              <p>
                Our chefs craft each dish using fresh, locally sourced ingredients, balancing age-old recipes 
                with creative presentation. Every plate at Tavisha Lounge is a celebration of color, aroma, 
                and culture — just like India itself.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Culinary Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Culinary <span className="text-royal-maroon">Philosophy</span>
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              At Tavisha Lounge, cooking is not just a skill — it's an art form and an act of love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-royal-maroon text-metallic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-charcoal italic">
              "Whether it's a simple cup of chai or an elaborate royal thali, our goal is to make 
              every meal memorable and meaningful."
            </p>
          </motion.div>
        </motion.div>

        {/* Ambiance Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              The <span className="text-royal-maroon">Ambiance</span>
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Our interiors reflect the perfect balance between regal and relaxed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              "Deep maroon walls and gold detailing set a tone of elegance",
              "Soft cream lighting creates a cozy, intimate feel",
              "Handpicked décor connects heritage with sophistication"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-royal-maroon text-soft-cream p-6 rounded-2xl text-center"
              >
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Meet Our <span className="text-royal-maroon">Team</span>
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              The passionate individuals who bring the Tavisha Lounge experience to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-royal-maroon mb-2">{member.name}</h3>
                  <p className="text-metallic-gold font-semibold mb-3">{member.role}</p>
                  <p className="text-charcoal">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal text-soft-cream rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-metallic-gold mb-4">
              Why Choose <span className="text-burnt-orange">Tavisha Lounge</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <FiAward className="w-6 h-6 text-metallic-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-metallic-gold">{feature.title}</h3>
                  <p className="text-soft-cream">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 md:p-12 text-soft-cream">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-metallic-gold">Promise</span>
            </h2>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              We promise to serve not just food, but moments. Moments filled with laughter, 
              aroma, flavor, and connection.
            </p>
            <p className="text-lg md:text-xl font-semibold text-metallic-gold">
              At Tavisha Lounge, every guest is royalty — and every visit is a memory worth keeping.
            </p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-2xl font-bold text-metallic-gold">
                Come, dine like royalty, and feel like family. 🍽️
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;