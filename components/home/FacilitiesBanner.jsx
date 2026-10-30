"use client";

import Link from "next/link";
import Button from "@/components/comman/Button";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

const TOUR_URL = "https://tour.princeeduhub.com/princt34/old-campus/";

export default function FacilitiesBanner() {
  return (
    <div className="relative mt-3 w-full sm:mt-4">
      {/* Keyframe for Smooth Metallic Light Sweep */}
      <style>{`
        @keyframes bannerLightSweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          55%, 100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }
        .banner-shimmer-sweep {
          animation: bannerLightSweep 7.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Ambient Backlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-blue-600/30 via-amber-400/20 to-blue-600/30 blur-md opacity-70"
      />

      <div className="relative isolate overflow-hidden rounded-2xl border border-blue-400/40 bg-gradient-to-r from-[#072255] via-[#0A3D91] to-[#072255] px-3.5 py-2.5 text-white shadow-[0_8px_30px_rgba(7,34,85,0.35),0_0_20px_rgba(37,99,235,0.2)] sm:px-6 sm:py-3">
        {/* Infinite Luxury Light Beam Sweep */}
        <span
          aria-hidden="true"
          className="banner-shimmer-sweep pointer-events-none absolute inset-y-0 -top-2 -bottom-2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]"
        />

        <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Left: 360 Icon + Headline */}
          <div className="flex items-center gap-3">
            <div className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/40 bg-[#072456] text-amber-400 shadow-inner sm:h-10 sm:w-10">
              <Compass className="h-5 w-5 transition-transform duration-700 group-hover:rotate-180 animate-[spin_36s_linear_infinite]" />
              <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black tracking-tight text-white sm:text-sm">
                  Can&apos;t Visit In Person?
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-300 sm:text-[10px]">
                  <Sparkles size={10} className="animate-spin-slow" /> 360° Live Tour
                </span>
              </div>
              <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-blue-100/80 sm:line-clamp-none sm:text-xs">
                Take a self-guided virtual tour through smart classrooms, sports arena, labs &amp; hostels.
              </p>
            </div>
          </div>

          {/* Right: Small CTA Button */}
          <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
            <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200/70 sm:text-[10px]">
              Scroll to explore
            </span>

            <Button
              href={TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="group rounded-xl border border-blue-300/40 font-bold shadow-md hover:scale-105 transition-all"
            >
              <span>Explore 360°</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
