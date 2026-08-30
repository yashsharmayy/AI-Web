import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  IndianRupee, 
  Headphones, 
  Lock, 
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CTA from "../components/CTA";

export default function WhyChooseUsPage() {
  const pillars = [
    {
      id: "expertise",
      title: "1. EXPERT PROFESSIONALS",
      subtitle: "Experienced & Qualified Team",
      desc: "Our team comprises dedicated tax consultants, GST practitioners, accountants, and corporate compliance professionals with in-depth knowledge of Indian tax legislation (Income Tax Act, 1961, CGST Act, 2017, and Companies Act, 2013). We monitor every circular, notification, and case law update to ensure our advice is legally bulletproof.",
      benefits: [
        "In-depth analysis of Old vs New Tax Regimes for maximum refund.",
        "Accurate GSTR-2B vs purchase register matching for ITC claims.",
        "Flawless drafting of SPICe+ MCA incorporation applications.",
        "Expert assistance in responding to scrutiny and defect notices."
      ],
      icon: UserCheck,
    },
    {
      id: "timeliness",
      title: "2. TIMELY FILING",
      subtitle: "On-Time Every Time",
      desc: "Missing statutory due dates triggers severe financial consequences—ranging from daily late fees (₹100/day for MCA, ₹50/day for GST) to 18% annual interest penalties and loss of business credibility. Tax Mitra maintains automated client compliance calendars and initiates preparation weeks ahead of the deadline.",
      benefits: [
        "Advance reminders before monthly and quarterly tax deadlines.",
        "Zero delay in Form 16, 16A, and TDS return submissions.",
        "Same-day acknowledgment generation for e-filed returns.",
        "Strict adherence to MCA annual filing cut-offs."
      ],
      icon: Clock,
    },
    {
      id: "accuracy",
      title: "3. ACCURACY GUARANTEED",
      subtitle: "100% Accuracy Assured",
      desc: "Errors in returns lead to automated portal mismatch notices and prolonged assessments. At Tax Mitra, every computation undergoes a rigorous two-tier review process. We cross-verify data across AIS, TIS, 26AS, and bank statements before clicking submit.",
      benefits: [
        "Zero calculation discrepancy across all income heads.",
        "Accurate HSN/SAC code classification for GST invoicing.",
        "Complete reconciliation of bank accounts and ledgers.",
        "Transparent computation sheets shared for client approval."
      ],
      icon: ShieldCheck,
    },
    {
      id: "affordable",
      title: "4. AFFORDABLE FEES",
      subtitle: "Transparent & Competitive",
      desc: "We believe professional financial guidance should be accessible to solo entrepreneurs, shopkeepers, and small businesses. We offer clear, fixed fee structures without hidden costs, retainers, or sudden add-on invoices.",
      benefits: [
        "Upfront quotes provided before work commencement.",
        "Special bundled packages for startups and new business incorporations.",
        "Economical monthly retainer plans for MSME bookkeeping & GST.",
        "No charges for routine quick WhatsApp clarifications."
      ],
      icon: IndianRupee,
    },
    {
      id: "support",
      title: "5. PERSONALIZED SUPPORT",
      subtitle: "Support Across All Platforms",
      desc: "You never have to speak to robotic automated phone trees or wait days for an email reply. Tax Mitra provides direct one-on-one communication with your assigned consultant via WhatsApp, telephone, email, or in-person visits to our Delhi office.",
      benefits: [
        "Direct WhatsApp line (9667574290) for instant queries.",
        "Personalized case manager who understands your business context.",
        "Plain-language explanations without confusing tax jargon.",
        "Flexible appointment scheduling for working professionals."
      ],
      icon: Headphones,
    },
    {
      id: "confidentiality",
      title: "6. SAFE & CONFIDENTIAL",
      subtitle: "Your Information Is Handled Confidentially",
      desc: "We treat your sensitive financial statements, Aadhaar details, PAN cards, and banking data with utmost confidentiality. All documents are stored securely with strict privacy protocols and never disclosed to third parties.",
      benefits: [
        "100% data privacy and strict non-disclosure ethics.",
        "Secure document handling via encrypted channels.",
        "Client portal credential secrecy guaranteed.",
        "Safe digital archiving of previous years' filed acknowledgments."
      ],
      icon: Lock,
    },
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>OUR QUALITY PROMISE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            WHY CHOOSE <span className="text-[#F4B72A]">TAX MITRA?</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 uppercase tracking-wide max-w-2xl mx-auto">
            6 Core Commitments That Set Us Apart
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed">
            Discover why hundreds of individuals, small business owners, and corporate enterprises trust Tax Mitra for error-free compliance and tax optimization.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "Why Choose Us", link: "/why-choose-us" }]} />
      </div>

      {/* 6 In-depth Pillars Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:border-[#F4B72A] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top gold bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#003D2B] group-hover:bg-[#F4B72A] transition-colors" />

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#003D2B] border-2 border-[#F4B72A] flex items-center justify-center text-[#F4B72A] shrink-0 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#003D2B] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-[#D99A00] uppercase tracking-wider">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-2 bg-[#F8F7F1] p-4 rounded-xl border border-amber-200/60">
                    <h4 className="text-[11px] font-black text-[#003D2B] uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    {item.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                        <span className="font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#07583F]">
                  <span>Tax Mitra Standard</span>
                  <a
                    href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D99A00] hover:text-[#003D2B] flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Client Assurance Banner */}
        <div className="bg-[#003D2B] text-white p-8 rounded-2xl border-2 border-[#F4B72A] shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#F4B72A] uppercase tracking-tight">
            OUR COMMITMENT TO YOUR PEACE OF MIND
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl mx-auto">
            Whether you are filing your first individual ITR or managing corporate compliance for a private limited company, we dedicate our full professional expertise to your financial safety.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#F4B72A] hover:bg-[#D99A00] text-[#003D2B] font-black text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Get In Touch With An Expert
            </Link>
            <a
              href="tel:9667574290"
              className="px-5 py-3 rounded-xl border border-white text-white hover:bg-[#07583F] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F4B72A]" />
              <span>Call: 9667574290</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        title="READY FOR ACCURATE, ON-TIME COMPLIANCE?"
        subtitle="Speak directly with our senior consultant today. We are ready to assist with all your tax, GST, and business registrations."
      />
    </div>
  );
}
