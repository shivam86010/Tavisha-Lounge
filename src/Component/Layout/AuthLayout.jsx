import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Branding */}
        <div className="lg:w-1/2 relative flex flex-col justify-center p-8 lg:p-12">
          <Link to="/" className="absolute top-8 left-8 flex items-center space-x-2 group">
            <Crown className="w-8 h-8 text-metallic-gold group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-serif font-bold text-soft-cream">Tavisha Lounge</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-soft-cream mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Welcome to <span className="text-metallic-gold">Royalty</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-soft-cream/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Experience culinary excellence in an atmosphere of regal elegance.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                "Exclusive fine dining experience",
                "Personalized service and attention",
                "Seasonal menu crafted by master chefs",
                "Royal heritage ambiance"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-metallic-gold rounded-full"></div>
                  <span className="text-soft-cream/70">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-8 text-soft-cream/30 text-sm">
            © {new Date().getFullYear()} Tavisha Lounge
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 bg-soft-cream/5 backdrop-blur-xl border-l border-metallic-gold/20 flex flex-col justify-center p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Decorative Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic-gold/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic-gold/50 to-transparent"></div>

          {/* Form Container */}
          <div className="max-w-md mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-metallic-gold to-burnt-orange mb-4 shadow-lg">
                <Crown className="w-8 h-8 text-charcoal" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-soft-cream mb-2">
                {title}
              </h2>
              <p className="text-soft-cream/70">{subtitle}</p>
            </motion.div>

            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;