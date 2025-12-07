import { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BusinessHero = lazy(() => import('./components/BusinessHero'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const SectionDivider = lazy(() => import('./components/SectionDivider'));
const PopularHomeServices = lazy(() => import('./components/PopularHomeServices'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'business'>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedService('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setIsContactModalOpen(true);
  };

  const handleFooterQuickLinkClick = (target: string) => {
    if (target === 'home') {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'contact') {
      setActiveView('home');
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (activeView === 'business') {
      setActiveView('home');
      setTimeout(() => scrollToSection(target), 50);
    } else {
      scrollToSection(target);
    }
  };

  // Handle deep links like /#how-it-works or /#contact
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return;

    if (hash === 'for-business') {
      setActiveView('business');
      return;
    }

    setActiveView('home');

    const timeout = setTimeout(() => {
      scrollToSection(hash);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2d38] to-[#0a1e26] text-white overflow-x-hidden">
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        onNavigate={scrollToSection}
      />
      <main>
        {activeView === 'home' ? (
          <>
            <Hero onContactClick={openContactModal} />
            <Suspense fallback={null}>
              <SectionDivider color="#0e3e4c" />
              <div id="how-it-works">
                <HowItWorks onQuickContactClick={openContactModal} />
              </div>
              <SectionDivider color="#0c2f3a" />
              <div id="popular-services">
                <PopularHomeServices />
              </div>
              <SectionDivider color="#0c2f3a" />
              <div id="about">
                <About />
              </div>
              <SectionDivider color="#0e3e4c" />
              <div id="faq">
                <FAQ />
              </div>
              <SectionDivider color="#0d3745" />
              <Contact
                isModalOpen={isContactModalOpen}
                onClose={closeContactModal}
                selectedService={selectedService}
              />
            </Suspense>
          </>
        ) : (
          <Suspense fallback={null}>
            <div id="for-business">
              <BusinessHero onBackToHome={() => setActiveView('home')} />
            </div>
          </Suspense>
        )}
      </main>
      <Suspense fallback={null}>
        <Footer
          onServiceClick={handleServiceClick}
          onQuickLinkClick={handleFooterQuickLinkClick}
        />
      </Suspense>
    </div>
  );
}

export default App;
