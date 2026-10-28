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

/* ------------------------------------------------------------------ */
/* Static data                                                         */
/* ------------------------------------------------------------------ */

const AUTOPLAY_MS = 5000;

const slides = [
  { src: "/images/olympiad.webp", alt: "Prince Academy Olympiad Achievements and National Top Ranks" },
  { src: "/images/result1.webp", alt: "Prince Academy CBSE Board & Competitive Exam Results" },
  { src: "/images/result2.webp", alt: "Prince Academy National Toppers and Outstanding Ranks" },
  { src: "/images/result3.webp", alt: "Prince Academy Record-Breaking Selections and Results" },
  { src: "/images/result4.webp", alt: "Prince Academy Competitive Examination Achievers" },
];

const features = [
  { short: "Guidance", title: "Expert Academic Guidance", description: "Build strong concepts with structured teaching and academic support.", icon: GraduationCap },
  { short: "Goal focus", title: "Goal-Focused Preparation", description: "Stay focused on your course, syllabus and examination goals.", icon: Target },
  { short: "Assessment", title: "Regular Assessment", description: "Test your understanding and discover where you can improve.", icon: ClipboardCheck },
  { short: "Discipline", title: "Discipline & Values", description: "Develop consistent habits, responsibility and confidence.", icon: ShieldCheck },
  { short: "Mentoring", title: "Personal Guidance", description: "Get direction for your individual learning journey.", icon: Users },
  { short: "Study material", title: "Quality Study Material", description: "Use organised resources for concept building and revision.", icon: BookOpen },
  { short: "Review", title: "Progress Review", description: "Use feedback to recognise improvement and plan next steps.", icon: ChartNoAxesCombined },
  { short: "Growth", title: "Growth-Oriented Environment", description: "Stay motivated in an environment that encourages effort and ambition.", icon: Flag },
];

const PILL_BTN =
  "flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/* Hook: true while the element is on (or near) the screen             */
/* ------------------------------------------------------------------ */

function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting)
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

/* ------------------------------------------------------------------ */
/* Results slider (own state: autoplay never re-renders the rest)      */
/* ------------------------------------------------------------------ */

function ResultsSlider() {
  const rootRef = useRef(null);
  const inView = useInView(rootRef);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const change = useCallback((direction) => {
    setSlide((current) => (current + direction + slides.length) % slides.length);
  }, []);

  // Autoplay only while visible and not hovered/focused; re-armed on every change.
  const playing = inView && !paused;

  useEffect(() => {
    if (!playing || prefersReducedMotion()) return;

    const id = window.setTimeout(() => change(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [playing, slide, change]);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Prince Academy results and achievements"
      className="h-full lg:col-span-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        aria-live={playing ? "off" : "polite"}
        className="relative aspect-[16/6] w-full overflow-hidden rounded-[20px] border border-white/10 bg-primary/20 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] ring-1 ring-gold/20 sm:aspect-[1818/576] lg:aspect-auto lg:h-full lg:min-h-[200px]"
      >
        {slides.map((s, index) => (
          <div
            key={s.src}
            aria-hidden={slide !== index}
            className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
              slide === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        ))}

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-[#041226]/70 to-transparent" />

        {/* Controls inside the banner */}
        <div className="absolute bottom-2 right-2 z-30 flex items-center gap-1 rounded-full border border-white/15 bg-navy/75 p-1 backdrop-blur-md">
          <button type="button" onClick={() => change(-1)} aria-label="Previous image" className={PILL_BTN}>
            <ArrowLeft size={15} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-1.5 px-1">
            {slides.map((s, index) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setSlide(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={slide === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  slide === index ? "w-5 bg-gold" : "w-1.5 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button type="button" onClick={() => change(1)} aria-label="Next image" className={PILL_BTN}>
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Spotlight + journey rail (share the selected step)                  */
/* ------------------------------------------------------------------ */

function Spotlight({ step, onChange }) {
  const detailRef = useRef(null);
  const mountedRef = useRef(false);
  const current = features[step];
  const CurrentIcon = current.icon;

  // One soft entrance whenever the step changes (Web Animations API: no extra CSS needed).
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    const element = detailRef.current;
    if (!element?.animate || prefersReducedMotion()) return;

    element.animate(
      [
        { opacity: 0, transform: "translateY(14px)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 500, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  }, [step]);

  return (
    <div className="facility-border-rotate rounded-[20px] lg:col-span-5">
      <div
        id="journey-panel"
        role="tabpanel"
        aria-live="polite"
        className="flex h-full flex-col justify-between gap-4 rounded-[18.5px] bg-[#081F45] p-5"
      >
        <div ref={detailRef} className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-orange text-navy shadow-[0_10px_24px_-8px_rgba(255,138,61,0.7)]">
              <CurrentIcon size={24} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-gold">
              Step {step + 1} of {features.length}
            </span>
          </div>

          <h3 className="text-2xl font-bold leading-tight text-white">{current.title}</h3>
          <p className="text-sm leading-6 text-white/75 sm:text-base">{current.description}</p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-xs text-white/55">Your journey at Prince Academy</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onChange((step - 1 + features.length) % features.length)}
              aria-label="Previous step"
              className={`${PILL_BTN} border border-white/15`}
            >
              <ArrowLeft size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onChange((step + 1) % features.length)}
              aria-label="Next step"
              className={`${PILL_BTN} border border-white/15`}
            >
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyRail({ step, onChange }) {
  return (
    <div role="tablist" aria-label="Prince Academy journey" className="relative mt-6 lg:mt-8">
      {/* Track + gold progress */}
      <div
        aria-hidden="true"
        className="absolute left-[6.25%] right-[6.25%] top-[17px] h-0.5 rounded bg-white/15 sm:top-[21px]"
      >
        <div
          className="h-full rounded bg-gradient-to-r from-orange to-gold transition-[width] duration-500 motion-reduce:transition-none"
          style={{ width: `${(step / (features.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative grid grid-cols-8">
        {features.map(({ title, short, icon: Icon }, index) => {
          const on = index === step;
          const done = index < step;

          return (
            <button
              key={title}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="journey-panel"
              aria-label={title}
              onClick={() => onChange(index)}
              className="group flex flex-col items-center gap-2 focus-visible:outline-none"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-gold motion-reduce:transition-none sm:h-11 sm:w-11 ${
                  on
                    ? "scale-110 border-gold bg-gradient-to-br from-gold to-orange text-navy shadow-[0_0_0_5px_rgba(255,193,7,0.18),0_10px_24px_-8px_rgba(255,138,61,0.7)]"
                    : done
                      ? "border-gold/60 bg-primary text-gold"
                      : "border-white/20 bg-[#0A254E] text-white/60 group-hover:border-gold/60 group-hover:text-white"
                }`}
              >
                <Icon size={17} aria-hidden="true" />
              </span>

              <span
                className={`hidden text-center text-xs leading-4 lg:block ${
                  on ? "font-semibold text-white" : "text-white/60"
                }`}
              >
                {short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function WhyPrinceAcademyJourney() {
  const [step, setStep] = useState(0);

  return (
    <section
      aria-labelledby="why-prince-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#030E22] via-navy to-[#092B60] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      {/* Dotted texture, glows and gold hairline */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(75%_85%_at_50%_30%,#000,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-secondary/25 blur-[110px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-gold">
              
              Why Prince Academy
            </span>

            <h2
              id="why-prince-heading"
              className="mt-2.5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl"
            >
              Your Ambition.{" "} <br />
              <span className="bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
                Our Commitment.
              </span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
              The right environment can transform how you learn, prepare and grow.
            </p>
          </div>

          <Link
            href="/about-institute"
            className="btn-primary-gradient inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-bold shadow-[0_12px_28px_-10px_rgba(255,138,61,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:self-auto"
          >
            Explore Academy
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Slider + spotlight */}
        <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <ResultsSlider />
          <Spotlight step={step} onChange={setStep} />
        </div>

        <JourneyRail step={step} onChange={setStep} />
      </div>
    </section>
  );
}
