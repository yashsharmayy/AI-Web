import { motion } from 'motion/react';
import { Check, Flame, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'STARTER',
    price: '$4,500',
    frequency: '/project start',
    desc: 'Perfect for fast-moving startups needing highly polished landing experiences and fundamental brand structures.',
    features: [
      'Bespoke Landing Page Art Direction',
      '3 Dedicated Design Concept Directions',
      'Standard Interactive Layout Animations',
      'Custom SVG Logo Mark Systems',
      '2 Weeks Post-Launch Technical Support',
      '60fps Frame Rendering Guarantee'
    ],
    highlight: false,
    cta: 'START REVOLUTION',
    id: 'starter'
  },
  {
    name: 'PROFESSIONAL',
    price: '$9,500',
    frequency: '/project start',
    desc: 'Our flagship tier for ambitious scale-ups wanting an absolute, comprehensive transformation of their screen footprint.',
    features: [
      'Full Multi-Page UI/UX Architecture',
      'Custom Motion Synthesizers & SVGs',
      'Bespoke React + Framer Motion Engine',
      'Complete Brand Book & Type Guidelines',
      'Advanced Gemini API Cognitive Integrations',
      '6 Months Priority SLA Support',
      'Awwwards Submission Coordination'
    ],
    highlight: true,
    cta: 'DOMINATE THE MARKET',
    id: 'professional'
  },
  {
    name: 'ENTERPRISE',
    price: '$18,000+',
    frequency: '/project start',
    desc: 'Tailor-made for global conglomerates requiring dedicated developers, 3D WebGL scenes, and continuous generative AI models.',
    features: [
      'Infinite Custom Component States',
      'High-Performance WebGL & Canvas Graphics',
      'Bespoke Database Schema Choreography',
      'Fully Isolated AI Agents & Automation',
      'Dedicated Team of 4 Dev/Design Renegades',
      '24/7 Unlimited Slack Hot-Line Support',
      'Durable Zero-Latency Scale Guarantee'
    ],
    highlight: false,
    cta: 'COMMISSION COHORT',
    id: 'enterprise'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // CRITICAL INVESTMENTS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
            Clear, uncompromising pricing schemes<span className="text-red-500">.</span>
          </h2>
          <p className="text-white/50 font-light text-base md:text-lg mt-6 leading-relaxed">
            No hidden costs, no variable multipliers. We invest pure creative expertise to deliver elite results that generate commercial authority.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              id={`pricing-card-${tier.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`p-8 md:p-10 rounded-xl relative flex flex-col justify-between transition-all duration-500 ${
                tier.highlight
                  ? 'bg-white/[0.02] border-2 border-red-600 shadow-[0_0_30px_rgba(239,68,68,0.15)] z-10'
                  : 'bg-white/[0.01] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Highlight badge indicator - Sharp and boxy */}
              {tier.highlight && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-red-600 text-white font-mono text-[9px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-none uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  <Flame className="w-3 h-3 animate-pulse" />
                  RECOMMENDED SCHEME
                </div>
              )}

              {/* Header Details */}
              <div>
                <span className="text-[10px] text-red-500 font-mono tracking-[0.2em] uppercase font-bold block mb-2">
                  {tier.name}
                </span>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                    {tier.price}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">
                    {tier.frequency}
                  </span>
                </div>

                <p className="text-white/60 font-light text-sm leading-relaxed mb-8 border-b border-white/10 pb-8">
                  {tier.desc}
                </p>

                {/* Features Checklist */}
                <div className="space-y-4">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                    INCLUDED SERVICES:
                  </span>
                  <ul className="space-y-3.5">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-white/70 font-mono uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-none shrink-0 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-10 border-t border-white/10">
                <button
                  id={`pricing-btn-${tier.id}`}
                  className={`w-full py-4 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 ${
                    tier.highlight
                      ? 'bg-red-600 hover:bg-red-700 text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
