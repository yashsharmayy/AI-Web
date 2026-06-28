import { motion } from 'motion/react';
import { Palette, Monitor, Code, MousePointerClick, Activity, Bot, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We construct timeless, cohesive visual worlds. From pristine logo marks to robust brand guidelines, we design the core DNA that makes your business unforgettable.',
    features: ['Logo Systems', 'Brand Strategy', 'Typography & Style Guides', 'Collateral Design']
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Cinematic layout composition meets modern screen storytelling. We construct websites that inspire, communicate, and captivate across every possible viewport.',
    features: ['Art Direction', 'Visual Layouts', 'Interactive Concepts', 'Responsive Prototyping']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Bespoke front-end engineering built with lightning speed and flawless rendering. We develop fast, secure, and infinitely scalable web platforms.',
    features: ['React & Next.js Platforms', 'Bespoke Animation Engine', 'Clean Backend API Integrations', 'Optimized SEO Solutions']
  },
  {
    icon: MousePointerClick,
    title: 'UI/UX Design',
    description: 'Deep psychology-driven wireframes combined with beautiful visual design. We remove friction and craft delightful, intuitive digital user pathways.',
    features: ['User Persona Mapping', 'Wireframing & Flow Design', 'High-Fidelity UI Systems', 'Usability Testing']
  },
  {
    icon: Activity,
    title: 'Motion Graphics',
    description: 'We bring static layouts to life. From gorgeous micro-interactions to custom 3D animations, we add cinematic feeling and rhythm to your brand touchpoints.',
    features: ['Framer Motion Art', 'SVG Line Animations', 'UI Transition Mechanics', 'VFX Background Elements']
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Harness the frontier of generative models. We integrate custom Gemini API solutions, agentic workflows, and automated microservices to speed up your workflows.',
    features: ['Gemini API Custom Bridges', 'Workflow Task Automation', 'Cognitive Text Summaries', 'Creative Assist Agents']
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
              // DISCIPLINES & SKILLS
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
              Elite creative capabilities, masterfully executed<span className="text-red-500">.</span>
            </h2>
          </div>
          <p className="text-white/50 font-light text-base md:text-lg max-w-sm mt-6 md:mt-0 leading-relaxed">
            We operate at the convergence of breathtaking digital design and robust high-performance programming.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={`service-card-${index}`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.01] border border-white/10 hover:border-red-600/50 p-8 rounded-xl transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/5 group-hover:bg-red-600/10 rounded-full blur-3xl transition-all duration-500" />
              
              <div>
                {/* Header Icon & Action Arrow */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-500 text-gray-300">
                    <service.icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] opacity-0 group-hover:opacity-100 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-red-500 transition-colors duration-300 uppercase">
                  {service.title}
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Sub-features checklist */}
              <div className="border-t border-white/10 pt-6 mt-auto">
                <ul className="grid grid-cols-1 gap-2">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] text-white/40 font-mono tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-none" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
