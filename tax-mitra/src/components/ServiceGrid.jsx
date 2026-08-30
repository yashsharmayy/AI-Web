import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/services";

export default function ServiceGrid({ limit, showHeader = true }) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003D2B]/10 text-[#003D2B] text-xs font-black tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
              <span>OUR SERVICES</span>
            </div>

            {/* Small Gold Decorative Line */}
            <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mb-3" />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003D2B] tracking-tight uppercase">
              COMPLETE TAX & COMPLIANCE SOLUTIONS
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From personal income tax filing and GST returns to comprehensive corporate registrations and MCA compliance, our certified experts protect your business with 100% accuracy.
            </p>
          </div>
        )}

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Services CTA Button if limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#003D2B] hover:bg-[#07583F] text-[#F4B72A] border-2 border-[#F4B72A] text-sm sm:text-base font-black tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#F4B72A]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
