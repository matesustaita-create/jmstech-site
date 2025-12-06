import { Laptop, Wifi, Shield, HardDrive, Smartphone, Mail } from 'lucide-react';

const PopularHomeServices = () => {
  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Laptops, PCs & Mac Repairs',
      description: 'Whether it’s a slow laptop, a broken screen, or a Mac that won’t boot, we repair all makes and models with expert care, quick turnaround, and no surprise fees.'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'WiFi Setup & Troubleshooting',
      description: 'We diagnose and fix WiFi issues fast — so your devices stay connected, your work flows smoothly, and your family streams without buffering.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Peace of Mind',
      description: 'We set up strong antivirus, smart browsing filters, parental controls, and system hardening to keep your digital life safe from scams and threats.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Backups That Work',
      description: 'We set up automatic, tested backups — so your photos, documents, and business files are always safe, secure, and ready to restore when needed.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'New Device Setup',
      description: 'We handle data migration, software installs, backup setup, and device configuration — so your new computer is ready to go, hassle-free.'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Troubleshooting',
      description: 'From password resets to syncing errors and spam issues, we untangle your email problems and make sure your messages flow the way they should.'
    }
  ];

  return (
    <section id="services" className="pt-4 pb-8 bg-gradient-to-b from-[#0c2f3a] via-[#0d3745] to-[#0c2f3a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold text-white mb-4">
            Popular Home Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-[#0e3e4c]/95 backdrop-blur-sm p-8 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] 
                         transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] flex items-center justify-center mb-5 
                          shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2CB6C4] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="mt-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What's Included
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-[#0f3a47]/50 backdrop-blur-sm p-8 rounded-xl border border-[#1a4a5a]">
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#2CB6C4] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Friendly, insured technician</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#2CB6C4] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>On‑site, at our workshop or secure remote support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#2CB6C4] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Simple summary of what we did</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#2CB6C4] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>30‑day workmanship warranty on our service</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-400 italic">
              Data recovery is best‑effort and not guaranteed. We handle your data safely and ask permission before accessing personal files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularHomeServices;
