import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "motion/react";
export function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("/api/portfolio").then((res) => res.json()).then((data) => setProjects(data)).catch(() => {
    });
  }, []);
  const categories = ["All", "Packaging Design", "Website & UI", "Branding & Identity", "Social Media Design", "AI Creative"];
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
      
      {
    /* Header */
  }
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF3B30]/10 text-[#FF3B30] text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" /> Award-Winning Portfolio
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
          Selected Projects & <br />
          <span className="italic font-serif">Case Study Showcase.</span>
        </h1>
        <p className="text-sm md:text-base text-[#666666] leading-relaxed">
          Explore how we help visionary brands transform market presence through luxury 3D WebGL web apps, bespoke packaging, and complete identity architectures.
        </p>
      </div>

      {
    /* Category Tabs */
  }
      <div className="flex flex-wrap items-center gap-2 border-b border-black/8 pb-4">
        {categories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${selectedCategory === cat ? "bg-[#111111] text-white shadow-md" : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"}`}
  >
            {cat}
          </button>)}
      </div>

      {
    /* Projects Grid */
  }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project, idx) => <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.1 }}
    className="group bg-[#FFFFFF] rounded-[32px] overflow-hidden border border-black/8 shadow-soft hover:shadow-2xl transition-all duration-500 p-5 space-y-6"
  >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F6F6F6]">
              <img
    src={project.heroImage || project.thumbnail}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#111111]">
                {project.category}
              </div>
              <div className="absolute top-4 right-4 bg-black/80 text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {project.year}
              </div>
            </div>

            <div className="px-2 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#777777] font-semibold uppercase">{project.client}</span>
                  <h2 className="text-2xl font-bold font-syne text-[#111111] group-hover:text-[#FF3B30] transition-colors">
                    {project.title}
                  </h2>
                </div>
                <Link
    to={`/portfolio/${project.slug}`}
    className="w-12 h-12 rounded-full bg-[#F6F6F6] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors flex items-center justify-center text-[#111111]"
    data-cursor="CASE STUDY"
  >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                {project.summary}
              </p>

              {
    /* Impact chips */
  }
              <div className="flex items-center gap-4 pt-3 border-t border-black/6 text-xs text-[#111111] font-semibold">
                {project.impactMetrics.map((m, i) => <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    <span>{m.label}: <strong>{m.value}</strong></span>
                  </div>)}
              </div>
            </div>
          </motion.div>)}
      </div>

    </div>;
}
