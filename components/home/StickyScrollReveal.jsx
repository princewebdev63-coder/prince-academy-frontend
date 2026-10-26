
"use client";

import React, { memo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const CONTENT = [
  {
    title: "World-Class Infrastructure & Learning Environment",
    subtitle: "Modern Campus Built for Holistic Growth",
    description:
      "A sprawling 25-bigha green campus equipped with architecturally planned academic blocks, modern digital auditoriums, and serene spaces that inspire curiosity and focus.",
    image: "/images/Defence Website 01.webp",
    alt: "Prince Academy 25-bigha campus infrastructure in Sikar",
  },
  {
    title: "Interactive & Experiential Digital Classrooms",
    subtitle: "CBSE Board & Foundation Synergy",
    description:
      "Combining CBSE curriculum excellence with early foundational training for NEET, JEE, and NDA. Personalized doubt-solving counters and digital simulations ensure concept mastery.",
    image: "/images/Defence Website 02.webp",
    alt: "Students learning in Prince Academy smart classrooms",
  },
  {
    title: "Olympic-Standard Sports Complex & Fitness Arena",
    subtitle: "Physical Stamina, Teamwork & Character",
    description:
      "Sports are central to student life at Prince Academy. Guided by certified national coaches, students train in specialized grounds built to professional athletic standards.",
    image: "/images/Defence Website 03.webp",
    alt: "Sports facilities at Prince Academy",
  },
  {
    title: "Unmatched Academic & Competitive Record",
    subtitle: "Proven National Leadership in Board & Defence",
    description:
      "Decade after decade, Prince Academy sets historic benchmarks. Producing state & national toppers in CBSE 10th & 12th, along with record-shattering selections in NDA, IIT-JEE, and NEET.",
    image: "/images/NDA-II Result 2026 Slides 01.webp",
    alt: "Prince Academy student results and national toppers",
  },
];

const COUNT = CONTENT.length;
const LAST_INDEX = COUNT - 1;

const IMAGE_SIZES = "(min-width: 1024px) 45vw, 100vw";

const ImageStack = memo(function ImageStack({ activeIndex }) {
  return CONTENT.map((item, index) => {
    const active = index === activeIndex;

    return (
      <motion.div
        key={item.image}
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 1.04,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0"
        aria-hidden={!active}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority
          sizes={IMAGE_SIZES}
          className="select-none object-cover object-center"
        />
      </motion.div>
    );
  });
});

const ContentBlock = memo(function ContentBlock({
  item,
  isSelected,
}) {
  return (
    <motion.article
      animate={{ opacity: isSelected ? 1 : 0.25 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[55vh] flex-col justify-center py-16"
    >
      <h3 className="mt-4 max-w-2xl text-balance text-[2.5rem] font-extrabold leading-[1.12] tracking-tight text-[#FDFAF3]">
        {item.title}
      </h3>

      <p className="mt-3 text-base font-bold uppercase tracking-wide text-button">
        {item.subtitle}
      </p>

      <p className="mt-5 max-w-xl text-pretty text-base font-medium leading-8 text-[#FDFAF3]/80">
        {item.description}
      </p>
    </motion.article>
  );
});

function DesktopShowcase() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      LAST_INDEX,
      Math.max(0, Math.round(latest * LAST_INDEX))
    );

    setActiveCard((previous) =>
      previous === next ? previous : next
    );
  });

  return (
    <section
      ref={containerRef}
      id="campus-life"
      aria-label="The Prince Advantage"
      className="relative hidden w-full select-none bg-primary py-24 lg:block"
    >
      <div className="mx-auto max-w-7xl px-12 xl:px-16">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-balance text-5xl font-black tracking-tight text-[#FDFAF3]">
            Excellence Engineered Across{" "}
            <span className="text-button">Every Dimension</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-base font-medium leading-relaxed text-[#FDFAF3]/80">
            Scroll to explore why Prince Academy Sikar is Rajasthan&apos;s
            premier educational institution.
          </p>
        </header>

        <div className="relative grid grid-cols-12 items-start gap-14">
          <div className="relative col-span-7 pl-8">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-[#FDFAF3]/15"
            >
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="h-full w-full origin-top bg-button"
              />
            </div>

            {CONTENT.map((item, index) => (
              <ContentBlock
                key={item.title}
                item={item}
                isSelected={activeCard === index}
              />
            ))}
          </div>

          <div className="sticky top-32 col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FDFAF3]/5 shadow-2xl shadow-black/40">
              <ImageStack activeIndex={activeCard} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileShowcase() {
  return (
    <section
      aria-label="The Prince Advantage"
      className="bg-primary px-4 py-10 sm:px-8 sm:py-14 lg:hidden"
    >
      <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
        <h2 className="text-balance text-xl font-black tracking-tight text-[#FDFAF3] sm:text-3xl">
          Excellence Engineered Across{" "}
          <span className="text-button">Every Dimension</span>
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-pretty text-sm font-medium leading-relaxed text-[#FDFAF3]/80">
          Scroll to explore why Prince Academy Sikar is Rajasthan&apos;s premier
          educational institution.
        </p>
      </header>

      <div className="relative mx-auto max-w-3xl">
        {CONTENT.map((item, index) => (
          <div
            key={item.title}
            className="sticky"
            style={{
              top: `calc(4.5rem + ${index * 0.75}rem)`,
              zIndex: index + 1,
              marginBottom: index === LAST_INDEX ? 0 : "1.5rem",
            }}
          >
            <article className="overflow-hidden rounded-2xl border border-[#D6B66C]/25 bg-[#13293D] shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B1730]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 640px) 672px, calc(100vw - 32px)"
                  className="object-cover object-center"
                />
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#D6B66C]/70 to-transparent" />

              <div className="p-4 sm:p-5">
                <h3 className="text-balance text-xl font-extrabold leading-tight tracking-tight text-[#FDFAF3] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[0.08em] text-button sm:text-sm">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-pretty text-[13px] font-medium leading-6 text-[#FDFAF3]/75 sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function StickyScrollReveal() {
  return (
    <>
      <DesktopShowcase />
      <MobileShowcase />
    </>
  );
}

export { StickyScrollReveal };
