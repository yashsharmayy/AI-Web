import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { faqsData } from "../data/faqs";

export default function FAQ({ customFaqs, title = "FREQUENTLY ASKED QUESTIONS", subtitle = "Got questions about tax filing, GST, or business compliance? Find straightforward answers below." }) {
  const list = customFaqs || faqsData;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F8F7F1] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003D2B]/10 text-[#003D2B] text-xs font-black tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>KNOWLEDGE BASE</span>
          </div>

          <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mb-3" />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003D2B] tracking-tight uppercase">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {list.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const questionText = faq.question || faq.q;
            const answerText = faq.answer || faq.a;

            return (
              <div
                key={faq.id || idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B72A]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {questionText}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#003D2B] text-[#F4B72A] rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{answerText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#F4B72A]/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-black text-[#003D2B] uppercase">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our consultants answer in under 15 minutes on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20have%20a%20question%20regarding%20tax%20and%20compliance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#003D2B] hover:bg-[#07583F] text-[#F4B72A] font-extrabold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-xs border border-[#F4B72A]"
          >
            Ask On WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
