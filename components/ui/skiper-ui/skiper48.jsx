"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";

const Skiper48 = () => {
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/5.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/6.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <Carousel_002 className="" images={images} loop />
    </div>
  );
};

export { Skiper48 };

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 55px !important;
  }
  .Carousal_002 .swiper-pagination-bullet {
    background: #13293D !important;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  .Carousal_002 .swiper-pagination-bullet-active {
    background: #F4C675 !important;
    opacity: 1;
    width: 26px !important;
    border-radius: 9999px !important;
  }
  .Carousal_002 .swiper-button-next,
  .Carousal_002 .swiper-button-prev {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(8px);
    width: 44px !important;
    height: 44px !important;
    border-radius: 9999px !important;
    box-shadow: 0 8px 24px rgba(19, 41, 61, 0.15) !important;
    border: 1px solid rgba(19, 41, 61, 0.08) !important;
    transition: all 0.2s ease;
  }
  .Carousal_002 .swiper-button-next:hover,
  .Carousal_002 .swiper-button-prev:hover {
    background: #FFFFFF !important;
    transform: scale(1.08);
  }
  `;
  // Swiper Cards Effect loop mode needs at least 5 slides to calculate card stack buffer
  const slides =
    loop && images.length > 1 && images.length < 5
      ? [...images, ...images]
      : images;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full flex justify-center", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 mx-auto w-[280px] h-[370px] sm:w-[360px] sm:h-[475px] lg:w-[460px] lg:h-[600px] xl:w-[480px] xl:h-[620px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
            <img
              className="h-full w-full object-cover object-center rounded-3xl select-none"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-primary" strokeWidth={2.5} />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-primary" strokeWidth={2.5} />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_002 };

/**
 * Skiper 48 Carousel_002 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
