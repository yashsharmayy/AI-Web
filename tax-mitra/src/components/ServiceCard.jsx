import React from "react";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  ReceiptIndianRupee, 
  Percent, 
  Calculator, 
  ShieldCheck, 
  Building2, 
  Award, 
  CreditCard, 
  Handshake, 
  Users, 
  Globe, 
  Sparkles,
  ArrowRight
} from "lucide-react";

// Map string icon names to Lucide components
const iconMap = {
  FileCheck,
  ReceiptIndianRupee,
  Percent,
  Calculator,
  ShieldCheck,
  Building2,
  Award,
  CreditCard,
  Handshake,
  Users,
  Globe,
  Sparkles,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || FileCheck;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#F4B72A] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
      
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F4B72A] transition-colors duration-300" />

      <div>
        {/* Top Icon & Badge Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#003D2B] border-2 border-[#F4B72A] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <IconComponent className="w-6 h-6 text-[#F4B72A]" />
          </div>
          {service.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#003D2B]/10 text-[#003D2B] text-[10px] font-extrabold uppercase tracking-wider border border-[#003D2B]/20">
              {service.badge}
            </span>
          )}
        </div>

        {/* Category & Title */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#07583F] block mb-1">
          {service.category}
        </span>
        
        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#003D2B] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
          {service.shortDesc}
        </p>
      </div>

      {/* Card Footer Link */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#003D2B] group-hover:text-[#D99A00] transition-colors"
        >
          <span>LEARN MORE</span>
          <ArrowRight className="w-4 h-4 text-[#F4B72A] group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href={`https://wa.me/919667574290?text=${encodeURIComponent(`Hello Tax Mitra, I need assistance with ${service.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-slate-400 hover:text-[#003D2B] transition-colors"
          title="Quick WhatsApp Enquiry"
        >
          Enquire
        </a>
      </div>

    </div>
  );
}
