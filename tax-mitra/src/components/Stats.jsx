import React from "react";
import { Users, FileCheck2, Award, Smile } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Returns Filed", icon: FileCheck2 },
    { number: "2+", label: "Years of Experience", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Smile },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 border-y border-slate-200 shadow-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-amber-200/80">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-4 ${
                  idx > 0 ? "pt-4 sm:pt-0" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#003D2B]/5 border border-[#F4B72A] flex items-center justify-center mb-2.5">
                  <IconComponent className="w-5 h-5 text-[#003D2B]" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003D2B] tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                {/* Gold micro underline */}
                <div className="w-8 h-0.5 bg-[#F4B72A] mt-2 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
