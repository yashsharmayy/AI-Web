import { useEffect, useState } from "react";
import { motion } from "motion/react";
export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target) {
        const interactive = target.closest("button, a, input, textarea, [data-cursor]");
        if (interactive) {
          setIsHovered(true);
          const cursorAttr = interactive.getAttribute("data-cursor");
          if (cursorAttr) {
            setCursorText(cursorAttr);
          } else {
            setCursorText("");
          }
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }
  return <>
    {
      /* Primary Dot */
    }
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-[#6d001a] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
        scale: isClicking ? 0.6 : isHovered ? 1.5 : 1
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
    />

    {
      /* Trailing Ring & Text Indicator */
    }
    <motion.div
      className="fixed top-0 left-0 rounded-full border border-black/20 pointer-events-none z-[9998] flex items-center justify-center bg-white/30 backdrop-blur-[2px] text-[10px] font-bold uppercase tracking-wider text-black"
      animate={{
        x: mousePosition.x - (cursorText ? 36 : isHovered ? 24 : 16),
        y: mousePosition.y - (cursorText ? 36 : isHovered ? 24 : 16),
        width: cursorText ? 72 : isHovered ? 48 : 32,
        height: cursorText ? 72 : isHovered ? 48 : 32,
        borderColor: isHovered ? "rgba(255, 59, 48, 0.4)" : "rgba(0, 0, 0, 0.12)"
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.2 }}
    >
      {cursorText && <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[9px] font-semibold tracking-widest text-[#111111]"
      >
        {cursorText}
      </motion.span>}
    </motion.div>
  </>;
}
