"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/comman/Button";
import { ArrowUpRight } from "lucide-react";

import FacilityCard from "../facilities/FacilityCard";
import { facilities } from "../../data/facilitiesData";
import FacilitiesBanner from "./FacilitiesBanner";

export { facilities, FacilitiesBanner };

const TOUR_URL =
  "https://tour.princeeduhub.com/princt34/old-campus/";

// Section ki extra height = horizontal distance ka itna hissa (chhota = kam height)
const SCROLL_RATIO = 0.65;

const clamp = (value, min, max) =>
  Math.min(max, Math.max(min, value));

export default function CampusFacilities() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const headingWrapRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const headingWrap = headingWrapRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !sticky || !headingWrap || !viewport || !track)
      return;

    let distance = 0;
    let scrollDistance = 0;
    let viewportWidth = 0;
    let frameId = 0;
    let measureFrameId = 0;
    let cards = [];
    let destroyed = false;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const measure = () => {
      if (destroyed) return;

      // Heading ke left edge ke barabar inset, taaki pehla card heading se align ho
      const rect = headingWrap.getBoundingClientRect();
      const paddingLeft =
        parseFloat(getComputedStyle(headingWrap).paddingLeft) || 0;
      const inset = Math.max(0, rect.left + paddingLeft);

      // Pehle aur aakhri card ke paas inset, beech mein full-bleed
      track.style.paddingLeft = `${inset}px`;
      track.style.paddingRight = `${inset}px`;

      viewportWidth = viewport.clientWidth; // poori screen width

      distance = Math.max(
        0,
        Math.ceil(track.scrollWidth - viewportWidth)
      );

      // Height kam, par scroll poora
      scrollDistance = Math.round(distance * SCROLL_RATIO);

      cards = Array.from(track.querySelectorAll(".facility-card"));

      // sticky ki asli height use ki (mobile address bar issue nahi hoga)
      section.style.height = `${sticky.offsetHeight + scrollDistance}px`;

      updatePosition();
    };

    const updatePosition = () => {
      if (destroyed || frameId) return;

      frameId = requestAnimationFrame(() => {
        frameId = 0;

        const top = section.getBoundingClientRect().top;

        const progress =
          scrollDistance > 0
            ? clamp(-top / scrollDistance, 0, 1)
            : 0;

        const offset = progress * distance;

        track.style.transform = `translate3d(${-offset}px, 0, 0)`;

        const rotateEnabled =
          !motionQuery.matches && window.innerWidth >= 640;

        const viewportCenter = viewportWidth / 2;

        for (const card of cards) {
          if (!rotateEnabled) {
            card.style.transform = "";
            continue;
          }

          const center =
            card.offsetLeft + card.offsetWidth / 2 - offset;

          const cardProgress = clamp(
            (center - viewportCenter) / viewportCenter,
            -1,
            1
          );

          const rotateY = -cardProgress * 24;
          const rotateX = Math.abs(cardProgress) * 2;
          const scale = 1 - Math.abs(cardProgress) * 0.025;

          card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
        }
      });
    };

    const scheduleMeasure = () => {
      if (measureFrameId) {
        cancelAnimationFrame(measureFrameId);
      }

      measureFrameId = requestAnimationFrame(measure);
    };

    measure();

    const observer = new ResizeObserver(scheduleMeasure);

    observer.observe(viewport);
    observer.observe(track);

    window.addEventListener("scroll", updatePosition, {
      passive: true,
    });

    window.addEventListener("resize", scheduleMeasure, {
      passive: true,
    });

    window.addEventListener("load", scheduleMeasure);

    motionQuery.addEventListener("change", updatePosition);

    return () => {
      destroyed = true;

      cancelAnimationFrame(frameId);
      cancelAnimationFrame(measureFrameId);

      observer.disconnect();

      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("load", scheduleMeasure);

      motionQuery.removeEventListener("change", updatePosition);

      section.style.height = "";
      track.style.transform = "";
      track.style.paddingLeft = "";
      track.style.paddingRight = "";

      cards.forEach((card) => {
        card.style.transform = "";
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="campus-heading"
      className="relative overflow-clip bg-background text-foreground"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen h-[100svh] flex-col justify-center overflow-hidden isolate"
      >
        {/* Decorative ambient brand glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        />

        {/* Heading: container ke andar */}
        <div
          ref={headingWrapRef}
          className="mx-auto w-full max-w-[1400px] px-4 pt-2 sm:px-8 sm:pt-3 lg:px-12 lg:pt-4"
        >
          <div className="mb-3 flex flex-col justify-between gap-3 sm:mb-4 sm:flex-row sm:items-end lg:mb-5">
            <div>
              <h2
                id="campus-heading"
                className="text-3xl font-extrabold text-primary leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
              >
                Campus{" "}
                <span className="text-secondary">&</span>{" "}
                Facilities
              </h2>

              <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Discover the spaces that make learning and
                student life special.
              </p>
            </div>

            <Button
              href="/facilities"
              variant="white"
              size="md"
              className="w-fit shrink-0 font-bold"
            >
              All Facilities
              <ArrowUpRight size={17} />
            </Button>
          </div>
        </div>

        {/* Cards: FULL WIDTH, container se bahar */}
        <div
          ref={viewportRef}
          className="w-full overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-4 pb-2 sm:gap-5 lg:gap-6"
          >
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.title}
                facility={facility}
                className="facility-card"
              />
            ))}
          </div>
        </div>

        {/* Compact Animated Footer Banner: container ke andar */}
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-2 sm:px-8 sm:pb-3 lg:px-12 lg:pb-4">
          <FacilitiesBanner />
        </div>
      </div>
    </section>
  );
}
