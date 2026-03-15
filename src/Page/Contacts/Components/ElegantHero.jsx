// ElegantHero.jsx
import React from 'react';
import { Crown, MapPin, Phone, Mail } from 'lucide-react';

const ElegantHero = ({ onReservationClick }) => {
  const quickContacts = [
    { icon: MapPin, text: 'Royal Heritage Road', subtext: 'City Center' },
    { icon: Phone, text: '+91 9XXXX XXXXX', subtext: '10 AM - 11 PM' },
    { icon: Mail, text: 'hello@tavishalounge.com', subtext: 'Quick Response' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon/85 via-royal-maroon/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />
        
        {/* Animated Gold Accents - Keep the CSS animations as they're not from framer-motion */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-metallic-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Crown Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-metallic-gold/20 rounded-full backdrop-blur-sm">
            <Crown className="w-12 h-12 text-metallic-gold" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-soft-cream mb-6 leading-tight">
          Get in Touch
        </h1>
        
        <div className="text-xl md:text-3xl font-serif text-metallic-gold mb-8 italic">
          with Tavisha Lounge
        </div>

        <p className="text-lg md:text-xl font-sans text-soft-cream/90 max-w-3xl mx-auto leading-relaxed mb-12">
          Where conversations begin and connections grow in an atmosphere of royal elegance
        </p>

        {/* Quick Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {quickContacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-soft-cream/80 group"
            >
              <contact.icon className="w-5 h-5 text-metallic-gold group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="font-sans font-semibold text-sm">{contact.text}</div>
                <div className="font-sans text-xs opacity-70">{contact.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onReservationClick}
            className="group relative bg-transparent border-2 border-metallic-gold text-metallic-gold font-sans font-semibold py-4 px-8 rounded-full hover:bg-metallic-gold hover:text-royal-maroon transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Reserve Your Experience
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-metallic-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElegantHero;