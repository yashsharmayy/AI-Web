import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileCheck,
  ReceiptIndianRupee,
  Building2,
  Calculator,
  Globe
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { servicesData, serviceCategories } from "../data/services";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Tax Services", "GST Services", "Business Registration", "Compliance", "Other Services"];

  const filteredServices = servicesData.filter((s) => {
    const matchesCat = selectedCategory === "All" || s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || (selectedCategory === "Compliance" && s.category.includes("Compliance"));
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Page Hero Header */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>TAX MITRA SOLUTIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            OUR <span className="text-[#F4B72A]">SERVICES</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 max-w-2xl mx-auto uppercase tracking-wide">
            Complete Tax, Accounting & Business Compliance Solutions
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            From new startup entity incorporation and GST registration to complex ROC annual filings and personal income tax returns, explore our specialized services.
          </p>

          {/* Quick Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search any service (e.g. GST, ITR, Private Limited, MSME)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F4B72A] shadow-lg"
            />
            <Search className="w-5 h-5 text-[#003D2B] absolute left-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ label: "Services", link: "/services" }]} />
      </div>

      {/* Main Services Explorer */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#003D2B] text-[#F4B72A] border-2 border-[#F4B72A] shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-[#F4B72A] mx-auto mb-3" />
            <h3 className="text-lg font-black text-[#003D2B]">No exact matching service found</h3>
            <p className="text-sm text-slate-600 mt-1">
              Try searching with different terms or contact us directly for custom compliance support.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#003D2B] text-[#F4B72A] text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Categorized Blueprint Breakdown */}
        <div className="mt-20 pt-12 border-t-2 border-amber-200/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#003D2B] uppercase tracking-tight">
              SERVICE DIRECTORY BY DOMAIN
            </h2>
            <div className="w-12 h-1 bg-[#F4B72A] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#F4B72A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-black text-[#003D2B] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">{group.description}</p>
                  
                  <ul className="space-y-2.5">
                    {group.services.map((item, i) => (
                      <li key={i} className="text-xs">
                        <Link
                          to={`/services/${item.slug}`}
                          className="font-bold text-slate-800 hover:text-[#003D2B] flex items-start gap-2 group"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                          <div>
                            <span className="group-hover:underline">{item.name}</span>
                            <span className="block text-[11px] font-normal text-slate-500">{item.desc}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-right">
                  <Link
                    to={`/services/${group.services[0].slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-[#07583F] hover:text-[#003D2B]"
                  >
                    <span>View Category Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4B72A]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <CTA
        title="CAN'T FIND WHAT YOU ARE LOOKING FOR?"
        subtitle="Our tax specialists offer tailored advisory for unique commercial and regulatory setups. Let's discuss your requirements today."
      />
    </div>
  );
}
