import React, { useState } from "react";
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  BookOpen, 
  X, 
  MessageSquare,
  ChevronRight
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CTA from "../components/CTA";
import { resourcesData } from "../data/resources";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["All", "Income Tax", "GST", "Startup", "Compliance", "Accounting"];

  const filteredArticles = resourcesData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#003D2B] text-white py-14 lg:py-16 relative overflow-hidden border-b-2 border-[#F4B72A]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#07583F] rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07583F] border border-[#F4B72A]/40 text-[#F4B72A] text-xs font-black tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B72A]" />
            <span>KNOWLEDGE HUB</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            TAX & COMPLIANCE <span className="text-[#F4B72A]">RESOURCES</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-emerald-100 mt-2 uppercase tracking-wide max-w-2xl mx-auto">
            Practical Guides, Due Dates & Tax Optimization Insights
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed">
            Stay informed with verified explanations on Indian Income Tax laws, GST compliance changes, MSME benefits, and ROC statutory filings.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search guides (e.g., Old vs New Regime, GST threshold, MSME)..."
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
        <Breadcrumbs items={[{ label: "Resources", link: "/resources" }]} />
      </div>

      {/* Articles Section */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Tabs */}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#F4B72A] transition-all duration-300 hover:shadow-xl flex flex-col justify-between p-6 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#003D2B]/10 text-[#003D2B] text-[10px] font-black uppercase tracking-wider border border-[#003D2B]/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#F4B72A]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#003D2B] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {article.date}
                </span>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-black text-[#003D2B] group-hover:text-[#D99A00] transition-colors cursor-pointer"
                >
                  <span>READ FULL GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4B72A] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Article Reading Modal / Drawer */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border-2 border-[#F4B72A] shadow-2xl relative animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#003D2B] text-[#F4B72A] text-[10px] font-black uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {activeArticle.readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#003D2B] leading-snug">
                {activeArticle.title}
              </h2>
            </div>

            {/* Modal Content */}
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4 space-y-4">
              {activeArticle.content}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`https://wa.me/919667574290?text=${encodeURIComponent(`Hello Tax Mitra, I have a question about the article: ${activeArticle.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss with Tax Specialist</span>
              </a>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <CTA
        title="NEED PERSONALIZED TAX ADVICE?"
        subtitle="Every business and individual financial profile has unique opportunities for tax optimization. Let our experts craft a personalized plan for you."
      />
    </div>
  );
}
