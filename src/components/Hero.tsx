import { useState } from 'react';
import { CheckCircle, X, Zap, Wifi, Shield, Mail, Printer, Laptop, HardDrive, Home } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [showTerms, setShowTerms] = useState(false);
  
  return (
    <section className="relative min-h-[calc(100vh-6rem)] min-w-[320px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#104A5B] via-[#0f4553] to-[#0e3e4c] px-2 sm:px-4 pt-20 md:pt-24 pb-28">
      {/* Central Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-6xl xl:max-w-7xl py-8 sm:py-10 md:py-14 mx-auto">
        {/* Hero Content */}
        <div className="w-full mx-auto text-center relative z-10">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight">
        Computer Repairs & Home IT Support in Newcastle — Fast, Friendly & Local
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0">
          From slow computers and Wi-Fi issues to email problems and printer setup - JMS Tech provides expert home computer repairs and IT support in Newcastle. Fast, friendly, and local. Same-day appointments available!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleContactClick}
            aria-label="Book a home visit with JMS Tech"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] hover:from-[#2CB6C4] hover:to-[#2CB6C4]/90 rounded-lg shadow-lg hover:shadow-[#2CB6C4]/30 hover:scale-105"
          >
            Book home visit
          </button>
          
          <a 
            href="tel:+61416665227"
            aria-label="Call JMS Tech now on +61 416 665 227"
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call now
          </a>
        </div>
        
        {/* Trust Strip */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2CB6C4] flex-shrink-0" />
            <span>Same-day appointments where possible</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-500/50"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2CB6C4] flex-shrink-0" />
            <span>30-day workmanship warranty</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-500/50"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2CB6C4] flex-shrink-0" />
            <span>No diagnosis, no charge (first 30 min)</span>
            <button 
              onClick={() => setShowTerms(true)}
              aria-label="View terms and conditions for the no diagnosis, no charge offer"
              className="text-xs text-gray-400 hover:text-gray-300 transition-colors ml-1 focus:outline-none"
            >
              conditions apply
            </button>
          </div>
        </div>
        
        {/* Main Title and Services */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-6">
              Fix it <span className="text-[#2CB6C4]">today</span>
            </h2>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-1">
              {[
                { text: 'Computer not turning on or running slow? We repair PCs & Macs fast in Newcastle.', icon: <Zap key="pc" className="w-5 h-5" /> },
                { text: 'Fix Wi-Fi issues fast — no more dead zones or buffering. Local support in Newcastle.', icon: <Wifi key="wifi" className="w-5 h-5" /> },
                { text: 'Remove viruses, malware, and pop-ups with expert tune-ups.', icon: <Shield key="shield" className="w-5 h-5" /> },
                { text: 'Outlook or Gmail not syncing? We fix email, 2FA and account login problems.', icon: <Mail key="mail" className="w-5 h-5" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center text-[#2CB6C4] text-sm font-medium mr-3 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="space-y-1">
              {[
                { text: 'Set up printers & scanners that actually work — without frustration.', icon: <Printer key="printer" className="w-5 h-5" /> },
                { text: 'Bought a new computer? We handle setup, software, and data transfer.', icon: <Laptop key="laptop" className="w-5 h-5" /> },
                { text: 'Protect your files with automatic, tested backups you can rely on.', icon: <HardDrive key="backup" className="w-5 h-5" /> },
                { text: 'Smart home setup, parental controls, and streaming device support.', icon: <Home key="smart" className="w-5 h-5" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center text-[#2CB6C4] text-sm font-medium mr-3 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Book a technician CTA */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleContactClick}
              aria-label="Book a technician from JMS Tech"
              className="px-6 py-3 text-base font-medium text-[#2CB6C4] hover:text-white transition-all duration-300 border border-[#2CB6C4] hover:bg-[#2CB6C4]/10 rounded-lg hover:shadow-sm"
            >
              Book a technician
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 z-50">
          <div className="w-8 h-12 border-2 border-[#2CB6C4] rounded-full flex justify-center p-1 bg-[#0a2d38] bg-opacity-90 backdrop-blur-sm shadow-lg">
            <div className="w-1 h-2 bg-[#2CB6C4] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button 
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close terms"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms and Conditions</h2>
            
            <div className="prose prose-sm text-gray-700">
              <h3>Service Terms</h3>
              <p><strong>Same-day Appointments:</strong> Subject to technician availability. While we strive to accommodate same-day service, we cannot guarantee availability during peak times.</p>
              
              <h3>Warranty Information</h3>
              <p><strong>30-day Workmanship Warranty:</strong> • Australian Consumer Law (ACL) guarantees apply and cannot be excluded. For major failures you may cancel and seek refund/compensation as per ACL.
               • JMS 30-day commercial warranty: if the same problem returns within 30 days of completion, we re-attend labour-free (mode at our reasonable technical discretion). Parts follow manufacturer/supplier warranty + ACL rights.
               • Not covered: new/unrelated issues, misuse/accident post-service, new malware, third-party outages, or faults outside our control. </p>
              
              <h3>Diagnostic Policy</h3>
              <p><strong>No Diagnosis, No Charge:</strong> • If we can’t reasonably diagnose in the first 30 minutes and you stop there, no diagnostic fee.
– If you choose to continue and a diagnosis is later reached, all time (incl. the first 30 min) is billable.
– Excludes travel/parking/after-hours; other reasonable exclusions apply (e.g., no credentials, intermittent faults, third-party dependencies).</p>
              
              <h3>General Terms</h3>
              <p>All services are subject to our standard terms and conditions. Prices are subject to change without notice. Additional fees may apply for after-hours service, expedited service, or special circumstances.</p>
              
              <p className="text-sm text-gray-500 mt-6">Last updated: September 2025</p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowTerms(false)}
                aria-label="Close terms and conditions"
                className="px-4 py-2 bg-[#2CB6C4] text-white rounded hover:bg-[#2498a5] transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
