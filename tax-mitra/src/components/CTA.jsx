import React from "react";
import { Phone, MessageSquare, Mail, MapPin, Sparkles, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "./ContactForm";

export default function CTA({ 
  title = "NEED HELP WITH TAX OR COMPLIANCE?",
  subtitle = "We are just a message or call away! Get expert guidance tailored for your specific tax or business filing requirements.",
  servicePreselect = ""
}) {
  return (
    <section className="bg-[#003D2B] text-white py-16 lg:py-20 relative overflow-hidden border-t-2 border-[#F4B72A]">
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#07583F] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F4B72A] rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Contact info & value props */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
              <span>INSTANT CONSULTATION</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                {title.includes("?") ? (
                  <>
                    <span>{title.replace("?", "")}</span>
                    <span className="text-[#F4B72A]">?</span>
                  </>
                ) : (
                  title
                )}
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed max-w-lg">
                {subtitle}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <a
                href="tel:9667574290"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#002E20] border border-[#07583F] hover:border-[#F4B72A] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#003D2B] border border-[#F4B72A] flex items-center justify-center shrink-0 text-[#F4B72A] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call Us Direct</span>
                  <span className="text-sm font-extrabold text-white group-hover:text-[#F4B72A] transition-colors">+91 9667574290</span>
                </div>
              </a>

              <a
                href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20compliance%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#002E20] border border-[#07583F] hover:border-[#F4B72A] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform shadow-sm">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Us</span>
                  <span className="text-sm font-extrabold text-white group-hover:text-[#F4B72A] transition-colors">+91 9667574290</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#002E20] border border-[#07583F]">
                <div className="w-10 h-10 rounded-lg bg-[#003D2B] border border-[#F4B72A] flex items-center justify-center shrink-0 text-[#F4B72A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Support</span>
                  <a href="mailto:taxbymitra@gmail.com" className="text-xs font-bold text-white hover:text-[#F4B72A] transition-colors truncate block">
                    taxbymitra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#002E20] border border-[#07583F]">
                <div className="w-10 h-10 rounded-lg bg-[#003D2B] border border-[#F4B72A] flex items-center justify-center shrink-0 text-[#F4B72A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Delhi Office</span>
                  <span className="text-xs font-bold text-white leading-tight block">Prem Nagar 3, Kirari</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F4B72A]" /> Mon - Sat: 9:30 AM - 7:30 PM
              </span>
              <span className="text-[#07583F]">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F4B72A]" /> 100% Confidential
              </span>
            </div>
          </div>

          {/* Right Column: White Enquiry Form */}
          <div className="lg:col-span-6">
            <ContactForm initialService={servicePreselect} />
          </div>

        </div>
      </div>
    </section>
  );
}
