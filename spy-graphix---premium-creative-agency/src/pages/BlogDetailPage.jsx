import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Clock } from "lucide-react";
export function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/api/blogs/${slug}`).then((res) => res.json()).then((data) => setBlog(data)).catch(() => {
    }).finally(() => setLoading(false));
  }, [slug]);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-24 text-xs uppercase tracking-widest font-bold text-[#777777]">
        Loading Article...
      </div>;
  }
  if (!blog) {
    return <div className="min-h-screen flex flex-col items-center justify-center pt-24 space-y-4 text-center">
        <h2 className="text-3xl font-serif">Article Not Found</h2>
        <Link to="/blog" className="text-xs font-bold uppercase tracking-wider text-[#FF3B30]">
          ← Back to Journal
        </Link>
      </div>;
  }
  return <div className="pt-28 pb-20 max-w-4xl mx-auto px-6 space-y-12">
      
      {
    /* Top Header */
  }
      <div className="flex items-center justify-between border-b border-black/6 pb-6">
        <Link
    to="/blog"
    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#777777] hover:text-[#111111] transition-colors"
  >
          <ChevronLeft className="w-4 h-4" /> Creative Journal
        </Link>
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] bg-[#FF3B30]/10 px-4 py-1.5 rounded-full">
          {blog.category}
        </span>
      </div>

      {
    /* Article Header */
  }
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-xs text-[#777777]">
          <span>{blog.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 pt-2">
          <img
    src={blog.author.avatar}
    alt={blog.author.name}
    className="w-12 h-12 rounded-full object-cover border border-black/10"
  />
          <div>
            <h4 className="text-sm font-bold text-[#111111]">{blog.author.name}</h4>
            <p className="text-xs text-[#777777]">{blog.author.role}, SPY GRAPHIX</p>
          </div>
        </div>
      </div>

      {
    /* Cover Image */
  }
      <div className="aspect-[16/9] rounded-[32px] overflow-hidden border border-black/8 shadow-2xl bg-[#F6F6F6]">
        <img
    src={blog.coverImage}
    alt={blog.title}
    className="w-full h-full object-cover"
  />
      </div>

      {
    /* Article Body */
  }
      <div className="bg-[#FFFFFF] rounded-[32px] p-8 md:p-12 border border-black/8 shadow-soft space-y-6 text-sm text-[#333333] leading-relaxed font-sans">
        <p className="text-base text-[#111111] font-medium leading-relaxed italic border-l-2 border-[#FF3B30] pl-4">
          "{blog.excerpt}"
        </p>

        <div className="whitespace-pre-wrap space-y-4">
          {blog.content}
        </div>

        {
    /* Tags */
  }
        <div className="pt-6 border-t border-black/6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">Tags:</span>
          {blog.tags.map((tag, i) => <span key={i} className="text-xs bg-[#F6F6F6] text-[#333333] px-3 py-1 rounded-full font-medium">
              #{tag}
            </span>)}
        </div>
      </div>

    </div>;
}
