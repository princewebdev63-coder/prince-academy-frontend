"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  // Scroll par autoplay off (Scroll down > 40px: pause, Scroll back to top: play)
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      if (window.scrollY > 40) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      aria-label="Prince Academy Campus Video"
      className="relative w-full pt-[14px] sm:pt-[18px] lg:pt-0 overflow-hidden bg-background select-none"
    >
      {/* Container: Mobile par aspect-video, Desktop par h-screen */}
      <div className="relative w-full aspect-video sm:aspect-[16/9] lg:h-screen lg:aspect-auto overflow-hidden bg-background">
        {/* Fallback image: Video buffer / load hone tak dikhegi */}
        <img
          src="/images/hero-poster.jpg"
          alt="Prince Academy Campus"
          className="absolute inset-0 w-full h-full object-cover scale-[1.25] origin-center select-none pointer-events-none -z-10"
        />

        {/* Video with native poster preview */}
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-[1.25] origin-center select-none pointer-events-none transform-gpu"
        />
      </div>
    </section>
  );
}

export { Hero };
