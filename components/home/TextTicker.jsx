"use client";

import React from "react";

const TICKER_ITEMS = [
  "25+ Years of Academic Excellence",
  "CBSE Affiliated Senior Secondary School",
  "100% Board Pass Percentage",
  "Integrated JEE, NEET & Olympiad Foundation",
  "25-Bigha World-Class Green Campus",
  "Dedicated Mentorship & Expert Faculty",
  "Olympic Standard Sports Complex",
  "Holistic Personality & Leadership Development",
];

export default function TextTicker() {
  return (
    <section
      aria-label="Prince Academy Highlights"
      className="relative z-10 w-full overflow-hidden border-t-2 border-t-amber-400/60 border-b border-b-blue-200/90 bg-gradient-to-r from-[#F0F5FE] via-white to-[#F0F5FE] py-3 sm:py-3.5 shadow-[0_4px_20px_rgba(7,34,85,0.07)] select-none"
    >
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Infinite scrolling marquee track */}
      <div
        className="flex w-max items-center animate-[marqueeScroll_32s_linear_infinite] hover:[animation-play-state:paused]"
        style={{ willChange: "transform" }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-4 sm:gap-6 mx-3 sm:mx-4 shrink-0"
          >
            <span className="text-[11.5px] sm:text-xs font-extrabold tracking-wider uppercase text-[#043A80] transition-colors hover:text-blue-600">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="text-amber-500 font-bold text-xs sm:text-sm drop-shadow-[0_0_6px_rgba(245,158,11,0.5)] select-none"
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

