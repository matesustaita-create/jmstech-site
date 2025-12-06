import Footer from './Footer';

interface ForBusinessProps {
  onContactClick?: () => void;
}

const ForBusiness = ({ onContactClick }: ForBusinessProps) => {
  return (
    <div className="min-h-screen">
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Business Solutions</h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We provide comprehensive IT solutions tailored for businesses of all sizes. 
            From managed IT services to custom software development, we've got you covered.
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">
              <button 
                onClick={onContactClick}
                aria-label="Contact JMS Tech for a free business consultation"
                className="text-[#2CB6C4] hover:underline focus:outline-none"
              >
                Contact us for a free consultation
              </button>
            </p>
          </div>
        </div>
      </main>
      {!onContactClick && <Footer />}
    </div>
  );
};

export default ForBusiness;
