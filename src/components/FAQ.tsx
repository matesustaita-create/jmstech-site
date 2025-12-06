import { useState } from 'react';
import { X } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  const faqs = [
    {
      question: 'How does the maintenance service work?',
      answer:
        'Our computer maintenance service starts with an initial diagnosis and health check. From there, we handle preventive care or repairs as needed. Our certified technicians use top-quality parts and tools to keep your tech running smoothly - at home in Newcastle or remotely anywhere in Australia.',
    },
    {
      question: 'Can you come today?',
      answer: (
        <>
          Often yes. We offer same-day tech support across Newcastle and nearby suburbs whenever possible.{' '}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-[#2CB6C4] hover:text-white transition-colors font-medium underline underline-offset-4 decoration-dotted"
            aria-label="Book online or contact JMS Tech to check today's availability"
          >
            Book online
          </a>{' '}
          to check today&apos;s availability.
        </>
      ),
    },
    {
      question: "What if you can't fix it?",
      answer: (
        <>
          If we can’t find a solution within the first 30 minutes, you won’t be charged a diagnosis fee(
          <button
            onClick={() => setShowTerms(true)}
            aria-label="View diagnostic policy terms and conditions"
            className="text-[#2CB6C4] hover:text-white transition-colors font-medium focus:outline-none underline underline-offset-4 decoration-dotted"
          >
            conditions apply
          </button>
          ). We're confident in our ability to resolve most IT problems during the first visit.
        </>
      ),
    },
    {
      question: 'How long does a visit take?',
      answer:
        'Most home IT issues are resolved in 30–90 minutes. If parts are required, we’ll quote and schedule a follow-up. Common tasks like email setup, printer fixes, and backups are often done within an hour - either on-site or remotely.',
    },
    {
      question: 'Do you back up my photos?',
      answer: 'Yes. We offer photo and file backup services, and can also set up automated cloud backups for peace of mind. We’ll even show you how to check that your files are safe.',
    },
    {
      question: 'Which areas do you cover?',
      answer: "We serve Newcastle and surrounding suburbs, including Mayfield, Wallsend, Warners Bay, etc. If you're not sure we cover your area, give us a quick call.",
    },
    {
      question: 'How do you handle my data and passwords?',
      answer:
        "Your privacy is important to us. We only access the data you approve, and follow secure IT support practices at all times. We can also help set up password managers and data protection tools to keep your information safe.",
    },
    {
      question: 'Do you repair both Macs and PCs?',
      answer:
        'Yes – we repair all major brands, including Windows laptops, desktops, and Apple Macs. Whether it’s a software issue, hardware fault, or something unusual, we can help.',
    },
    {
      question: 'Can you fix Wi-Fi and internet issues?',
      answer:
        'Definitely. We troubleshoot home Wi-Fi problems, dead zones, slow internet, and router setup. We’ll make sure every room gets solid, stable coverage.',
    },
    {
      question: 'Do you offer remote support?',
      answer:
        'Yes. For many issues – like email problems, software glitches, or slow computers – we can provide remote IT support quickly and securely all around Australia.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <section className="py-8 bg-gradient-to-b from-[#0e3e4c] via-[#0d3745] to-[#0d3745] px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                    activeIndex === index ? 'bg-[#0d3745]' : 'bg-[#0e3e4c]'
                  } hover:bg-[#0d3745] transition-colors duration-200`}
                  onClick={() => toggleFAQ(index)}
                  aria-label={`Toggle FAQ question: ${faq.question}`}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-white transform transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Modal */}
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
              <p>
                <strong>No Diagnosis, No Charge:</strong> If we can't reasonably diagnose in the first 30 minutes and
                you stop there, no diagnostic fee.
                <br />
                If you choose to continue and a diagnosis is later reached, all time (incl. the first 30 min) is
                billable.
                <br />
                Excludes travel/parking/after-hours; other reasonable exclusions apply (e.g., no credentials,
                intermittent faults, third-party dependencies).
              </p>

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
    </div>
  );
};

export default FAQ;
