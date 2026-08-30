import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>WE ARE HERE TO HELP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            GET IN <span className="text-[#F4B72A]">TOUCH</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 uppercase tracking-wide max-w-2xl mx-auto">
            Need Help With Tax or Compliance? We Are Just a Message or Call Away.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed">
            Reach out via phone, WhatsApp, or submit an online enquiry for prompt, confidential consultation from our Delhi office.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "Contact Us", link: "/contact" }]} />
      </div>

      {/* Main 2-Column Contact Section */}
      <section className="py-14 lg:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT INFORMATION ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <div className="inline-block text-xs font-black text-[#003D2B] bg-[#F4B72A] px-2.5 py-1 rounded-md uppercase tracking-wider mb-2">
                  DIRECT REACH
                </div>
                <h2 className="text-2xl font-black text-[#003D2B] uppercase tracking-tight">
                  CONTACT INFORMATION
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect directly with our consultants for immediate support on all filing and registration requirements.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-4 pt-2">
                
                {/* Phone */}
                <a
                  href="tel:9667574290"
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F7F1] border border-amber-200/70 hover:border-[#F4B72A] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#003D2B] text-[#F4B72A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Phone Call
                    </span>
                    <span className="text-base font-extrabold text-[#003D2B] group-hover:text-[#D99A00] transition-colors">
                      +91 9667574290
                    </span>
                    <p className="text-xs text-slate-500">Mon - Sat: 9:30 AM – 7:30 PM</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20compliance%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:border-[#25D366] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                        WhatsApp Chat
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-200/80 px-2 py-0.5 rounded">
                        FASTEST RESPONSE
                      </span>
                    </div>
                    <span className="text-base font-extrabold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                      +91 9667574290
                    </span>
                    <p className="text-xs text-emerald-700">Quick document sharing & instant replies</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:taxbymitra@gmail.com"
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F7F1] border border-amber-200/70 hover:border-[#F4B72A] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#003D2B] text-[#F4B72A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#003D2B] group-hover:text-[#D99A00] transition-colors break-all">
                      taxbymitra@gmail.com
                    </span>
                    <p className="text-xs text-slate-500">Official queries & proposal requests</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F7F1] border border-amber-200/70">
                  <div className="w-10 h-10 rounded-xl bg-[#003D2B] text-[#F4B72A] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Office Location
                    </span>
                    <p className="text-sm font-extrabold text-slate-900 leading-snug">
                      Prem Nagar 3, Kirari,
                      <br />
                      Delhi – 110086
                    </p>
                    <p className="text-xs text-slate-500 mt-1">In-person consultations available by appointment</p>
                  </div>
                </div>

              </div>

              {/* Service guarantee pills */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-bold text-[#07583F]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4B72A]" /> Same-day response
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 font-bold text-[#07583F]">
                  <ShieldCheck className="w-4 h-4 text-[#F4B72A]" /> 100% Data Confidentiality
                </span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: WHITE ENQUIRY CARD ================= */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
