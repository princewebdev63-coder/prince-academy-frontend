"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/comman/Button";

export default function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set muted for browser autoplay policy
    video.defaultMuted = true;
    video.muted = true;

    // Force play immediately on mount
    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };
    playVideo();

    // IntersectionObserver: Play when hero is in view, pause when scrolled away
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Prince Academy Campus"
      className="relative isolate w-full overflow-hidden bg-primary select-none"
    >
      {/* Container: Balanced height for mobile & full viewport for desktop */}
      <div className="relative w-full h-[85vh] min-h-[480px] sm:h-[90vh] sm:min-h-[540px] lg:h-screen lg:min-h-0 overflow-hidden">
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
          className="absolute inset-0 h-full w-full object-cover scale-105 origin-center pointer-events-none select-none transform-gpu"
        />

        {/* Cinematic dark overlay to make text pop while keeping video clearly visible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 via-black/35 to-primary/80 pointer-events-none"
        />

        {/* Centered content overlay: H1, Short Paragraph, and Button */}
        <div className="relative z-20 flex h-full w-full items-center justify-center px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            {/* H1 */}
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-button">Prince Academy</span>
            </h1>

            {/* Short Paragraph */}
            <p className="mt-4 max-w-2xl text-pretty text-sm font-medium leading-relaxed text-white/90 drop-shadow sm:mt-6 sm:text-base lg:text-lg">
              Sikar&apos;s premier CBSE institution nurturing academic excellence, disciplined leadership, and holistic growth for your child&apos;s bright future.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center">
              <Button
                href="/applyNow"
                size="lg"
                variant="primary"
                className="shadow-xl shadow-button/30 hover:scale-105 transition-transform"
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
