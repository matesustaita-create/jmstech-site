import React from 'react';
import {
  Award,
  Users,
  Clock,
  MapPin,
  Shield,
  FileText,
  Zap,
  UserCheck,
  Search,
  BadgeCheck,
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '1,000+', label: 'Jobs Completed' },
    { icon: Clock, value: '10+', label: 'Years of Experience' },
    { icon: Award, value: 'First-time Fix', label: 'Most jobs resolved on first visit' },
    { icon: MapPin, value: 'Local', label: 'Newcastle-based, remote support AU-wide' },
  ];

  const [showTerms, setShowTerms] = React.useState(false);

  return (
    <section
      id="about"
      className="relative py-8 bg-gradient-to-b from-[#0c2f3a] via-[#0d3745] to-[#0e3e4c]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-1/3 right-0 md:-right-20 w-64 md:w-80 h-80 bg-[#2CB6C4] rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About JMS Tech
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
            Tech Support You Can Trust – Locally Owned &amp; Operated in Newcastle
          </p>
          <div className="w-24 h-1.5 bg-[#2CB6C4] mx-auto rounded-full" />
        </div>

        {/* One-column content */}
        <div className="space-y-8">
          {/* About text + core benefits */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-6xl mx-auto">
              We&apos;re an owner-operated, Newcastle-based computer repair and IT support provider, helping homes
              and small businesses with computer fixes, data recovery, web projects, and more. Whether onsite,
              in-workshop, or via secure remote support AU-wide, we deliver fast, reliable tech help with 10+ years
              of experience and over 1,000 successful jobs completed.
            </p>

            {/* Three feature icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-3">
                  <Award className="text-cyan-600" size={24} />
                </div>
                <h4 className="font-semibold text-white mt-1">Transparent estimates</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Clear options and pricing before parts or extras.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-3">
                  <Clock className="text-cyan-600" size={24} />
                </div>
                <h4 className="font-semibold text-white mt-1">Flexible delivery</h4>
                <p className="text-sm text-gray-300 mt-1">
                  On-site, in-workshop, or secure remote around Australia.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-3">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
                <h4 className="font-semibold text-white mt-1">Local &amp; personal</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Newcastle-based with friendly, respectful service.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic text-center">
              30-day workmanship warranty and &quot;no diagnosis, no charge&quot; (first 30 min).{' '}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-[#2CB6C4] hover:text-white font-medium underline underline-offset-4 decoration-dotted"
                aria-label="View diagnostic policy terms and conditions"
              >
                See Terms
              </button>
              .
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl text-center bg-[#0f3a47]/90 border border-[#2CB6C4]/20 shadow-md hover:border-[#2CB6C4]/40 hover:shadow-lg hover:shadow-[#2CB6C4]/20 transition-all duration-300"
                >
                  <div className="bg-[#2CB6C4]/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <Icon className="text-[#2CB6C4]" size={22} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Why choose us */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-[#2CB6C4]/20">
            <h3 className="font-bold text-white text-xl mb-6 text-center">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <UserCheck className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Owner-operated</p>
                  <p className="text-sm text-gray-300">
                    Deal directly with the technician who stands behind the work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <Search className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Diagnose first</p>
                  <p className="text-sm text-gray-300">
                    Clear findings and options before you commit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <Shield className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Data privacy</p>
                  <p className="text-sm text-gray-300">
                    Access only with your permission using secure tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <FileText className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Work summary</p>
                  <p className="text-sm text-gray-300">
                    Simple, documented summary after every visit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <BadgeCheck className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Certified &amp; insured</p>
                  <p className="text-sm text-gray-300">
                    Up-to-date skills, tidy workmanship, and full insurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100 flex-shrink-0">
                  <Zap className="text-cyan-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Same-day service</p>
                  <p className="text-sm text-gray-300">
                    When available, especially if you book early.
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* CTA block */}
            <div className="pt-1">
            <p className="text-center text-xl font-semibold mb-2 text-white">
              Need expert help today?
            </p>
            <p className="text-center text-sm mb-4 text-gray-300">
              Book your tech visit in just a few clicks.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                aria-label="Book a home visit with JMS Tech from the About section"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-[#2CB6C4] to-[#1a8a96] text-white hover:text-white shadow-lg hover:shadow-[#2CB6C4]/40 hover:from-[#2CB6C4] hover:to-[#2CB6C4]/90 transition-all duration-300 hover:scale-105"
              >
                Book a Home Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Terms Modal - Diagnostic Policy */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              type="button"
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close terms"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Diagnostic Policy</h2>

            <div className="prose prose-sm text-gray-700">
              <p>
                <strong>No Diagnosis, No Charge:</strong> If we can&apos;t reasonably diagnose in the first 30 minutes
                and you stop there, no diagnostic fee.
                <br />
                If you choose to continue and a diagnosis is later reached, all time (including the first 30 minutes) is
                billable.
                <br />
                Excludes travel, parking, after-hours, and other reasonable exclusions (for example: no credentials,
                intermittent faults, or third-party dependencies).
              </p>

              <p className="text-sm text-gray-500 mt-6">Last updated: September 2025</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
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

export default About;
