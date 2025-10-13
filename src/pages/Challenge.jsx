import { motion } from "framer-motion";
import {
  AlertTriangle,
  DollarSign,
  TrendingDown,
  Shield,
  FileWarning,
} from "lucide-react";
import problem2 from "../assets/cgproblem2.webp";
import problem3 from "../assets/cgproblem3.webp";

const Challenge = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "The Safety Deficit",
      points: [
        "E-hailing drivers face constant threats of hijacking, robbery, and assault, with official warnings in place for crime hotspots such as Nyanga, Brown's Farm, and Phillipi.",
        "A University of Cape Town (UCT) study revealed a stark reality: most riders, particularly women, are reluctant to travel alone at night due to the high perceived risk of harm.",
        "The systemic failure of platform safety is so complete that drivers have been forced to create their own unofficial intelligence networks. They rely on \"entirely legitimate 'don't go there' WhatsApp warnings\" just to survive a shift, facing the risk of assault or hijacking to earn a living.",
      ],
    },
    {
      icon: DollarSign,
      title: "The Economic Drain",
      points: [
        'Global platforms like Uber, Bolt, and InDrive are designed to "bleed capital overseas," siphoning fees and profits out of the South African economy.',
        'This model places an immense burden on drivers, with many reporting they "make as little as R400 after 25+ trips a day."',
        "The consequence is a system that extracts wealth from the local economy while failing to provide a sustainable livelihood for the very drivers who power it.",
      ],
    },
    {
      icon: TrendingDown,
      title: "A System in Crisis",
      points: [
        "The backbone of the city's traditional transport system has collapsed, evidenced by a staggering 95% collapse in passenger rail ridership since 2012.",
        'Into this void, competitors have entered with woefully inadequate "self-vetting" protocols. This approach fails to build trust, but more importantly, it represents a dereliction of duty.',
        "As the Public Private Transport Association (PPTA) argues, customers rightly expect platforms to handle vetting—its absence is a fundamental failure to meet the market's most basic expectations of responsibility.",
      ],
    },
    {
      icon: FileWarning,
      title: "The Regulatory Void",
      points: [
        'Major industry bodies like the South African National Taxi Council (Santaco) are actively calling for "real regulation" to address the proliferation of unregulated operators and the serious safety risks they pose to commuters.',
        "The systemic failure of the current model is so apparent that major cities like Johannesburg are now being forced to write new rules to control the chaos—a clear admission that the status quo is broken and unsustainable.",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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
            The Challenge:{" "}
            <span className="text-gradient">Reclaiming Our Streets</span>
          </h1>
          <p className="text-xl text-[#B0CEE3] leading-relaxed">
            To build a genuine solution for Cape Town's transport needs, one
            must first honestly confront the multifaceted crisis that currently
            exists.
          </p>

          <motion.div
            className="neomorph p-4 rounded-2xl mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-4">
              <img
                src={problem2}
                alt="A visual representation of the safety deficit in Cape Town's transport."
                className="w-1/2 h-auto rounded-xl"
              />
              <img
                src={problem3}
                alt="Illustration of the economic drain from international ride-hailing apps."
                className="w-1/2 h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Crisis Definition */}
        <motion.section className="mb-20" {...fadeInUp}>
          <div className="neomorph p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Defining the Crisis
            </h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              The prevailing e-hailing and public transport landscape is defined
              by a deep-seated deficit in physical safety, a flawed economic
              model that extracts local wealth, and the systemic failure of
              traditional infrastructure. These are not isolated issues; they
              are interconnected failures that demand a comprehensive,
              purpose-built response.
            </p>
          </div>
        </motion.section>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="neomorph p-8 rounded-2xl"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="neomorph-button w-14 h-14 rounded-full flex items-center justify-center bg-[#EB5E1F]/10">
                  <challenge.icon size={28} className="text-[#EB5E1F]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {challenge.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {challenge.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EB5E1F] flex-shrink-0"></div>
                    <p className="text-[#B0CEE3] leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.section
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="neomorph p-8 md:p-12 rounded-2xl text-center bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
            <Shield size={48} className="text-[#EB5E1F] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              A System Beyond Repair
            </h2>
            <p className="text-xl text-[#B0CEE3] leading-relaxed mb-8">
              This toxic combination of physical danger, economic extraction,
              and regulatory failure is not a market in need of reform. It is a
              crisis. This is the crisis Cape Go was built to solve.
            </p>
            <a
              href="/solution"
              className="neomorph-button px-8 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center gap-2 hover:bg-[#d54f15] transition-colors"
            >
              Discover Our Solution
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Challenge;
