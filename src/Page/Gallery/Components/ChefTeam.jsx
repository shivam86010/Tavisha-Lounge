// ChefTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ChefTeam = ({ onImageClick }) => {
  const teamMembers = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      name: "Chef Rajesh Kumar",
      role: "Executive Chef",
      caption: "Our Heart Behind Every Plate."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      name: "Chef Priya Sharma",
      role: "Sous Chef",
      caption: "Crafting Culinary Stories, One Dish at a Time."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      name: "Team Collaboration",
      role: "Kitchen Team",
      caption: "Together We Create Magic"
    }
  ];

  return (
    <section className="py-16">
      <motion.h2 
        className="text-4xl font-serif text-center mb-12 text-royal-maroon"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Chef & Team Moments
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl cursor-pointer group mb-4"
              onClick={() => onImageClick(member)}
            >
              <img 
                src={member.src} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-metallic-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-serif text-royal-maroon font-bold">
              {member.name}
            </h3>
            <p className="text-charcoal font-sans mb-2">{member.role}</p>
            <p className="text-burnt-orange font-sans italic">{member.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChefTeam;