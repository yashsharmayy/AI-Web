import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare, ChevronRight, ShieldCheck, Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#002D20] text-slate-200 border-t-2 border-[#F4B72A] relative">
      {/* Decorative top gold highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#F4B72A] rounded-b shadow-[0_0_15px_rgba(244,183,42,0.8)]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Taglines */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              Your one-stop destination for all Income Tax, GST, MCA ROC, Accounting, and Business Registration compliances across India.
            </p>
            
            <div className="pt-2 space-y-1.5 border-l-2 border-[#F4B72A] pl-3">
              <p className="text-xs font-black tracking-widest text-[#F4B72A] uppercase">
                FAST • ACCURATE • RELIABLE
              </p>
              <p className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                YOUR GROWTH, OUR PRIORITY
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#07583F] hover:bg-[#F4B72A] text-white hover:text-[#003D2B] text-xs font-bold transition-all duration-200 border border-[#F4B72A]/40"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat with Tax Specialist</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold tracking-widest text-[#F4B72A] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "Knowledge & Resources", path: "/resources" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-[#F4B72A] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F4B72A] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Top Services */}
          <div>
            <h3 className="text-sm font-extrabold tracking-widest text-[#F4B72A] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "GST Registration & Returns", path: "/services/gst" },
                { name: "Income Tax Return (ITR)", path: "/services/income-tax" },
                { name: "TDS / TCS Services", path: "/services/tds-tcs" },
                { name: "Accounting & Bookkeeping", path: "/services/accounting" },
                { name: "Company / LLP Registration", path: "/services/company-registration" },
                { name: "MCA / ROC Annual Filings", path: "/services/mca-compliance" },
                { name: "MSME Udyam Registration", path: "/services/msme" },
                { name: "Import Export Code (IEC)", path: "/services/iec" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-300 hover:text-[#F4B72A] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F4B72A] group-hover:translate-x-1 transition-transform" />
                    <span className="truncate">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold tracking-widest text-[#F4B72A] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B72A]" />
              CONTACT US
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F4B72A] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:9667574290"
                    className="font-bold text-white hover:text-[#F4B72A] transition-colors block"
                  >
                    +91 9667574290
                  </a>
                  <span className="text-xs text-slate-400">Mon - Sat: 9:30 AM - 7:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F4B72A] shrink-0 mt-0.5" />
                <a
                  href="mailto:taxbymitra@gmail.com"
                  className="hover:text-[#F4B72A] transition-colors break-all"
                >
                  taxbymitra@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4B72A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Prem Nagar 3, Kirari,
                  <br />
                  Delhi – 110086
                </span>
              </div>
            </div>

            {/* Follow Us Badges */}
            <div className="pt-2">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-2">
                FOLLOW US
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "WhatsApp", url: "https://wa.me/919667574290" },
                  { name: "Facebook", url: "#" },
                  { name: "Instagram", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-[#07583F] hover:bg-[#F4B72A] text-white hover:text-[#003D2B] text-xs font-semibold transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gold Border */}
        <div className="mt-12 pt-6 border-t border-[#07583F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Tax Mitra. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#F4B72A] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              to="/terms"
              className="hover:text-[#F4B72A] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
