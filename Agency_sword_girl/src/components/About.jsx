import { motion } from 'motion/react';
import { Target, Eye, Sparkles, Trophy, Users, ShieldCheck } from 'lucide-react';

const achievements = [
  { icon: Trophy, number: '48', label: 'International Design Awards', suffix: '' },
  { icon: Users, number: '120', label: 'Global Brands Empowered', suffix: '+' },
  { icon: Sparkles, number: '850', label: 'Creative Projects Launched', suffix: '+' },
  { icon: ShieldCheck, number: '100', label: 'Quality Guarantee Retained', suffix: '%' }
];

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.1, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="about" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-b border-white/10">
      {/* Abstract Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-red-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // OUR MANIFESTO
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase max-w-5xl">
            We are architectural rebels, digital disrupters, and creative visionaries.
          </h2>
        </div>

        {/* Narrative & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 text-white/60 font-light text-lg leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">The Company Story</h3>
            <p>
              Founded in 2014, Kronos emerged from a simple realization: the digital landscape had become safe, sterile, and boring. We gathered a collective of world-class design renegades, technical architects, and performance directors to break the mold.
            </p>
            <p>
              We don&apos;t just follow guidelines or optimize for search boxes. We design for emotions, construct for longevity, and deploy for dominance. Over a decade later, our philosophy remains absolute: deliver experiences so visually exquisite and technically flawless they cannot be ignored.
            </p>
          </motion.div>

          {/* Mission and Vision Bento Grid with sharp corners for editorial layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              id="about-card-mission"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300"
            >
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/15 transition-colors" />
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-lg mb-6">
                <Target className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight mb-3">Our Mission</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                To disrupt standard expectations through elite digital artwork, robust technical architecture, and absolute creative execution that converts audiences into believers.
              </p>
            </motion.div>

            <motion.div
              id="about-card-vision"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="bg-white/[0.02] border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300"
            >
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/15 transition-colors" />
              <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-lg mb-6">
                <Eye className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight mb-3">Our Vision</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                To stand as the absolute global benchmark for creative digital excellence, where visual audacity merges with ultimate technical precision to craft the future of connection.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Stylized Cards with clean, sharp edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div
            id="about-visual-card-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="h-[350px] relative rounded-xl overflow-hidden group border border-white/10 cursor-pointer"
          >
            {/* Dark abstract gradient placeholder representing technical design */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#080808] to-[#1a080c] transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest block mb-2">// 01 / LABS</span>
              <h5 className="text-xl font-black text-white uppercase tracking-tight">THE CRAFT STATION</h5>
              <p className="text-xs text-white/60 font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Where pixels are carefully forged, colors are tested, and custom digital formulas are designed.
              </p>
            </div>
          </motion.div>

          <motion.div
            id="about-visual-card-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="h-[350px] relative rounded-xl overflow-hidden group border border-white/10 cursor-pointer"
          >
            {/* Dark abstract gradient placeholder representing creativity */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#080808] to-[#081220] transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest block mb-2">// 02 / EXPERIMENTS</span>
              <h5 className="text-xl font-black text-white uppercase tracking-tight">AUDACIOUS EXPERIMENTS</h5>
              <p className="text-xs text-white/60 font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pushing the frontiers of user interaction with real-time feedback loops and modern layout engineering.
              </p>
            </div>
          </motion.div>

          <motion.div
            id="about-visual-card-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="h-[350px] relative rounded-xl overflow-hidden group border border-white/10 cursor-pointer"
          >
            {/* Dark abstract gradient placeholder representing victory */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#080808] to-[#151518] transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest block mb-2">// 03 / FINISH</span>
              <h5 className="text-xl font-black text-white uppercase tracking-tight">THE CHAMPIONSHIP</h5>
              <p className="text-xs text-white/60 font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Award-winning outcomes built to dominate screen interactions and earn permanent Awwwards placements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-16 border-t border-white/10">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              id={`about-stat-box-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="space-y-4 group"
            >
              <div className="w-10 h-10 bg-white/[0.03] rounded-lg border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-4xl md:text-5xl font-black tracking-tight text-white block">
                  {item.number}{item.suffix}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest block leading-relaxed font-semibold font-mono">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
