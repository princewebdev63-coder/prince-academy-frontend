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

        {/* Full Hero Section Overlay Box - Low opacity so video is clear & text is crisp */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-black/40"
        />

        {/* Subtle Ambient Depth Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/50"
        />

        {/* Soft Luxury Radial Focus Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(10, 61, 145, 0.22) 0%, transparent 70%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-20 flex h-full w-full items-center justify-center px-4 pb-10 pt-6 text-center sm:px-6 sm:pb-12 lg:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center -translate-y-2 sm:-translate-y-12 md:-translate-y-20">
            {/* Keyframes for Continuous 3D Text Flip on Prince Academy */}
            <style>{`
              @keyframes heroTextFlip {
                0% {
                  transform: perspective(600px) rotateX(0deg);
                }
                14% {
                  transform: perspective(600px) rotateX(180deg) scale(1.08);
                  filter: brightness(1.22) drop-shadow(0 0 16px rgba(253, 224, 71, 0.9));
                }
                28% {
                  transform: perspective(600px) rotateX(360deg) scale(1);
                  filter: brightness(1);
                }
                100% {
                  transform: perspective(600px) rotateX(360deg) scale(1);
                  filter: brightness(1);
                }
              }

              .hero-flip-char {
                display: inline-block;
                transform-style: preserve-3d;
                backface-visibility: visible;
                transform-origin: 50% 50%;
                animation: heroTextFlip 4.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                will-change: transform;
              }
              @keyframes buttonShimmer {
                0% {
                  transform: translateX(-150%) skewX(-20deg);
                }
                65%, 100% {
                  transform: translateX(350%) skewX(-20deg);
                }
              }

              .btn-shimmer-sweep {
                animation: buttonShimmer 4.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
            `}</style>

            {/* Heading */}
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_3px_18px_rgba(0,0,0,1)]">
              Welcome to{" "}
              <span
                aria-label="Prince Academy"
                className="inline-block font-black text-[#FDE047] [text-shadow:0_2px_14px_rgba(0,0,0,1)]"
                style={{ perspective: "1000px" }}
              >
                <span className="inline-block whitespace-nowrap">
                  {"Prince".split("").map((char, i) => (
                    <span
                      key={`p-${i}`}
                      className="hero-flip-char"
                      style={{
                        animationDelay: `${i * 0.045}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block whitespace-nowrap">
                  {"Academy".split("").map((char, i) => (
                    <span
                      key={`a-${i}`}
                      className="hero-flip-char"
                      style={{
                        animationDelay: `${(i + 6) * 0.045}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
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
                variant="transparent"
                className="relative overflow-hidden rounded-xl !bg-transparent hover:!bg-white/10 text-white border-2 border-white/75 hover:border-white px-8 py-3.5 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 sm:text-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]"
              >
                {/* Infinite Blur Line sweeping left to right */}
                <span
                  aria-hidden="true"
                  className="btn-shimmer-sweep pointer-events-none absolute inset-0 -top-2 -bottom-2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[3px]"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Apply for Admission</span>
                  <span aria-hidden="true">→</span>
                </span>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };