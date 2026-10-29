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
    <section className="relative overflow-hidden bg-background pt-0 pb-12 sm:pt-14 sm:pb-16 md:pt-20 md:pb-24 select-none">
      {/* Background Photo: Single full image spanning behind the header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 sm:top-0 h-[410px] sm:h-[440px] md:h-[500px] overflow-hidden select-none opacity-90"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        <img
          src={HEADER_BG.leftPhoto}
          alt=""
          className="h-full w-full object-cover object-[center_35%] scale-[1.38] -translate-y-6 sm:scale-100 sm:translate-y-0 transform-gpu"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Section Header */}
      <header className="relative z-10 mx-auto max-w-[800px] px-4 pt-4 sm:pt-2 text-center">
        {/* Frosted Glass Overlay Card - Low opacity, transparent, no shadow over image */}
        <div className="rounded-2xl sm:rounded-3xl border border-secondary/25 bg-white/25 sm:bg-white/30 p-5 sm:p-8 backdrop-blur-md shadow-none">
          {/* Crown Icon from Reference Design */}
          <div className="flex justify-center mb-2.5">
            <Crown className="h-6 w-6 sm:h-7 sm:w-7 text-secondary stroke-[1.8]" />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 sm:w-12 bg-secondary/70" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-primary uppercase">
              OUR THREE PILLARS
            </span>
            <span className="h-px w-10 sm:w-12 bg-secondary/70" />
          </div>

          {/* Main Heading (Clean typography, no text shadows) */}
          <h2 className="font-sans text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-primary tracking-tight leading-[1.2]">
            A Well-Rounded Education
            <br className="hidden sm:inline" />{" "}
            <span className="font-bold text-primary">for a </span>
            <span className="italic font-bold text-secondary">Brighter Future</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-[13.5px] sm:text-[14px] font-medium leading-relaxed text-primary/75 max-w-[620px] mx-auto">
            At Prince Academy, we integrate strong academics, competitive learning and a wide range of
            co-curricular opportunities to help every student discover their potential and achieve more.
          </p>
        </div>
      </header>

      {/* Arched Stage Mound Behind Tabs */}
      <div className="relative mx-auto mt-6 md:mt-8 max-w-[1240px] px-0 md:px-4">
        <div className="relative overflow-hidden rounded-t-[70px] sm:rounded-t-[170px] lg:rounded-t-[250px] border-t border-border bg-gradient-to-b from-light-blue/80 via-background/50 to-transparent pt-8 sm:pt-12 pb-16 sm:pb-12 md:pb-6 px-2 sm:px-4 shadow-[0_-6px_22px_rgba(10,61,145,0.18),0_10px_25px_rgba(10,61,145,0.12)] md:shadow-[0_-8px_35px_-12px_rgba(10,61,145,0.08),0_15px_40px_-15px_rgba(10,61,145,0.06)]">
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
              0%, 100% { box-shadow: 0 10px 25px -4px rgba(10,61,145,0.45), 0 0 0 4px rgba(120,182,245,0.35); }
              50% { box-shadow: 0 14px 30px -4px rgba(10,61,145,0.6), 0 0 0 8px rgba(120,182,245,0.18); }
            }
          `}</style>

          {/* 3 Pillar Tabs */}
          <div
            role="tablist"
            aria-label="Our three pillars"
            className="relative z-10 grid grid-cols-3 max-w-[980px] mx-auto gap-2"
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
                  className="group flex flex-col items-center gap-2 px-2 py-2 text-center transition-all duration-300 focus:outline-none cursor-pointer select-none active:scale-95"
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
                        className="pointer-events-none absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full border-2 border-secondary"
                        style={{
                          animation: `tabRipple 2.8s cubic-bezier(0, 0.2, 0.8, 1) ${i * 0.9}s infinite`,
                        }}
                      />
                    )}

                    {/* Active Tab Glow Ring */}
                    {on && (
                      <span className="pointer-events-none absolute -inset-1.5 rounded-full bg-secondary/25 blur-xs animate-pulse" />
                    )}

                    {/* Main Interactive Disc */}
                    <span
                      className={`relative z-10 grid h-16 w-16 sm:h-[72px] sm:w-[72px] place-items-center rounded-full transition-all duration-300 transform-gpu ${
                        on
                          ? "bg-primary border-2 border-secondary text-primary-foreground scale-105"
                          : "bg-white/95 border border-border text-primary shadow-md shadow-primary/5 hover:border-secondary hover:bg-light-blue hover:text-secondary-hover hover:scale-108 hover:shadow-lg hover:shadow-secondary/25"
                      }`}
                      style={
                        on
                          ? { animation: "activeAura 2.5s ease-in-out infinite" }
                          : undefined
                      }
                    >
                      <Icon
                        className={`h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-115 ${
                          on ? "text-primary-foreground scale-105" : "text-primary"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Title & Active Indicator (Primary Font) */}
                  <div className="flex flex-col items-center">
                    <b
                      className={`mt-1 font-sans text-xs sm:text-base md:text-lg font-extrabold leading-tight transition-colors group-hover:text-primary max-w-[110px] sm:max-w-none text-center ${
                        on ? "text-primary" : "text-primary/80"
                      }`}
                    >
                      {key}
                    </b>

                    {/* Active Indicator Bar pointing to content */}
                    {on ? (
                      <span className="mt-1 h-1 w-6 sm:w-8 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)] transition-all" />
                    ) : (
                      <span className="mt-1 h-1 w-2 rounded-full bg-transparent group-hover:bg-secondary/40 transition-all" />
                    )}
                  </div>

                  <small className="hidden font-sans text-[12px] font-medium leading-tight text-primary/70 md:block transition-colors group-hover:text-primary">
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

      {/* Master Bottom Floating Card */}
      <div className="relative z-20 mx-auto -mt-4 md:-mt-3 max-w-[1260px] px-0 md:px-4">
        <div
          key={active}
          id="pillar-panel"
          role="tabpanel"
          aria-labelledby={`pillar-tab-${active}`}
          className="animate-[fadeUp_.4s_ease] rounded-none md:rounded-[28px] border-y md:border border-border bg-white p-5 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(10,61,145,0.14)] md:shadow-[0_20px_50px_rgba(10,61,145,0.06)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Column 1: Intro (Left) */}
            <div className="flex flex-col justify-between w-full lg:w-[28%] lg:pr-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-lg font-extrabold text-secondary">{p.n}</span>
                  <span className="h-[1.5px] w-8 bg-secondary/70" />
                </div>
                <h3 className="font-sans text-3xl font-extrabold tracking-tight text-primary sm:text-4xl mb-2.5">
                  {p.key}
                </h3>
                <div className="font-sans font-bold text-lg leading-snug text-primary sm:text-[19px] mb-3">
                  {p.sub[0]}
                  <br />
                  {p.sub[1]}
                </div>
                <p className="font-sans text-[13.5px] leading-relaxed text-foreground/80">
                  {p.text}
                </p>
              </div>
              <div className="mt-6 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-full shadow-md shadow-primary/25 font-bold hover:scale-[1.02]"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Column 2: Features (Center) */}
            <div className="w-full lg:w-[36%] border-t lg:border-t-0 lg:border-x border-light-blue py-6 lg:py-0 lg:px-8 flex flex-col justify-center">
              <ul className="divide-y divide-light-blue">
                {p.features.map(([Icon, title, desc]) => (
                  <li key={title} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0 group">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-secondary/30 bg-light-blue text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-sans text-[14.5px] font-bold leading-snug text-primary">{title}</h4>
                      <p className="font-sans mt-0.5 text-[12.5px] leading-snug text-foreground/70">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Showcase / Results (Right) */}
            <div className="w-full lg:w-[36%] flex flex-col justify-between pl-0 lg:pl-8 pt-2 lg:pt-0">
              {/* Filter Chips & Navigation */}
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none]">
                  {p.slides.map((x, i) => (
                    <button
                      key={x.chip}
                      onClick={() => setSlide(i)}
                      className={`whitespace-nowrap rounded-full px-4 py-1.5 font-sans text-xs font-bold transition-all ${
                        i === slide
                          ? "bg-primary text-primary-foreground shadow-sm ring-2 ring-secondary/30"
                          : "border border-border bg-white text-foreground/75 hover:border-secondary hover:text-primary"
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
                    className="grid h-7.5 w-7.5 place-items-center rounded-full border border-border bg-white text-foreground/75 transition hover:border-secondary hover:text-primary"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => move(1)}
                    className="grid h-7.5 w-7.5 place-items-center rounded-full border border-border bg-white text-foreground/75 transition hover:border-secondary hover:text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Showcase Banner Box */}
              <div
                key={`${active}-${slide}`}
                className="flex flex-row items-center overflow-hidden rounded-2xl border border-secondary/25 bg-gradient-to-br from-background to-light-blue p-3.5 sm:p-5 gap-3.5 sm:gap-4.5 transition-all shadow-inner/10"
              >
                {/* Visual / Image (Same side-by-side layout on mobile and desktop) */}
                {s.image ? (
                  <div className="relative w-[115px] sm:w-[150px] shrink-0 self-stretch min-h-[125px] sm:min-h-[145px] rounded-xl overflow-hidden bg-white/70 border border-border">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="grid w-[115px] sm:w-[150px] shrink-0 self-stretch min-h-[125px] sm:min-h-[145px] place-items-center rounded-xl bg-white/80 border border-secondary/30">
                    <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-primary text-secondary ring-4 ring-secondary/25 shadow-md">
                      <s.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h5 className="mb-2.5 font-sans text-[15px] sm:text-[17px] font-bold leading-tight text-primary break-words">
                    {s.title}
                  </h5>
                  <ul className="space-y-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 font-sans text-[12px] sm:text-[13px] font-medium text-foreground/85">
                        <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-light-blue text-primary border border-secondary/35">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug break-words">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/results"
                    className="mt-3.5 inline-flex items-center gap-1.5 font-sans text-xs sm:text-[13px] font-bold text-primary transition-colors hover:text-secondary"
                  >
                    <span>{s.link}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-1.5 pt-3">
                {p.slides.map((x, i) => (
                  <button
                    key={x.chip}
                    aria-label={x.chip}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? "w-5 bg-secondary" : "w-1.5 bg-border"
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
