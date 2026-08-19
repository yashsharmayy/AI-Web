import { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
const SERVICES_LIST = [
  "Branding & Identity",
  "Social Media Design",
  "Print Design",
  "Marketing & Advertising",
  "Packaging Design",
  "Website & UI",
  "Motion Graphics",
  "Photo Editing",
  "E-commerce Design",
  "Corporate Design",
  "Restaurant Design",
  "Event Design",
  "Merchandise",
  "AI Creative"
];
export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Website & UI");
  const [budget, setBudget] = useState("$5,000 - $10,000");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        service,
        budget,
        message: message.trim(),
      };

      console.log("📩 Sending contact:", payload);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("📡 Status:", res.status);

      const data = await res.json();

      console.log("📨 Response:", data);

      if (!res.ok) {
        throw new Error(
          data?.error || `Request failed with status ${res.status}`
        );
      }

      if (!data.success) {
        throw new Error(data?.error || "Contact submission failed.");
      }

      setSuccess(true);

      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setService("Website & UI");
      setBudget("$5,000 - $10,000");

    } catch (error) {
      console.error("❌ CONTACT ERROR:", error);

      alert(error.message || "Failed to send message.");

    } finally {
      setLoading(false);
    }
  };
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">

    {
      /* Header */
    }
    <div className="space-y-4 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF3B30]/10 text-[#FF3B30] text-xs font-semibold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
        Let's create something <br />
        <span className="italic font-serif">extraordinary together.</span>
      </h1>
      <p className="text-sm md:text-base text-[#666666] leading-relaxed">
        Tell us about your brand goals, target launch timeline, or packaging requirements. Our creative directors respond within 24 hours.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      {
        /* Interactive Contact Form */
      }
      <div className="lg:col-span-7 bg-[#FFFFFF] rounded-4xl p-8 md:p-12 border border-black/8 shadow-soft space-y-8">
        <div className="border-b border-black/6 pb-4">
          <h3 className="text-2xl font-bold font-syne text-[#111111]">Project Inquiry Form</h3>
          <p className="text-xs text-[#777777]">Select services and budget tier for rapid proposal scoping.</p>
        </div>

        {success ? <div className="bg-green-50 border border-green-200 text-green-900 p-8 rounded-2xl text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
          <h4 className="text-xl font-bold font-syne">Inquiry Sent Successfully!</h4>
          <p className="text-xs leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out to SPY GRAPHIX. Our executive creative director will review your brief and contact you within 24 hours.
          </p>
        </div> : <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Julian De Rothschild"
                className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FF3B30]/30"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="julian@brand.com"
                className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FF3B30]/30"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
              Company / Brand Name
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Aetheria Mumbai"
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FF3B30]/30"
            />
          </div>

          {
            /* Service Selector */
          }
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
              Primary Service Needed
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-xs text-[#111111] focus:outline-none"
            >
              {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {
            /* Budget Pills */
          }
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
              Estimated Budget Range
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {["$2,500 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"].map((b) => <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`py-3 px-3 rounded-xl text-[11px] font-bold uppercase transition-all ${budget === b ? "bg-[#111111] text-white shadow-md" : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"}`}
              >
                {b}
              </button>)}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
              Project Brief & Objectives *
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your brand vision, deliverables required, target launch dates, or key design references..."
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-xs text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FF3B30]/30 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF3B30] hover:bg-[#E02E24] text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
            data-cursor="SUBMIT"
          >
            <Send className="w-4 h-4" /> {loading ? "Transmitting Brief..." : "Send Inquiry To Creative Director"}
          </button>

        </form>}
      </div>

      {
        /* Office Details & Interactive Map Mockup */
      }
      <div className="lg:col-span-5 space-y-8">

        {
          /* WhatsApp Direct Connect */
        }
        <div className="bg-[#111111] text-white p-8 rounded-4xl space-y-4 shadow-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF3B30]">Fast Response Line</span>
          <h3 className="text-2xl font-bold font-syne">Need Instant Consultation?</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Connect directly with our creative team on WhatsApp for immediate feedback on dieline specs or custom quote estimates.
          </p>
          <a
            href="https://wa.me/8750634117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase px-6 py-3.5 rounded-2xl transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" /> Connect via WhatsApp
          </a>
        </div>

        {
          /* Interactive Google Map Mockup */
        }
        <div className="bg-[#FFFFFF] rounded-4xl p-6 border border-black/8 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold font-syne text-[#111111] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF3B30]" /> Interactive Studio Locations
            </h4>
            <span className="text-[10px] font-bold uppercase text-[#777777]">India • Mumbai</span>
          </div>

          <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#E8E8E8] border border-black/8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
              alt="Map View"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-4 text-center space-y-2 backdrop-blur-[1px]">
              <div className="w-10 h-10 rounded-full bg-[#FF3B30] text-white flex items-center justify-center font-bold text-sm shadow-2xl animate-bounce">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold">
                Bahnhofstrasse 42, 8001 India, Switzerland
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs text-[#555555]">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#111111]">Executive Email</p>
                <a href="mailto:hello@spygraphix.com" className="hover:text-[#FF3B30]">hello@spygraphix.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#111111]">Studio Telephone</p>
                <p>+41 44 210 8080 (India)</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>;
}
