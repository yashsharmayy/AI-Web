import React from "react";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  IndianRupee, 
  Headphones, 
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "EXPERT PROFESSIONALS",
      subtitle: "Experienced & Qualified Team",
      desc: "Seasoned tax consultants, accountants, and corporate compliance specialists who understand every legal nuance.",
      icon: UserCheck,
    },
    {
      title: "TIMELY FILING",
      subtitle: "On-Time Every Time",
      desc: "Proactive compliance schedules that prevent statutory late fees, interest charges, and last-minute panic.",
      icon: Clock,
    },
    {
      title: "ACCURACY GUARANTEED",
      subtitle: "100% Accuracy Assured",
      desc: "Multi-tier verification of computations, ITC claims, and ROC disclosures to minimize scrutiny notices.",
      icon: ShieldCheck,
    },
    {
      title: "AFFORDABLE FEES",
      subtitle: "Transparent & Competitive",
      desc: "Direct, honest pricing with zero hidden charges. Premium compliance support accessible for every MSME.",
      icon: IndianRupee,
    },
    {
      title: "PERSONALIZED SUPPORT",
      subtitle: "Support Across All Platforms",
      desc: "Direct assistance via WhatsApp, phone, and in-person consultation with dedicated case managers.",
      icon: Headphones,
    },
    {
      title: "SAFE & CONFIDENTIAL",
      subtitle: "Your Information Is Handled Confidentially",
      desc: "Strict data privacy protocols. Your financial books, PAN, and credentials remain 100% secure.",
      icon: Lock,
    },
  ];

  return (
    <section className="bg-[#003D2B] text-white py-16 lg:py-20 relative overflow-hidden border-t-2 border-[#F4B72A]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4B72A] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>THE TAX MITRA ADVANTAGE</span>
          </div>

          <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mb-3 shadow-[0_0_8px_rgba(244,183,42,0.8)]" />

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            WHY CHOOSE <span className="text-[#F4B72A]">TAX MITRA?</span>
          </h2>

          <p className="text-sm sm:text-base text-emerald-100 mt-3 leading-relaxed">
            We bridge the gap between complex Indian tax regulations and your peace of mind with disciplined, ethical, and cost-effective services.
          </p>
        </div>

        {/* 6 Responsive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-[#002E20] border border-[#07583F] hover:border-[#F4B72A] p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative gold accent corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#F4B72A]/20 to-transparent rounded-bl-xl pointer-events-none" />

                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-[#003D2B] border-2 border-[#F4B72A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 shadow-md">
                    <IconComponent className="w-6 h-6 text-[#F4B72A]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#F4B72A] transition-colors tracking-wide uppercase">
                    {point.title}
                  </h3>

                  <h4 className="text-xs font-bold text-[#F4B72A] mt-1 tracking-wider uppercase">
                    {point.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#07583F] flex items-center justify-between text-[11px] font-bold text-emerald-300">
                  <span>Standard 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B72A]" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Detail Link */}
        <div className="mt-12 text-center">
          <Link
            to="/why-choose-us"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F4B72A] hover:text-white transition-colors group"
          >
            <span>Learn more about our quality guarantees and client commitment</span>
            <ArrowRight className="w-4 h-4 text-[#F4B72A] group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
