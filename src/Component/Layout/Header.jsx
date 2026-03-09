import  { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiMapPin, FiClock, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'About', to: '/about-us' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Reservations', to: '/reservations' },
    { name: 'Contact', to: '/contacts' }
  ];

  // Fixed: Direct styling without functions
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-soft-cream shadow-lg py-2 text-charcoal'
      : isHomePage
        ? 'bg-transparent py-4 text-soft-cream'
        : 'bg-charcoal py-4 text-soft-cream'
  }`;

  const linkClasses = isScrolled
    ? 'text-charcoal hover:text-royal-maroon'
    : 'text-soft-cream hover:text-metallic-gold';

  const mobileButtonColor = isMenuOpen 
    ? 'text-charcoal' 
    : isScrolled 
      ? 'text-charcoal' 
      : 'text-soft-cream';

  const logoColor = isScrolled ? 'text-charcoal' : 'text-soft-cream';

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block bg-royal-maroon text-soft-cream py-2 px-4 text-sm relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FiMapPin className="text-metallic-gold" />
              <span>123 Royal Street, Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiPhone className="text-metallic-gold" />
              <span>+91 98765 43210</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <FiClock className="text-metallic-gold" />
            <span>Open Today: 11:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={headerClasses}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className={`text-2xl font-bold font-serif transition-colors duration-300 ${logoColor}`}>
                Tavisha <span className="text-burnt-orange">Lounge</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`font-medium transition-colors duration-300 ${linkClasses}`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                className="bg-royal-maroon text-metallic-gold px-6 py-2 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                onClick={() => window.location.href = '/reservations'}
              >
                Reserve Table
              </button>
            </nav>

            <button
              className={`lg:hidden text-2xl z-50 transition-colors duration-300 ${mobileButtonColor}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 right-0 h-full w-80 bg-soft-cream shadow-soft-lg lg:hidden">
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-charcoal/10">
                  <h2 className="text-2xl font-serif font-bold text-royal-maroon">
                    Menu
                  </h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-8 px-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-3 px-4 text-charcoal hover:text-royal-maroon hover:bg-royal-maroon/5 rounded-lg transition-colors duration-300 group"
                      >
                        <span className="font-medium">{item.name}</span>
                        <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-royal-maroon" />
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-charcoal/10">
                  <button
                    className="w-full bg-royal-maroon text-metallic-gold px-6 py-3 rounded-lg font-semibold hover:bg-royal-maroon-dark transition-colors duration-300"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = '/reservations';
                    }}
                  >
                    Reserve Table
                  </button>
                  
                  {/* Contact Info in Sidebar */}
                  <div className="mt-6 space-y-3 text-sm text-charcoal/70">
                    <div className="flex items-center space-x-2">
                      <FiPhone className="text-metallic-gold" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-metallic-gold" />
                      <span>123 Royal Street, Mumbai</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="text-metallic-gold" />
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;



