
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  ClipboardCheck,
  Flag,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const slides = [
  {
    src: "/images/olympiad.webp",
    alt: "Prince Academy Olympiad Achievements and National Top Ranks",
  },
  {
    src: "/images/result1.webp",
    alt: "Prince Academy CBSE Board & Competitive Exam Results",
  },
  {
    src: "/images/result2.webp",
    alt: "Prince Academy National Toppers and Outstanding Ranks",
  },
  {
    src: "/images/result3.webp",
    alt: "Prince Academy Record-Breaking Selections and Results",
  },
  {
    src: "/images/result4.webp",
    alt: "Prince Academy Competitive Examination Achievers",
  },
];

const features = [
  {
    title: "Expert Academic Guidance",
    description:
      "Build strong concepts with structured teaching and academic support.",
    category: "LEARN",
    icon: GraduationCap,
  },
  {
    title: "Goal-Focused Preparation",
    description:
      "Stay focused on your course, syllabus and examination goals.",
    category: "PREPARE",
    icon: Target,
  },
  {
    title: "Regular Assessment",
    description:
      "Test your understanding and discover where you can improve.",
    category: "PRACTICE",
    icon: ClipboardCheck,
  },
  {
    title: "Discipline & Values",
    description:
      "Develop consistent habits, responsibility and confidence.",
    category: "DEVELOP",
    icon: ShieldCheck,
  },
  {
    title: "Personal Guidance",
    description:
      "Get direction for your individual learning journey.",
    category: "SUPPORT",
    icon: Users,
  },
  {
    title: "Quality Study Material",
    description:
      "Use organised resources for concept building and revision.",
    category: "LEARN",
    icon: BookOpen,
  },
  {
    title: "Progress Review",
    description:
      "Use feedback to recognise improvement and plan next steps.",
    category: "IMPROVE",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Growth-Oriented Environment",
    description:
      "Stay motivated in an environment that encourages effort and ambition.",
    category: "GROW",
    icon: Flag,
  },
];

export default function WhyPrinceAcademy() {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = useCallback((direction) => {
    setActiveSlide((current) => {
      return (current + direction + slides.length) % slides.length;
    });
  }, []);

  // Timeline progress follows scroll in both directions.
  useEffect(() => {
    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;

    if (!timeline || !progressLine) return;

    let frameId = null;

    const updateProgress = () => {
      frameId = null;

      const rect = timeline.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.58;

      const progress = Math.max(
        0,
        Math.min(1, (triggerPoint - rect.top) / rect.height)
      );

      progressLine.style.transform = `scaleY(${progress})`;
    };

    const onScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // Auto slider; disabled when reduced motion is preferred.
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-labelledby="why-prince-heading"
      className="relative overflow-hidden bg-[#0B1420] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      {/* Subtle static background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 h-72 w-72 rounded-full bg-[#4F8EAD]/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-8 max-w-3xl sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9B66F]">
              Why Prince Academy
            </span>
          </div>

          <h2
            id="why-prince-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Your Ambition. {" "}
            <span className="mt-1 text-[#8FBBD4]">
              Our Commitment.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A9B8C7] sm:text-base sm:leading-7">
            The right environment can transform how you learn,
            prepare and grow. Discover what makes the Prince
            Academy experience distinctive.
          </p>
        </div>

        {/* Image slider - Results and Olympiad Banners */}
        <div className="mb-10 sm:mb-12">
          <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl border border-[#304354] bg-[#142638] sm:aspect-[1818/576]">
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeSlide === index
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
                aria-hidden={activeSlide !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-7 bg-[#D9B66F]"
                      : "w-3 bg-[#52677A] hover:bg-[#8FBBD4]"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#405466] text-[#DCE6ED] transition-colors hover:border-[#D9B66F] hover:text-[#D9B66F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66F]"
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next image"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#405466] text-[#DCE6ED] transition-colors hover:border-[#D9B66F] hover:text-[#D9B66F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66F]"
              >
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline heading */}
        <div className="mb-6 max-w-2xl sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8FBBD4]">
            The Difference
          </span>

          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A journey built around you.
          </h3>
        </div>

        {/* Scroll-responsive timeline */}
        <div ref={timelineRef} className="relative">
          {/* Base line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[13px] top-0 w-[2px] bg-[#52677A] sm:left-[17px]"
          />

          {/* Gold line fills downward and reverses on upward scroll */}
          <div
            ref={progressLineRef}
            aria-hidden="true"
            className="absolute left-[13px] top-0 h-full w-[2px] origin-top bg-[#D9B66F] sm:left-[17px]"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-5 sm:space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-3 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-5"
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 flex justify-center pt-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#52677A] bg-[#0B1420] sm:h-9 sm:w-9">
                      <span className="h-2 w-2 rounded-full bg-[#D9B66F]" />
                    </span>
                  </div>

                  {/* Feature details */}
                  <div className="flex flex-col gap-2 border-b border-[#263848] pb-4 sm:flex-row sm:items-start sm:gap-5 sm:pb-5">
                    <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#172A3B] text-[#8FBBD4] sm:h-10 sm:w-10">
                        <Icon size={19} aria-hidden="true" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D9B66F]">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {feature.category}
                        </span>

                        <h4 className="mt-1 text-base font-semibold text-white sm:text-lg">
                          {feature.title}
                        </h4>

                        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#A9B8C7]">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-xl border border-[#304354] bg-[#132536] p-4 sm:mt-10 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B66F]">
                Your Next Chapter
              </span>

              <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                Every great journey starts with a decision.
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#A9B8C7]">
                Discover the Prince Academy experience and take
                the next step towards your goals.
              </p>
            </div>

            <Link
              href="/about-institute"
              className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#D9B66F] px-4 py-2.5 text-sm font-bold text-[#102030] transition-colors hover:bg-[#E8CB8D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B66F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#132536] sm:self-auto"
            >
              Explore Academy
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
