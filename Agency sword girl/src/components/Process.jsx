import { motion } from 'motion/react';
import { Compass, ShieldAlert, Sparkles, CodeXml, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Compass,
    title: 'Discovery',
    subtitle: 'Extracting Core Ambition',
    description: 'We dive deep into your company DNA, market structure, and audience psychology. We expose hidden parameters, establish project guardrails, and outline creative goals before writing a single line of script.'
  },
  {
    num: '02',
    icon: ShieldAlert,
    title: 'Strategy',
    subtitle: 'The Blueprints of Disruption',
    description: 'We construct a bulletproof technical and design roadmap. By determining layouts, wireframe maps, interactions, and server schemas, we ensure the creative strategy aligns perfectly with business objectives.'
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'Design',
    subtitle: 'Cinematic Visual Engineering',
    description: 'Our digital sculptors craft high-end visual states, typography guidelines, and rich animations. We design gorgeous custom interfaces that command complete user focus.'
  },
  {
    num: '04',
    icon: CodeXml,
    title: 'Development',
    subtitle: 'Flawless High-Performance Build',
    description: 'We program your layouts with clean, modular React states and optimized CSS structures. Every script is validated for speeds exceeding performance requirements.'
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch',
    subtitle: 'Deployment & Dominance',
    description: 'We deploy the application using secure global containers. We monitor performance analytics, activate tracking, and ensure your system enters the digital market in complete victory.'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // OUR BLUEPRINT
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase max-w-5xl">
            Our disciplined system for absolute creative execution<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-12">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  id={`process-step-row-${idx}`}
                  className="relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0"
                >
                  {/* Left block */}
                  <div className={`w-full lg:w-1/2 flex items-center ${
                    isEven ? 'lg:justify-end lg:pr-20' : 'lg:order-2 lg:justify-start lg:pl-20'
                  }`}>
                    <motion.div
                      id={`process-card-${idx}`}
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-white/[0.01] border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300 w-full"
                    >
                      {/* Hover subtle glow */}
                      <div className="absolute -top-12 -left-12 w-36 h-36 bg-red-600/5 group-hover:bg-red-600/10 rounded-full blur-2xl transition-all duration-500" />

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-red-500 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-500 transition-colors duration-300 uppercase">
                        {step.title}
                      </h3>
                      <p className="text-white/60 font-light text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Timeline Badge (Absolute node) */}
                  <div className="absolute left-10 lg:left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-[#050505] border border-white/20 hover:border-red-500 flex items-center justify-center text-white font-mono text-xl font-bold cursor-pointer hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                    >
                      <span className="text-white/40 text-sm font-semibold group-hover:hidden">{step.num}</span>
                    </motion.div>
                    
                    {/* Tiny icon inside center badge */}
                    <div className="absolute mt-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white scale-0 hover:scale-100 transition-transform pointer-events-none">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right filler block on desktop to preserve spacing */}
                  <div className={`hidden lg:block lg:w-1/2 ${isEven ? 'lg:order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
