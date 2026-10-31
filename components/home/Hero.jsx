"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/comman/Button";

const TYPING_WORDS = ["Prince Academy", "Prince Academy"];

function useTypewriter(words, typingSpeed = 85, deletingSpeed = 95, pauseDuration = 2800) {
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial wait on page load so user can read the complete title first
    if (!hasStarted) {
      const initialTimer = setTimeout(() => {
        setIsDeleting(true);
        setHasStarted(true);
      }, pauseDuration);
      return () => clearTimeout(initialTimer);
    }

    const currentWord = words[wordIndex % words.length];

    let timer;
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Word is fully typed, pause comfortably before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        // Slow and relaxed backspacing speed
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Fully erased, pause briefly then switch to next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 450);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, hasStarted, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const typedAcademyText = useTypewriter(TYPING_WORDS);

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
      className="relative isolate m-0 w-full overflow-hidden bg-black p-0 select-none"
    >
      {/* Optimized height: Seamlessly connects Header & StatsStrip with zero gaps */}
      <div className="relative h-[55vh] min-h-[390px] w-full overflow-hidden sm:h-[68vh] sm:min-h-[460px] lg:h-[78vh] lg:min-h-[540px] lg:max-h-[740px]">

        {/* Background Video (Scaled to eliminate video file letterbox black bars so content seamlessly touches edges) */}
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
          className="absolute inset-0 z-0 h-full w-full scale-[1.32] sm:scale-[1.28] object-cover object-center transform-gpu"
        />

        {/* Full Hero Section Overlay Box - Low opacity so video is clear & text is crisp */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-black/40"
        />

        {/* Subtle Ambient Depth Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-transparent to-black/55"
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
        <div className="relative z-20 flex h-full w-full items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center -translate-y-1 sm:-translate-y-3 md:-translate-y-4">
            {/* Blinking Cursor & Button Shimmer Styles */}
            <style>{`
              @keyframes typewriterCursor {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
              }

              .typewriter-cursor {
                display: inline-block;
                margin-left: 3px;
                width: 3px;
                height: 0.88em;
                vertical-align: -0.05em;
                background-color: #FDE047;
                border-radius: 1px;
                animation: typewriterCursor 0.85s infinite;
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

            {/* Heading: Fixed "Welcome to" on top, with typing text on second line (Same matching size) */}
            <h1 className="max-w-4xl text-center leading-tight tracking-tight text-white [text-shadow:0_3px_18px_rgba(0,0,0,1)]">
              <span className="block text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to
              </span>
              <span
                aria-label={typedAcademyText}
                className="mt-1 flex min-h-[1.2em] items-center justify-center font-extrabold text-[#FDE047] text-3xl sm:mt-2 sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_14px_rgba(0,0,0,1)]"
              >
                <span>{typedAcademyText}</span>
                <span aria-hidden="true" className="typewriter-cursor sm:w-[4px]" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-3.5 max-w-2xl text-pretty text-xs font-semibold leading-relaxed text-white sm:mt-5 sm:text-base sm:leading-8 lg:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,1)]">
              Sikar&apos;s premier CBSE institution nurturing academic
              excellence, disciplined leadership, and holistic growth
              for your child&apos;s bright future.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex items-center justify-center sm:mt-8">
              <Button
                href="/applyNow"
                size="lg"
                variant="transparent"
                className="relative overflow-hidden rounded-xl !bg-transparent hover:!bg-white/10 text-white border-2 border-white/75 hover:border-white px-7 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]"
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
