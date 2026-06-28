import { motion } from 'motion/react';

const partners = [
  'AETHER CRYPTO',
  'VALKYRIE SYNTHETICS',
  'SOLARIS POWER',
  'CYPHER SECURITY',
  'MERIDIAN LABS',
  'NOVUS SPACE',
  'HYPERION COGNITIVE',
  'SPECTER VENTURES'
];

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="bg-[#050505]/85 py-16 overflow-hidden border-t border-b border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase block text-center">
          TRUSTED BY LEADERS OF THE DIGITAL CONQUEST // GLOBAL ALLIANCES
        </span>
      </div>

      {/* Marquee Wrapper with fading edges */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left & Right masking gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505]/90 to-transparent z-10 pointer-events-none" />

        {/* CSS Marquee Animation track */}
        <div className="flex whitespace-nowrap gap-16 md:gap-24 animate-marquee py-4">
          {/* Double content to ensure seamless loop */}
          {[...Array(4)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex gap-16 md:gap-24 shrink-0 items-center">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  id={`marquee-partner-${loopIdx}-${idx}`}
                  className="text-xl md:text-3xl font-black text-white/20 hover:text-red-500 transition-colors cursor-default tracking-widest font-mono duration-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
