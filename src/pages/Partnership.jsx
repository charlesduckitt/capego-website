import { motion } from 'framer-motion';
import { Handshake, FileCheck, Target, Shield, Network, CheckCircle } from 'lucide-react';

const Partnership = () => {
  const visionAlignment = [
    {
      vision: 'Efficient Access',
      delivery: 'By providing a reliable, on-demand service with clearly identifiable vehicles, Cape Go improves physical mobility and connects people to economic opportunities, goods, and services across the city.',
    },
    {
      vision: 'Sustainability',
      delivery: 'Our local-first economic model creates financial sustainability for drivers and social sustainability for the community by retaining capital locally and building a resilient, self-sufficient transport network.',
    },
    {
      vision: 'Dignity',
      delivery: 'We deliver a transport system where every user can feel "secure, valued and respected." Our rigorous in-person vetting, comprehensive background checks, and advanced in-car security features ensure a journey defined by safety and professionalism.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          {...fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Strategic Partnership: <span className="text-gradient">Aligning with City Goals</span>
          </h1>
          <p className="text-xl text-[#B0CEE3] leading-relaxed">
            Building the future together through collaboration and shared vision.
          </p>
          
          <motion.div 
            className="neomorph p-4 rounded-2xl mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/api/placeholder/1200/400" 
              alt="Cape Town city officials and Cape Go representatives collaborating on integrated transport solutions" 
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className="mb-20"
          {...fadeInUp}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#EB5E1F]/10">
                <Handshake size={32} className="text-[#EB5E1F]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Building the Future, Together</h2>
            </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              A successful, modern transport network cannot be built in isolation. Cape Go is founded on the principle of collaboration, positioning ourselves as a dedicated partner to public authorities, regulatory bodies, and safety organizations. We are committed to working together to build a truly integrated, secure, and reliable mobility system that meets the ambitious goals set for Cape Town.
            </p>
          </div>
        </motion.section>

        {/* Future of Regulation */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#B0CEE3]/10">
                <FileCheck size={32} className="text-[#B0CEE3]" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Future of Regulation, Today</h2>
            </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-6">
              The e-hailing industry is moving toward greater oversight. With calls for regulation from bodies like Santaco and new rules being developed in Johannesburg, the direction is clear.
            </p>
            <div className="neomorph-inset p-6 rounded-xl">
              <p className="text-[#B0CEE3] leading-relaxed">
                Cape Go is not a problem waiting to be regulated; <span className="text-white font-semibold">we are the standard</span>. Our operational model was proactively designed to be the solution, offering a "ready-made response" to the industry's challenges. With our licensed, identified, and fully trackable fleet, we offer cities the model for what a well-regulated, responsible service looks like.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Supporting Cape Town's Vision */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Target size={64} className="text-[#EB5E1F] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-white">
              Supporting Cape Town's Vision
            </h2>
            <p className="text-xl text-[#B0CEE3] max-w-4xl mx-auto leading-relaxed">
              Our features and operational philosophy are not just aligned with the City of Cape Town's official Comprehensive Integrated Transport Plan (CITP)—we are the primary private-sector vehicle for delivering on it.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="neomorph p-8 rounded-2xl overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#42414A]">
                    <th className="text-left py-4 px-4 text-white font-semibold text-lg">City of Cape Town CITP Vision</th>
                    <th className="text-left py-4 px-4 text-white font-semibold text-lg">How Cape Go Delivers</th>
                  </tr>
                </thead>
                <tbody>
                  {visionAlignment.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-[#42414A]/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <td className="py-6 px-4 align-top">
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#EB5E1F] mt-1 flex-shrink-0" />
                          <span className="text-white font-semibold text-lg">{item.vision}</span>
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <p className="text-[#B0CEE3] leading-relaxed">{item.delivery}</p>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Network of Protection */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#46596D]/20">
                <Network size={32} className="text-[#B0CEE3]" />
              </div>
              <h2 className="text-3xl font-bold text-white">A Network of Protection</h2>
            </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-6">
              Our commitment to safety extends beyond our vehicles. The in-car panic button is not a standalone feature but a fully integrated component of a city-wide rapid response network.
            </p>
            <div className="neomorph-inset p-6 rounded-xl">
              <p className="text-[#B0CEE3] leading-relaxed">
                Through direct operational partnerships with local private security firms, we provide a tangible, immediate layer of protection for both drivers and riders, turning every vehicle into a <span className="text-white font-semibold">connected node in a city-wide safety ecosystem</span>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
            <Shield size={64} className="text-[#EB5E1F] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Your Partner for a Better Cape Town
            </h2>
            <p className="text-xl text-[#B0CEE3] leading-relaxed mb-8">
              Cape Go is more than a service provider; we are the essential partner for building a safer, more prosperous, and better-connected Cape Town. We invite public and private stakeholders to join us in shaping this future.
            </p>
            <a
              href="/contact"
              className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Partnership;

