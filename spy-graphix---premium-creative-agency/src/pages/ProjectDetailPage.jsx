import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ChevronLeft } from "lucide-react";
import { BeforeAfterSlider } from "../components/ui/BeforeAfterSlider";
export function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/api/portfolio/${slug}`).then((res) => res.json()).then((data) => setProject(data)).catch(() => {
    }).finally(() => setLoading(false));
  }, [slug]);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24 text-xs uppercase tracking-widest font-bold text-[#777777]">
      Loading Case Study...
    </div>;
  }
  if (!project) {
    return <div className="min-h-screen flex flex-col items-center justify-center pt-24 space-y-4 text-center">
      <h2 className="text-3xl font-serif">Project Case Study Not Found</h2>
      <Link to="/portfolio" className="text-xs font-bold uppercase tracking-wider text-[#6d001a]">
        ← Back to Portfolio
      </Link>
    </div>;
  }
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">

    {
      /* Top Header */
    }
    <div className="flex items-center justify-between border-b border-black/6 pb-6">
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#777777] hover:text-[#111111] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Selected Portfolio
      </Link>
      <span className="text-xs font-extrabold uppercase tracking-widest text-[#6d001a] bg-[#6d001a]/10 px-4 py-1.5 rounded-full">
        {project.category}
      </span>
    </div>

    {
      /* Case Study Hero Title */
    }
    <div className="space-y-6">
      <div className="text-xs font-bold uppercase tracking-widest text-[#777777]">
        Client: {project.client} • Year: {project.year}
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
        {project.title}
      </h1>
      <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed">
        {project.summary}
      </p>

      {project.liveUrl && <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#6d001a] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
      >
        <span>Visit Live Experience</span>
        <ExternalLink className="w-4 h-4" />
      </a>}
    </div>

    {
      /* Hero Image */
    }
    <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden border border-black/8 shadow-2xl bg-[#F6F6F6]">
      <img
        src={project.heroImage}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    {
      /* Impact Metrics Grid */
    }
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FFFFFF] p-8 rounded-[32px] border border-black/8 shadow-soft">
      {project.impactMetrics.map((metric, i) => <div key={i} className="space-y-1 text-center md:text-left">
        <span className="text-xs font-bold text-[#777777] uppercase tracking-wider block">
          {metric.label}
        </span>
        <span className="text-3xl md:text-4xl font-extrabold font-syne text-[#6d001a]">
          {metric.value}
        </span>
      </div>)}
    </div>

    {
      /* Challenge & Solution Grid */
    }
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#FFFFFF] rounded-[32px] p-8 md:p-10 border border-black/8 shadow-soft space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#6d001a]">
          01. The Challenge
        </span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">
          Problem & Market Constraints
        </h3>
        <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
          {project.challenge}
        </p>
      </div>

      <div className="bg-[#FFFFFF] rounded-[32px] p-8 md:p-10 border border-black/8 shadow-soft space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#6d001a]">
          02. The Solution
        </span>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">
          Strategic & Visual Execution
        </h3>
        <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
          {project.solution}
        </p>
      </div>
    </div>

    {
      /* Before / After ComMumbaion Slider if present */
    }
    {project.beforeAfter && <div className="bg-[#FFFFFF] rounded-[32px] p-8 md:p-10 border border-black/8 shadow-soft">
      <BeforeAfterSlider
        beforeImage={project.beforeAfter.before}
        afterImage={project.beforeAfter.after}
        label={project.beforeAfter.label}
      />
    </div>}

    {
      /* Project Gallery */
    }
    {project.gallery && project.gallery.length > 0 && <div className="space-y-6">
      <h3 className="text-2xl font-serif text-[#111111]">
        Visual Artifacts & Campaign Renders
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.gallery.map((img, i) => <div key={i} className="aspect-[16/10] rounded-2xl overflow-hidden border border-black/8 shadow-md">
          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
        </div>)}
      </div>
    </div>}

    {
      /* Footer Callout */
    }
    <div className="bg-[#111111] text-white rounded-[32px] p-10 md:p-14 text-center space-y-6">
      <h2 className="text-3xl md:text-5xl font-serif font-light">
        Ready for a similar transformation?
      </h2>
      <p className="text-xs md:text-sm text-white/60 max-w-md mx-auto">
        Contact our creative director to discuss custom scope, timelines, and 3D design possibilities.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-[#6d001a] hover:bg-[#E02E24] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
      >
        <span>Initiate Project Discovery</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>

  </div>;
}
