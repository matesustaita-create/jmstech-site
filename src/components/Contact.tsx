import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  isModalOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const Contact: React.FC<ContactProps> = ({ isModalOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (isModalOpen && selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [isModalOpen, selectedService]);

  useEffect(() => {
    if (isModalOpen) {
      setIsModalVisible(true);
      return;
    }

    const timeout = setTimeout(() => setIsModalVisible(false), 320);
    return () => clearTimeout(timeout);
  }, [isModalOpen]);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleMainSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...formData,
      }),
    })
      .then(() => {
        alert("Thank you! We'll contact you within 2 hours.");
        resetForm();
      })
      .catch(() => {
        alert('Sorry, there was a problem sending your message. Please try again.');
      });
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'quick-contact',
        ...formData,
      }),
    })
      .then(() => {
        alert("Thank you! We'll contact you within 2 hours.");
        resetForm();
        onClose();
      })
      .catch(() => {
        alert('Sorry, there was a problem sending your message. Please try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '(+61) 416 665 227 ', href: 'tel:+61 416 665 227' },
    { icon: Mail, label: 'Email', value: 'mateo@jmstech.com.au', href: 'mailto:mateo@jmstech.com.au' },
    { icon: MapPin, label: 'Location', value: '70 Hanbury Street, Mayfield, NSW Australia', href: 'https://maps.app.goo.gl/quFyQaGowoSwsudz8' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri 8AM-6PM, Sat 9AM-4PM', href: '' }
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="pt-0 pb-8 bg-gradient-to-b from-[#0d3745] via-[#0e3e4c] to-[#0c2f3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Need immediate tech support? Contact us now for fast, professional service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const commonContent = (
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-[#2CB6C4] to-[#1a8a96] p-3 rounded-lg shadow-lg shadow-[#2CB6C4]/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-150">{info.label}</div>
                        <div className="text-white font-semibold">{info.value}</div>
                      </div>
                    </div>
                  );

                  // For entries without href (like "Hours"), render a non-clickable card
                  if (!info.href) {
                    return (
                      <div
                        key={index}
                        className="group bg-[#0f3a47]/95 backdrop-blur-sm p-4 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1"
                        aria-label={`${info.label}: ${info.value}`}
                      >
                        {commonContent}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.label === 'Location' ? '_blank' : undefined}
                      rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                      aria-label={`Contact via ${info.label}: ${info.value}`}
                      className="group bg-[#0f3a47]/95 backdrop-blur-sm p-4 rounded-xl border border-[#1a4a5a] hover:border-[#2CB6C4] transition-all duration-300 hover:shadow-xl hover:shadow-[#2CB6C4]/10 hover:-translate-y-1"
                    >
                      {commonContent}
                    </a>
                  );
                })}
              </div>

              <div className="bg-cyan-600 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Emergency Support</h3>
                <p className="text-cyan-100 mb-6">
                  Computer crashed? Data lost? Need immediate help? 
                </p>
                <a
                  href="tel:+61416665227"
                  aria-label="Call JMS Tech emergency support on +61 416 665 227"
                  className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Emergency: (+61) 416-665-227</span>
                </a>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Contact</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleMainSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="computer-repair">Computer Repair</option>
                    <option value="data-recovery">Data Recovery</option>
                    <option value="web-development">Web Development</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="it-support">IT Support</option>
                    <option value="something-else">Something Else</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Describe your tech issue or project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  aria-label="Send contact message to JMS Tech"
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out backdrop-blur-sm ${
            isModalOpen ? 'bg-black/60 opacity-100' : 'bg-black/60 opacity-0'
          }`}
        >
          <div
            className={`bg-white text-gray-900 rounded-xl max-w-md w-full p-8 relative transform transition-all duration-300 ease-out shadow-2xl ${
              isModalOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
            }`}
          >
            <button
              onClick={onClose}
              aria-label="Close quick contact modal"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Contact</h3>
            <form
              name="quick-contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleQuickSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="quick-contact" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select Service</option>
                <option value="computer-repair">Computer Repair</option>
                <option value="clean-install-os">Clean install of Operative Systems</option>
                <option value="web-development">Web Development</option>
                <option value="performance-tune-up">Performance Tune-up</option>
                <option value="ssd-upgrade-data-migration">SSD Upgrade &amp; Data Migration</option>
                <option value="it-support">IT Support</option>
                <option value="automatic-backup-data-recovery">Automatic Backup &amp; Data Recovery</option>
                <option value="something-else">Something Else</option>
              </select>
              <textarea
                name="message"
                placeholder="Describe your issue..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
              ></textarea>
              <button
                type="submit"
                aria-label="Send quick contact message to JMS Tech"
                className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <Send size={20} />
                <span>Get Help Now</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
