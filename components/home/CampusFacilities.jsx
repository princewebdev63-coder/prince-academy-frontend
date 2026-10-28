
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import FacilityCard from "../facilities/FacilityCard";
import { facilities } from "../../data/facilitiesData";
import FacilitiesBanner from "./FacilitiesBanner";

export { facilities, FacilitiesBanner };

const TOUR_URL =
  "https://tour.princeeduhub.com/princt34/old-campus/";

const clamp = (value, min, max) =>
  Math.min(max, Math.max(min, value));

export default function CampusFacilities() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    let distance = 0;
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

      viewportWidth = viewport.clientWidth;

      distance = Math.max(
        0,
        track.scrollWidth - viewportWidth
      );

      cards = Array.from(
        track.querySelectorAll(".facility-card")
      );

      // The extra vertical distance lets the cards travel
      // horizontally before the section ends.
      section.style.height =
        `${window.innerHeight + distance}px`;

      updatePosition();
    };

    const updatePosition = () => {
      if (destroyed || frameId) return;

      frameId = requestAnimationFrame(() => {
        frameId = 0;

        const top =
          section.getBoundingClientRect().top;

        const offset = clamp(-top, 0, distance);

        track.style.transform =
          `translate3d(${-offset}px, 0, 0)`;

        const rotateEnabled =
          !motionQuery.matches &&
          window.innerWidth >= 640;

        const viewportCenter =
          viewportWidth / 2;

        for (const card of cards) {
          if (!rotateEnabled) {
            card.style.transform = "";
            continue;
          }

          const center =
            card.offsetLeft +
            card.offsetWidth / 2 -
            offset;

          const progress = clamp(
            (center - viewportCenter) /
              viewportCenter,
            -1,
            1
          );

          const rotateY = -progress * 24;
          const rotateX =
            Math.abs(progress) * 2;

          const scale =
            1 - Math.abs(progress) * 0.025;

          card.style.transform =
            `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
        }
      });
    };

    const scheduleMeasure = () => {
      if (measureFrameId) {
        cancelAnimationFrame(measureFrameId);
      }

      measureFrameId =
        requestAnimationFrame(measure);
    };

    measure();

    const observer = new ResizeObserver(
      scheduleMeasure
    );

    observer.observe(viewport);
    observer.observe(track);

    window.addEventListener(
      "scroll",
      updatePosition,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      scheduleMeasure,
      { passive: true }
    );

    window.addEventListener("load", scheduleMeasure);

    motionQuery.addEventListener(
      "change",
      updatePosition
    );

    return () => {
      destroyed = true;

      cancelAnimationFrame(frameId);
      cancelAnimationFrame(measureFrameId);

      observer.disconnect();

      window.removeEventListener(
        "scroll",
        updatePosition
      );

      window.removeEventListener(
        "resize",
        scheduleMeasure
      );

      window.removeEventListener(
        "load",
        scheduleMeasure
      );

      motionQuery.removeEventListener(
        "change",
        updatePosition
      );

      section.style.height = "";
      track.style.transform = "";

      cards.forEach((card) => {
        card.style.transform = "";
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="campus-heading"
      className="relative bg-[#F5F5F7] text-[#172B40]"
    >
      <div className="sticky top-0 flex h-screen h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-2 sm:px-8 sm:py-3 lg:px-12 lg:py-4">
          {/* Heading */}
          <div className="mb-3 flex flex-col justify-between gap-3 sm:mb-4 sm:flex-row sm:items-end lg:mb-5">
            <div>
              <h2
                id="campus-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
              >
                Campus{" "}
                <span className="text-[#4F8EAD]">&</span>{" "}
                Facilities
              </h2>

              <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Discover the spaces that make learning and
                student life special.
              </p>
            </div>

            <Link
              href="/facilities"
              className="inline-flex min-h-10 w-fit shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-[#172B40] transition-colors hover:border-amber-300 hover:bg-amber-50 sm:text-sm"
            >
              All Facilities
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Horizontal card track */}
          <div
            ref={viewportRef}
            className="overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            <div
              ref={trackRef}
              className="flex w-max items-stretch gap-4 px-1 pb-2 sm:gap-5 lg:gap-6"
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

          {/* Compact Animated Footer Banner */}
          <FacilitiesBanner />
        </div>
      </div>
    </section>
  );
}
