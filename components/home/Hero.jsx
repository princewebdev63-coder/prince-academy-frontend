"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/comman/Button";

export default function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Prince Academy Campus"
      className="relative isolate w-full overflow-hidden bg-background select-none"
    >
      <div className="relative h-[85vh] min-h-[480px] w-full overflow-hidden sm:h-[90vh] sm:min-h-[540px] lg:h-screen lg:min-h-0">

        {/* Background Video */}
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full scale-[1.28] sm:scale-[1.3] object-cover object-center transform-gpu"
        />

        {/* Full Video Dark Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-black/40"
        />

        {/* Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
        />

        {/* Hero Content */}
        <div className="relative z-20 flex h-full w-full items-center justify-center px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center">

           

            {/* Heading */}
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_3px_18px_rgba(0,0,0,1)]">
              Welcome to{" "}
              <span className="font-black text-[#FFC107] [text-shadow:0_2px_14px_rgba(0,0,0,1)]">
                Prince Academy
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-pretty text-sm font-semibold leading-7 text-white sm:mt-6 sm:text-base sm:leading-8 lg:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,1)]">
              Sikar&apos;s premier CBSE institution nurturing academic
              excellence, disciplined leadership, and holistic growth
              for your child&apos;s bright future.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex items-center justify-center">
              <Button
                href="/applyNow"
                size="lg"
                variant="primary"
                className="px-8 py-3.5 text-base font-bold shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-105 sm:text-lg"
              >
                Apply for Admission
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };