import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { INITIAL_SERVICES } from "../data/initialData";
import { ArrowUpRight, CheckCircle2, Sparkles, Send, Check, ChevronLeft } from "lucide-react";
import ServiceGallery from "../components/ui/serviceGallery";
export function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTier, setSelectedTier] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  console.log("URL Slug:", slug);

  useEffect(() => {
    const normalizedSlug = decodeURIComponent(slug || "")
      .trim()
      .toLowerCase();

    console.log("URL Slug:", normalizedSlug);

    console.log(
      "Available Slugs:",
      INITIAL_SERVICES.map((service) => service.slug)
    );

    const foundService = INITIAL_SERVICES.find(
      (service) =>
        service.slug?.trim().toLowerCase() === normalizedSlug
    );

    console.log("Found Service:", foundService);

    setService(foundService || null);

    if (foundService?.pricing?.length > 0) {
      setSelectedTier(foundService.pricing[0].tier);
    } else {
      setSelectedTier("");
    }

    setLoading(false);
  }, [slug]);
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inquiryName,
          email: inquiryEmail,
          service: `${service?.title} (${selectedTier})`,
          message: inquiryMsg || `Inquiry for ${service?.title} - Selected Tier: ${selectedTier}`
        })
      });
      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        setModalOpen(false);
      }, 2500);
    } catch (err) {
      alert("Failed to submit inquiry.");
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24 text-xs uppercase tracking-widest font-bold text-[#777777]">
      Loading Service Architecture...
    </div>;
  }
  if (!service) {
    return <div className="min-h-screen flex flex-col items-center justify-center pt-24 space-y-4 text-center">
      <h2 className="text-3xl font-serif">Service Not Found</h2>
      <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-[#FF3B30]">
        ← Back to All Services
      </Link>
    </div>;
  }
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">

    {
      /* Back Link & Category */
    }
    <div className="flex items-center justify-between border-b border-black/6 pb-6">
      <Link
        to="/services"
        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#777777] hover:text-[#111111] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> All Capabilities
      </Link>
      <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] bg-[#FF3B30]/10 px-4 py-1.5 rounded-full">
        {service.category}
      </span>
    </div>

    {
      /* Hero Header */
    }
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
          {service.title}
        </h1>
        <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
          {service.fullDesc}
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#111111] hover:bg-[#FF3B30] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2"
            data-cursor="INQUIRE"
          >
            <span>Request Project Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 relative aspect-4/3 rounded-4xl overflow-hidden border border-black/8 shadow-2xl bg-[#F6F6F6]">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {
      /* Included Sub-Services Grid */
    }
    <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-12 border border-black/8 shadow-soft space-y-6">
      <h3 className="text-xl font-bold font-syne text-[#111111] border-b border-black/6 pb-4">
        Sub-Services & Deliverables Included
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {service.subServices.map((sub, idx) => <div key={idx} className="bg-[#F6F6F6] p-4 rounded-2xl flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0" />
          <span className="text-xs font-semibold text-[#111111]">{sub}</span>
        </div>)}
      </div>
    </div>

    {
      /* Benefits & Strategic Value */
    }
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-10 border border-black/8 shadow-soft space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Key Advantages
        </span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">
          Why Brands Choose SPY GRAPHIX for {service.title}
        </h3>
        <ul className="space-y-3">
          {service.benefits.map((b, i) => <li key={i} className="flex items-start gap-3 text-xs text-[#444444] leading-relaxed">
            <Check className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>)}
        </ul>
      </div>

      <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-10 border border-black/8 shadow-soft space-y-6">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
          Deliverables Package
        </span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">
          What You Receive Upon Completion
        </h3>
        <div className="space-y-3">
          {service.deliverables.map((deliv, i) => <div key={i} className="bg-[#F6F6F6] p-4 rounded-2xl text-xs font-medium text-[#111111] flex items-center justify-between">
            <span>{deliv}</span>
            <span className="text-[10px] uppercase font-bold text-[#FF3B30] bg-[#FF3B30]/10 px-2.5 py-1 rounded-md">Master Asset</span>
          </div>)}
        </div>
      </div>
    </div>

    {
      /* Workflow Step Timeline */
    }
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
          Execution Strategy
        </span>
        <h2 className="text-3xl font-serif text-[#111111] font-light">
          Our Structured Production Workflow
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {service.workflow.map((wf, idx) => <div key={idx} className="bg-[#FFFFFF] rounded-3xl p-6 border border-black/8 shadow-soft space-y-3 relative">
          <span className="text-3xl font-extrabold font-syne text-[#FF3B30]">{wf.step}</span>
          <h4 className="text-base font-bold text-[#111111]">{wf.title}</h4>
          <p className="text-xs text-[#666666] leading-relaxed">{wf.desc}</p>
        </div>)}
      </div>
    </div>

    {/* Gallery */}

    <ServiceGallery gallery={service.gallery} />
    {
      /* Pricing Tiers */
    }
    <div className="space-y-8 pt-8 border-t border-black/8">
      <div className="text-center space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
          Transparent Investment
        </span>
        <h2 className="text-3xl font-serif text-[#111111] font-light">
          Select Your Preferred Package Tier
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {service.pricing.map((tier, idx) => <div
          key={idx}
          className={`rounded-4xl p-8 border transition-all space-y-6 flex flex-col justify-between ${selectedTier === tier.tier ? "bg-[#111111] text-white border-black shadow-2xl scale-105" : "bg-[#FFFFFF] text-[#111111] border-black/8 shadow-soft"}`}
        >
          <div className="space-y-4">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${selectedTier === tier.tier ? "bg-[#FF3B30] text-white" : "bg-[#F6F6F6] text-[#777777]"}`}>
              {tier.tier}
            </span>
            <div className="text-4xl font-extrabold font-syne">
              {tier.price}
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-current/10 text-xs">
              {tier.features.map((feat, fIdx) => <li key={fIdx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>{feat}</span>
              </li>)}
            </ul>
          </div>

          <button
            onClick={() => {
              setSelectedTier(tier.tier);
              setModalOpen(true);
            }}
            className={`w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${selectedTier === tier.tier ? "bg-[#FF3B30] hover:bg-[#E02E24] text-white" : "bg-[#F6F6F6] hover:bg-[#111111] hover:text-white text-[#111111]"}`}
          >
            Select {tier.tier}
          </button>
        </div>)}
      </div>
    </div>

    {
      /* Inquiry Modal */
    }
    {modalOpen && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-4xl max-w-lg w-full p-8 border border-black/10 shadow-2xl space-y-6 relative">
        <div className="flex items-center justify-between border-b border-black/6 pb-4">
          <h3 className="text-xl font-bold font-syne text-[#111111]">
            Inquire: {service.title}
          </h3>
          <button
            onClick={() => setModalOpen(false)}
            className="text-xs font-bold uppercase text-[#777777] hover:text-[#111111]"
          >
            Close ✕
          </button>
        </div>

        {sentSuccess ? <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
          <h4 className="font-bold">Proposal Request Received!</h4>
          <p className="text-xs">Our creative director will reach out within 24 hours with custom scope details.</p>
        </div> : <form onSubmit={handleInquirySubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Your Full Name</label>
            <input
              type="text"
              required
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              placeholder="e.g. Julian De Rothschild"
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3 text-xs text-[#111111] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={inquiryEmail}
              onChange={(e) => setInquiryEmail(e.target.value)}
              placeholder="julian@brand.com"
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3 text-xs text-[#111111] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Project Notes / Requirements</label>
            <textarea
              rows={3}
              value={inquiryMsg}
              onChange={(e) => setInquiryMsg(e.target.value)}
              placeholder="Tell us about your brand goals, target timeline, or launch date..."
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3 text-xs text-[#111111] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF3B30] hover:bg-[#E02E24] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send Request For {selectedTier || "Custom Tier"}
          </button>
        </form>}
      </div>
    </div>}

  </div>;
}
