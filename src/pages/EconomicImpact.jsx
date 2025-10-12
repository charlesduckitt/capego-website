import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Home, Award, Target } from 'lucide-react';

const EconomicImpact = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Fairer Fee Structure',
      description: 'We have implemented a "fairer fee structure" that ensures drivers retain more of their earnings from every trip. This directly counters the exploitative model of competitors, where drivers can earn as little as R400 after more than 25 trips in a day.',
      color: 'bg-[#EB5E1F]/10',
      iconColor: 'text-[#EB5E1F]',
    },
    {
      icon: Award,
      title: 'Long-term Financial Stability',
      description: 'Beyond fair daily earnings, we offer long-term financial stability. The "Driver Reinvestment & Empowerment Programme" is a structured pathway designed to guide our partners from fair earnings toward asset ownership, creating a transparent model for sustainable financial independence.',
      color: 'bg-[#B0CEE3]/10',
      iconColor: 'text-[#B0CEE3]',
    },
    {
      icon: Home,
      title: 'Keeping Capital Local',
      description: 'Unlike international platforms that "leak value offshore," Cape Go is a proudly South African-owned and operated company. By retaining all earnings, fees, and investments within the country, Cape Go directly contributes to the regional economy.',
      color: 'bg-[#46596D]/20',
      iconColor: 'text-[#B0CEE3]',
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
            Economic Impact: <span className="text-gradient">A Fairer Deal</span>
          </h1>
          <p className="text-xl text-[#B0CEE3] leading-relaxed">
            For drivers and our city—building a local economic engine that empowers rather than exploits.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className="mb-20"
          {...fadeInUp}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Building a Local Economic Engine</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              A transport service cannot be truly successful if it undermines the financial well-being of its drivers and extracts wealth from its host city. Cape Go was built on a strategic, local-first economic model designed to do the opposite: empower our drivers, strengthen our communities, and create a sustainable economic engine that keeps value right here in South Africa.
            </p>
          </div>
        </motion.section>

        {/* Core Economic Principle */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="neomorph p-8 md:p-12 rounded-2xl text-center lg:text-left bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
              <TrendingUp size={64} className="text-[#EB5E1F] mx-auto lg:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Core Economic Principle
              </h2>
              <p className="text-2xl text-[#B0CEE3] font-semibold leading-relaxed">
                "Cape Go pays you more, and that money stays here."
              </p>
            </div>
            
            <motion.div 
              className="neomorph p-4 rounded-2xl"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="/api/placeholder/700/500" 
                alt="Happy Cape Go driver earning fair income with transparent fee structure" 
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="neomorph p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`neomorph-button w-16 h-16 rounded-full flex items-center justify-center mb-6 ${benefit.color}`}>
                  <benefit.icon size={32} className={benefit.iconColor} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-[#B0CEE3] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Empowering Drivers */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center bg-[#EB5E1F]/10">
                <Users size={32} className="text-[#EB5E1F]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Empowering Our Drivers</h2>
            </div>
            
            <div className="space-y-6">
              <div className="neomorph-inset p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">Fair Daily Earnings</h3>
                <p className="text-[#B0CEE3] leading-relaxed">
                  Our fairer fee structure ensures drivers retain more of their earnings from every trip. This directly counters the exploitative model of competitors, where drivers can earn as little as <span className="text-[#EB5E1F] font-semibold">R400 after more than 25 trips</span> in a day.
                </p>
              </div>

              <div className="neomorph-inset p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-white">Driver Reinvestment & Empowerment Programme</h3>
                <p className="text-[#B0CEE3] leading-relaxed">
                  A structured pathway designed to guide our partners from fair earnings toward <span className="text-white font-semibold">asset ownership</span>, creating a transparent model for sustainable financial independence and long-term wealth building.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Macroeconomic Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Macroeconomic Benefits</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-6">
              This structural difference has a significant macroeconomic benefit. By retaining all earnings, fees, and investments within the country, Cape Go directly contributes to the regional economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neomorph-inset p-6 rounded-xl">
                <Target size={32} className="text-[#EB5E1F] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Strengthening Communities</h3>
                <p className="text-[#B0CEE3] leading-relaxed">
                  Our approach strengthens local communities by keeping wealth circulating within South Africa rather than being extracted overseas.
                </p>
              </div>
              <div className="neomorph-inset p-6 rounded-xl">
                <TrendingUp size={32} className="text-[#B0CEE3] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Building Resilience</h3>
                <p className="text-[#B0CEE3] leading-relaxed">
                  We help build a more resilient, self-sufficient transport sector that is invested in the prosperity of South Africa.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Shared Prosperity, Sustainable Growth
            </h2>
            <p className="text-xl text-[#B0CEE3] leading-relaxed mb-8">
              Where others extract, we invest. Where others exploit, we empower. Our economic model is not an afterthought; it is a strategic advantage designed for the shared prosperity and long-term sustainability of our city. This creates a powerful and natural alignment with the goals of our public and regulatory partners.
            </p>
            <a
              href="/partnership"
              className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
            >
              Learn About Strategic Partnership
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EconomicImpact;

