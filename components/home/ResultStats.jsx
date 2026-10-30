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
  index,
  isSelected,
}) {
  return (
    <motion.article
      animate={{
        opacity: isSelected ? 1 : 0.3,
        x: isSelected ? 0 : -6,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex min-h-[38vh] flex-col justify-center py-10"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition-all duration-300 ${
            isSelected
              ? "bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] ring-4 ring-blue-400/25"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          0{index + 1}
        </span>
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          {item.subtitle}
        </p>
      </div>

      <h3 className="mt-3.5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-primary xl:text-4xl">
        {item.title}
      </h3>

      <p className="mt-4 max-w-xl text-pretty text-base font-medium leading-relaxed text-slate-600">
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
    // overflow-hidden ki jagah overflow-clip: scroll container nahi banata,
    // isliye andar ka `sticky` image column sahi se chipka rehta hai.
    <section
      ref={containerRef}
      id="campus-life"
      aria-label="The Prince Advantage"
      className="relative hidden w-full overflow-clip select-none bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] py-16 lg:block"
    >
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-12 xl:px-16">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mt-3.5 text-balance text-4xl font-black tracking-tight text-primary xl:text-5xl">
            Excellence Engineered Across{" "}
            <span className="text-gradient-royal">Every Dimension</span>
          </h2>

          <p className="mx-auto mt-3.5 max-w-xl text-pretty text-base font-medium leading-relaxed text-slate-600">
            Scroll to explore why Prince Academy Sikar is Rajasthan&apos;s
            premier educational institution.
          </p>
        </header>

        <div className="relative grid grid-cols-12 items-start gap-14">
          <div className="relative col-span-7 pl-10 pr-4">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[2px] bg-slate-200"
            >
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="h-full w-full origin-top bg-gradient-to-b from-blue-600 via-blue-400 to-primary shadow-[0_0_8px_#3B82F6]"
              />
            </div>

            {CONTENT.map((item, index) => (
              <ContentBlock
                key={item.title}
                item={item}
                index={index}
                isSelected={activeCard === index}
              />
            ))}
          </div>

          {/* Image column: grid ki poori height leta hai, andar wala box sticky rehta hai */}
          <div className="sticky top-[calc(50vh-10rem)] col-span-5">
            <div className="relative rounded-3xl border border-blue-200/90 bg-white p-3 shadow-[0_20px_50px_rgba(10,61,145,0.12),0_0_25px_rgba(59,130,246,0.10)] ring-1 ring-blue-500/10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <ImageStack activeIndex={activeCard} />
              </div>
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
      className="relative bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] px-4 py-12 sm:px-8 sm:py-16 lg:hidden"
    >
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-primary shadow-sm">
          The Prince Advantage
        </span>

        <h2 className="mt-3 text-balance text-2xl font-black tracking-tight text-primary sm:text-3xl">
          Excellence Engineered Across{" "}
          <span className="text-gradient-royal">Every Dimension</span>
        </h2>

        <p className="mx-auto mt-2.5 max-w-xl text-pretty text-sm font-medium leading-relaxed text-slate-600">
          Scroll to explore why Prince Academy Sikar is Rajasthan&apos;s premier
          educational institution.
        </p>
      </header>

      <div className="relative mx-auto max-w-2xl">
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
            <article className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_32px_rgba(19,41,61,0.08)] ring-1 ring-slate-900/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 640px) 672px, calc(100vw - 32px)"
                  className="object-cover object-center"
                />

                
              </div>

              <div className="border-t border-slate-100 p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {item.subtitle}
                </p>

                <h3 className="mt-1.5 text-balance text-xl font-extrabold leading-snug tracking-tight text-primary sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-pretty text-sm font-medium leading-relaxed text-slate-600">
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
