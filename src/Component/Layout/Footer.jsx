// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiMail, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram,
  FiArrowUp
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'About Us', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reservations', href: '#reservations' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { icon: <FiMapPin />, text: '123 Royal Street, Mumbai, India' },
        { icon: <FiPhone />, text: '+91 98765 43210' },
        { icon: <FiMail />, text: 'info@tavishalounge.com' },
        { icon: <FiClock />, text: 'Mon-Sun: 11:00 AM - 11:00 PM' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', name: 'Facebook' },
    { icon: <FiTwitter />, href: '#', name: 'Twitter' },
    { icon: <FiInstagram />, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-charcoal text-soft-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold font-serif text-metallic-gold mb-4">
              Tavisha <span className="text-burnt-orange">Lounge</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience royal dining with authentic flavors crafted for royalty. 
              Where every meal tells a story of heritage and culinary excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-royal-maroon rounded-full flex items-center justify-center text-metallic-gold hover:bg-burnt-orange transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-metallic-gold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.2) + (linkIndex * 0.1) }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-metallic-gold transition-colors duration-300"
                    >
                      {link.icon && <span className="text-burnt-orange">{link.icon}</span>}
                      <span>{link.text || link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-metallic-gold mb-6">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on special events and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-700 rounded-lg text-soft-cream placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              />
              <motion.button
                className="bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Tavisha Lounge. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-metallic-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-metallic-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-metallic-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-royal-maroon text-metallic-gold rounded-full shadow-lg flex items-center justify-center z-40"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;