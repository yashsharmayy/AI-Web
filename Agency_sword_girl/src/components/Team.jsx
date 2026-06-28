import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Sparkles } from 'lucide-react';

const leaders = [
  {
    name: 'Viktor Vance',
    role: 'Principal Creative Director',
    initials: 'VV',
    desc: 'Former design lead at Apple. Obsessed with Swiss grids, high-contrast layouts, and typographic rhythm.',
    social: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Sasha Petrova',
    role: 'Chief Technical Architect',
    initials: 'SP',
    desc: 'Bespoke canvas developer and system engineer. Specializes in building lightning-fast WebGL rendering engines.',
    social: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Kaito Sato',
    role: 'Head of Motion & VFX',
    initials: 'KS',
    desc: 'CGI compositor and animation expert. Spends days adjusting transition curves and physics-based flows.',
    social: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Nadia El-Amin',
    role: 'AI & Cognitive Specialist',
    initials: 'NE',
    desc: 'Machine learning bridges engineer. Integrates Gemini reasoning API systems directly into business apps.',
    social: { twitter: '#', github: '#', linkedin: '#' }
  }
];

export default function Team() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="team" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Abstract radial ambient glow */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-4">
            // COLLECTIVE OF RENEGADES
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            The creative renegades crafting the future<span className="text-red-500">.</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mt-6">
            We are a compact, battle-tested group of specialists. No overhead, no administrative layers. Just pure elite expertise.
          </p>
        </div>

        {/* Team Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              id={`team-card-${idx}`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/[0.01] border border-white/5 hover:border-red-500/25 p-8 rounded-3xl relative overflow-hidden transition-all duration-500 group flex flex-col justify-between cursor-pointer"
            >
              {/* Background ambient lighting */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-red-600/5 group-hover:bg-red-600/10 rounded-full blur-2xl transition-all duration-500" />

              <div>
                {/* Immersive CSS Initials Frame (replacing broken images) */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-red-600 via-red-950 to-black p-[1.5px] mb-6 flex items-center justify-center shadow-lg relative overflow-hidden">
                  {/* Internal rotating subtle neon effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent animate-pulse" />
                  
                  <div className="w-full h-full rounded-2xl bg-[#050506] flex items-center justify-center text-white font-mono font-black text-2xl relative z-10">
                    {leader.initials}
                  </div>
                  
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 border border-black shadow-[0_0_8px_rgba(239,68,68,1)]" />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                  {leader.name}
                </h3>
                <span className="text-xs text-red-500 font-mono uppercase tracking-widest block mt-1.5 mb-4">
                  {leader.role}
                </span>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {leader.desc}
                </p>
              </div>

              {/* Social profile connections */}
              <div className="flex gap-4 border-t border-white/5 pt-6 mt-auto">
                <a
                  id={`team-social-twt-${idx}`}
                  href={leader.social.twitter}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/15 hover:border-red-500/30 border border-transparent transition-all duration-300"
                  aria-label={`${leader.name} Twitter profile`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  id={`team-social-git-${idx}`}
                  href={leader.social.github}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/15 hover:border-red-500/30 border border-transparent transition-all duration-300"
                  aria-label={`${leader.name} GitHub profile`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id={`team-social-lnk-${idx}`}
                  href={leader.social.linkedin}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600/15 hover:border-red-500/30 border border-transparent transition-all duration-300"
                  aria-label={`${leader.name} LinkedIn profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
