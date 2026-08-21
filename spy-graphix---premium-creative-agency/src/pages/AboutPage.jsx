import { useState, useEffect } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { INITIAL_AWARDS } from "../data/initialData";
export function AboutPage() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/api/team").then((res) => res.json()).then((data) => setTeam(data)).catch(() => {
    });
  }, []);
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">

    {
      /* Header */
    }
    <div className="space-y-6 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF3B30]/10 text-[#FF3B30] text-xs font-semibold uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5" /> Agency Story & Philosophy
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
        Where Precision Architecture <br />
        <span className="italic font-serif">Meets Infinite Imagination.</span>
      </h1>
      <p className="text-base text-[#666666] leading-relaxed">
        Founded in India and Delhi, SPY GRAPHIX is an independent creative agency specializing in luxury brand architectures, WebGL 3D canvas experiences, and physical packaging engineering.
      </p>
    </div>

    {
      /* Hero Image / Studio Space */
    }
    <div className="relative aspect-21/9 rounded-4xl overflow-hidden border border-black/8 shadow-2xl bg-[#F6F6F6]">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        alt="SPY GRAPHIX Studio Space India"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-[#FF3B30]" /> India HQ & Atelier
      </div>
    </div>

    {
      /* Mission / Vision / Values */
    }
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-black/8 shadow-soft space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">Our Mission</span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">Prestige Through Simplicity</h3>
        <p className="text-xs text-[#666666] leading-relaxed">
          Eliminate non-essential noise. Focus on pristine whitespace, responsive typography, and tactile WebGL physics to make brands unforgettable.
        </p>
      </div>

      <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-black/8 shadow-soft space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">Our Vision</span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">The Spatial Web</h3>
        <p className="text-xs text-[#666666] leading-relaxed">
          Merge physical packaging, 3D browser canvases, and generative AI into fluid, sub-second web experiences.
        </p>
      </div>

      <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-black/8 shadow-soft space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">Our Promise</span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">Zero Compromise</h3>
        <p className="text-xs text-[#666666] leading-relaxed">
          Every vector dieline, WebGL shader, and typography layout is vetted to pass international Awwwards standards before launch.
        </p>
      </div>
    </div>

    {
      /* Interactive Timeline */
    }
    <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-12 border border-black/8 shadow-soft space-y-8">
      <h2 className="text-3xl font-serif text-[#111111]">Agency Milestones</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { year: "2020", title: "Studio Founded", desc: "Established in India as a boutique luxury branding atelier." },
          { year: "2022", title: "Mumbai Atelier", desc: "Expanded into physical packaging engineering & dieline design." },
          { year: "2024", title: "3D Web Canvas", desc: "Introduced React Three Fiber glass physical shaders." },
          { year: "2026", title: "Awwwards Studio", desc: "Awarded Studio of the Year & integrated Gemini AI Creative Engine." }
        ].map((m, i) => <div key={i} className="border-l-2 border-[#FF3B30] pl-4 space-y-1">
          <span className="text-2xl font-extrabold font-syne text-[#111111]">{m.year}</span>
          <h4 className="text-sm font-bold text-[#111111]">{m.title}</h4>
          <p className="text-xs text-[#666666] leading-relaxed">{m.desc}</p>
        </div>)}
      </div>
    </div>

    {
      /* Leadership & Team Showcase */
    }
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">Creative Leadership</span>
        <h2 className="text-3xl font-serif text-[#111111]">Meet Our Studio Team</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => <div key={member.id} className="bg-[#FFFFFF] rounded-3xl p-6 border border-black/8 shadow-soft space-y-4">
          <div className="aspect-3/4 rounded-2xl overflow-hidden bg-[#F6F6F6]">
            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-[#FF3B30] font-bold uppercase tracking-wider">{member.experience}</span>
            <h3 className="text-lg font-bold font-syne text-[#111111]">{member.name}</h3>
            <p className="text-xs text-[#777777] font-medium">{member.role}</p>
          </div>
          <p className="text-xs text-[#666666] leading-relaxed">{member.bio}</p>
        </div>)}
      </div>
    </div>

    {
      /* Awards & Press Table */
    }
    <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-12 border border-black/8 shadow-soft space-y-6">
      <div className="flex items-center justify-between border-b border-black/6 pb-4">
        <h3 className="text-2xl font-serif text-[#111111]">Awards & Recognition</h3>
        <span className="text-xs font-bold uppercase text-[#FF3B30]">14+ International Honors</span>
      </div>

      <div className="space-y-3">
        {INITIAL_AWARDS.map((aw) => <div key={aw.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#F6F6F6] rounded-2xl gap-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#FF3B30]">{aw.year}</span>
            <span className="font-bold text-[#111111]">{aw.title}</span>
          </div>
          <div className="text-[#777777]">
            <span>{aw.organization}</span> • <span className="text-[#111111] font-medium">{aw.project}</span>
          </div>
        </div>)}
      </div>
    </div>

  </div>;
}
