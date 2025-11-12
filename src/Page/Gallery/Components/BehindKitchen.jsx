// BehindKitchen.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BehindKitchen = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const kitchenImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      caption: "Chef's morning prep - fresh ingredients ready for the day"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      caption: "The heart of our kitchen - where magic happens"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      caption: "Team huddle before service begins"
    }
  ];

  return (
    <>
      {/* Easter Egg Trigger */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <button
          onClick={() => setIsRevealed(true)}
          className="p-4 bg-royal-maroon text-metallic-gold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">
            🍳
          </span>
        </button>
      </motion.div>

      {/* Hidden Section Modal */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsRevealed(false)}
          >
            <motion.div
              className="relative bg-soft-cream rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-royal-maroon text-metallic-gold p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-serif font-bold">
                      Behind the Kitchen Door
                    </h2>
                    <p className="font-sans opacity-90">
                      Exclusive peek into our culinary sanctuary
                    </p>
                  </div>
                  <button
                    onClick={() => setIsRevealed(false)}
                    className="text-2xl p-2 hover:text-soft-cream transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {kitchenImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="font-sans text-charcoal text-sm">
                          {image.caption}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Kitchen Story */}
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-2xl font-serif text-royal-maroon mb-4">
                    Our Culinary Philosophy
                  </h3>
                  <div className="space-y-4 font-sans text-charcoal">
                    <p>
                      Behind these doors, we believe that great food starts with passion 
                      and precision. Every morning, our team gathers to prepare the freshest 
                      ingredients with the same dedication that has defined Tavisha Lounge 
                      for generations.
                    </p>
                    <p>
                      From the careful selection of spices to the artful plating of each dish, 
                      we pour our hearts into creating experiences that go beyond mere dining. 
                      This kitchen is more than a workspace - it's where traditions are honored 
                      and innovations are born.
                    </p>
                    <p className="text-burnt-orange font-semibold">
                      Thank you for letting us share our passion with you.
                    </p>
                  </div>
                </motion.div>

                {/* Secret Recipe Teaser */}
                <motion.div
                  className="text-center mt-8 p-6 bg-metallic-gold/10 rounded-2xl border border-metallic-gold/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <h4 className="font-serif text-royal-maroon text-xl mb-2">
                    🎁 Exclusive Offer for Our Curious Guests
                  </h4>
                  <p className="font-sans text-charcoal mb-4">
                    Mention "Behind the Kitchen" when booking and receive a complimentary 
                    tasting of our chef's secret recipe!
                  </p>
                  <motion.button
                    className="px-6 py-3 bg-royal-maroon text-metallic-gold font-sans font-bold rounded-full hover:bg-burnt-orange transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Your Experience
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BehindKitchen;