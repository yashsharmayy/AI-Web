import React from "react";
import { FileText, ShieldAlert } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Terms() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#003D2B] text-white py-12 lg:py-14 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>TERMS OF ENGAGEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            TERMS & <span className="text-[#F4B72A]">CONDITIONS</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Last Updated: August 2026 • Tax Mitra Consultancy
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "Terms & Conditions", link: "/terms" }]} />
      </div>

      {/* Terms Body */}
      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              1. Scope of Professional Advisory
            </h2>
            <p>
              <strong>Tax Mitra</strong> acts as a professional consultancy providing preparation, verification, computation, and e-filing services for Income Tax, Goods & Services Tax (GST), Ministry of Corporate Affairs (MCA), and other regulatory bodies. Our work is executed based on the documents, books of accounts, and financial figures supplied directly by the client.
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              2. Accuracy of Client Information
            </h2>
            <p>
              Clients are responsible for providing complete, true, and accurate financial statements, invoices, and KYC documents. Tax Mitra is not liable for any statutory penalties or assessments arising from withheld or misstated information by the applicant.
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              3. Service Timelines & Due Dates
            </h2>
            <p>
              While we make every effort to file all returns well before government cut-off dates, clients must submit all necessary documents at least 48 to 72 hours before the statutory filing deadline to ensure adequate time for review and e-verification.
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              4. Payment & Professional Fees
            </h2>
            <p>
              Professional charges for our services are agreed upon in advance. Government fees, stamp duties, and portal challan charges are payable as applicable to official department accounts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#003D2B] uppercase mb-2">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Delhi, India.
            </p>
            <div className="mt-3 p-4 bg-[#F8F7F1] rounded-xl border border-amber-200/70 text-xs text-[#003D2B] font-semibold">
              Tax Mitra • Prem Nagar 3, Kirari, Delhi – 110086 • Call/WhatsApp: 9667574290
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
