"use client";

import { useState } from "react";
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
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-14 pb-16 md:pt-20 md:pb-24 select-none">
      {/* Background Photo 1 (Left): Students studying in uniform with soft fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[360px] w-[320px] md:h-[460px] md:w-[420px] overflow-hidden select-none opacity-85"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 35% 35%, black 40%, transparent 75%)",
          maskImage:
            "radial-gradient(circle at 35% 35%, black 40%, transparent 75%)",
        }}
      >
        <img
          src={HEADER_BG.leftPhoto}
          alt=""
          className="h-full w-full object-cover object-[55%_35%] scale-[1.18] transform-gpu"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Background Photo 2 (Right): Campus building with soft fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-6 hidden h-[380px] w-[420px] md:block overflow-hidden select-none opacity-75"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 75% 45%, black 35%, transparent 75%)",
          maskImage:
            "radial-gradient(circle at 75% 45%, black 35%, transparent 75%)",
        }}
      >
        <img
          src={HEADER_BG.rightPhoto}
          alt=""
          className="h-full w-full object-cover object-bottom scale-[1.1] transform-gpu"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Top Right Corner Vertical Quote */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-14 z-10 hidden select-none min-[1380px]:flex flex-col items-start"
      >
        <div className="border-l border-[#C59B4B] pl-4 py-1 space-y-1">
          <div className="font-serif italic text-base lg:text-[17px] text-[#8C827A] leading-snug">Discipline</div>
          <div className="font-serif italic text-base lg:text-[17px] text-[#8C827A] leading-snug">Learning</div>
          <div className="font-serif italic text-base lg:text-[17px] text-[#8C827A] leading-snug">Growth</div>
          <div className="font-serif italic text-base lg:text-[17px] text-[#8C827A] leading-snug">Opportunities</div>
        </div>
        <div className="pl-4 mt-2">
          <Crown className="w-5 h-5 text-[#C59B4B]" />
        </div>
      </div>

      {/* Section Header */}
      <header className="relative z-10 mx-auto max-w-[760px] px-4 text-center">
        {/* Crown Icon */}
        <div className="flex justify-center mb-2.5">
          <Crown className="h-7 w-7 text-[#C59B4B]" aria-hidden="true" />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-12 bg-[#C59B4B]/70" />
          <span className="text-[12px] font-semibold tracking-[0.22em] text-[#8A8278] uppercase">
            OUR THREE PILLARS
          </span>
          <span className="h-px w-12 bg-[#C59B4B]/70" />
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#061B3A] tracking-tight leading-[1.18]">
          A Well-Rounded Education
          <br className="hidden sm:inline" />{" "}
          <span className="font-serif font-bold text-[#061B3A]">for a </span>
          <span className="font-serif italic font-normal text-[#C59B4B]">Brighter Future</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280] max-w-[620px] mx-auto">
          At Prince Academy, we integrate strong academics, competitive learning and a wide range of
          co-curricular opportunities to help every student discover their potential and achieve more.
        </p>
      </header>

      {/* Arched Stage Mound Behind Tabs */}
      <div className="relative mx-auto mt-8 max-w-[1240px] px-4">
        <div className="relative overflow-hidden rounded-t-[90px] sm:rounded-t-[170px] lg:rounded-t-[250px] border-t border-[#E5DEC7]/80 bg-gradient-to-b from-[#EFEAE0]/80 via-[#F7F3EB]/50 to-transparent pt-8 sm:pt-12 pb-6 px-4">
          {/* Subtle angled radial divider lines */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-[33.3%] top-4 bottom-0 w-px bg-[#E2D8C6] -rotate-[10deg] origin-top opacity-60 hidden md:block" />
            <div className="absolute right-[33.3%] top-4 bottom-0 w-px bg-[#E2D8C6] rotate-[10deg] origin-top opacity-60 hidden md:block" />
          </div>

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
                  className="group flex flex-col items-center gap-2 px-2 py-2 text-center transition-all focus:outline-none"
                >
                  <span
                    className={`grid h-16 w-16 sm:h-[72px] sm:w-[72px] place-items-center rounded-full transition-all duration-300 ${
                      on
                        ? "bg-[#061B3A] border-2 border-[#D4A359] text-white shadow-xl ring-4 ring-[#D4A359]/25 scale-105"
                        : "bg-white/90 border border-[#D8C7B0] text-[#C49245] shadow-sm hover:bg-white hover:scale-102"
                    }`}
                  >
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${on ? "text-white" : "text-[#C49245]"}`} />
                  </span>
                  <b className="mt-1 text-sm font-bold leading-tight text-[#061B3A] sm:text-base md:text-lg">
                    {key}
                  </b>
                  <small className="hidden text-[12px] font-medium leading-tight text-[#71717A] md:block">
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
      <div className="relative z-20 mx-auto -mt-3 max-w-[1260px] px-4">
        <div
          key={active}
          id="pillar-panel"
          role="tabpanel"
          aria-labelledby={`pillar-tab-${active}`}
          className="animate-[fadeUp_.4s_ease] rounded-[28px] border border-[#EDE5D8] bg-white p-6 shadow-[0_20px_50px_rgba(6,27,58,0.07)] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-0">
            {/* Column 1: Intro (Left) */}
            <div className="flex flex-col justify-between w-full lg:w-[28%] lg:pr-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-serif text-lg font-bold text-[#C59B4B]">{p.n}</span>
                  <span className="h-[1.5px] w-8 bg-[#C59B4B]/60" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#061B3A] sm:text-4xl mb-2.5">
                  {p.key}
                </h3>
                <div className="font-serif font-bold text-lg leading-snug text-[#061B3A] sm:text-[19px] mb-3">
                  {p.sub[0]}
                  <br />
                  {p.sub[1]}
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#606775]">
                  {p.text}
                </p>
              </div>
              <div className="mt-6 pt-2">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A359] to-[#C49245] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-md shadow-[#C49245]/20 hover:brightness-105 active:scale-95 transition-all">
                  <span>{p.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Column 2: Features (Center) */}
            <div className="w-full lg:w-[36%] border-t lg:border-t-0 lg:border-x border-[#EFE9DF] py-6 lg:py-0 lg:px-8 flex flex-col justify-center">
              <ul className="divide-y divide-[#F2ECE2]">
                {p.features.map(([Icon, title, desc]) => (
                  <li key={title} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ECDDBF] bg-[#FAF5EC] text-[#C49245] shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-[14.5px] font-bold leading-snug text-[#061B3A]">{title}</h4>
                      <p className="mt-0.5 text-[12.5px] leading-snug text-[#6E7480]">{desc}</p>
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
                      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                        i === slide
                          ? "bg-[#061B3A] text-white shadow-sm"
                          : "border border-[#DDD5C7] bg-white text-[#606775] hover:border-[#061B3A] hover:text-[#061B3A]"
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
                    className="grid h-7.5 w-7.5 place-items-center rounded-full border border-[#DDD5C7] bg-white text-[#606775] transition hover:border-[#061B3A] hover:text-[#061B3A]"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label="Next slide"
                    onClick={() => move(1)}
                    className="grid h-7.5 w-7.5 place-items-center rounded-full border border-[#DDD5C7] bg-white text-[#606775] transition hover:border-[#061B3A] hover:text-[#061B3A]"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Showcase Banner Box */}
              <div
                key={`${active}-${slide}`}
                className="flex flex-col sm:flex-row items-center overflow-hidden rounded-2xl border border-[#EFE1CC] bg-[#FAF3E7] p-4 sm:p-5 gap-4.5 transition-all shadow-inner/10"
              >
                {/* Visual / Image */}
                {s.image ? (
                  <div className="relative w-full sm:w-[150px] shrink-0 self-stretch min-h-[140px] sm:min-h-0 rounded-xl overflow-hidden bg-[#FAF3E7]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="grid w-full sm:w-[130px] shrink-0 self-stretch min-h-[130px] place-items-center rounded-xl bg-[#F4E9D5]/60 border border-[#ECDDBF]">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#061B3A] text-[#D4A359] ring-4 ring-[#D4A359]/20 shadow-md">
                      <s.Icon className="h-7 w-7" />
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0 text-[#061B3A] flex flex-col justify-center">
                  <h5 className="mb-2 text-[15px] sm:text-[16px] font-serif font-bold leading-tight text-[#061B3A] break-words">
                    {s.title}
                  </h5>
                  <ul className="space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[12px] font-medium text-[#4A5568]">
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#EAC98E] text-[#061B3A]">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-snug break-words">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/results"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#061B3A] transition-colors hover:text-[#C49245]"
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
                      i === slide ? "w-5 bg-[#C59B4B]" : "w-1.5 bg-[#DDD5C7]"
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
