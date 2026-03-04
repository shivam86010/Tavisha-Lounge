// src/components/CelebrationPlanningPage.js
const CelebrationPlanningPage = ({ onClose }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [guests, setGuests] = useState(100);

  const events = [
    {
      id: 'wedding',
      title: 'Royal Wedding',
      icon: '💍',
      capacity: 'Up to 500 guests',
      price: 'Starting at ₹25L',
      description: 'Your fairytale wedding in palatial surroundings',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      packages: [
        { name: 'Silver', price: '₹25L', features: ['Ceremony venue', 'Basic decor', 'Wedding dinner'] },
        { name: 'Gold', price: '₹50L', features: ['All Silver features', 'Premium decor', 'Live music', 'Welcome drinks'] },
        { name: 'Platinum', price: '₹1Cr', features: ['All Gold features', 'Fireworks', 'Celebrity performer', 'Luxury accommodation'] }
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Gala',
      icon: '💼',
      capacity: 'Up to 300 guests',
      price: 'Starting at ₹15L',
      description: 'Impress clients and celebrate success',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      packages: [
        { name: 'Executive', price: '₹15L', features: ['Conference facilities', 'AV equipment', 'Lunch/Dinner'] },
        { name: 'Premium', price: '₹30L', features: ['All Executive features', 'Cocktail reception', 'Branding options'] },
        { name: 'Imperial', price: '₹50L', features: ['All Premium features', 'Keynote speaker', 'Entertainment'] }
      ]
    },
    {
      id: 'birthday',
      title: 'Milestone Birthday',
      icon: '🎂',
      capacity: 'Up to 200 guests',
      price: 'Starting at ₹5L',
      description: 'Celebrate life\'s special moments',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      packages: [
        { name: 'Celebration', price: '₹5L', features: ['Birthday dinner', 'Custom cake', 'Basic decor'] },
        { name: 'Grand', price: '₹10L', features: ['All Celebration features', 'Premium decor', 'Live music'] },
        { name: 'Royal', price: '₹20L', features: ['All Grand features', 'Fireworks', 'Celebrity appearance'] }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-950/95 backdrop-blur-xl">
      <div className="min-h-screen px-4 py-8">
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 w-14 h-14 bg-gray-900/80 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Section */}
        <div className="relative h-[40vh] rounded-3xl overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Celebrations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">YOUR STORY, OUR STAGE</p>
            <h1 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Plan Your Royal Celebration
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Event Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${
                  selectedEvent?.id === event.id ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="absolute inset-0">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
                </div>
                
                <div className="relative p-8 h-[400px] flex flex-col justify-end">
                  <span className="text-4xl mb-4">{event.icon}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500">{event.capacity}</span>
                    <span className="text-2xl font-bold text-amber-500">{event.price}</span>
                  </div>
                  
                  {selectedEvent?.id === event.id && (
                    <div className="absolute top-6 right-6 bg-amber-500 px-6 py-2 rounded-full">
                      <span className="text-sm font-bold text-gray-900">SELECTED</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedEvent && (
            <>
              {/* Guest Count Slider */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border-2 border-amber-500/30 p-12 mb-12">
                <h3 className="text-3xl font-bold text-white mb-8">Expected Guests</h3>
                <div className="flex items-center gap-8">
                  <span className="text-4xl font-bold text-amber-500">{guests}</span>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
                  />
                </div>
              </div>

              {/* Packages */}
              <h3 className="text-4xl font-bold text-white mb-8 text-center">Choose Your Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {selectedEvent.packages.map((pkg, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all hover:-translate-y-2">
                      {index === 1 && (
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 rounded-full whitespace-nowrap">
                          <span className="text-sm font-bold text-gray-900">MOST POPULAR</span>
                        </div>
                      )}
                      <h4 className="text-2xl font-bold text-white mb-4">{pkg.name}</h4>
                      <p className="text-4xl font-bold text-amber-500 mb-6">{pkg.price}</p>
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
                        Select Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900/50 rounded-3xl border border-amber-500/20 p-12 mb-20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Ready to Celebrate?</h3>
                <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="col-span-2 md:col-span-1 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="col-span-2 md:col-span-1 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="col-span-2 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  <input
                    type="date"
                    placeholder="Preferred Date"
                    className="col-span-2 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  <textarea
                    placeholder="Special Requests"
                    rows="4"
                    className="col-span-2 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  <button className="col-span-2 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CelebrationPlanningPage;