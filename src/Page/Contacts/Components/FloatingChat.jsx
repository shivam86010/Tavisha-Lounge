import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  MessageSquare,
  Clock,
  Send
} from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('quick');

  const quickOptions = [
    {
      icon: Phone,
      platform: 'Call Us',
      description: 'Speak directly with our team',
      action: 'tel:+919XXXXXXXX',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      platform: 'WhatsApp',
      description: 'Instant messaging',
      action: 'https://wa.me/919XXXXXXXX',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Mail,
      platform: 'Email',
      description: 'Send us a detailed message',
      action: 'mailto:hello@tavishalounge.com',
      color: 'from-royal-maroon to-burnt-orange'
    }
  ];

  const messageTemplates = [
    "I'd like to make a reservation",
    "Do you have vegan options?",
    "What are your specials today?",
    "I have a special dietary requirement"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-royal-maroon to-burnt-orange text-metallic-gold rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 10px 25px rgba(122, 30, 30, 0.3)',
            '0 15px 35px rgba(122, 30, 30, 0.4)',
            '0 10px 25px rgba(122, 30, 30, 0.3)'
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        
        {/* Notification Dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-metallic-gold rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-royal-maroon to-burnt-orange p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-metallic-gold/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-metallic-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-metallic-gold font-semibold">
                        Quick Connect
                      </h3>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <p className="text-metallic-gold/80 text-xs font-sans">
                          Online now
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-metallic-gold hover:text-soft-cream transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-soft-cream">
                <button
                  onClick={() => setActiveTab('quick')}
                  className={`flex-1 py-3 font-sans text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'quick'
                      ? 'text-royal-maroon border-b-2 border-royal-maroon'
                      : 'text-charcoal/60 hover:text-royal-maroon'
                  }`}
                >
                  Quick Connect
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-3 font-sans text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'message'
                      ? 'text-royal-maroon border-b-2 border-royal-maroon'
                      : 'text-charcoal/60 hover:text-royal-maroon'
                  }`}
                >
                  Send Message
                </button>
              </div>

              {/* Content */}
              <div className="p-4 max-h-80 overflow-y-auto">
                {activeTab === 'quick' && (
                  <div className="space-y-3">
                    {quickOptions.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <motion.a
                          key={index}
                          href={option.action}
                          className="flex items-center gap-4 p-3 border border-soft-cream rounded-xl hover:border-royal-maroon hover:bg-royal-maroon/5 transition-all duration-300 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-sans font-semibold text-charcoal group-hover:text-royal-maroon">
                              {option.platform}
                            </div>
                            <div className="font-sans text-charcoal/60 text-sm">
                              {option.description}
                            </div>
                          </div>
                          <div className="text-charcoal/40 group-hover:text-royal-maroon transition-colors">
                            →
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                )}

                {activeTab === 'message' && (
                  <div className="space-y-4">
                    {/* Quick Templates */}
                    <div>
                      <p className="font-sans text-charcoal/60 text-sm mb-3">
                        Quick messages:
                      </p>
                      <div className="space-y-2">
                        {messageTemplates.map((template, index) => (
                          <motion.button
                            key={index}
                            className="w-full text-left p-3 border border-soft-cream rounded-xl hover:border-metallic-gold hover:bg-metallic-gold/5 transition-all duration-300 font-sans text-sm text-charcoal"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            "{template}"
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Message */}
                    <div className="pt-4 border-t border-soft-cream">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 px-3 py-2 border border-soft-cream rounded-xl focus:outline-none focus:border-metallic-gold font-sans text-sm"
                        />
                        <motion.button
                          className="bg-royal-maroon text-metallic-gold p-2 rounded-xl hover:bg-burnt-orange transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-soft-cream border-t border-soft-cream">
                <div className="flex items-center gap-2 text-charcoal/60">
                  <Clock className="w-4 h-4" />
                  <span className="font-sans text-xs">
                    Typically replies in 15 minutes
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;