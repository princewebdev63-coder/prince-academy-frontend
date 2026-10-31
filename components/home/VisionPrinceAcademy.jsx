"use client";

import { useEffect, useRef } from "react";
import { Caveat } from "next/font/google";

const visionFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const VISION_TEXT =
  "“Making your child tomorrow’s leader. Empowering every child with knowledge, confidence, and values to shape a better future. At Prince Academy, we nurture curious minds and strong character to inspire the leaders of tomorrow.”";

const WORDS = VISION_TEXT.split(" ");

export default function VisionPrinceAcademy() {
  const containerRef = useRef(null);
  const wordSpansRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const progressBar = progressRef.current;

    if (!container) return;

    const words = wordSpansRef.current;
    let frameId = null;

    const updateScroll = () => {
      frameId = null;

      const rect = container.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight || 700;

      // Robust progress for both mobile and desktop:
      // Starts as section enters viewport (92% of screen)
      // Completes smoothly across the scroll journey
      const startOffset = viewportHeight * 0.92;
      const endOffset = viewportHeight * 0.15;
      const totalTravel = Math.max(1, startOffset - endOffset + rect.height * 0.4);

      const scrolled = startOffset - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalTravel));

      const words = wordSpansRef.current;
      if (!words || words.length === 0) return;

      const totalWords = words.length;
      const spread = 0.85;
      const transitionSize = 0.08;

      words.forEach((span, index) => {
        if (!span) return;

        const wordStart = (index / Math.max(totalWords - 1, 1)) * spread;

        const wordProgress = Math.max(
          0,
          Math.min(1, (progress - wordStart) / transitionSize)
        );

        // Inactive: clearly visible slate-500 rgb(100, 116, 139) with 0.45 opacity
        // Active: Deep, bold signature Royal Navy #043A80 rgb(4, 58, 128) with 1.0 opacity
        const opacity = (0.45 + 0.55 * wordProgress).toFixed(3);

        const red = Math.round(100 - (100 - 4) * wordProgress);
        const green = Math.round(116 - (116 - 58) * wordProgress);
        const blue = Math.round(139 - (139 - 128) * wordProgress);

        span.style.opacity = opacity;
        span.style.color = `rgb(${red}, ${green}, ${blue})`;
        span.style.fontWeight = wordProgress > 0.5 ? "700" : "600";
      });

      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();

    // Mobile touch and document scroll listeners for 100% reliable mobile animation
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("touchmove", scheduleUpdate, { passive: true });
    document.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    let observer = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(() => {
        scheduleUpdate();
      });
      observer.observe(container);
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("touchmove", scheduleUpdate);
      document.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer?.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="prince-vision-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-10 sm:py-14 lg:py-16 select-none border-t border-blue-200/50"
    >
      {/* Subtle Warm Gold Glow Halo centered behind quote */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/15 blur-[100px]"
      />

      {/* Soft Sapphire Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Eyebrow Badge with Gold Text and Primary Underline */}
        <div className="mb-4 flex items-center justify-center sm:mb-5">
          <span
            id="prince-vision-heading"
            className="relative inline-flex flex-col items-center px-1 text-sm lg:text-base font-black uppercase tracking-[0.25em] text-yellow-500"
          >
            Our Vision
            
          </span>
        </div>

        {/* Accessible text for screen readers */}
        <p className="sr-only">{VISION_TEXT}</p>

        {/* Animated handwriting text: Free-floating on white background - NO BOX */}
        <div className="relative mx-auto max-w-3xl px-2 text-center sm:px-6">
         

          <p
            aria-hidden="true"
            className={`${visionFont.className} relative text-center text-[22px] font-semibold leading-[1.42] tracking-wide sm:text-[28px] sm:leading-[1.45] lg:text-[34px] lg:leading-[1.48]`}
          >
            {WORDS.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span
                  ref={(element) => {
                    wordSpansRef.current[index] = element;
                  }}
                  className="inline will-change-transform"
                  style={{
                    opacity: 0.45,
                    color: "rgb(100, 116, 139)",
                    fontWeight: "600",
                  }}
                >
                  {word}
                </span>{" "}
              </span>
            ))}
          </p>
        </div>

        

        {/* Footer */}
        <div className="mt-4 text-center sm:mt-5">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#043A80]/85 sm:text-[11.5px]">
            Knowledge
            <span className="mx-2 text-amber-500 text-xs font-bold"> | </span>
            Confidence
            <span className="mx-2 text-amber-500 text-xs font-bold"> | </span>
            Character
          </p>

          <p className="mt-1.5 text-[9.5px] font-extrabold tracking-[0.2em] text-slate-500 sm:text-[10px]">
            PRINCE ACADEMY, SIKAR
          </p>
        </div>
      </div>
    </section>
  );
}
