"use client";

import Link from "next/link";
import Button from "@/components/comman/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

const TOUR_URL = "https://tour.princeeduhub.com/princt34/old-campus/";

export default function FacilitiesBanner() {
  return (
    <div className="mt-3 w-full sm:mt-4">
      <div className="glow-card-rotating relative isolate overflow-hidden rounded-2xl border border-blue-400/40 bg-gradient-to-r from-[#072255] via-[#0D449E] to-[#072255] px-3.5 py-2.5 text-white shadow-[0_0_30px_rgba(37,99,235,0.25)] sm:px-6 sm:py-3">
        {/* Subtle animated moving light sheen */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12"
        />

        <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Left: 360 Icon + Headline */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-button/40 bg-button/15 text-gold shadow-inner sm:h-10 sm:w-10">
              <Compass className="h-5 w-5 animate-[spin_12s_linear_infinite]" />
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
                <span className="inline-flex items-center gap-1 rounded-full bg-button/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-gold sm:text-[10px]">
                  <Sparkles size={10} /> 360° Live Tour
                </span>
              </div>
              <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-slate-300 sm:line-clamp-none sm:text-xs">
                Take a self-guided virtual tour through smart classrooms, sports arena, labs &amp; hostels.
              </p>
            </div>
          </div>

          {/* Right: Small CTA Button */}
          <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
              Scroll to explore
            </span>

            <Button
              href={TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="navy"
              size="sm"
              className="group rounded-xl font-bold"
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
