import React from 'react';
import { Monitor, HardDrive, Globe, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Computer Repair',
      description: 'Professional diagnosis and repair of desktops and laptops. Hardware replacement, virus removal, and performance optimization.',
      features: ['Hardware diagnostics', 'Virus removal', 'Performance optimization', 'Component replacement']
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Specialized services for recovering damaged disks, corrupted files, and accidental deletions. No recovery, no charge.',
      features: ['Disk recovery', 'File restoration', 'Emergency service', 'Secure handling']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom website design and development for businesses. Modern, responsive solutions optimized for conversions.',
      features: ['Custom websites', 'E-commerce stores', 'SEO optimization', 'Responsive design']
    },
    {
      icon: Smartphone,
      title: 'Mobile Repair',
      description: 'Expert repair service for smartphones and tablets. Screen and battery replacements, and liquid damage recovery.',
      features: ['Screen replacement', 'Battery replacement', 'Liquid damage repair', 'Software issues']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions. Firewall setup, antivirus installation, and security audits.',
      features: ['Security audits', 'Firewall setup', 'Antivirus protection', 'Data encryption']
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'Ongoing technical assistance for homes and businesses. Remote support, network setup, and preventive maintenance services.',
      features: ['Remote support', 'Network setup', 'Regular maintenance', '24/7 availability']
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-[#0e3e4c] via-[#0d3745] to-[#0c2f3a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 md:-right-20 w-64 md:w-80 h-80 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#2CB6C4] bg-[#2CB6C4]/10 rounded-full mb-2">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Tailored Solutions
          </h2>
          <div className="w-24 h-1.5 bg-[#2CB6C4] mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            We offer specialized technical services to meet all your technology needs with the highest quality and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2CB6C4]/20 hover:border-[#2CB6C4]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#2CB6C4]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2CB6C4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className="w-14 h-14 rounded-xl bg-[#2CB6C4]/10 flex items-center justify-center mb-6 group-hover:bg-[#2CB6C4]/20 transition-colors duration-300">
                    <Icon className="text-[#2CB6C4]" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-1.5 h-1.5 bg-[#2CB6C4] rounded-full mt-2"></div>
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    aria-label={`Learn more about ${service.title} services`}
                    className="inline-flex items-center text-[#2CB6C4] font-medium group-hover:text-white transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
