import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  CheckCircle2, 
  FileText, 
  Users, 
  HelpCircle, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import { servicesData } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Tax Mitra, I would like to consult regarding ${service.title}.`
  );

  return (
    <div>
      {/* Dynamic Service Hero */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
              <span>{service.heroTitle || service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 uppercase tracking-wide">
              {service.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-section"
                className="px-6 py-3 rounded-xl bg-[#F4B72A] hover:bg-[#D99A00] text-[#003D2B] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                GET CONSULTATION
              </a>

              <a
                href={`https://wa.me/919667574290?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-[#07583F] text-[#F4B72A] border-2 border-[#F4B72A] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP US</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs
          items={[
            { label: "Services", link: "/services" },
            { label: service.title, link: "" },
          ]}
        />
      </div>

      {/* Main Content Grid */}
      <div className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* ================= LEFT MAIN CONTENT (8 cols) ================= */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4B72A]" />
                OVERVIEW
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.overview}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#003D2B] bg-[#F8F7F1] p-3 rounded-xl border border-amber-200/60">
                  <ShieldCheck className="w-4 h-4 text-[#F4B72A]" />
                  <span>100% Guaranteed Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#003D2B] bg-[#F8F7F1] p-3 rounded-xl border border-amber-200/60">
                  <Clock className="w-4 h-4 text-[#F4B72A]" />
                  <span>Fast Turnaround & Tracking</span>
                </div>
              </div>
            </section>

            {/* 2. What We Offer */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4B72A]" />
                WHAT WE OFFER
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Comprehensive scope of work covered under our {service.title} plan:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.offerings.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F7F1] border border-amber-200/50 hover:border-[#F4B72A] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Who Needs This Service */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#F4B72A]" />
                WHO NEEDS THIS SERVICE?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Applicability criteria for individuals and commercial entities:
              </p>

              <ul className="space-y-3">
                {service.whoNeeds.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/70"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#003D2B] text-[#F4B72A] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Required Documents */}
            <section className="bg-[#F8F7F1] p-6 sm:p-8 rounded-2xl border-2 border-[#F4B72A]/70 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#003D2B]" />
                REQUIRED DOCUMENTS
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Keep these documents handy to ensure same-day processing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-amber-200/80 shadow-2xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#F4B72A] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Our 4-Step Process */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4B72A]" />
                OUR PROCESS
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Simple 4-step workflow to get your filing completed without visiting offices:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((stepItem, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#F8F7F1] border border-amber-200/80 relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-xs font-black text-[#003D2B] bg-[#F4B72A] px-2 py-0.5 rounded-md mb-2">
                        STEP {stepItem.step}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 uppercase">
                        {stepItem.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#F4B72A]" />
                  SERVICE FREQUENTLY ASKED QUESTIONS
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F8F7F1] border border-slate-200/70">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ================= RIGHT SIDEBAR (4 cols) ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Enquiry Card */}
            <div id="enquiry-section" className="sticky top-24 space-y-6">
              <ContactForm
                initialService={service.title}
                className="border-2 border-[#003D2B]"
              />

              {/* Other Services Navigation List */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-black tracking-wider text-[#003D2B] uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
                  OTHER POPULAR SERVICES
                </h3>
                <div className="space-y-1.5">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((other) => (
                      <Link
                        key={other.id}
                        to={`/services/${other.slug}`}
                        className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-[#003D2B] hover:text-[#F4B72A] transition-colors truncate"
                      >
                        {other.title}
                      </Link>
                    ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                  <Link
                    to="/services"
                    className="text-xs font-black text-[#07583F] hover:text-[#003D2B] inline-flex items-center gap-1"
                  >
                    <span>View Full Directory</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#F4B72A]" />
                  </Link>
                </div>
              </div>

              {/* Quick Contact Help Box */}
              <div className="bg-[#003D2B] text-white p-5 rounded-2xl border border-[#F4B72A] shadow-md text-center space-y-3">
                <p className="text-xs font-bold text-[#F4B72A] uppercase tracking-wider">
                  NEED IMMEDIATE ASSISTANCE?
                </p>
                <p className="text-xs text-slate-300">
                  Talk directly with our senior consultant on phone or WhatsApp.
                </p>
                <a
                  href="tel:9667574290"
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#003D2B] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#003D2B]" />
                  <span>Call 9667574290</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
