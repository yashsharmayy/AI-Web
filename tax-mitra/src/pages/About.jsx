import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  CheckCircle2, 
  Clock, 
  IndianRupee, 
  Headphones, 
  Lock,
  ArrowRight,
  Phone,
  MessageSquare
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function About() {
  const approachPoints = [
    {
      title: "100% Accuracy",
      desc: "Every calculation, ITC reconciliation, and ROC e-form is vetted against the latest circulars and statutes.",
      icon: ShieldCheck,
    },
    {
      title: "Strict Timeliness",
      desc: "Proactive compliance schedules ensure zero last-minute panic or statutory late fee penalties.",
      icon: Clock,
    },
    {
      title: "Transparent Pricing",
      desc: "Affordable, fixed fee structure with no hidden fees or unexpected billing surprises.",
      icon: IndianRupee,
    },
    {
      title: "Personalized Support",
      desc: "Dedicated tax specialist assigned to your case, reachable directly via phone, WhatsApp, or email.",
      icon: Headphones,
    },
  ];

  const teamRoles = [
    {
      role: "Senior Tax & GST Consultant",
      specialization: "Income Tax Appeals, Scrutiny Replies, Complex GST Reconciliations & Corporate Taxation.",
      experience: "8+ Years Experience",
    },
    {
      role: "Corporate Law & ROC Specialist",
      specialization: "Pvt Ltd & LLP Incorporation, MCA Annual Filings (AOC-4, MGT-7), Director KYC & Secretarial Compliance.",
      experience: "6+ Years Experience",
    },
    {
      role: "Senior Accounting Professional",
      specialization: "Day-to-day Bookkeeping, Tally/Zoho Management, Balance Sheet Finalization & Audit Readiness.",
      experience: "7+ Years Experience",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            ABOUT <span className="text-[#F4B72A]">TAX MITRA</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 uppercase tracking-wide max-w-2xl mx-auto">
            Your Trusted Partner for Tax & Business Compliance
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed">
            Headquartered in Kirari, Delhi, Tax Mitra is dedicated to providing hassle-free, highly accurate, and affordable taxation and commercial registration services across India.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "About Us", link: "/about" }]} />
      </div>

      {/* Stats Bar */}
      <Stats />

      {/* Main Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Who We Are & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-black text-[#003D2B] bg-[#F4B72A] px-2.5 py-1 rounded-md uppercase tracking-wider mb-4">
                OUR IDENTITY
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#003D2B] uppercase tracking-tight mb-4">
                WHO WE ARE
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed space-y-3">
                <span>
                  <strong>Tax Mitra</strong> is an Indian tax, accounting, and business compliance consultancy built on the foundation of trust, accuracy, and client dedication. We assist salaried professionals, gig workers, small shop owners, and fast-growing startups in navigating the complexities of Indian tax laws seamlessly.
                </span>
                <br /><br />
                <span>
                  Operating from our office in Prem Nagar 3, Kirari, Delhi, we provide both in-person and digital consultations nationwide. We believe compliance should empower business growth, not burden it with endless jargon or penalties.
                </span>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs font-bold text-[#07583F]">
              <ShieldCheck className="w-5 h-5 text-[#F4B72A]" />
              <span>Certified Tax Practitioners & Corporate Advisors</span>
            </div>
          </div>

          <div className="bg-[#003D2B] text-white p-8 rounded-2xl border-2 border-[#F4B72A] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#07583F] rounded-full blur-2xl opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-block text-xs font-black text-[#003D2B] bg-[#F4B72A] px-2.5 py-1 rounded-md uppercase tracking-wider mb-4">
                OUR PURPOSE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                OUR MISSION & VISION
              </h2>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Our mission is to make tax and compliance services simple, accessible, and 100% reliable for every entrepreneur, trader, and individual taxpayer across India.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Demystify GST, Income Tax, and ROC procedures with clear guidance.",
                  "Ensure 0% error rate and maximum tax refunds legally eligible under law.",
                  "Offer transparent, affordable pricing with no surprise retainers.",
                  "Provide quick response on WhatsApp and phone for immediate peace of mind.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F4B72A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#07583F] text-xs font-bold text-[#F4B72A] uppercase tracking-wider">
              FAST • ACCURATE • RELIABLE
            </div>
          </div>

        </div>

        {/* Section 2: Our Approach */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#003D2B] uppercase tracking-tight">
              OUR APPROACH TO CLIENT SERVICE
            </h2>
            <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mt-2" />
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Four fundamental pillars that define our daily advisory standard:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPoints.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#F4B72A] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#003D2B] border border-[#F4B72A] flex items-center justify-center mb-4 text-[#F4B72A]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-[#003D2B] uppercase mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Professional Team Structure */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#003D2B] uppercase tracking-tight">
              OUR SPECIALIZED PRACTICE AREAS
            </h2>
            <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mt-2" />
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Structured domains staffed by certified professionals with domain-specific competencies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamRoles.map((member, index) => (
              <div
                key={index}
                className="bg-[#F8F7F1] p-6 rounded-2xl border border-amber-200/70 hover:border-[#F4B72A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#003D2B] text-[#F4B72A] flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#003D2B] uppercase">
                    {member.role}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-[#07583F] bg-emerald-100 px-2 py-0.5 rounded mt-1">
                    {member.experience}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {member.specialization}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-amber-200/80 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                  <span>Delhi Practice Unit</span>
                  <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <CTA
        title="READY TO PARTNER WITH TAX MITRA?"
        subtitle="Experience personal, punctual, and reliable tax advisory designed for your success. Reach out today for an initial consultation."
      />
    </div>
  );
}
