"use client";

import React, { useState } from "react";
import Button from "@/components/comman/Button";
import {
  Crown,
  BookOpen,
  Users,
  Sprout,
  Target,
  ArrowRight,
  X,
  Award,
  MousePointerClick,
} from "lucide-react";

/* -------------------------------------------------- */
/* 4 Core Pillars Data                                */
/* -------------------------------------------------- */

const PILLARS = [
  {
    id: "01",
    badge: "Pillar 01",
    title: "Academic Excellence",
    icon: BookOpen,
    shortDesc: "Strong foundations and lifelong learning.",
    desc: "Building strong foundations through meaningful learning, curiosity, and a culture of continuous improvement.",
    details:
      "Our academic framework integrates innovative teaching methodologies, critical thinking exercises, and individualized attention to foster lifelong curiosity and intellectual mastery.",
    highlights: [
      "Concept-driven curriculum focus",
      "Interdisciplinary STEM & Arts integration",
      "Mentorship for academic distinction",
    ],
  },
  {
    id: "02",
    badge: "Pillar 02",
    title: "Holistic Development",
    icon: Users,
    shortDesc: "Discover talents and grow with confidence.",
    desc: "Encouraging every student to explore their interests, build life skills, and grow intellectually, physically, socially, and creatively.",
    details:
      "We place equal emphasis on sports, performing arts, leadership programs, and emotional intelligence, ensuring well-rounded growth beyond traditional textbooks.",
    highlights: [
      "State-of-the-art sports and arts academies",
      "Leadership & debate forums",
      "Wellness & emotional resilience programs",
    ],
  },
  {
    id: "03",
    badge: "Pillar 03",
    title: "Values & Character",
    icon: Sprout,
    shortDesc: "Integrity, empathy and responsibility.",
    desc: "Nurturing integrity, empathy, discipline, and responsibility to help students become thoughtful and compassionate individuals.",
    details:
      "Character education is interwoven into daily campus life, instilling ethical decision-making, respect for diversity, and active community service values.",
    highlights: [
      "Community outreach & service learning",
      "Ethics and global citizenship modules",
      "Peer collaboration and empathy workshops",
    ],
  },
  {
    id: "04",
    badge: "Pillar 04",
    title: "Future Readiness",
    icon: Target,
    shortDesc: "Build confident, adaptable leaders.",
    desc: "Equipping students with the knowledge, confidence, critical thinking, and adaptability to navigate an ever-changing world.",
    details:
      "With tech-forward classrooms, AI literacy, and global perspective building, we prepare students to confidently lead in tomorrow's dynamic global landscape.",
    highlights: [
      "Next-gen tech & digital fluency labs",
      "Career guidance & university prep",
      "Problem-solving & design thinking focus",
    ],
  },
];

/* -------------------------------------------------- */
/* Icon Positions                                     */
/* -------------------------------------------------- */

const NODE_POSITIONS = [
  { left: "50%", top: "0%" },
  { left: "100%", top: "50%" },
  { left: "50%", top: "100%" },
  { left: "0%", top: "50%" },
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePillar = PILLARS[activeIndex];

  // Orbit Rotation
  const rotation = -activeIndex * 90;

  const cyclePillars = () => {
    setActiveIndex((prev) => (prev + 1) % PILLARS.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#072255] via-[#0A327B] to-[#072255] px-4 py-12 text-white select-none sm:px-6 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.32)_0%,rgba(10,61,145,0.22)_50%,transparent_80%)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="pointer-events-none absolute left-10 bottom-24 -z-10 h-80 w-80 rounded-full bg-amber-400/20 blur-[130px] animate-pulse-glow-gold" />

      <div className="pointer-events-none absolute right-10 top-1/2 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.25em] text-yellow-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] sm:text-sm">
            Our Philosophy
          </p>

          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            More Than Academics.
            <br/>{" "}
            <span className="font-serif font-normal italic bg-gradient-to-r from-yellow-500 to-primary-500 drop-shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              A Foundation
            </span>{" "}
            for Life.
          </h2>

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="mx-auto max-w-2xl px-2 text-sm font-light leading-relaxed text-white/85 sm:text-base">
            At{" "}
            <span className="font-semibold text-white">
              Prince Academy
            </span>
            , we believe education is not just about what students learn, but
            who they become. Our philosophy is rooted in nurturing bright
            minds, strong values, and the confidence to create a better
            tomorrow.
          </p>
        </header>

        {/* Orbit Section */}
        <div className="relative mx-auto flex flex-col items-center">

          {/* Vision Callout */}
          <div className="z-20 mb-6 w-full max-w-md sm:max-w-md lg:absolute lg:right-4 lg:top-0 lg:mb-0 lg:max-w-xs">

            <div className="flex items-start gap-3 rounded-2xl border border-white/15 border-l-4 border-l-[#FFC107] bg-white/10 p-4 shadow-xl backdrop-blur-md sm:p-5">

              <span className="select-none font-serif text-4xl leading-none text-[#FFC107]">
                “
              </span>

              <div>
                <p className="font-serif text-base italic leading-snug text-white sm:text-lg">
                  Education today for a brighter tomorrow.
                </p>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                 Prince Academy Vision
                </p>
              </div>

            </div>
          </div>

          {/* Orbit Graphic */}
          <div className="relative my-4 flex h-[340px] w-full max-w-[340px] items-center justify-center sm:my-8 sm:h-[460px] sm:max-w-[460px] md:h-[520px] md:max-w-[520px]">

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 scale-125 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.18)_0%,transparent_70%)]" />

            {/* Outer Dashed Orbit */}
            <div
              className="absolute left-1/2 top-1/2 z-10 h-[260px] w-[260px] rounded-full border-2 border-dashed border-[#FFC107]/50 sm:h-[380px] sm:w-[380px] md:h-[430px] md:w-[430px]"
              style={{
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                transition: "transform 700ms ease-out",
              }}
            >

              {/* Orbit Icons */}
              {PILLARS.map((pillar, i) => {
                const isActive = i === activeIndex;
                const IconComponent = pillar.icon;
                const pos = NODE_POSITIONS[i];

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Select ${pillar.title}`}
                    aria-pressed={isActive}
                    className="absolute z-30 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-[#072456]"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                      transition: "transform 700ms ease-out",
                    }}
                  >

                    <span
                      className={`grid h-12 w-12 place-items-center rounded-full transition-colors duration-300 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] ${
                        isActive
                          ? "scale-110 border-2 border-[#FFC107] bg-gradient-to-br from-[#0F3B7E] to-[#061B3A] text-[#FFC107] shadow-[0_0_25px_rgba(255,193,7,0.55)] ring-4 ring-[#FFC107]/25"
                          : "border border-white/30 bg-[#34547D]/90 text-white shadow-lg backdrop-blur-md hover:bg-[#46658D]"
                      }`}
                    >
                      <IconComponent className="h-5 w-5 stroke-[2] sm:h-7 sm:w-7" />
                    </span>

                  </button>
                );
              })}
            </div>

            {/* Center Golden Circle */}
            <button
              type="button"
              onClick={cyclePillars}
              aria-label="Show next pillar"
              className="relative z-20 flex h-[115px] w-[115px] cursor-pointer flex-col items-center justify-center rounded-full border-4 border-white/70 bg-gradient-to-br from-[#FFF0BD] via-[#FFC107] to-[#D99B00] p-3 text-center text-[#061B3A] shadow-[0_15px_40px_rgba(0,0,0,0.45),inset_0_-8px_12px_rgba(0,0,0,0.2),inset_0_8px_16px_rgba(255,255,255,0.85)] transition-transform duration-300 hover:scale-105 sm:h-[155px] sm:w-[155px] md:h-[180px] md:w-[180px]"
            >

              <Crown className="mb-1 h-5 w-5 stroke-[2.2] sm:h-7 sm:w-7" />

              <span className="text-[8px] font-black uppercase tracking-widest sm:text-[10px]">
                THE
              </span>

              <span className="px-1 font-serif text-xs font-extrabold uppercase leading-tight tracking-wider sm:text-sm md:text-base">
                PRINCE
                <br />
                ACADEMY
              </span>

              <span className="mt-1 text-[8px] font-bold uppercase tracking-widest sm:text-[10px]">
                APPROACH
              </span>

            </button>
          </div>

          {/* Interaction Hint */}
          <div className="-mt-2 mb-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md">
              <MousePointerClick className="h-3.5 w-3.5 text-[#FFC107]" />
              Click any node on the wheel to explore pillars
            </span>
          </div>

          {/* Active Pillar Card */}
          <div className="relative mx-auto w-full max-w-4xl">

            {/* Rotating Golden Border */}
            <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[27px]">

              <div className="gold-border-spin" />

            </div>

            {/* Soft Background Glow */}
            <div className="pointer-events-none absolute -inset-2 rounded-[36px] bg-amber-400/10 blur-[35px]" />

            {/* Main Card */}
            <div
              key={activePillar.id}
              className="relative z-10 m-[2px] overflow-hidden rounded-[22px] bg-[#0B3175]/95 p-6 shadow-[0_6px_18px_rgba(7,34,85,0.20)] backdrop-blur-2xl transition-all duration-300 sm:p-8 md:p-10"
            >

              {/* Watermark */}
              <div className="pointer-events-none absolute -bottom-6 -right-3 select-none font-serif text-8xl font-black text-white/[0.06] sm:text-9xl">
                {activePillar.id}
              </div>

              <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

                <div className="flex-1">

                  <div className="mb-3 flex items-center gap-3">

                    <span className="rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-600 to-primary px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-white shadow-[0_0_12px_rgba(37,99,235,0.5)]">
                      {activePillar.badge}
                    </span>

                  

                  </div>

                  <h3 className="mb-3 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {activePillar.title}
                  </h3>

                  <p className="max-w-2xl text-sm font-normal leading-relaxed text-white/90 sm:text-base">
                    {activePillar.desc}
                  </p>

                </div>

                <div className="w-full border-t border-white/15 pt-4 md:w-auto md:border-t-0 md:pt-0">

                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="navy"
                    size="md"
                    className="group w-full font-bold md:w-auto"
                  >
                    <span>Know More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                </div>

              </div>
            </div>
          </div>

          {/* Quick Selector Tabs */}
          <div className="mt-5 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">

            {PILLARS.map((pillar, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:p-4 ${
                    isActive
                      ? "scale-[1.02] border-blue-400 bg-gradient-to-r from-blue-700/40 via-blue-600/30 to-primary/40 shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                      : "border-blue-500/20 bg-white/[0.04] hover:bg-blue-600/15 hover:border-blue-400/40"
                  }`}
                >

                  <span
                    className={`font-serif text-xs font-bold sm:text-sm ${
                      isActive
                        ? "text-blue-300 drop-shadow-[0_0_6px_#60A5FA]"
                        : "text-white/60"
                    }`}
                  >
                    {pillar.id}
                  </span>

                  <span className="truncate text-xs font-semibold text-white sm:text-sm">
                    {pillar.title.split(" ")[0]}
                  </span>

                </button>
              );
            })}

          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#072255]/80 p-4 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-blue-400/50 bg-gradient-to-b from-[#0F3A8A] via-[#0A327B] to-[#072255] p-6 text-white shadow-[0_0_60px_rgba(37,99,235,0.4)] sm:p-8"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4 flex items-center gap-3">

              <div className="grid h-10 w-10 place-items-center rounded-full border border-blue-400/30 bg-blue-500/25 text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Award className="h-5 w-5" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  {activePillar.badge}
                </span>

                <h4
                  id="pillar-modal-title"
                  className="font-serif text-xl font-bold text-white sm:text-2xl"
                >
                  {activePillar.title}
                </h4>
              </div>

            </div>

            {/* Modal Description */}
            <p className="mb-6 text-sm leading-relaxed text-blue-100/90">
              {activePillar.details}
            </p>

            {/* Highlights */}
            <div className="mb-6 rounded-2xl border border-blue-400/25 bg-white/[0.06] p-4 backdrop-blur-sm">

              <h5 className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                Key Highlights
              </h5>

              <ul className="space-y-2 text-xs text-blue-100/90">

                {activePillar.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">

                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_6px_#60A5FA]" />

                    <span>{highlight}</span>

                  </li>
                ))}

              </ul>
            </div>

            {/* Close Action */}
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="transparent"
              size="md"
              className="w-full border-blue-400/40 font-semibold hover:bg-white/15"
            >
              Close Overview
            </Button>

          </div>
        </div>
      )}
    </section>
  );
}

export { Philosophy };