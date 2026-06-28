import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with clean Editorial dot badge */}
          <a
            id="nav-logo"
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            </span>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors duration-300">
              KRONOS
            </span>
          </a>

          {/* Desktop Navigation with high tracking & modern weight */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button styled as high-contrast border capsule */}
          <div className="hidden lg:flex items-center">
            <button
              id="nav-cta-btn"
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 border border-white/20 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
              ) : (
                <Menu className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-fullscreen-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#050505]/95 backdrop-blur-2xl z-40 flex flex-col justify-center px-10 md:px-20"
          >
            {/* Background Red Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col space-y-6 md:space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-4xl md:text-5xl font-black tracking-tight text-white hover:text-red-500 transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.05, duration: 0.4 }}
                className="pt-6 border-t border-white/10"
              >
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full flex items-center justify-between w-full max-w-sm transition-transform active:scale-95"
                >
                  GET IN TOUCH <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
