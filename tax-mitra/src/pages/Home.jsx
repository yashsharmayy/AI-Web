import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ServiceGrid from "../components/ServiceGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Statistics Bar */}
      <Stats />

      {/* 3. Services Showcase (Grid) */}
      <ServiceGrid limit={8} showHeader={true} />

      {/* 4. Why Choose Tax Mitra (Dark Green) */}
      <WhyChooseUs />

      {/* 5. Client Testimonials */}
      <Testimonials />

      {/* 6. Frequently Asked Questions */}
      <FAQ />

      {/* 7. Conversion Contact / Enquiry Section */}
      <CTA
        title="NEED HELP WITH TAX OR COMPLIANCE?"
        subtitle="We are just a message or call away! Connect directly with our certified tax consultants in Delhi for instant filing support."
      />
    </div>
  );
}
