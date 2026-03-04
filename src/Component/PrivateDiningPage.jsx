
// src/components/PrivateDiningPage.js
const PrivateDiningPage = ({ onClose }) => {
  const [selectedPavilion, setSelectedPavilion] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const pavilions = [
    {
      id: 'maharaja',
      name: 'The Maharaja Suite',
      icon: <Crown className="w-8 h-8" />,
      capacity: '8 guests',
      price: '₹50,000',
      image: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Antique thrones seating',
        'Personal butler service',
        'Heirloom silverware',
        'Royal Rajasthani decor',
        'Private chef interaction',
        'Welcome champagne'
      ],
      menu: [
        '7-course royal tasting menu',
        'Premium wine pairing',
        'Signature cocktails',
        'Indian dessert selection'
      ]
    },
    {
      id: 'garden',
      name: 'The Garden Pavilion',
      icon: <Flower2 className="w-8 h-8" />,
      capacity: '12 guests',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Al fresco dining',
        'Heirloom rose garden',
        'Fairy light canopy',
        'Fountain views',
        'Climate controlled',
        'Private live music'
      ],
      menu: [
        '5-course garden fresh menu',
        'Botanical cocktails',
        'Wine selection',
        'Dessert garden'
      ]
    },
    {
      id: 'vault',
      name: 'The Vault',
      icon: <Wine className="w-8 h-8" />,
      capacity: '6 guests',
      price: '₹75,000',
      image: 'https://images.unsplash.com/photo-1541850328335-982615e8343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Wine cellar dining',
        '2000+ rare vintages',
        'Temperature controlled',
        'Master sommelier',
        'Private cheese cellar',
        'Cigar lounge access'
      ],
      menu: [
        '8-course wine pairing menu',
        'Rare vintage collection',
        'Artisanal cheese board',
        'Premium cigars'
      ]
    },
    {
      id: 'celestial',
      name: 'The Celestial Deck',
      icon: <Moon className="w-8 h-8" />,
      capacity: '10 guests',
      price: '₹60,000',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Rooftop dining',
        'Professional telescope',
        'Personal astronomer',
        'Stargazing experience',
        'Infinity pool view',
        'Private lounge area'
      ],
      menu: [
        '6-course celestial menu',
        'Star-named cocktails',
        'Champagne tower',
        'Midnight dessert bar'
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

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">EXCLUSIVE EXPERIENCES</p>
            <h1 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Private Dining Inquiry
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto" />
          </div>

          {/* Pavilion Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {pavilions.map((pavilion) => (
              <div
                key={pavilion.id}
                onClick={() => setSelectedPavilion(pavilion)}
                className={`group relative bg-gray-900/50 rounded-3xl overflow-hidden border-2 cursor-pointer transition-all duration-500 ${
                  selectedPavilion?.id === pavilion.id
                    ? 'border-amber-500 scale-[1.02]'
                    : 'border-gray-800 hover:border-amber-500/50'
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pavilion.image} 
                    alt={pavilion.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500">
                      {pavilion.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{pavilion.name}</h3>
                      <p className="text-amber-500">{pavilion.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-amber-500">{pavilion.price}</span>
                    <span className="text-gray-400">+ taxes</span>
                  </div>
                  
                  {selectedPavilion?.id === pavilion.id && (
                    <div className="absolute top-6 right-6 bg-amber-500 px-6 py-2 rounded-full">
                      <span className="text-sm font-bold text-gray-900">SELECTED</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {selectedPavilion && (
            <>
              {/* Pavilion Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border-2 border-amber-500/30 p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Experience Includes</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {selectedPavilion.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-amber-500" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6">Curated Menu</h3>
                    <div className="space-y-3">
                      {selectedPavilion.menu.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Gem className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="bg-gray-900/50 rounded-3xl border border-amber-500/20 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Book Your Experience</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Select Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Preferred Time</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none"
                      >
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Number of Guests</label>
                      <input
                        type="number"
                        min="1"
                        max={parseInt(selectedPavilion.capacity)}
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none"
                        placeholder={`Max ${selectedPavilion.capacity}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Special Requests</label>
                      <textarea
                        rows="3"
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none"
                        placeholder="Dietary restrictions, allergies, etc."
                      />
                    </div>
                    
                    <button className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
                      Submit Inquiry
                    </button>
                    
                    <p className="text-center text-sm text-gray-500">
                      Our concierge will contact you within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="p-6 bg-gray-900/50 rounded-xl border border-amber-500/20 text-center">
                  <Clock className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-bold">24 Hours Notice</p>
                  <p className="text-sm text-gray-400">Required for booking</p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-xl border border-amber-500/20 text-center">
                  <Diamond className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-bold">50% Deposit</p>
                  <p className="text-sm text-gray-400">To confirm reservation</p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-xl border border-amber-500/20 text-center">
                  <Users className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-bold">Personal Butler</p>
                  <p className="text-sm text-gray-400">Included in all bookings</p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-xl border border-amber-500/20 text-center">
                  <Gift className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <p className="text-white font-bold">Welcome Amenity</p>
                  <p className="text-sm text-gray-400">Complimentary champagne</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default PrivateDiningPage;