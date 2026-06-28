import { motion } from 'motion/react';
import { ArrowUpRight, Code, Palette, Film, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'AETHER CRYPTO',
    category: 'Web Design & Brand Systems',
    description: 'An immersive cinematic trading terminal designed for digital asset conglomerates. Custom fluid dynamics, advanced canvas elements, and ultra-high-speed trading modules.',
    icon: Code,
    gradient: 'from-[#1a0b2e] via-[#0b0c10] to-[#E50914]/20',
    stats: { speed: '0.04s latency', awards: '3x Awwwards' },
    idCode: 'AET-26'
  },
  {
    title: 'VALKYRIE ENGINE',
    category: 'Motion & Visual Arts',
    description: 'A fully real-time audio synthesizer and visualizer framework built for professional creators. Translates acoustic frequencies into high-contrast vector flows on screen.',
    icon: Film,
    gradient: 'from-[#2b0c14] via-[#050506] to-[#ff2e44]/15',
    stats: { speed: '120fps physics', awards: 'FWA of the Month' },
    idCode: 'VAL-09'
  },
  {
    title: 'CYPHER SECURITY',
    category: 'AI Integration & UI/UX',
    description: 'Autonomous threat defense command deck powered by deep cognitive reasoning. Displays complex network structures and threat events via highly structured 3D trees.',
    icon: Smartphone,
    gradient: 'from-[#051122] via-[#080809] to-[#00f2fe]/10',
    stats: { speed: 'AI Auto-Mitigate', awards: 'CSSDA Best UI' },
    idCode: 'CYP-44'
  },
  {
    title: 'SOLARIS POWER',
    category: 'Full Stack Engineering',
    description: 'Global green energy telemetry platform monitoring real-time solar cell efficiency in 140 countries. High-performance charts, automated reports, and fluid spatial data visualizations.',
    icon: Palette,
    gradient: 'from-[#1c120c] via-[#080809] to-[#f39c12]/15',
    stats: { speed: '1.2B metrics/day', awards: 'Design SOTD' },
    idCode: 'SOL-55'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // SELECTED MASTERWORKS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase max-w-5xl">
            Designing experiences that rewrite industry guidelines<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Portfolio Staggered List */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                id={`project-row-${proj.idCode.toLowerCase()}`}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Project Immersive Visual Card - Sharp/Rounded-xl */}
                <motion.div
                  id={`project-visual-${idx}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-3/5 h-[400px] md:h-[500px] rounded-xl relative overflow-hidden group cursor-pointer border border-white/10"
                >
                  {/* Styled Mesh Gradient backdrop that simulates modern dashboard previews */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} transition-transform duration-700 ease-out group-hover:scale-105`} />
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Neon light beams moving in the background */}
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all duration-700" />
                  
                  {/* Interactive mock interface representing the website or application detail */}
                  <div className="absolute inset-12 border border-white/10 bg-black/40 rounded-lg backdrop-blur-md flex flex-col justify-between p-8 transition-all duration-500 group-hover:border-red-500/20 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">{proj.idCode} // COMMAND SYSTEM</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:bg-red-500/10 transition-colors">
                        <proj.icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Centered abstract graphics simulation */}
                    <div className="flex flex-col items-center justify-center space-y-3 py-4">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-red-500/30 animate-[spin_12s_linear_infinite] flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-red-500 tracking-[0.3em] uppercase">system online</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Interactive Lab Deck</span>
                      <span className="text-xs font-semibold text-white group-hover:text-red-500 transition-colors flex items-center gap-1.5">
                        VIEW METRICS <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Project Narrative Card */}
                <motion.div
                  id={`project-info-${idx}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-2/5 flex flex-col justify-center space-y-6"
                >
                  <span className="text-red-500 font-mono text-[10px] tracking-[0.2em] uppercase block">
                    {proj.category}
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                    {proj.title}
                  </h3>
                  
                  <p className="text-white/60 font-light text-base md:text-lg leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Project specific stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10 my-2">
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono block">PERFORMANCE SPEED</span>
                      <span className="text-sm font-semibold text-white mt-1 block">{proj.stats.speed}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono block">RECOGNITIONS</span>
                      <span className="text-sm font-semibold text-red-500 mt-1 block">{proj.stats.awards}</span>
                    </div>
                  </div>

                  <button
                    id={`project-btn-${proj.idCode.toLowerCase()}`}
                    className="self-start inline-flex items-center gap-2 group text-[11px] font-bold uppercase tracking-widest text-white/80 hover:text-white transition-all mt-2"
                  >
                    <span>DISSECT CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 text-red-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
