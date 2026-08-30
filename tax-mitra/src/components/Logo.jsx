import React from "react";
import { Link } from "react-router-dom";
import { Landmark, Sparkles } from "lucide-react";

export default function Logo({ variant = "light", size = "default" }) {
  const isLight = variant === "light"; // For dark green background
  
  return (
    <Link to="/" className="inline-flex items-center gap-3 group select-none">
      {/* Brand Icon Shield / Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F4B72A] via-[#D99A00] to-[#B37D00] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200">
        <div className="w-full h-full bg-[#003D2B] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle gold glow inside */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F4B72A]/10 to-transparent pointer-events-none" />
          <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4B72A]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4B72A] rounded-full flex items-center justify-center">
            <Sparkles className="w-2 h-2 text-[#003D2B]" />
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl sm:text-2xl font-black tracking-wider uppercase ${isLight ? 'text-white' : 'text-[#003D2B]'}`}>
            TAX
          </span>
          <span className="text-xl sm:text-2xl font-black tracking-wider text-[#F4B72A] uppercase">
            MITRA
          </span>
        </div>
        <span className={`text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mt-0.5 ${isLight ? 'text-emerald-200/90' : 'text-slate-600'}`}>
          Your Trusted Tax Consultant
        </span>
      </div>
    </Link>
  );
}
