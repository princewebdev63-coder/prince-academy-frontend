
"use client";

import { useEffect, useRef } from "react";
import { Caveat } from "next/font/google";

const visionFont = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
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

    if (!container || !progressBar) return;

    const words = wordSpansRef.current;
    let frameId = null;

    const updateScroll = () => {
      frameId = null;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Progress follows the complete section's viewport journey.
      const totalTravel = viewportHeight + rect.height;

      const rawProgress =
        (viewportHeight - rect.top) / totalTravel;

      const progress = Math.max(
        0,
        Math.min(1, rawProgress)
      );

      const totalWords = words.length;
      const spread = 0.95;
      const transitionSize = 0.09;

      words.forEach((span, index) => {
        if (!span) return;

        const wordStart =
          (index / Math.max(totalWords - 1, 1)) * spread;

        const wordProgress = Math.max(
          0,
          Math.min(
            1,
            (progress - wordStart) / transitionSize
          )
        );

        // Gradual, readable word highlighting.
        const opacity = 0.58 + 0.42 * wordProgress;

        const red = Math.round(213 + 42 * wordProgress);
        const green = Math.round(228 + 27 * wordProgress);
        const blue = Math.round(240 + 15 * wordProgress);

        span.style.opacity = opacity.toFixed(3);
        span.style.color =
          `rgb(${red}, ${green}, ${blue})`;
      });

      progressBar.style.transform =
        `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateScroll);
    };

    // Initial render and responsive layout changes.
    updateScroll();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate, {
      passive: true,
    });

    // Recalculate if font loading or responsive layout
    // changes the section height.
    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(container);
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      resizeObserver?.disconnect();

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="prince-vision-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#061B3A] via-[#0A3D91] to-[#061B3A] px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      {/* Steel-blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 -z-10 h-80 w-80 rounded-full bg-secondary/20 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-20 -z-10 h-72 w-72 rounded-full bg-primary/40 blur-[100px]"
      />

      {/* Subtle gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-center sm:mb-6">
          <h2
            id="prince-vision-heading"
            className="text-sm font-bold uppercase tracking-[0.25em] text-gold sm:text-base"
          >
            Our Vision
          </h2>
        </div>

        {/* Accessible text */}
        <p className="sr-only">{VISION_TEXT}</p>

        {/* Animated signature text */}
        <div className="relative mx-auto max-w-4xl">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 -top-6 font-serif text-5xl leading-none text-gold/35 sm:-left-6 sm:-top-8 sm:text-6xl"
          >
            “
          </span>

          <p
            aria-hidden="true"
            className={`${visionFont.className} relative text-center text-[28px] font-semibold leading-[1.4] tracking-[0.005em] sm:text-[34px] sm:leading-[1.4] lg:text-[40px] lg:leading-[1.42]`}
          >
            {WORDS.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span
                  ref={(element) => {
                    wordSpansRef.current[index] = element;
                  }}
                  className="inline"
                  style={{
                    opacity: 0.58,
                    color: "#D5E4F0",
                  }}
                >
                  {word}
                </span>{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Gold scroll indicator */}
        <div
          className="mx-auto mt-6 h-px w-24 overflow-hidden bg-white/20 sm:mt-7 sm:w-32"
          aria-hidden="true"
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gold"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Footer */}
        <div className="mt-4 text-center sm:mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
            Knowledge
            <span className="mx-2 text-gold">•</span>
            Confidence
            <span className="mx-2 text-gold">•</span>
            Character
          </p>

          <p className="mt-2 text-[10px] font-medium tracking-[0.16em] text-white/50">
            PRINCE ACADEMY · SIKAR
          </p>
        </div>
      </div>
    </section>
  );
}
