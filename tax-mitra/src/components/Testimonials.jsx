import React from "react";
import { Star, MessageSquare, Quote, Sparkles } from "lucide-react";
import { testimonialsData } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003D2B]/10 text-[#003D2B] text-xs font-black tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>CLIENT EXPERIENCES</span>
          </div>

          <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mb-3" />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003D2B] tracking-tight uppercase">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Real feedback from business owners, startup founders, and professionals who trust Tax Mitra with their ongoing compliance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F7F1] rounded-2xl p-6 border border-amber-200/70 hover:border-[#F4B72A] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group relative"
            >
              <Quote className="w-8 h-8 text-[#F4B72A]/40 mb-3" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F4B72A] text-[#F4B72A]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 pt-4 border-t border-amber-200/80">
                <h4 className="text-xs sm:text-sm font-black text-[#003D2B] uppercase">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-600 font-medium truncate">
                  {item.role}
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase">
                  <span className="text-[#07583F] font-semibold">{item.service}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
