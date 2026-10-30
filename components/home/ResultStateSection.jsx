"use client";

import { useState } from "react";
import Button from "@/components/comman/Button";
import {
  GraduationCap,
  Trophy,
  Volleyball,
  Users,
  BookOpen,
  TrendingUp,
  Star,
  Target,
  FlaskConical,
  Medal,
  Theater,
  HeartPulse,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Background & Showcase Images (Easily customizable)                  */
/* ------------------------------------------------------------------ */
const HEADER_BG = {
  // Left: Real Prince Academy students in uniform studying together
  leftPhoto: "/images/hero-poster.jpg",
  // Right: Real Prince Academy campus building facade
  rightPhoto: "/images/Defence Website 01.webp",
};

const TOPPERS_IMG = "/images/result4.webp";

const PILLARS = [
  {
    key: "Academics",
    sub: ["Strong Foundations.", "Exceptional Results."],
    Icon: GraduationCap,
    n: "01",
    title: "Strong Foundations. Exceptional Results.",
    text: "We focus on conceptual clarity, disciplined learning and continuous support to help students achieve outstanding results in CBSE Class 10 and 12, while building a strong academic foundation for the future.",
    cta: "Explore Academics",
    features: [
      [Users, "Experienced Faculty", "Expert teachers with personalised guidance"],
      [BookOpen, "Structured Academic Program", "Concept-based learning and regular assessment"],
      [TrendingUp, "Doubt Support & Mentoring", "Continuous academic support for better performance"],
      [Star, "Consistent Track Record", "Outstanding board results over the years"],
    ],
    slides: [
      {
        chip: "Class 10 Results",
        title: "Consistent Excellence in Class 10",
        image: TOPPERS_IMG,
        link: "View Detailed Results",
        points: [
          "Pass Percentage: 100%",
          "650+ Students Scored 90%+",
          "150+ Students Scored 95%+",
        ],
      },
      {
        chip: "Class 12 Results",
        title: "Consistent Excellence in Class 12",
        image: TOPPERS_IMG,
        link: "View Detailed Results",
        points: [
          "Pass Percentage: 100%",
          "520+ Students Scored 90%+",
          "State & District Board Merits",
        ],
      },
    ],
  },
  {
    key: "Competitive Schooling",
    sub: ["Beyond the Classroom.", "Ahead of the Curve."],
    Icon: Trophy,
    n: "02",
    title: "Beyond the Classroom. Ahead of the Curve.",
    text: "Early preparation for Olympiads, JEE, NEET and other competitive exams, built into the school day so students stay ahead without extra pressure.",
    cta: "Explore Competitive Programs",
    features: [
      [Target, "Integrated Exam Preparation", "Foundation for JEE, NEET and NTSE from Class 6"],
      [FlaskConical, "Olympiad Training", "Subject-wise practice with expert mentors"],
      [TrendingUp, "Regular Mock Tests", "All-India style tests with performance analysis"],
      [Medal, "Scholarship Support", "Rewards & encouragement for top performers"],
    ],
    slides: [
      {
        chip: "Olympiads",
        title: "National & Global Olympiad Ranks",
        Icon: Trophy,
        link: "See Achievements",
        points: [
          "AIR 1 in National Science Olympiad",
          "50+ Gold Medals at State & National level",
          "Personalized Olympiad Mentorship",
        ],
      },
      {
        chip: "JEE / NEET Foundation",
        title: "Early Foundation for JEE & NEET",
        Icon: Target,
        link: "See Achievements",
        points: [
          "Concepts taught by Kota & Delhi experts",
          "Weekly Mock Tests & Error Analysis",
          "Top Selections Year after Year",
        ],
      },
    ],
  },
  {
    key: "Sports & Activities",
    sub: ["Explore. Participate.", "Excel."],
    Icon: Volleyball,
    n: "03",
    title: "Explore. Participate. Excel.",
    text: "Sports, arts and clubs give every student a place to build confidence, teamwork and leadership, because growth does not stop at the classroom door.",
    cta: "Explore Activities",
    features: [
      [Volleyball, "Olympic Standard Sports", "Trained national coaches for team & individual sports"],
      [Theater, "Arts & Cultural Clubs", "Music, dance, drama, debate and fine arts"],
      [Users, "Leadership Programs", "House system, student council and outdoor camps"],
      [HeartPulse, "Health & Wellbeing", "Daily physical fitness, yoga and mental wellness"],
    ],
    slides: [
      {
        chip: "Sports Champions",
        title: "Champions On & Off the Field",
        Icon: Medal,
        link: "See Sports Facilities",
        points: [
          "State & National Level Championships",
          "Dedicated 25-Bigha Sports Complex",
          "Professional Coaching in 15+ Sports",
        ],
      },
      {
        chip: "Clubs & Arts",
        title: "Creativity & Personality Development",
        Icon: Theater,
        link: "See Activities",
        points: [
          "Annual Cultural Fest & Competitions",
          "Public Speaking & Model UN Clubs",
          "Holistic Character Building",
        ],
      },
    ],
  },
];

export default function ResultStateSection() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  const p = PILLARS[active];
  const s = p.slides[slide];

  const pick = (i) => {
    setActive(i);
    setSlide(0);
  };

  const move = (d) => {
    setSlide((slide + d + p.slides.length) % p.slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FE] via-[#EBF3FD] to-[#F4F8FE] pt-0 pb-12 sm:pt-14 sm:pb-16 md:pt-12 md:pb-16 select-none">
      {/* Background Photo: Clean Image with gentle bottom glow only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[410px] sm:h-[440px] md:h-[420px] overflow-hidden select-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 65%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      >
        <img
          src={HEADER_BG.leftPhoto}
          alt=""
          className="h-full w-full object-cover object-[center_top] sm:object-[center_35%] transform-gpu opacity-85"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Soft Bottom Ambient Glow & Transition */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F4F8FE] via-[#F4F8FE]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_75%_50%_at_50%_100%,rgba(37,99,235,0.12),transparent_70%)]" />
      </div>

      {/* Section Header */}
      <header className="relative z-10 mx-auto max-w-[740px] px-4 pt-4 sm:pt-2 text-center">
        {/* Subtle Warm Gold Glow Halo */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 -z-10 h-36 w-72 rounded-full bg-amber-400/20 blur-3xl animate-pulse-glow-gold" />

        {/* Frosted Glass Overlay Card with Royal Blue Glow */}
        <div className="rounded-2xl sm:rounded-3xl border border-blue-400/35 bg-white/45 sm:bg-white/55 p-5 sm:p-6 md:p-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(10,61,145,0.12),0_0_25px_rgba(59,130,246,0.15)]">
          {/* Crown Icon from Reference Design */}
          <div className="flex justify-center mb-2">
            <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.65)] stroke-[2]" />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="h-px w-10 sm:w-12 bg-blue-400/60" />
            <span className="text-[11px] sm:text-[11.5px] font-extrabold tracking-[0.24em] text-primary uppercase">
              OUR THREE PILLARS
            </span>
            <span className="h-px w-10 sm:w-12 bg-blue-400/60" />
          </div>

          {/* Main Heading with Royal Blue Gradient */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-extrabold text-primary tracking-tight leading-[1.2]">
            A Well-Rounded Education
            <br className="hidden sm:inline" />{" "}
            <span className="font-bold text-primary">for a </span>
            <span className="italic font-bold text-gradient-royal drop-shadow-[0_0_20px_rgba(37,99,235,0.25)]">Brighter Future</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[13.5px] font-medium leading-relaxed text-primary/80 max-w-[580px] mx-auto">
            At Prince Academy, we integrate strong academics, competitive learning and a wide range of
            co-curricular opportunities to help every student discover their potential and achieve more.
          </p>
        </div>
      </header>

      {/* Arched Stage Mound Behind Tabs */}
      <div className="relative mx-auto mt-4 md:mt-5 max-w-[1120px] px-0 md:px-4">
        <div className="relative overflow-hidden rounded-t-[70px] sm:rounded-t-[170px] lg:rounded-t-[220px] border-t border-blue-300/50 bg-gradient-to-b from-blue-100/90 via-background/60 to-transparent pt-6 sm:pt-9 md:pt-7 pb-16 sm:pb-12 md:pb-4 px-2 sm:px-4 shadow-[0_-10px_35px_rgba(37,99,235,0.18),0_15px_35px_rgba(10,61,145,0.12)] md:shadow-[0_-12px_45px_-10px_rgba(37,99,235,0.2),0_20px_50px_-15px_rgba(10,61,145,0.12)]">
          {/* Subtle angled radial divider lines */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-[33.3%] top-4 bottom-0 w-px bg-border -rotate-[10deg] origin-top opacity-60 hidden md:block" />
            <div className="absolute right-[33.3%] top-4 bottom-0 w-px bg-border rotate-[10deg] origin-top opacity-60 hidden md:block" />
          </div>

          {/* Keyframes for Clickable Button Animation */}
          <style>{`
            @keyframes tabFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }
            @keyframes tabRipple {
              0% { transform: scale(0.95); opacity: 0.75; }
              70% { transform: scale(1.32); opacity: 0; }
              100% { transform: scale(1.32); opacity: 0; }
            }
            @keyframes activeAura {
              0%, 100% { box-shadow: 0 8px 24px -2px rgba(4,58,128,0.35); }
              50% { box-shadow: 0 12px 28px -2px rgba(4,58,128,0.45); }
            }
          `}</style>

          {/* 3 Pillar Tabs */}
          <div
            role="tablist"
            aria-label="Our three pillars"
            className="relative z-10 grid grid-cols-3 max-w-[880px] mx-auto gap-2"
          >
            {PILLARS.map(({ key, sub, Icon }, i) => {
              const on = i === active;
              return (
                <button
                  key={key}
                  role="tab"
                  id={`pillar-tab-${i}`}
                  aria-selected={on}
                  aria-controls="pillar-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => pick(i)}
                  onKeyDown={(e) => {
                    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
                    if (d) {
                      const next = (i + d + 3) % 3;
                      pick(next);
                      document.getElementById(`pillar-tab-${next}`)?.focus();
                    }
                  }}
                  className="group flex flex-col items-center gap-1.5 px-2 py-1.5 text-center transition-all duration-300 focus:outline-none cursor-pointer select-none active:scale-95"
                >
                  {/* Icon Circle Container with Interactive Click Animations */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      animation: on
                        ? "none"
                        : `tabFloat 3.2s ease-in-out ${i * 0.45}s infinite`,
                    }}
                  >
                    {/* Ripple Radar Wave on Inactive Tabs to prompt click */}
                    {!on && (
                      <span
                        className="pointer-events-none absolute h-14 w-14 sm:h-[60px] sm:w-[60px] rounded-full border-2 border-blue-400/40"
                        style={{
                          animation: `tabRipple 2.8s cubic-bezier(0, 0.2, 0.8, 1) ${i * 0.9}s infinite`,
                        }}
                      />
                    )}

                    {/* Main Interactive Disc */}
                    <span
                      className={`relative z-10 grid h-14 w-14 sm:h-[60px] sm:w-[60px] place-items-center rounded-full transition-all duration-300 transform-gpu ${
                        on
                          ? "bg-[#043A80] border-2 border-[#043A80] text-white scale-105 shadow-[0_8px_20px_rgba(4,58,128,0.35)]"
                          : "bg-white border border-blue-200 text-[#043A80] shadow-sm hover:border-[#043A80] hover:bg-blue-50/90 hover:scale-105 hover:shadow-md hover:shadow-blue-900/10"
                      }`}
                      style={
                        on
                          ? { animation: "activeAura 2.5s ease-in-out infinite" }
                          : undefined
                      }
                    >
                      <Icon
                        className={`h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 ${
                          on
                            ? "text-white scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                            : "text-[#043A80] group-hover:scale-110 group-hover:text-blue-700"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col items-center">
                    <b
                      className={`mt-1 font-sans text-xs sm:text-sm md:text-[15px] font-extrabold leading-tight transition-colors max-w-[110px] sm:max-w-none text-center ${
                        on ? "text-[#043A80]" : "text-slate-600 group-hover:text-[#043A80]"
                      }`}
                    >
                      {key}
                    </b>
                  </div>

                  <small className="hidden font-sans text-[11px] font-medium leading-tight text-slate-500 md:block transition-colors group-hover:text-[#043A80]">
                    {sub[0]}
                    <br />
                    {sub[1]}
                  </small>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Master Bottom Floating Card with Royal Glow */}
      <div className="relative z-20 mx-auto -mt-4 md:-mt-3 max-w-[1140px] px-3.5 sm:px-6 md:px-4">
        <div
          key={active}
          id="pillar-panel"
          role="tabpanel"
          aria-labelledby={`pillar-tab-${active}`}
          className="animate-[fadeUp_.4s_ease] rounded-2xl sm:rounded-3xl md:rounded-[24px] border border-blue-200/90 bg-white/95 backdrop-blur-xl p-4 sm:p-6 lg:p-7 shadow-[0_12px_45px_-10px_rgba(10,61,145,0.14),0_0_25px_rgba(59,130,246,0.10)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Column 1: Intro (Left) */}
            <div className="flex flex-col justify-between w-full lg:w-[28%] lg:pr-6">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-sans text-base font-extrabold text-secondary">{p.n}</span>
                  <span className="h-[1.5px] w-7 bg-secondary/70" />
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-primary mb-2">
                  {p.key}
                </h3>
                <div className="font-sans font-bold text-base leading-snug text-primary sm:text-[16px] mb-2">
                  {p.sub[0]}
                  <br />
                  {p.sub[1]}
                </div>
                <p className="font-sans text-[12.5px] sm:text-[13px] leading-relaxed text-foreground/80">
                  {p.text}
                </p>
              </div>
              <div className="mt-4 pt-1">
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full shadow-md shadow-primary/25 font-bold hover:scale-[1.02] text-xs sm:text-sm px-4 py-2"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Column 2: Features (Center) */}
            <div className="w-full lg:w-[36%] border-t lg:border-t-0 lg:border-x border-blue-100 py-5 lg:py-0 lg:px-6 flex flex-col justify-center">
              <ul className="divide-y divide-blue-50">
                {p.features.map(([Icon, title, desc]) => (
                  <li key={title} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0 group cursor-default">
                    <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full border border-blue-200 bg-blue-50/70 text-[#043A80] transition-all duration-300 group-hover:border-[#043A80] group-hover:bg-[#043A80] group-hover:text-white group-hover:scale-105 shadow-2xs">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[1.8]" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-sans text-[13.5px] font-bold leading-snug text-[#043A80] transition-colors group-hover:text-blue-700">{title}</h4>
                      <p className="font-sans mt-0.5 text-[11.5px] sm:text-[12px] leading-snug text-slate-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Showcase / Results (Right) */}
            <div className="w-full lg:w-[36%] flex flex-col justify-between pl-0 lg:pl-6 pt-2 lg:pt-0">
              {/* Filter Chips & Navigation */}
              <div className="mb-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]">
                  {p.slides.map((x, i) => (
                    <button
                      key={x.chip}
                      onClick={() => setSlide(i)}
                      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 font-sans text-[11.5px] font-bold transition-all cursor-pointer ${
                        i === slide
                          ? "bg-[#043A80] text-white shadow-md shadow-blue-900/20 ring-2 ring-amber-400/40 border border-transparent"
                          : "border border-slate-300 bg-white text-slate-700 hover:border-[#043A80] hover:text-[#043A80] hover:bg-blue-50/60 shadow-2xs"
                      }`}
                    >
                      {x.chip}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    aria-label="Previous slide"
                    onClick={() => move(-1)}
                    className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:border-[#043A80] hover:bg-[#043A80] hover:text-white hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => move(1)}
                    className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:border-[#043A80] hover:bg-[#043A80] hover:text-white hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Showcase Banner Box with Royal Sapphire Sheen */}
              <div
                key={`${active}-${slide}`}
                className="flex flex-row items-center overflow-hidden rounded-2xl border border-blue-200/80 bg-gradient-to-br from-white via-[#F0F5FD] to-[#E3EDFD]/80 p-3 sm:p-3.5 gap-3 sm:gap-3.5 transition-all shadow-[0_4px_25px_rgba(10,61,145,0.06),0_0_15px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(10,61,145,0.12)] hover:border-blue-300"
              >
                {/* Visual / Image (Same side-by-side layout on mobile and desktop) */}
                {s.image ? (
                  <div className="relative w-[105px] sm:w-[125px] shrink-0 self-stretch min-h-[110px] sm:min-h-[125px] rounded-xl overflow-hidden bg-white/70 border border-blue-200">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="grid w-[105px] sm:w-[125px] shrink-0 self-stretch min-h-[110px] sm:min-h-[125px] place-items-center rounded-xl bg-white/80 border border-blue-200">
                    <span className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-[#043A80] text-amber-400 ring-4 ring-amber-400/25 shadow-md">
                      <s.Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h5 className="mb-2 font-sans text-[13.5px] sm:text-[14.5px] font-bold leading-tight text-[#043A80] break-words">
                    {s.title}
                  </h5>
                  <ul className="space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 font-sans text-[11.5px] sm:text-[12px] font-medium text-slate-700">
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue-100 text-[#043A80] border border-blue-300/40">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug break-words">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/results"
                    className="mt-2.5 inline-flex items-center gap-1.5 font-sans text-[11.5px] sm:text-xs font-bold text-[#043A80] transition-all hover:text-amber-600 hover:translate-x-0.5"
                  >
                    <span>{s.link}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-1.5 pt-2">
                {p.slides.map((x, i) => (
                  <button
                    key={x.chip}
                    aria-label={x.chip}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === slide ? "w-5 bg-[#043A80]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
