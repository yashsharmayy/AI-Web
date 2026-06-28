import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MapPin, Mail, Phone, Compass } from 'lucide-react';

const availableServices = [
  'Brand Identity',
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'Motion Graphics',
  'AI Automation'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    selectedServices: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const services = prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        selectedServices: []
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-[#050505]/85 text-[#F5F5F5] py-24 md:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Background radial crimson spotlight */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.25em] uppercase block mb-4">
            // COMMISSION DECK
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase max-w-5xl">
            Let&apos;s build the extraordinary together<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Glassmorphic Form (7 Cols) - Rounded-xl */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/10 p-8 md:p-12 rounded-xl relative overflow-hidden backdrop-blur-xl shadow-2xl">
            {/* Subtle inner line highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            {isSubmitted ? (
              <motion.div
                id="contact-success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-red-600/15 border-2 border-red-500/30 rounded-full flex items-center justify-center text-red-500 shadow-xl shadow-red-600/10">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white uppercase">COMMISSION TRANSMITTED</h3>
                  <p className="text-white/50 font-light text-sm max-w-md">
                    Our principal architects have received your parameters. We will review and establish a Slack hotline with you in under 12 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Services Selection Grid */}
                <div className="space-y-4">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                    WHAT DISCIPLINES DO YOUR CRITERIA INVOLVE?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableServices.map((service, idx) => {
                      const isSelected = formData.selectedServices.includes(service);
                      return (
                        <button
                          key={idx}
                          id={`contact-service-toggle-${idx}`}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`py-3 px-4 rounded-lg text-[10px] font-mono uppercase tracking-wider text-center border transition-all duration-300 active:scale-95 ${
                            isSelected
                              ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/20'
                              : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Text Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                      YOUR FULL NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Marcus Aurelius"
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-red-500 rounded-lg px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                      SECURE EMAIL ADDRESS
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. marcus@rome.net"
                      required
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-red-500 rounded-lg px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all duration-300 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                    COMPANY NAME (OPTIONAL)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Imperial Senate"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-red-500 rounded-lg px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all duration-300 shadow-inner"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">
                    OUTLINE YOUR PROJECT PARAMETERS
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide a high-level summary of your target objectives, timeline requirements, and budget boundaries..."
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-red-500 rounded-lg px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all duration-300 shadow-inner resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-lg shadow-red-600/20"
                >
                  TRANSMIT PARAMETERS <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* Tactical Map Placeholder & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Cyberpunk Map Box */}
            <div id="hq-telemetry-map" className="h-[320px] bg-gradient-to-tr from-[#050505] to-[#120508] border border-white/10 rounded-xl relative overflow-hidden group">
              {/* Subtle grid patterns */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Spinning compass outline */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-red-500/10 animate-[spin_30s_linear_infinite]" />
              
              {/* Telemetry focal point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600/10 border-2 border-red-500/40 flex items-center justify-center animate-bounce">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                </div>
                <div className="absolute mt-10 bg-[#050505] border border-white/10 px-3 py-1 rounded text-[10px] font-mono font-bold tracking-widest text-white uppercase whitespace-nowrap shadow-xl">
                  KRONOS SECURE LABS
                </div>
              </div>

              {/* Holographic lines inside map */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,160 Q 120,80 240,160 T 480,160" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 0,200 Q 120,280 240,200 T 480,200" fill="none" stroke="#ef4444" strokeWidth="1" />
              </svg>

              {/* Lat/Long display */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40 tracking-wider">SECURE LINK: LAT 37.7749&deg; N // LONG 122.4194&deg; W</span>
                <span className="text-[10px] font-mono text-red-500 animate-pulse font-bold flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 animate-spin" /> SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* General HQ Contact details */}
            <div className="space-y-6 bg-white/[0.01] border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white tracking-tight uppercase">Direct Connections</h3>
              
              <div className="space-y-4">
                <div id="contact-info-pin" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">CREATIVE HQ</span>
                    <p className="text-sm text-white/70 font-light mt-0.5">850 Brannan Street, San Francisco, CA 94103</p>
                  </div>
                </div>

                <div id="contact-info-mail" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">DIRECT INBOX</span>
                    <a href="mailto:conquer@kronosagency.net" className="text-sm text-white/70 hover:text-red-500 font-light mt-0.5 transition-colors block">
                      conquer@kronosagency.net
                    </a>
                  </div>
                </div>

                <div id="contact-info-phone" className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-red-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold block">SECURE TELEPHONE</span>
                    <a href="tel:+14159987000" className="text-sm text-white/70 hover:text-red-500 font-light mt-0.5 transition-colors block">
                      +1 (415) 998-7000
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
