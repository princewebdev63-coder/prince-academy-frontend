"use client";

import { useEffect, useRef, useState } from "react";

const STATS_DATA = [
  {
    value: 25,
    suffix: "",
    label: "Years",
  },
  {
    value: 25,
    suffix: "",
    label: "Bigha Campus",
  },
  {
    value: 3,
    suffix: " Time",
    label: "All India First Rank",
  },
];

function CounterItem({ value, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // 1.6 seconds
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutExpo formula
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(ease * value);
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <div
      ref={elementRef}
      className="group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.10] via-white/[0.05] to-transparent hover:from-white/[0.15] hover:to-white/[0.08] border border-blue-400/25 hover:border-blue-300/60 backdrop-blur-xl shadow-[0_8px_24px_rgba(2,9,23,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Top subtle border glint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
      />

      {/* Animated Number */}
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-sans leading-none drop-shadow-[0_2px_12px_rgba(37,99,235,0.6)]">
        {displayValue}
        {suffix && (
          <span className="text-blue-300 ml-0.5 text-xs sm:text-base lg:text-lg font-bold">
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="mt-1 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wide text-blue-100/90 leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section
      aria-label="The Scale of Prince Academy"
      className="relative w-full bg-gradient-to-r from-[#072255] via-[#0D449E] to-[#072255] border-y border-blue-400/35 shadow-[0_12px_40px_rgba(7,34,85,0.4)] overflow-hidden select-none"
    >
      {/* Royal Blue & Gold Ambient Lighting Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -top-10 h-36 w-60 rounded-full bg-amber-400/20 blur-3xl animate-pulse-glow-gold"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -bottom-16 -translate-x-1/2 h-36 w-80 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-blue-600/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Title with Royal Sapphire Glint */}
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-200 text-center mb-2.5 drop-shadow-[0_1px_8px_rgba(37,99,235,0.5)]">
          The Scale of Prince Academy
        </p>

        {/* 3 Frosted Glass Boxes in 1 Single Line on Mobile & Desktop */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {STATS_DATA.map((item) => (
            <CounterItem
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsStrip };
