import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: "How does your agency structure timelines for standard design and build campaigns?",
    a: "Our typical project lasts between 4 to 8 weeks depending on structure. We begin with a 1-week Discovery and Strategy setup, followed by 2-3 weeks of deep visual prototyping. Once approved, our engineering squad moves the project into code, which requires another 2-3 weeks including thorough white-box security audits and frame rate diagnostics."
  },
  {
    q: "Do we have direct access to designers and developers, or do we route through a PM?",
    a: "We believe project managers create communication lag and creative dilution. At Kronos, you work directly with our principal designers and technical architects. We run a highly streamlined, zero-overhead Slack hotline to ensure complete, frictionless creative alignment."
  },
  {
    q: "Are your layouts fully custom, or do you use ready-made Webflow/WordPress presets?",
    a: "We are strictly against templates. Every single pixel, layout flow, and React component we ship is custom-engineered from a clean canvas. We code everything natively using React, Vite, and Tailwind CSS to guarantee maximum fluid speeds and pure design sovereignty."
  },
  {
    q: "How does the AI Automation service work, and how secure is our proprietary data?",
    a: "We develop custom server bridges to high-end generative models like Google's Gemini SDK. All keys, training sets, and pipeline queries are hosted inside isolated, encrypted secure vaults. Your proprietary commercial data never exits these vaults and is never shared with third-party public models."
  },
  {
    q: "What guarantees do you offer regarding website performance, SEO index, and speed?",
    a: "We build our files with type stripping, asset bundles, and image-free static layers. We guarantee your application scores 95+ on Google Lighthouse diagnostics. We also embed schema.org structural layouts, metadata definitions, and semantic code structures to maximize your search engine ranking."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // CRITICAL INQUIRIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase">
            Frequently Asked Questions<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white/[0.01] border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors duration-300 uppercase">
                    {faq.q}
                  </span>
                  
                  {/* Plus/Minus Morph Indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-red-600 border-red-500 text-white' 
                      : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer block with smooth framer-motion height expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-white/10 pt-6 text-sm md:text-base text-white/60 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions cta */}
        <div className="text-center mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.01] p-6 rounded-xl border border-white/10">
          <p className="text-sm text-white/50 font-light text-left">
            Have a custom, highly technical project or need custom pricing integrations? Let&apos;s talk.
          </p>
          <button
            id="faq-cta-contact"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase rounded-lg flex items-center gap-2 shrink-0 transition-all duration-300 active:scale-95 shadow-lg shadow-red-600/10"
          >
            DISCUSS PROJECT <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
