import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare, ArrowRight, ShieldCheck, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about" },
    { name: "WHY CHOOSE US", path: "/why-choose-us" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro bar with contact quick info */}
      <div className="bg-[#002B1E] text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-[#07583F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:9667574290"
              className="flex items-center gap-1.5 hover:text-[#F4B72A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B72A]" />
              <span className="font-semibold">+91 9667574290</span>
            </a>
            <span className="text-[#07583F] hidden sm:inline">|</span>
            <a
              href="mailto:taxbymitra@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F4B72A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F4B72A]" />
              <span>taxbymitra@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium text-emerald-200">
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F4B72A]" />
              Prem Nagar 3, Kirari, Delhi – 110086
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#07583F] text-[#F4B72A] text-[10px] font-bold tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              100% ACCURACY ASSURED
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navbar */}
      <nav
        className={`bg-[#003D2B] text-white border-b transition-all duration-300 ${
          scrolled
            ? "border-[#F4B72A]/40 shadow-xl py-2.5"
            : "border-[#07583F] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs xl:text-sm font-bold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#F4B72A]"
                      : "text-slate-100 hover:text-[#F4B72A]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F4B72A] rounded-full shadow-[0_0_8px_rgba(244,183,42,0.8)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20business%20compliance%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#F4B72A] text-[#F4B72A] hover:bg-[#F4B72A] hover:text-[#003D2B] text-xs xl:text-sm font-extrabold tracking-wider transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(244,183,42,0.3)]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20business%20compliance%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg border border-[#F4B72A] text-[#F4B72A] hover:bg-[#F4B72A] hover:text-[#003D2B]"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#07583F] focus:outline-none focus:ring-2 focus:ring-[#F4B72A]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#002E20] border-t border-[#07583F] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider transition-colors ${
                    isActive
                      ? "bg-[#07583F] text-[#F4B72A] border-l-4 border-[#F4B72A]"
                      : "text-slate-100 hover:bg-[#003D2B] hover:text-[#F4B72A]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-[#07583F]/70 flex flex-col gap-2.5">
              <a
                href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20business%20compliance%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F4B72A] text-[#003D2B] font-extrabold text-sm tracking-wider hover:bg-[#D99A00] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP US (9667574290)</span>
              </a>
              <a
                href="tel:9667574290"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#F4B72A]/50 text-white font-bold text-sm hover:bg-[#07583F] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F4B72A]" />
                <span>CALL: 9667574290</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
