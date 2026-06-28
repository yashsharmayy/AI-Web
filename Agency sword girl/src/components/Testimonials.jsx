import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Kronos was a revelation. They didn't just build a web platform; they redesigned our entire business narrative. Our user engagement has risen by 320% since launching the new Aether interface.",
    author: "Elena Rostova",
    role: "Director of Brand Innovation",
    company: "Aether Trading Group",
    initials: "ER",
    stars: 5,
    glow: "shadow-red-600/10"
  },
  {
    quote: "The Valkyrie synthesizer interface is a mechanical marvel. The visual representation of acoustics is fluid and fast, defying everything other design shops told us was possible. Simply unmatched.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Valkyrie Synthetics",
    initials: "MV",
    stars: 5,
    glow: "shadow-red-600/10"
  },
  {
    quote: "Kronos possesses a rare combination of pure visual audacity and perfect engineering discipline. They shipped the Solaris Solar deck ahead of schedule and with metrics exceeding our original specifications.",
    author: "Siddharth Mehta",
    role: "VP of Digital Products",
    company: "Solaris Telemetry",
    initials: "SM",
    stars: 5,
    glow: "shadow-red-600/10"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Autoplay cycle of 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // CLIENT NARRATIVES
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase max-w-5xl">
            In our clients&apos; own words<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Big Testimonial Box */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-lg">
                  <Quote className="w-6 h-6 text-red-500" />
                </div>
                
                {/* 5-Star Indicator */}
                <div className="flex gap-1" id={`testimonial-stars-${currentIndex}`}>
                  {[...Array(testimonials[currentIndex].stars)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
                  ))}
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-xl md:text-3xl font-light tracking-tight text-white/90 leading-relaxed md:leading-snug max-w-5xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Client Info Grid */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {/* Minimal Luxury Circular Initials Box - Editorial monochrome style */}
                <div className="w-12 h-12 rounded-full border border-white/20 p-[1.5px] bg-white/5 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center font-mono font-bold text-white text-sm">
                    {testimonials[currentIndex].initials}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-[10px] text-red-500 font-mono uppercase tracking-[0.15em] mt-0.5">
                    {testimonials[currentIndex].role} &mdash; <span className="text-white/40 font-sans font-normal lowercase">{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-6 mt-12 md:mt-16">
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 active:scale-90"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-red-600' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 active:scale-90"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
