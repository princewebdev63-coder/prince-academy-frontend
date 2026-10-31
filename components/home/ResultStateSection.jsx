"use client";

import { useState } from "react";
import {
  Crown,
  GraduationCap,
  Trophy,
  Medal,
  Users,
  BookOpen,
  TrendingUp,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const pillarsData = [
  {
    id: "academics",
    number: "01",
    icon: GraduationCap,
    title: "Academics",
    tagline: "Strong Foundations.\nExceptional Results.",
    headline: "Academics",
    subtitle: "Strong Foundations. Exceptional Results.",
    description:
      "Focused conceptual clarity, rigorous CBSE board preparation and continuous mentoring for top results in Class 10 & 12.",
    cta: "Explore Academics",
    href: "/curriculum",
    features: [
      {
        icon: Users,
        title: "Experienced Faculty",
        description: "Personalised mentoring by top educators",
      },
      {
        icon: BookOpen,
        title: "Structured Curriculum",
        description: "Concept clarity & regular assessments",
      },
      {
        icon: TrendingUp,
        title: "Doubt Support",
        description: "Daily 1-on-1 problem-solving sessions",
      },
      {
        icon: Star,
        title: "Consistent Track Record",
        description: "100% board results year after year",
      },
    ],
  },
  {
    id: "competitive",
    number: "02",
    icon: Trophy,
    title: "Competitive Schooling",
    tagline: "Beyond the Classroom.\nAhead of the Curve.",
    headline: "Competitive Schooling",
    subtitle: "Beyond the Classroom. Ahead of the Curve.",
    description:
      "Integrated coaching for IIT-JEE, NEET, NDA & Olympiads alongside CBSE schooling for balanced, stress-free success.",
    cta: "Explore Programs",
    href: "/competitive",
    features: [
      {
        icon: Trophy,
        title: "Targeted Coaching",
        description: "Specialised modules & daily practice sets",
      },
      {
        icon: BookOpen,
        title: "Advanced Problem Solving",
        description: "In-depth analytics & All-India test series",
      },
      {
        icon: TrendingUp,
        title: "Olympiad Mentorship",
        description: "Focused training for NTSE, KVPY & Olympiads",
      },
      {
        icon: Star,
        title: "Proven Top Ranks",
        description: "Consistent All-India Ranks in JEE & NEET",
      },
    ],
  },
  {
    id: "sports",
    number: "03",
    icon: Medal,
    title: "Sports & Activities",
    tagline: "Explore. Participate.\nExcel.",
    headline: "Sports & Activities",
    subtitle: "Explore. Participate. Excel.",
    description:
      "Olympic-grade sports grounds, NIS coaches and creative clubs developing fitness, character and leadership.",
    cta: "Explore Sports",
    href: "/facilities",
    features: [
      {
        icon: Medal,
        title: "Olympic Infrastructure",
        description: "Synthetic tracks, shooting range & swimming",
      },
      {
        icon: Users,
        title: "Certified NIS Coaches",
        description: "Expert training across 15+ disciplines",
      },
      {
        icon: TrendingUp,
        title: "National Medals",
        description: "Champions at SGFI & CBSE Nationals",
      },
      {
        icon: Star,
        title: "Arts & Leadership",
        description: "Yoga, martial arts, debate & music clubs",
      },
    ],
  },
];

const resultSlides = [
  {
    tabIndex: 0,
    title: "Consistent Excellence in Class 10",
    stats: [
      "Pass Percentage: 100%",
      "650+ Students Scored 90%+",
      "150+ Students Scored 95%+",
    ],
  },
  {
    tabIndex: 1,
    title: "Outstanding Results in Class 12",
    stats: [
      "100% Board Examination Results",
      "500+ Students Scored 90%+",
      "100+ Students Scored 95%+",
    ],
  },
  {
    tabIndex: 0,
    title: "CBSE & Olympiad Toppers",
    stats: [
      "Top All-India CBSE Rankings",
      "State Rank 1 & District Toppers",
      "100% College Admissions Guidance",
    ],
  },
];

export default function ThreePillars() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [activeResultSlide, setActiveResultSlide] = useState(0);

  const currentPillar = pillarsData[activePillarIndex];
  const currentSlide = resultSlides[activeResultSlide];

  const handleNextSlide = () => {
    setActiveResultSlide((prev) => (prev + 1) % resultSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveResultSlide(
      (prev) => (prev - 1 + resultSlides.length) % resultSlides.length
    );
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F4F8FE] via-[#EAF2FC] to-[#F4F8FE] py-12 text-[#04285E] sm:py-16 lg:py-20">
      {/* Matching Light Theme Ambient Glows as in HeroPlus & FAQSection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Soft daylight top-radial glow */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 75% at 50% 0%, #FFFFFF 0%, #F0F6FE 40%, #EAF2FC 75%, #F4F8FE 100%)",
          }}
        />
        {/* Soft Blue Left Orb (matches HeroPlus -left-20) */}
        <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
        {/* Soft Warm Yellow Orb (matches HeroPlus -right-20) */}
        <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/25 to-yellow-500/20 blur-3xl" />
        {/* Soft Center Sky Aura */}
        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-64 w-[600px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <header className="mx-auto max-w-3xl text-center">
          

          {/* Badge With Yellow Hairlines */}
          <div className="mt-2.5 flex items-center justify-center gap-3.5 sm:gap-4">
          
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#04285E] sm:text-[13px]">
              Our Three Pillars
            </span>
            
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#04285E] sm:text-5xl lg:text-[54px]">
            A Well-Rounded Education
            <br />
            for a{" "}
            <span className="font-serif italic font-normal text-yellow-500">
              Brighter Future
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-3.5 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-[14.5px] sm:leading-6">
            At Prince Academy, we integrate strong academics, competitive
            learning and a wide range of co-curricular opportunities to help
            every student discover their potential and achieve more.
          </p>
        </header>

        {/* Three Pillars Curved Arc / Circle Section */}
        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 w-full max-w-[1160px] lg:max-w-[1180px] xl:max-w-[1200px] px-2.5 sm:px-4 lg:px-0">
          {/* Responsive SVG Circle Arch - Wider desktop arch with line running through icon badge centers and tucking cleanly behind the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[210px] sm:h-[240px] lg:h-[270px] xl:h-[285px] w-full overflow-hidden"
          >
            <svg
              viewBox="0 0 1000 270"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#EAF2FC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>
              </defs>
              {/* Filled Dome Canopy */}
              <path
                d="M 15 166 Q 500 -70 985 166 L 985 270 L 15 270 Z"
                fill="url(#archFill)"
              />
              {/* Elegant Arch Curve Line - Wider desktop span, ends tuck cleanly behind the lower white card */}
              <path
                d="M 15 166 Q 500 -70 985 166"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 3 Pillars Grid - Centered & Aligned on the Arch line (Title only, no description, no indicator line) */}
          <div className="relative z-10 mx-auto grid max-w-[1060px] grid-cols-3 px-1 sm:px-4 pt-2.5 sm:pt-3 pb-2 sm:pb-3">
            {pillarsData.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activePillarIndex === index;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarIndex(index)}
                  className={`group relative flex flex-col items-center px-1 text-center cursor-pointer transition-transform duration-200 sm:px-3 focus:outline-none ${
                    index === 1 ? "mt-0" : "mt-9 sm:mt-12 lg:mt-14"
                  }`}
                >
                  {/* Circular Icon Badge - Aligned with and sitting on top of the Circle Line */}
                  <div
                    className={`relative z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-[66px] sm:w-[66px] lg:h-[76px] lg:w-[76px] ${
                      isActive
                        ? "border-yellow-500 bg-[#04285E] text-white shadow-[0_10px_30px_rgba(4,40,94,0.3)] scale-105 ring-4 ring-yellow-400/25"
                        : "border-yellow-400/80 bg-white text-yellow-500 shadow-xs group-hover:border-[#04285E] group-hover:text-[#04285E] group-hover:scale-105"
                    }`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                    />
                  </div>

                  {/* Pillar Title Only */}
                  <h3
                    className={`mt-2 font-serif text-[13px] font-bold leading-tight transition-colors sm:mt-2.5 sm:text-[17px] lg:text-[19px] ${
                      isActive
                        ? "text-[#04285E]"
                        : "text-[#04285E]/85 group-hover:text-[#04285E]"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Bottom Floating Card (The 3-Column Showcase) - Sleek, Compact Height, Wider Box */}
          <div className="relative z-20 -mt-2 sm:-mt-3 lg:-mt-4 rounded-[24px] sm:rounded-[32px] border border-blue-200/90 bg-white/95 p-4 sm:p-5 lg:p-6 shadow-[0_20px_70px_rgba(4,40,94,0.08)] backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.1fr_1.75fr] lg:gap-5 xl:gap-6">
              {/* Column 1: Left Content */}
              <div className="flex flex-col justify-between border-b border-blue-100 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
                <div>
                  {/* Yellow Number Badge */}
                  <div className="flex items-center gap-2.5">
                    <span className="font-serif text-xl font-bold text-yellow-500 sm:text-2xl">
                      {currentPillar.number}
                    </span>
                    <span className="h-0.5 w-10 bg-yellow-500" />
                  </div>

                  {/* Headline */}
                  <h3 className="mt-2 font-serif text-2xl font-bold leading-tight tracking-tight text-[#04285E] sm:text-3xl">
                    {currentPillar.headline}
                  </h3>

                  {/* Subtitle */}
                  <h4 className="mt-1 font-serif text-sm font-bold leading-snug text-[#0B2545] sm:text-base">
                    {currentPillar.subtitle}
                  </h4>

                  <div className="mt-2 h-0.5 w-12 bg-yellow-500" />

                  {/* Shortened Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {currentPillar.description}
                  </p>
                </div>

                {/* Primary Royal Blue CTA Button */}
                <a
                  href={currentPillar.href}
                  className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#04285E] text-white hover:bg-[#063C8A] px-6 py-2.5 text-xs sm:text-[13px] font-bold shadow-md shadow-[#04285E]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#04285E]/30 active:scale-95 cursor-pointer"
                >
                  {currentPillar.cta}
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Column 2: Center Feature Rows - Compact Gap */}
              <div className="flex flex-col justify-center gap-2.5 sm:gap-3 border-b border-blue-100 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:px-3">
                {currentPillar.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-center gap-3"
                    >
                      {/* Circular Yellow-tinted Icon */}
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-yellow-200 bg-yellow-50 text-yellow-500 shadow-2xs">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      {/* Feature Text */}
                      <div>
                        <h5 className="font-bold text-[13px] sm:text-[14px] leading-tight text-[#04285E]">
                          {feature.title}
                        </h5>
                        <p className="mt-0.5 text-[11px] sm:text-[12px] leading-tight text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 3: Right Results Showcase Banner */}
              <div className="min-w-0 flex flex-col justify-between">
                {/* Top Row: Sub-tabs and Nav Arrows */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  {/* Results Sub-Tabs */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveResultSlide(0)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer sm:px-4 sm:text-[12px] ${
                        activeResultSlide === 0
                          ? "bg-[#04285E] text-white shadow-xs"
                          : "bg-[#EAF2FC] text-[#04285E] hover:bg-[#DCEBFC]"
                      }`}
                    >
                      Class 10 Results
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveResultSlide(1)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer sm:px-4 sm:text-[12px] ${
                        activeResultSlide === 1
                          ? "bg-[#04285E] text-white shadow-xs"
                          : "bg-[#EAF2FC] text-[#04285E] hover:bg-[#DCEBFC]"
                      }`}
                    >
                      Class 12 Results
                    </button>
                  </div>

                  {/* Left / Right Nav Arrows */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      aria-label="Previous result"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 text-[#04285E] transition hover:border-[#04285E] hover:bg-[#EAF2FC] cursor-pointer"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      aria-label="Next result"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 text-[#04285E] transition hover:border-[#04285E] hover:bg-[#EAF2FC] cursor-pointer"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Showcase Banner Card */}
                <div className="mt-2 relative overflow-hidden rounded-xl border border-yellow-200/80 bg-gradient-to-br from-[#FFFDF8] via-[#FFFBEB] to-[#FEF3C7] p-3 sm:p-3.5 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    {/* Left: 3 Achiever Students Image */}
                    <div className="relative w-full sm:w-[46%] shrink-0 h-[140px] sm:h-[155px] overflow-hidden rounded-lg bg-yellow-100/40 shadow-xs">
                      <img
                        src="/images/pillar-students.jpg"
                        alt="Prince Academy achiever students"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Right: Results Content */}
                    <div className="flex-1 w-full min-w-0">
                      <h4 className="font-serif text-sm font-bold leading-tight text-[#04285E] sm:text-[16px]">
                        {currentSlide.title}
                      </h4>

                      {/* Yellow Hairline */}
                      <div className="my-1.5 h-0.5 w-8 bg-yellow-500" />

                      {/* Stat Checkmarks */}
                      <div className="space-y-1.5">
                        {currentSlide.stats.map((stat) => (
                          <div key={stat} className="flex items-center gap-2">
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white shadow-2xs">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span className="text-[11.5px] font-semibold text-slate-700 sm:text-[12px]">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* View Detailed Results Link */}
                      <a
                        href="/results"
                        className="mt-2.5 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#04285E] transition hover:text-yellow-600 underline decoration-blue-200 underline-offset-4 hover:decoration-yellow-500"
                      >
                        View Detailed Results
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Pagination Dots at Bottom */}
                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                  {resultSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveResultSlide(idx)}
                      aria-label={`Go to result slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeResultSlide === idx
                          ? "w-5 bg-yellow-500"
                          : "w-1.5 bg-blue-200 hover:bg-yellow-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
