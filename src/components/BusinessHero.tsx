import React from 'react';

interface BusinessHeroProps {
  onBackToHome?: () => void;
}

const BusinessHero: React.FC<BusinessHeroProps> = ({ onBackToHome }) => {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] min-w-[320px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f3a4a] via-[#0d2f3c] to-[#0a252f] px-2 sm:px-4 pt-20 md:pt-24 pb-28">
      {/* Central Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(44, 182, 196, 0.25) 0%, rgba(44, 182, 196, 0.1) 50%, transparent 80%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-6xl xl:max-w-7xl py-8 sm:py-10 md:py-14 mx-auto">
        <div className="w-full mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Coming Soon
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto mb-6">
            Our business-focused services and solutions are on the way. 
            Stay tuned for tailored IT support for local businesses.
          </p>
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] text-white shadow-lg hover:shadow-[#2CB6C4]/40 hover:from-[#2CB6C4] hover:to-[#2CB6C4]/90 transition-all duration-300 hover:scale-105"
          >
            Take me back to Home Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
