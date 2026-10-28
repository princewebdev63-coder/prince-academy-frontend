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
      className="flex flex-col items-center justify-center text-center p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-gold/40 backdrop-blur-md shadow-md shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Animated Number */}
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-gold font-sans leading-none drop-shadow-sm">
        {displayValue}
        {suffix && (
          <span className="text-secondary ml-0.5 text-xs sm:text-base lg:text-lg font-bold">
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="mt-1 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wide text-white/95 leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section
      aria-label="The Scale of Prince Academy"
      className="relative w-full bg-primary border-y border-gold/20 shadow-xl overflow-hidden select-none"
    >
      {/* Subtle ambient lighting glows matching theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-36 w-36 rounded-full bg-gold/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-16 h-36 w-36 rounded-full bg-secondary/15 blur-2xl"
      />

      <div className="relative mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        {/* Title */}
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.16em] text-gold text-center mb-2 drop-shadow-sm">
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
