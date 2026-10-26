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
      className="relative isolate w-full overflow-hidden bg-background py-10 sm:py-14 lg:py-16"
    >
      {/* Decorative ambient brand glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-button/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 xl:px-16">
        {/* LEFT: Content */}
        <div className="order-2 w-full text-center lg:order-1 lg:text-left">

          {/* Heading */}
          <h2
            id="prince-academy-heading"
            className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Prince Academy{" "}
            <span className="text-secondary">
              The Best CBSE School
            </span>{" "}
            in Sikar
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary/75 sm:text-lg lg:mx-0">
            At Prince Academy Sikar, students receive more than just an
            education they build a foundation for a bright future. With
            experienced faculty, smart classrooms, advanced laboratories, and
            comprehensive sports facilities, we nurture academic excellence,
            creativity, and strong character to develop confident, successful
            global citizens.
          </p>

          {/* Highlights */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm ring-1 ring-primary/10 sm:text-sm"
              >
                <span className="font-bold text-button">✓</span> {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href="/applyNow"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto shadow-lg shadow-button/25"
            >
              Apply for Admission
            </Button>
            <Button
              href="/about-institute"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Book a Campus Visit
            </Button>
          </div>
        </div>

        {/* RIGHT: Carousel perfectly centered with equal left/right padding */}
        <div className="order-1 flex w-full items-center justify-center lg:order-2">
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
