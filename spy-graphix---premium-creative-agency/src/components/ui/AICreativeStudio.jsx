import { useState } from "react";
import { Cpu, Sparkles, RefreshCw, Copy, Check } from "lucide-react";
import { motion } from "motion/react";
export function AICreativeStudio() {
  const [prompt, setPrompt] = useState("");
  const [creativeType, setCreativeType] = useState("Packaging Concept & Visual Direction");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const presets = [
    "Luxury perfume bottle with floating glass rings & gold leaf accents",
    "Minimalist organic cold-pressed beverage can dieline in matte sage green",
    "Awwwards-winning 3D web canvas direction for high-end audio tech",
    "3D character concept in futuristic white haute couture attire"
  ];
  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type: creativeType })
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else {
        setResult("Creative Concept Generation Complete.");
      }
    } catch (err) {
      setResult("Failed to communicate with SPY GRAPHIX AI Creative Engine.");
    } finally {
      setLoading(false);
    }
  };
  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return <div className="w-full bg-[#FFFFFF] rounded-3xl p-6 md:p-10 border border-black/8 shadow-soft space-y-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/6 pb-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6d001a]/10 text-[#6d001a] text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" /> Interactive AI Creative Studio
        </div>
        <h3 className="text-2xl font-bold font-syne text-[#111111]">
          Gemini-Powered Brand Direction Generator
        </h3>
      </div>
      <div className="text-xs text-[#777777] max-w-xs">
        Test our proprietary AI creative synthesis engine. Enter your brand vision to receive tailored visual & structural directions.
      </div>
    </div>

    <form onSubmit={handleGenerate} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {["Packaging Concept & Visual Direction", "3D Web Canvas Strategy", "Brand Slogan & Positioning"].map((type) => <button
          key={type}
          type="button"
          onClick={() => setCreativeType(type)}
          className={`py-2.5 px-4 rounded-xl text-xs font-medium transition-all text-left ${creativeType === type ? "bg-[#111111] text-white shadow-md" : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"}`}
        >
          {type}
        </button>)}
      </div>

      <div className="relative">
        <textarea
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your brand, product idea, or luxury aesthetic vision..."
          className="w-full bg-[#F6F6F6] border border-black/8 rounded-2xl p-4 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#6d001a]/30 resize-none"
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          className="absolute bottom-3 right-3 bg-[#6d001a] hover:bg-[#E02E24] text-white font-medium text-xs px-5 py-2.5 rounded-xl transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
          data-cursor="GENERATE"
        >
          {loading ? <>
            <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Synthesizing...
          </> : <>
            <Sparkles className="w-3.5 h-3.5" /> Generate Concept
          </>}
        </button>
      </div>

      {
        /* Preset Chips */
      }
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-[11px] text-[#777777] font-medium uppercase tracking-wider">Try Presets:</span>
        {presets.map((preset, idx) => <button
          key={idx}
          type="button"
          onClick={() => setPrompt(preset)}
          className="text-[11px] bg-[#F6F6F6] hover:bg-[#EAEAEA] text-[#333333] px-3 py-1 rounded-lg transition-all border border-black/5 truncate max-w-[280px]"
        >
          {preset}
        </button>)}
      </div>
    </form>

    {
      /* Output Panel */
    }
    {result && <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#FAFAFA] border border-black/8 rounded-2xl p-5 space-y-3 relative"
    >
      <div className="flex items-center justify-between text-xs font-semibold text-[#111111] uppercase tracking-wider border-b border-black/6 pb-2">
        <span className="flex items-center gap-1.5 text-[#6d001a]">
          <Sparkles className="w-3.5 h-3.5" /> Generated Concept Direction
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-[11px] text-[#777777] hover:text-[#111111] transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy Output"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-xs text-[#333333] leading-relaxed">
        {result}
      </pre>
    </motion.div>}
  </div>;
}
