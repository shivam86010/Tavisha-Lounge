// src/components/FAQ.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiMessageSquare, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    {
      id: 'general',
      name: 'General',
      icon: FiHelpCircle,
      color: 'from-royal-maroon to-purple-600'
    },
    {
      id: 'reservations',
      name: 'Reservations',
      icon: FiMessageSquare,
      color: 'from-burnt-orange to-red-500'
    },
    {
      id: 'dining',
      name: 'Dining Experience',
      icon: FiUsers,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'timing',
      name: 'Hours & Timing',
      icon: FiClock,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'pricing',
      name: 'Pricing & Payments',
      icon: FiDollarSign,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const faqData = {
    general: [
      {
        id: 'gen-1',
        question: 'What does "Tavisha" mean and why was it chosen?',
        answer: 'Tavisha means "splendid" and "radiant" in Sanskrit. We chose this name to reflect our vision of creating a dining experience that is both magnificent and warm, combining royal heritage with modern comfort.'
      },
      {
        id: 'gen-2',
        question: 'Do you offer vegetarian and vegan options?',
        answer: 'Yes, we have an extensive vegetarian menu with many vegan-friendly options. Our chefs specialize in creating plant-based versions of traditional royal dishes. Please inform us of any dietary restrictions when making your reservation.'
      },
      {
        id: 'gen-3',
        question: 'Is there a dress code at Tavisha Lounge?',
        answer: 'We maintain a smart casual dress code to enhance the royal dining experience. While we don\'t require formal attire, we appreciate guests dressing elegantly to match our ambiance. Sportswear and beachwear are not permitted.'
      },
      {
        id: 'gen-4',
        question: 'Do you host private events and celebrations?',
        answer: 'Absolutely! We specialize in hosting private events including weddings, corporate dinners, and special celebrations. Our private dining rooms can accommodate 10-50 guests with customized menus and dedicated service.'
      }
    ],
    reservations: [
      {
        id: 'res-1',
        question: 'How far in advance should I make a reservation?',
        answer: 'We recommend booking at least 3-5 days in advance for weekday dinners and 1-2 weeks for weekends and special occasions. For large groups (8+ people) or special events, we suggest reserving 2-3 weeks ahead.'
      },
      {
        id: 'res-2',
        question: 'What is your cancellation policy?',
        answer: 'You can cancel or modify your reservation free of charge up to 4 hours before your booking time. For large groups (8+ people) and special events, we require 24 hours notice for cancellations. Late cancellations may incur a fee.'
      },
      {
        id: 'res-3',
        question: 'Can I request a specific table or area?',
        answer: 'Yes, you can request specific seating preferences including window tables, private booths, or garden views when making your reservation. While we try our best to accommodate all requests, they are subject to availability.'
      },
      {
        id: 'res-4',
        question: 'Do you take walk-in customers?',
        answer: 'We do welcome walk-in customers based on availability. However, due to our popularity, we strongly recommend making reservations to avoid disappointment, especially during peak hours and weekends.'
      }
    ],
    dining: [
      {
        id: 'din-1',
        question: 'What makes Tavisha Lounge different from other Indian restaurants?',
        answer: 'We combine authentic royal recipes with modern culinary techniques in an ambiance that blends traditional elegance with contemporary comfort. Our focus is on creating memorable experiences through personalized service, exquisite presentation, and flavors that tell stories of Indian heritage.'
      },
      {
        id: 'din-2',
        question: 'Do you offer chef\'s tasting menus?',
        answer: 'Yes, we offer exclusive chef\'s tasting menus that showcase the best of our culinary artistry. These multi-course experiences are curated based on seasonal ingredients and can be customized to dietary preferences with advance notice.'
      },
      {
        id: 'din-3',
        question: 'Can you accommodate food allergies and dietary restrictions?',
        answer: 'Absolutely. Our kitchen is well-equipped to handle various dietary needs including gluten-free, nut-free, dairy-free, and other allergies. Please inform us of any restrictions when booking, and our chefs will create safe, delicious alternatives.'
      },
      {
        id: 'din-4',
        question: 'What is the Royal Thali experience?',
        answer: 'The Royal Thali is our signature dining experience featuring 12 carefully curated dishes that represent different regions of India. It includes appetizers, main courses, breads, rice, accompaniments, and desserts - a complete journey through Indian royal cuisine.'
      }
    ],
    timing: [
      {
        id: 'time-1',
        question: 'What are your operating hours?',
        answer: 'We are open Monday through Thursday from 11:00 AM to 10:00 PM, Friday and Saturday from 11:00 AM to 11:00 PM, and Sunday from 11:00 AM to 9:00 PM. Special holiday hours may apply.'
      },
      {
        id: 'time-2',
        question: 'When is the best time to visit to avoid crowds?',
        answer: 'For a more intimate experience, we recommend visiting during weekday lunches (11:00 AM - 2:00 PM) or early dinners (5:00 PM - 7:00 PM). Evenings from 7:30 PM onwards and weekends tend to be our busiest times.'
      },
      {
        id: 'time-3',
        question: 'How long does a typical dining experience last?',
        answer: 'A typical meal at Tavisha Lounge lasts about 1.5 to 2 hours. For the Royal Thali experience or multi-course tasting menus, we recommend allowing 2.5 to 3 hours to fully enjoy the culinary journey.'
      },
      {
        id: 'time-4',
        question: 'Do you offer late-night dining?',
        answer: 'We serve until 11:00 PM on Fridays and Saturdays. Our last reservation is typically taken at 9:30 PM to ensure you have ample time to enjoy your meal without feeling rushed.'
      }
    ],
    pricing: [
      {
        id: 'price-1',
        question: 'What is the average cost per person?',
        answer: 'The average cost for a meal at Tavisha Lounge is approximately $35-$50 per person without beverages. The Royal Thali experience is $75 per person. We offer options across different price points to suit various budgets.'
      },
      {
        id: 'price-2',
        question: 'Do you offer any discounts or loyalty programs?',
        answer: 'Yes, we have a loyalty program where frequent diners earn points redeemable for discounts and special experiences. We also offer seasonal promotions, early bird discounts, and special rates for large groups.'
      },
      {
        id: 'price-3',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, digital wallets (Apple Pay, Google Pay), and cash. Corporate accounts and bulk bookings can be arranged with advance notice.'
      },
      {
        id: 'price-4',
        question: 'Is there a service charge or gratuity included?',
        answer: 'A 10% service charge is added to all bills, which is distributed among our service staff. Additional gratuity is at your discretion based on the quality of service received.'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-soft-cream to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 bg-metallic-gold rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-6 h-6 bg-royal-maroon rounded-full opacity-15"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-10 h-10 bg-burnt-orange rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
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
            Frequently Asked <span className="text-royal-maroon">Questions</span>
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
            Find answers to common questions about your dining experience at Tavisha Lounge. 
            Can't find what you're looking for? Contact us directly.
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                  : 'bg-white text-charcoal shadow-lg hover:shadow-xl'
              }`}
              whileHover={{ 
                scale: activeCategory === category.id ? 1.05 : 1.02,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {faqData[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
              >
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                  whileHover={{ backgroundColor: "rgba(122, 30, 30, 0.02)" }}
                >
                  <h3 className="text-lg font-semibold text-charcoal pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    variants={iconVariants}
                    animate={openItems[item.id] ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FiChevronDown className="w-5 h-5 text-royal-maroon" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openItems[item.id] && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-12 h-1 bg-metallic-gold mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange rounded-2xl p-8 text-soft-cream">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our team is here to help you with any additional questions or special requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919876543210"
                className="bg-metallic-gold text-royal-maroon px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
              </motion.a>
              <motion.a
                href="mailto:info@tavishalounge.com"
                className="border-2 border-metallic-gold text-metallic-gold px-6 py-3 rounded-lg font-bold hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
              <motion.a
                href="#reservations"
                className="bg-charcoal text-soft-cream px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Make Reservation
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: '24/7', label: 'Support Available' },
            { number: '15min', label: 'Avg Response Time' },
            { number: '5000+', label: 'Questions Answered' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 bg-white rounded-2xl shadow-lg"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-royal-maroon mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;