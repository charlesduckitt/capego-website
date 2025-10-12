import { Link } from 'react-router-dom';
import { Shield, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Uncompromising Safety',
      description: 'Every Cape Go vehicle is equipped with a physical in-car security module as standard. This system includes GPS with live tracking, a forward-facing camera, and an integrated panic button. Unlike app-only features, our alerts are linked directly to a network of local private security firms, ensuring rapid-response dispatch when it matters most.',
    },
    {
      icon: Users,
      title: 'Vetted & Trusted',
      description: 'We reject the inadequate "self-vetting" model used by international competitors. Every Cape Go driver and vehicle must pass a rigorous, in-person verification process at our dedicated local vetting and inspection center. This includes comprehensive background checks, driver testing, and thorough vehicle safety and licensing inspections to build a network grounded in real-world trust.',
    },
    {
      icon: TrendingUp,
      title: 'Empowering Local Economy',
      description: 'We believe a transport service should enrich its community, not drain it. Our fairer fee structure ensures drivers earn a sustainable living, a stark contrast to the R400 they might make after 25+ trips with other apps. As a South African-owned company, all revenue and investment stays within the country, strengthening our regional economy rather than bleeding capital overseas.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                A Safer Ride. <br />
                <span className="text-gradient">A Fairer Journey.</span> <br />
                A Truly South African Service.
              </h1>
              <p className="text-xl md:text-2xl text-[#B0CEE3] mb-8 leading-relaxed">
                Moving beyond a landscape of fear and economic exploitation to build a transport network you can finally trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[#d54f15] transition-colors"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  to="/solution"
                  className="neomorph-button px-8 py-4 text-[#B0CEE3] font-semibold rounded-lg inline-flex items-center justify-center hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="neomorph p-4 rounded-2xl"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/api/placeholder/800/600" 
                alt="Cape Town cityscape with modern ride-hailing vehicle featuring security technology" 
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* First Impression */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="neomorph p-8 md:p-12 rounded-2xl"
            {...fadeInUp}
          >
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              Navigating transport in Cape Town presents a daily set of challenges, from unpredictable safety to economic models that bleed value from our communities. In response, <span className="text-[#EB5E1F] font-semibold">Cape Go</span> was born—a revolutionary, locally-focused ride-hailing service built from the ground up on the core principles of safety, trust, and economic fairness. We are not just another app; we are a comprehensive solution designed by South Africans, for South Africans, to reclaim our streets and ensure every journey is secure and empowering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#42414A]/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <p className="text-lg text-[#B0CEE3] leading-relaxed">
              Cape Go represents a fundamental rethinking of ride-hailing, crafted specifically for the unique realities of our cities. Our central promise to both riders and drivers is simple: to provide an uncompromisingly safe and reliable service that simultaneously builds and retains value within our local economy. Every feature, from our in-car security technology to our driver vetting protocol, is a direct answer to the failures of the current market, creating a new standard of accountability and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            {...fadeInUp}
          >
            The Cape Go Difference: <span className="text-gradient">Our Core Pillars</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="neomorph p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#EB5E1F]/10">
                  <pillar.icon size={32} className="text-[#EB5E1F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                <p className="text-[#B0CEE3] leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="neomorph p-8 rounded-2xl"
              {...fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Ready for a Safer Ride?</h3>
              <p className="text-[#B0CEE3] mb-6 leading-relaxed">
                Download the app and travel with confidence. Find the official Cape Go app on your device's app store to experience a new standard in personal transport.
              </p>
              <Link
                to="/contact"
                className="neomorph-button px-6 py-3 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
              >
                Download App <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div 
              className="neomorph p-8 rounded-2xl"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Ready for a Fairer Deal?</h3>
              <p className="text-[#B0CEE3] mb-6 leading-relaxed">
                Join a platform that values your partnership. Visit our Driver Partnerships page to learn more about our industry-leading fee structure and in-person vetting process.
              </p>
              <Link
                to="/economic-impact"
                className="neomorph-button px-6 py-3 bg-[#46596D] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#3a4a5c] transition-colors"
              >
                Join as Driver <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#42414A]/20 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A Commitment to Our City
            </h2>
            <p className="text-xl text-[#B0CEE3] leading-relaxed mb-8">
              This is our promise: to knit together a transport fabric so slick, safe, and fair that you'll wonder how we ever survived without it. To understand why this change is so critical, we must first confront the crisis on our streets.
            </p>
            <Link
              to="/challenge"
              className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
            >
              Learn About The Challenge <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

