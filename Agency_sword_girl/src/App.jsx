import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustedBy from './components/TrustedBy.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div id="root-app-container" className="relative bg-[#050505] text-[#F5F5F5] selection:bg-red-600 selection:text-white overflow-x-hidden min-h-screen">
      {/* 1. Transparent Floating Sticky Navbar */}
      <Navbar />

      {/* 2. Fullscreen Background Video Cinematic Hero */}
      <Hero />

      {/* 3. Infinite Marquee of Strategic Partners */}
      <TrustedBy />

      {/* 4. Manifest / Manifesto & Story Section */}
      <About />

      {/* 5. Our Core Disciplines & Services */}
      <Services />

      {/* 6. Selected Case Studies & Projects */}
      <Projects />

      {/* 7. Animated Execution Process Timeline */}
      <Process />

      {/* 8. Competitive Advantages (Why Choose Us) */}
      <WhyChooseUs />

      {/* 9. Autoplay Client Testimonial Slider */}
      <Testimonials />

      {/* 10. Core Team Profile Cards */}
      <Team />

      {/* 11. Tiered Pricing Plans */}
      <Pricing />

      {/* 12. Accordion FAQ Section */}
      <FAQ />

      {/* 13. Glassmorphism Contact and Telemetry HQ Map */}
      <Contact />

      {/* 14. Luxury Navigation Footer */}
      <Footer />
    </div>
  );
}
