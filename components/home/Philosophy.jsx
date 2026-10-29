"use client";

import React, { useEffect, useRef, useState } from "react";
import { Crown, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 4 Pillars                                                           */
/* ------------------------------------------------------------------ */
const PILLARS = [
  {
    number: "01",
    title: "Academic Excellence",
    description: "Strong foundations and lifelong learning.",
  },
  {
    number: "02",
    title: "Holistic Development",
    description: "Discover talents and grow with confidence.",
  },
  {
    number: "03",
    title: "Values & Character",
    description: "Integrity, empathy and responsibility.",
  },
  {
    number: "04",
    title: "Future Readiness",
    description: "Build confident, adaptable leaders.",
  },
];

/* ------------------------------------------------------------------ */
/* Stats Counter Card Component (Theme Matched to Screenshot)          */
/* ------------------------------------------------------------------ */
function CounterItem({ value, suffix = "", label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
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
      className="flex flex-col items-center justify-center text-center p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 hover:border-[#FFC107]/50 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#FFC107] leading-none drop-shadow-sm">
        {displayValue}
        {suffix && (
          <span className="text-[#78B6F5] ml-1 text-xs sm:text-base font-bold">
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-1 sm:mt-1.5 text-[9px] sm:text-xs font-bold uppercase tracking-wide text-white leading-tight">
        {label}
      </div>
    </div>
  );
}

function PillarCard({ pillar, side }) {
  const { number, title, description } = pillar;

  return (
    <article
      className={`pa-dark-card group relative min-w-0 rounded-[16px] sm:rounded-[20px] border border-white/15 bg-white/[0.07] hover:bg-white/[0.12] p-3 sm:p-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-[#FFC107]/60 ${
        side === "left" ? "pa-card-left" : "pa-card-right"
      }`}
    >
      

      {/* Title in White */}
      <h3 className="font-serif text-[12px] sm:text-[15.5px] font-bold leading-tight text-white">
        {title}
      </h3>

      {/* 1-line Description in soft white */}
      <p className="mt-1 text-[8.5px] sm:text-[12px] leading-snug text-white/85">
        {description}
      </p>

      
    </article>
  );
}

export default function Philosophy() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A3D91] px-3.5 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-16 text-white select-none">
      {/* Solid & Luminous Royal Blue Theme Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0A3D91] via-[#0B459E] to-[#08357E]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

      {/* Subtle Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#78B6F5]/15 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC107]/10 blur-2xl" />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <header className="mx-auto mb-7 sm:mb-12 max-w-2xl text-center">
          {/* Crown in Yellow */}
          <div className="flex justify-center mb-2">
            <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107]" aria-hidden="true" />
          </div>

          {/* Eyebrow in Yellow */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="h-px w-8 sm:w-12 bg-white/30" />
            <span className="text-[10px] sm:text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#FFC107]">
              OUR PHILOSOPHY
            </span>
            <span className="h-px w-8 sm:w-12 bg-white/30" />
          </div>

          {/* Heading: White + Yellow Highlight */}
          <h2 className="font-serif text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.14]">
            More Than Academics.
            <span className="block font-serif font-normal italic text-[#FFC107] mt-0.5 sm:mt-1">
              A Foundation for Life.
            </span>
          </h2>

          {/* Subtitle in soft white */}
          <p className="mt-3 text-[11px] sm:text-[13.5px] leading-relaxed text-white/85 max-w-[560px] mx-auto px-2">
            At Prince Academy, we believe education is not just about what students learn, but who they become. Our philosophy is rooted in nurturing bright minds, strong values, and the confidence to create a better tomorrow.
          </p>
        </header>

        {/* 2x2 Grid with Perfect Full-Rounded Center Circle */}
        <div className="relative mx-auto grid max-w-[960px] grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_165px_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_195px_minmax(0,1fr)] grid-rows-[auto_auto] items-center gap-x-2.5 gap-y-4 sm:gap-x-6 sm:gap-y-7">
          {/* Card 01 (Top-Left) */}
          <div className="relative z-10 col-start-1 row-start-1">
            <PillarCard pillar={PILLARS[0]} side="left" />
          </div>

          {/* Card 03 (Top-Right) */}
          <div className="relative z-10 col-start-3 row-start-1">
            <PillarCard pillar={PILLARS[2]} side="right" />
          </div>

          {/* Full-Rounded Circular Center Emblem */}
          <div className="pa-emblem-wrap relative z-20 col-start-2 row-span-2 row-start-1 flex items-center justify-center">
            {/* 4 Glowing Connectors */}
            <span className="pa-connector pa-connector-left-top" />
            <span className="pa-connector pa-connector-left-bottom" />
            <span className="pa-connector pa-connector-right-top" />
            <span className="pa-connector pa-connector-right-bottom" />

            <div className="pa-emblem relative grid aspect-square w-[116px] h-[116px] sm:w-[160px] sm:h-[160px] lg:w-[190px] lg:h-[190px] place-items-center rounded-full shrink-0 border-2 border-[#FFC107] bg-gradient-to-b from-[#114EA8] to-[#0A3D91] p-2 shadow-[0_0_25px_rgba(255,193,7,0.22),0_15px_40px_rgba(0,0,0,0.35)] sm:p-4 overflow-hidden">
              {/* Inner concentric ring */}
              <div className="absolute inset-[3.5px] sm:inset-[5px] rounded-full border border-white/25 pointer-events-none" />

              <div className="relative flex max-w-[94%] flex-col items-center text-center">
                
                <span className="font-serif text-[8.5px] sm:text-base leading-tight text-white/90 italic">
                  The
                </span>
                <span className="font-serif text-[9.5px] sm:text-[17px] font-bold leading-tight text-white">
                  Prince Academy
                </span>
                <span className="font-serif text-[9px] sm:text-[15px] italic text-[#FFC107]">
                  Approach
                </span>
                <span className="my-1 sm:my-2 h-0.5 w-8 sm:w-16 bg-[#FFC107] rounded-full" />
                <p className="text-[5px] sm:text-[7.5px] font-bold uppercase leading-[1.55] tracking-[0.14em] text-[#FFC107]">
                  KNOWLEDGE<br />
                  CHARACTER<br />
                  OPPORTUNITY<br />
                  LIFELONG GROWTH
                </p>
              </div>
            </div>
          </div>

          {/* Card 02 (Bottom-Left) */}
          <div className="relative z-10 col-start-1 row-start-2">
            <PillarCard pillar={PILLARS[1]} side="left" />
          </div>

          {/* Card 04 (Bottom-Right) */}
          <div className="relative z-10 col-start-3 row-start-2">
            <PillarCard pillar={PILLARS[3]} side="right" />
          </div>
        </div>

       
      </div>
    </section>
  );
}

// Named export for compatibility
export { Philosophy };
