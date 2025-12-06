import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'business';
  onViewChange: (view: 'home' | 'business') => void;
  onNavigate: (id: string) => void;
}

const Header = ({ activeView, onViewChange, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewChange = (view: 'home' | 'business') => {
    onViewChange(view);
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('for-business');
    }
  };

  const scrollToSection = (id: string) => {
    // Special case: scroll to top when clicking "Home"
    if (id === 'home') {
      if (activeView === 'business') {
        onViewChange('home');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (activeView === 'business') {
      onViewChange('home');
      // Small delay to ensure the home view is rendered before scrolling
      setTimeout(() => onNavigate(id), 50);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#0a2d38]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        height: 'auto',
        fontFamily: "'Montserrat', sans-serif",
        zIndex: 50
      }}
    >


      {/* Header Top Bar */}
      <div 
        className={`header-top-bar relative z-10 flex items-center justify-center transition-all duration-300 ${
          isScrolled ? 'py-1 opacity-0 h-0 overflow-hidden' : 'py-2 opacity-100 bg-[#104A5B] text-white'
        }`}
        style={{
          fontSize: '14px',
          fontWeight: 300,
          letterSpacing: '0.5px',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#2CB6C4] animate-pulse"></span>
            Fast and secure technical support
          </span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">30-day warranty</span>
          <span className="w-2 h-2 rounded-full bg-[#2CB6C4] animate-pulse"></span>
        </div>
      </div>

      {/* Logo as watermark */}
      <div className="fixed top-10 left-70 h-screen w-auto hidden lg:flex items-start pt-20 pl-8 pointer-events-none z-0 opacity-5">
        <img 
          src="/jms-logo.png" 
          alt="" 
          loading="lazy"
          className="h-[80vh] w-auto max-w-[50vw] transition-all duration-300"
          style={{
            objectFit: 'contain',
            objectPosition: 'top left',
            imageRendering: 'auto' as any,
          }}
        />
      </div>

      {/* Header Main Bar */}
      <div 
        className={`header-main-bar relative z-10 transition-all duration-300`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          padding: isScrolled ? '0.75rem 40px' : '1rem 40px',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Logo - Left */}
        <div 
          className="logo flex items-center cursor-pointer"
          style={{ marginLeft: '20px' }}
          onClick={() => window.location.href = '/'}
          aria-label="Go to JMS Tech homepage"
        >
          <img 
            src="/JMS Logo-03.png" 
            alt="JMS Tech Logo" 
            className={`mr-3 transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            style={{ objectFit: 'contain' }}
          />
          <div>
            <p className={`text-cyan-400 tracking-wide opacity-90 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`} style={{ 
              fontFamily: "'Inter', sans-serif",
              lineHeight: '0.1',
              marginLeft: '5px'
            }}>Newcastle • Advanced Solutions</p>
          </div>
        </div>

        {/* Menu - Center */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Pill Navigation */}
          <div className="flex-shrink-0 mr-4">
            <div className="relative p-0.5 rounded-full bg-[#0d3b4a] border border-[#2CB6C4]/30 w-60 h-8 overflow-hidden">
              {/* Fondo animado */}
              <div 
                className={`absolute top-1/2 left-0.5 transform -translate-y-1/2 h-[calc(100%-0.25rem)] rounded-full bg-[#2a8b9b] shadow-md transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                  activeView === 'home' 
                    ? 'translate-x-0' 
                    : 'translate-x-full'
                }`}
                style={{
                  width: 'calc(50% - 0.15rem)'
                }}
              />
              
              <div className="relative z-10 flex h-full w-full">
                <div 
                  onClick={() => handleViewChange('home')}
                  className={`flex-1 flex items-center justify-center px-5 py-1 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap h-full ${
                    activeView === 'home' 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-[#2a8b9b]/15'
                  }`}
                >
                  For Home
                </div>
                <div 
                  onClick={() => handleViewChange('business')}
                  className={`flex-1 flex items-center justify-center px-5 py-1 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap h-full ${
                    activeView === 'business' 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-[#2a8b9b]/15'
                  }`}
                >
                  For Business
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'About Us', id: 'about' },
              { name: 'Contact', id: 'contact' },
              ...(activeView === 'business' ? [{ name: 'For Business', id: 'for-business' }] : [])
            ].filter(Boolean).map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="relative text-gray-200 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wider group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (activeView === 'business') {
                    handleViewChange('home');
                    // Small delay to ensure the home view is rendered before scrolling
                    setTimeout(() => scrollToSection(item.id), 50);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2CB6C4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Button - Right */}
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+61416665227"
            aria-label="Call JMS Tech on +61 416 665 227"
            className="hidden md:flex items-center space-x-2 text-gray-200 hover:text-white transition-colors"
          >
            <div className="p-2 rounded-full bg-[#104A5B] text-[#2CB6C4]">
              <Phone size={18} />
            </div>
            <span className="font-medium">+61 416 665 227</span>
          </a>
          <button 
            onClick={() => {
              if (activeView === 'business') {
                handleViewChange('home');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);
              } else {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            aria-label="Open contact section"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] hover:from-[#2CB6C4] hover:to-[#2CB6C4]/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-[#2CB6C4]/30 hover:scale-105"
          >
            <span>Contact</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-white transition-colors p-2.5 rounded-lg bg-[#104A5B]/50 border border-[#2CB6C4]/30 hover:bg-[#104A5B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a2d38] border-t border-[#2CB6C4]/30 shadow-2xl">
            <div className="p-4">
              {/* View Toggle */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex p-0.5 rounded-full bg-[#0d3b4a] border border-[#2CB6C4]/30">
                  <button 
                    onClick={() => {
                      handleViewChange('home');
                      setIsMenuOpen(false);
                    }}
                    aria-label="Switch to home view"
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeView === 'home' 
                        ? 'bg-[#2a8b9b] text-white shadow-md shadow-[#2a8b9b]/20' 
                        : 'text-gray-300 hover:text-white hover:bg-[#2a8b9b]/15'
                    }`}
                  >
                    For Home
                  </button>
                  <button 
                    onClick={() => {
                      handleViewChange('business');
                      setIsMenuOpen(false);
                    }}
                    aria-label="Switch to business view"
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeView === 'business' 
                        ? 'bg-[#2a8b9b] text-white shadow-md shadow-[#2a8b9b]/20' 
                        : 'text-gray-300 hover:text-white hover:bg-[#2a8b9b]/15'
                    }`}
                  >
                    For Business
                  </button>
                </div>
              </div>
              
              {/* Navigation Links */}
              <nav className="space-y-1">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Services', id: 'services' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    className="block px-4 py-3 rounded-lg text-gray-200 hover:bg-[#104A5B]/50 hover:text-white transition-colors duration-200 font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeView === 'business') {
                        handleViewChange('home');
                        setTimeout(() => scrollToSection(item.id), 50);
                      } else {
                        scrollToSection(item.id);
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                
                <button 
                  onClick={() => {
                    if (activeView === 'business') {
                      handleViewChange('home');
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 50);
                    } else {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setIsMenuOpen(false);
                  }}
                  aria-label="Open contact section from mobile menu"
                  className="w-full mt-3 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[#2CB6C4]/30 hover:scale-[1.02]"
                >
                  <span>Contact Now</span>
                  <ArrowRight size={16} />
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
