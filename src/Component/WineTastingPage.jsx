

// src/components/WineTastingPage.js
const WineTastingPage = ({ onClose }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 'royal-flight',
      name: 'Royal Flight',
      price: '₹15,000',
      duration: '1.5 hours',
      wines: 5,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover premium Indian wines paired with artisanal small plates',
      includes: [
        '5 premium Indian wines',
        'Cheese and charcuterie board',
        'Wine tasting notes',
        'Expert sommelier guidance',
        'Take-home tasting journal'
      ],
      wines: [
        'Sula Dindori Reserve Shiraz 2019',
        'Fratelli Sangiovese 2020',
        'KRSMA Sangiovese 2018',
        'Vallonné Viognier 2021',
        'Grover Zampa La Réserve 2019'
      ]
    },
    {
      id: 'grand-cru',
      name: 'Grand Cru Journey',
      price: '₹35,000',
      duration: '2.5 hours',
      wines: 6,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A journey through legendary Bordeaux vintages',
      includes: [
        '6 Grand Cru wines',
        'Artisanal cheese pairing',
        'Private sommelier',
        'Cellar tour',
        'Crystal tasting glasses',
        'Certificate of tasting'
      ],
      wines: [
        'Château Margaux 2010',
        'Château Latour 2009',
        'Château Haut-Brion 2008',
        'Château Mouton Rothschild 2011',
        'Château Lafite Rothschild 2007',
        'Petrus 2005'
      ]
    },
    {
      id: 'imperial',
      name: 'Imperial Collection',
      price: '₹75,000',
      duration: '3 hours',
      wines: 8,
      image: 'https://images.unsplash.com/photo-1542321937-1c8a7b5e0a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The ultimate tasting of rare Champagnes and Burgundies',
      includes: [
        '8 rare vintages',
        'Lobster and caviar pairing',
        'Master sommelier',
        'Private wine cellar access',
        'Crystal decanter gift',
        'Chauffeur service',
        'Photography package'
      ],
      wines: [
        'Dom Pérignon P3 1971',
        'Krug Clos d\'Ambonnay 1995',
        'Salon Blanc de Blancs 1996',
        'Domaine de la Romanée-Conti 2009',
        'Leroy Musigny 2010',
        'Cristal Rosé 2008',
        'Bollinger Vieilles Vignes 2002',
        'Taittinger Comtes 2006'
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
            src="https://images.unsplash.com/photo-1541850328335-982615e8343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Wine Cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-16">
            <p className="text-amber-500 tracking-[0.2em] text-sm mb-4">LIQUID ARTISTRY</p>
            <h1 className="text-6xl md:text-7xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Wine Tasting Experiences
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className={`group relative bg-gray-900/50 rounded-3xl overflow-hidden border-2 cursor-pointer transition-all duration-500 ${
                  selectedExperience?.id === exp.id
                    ? 'border-amber-500 scale-105'
                    : 'border-gray-800 hover:border-amber-500/50'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.name}</h3>
                  <p className="text-amber-500 mb-4">{exp.price} | {exp.duration}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{exp.wines} Wines</span>
                    <span className="text-amber-500 font-bold">Select →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedExperience && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience Details */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border-2 border-amber-500/30 p-8">
                <h3 className="text-3xl font-bold text-white mb-6">{selectedExperience.name}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-amber-500 mb-3">Includes</h4>
                    <ul className="space-y-3">
                      {selectedExperience.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-amber-500 mb-3">Wine Selection</h4>
                    <ul className="space-y-2">
                      {selectedExperience.wines.map((wine, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Wine className="w-4 h-4 text-amber-500" />
                          <span className="text-gray-300">{wine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-gray-900/50 rounded-3xl border border-amber-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Book Your Tasting</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="col-span-2 md:col-span-1 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="col-span-2 md:col-span-1 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Time</label>
                      <select className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none">
                        <option>3:00 PM</option>
                        <option>5:00 PM</option>
                        <option>7:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Number of Guests</label>
                    <select className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 outline-none">
                      <option>2 guests</option>
                      <option>4 guests</option>
                      <option>6 guests</option>
                      <option>8 guests</option>
                    </select>
                  </div>
                  
                  <textarea
                    placeholder="Special Requests (Allergies, preferences, etc.)"
                    rows="3"
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 outline-none"
                  />
                  
                  <div className="bg-amber-500/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Experience Price</span>
                      <span className="text-2xl font-bold text-amber-500">{selectedExperience.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Taxes (18% GST)</span>
                      <span>+ ₹{parseInt(selectedExperience.price.replace(/[^0-9]/g, '')) * 0.18}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
                    Confirm Booking
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    You will receive a confirmation email with payment instructions
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default WineTastingPage;