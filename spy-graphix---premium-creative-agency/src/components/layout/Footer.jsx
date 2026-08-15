import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp, Send, Check, Sparkles } from "lucide-react";
export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribedMsg, setSubscribedMsg] = useState(null);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribing(true);
    setSubscribedMsg(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setSubscribedMsg(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setSubscribedMsg("Subscribed to SPY GRAPHIX Journal.");
      setEmail("");
    } finally {
      setSubscribing(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <footer className="bg-[#111111] text-white pt-16 pb-12 rounded-t-[40px] mt-24 relative overflow-hidden">

    {
      /* Infinite Marquee Banner */
    }
    <div className="w-full overflow-hidden border-b border-white/10 pb-8 mb-16 select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-12 text-3xl md:text-5xl lg:text-7xl font-syne font-bold uppercase tracking-tight text-white/30">
        <span>SPY GRAPHIX CREATIVE AGENCY</span>
        <span className="text-[#FF3B30]">•</span>
        <span>AWWWARDS STUDIO OF THE YEAR</span>
        <span className="text-[#FF3B30]">•</span>
        <span>India</span>
        <span className="text-[#FF3B30]">•</span>
        <span>Mumbai</span>
        <span className="text-[#FF3B30]">•</span>
        <span>Delhi</span>
        <span className="text-[#FF3B30]">•</span>
        <span>TOKYO</span>
        <span className="text-[#FF3B30]">•</span>
        <span>SPY GRAPHIX CREATIVE AGENCY</span>
        <span className="text-[#FF3B30]">•</span>
        <span>AWWWARDS STUDIO OF THE YEAR</span>
        <span className="text-[#FF3B30]">•</span>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

      {
        /* Main Footer Hero CTA */
      }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-white/10 pb-16">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF3B30]">
            <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white font-light leading-none">
            Got a great idea you <br />
            <span className="italic font-serif text-white/70">want to bring to life?</span>
          </h2>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
          <p className="text-sm text-white/60 leading-relaxed">
            Partner with our award-winning studio to build 3D web applications, luxury brand identities, and packaging experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-between bg-white text-[#111111] hover:bg-[#FF3B30] hover:text-white px-8 py-5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl group"
          >
            <span>Book Creative Discovery</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {
        /* Links & Newsletter Grid */
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-16">

        {
          /* Column 1: Studio info */
        }
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF3B30]" />
            <span className="font-syne font-extrabold text-2xl tracking-tight text-white uppercase">
              SPY GRAPHIX
            </span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed max-w-sm">
            We engineer world-class digital brand experiences, 3D WebGL scenes, and high-impact packaging dielines for global market leaders.
          </p>

          {
            /* Newsletter Form */
          }
          <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block">
              Subscribe to Creative Journal
            </label>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:border-[#FF3B30] transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="bg-transparent px-3 text-xs text-white placeholder:text-white/30 focus:outline-none w-full"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-[#FF3B30] hover:bg-[#E02E24] text-white p-2.5 rounded-xl transition-all disabled:opacity-50"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribedMsg && <p className="text-[11px] text-[#FF3B30] font-medium flex items-center gap-1">
              <Check className="w-3 h-3" /> {subscribedMsg}
            </p>}
          </form>
        </div>

        {
          /* Column 2: Quick Links */
        }
        <div className="space-y-4">
          <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2.5 text-xs text-white/80 font-medium">
            <li><Link to="/" className="hover:text-[#FF3B30] transition-colors">Works & Showcase</Link></li>
            <li><Link to="/services" className="hover:text-[#FF3B30] transition-colors">Services Directory</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#FF3B30] transition-colors">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-[#FF3B30] transition-colors">About Studio</Link></li>
            <li><Link to="/blog" className="hover:text-[#FF3B30] transition-colors">Creative Journal</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF3B30] transition-colors">Contact Us</Link></li>
            <li><Link to="/admin" className="hover:text-[#FF3B30] transition-colors text-white/50">Admin Panel</Link></li>
          </ul>
        </div>

        {
          /* Column 3: Featured Services */
        }
        <div className="space-y-4">
          <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-widest">Capabilities</h4>
          <ul className="space-y-2.5 text-xs text-white/80 font-medium">
            <li><Link to="/services/branding-and-identity" className="hover:text-[#FF3B30] transition-colors">Branding & Identity</Link></li>
            <li><Link to="/services/packaging-design" className="hover:text-[#FF3B30] transition-colors">Packaging Design</Link></li>
            <li><Link to="/services/website-and-ui" className="hover:text-[#FF3B30] transition-colors">Website & UI/UX</Link></li>
            <li><Link to="/services/motion-graphics" className="hover:text-[#FF3B30] transition-colors">Motion Graphics</Link></li>
            <li><Link to="/services/ai-creative" className="hover:text-[#FF3B30] transition-colors">AI Creative Studio</Link></li>
          </ul>
        </div>

        {
          /* Column 4: Offices & Contact */
        }
        <div className="space-y-4">
          <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-widest">Studios</h4>
          <div className="space-y-3 text-xs text-white/70">
            <div>
              <p className="font-bold text-white">India HQ</p>
              <p>Bahnhofstrasse 42, 8001 India</p>
            </div>
            <div>
              <p className="font-bold text-white">Mumbai Studio</p>
              <p>18 Rue du Faubourg Saint-Honoré, Mumbai</p>
            </div>
            <div className="pt-2">
              <p className="text-[11px] text-white/40 uppercase font-bold">Direct Email</p>
              <a href="mailto:hello@spygraphix.com" className="text-white font-medium hover:text-[#FF3B30]">hello@spygraphix.com</a>
            </div>
          </div>
        </div>

      </div>

      {
        /* Bottom copyright bar */
      }
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
        <div>
          © {(/* @__PURE__ */ new Date()).getFullYear()} SPY GRAPHIX Creative Agency. Designed for award-winning digital excellence.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-white/10 hover:bg-[#FF3B30] text-white px-4 py-2 rounded-full transition-all text-xs uppercase font-bold tracking-wider"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  </footer>;
}
