import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, Clock, BookOpen } from "lucide-react";
export function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("/api/blogs").then((res) => res.json()).then((data) => setBlogs(data)).catch(() => {
    });
  }, []);
  const categories = ["All", "Design Trends", "AI Creative", "Packaging", "Typography"];
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">

    {
      /* Header */
    }
    <div className="space-y-4 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6d001a]/10 text-[#6d001a] text-xs font-semibold uppercase tracking-wider">
        <BookOpen className="w-3.5 h-3.5" /> SPY GRAPHIX Creative Journal
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111111] font-light leading-tight">
        Design Insights & <br />
        <span className="italic font-serif">Creative Engineering Essays.</span>
      </h1>
      <p className="text-sm md:text-base text-[#666666] leading-relaxed">
        Deep dives into 3D WebGL physical shaders, luxury brand architectures, dieline design, and generative AI synthesis.
      </p>
    </div>

    {
      /* Filter and Search */
    }
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-black/8 shadow-soft">
      <div className="relative w-full md:w-96">
        <Search className="w-4 h-4 text-[#999999] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search journal articles..."
          className="w-full bg-[#F6F6F6] text-xs text-[#111111] pl-10 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6d001a]/30"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
        {categories.map((cat) => <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat ? "bg-[#111111] text-white shadow-md" : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"}`}
        >
          {cat}
        </button>)}
      </div>
    </div>

    {
      /* Blog Cards Grid */
    }
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredBlogs.map((blog) => <Link
        key={blog.id}
        to={`/blog/${blog.slug}`}
        className="group bg-[#FFFFFF] rounded-[28px] overflow-hidden border border-black/8 shadow-soft hover:shadow-2xl transition-all p-5 space-y-4 block"
      >
        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#F6F6F6] relative">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#111111]">
            {blog.category}
          </div>
        </div>

        <div className="space-y-3 px-1">
          <div className="flex items-center justify-between text-[11px] text-[#777777] font-semibold">
            <span>{blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
          </div>

          <h2 className="text-xl font-bold font-syne text-[#111111] group-hover:text-[#6d001a] transition-colors line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="pt-3 border-t border-black/6 flex items-center justify-between text-xs font-bold text-[#111111]">
            <div className="flex items-center gap-2">
              <img src={blog.author.avatar} alt={blog.author.name} className="w-6 h-6 rounded-full object-cover" />
              <span className="text-[11px] text-[#555555]">{blog.author.name}</span>
            </div>
            <span className="text-[#6d001a] flex items-center gap-0.5">Read <ArrowUpRight className="w-3.5 h-3.5" /></span>
          </div>
        </div>
      </Link>)}
    </div>

  </div>;
}
