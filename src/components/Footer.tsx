import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onServiceClick?: (service: string) => void;
  onQuickLinkClick?: (target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onServiceClick, onQuickLinkClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center space-x-3">
              <img
                src="/JMS Logo-03.png"
                alt="JMS Tech Logo"
                loading="lazy"
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">JMS Tech</h1>
                <p className="text-sm text-gray-400">Newcastle</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fast, local tech support in Newcastle for laptops, Wi‑Fi, data and new device setup – trusted by 1,000+
              customers.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Computer Repair', value: 'computer-repair' },
                { label: 'Clean install of Operative Systems', value: 'clean-install-os' },
                { label: 'Web Development', value: 'web-development' },
                { label: 'Performance Tune-up', value: 'performance-tune-up' },
                { label: 'SSD Upgrade & Data Migration', value: 'ssd-upgrade-data-migration' },
                { label: 'IT Support', value: 'it-support' },
                { label: 'Automatic Backup & Data Recovery', value: 'automatic-backup-data-recovery' },
              ].map((service, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => onServiceClick?.(service.value)}
                    className="text-left text-gray-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', target: 'home' },
                { label: 'How it Works', target: 'how-it-works' },
                { label: 'Popular Services', target: 'popular-services' },
                { label: 'About Us', target: 'about' },
                { label: 'FAQs', target: 'faq' },
                { label: 'Contact JMS Tech', target: 'contact' },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => onQuickLinkClick?.(link.target)}
                    className="text-left text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="text-cyan-400 mt-0.5" size={18} />
                <div className="leading-snug">
                  <div className="text-gray-400">Main Office</div>
                  <a href="tel:+61-416-665-227" className="text-white hover:text-cyan-400">
                    (+61) 416 665 227
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-cyan-400 mt-0.5" size={18} />
                <div className="leading-snug">
                  <div className="text-gray-400">Email</div>
                  <a href="mailto:mateo@jmstech.com.au" className="text-white hover:text-cyan-400">
                    mateo@jmstech.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-0.5" size={18} />
                <div className="leading-snug">
                  <div className="text-gray-400">Location</div>
                  <a
                    href="https://maps.app.goo.gl/w4PvChjsajg8tagu7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400"
                  >
                    70 Hanbury Street, Mayfield, NSW Australia
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-cyan-400 mt-0.5" size={18} />
                <div className="leading-snug">
                  <div className="text-gray-400">Business Hours</div>
                  <div className="text-white text-[11px] sm:text-sm">
                    Mon–Fri: 8AM–6PM
                    <br />
                    Saturday: 9AM–4PM
                    <br />
                    Sunday: Emergency Only
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61581762268792"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit JMS Tech Facebook page"
                  className="transition-colors"
                >
                  <div className="p-1.5 rounded-full bg-[#104A5B] text-gray-300 hover:text-blue-400 hover:bg-[#1b4e63] transition-colors">
                    <Facebook size={20} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/jmstech.au?igsh=MXNpdnl3cmpqMWJucg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit JMS Tech Instagram profile"
                  className="transition-colors"
                >
                  <div className="p-1.5 rounded-full bg-[#104A5B] text-gray-300 hover:text-pink-400 hover:bg-[#1b4e63] transition-colors">
                    <Instagram size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-center space-y-3 md:space-y-0 md:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2025 JMS Tech Newcastle - ABN: 82 423 623 805 - All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
              <a
                href="/JMS-Tech-Privacy-Policy.pdf"
                download="JMS-Tech-Privacy-Policy.pdf"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/JMS-Tech-Service-Terms-&-Conditions.pdf"
                download="JMS-Tech-Service-Terms-&-Conditions.pdf"
                className="hover:text-white transition-colors"
              >
                Service Terms & Conditions
              </a>
              <a
                href="/JMS-Tech-Warranty-Policy.pdf"
                download="JMS-Tech-Warranty-Policy.pdf"
                className="hover:text-white transition-colors"
              >
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
