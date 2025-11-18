// LuxuryContactGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LuxuryContactGrid = () => {
  const contactItems = [
    {
      icon: MapPin,
      title: 'Visit Our Palace',
      description: 'Royal Heritage Road, City Center',
      subtitle: 'A modern royal dining space crafted for families, friends, and food lovers',
      color: 'from-royal-maroon to-burnt-orange',
      link: '#map'
    },
    {
      icon: Phone,
      title: 'Call Us Directly',
      description: '+91 9XXXX XXXXX',
      subtitle: 'Available: 10 AM – 11 PM (All Days)',
      color: 'from-metallic-gold to-burnt-orange',
      link: 'tel:+919XXXXXXXX'
    },
    {
      icon: Mail,
      title: 'Send an Email',
      description: 'hello@tavishalounge.com',
      subtitle: 'Our team responds within 24 hours',
      color: 'from-charcoal to-royal-maroon',
      link: 'mailto:hello@tavishalounge.com'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      description: 'Mon-Sun: 10AM - 11PM',
      subtitle: 'Weekends until midnight',
      color: 'from-burnt-orange to-metallic-gold',
      link: '#hours'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-soft-cream/50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-royal-maroon mb-4">
            Connect With Us
          </h2>
          <p className="text-xl font-sans text-charcoal/70 max-w-2xl mx-auto">
            Multiple ways to reach out, one standard of excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={itemVariants}
              className="group relative block"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-soft-cream overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-metallic-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center h-full flex flex-col">
                  {/* Icon with Animation */}
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-metallic-gold/20 to-burnt-orange/10 rounded-2xl flex items-center justify-center group-hover:from-metallic-gold/30 group-hover:to-burnt-orange/20 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-royal-maroon" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-royal-maroon mb-4 flex-grow-0">
                    {item.title}
                  </h3>
                  
                  <p className="text-lg font-sans font-semibold text-charcoal mb-2">
                    {item.description}
                  </p>
                  
                  <p className="text-sm font-sans text-charcoal/60 leading-relaxed mt-auto">
                    {item.subtitle}
                  </p>

                  {/* Hover Action Indicator */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-8 h-1 bg-metallic-gold rounded-full mx-auto" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryContactGrid;