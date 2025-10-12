import { motion } from 'framer-motion';
import { Shield, Camera, MapPin, Bell, CheckCircle, Eye, Award } from 'lucide-react';

const Solution = () => {
  const securityFeatures = [
    {
      icon: MapPin,
      title: 'GPS & Live Tracking',
      description: 'All journeys are tracked in real-time, ensuring constant monitoring and accountability from start to finish.',
    },
    {
      icon: Camera,
      title: 'Forward-Facing Camera',
      description: 'Acting as both a deterrent and an impartial witness, the in-car camera is connected to our rapid response network for immediate verification of incidents.',
    },
    {
      icon: Bell,
      title: 'Integrated Panic Button',
      description: 'This is a physical button, not a software feature. It provides a direct link to local private security networks. When activated, it ensures immediate dispatch of the nearest rapid response unit, providing a tangible layer of security for both drivers and riders.',
    },
  ];

  const vettingSteps = [
    {
      icon: CheckCircle,
      title: 'Driver Testing & Background Checks',
      description: 'Comprehensive verification of every driver\'s history, credentials, and suitability.',
    },
    {
      icon: Award,
      title: 'Vehicle Safety & Licensing Inspections',
      description: 'A thorough inspection to ensure each vehicle meets stringent safety and roadworthiness standards.',
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
            Our Solution: <span className="text-gradient">The Cape Go Standard</span>
          </h1>
          <p className="text-xl text-[#B0CEE3] leading-relaxed">
            A purpose-built answer to Cape Town's transport crisis, engineered from the ground up.
          </p>
        </motion.div>

        {/* Purpose-Built Answer */}
        <motion.section 
          className="mb-20"
          {...fadeInUp}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">A Purpose-Built Answer</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-4">
              Cape Go was not designed to simply compete within a broken system; it was engineered to solve the transport crisis from the ground up. We exist because the city's traditional transport backbone—passenger rail—has collapsed, leaving citizens stranded and creating a vacuum that dangerous, unregulated services have filled.
            </p>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              Every component of our service is a direct, deliberate response to a real-world failure, creating a new, non-negotiable standard for safety, legitimacy, and trust on Cape Town's roads.
            </p>
          </div>
        </motion.section>

        {/* Fortress on Wheels */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <Shield size={64} className="text-[#EB5E1F] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-white">
              Fortress on Wheels: Prioritizing Physical Security
            </h2>
            <p className="text-xl text-[#B0CEE3] max-w-4xl mx-auto leading-relaxed">
              Every Cape Go vehicle is equipped with a standardized security module—a fortress on wheels providing "quasi-high-tech vigilante-level assurance." This isn't a sexy feature; it's a street-level necessity.
            </p>
            
            <motion.div 
              className="neomorph p-4 rounded-2xl mt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/api/placeholder/1000/600" 
                alt="Cape Go vehicle interior showing GPS tracking, forward-facing camera, and panic button security features" 
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="neomorph p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#EB5E1F]/10">
                  <feature.icon size={32} className="text-[#EB5E1F]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-[#B0CEE3] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Protocol */}
        <section className="mb-20">
          <motion.div 
            className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto"
            {...fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#EB5E1F]/10">
                <CheckCircle size={32} className="text-[#EB5E1F]" />
              </div>
              <h2 className="text-3xl font-bold text-white">The Trust Protocol: Vetting Drivers and Vehicles</h2>
            </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
              Trust is not assumed; it is earned through a rigorous and transparent verification process that is unparalleled in the South African market.
            </p>
            
            <div className="neomorph-inset p-6 rounded-xl mb-8">
              <p className="text-[#B0CEE3] leading-relaxed">
                At the heart of our system is a <span className="text-white font-semibold">local vetting and inspection center</span>, a single, centralized hub where we personally verify every driver and vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {vettingSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="neomorph-button w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#46596D]/20">
                    <step.icon size={24} className="text-[#B0CEE3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-[#B0CEE3]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              This protocol stands in stark contrast to the weak "self-vetting" model used by competitors, demonstrating Cape Go's absolute commitment to passenger and driver safety.
            </p>
          </motion.div>
        </section>

        {/* Designed for Cape Town */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#EB5E1F]/10">
                <Eye size={32} className="text-[#EB5E1F]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Designed for Cape Town: Visibility and Legitimacy</h2>
            </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-6">
              We believe a safe ride should be instantly recognizable. The strategic design of our vehicles provides clear, visual assurance to riders and the public.
            </p>
            <div className="neomorph-inset p-6 rounded-xl">
              <p className="text-[#B0CEE3] leading-relaxed">
                A simple but powerful feature is the <span className="text-white font-semibold">LED "available/open" indicator</span> on every vehicle. This transforms the car from an anonymous private vehicle into an identifiable, legitimate taxi, signaling to pedestrians and potential riders that it is a safe, vetted part of the Cape Go network.
              </p>
            </div>
          </div>
        </motion.section>

        {/* New Benchmark */}
        <motion.section 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A New Benchmark for Transport
            </h2>
            <p className="text-xl text-[#B0CEE3] leading-relaxed mb-8">
              By integrating physical security, uncompromising vetting, and clear public visibility, Cape Go establishes a new benchmark for what a ride-hailing service must be. This new standard of safety and trust is the foundation upon which we build a fairer, more sustainable economic model for our city.
            </p>
            <a
              href="/economic-impact"
              className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
            >
              Explore Economic Impact
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Solution;

