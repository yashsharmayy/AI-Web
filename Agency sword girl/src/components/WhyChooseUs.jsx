import { motion } from 'motion/react';
import { Award, Zap, HeartHandshake, Eye, ShieldCheck, Flame } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Aesthetics',
    description: 'We do not build generic visual layouts. Our work is crafted to win accolades, earn user trust, and command premium authority inside your industry.'
  },
  {
    icon: Zap,
    title: 'Pure Performance Speeds',
    description: 'Bespoke front-end structures and stripped-down script assets ensure loading times under 0.5s. Fast applications lead to 60% higher conversion rates.'
  },
  {
    icon: HeartHandshake,
    title: 'Radical Collaboration',
    description: 'You gain direct access to our core architects. No project managers, no communication lag, and no friction. Just pure creative alignment.'
  },
  {
    icon: Eye,
    title: 'Unfailing Precision',
    description: 'Every layout border, scroll transition, and typography margin is polished down to the pixel. We treat digital design as a high-end physical craft.'
  },
  {
    icon: ShieldCheck,
    title: 'Durable Security Standards',
    description: 'Our system architectures undergo systematic white-box testing. We secure your endpoints with isolated microservices and robust cloud firewalls.'
  },
  {
    icon: Flame,
    title: 'Continuous Disruption',
    description: 'We do not let you stagnate. We proactively suggest design upgrades, automated integrations, and visual updates to keep you ahead of competitors.'
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background radial crimson spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // UNCOMPROMISING STANDARDS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
            Why visionary brands choose Kronos over standard options<span className="text-red-500">.</span>
          </h2>
          <p className="text-white/50 font-light text-base md:text-lg leading-relaxed mt-6">
            We are built for founders who refuse the ordinary. We merge elite craft discipline with high-velocity engineering.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              id={`why-card-${idx}`}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: 'rgba(239, 68, 68, 0.5)' }}
              className="bg-white/[0.01] border border-white/10 hover:border-red-500/50 p-8 rounded-xl relative overflow-hidden transition-all duration-500 group cursor-default"
            >
              {/* Subtle back illumination */}
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-red-600/5 group-hover:bg-red-600/10 rounded-full blur-2xl transition-all duration-500" />

              {/* Icon Container - Sleek and sharp */}
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-lg mb-6 text-gray-300 group-hover:text-red-500 group-hover:bg-red-600/10 group-hover:border-red-500/30 transition-all duration-500">
                <item.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Details */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300 uppercase">
                {item.title}
              </h3>
              <p className="text-white/50 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
