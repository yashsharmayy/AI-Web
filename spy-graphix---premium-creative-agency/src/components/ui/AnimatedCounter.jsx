import { useEffect, useState, useRef } from "react";
export function AnimatedCounter({ value, label }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const match = value.match(/\d+/);
          if (match) {
            const targetNum = parseInt(match[0], 10);
            const prefix = value.substring(0, value.indexOf(match[0]));
            const suffix = value.substring(value.indexOf(match[0]) + match[0].length);
            let current = 0;
            const duration = 1500;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = targetNum / steps;
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetNum) {
                current = targetNum;
                clearInterval(timer);
              }
              setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
            }, stepTime);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.3 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [value, hasAnimated]);
  return <div ref={elementRef} className="space-y-1">
      <div className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight">
        {displayValue || value}
      </div>
      <div className="text-xs md:text-sm font-medium text-[#777777] uppercase tracking-wider">
        {label}
      </div>
    </div>;
}
