import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "9667574290";
  const defaultMessage = encodeURIComponent(
    "Hello Tax Mitra, I would like to consult regarding tax and compliance services."
  );
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip Label on Hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-[#003D2B] text-[#F4B72A] text-xs font-bold shadow-lg border border-[#F4B72A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Floating Circular Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Tax Mitra on WhatsApp (9667574290)"
      >
        {/* Soft pulse animation effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        
        <MessageSquare className="w-7 h-7 fill-white relative z-10" />
      </a>
    </aside>
  );
}
