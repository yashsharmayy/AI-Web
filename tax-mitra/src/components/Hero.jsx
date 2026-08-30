import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Headphones,
  ShieldCheck,
  IndianRupee,
  MessageSquare,
  Play,
} from "lucide-react";

export default function Hero() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Reliable & Accurate",
      description: "Professional filing & compliance",
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Never miss important deadlines",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated tax consultants",
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "No hidden charges",
    },
  ];

  return (
    <section className="relative min-h-195 lg:min-h-195 flex items-center overflow-hidden bg-[#00291e] text-white">

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="../public/videos/tax-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =====================================================
          VIDEO OVERLAY
      ====================================================== */}

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-[#00291e]/75 z-1" />

      {/* linear overlay */}
      <div className="absolute inset-0 z-2 bg-linear-to-r from-[#00291e] via-[#00291e]/85 to-[#00291e]/45" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-2 bg-linear-to-t from-[#00291e] to-transparent" />

      {/* Subtle gold glow */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#F4B72A]/10 blur-[120px] z-2" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 lg:py-28">

        <div className="max-w-4xl">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-white/10 backdrop-blur-md border border-[#F4B72A]/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#F4B72A] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F4B72A]" />
            </span>

            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#F4B72A]">
              YOUR TRUSTED TAX & BUSINESS PARTNER
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-black leading-[0.95] tracking-tight">
            <span className="block text-white">
              SIMPLIFY YOUR
            </span>

            <span className="block text-[#F4B72A] mt-2">
              TAXES.
            </span>

            <span className="block text-white mt-2">
              GROW YOUR BUSINESS.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed">
            From GST and ITR filing to accounting, registrations and
            business compliance — get reliable professional support
            under one roof.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {[
              "GST Filing",
              "ITR Filing",
              "Accounting",
              "Company Registration",
              "TDS & TCS",
              "MSME",
            ].map((service) => (
              <span
                key={service}
                className="px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold
                bg-white/10 backdrop-blur-md
                border border-white/15 text-white/90"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-9">

            <Link
              to="/contact"
              className="
                group inline-flex items-center justify-center gap-3
                px-7 sm:px-9 py-4
                rounded-xl
                bg-[#F4B72A]
                text-[#00291e]
                font-black
                text-sm sm:text-base
                tracking-wide
                shadow-[0_10px_35px_rgba(244,183,42,0.25)]
                hover:bg-[#ffd15c]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              GET CONSULTATION

              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href="https://wa.me/919667574290?text=Hello%20Tax%20Mitra%2C%20I%20need%20tax%20and%20compliance%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-3
                px-7 sm:px-9 py-4
                rounded-xl
                bg-white/10
                backdrop-blur-md
                border border-white/25
                text-white
                font-bold
                text-sm sm:text-base
                hover:bg-white
                hover:text-[#00291e]
                transition-all duration-300
              "
            >
              <MessageSquare className="w-5 h-5" />
              WHATSAPP US
            </a>

          </div>

          {/* Trust points */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10">

            {benefits.slice(0, 3).map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-2.5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4B72A]/15 border border-[#F4B72A]/30">
                    <Icon className="w-4 h-4 text-[#F4B72A]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      {benefit.title}
                    </p>

                    <p className="text-[10px] text-white/50">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Scroll to explore
        </span>

        <div className="w-px h-10 bg-linear-to-b from-[#F4B72A] to-transparent" />
      </div>

    </section>
  );
}