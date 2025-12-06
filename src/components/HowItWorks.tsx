import React from 'react';
import { Calendar, Search, Wrench, ShieldCheck, X } from 'lucide-react';

interface HowItWorksProps {
  onQuickContactClick?: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onQuickContactClick }) => {
  const [showTerms, setShowTerms] = React.useState(false);

  return (
    <section className="relative py-4 bg-gradient-to-b from-[#0e3e4c] via-[#0d3745] to-[#0c2f3a] text-white overflow-hidden -mt-1">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            How it works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Card 1 */}
          <button
            type="button"
            onClick={onQuickContactClick}
            className="text-left group bg-[#0f3a47]/95 backdrop-blur-sm p-6 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] focus:ring-offset-2 focus:ring-offset-[#0e3e4c]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] flex items-center justify-center mb-4 shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2CB6C4] transition-colors duration-300">1) Book online or call</h3>
            <p className="text-gray-200 leading-relaxed text-sm">Tell us what's going on and choose a time that suits you.</p>
          </button>

          {/* Card 2 */}
          <div className="group bg-[#0f3a47]/95 backdrop-blur-sm p-6 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] flex items-center justify-center mb-4 shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
              <Search className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2CB6C4] transition-colors duration-300">2) Diagnosis first</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              We identify the issue and explain options. No diagnosis, no charge
              <button 
                onClick={() => setShowTerms(true)}
                aria-label="View diagnostic policy terms and conditions for the first 30 minutes no-charge offer"
                className="text-[#2CB6C4] hover:text-white transition-colors font-medium focus:outline-none underline underline-offset-4 decoration-dotted"
              >
                (first 30 min, conditions apply)
              </button>
              .
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#0f3a47]/95 backdrop-blur-sm p-6 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1.5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] flex items-center justify-center mb-4 shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2CB6C4] transition-colors duration-300">3) We fix it</h3>
            <p className="text-gray-200 leading-relaxed text-sm">On-site at your place, at our workshop or secure remote session. Clear costs before parts or extras.</p>
          </div>
          {/* Card 4 */}
          <div className="group bg-[#0f3a47]/95 backdrop-blur-sm p-6 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1.5 h-full">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] flex items-center justify-center mb-4 shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2CB6C4] transition-colors duration-300">4) After-care</h3>
            <p className="text-gray-200 leading-relaxed text-sm">We tidy up, share prevention tips, and check in after the visit.</p>
          </div>
        </div>

      </div>

      {/* Terms Modal - Reusing the same modal from Hero */}
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
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Diagnostic Policy</h2>
            
            <div className="prose prose-sm text-gray-700">
              <p><strong>No Diagnosis, No Charge:</strong> • If we can't reasonably diagnose in the first 30 minutes and you stop there, no diagnostic fee.<br/>
              • If you choose to continue and a diagnosis is later reached, all time (incl. the first 30 min) is billable.<br/>
              • Excludes travel/parking/after-hours; other reasonable exclusions apply (e.g., no credentials, intermittent faults, third-party dependencies).</p>
              
              <p className="text-sm text-gray-500 mt-6">Last updated: September 2025</p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowTerms(false)}
                aria-label="Acknowledge diagnostic policy terms and close"
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

export default HowItWorks;
