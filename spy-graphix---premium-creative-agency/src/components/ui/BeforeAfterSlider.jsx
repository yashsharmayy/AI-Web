import { useState, useRef } from "react";
import { Sparkles } from "lucide-react";
export function BeforeAfterSlider({ beforeImage, afterImage, label = "Drag to Compare Before vs After" }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = x / rect.width * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };
  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  return <div className="w-full space-y-3">
    <div className="flex items-center justify-between text-xs font-medium text-[#777777] uppercase tracking-wider">
      <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#6d001a]" /> {label}</span>
      <span>{Math.round(sliderPos)}% Redesign Impact</span>
    </div>

    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-soft border border-black/8"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {
        /* After Image (Background full width) */
      }
      <img
        src={afterImage}
        alt="After Redesign"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
        After (SPY GRAPHIX)
      </div>

      {
        /* Before Image (Clipped container) */
      }
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-white/90 shadow-2xl z-20"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Redesign"
          className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-[#111111] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
          Original / Before
        </div>
      </div>

      {
        /* Slider Handle Line & Knob */
      }
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-30 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-9 h-9 rounded-full bg-white shadow-2xl border border-black/10 flex items-center justify-center text-black font-bold text-xs transform -translate-x-1/2">
          ↔
        </div>
      </div>
    </div>
  </div>;
}
