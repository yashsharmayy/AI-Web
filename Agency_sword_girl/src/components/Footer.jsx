import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, ArrowRight, Github, Twitter, Linkedin, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#050505]/85 text-[#F5F5F5] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient crimson highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Grid section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand/Slogan Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a
              id="footer-logo-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
            >
              <span className="text-3xl font-black tracking-widest text-white hover:text-red-500 transition-colors uppercase">
                KRONOS<span className="text-red-500">.</span>
              </span>
            </a>
            
            <p className="text-white/50 font-light text-base max-w-sm leading-relaxed">
              We design, disrupt, and conquer the digital landscape on a cinematic scale. Partner with us to establish supreme industry authority.
            </p>

            {/* Social Connection Badges */}
            <div className="flex gap-4">
              <a
                id="footer-social-twt"
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Kronos Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="footer-social-git"
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Kronos GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-social-lnk"
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/30 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Kronos LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns (3 Cols) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 font-bold">DISCOVERY</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <a
                    id="footer-link-projects"
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    id="footer-link-services"
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    id="footer-link-about"
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Manifesto
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 font-bold">SYSTEMS</h4>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <a
                    id="footer-link-process"
                    href="#process"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Blueprint
                  </a>
                </li>
                <li>
                  <a
                    id="footer-link-pricing"
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Investment
                  </a>
                </li>
                <li>
                  <a
                    id="footer-link-contact"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Commission
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Input Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 font-bold">NEWSLETTER DECK</h4>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Receive quarterly research updates concerning digital design trends, cognitive AI models, and performance engineering.
              </p>
            </div>

            {subscribed ? (
              <motion.div
                id="footer-newsletter-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-600/10 border border-red-500/20 rounded-lg text-xs text-red-500 font-semibold"
              >
                SUBSCRIPTION REGISTERED SECURELY
              </motion.div>
            ) : (
              <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. observer@chronos.io"
                  required
                  className="bg-white/5 border border-white/10 hover:border-white/20 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 w-full transition-all duration-300"
                />
                <button
                  id="footer-newsletter-btn"
                  type="submit"
                  className="px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-all duration-300 active:scale-95 shrink-0 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower row / Back to top / Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-6">
          <span className="text-[10px] text-white/30 font-mono tracking-wider">
            &copy; {currentYear} KRONOS CREATIVE CO. DESIGN PRIVACY CODES &bull; ALL STANDARDS SECURED.
          </span>

          {/* Elegant Back to Top Button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="px-5 py-3 bg-white/5 hover:bg-red-600/10 border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-white rounded-lg flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest transition-all duration-300 active:scale-90 shadow-lg"
          >
            <span>BACK TO HIGHEST DECK</span>
            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
