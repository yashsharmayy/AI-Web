import React from "react";
import { Sparkles, ShieldCheck, Lock, FileText } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#003D2B] text-white py-12 lg:py-14 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3">
            <Lock className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>LEGAL & COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            PRIVACY <span className="text-[#F4B72A]">POLICY</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Last Updated: August 2026 • Tax Mitra Consultancy
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "Privacy Policy", link: "/privacy-policy" }]} />
      </div>

      {/* Document Body */}
      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              1. Information We Collect
            </h2>
            <p>
              At <strong>Tax Mitra</strong>, we collect personal and financial information exclusively for the purpose of preparing and filing your Income Tax Returns, GST Returns, MCA ROC e-forms, and business registrations. This may include your Full Name, PAN, Aadhaar Number, Bank Account Details, Form 16, Invoices, Address Proofs, and Contact Information (Mobile and Email).
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>To prepare, compute, and e-file statutory tax and compliance returns on official government portals (Income Tax Portal, GSTN, MCA V3, DGFT).</li>
              <li>To contact you regarding computation approvals, tax notices, and statutory due date alerts.</li>
              <li>To maintain records of past filings as required for your historical accounting references.</li>
            </ul>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              3. Data Security & Confidentiality
            </h2>
            <p>
              We implement strict confidentiality standards. Your data is accessed only by authorized tax consultants handling your case. We never sell, rent, lease, or distribute your private financial documents to any third-party marketing companies.
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              4. Third-Party Portals
            </h2>
            <p>
              Submissions are made strictly through verified Indian government portals (incometax.gov.in, gst.gov.in, mca.gov.in). We are not responsible for the privacy practices of external governmental infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              5. Contacting Our Data Officer
            </h2>
            <p>
              If you have any questions or wish to request deletion or modification of your records, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-[#F8F7F1] rounded-xl border border-amber-200/70 text-xs text-[#003D2B] font-semibold space-y-1">
              <p>Email: taxbymitra@gmail.com</p>
              <p>Phone / WhatsApp: +91 9667574290</p>
              <p>Address: Prem Nagar 3, Kirari, Delhi – 110086</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
