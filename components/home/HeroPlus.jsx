import Link from "next/link";
import { Suspense } from "react";
import { Carousel_002 } from "@/components/ui/skiper-ui/skiper48";
import Button from "@/components/comman/Button";

const CAROUSEL_IMAGES = [
  { src: "/images/Defence Website 01.webp", alt: "Prince Academy school building, Sikar" },
  { src: "/images/Defence Website 02.webp", alt: "Students learning in a smart classroom" },
  { src: "/images/Defence Website 03.webp", alt: "Sports activities at Prince Academy" },
  { src: "/images/NDA-II Result 2026 Slides 01.webp", alt: "Science lab at Prince Academy" },
];

const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "2000+", label: "Happy Students" },
  { value: "100+", label: "Expert Teachers" },
];

const HIGHLIGHTS = [
  "CBSE Curriculum",
  "Smart Classes",
  "Safe Transport",
  "Sports & Activities",
];

export function HeroPlus() {
  return (
    <section
      aria-labelledby="prince-academy-heading"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-[#F4F8FE] via-[#EAF2FC] to-[#F4F8FE] py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative ambient Royal Blue & Warm Gold glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl"
      />
      {/* Right side warm yellow/gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-500/25 blur-3xl animate-pulse-glow-gold"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-64 w-[600px] rounded-full bg-blue-400/10 blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 xl:px-16">
        {/* Content: Top on mobile, Left on desktop */}
        <div className="order-1 w-full text-left lg:order-1 lg:text-left">

          {/* Heading with Royal Gradient */}
          <h2
            id="prince-academy-heading"
            className="mt-5 text-balance text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            Prince Academy{" "}
            <span className="text-gradient-royal">
              The Best CBSE School
            </span>{" "}
            in Sikar
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-xl text-pretty text-justify text-base leading-relaxed text-primary/80 sm:text-lg lg:mx-0">
            At Prince Academy Sikar, students receive more than just an
            education they build a foundation for a bright future. With
            experienced faculty, smart classrooms, advanced laboratories, and
            comprehensive sports facilities, we nurture academic excellence,
            creativity, and strong character to develop confident, successful
            global citizens.
          </p>

          {/* Highlights with Glowing Frosted Pills
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-blue-200/80 px-4 py-1.5 text-xs font-bold text-primary shadow-[0_2px_10px_rgba(10,61,145,0.06)] hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.22)] backdrop-blur-md transition-all sm:text-sm"
              >
                <span className="font-extrabold text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]">✓</span> {item}
              </li>
            ))}
          </ul> */}

          {/* CTAs */}
          <div className="mt-8 flex flex-row items-center justify-center gap-2 sm:gap-3.5 lg:justify-start">
            <Button
              href="/applyNow"
              size="md"
              variant="primary"
              className="flex-1 sm:flex-initial sm:w-auto text-[11px] min-[380px]:text-xs sm:text-base px-2.5 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap shadow-[0_0_25px_rgba(10,61,145,0.35)] hover:shadow-[0_0_35px_rgba(22,86,191,0.5)]"
            >
              Apply for Admission
            </Button>
            <Button
              href="/about-institute"
              size="md"
              variant="outline"
              className="flex-1 sm:flex-initial sm:w-auto text-[11px] min-[380px]:text-xs sm:text-base px-2.5 sm:px-7 py-2.5 sm:py-3 whitespace-nowrap border-blue-600/40 hover:bg-blue-50/80"
            >
              Book a Campus Visit
            </Button>
          </div>
        </div>

        {/* Carousel: Bottom on mobile, Right on desktop */}
        <div className="order-2 relative flex w-full items-center justify-center lg:order-2">
          {/* Warm gold ambient halo behind carousel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-amber-400/25 via-yellow-400/18 to-transparent blur-3xl animate-pulse-glow-gold"
          />
          <Suspense
            fallback={
              <div className="mx-auto w-[285px] h-[375px] sm:w-[360px] sm:h-[475px] lg:w-[460px] lg:h-[600px] xl:w-[480px] xl:h-[620px] animate-pulse rounded-3xl bg-primary/10" />
            }
          >
            <Carousel_002
              images={CAROUSEL_IMAGES}
              showPagination={true}
              showNavigation={false}
              loop={true}
              autoplay={true}
              spaceBetween={40}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
