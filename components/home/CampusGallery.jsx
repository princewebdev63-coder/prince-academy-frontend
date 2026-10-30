"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Camera } from "lucide-react";

/**
 * Default gallery items.
 * Built dynamically so that any backend API data passed via `photos` prop
 * replaces or augments this list seamlessly.
 */
export const DEFAULT_CAMPUS_PHOTOS = [
  {
    id: "photo-1",
    src: "/images/imgi_12_basketball.jpg",
    alt: "Basketball Championship Court at Prince Academy",
    title: "Basketball Championship Arena",
    tag: "Sports Hub",
    ratio: "4 / 3",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-2",
    src: "/images/imgi_13_cricket.jpg",
    alt: "Cricket Match & Professional Training Grounds",
    title: "BCCI Standard Cricket Arena",
    tag: "Cricket Academy",
    ratio: "3 / 2",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-3",
    src: "/images/imgi_14_handball.jpg",
    alt: "Handball Tournament at Prince Academy",
    title: "National Handball Ground",
    tag: "Athletics",
    ratio: "4 / 3",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-4",
    src: "/images/imgi_15_shooting.jpg",
    alt: "Olympic Standard Shooting Range",
    title: "Olympic 10m/50m Shooting Range",
    tag: "Target Sports",
    ratio: "1 / 1",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-5",
    src: "/images/imgi_16_kabadi.jpg",
    alt: "Kabaddi Championship Training Arena",
    title: "Pro Kabaddi Indoor Mats",
    tag: "Combat Sports",
    ratio: "3 / 2",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-6",
    src: "/images/imgi_17_vollyball.jpg",
    alt: "Volleyball Tournament & Practice Courts",
    title: "Floodlit Volleyball Complex",
    tag: "Outdoor Arena",
    ratio: "4 / 3",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-7",
    src: "/images/sport01.webp",
    alt: "100+ Acre Olympic Standard Sports Grounds",
    title: "100+ Acre Athletic Stadium",
    tag: "Infrastructure",
    ratio: "16 / 10",
    href: "/gallery?category=campus",
  },
  {
    id: "photo-8",
    src: "/images/imgi_18_badminton.jpg",
    alt: "Indoor Synthetic Badminton Arena",
    title: "Air-Conditioned Badminton Courts",
    tag: "Indoor Arena",
    ratio: "4 / 3",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-9",
    src: "/images/imgi_19_wrestling.jpg",
    alt: "Olympic Wrestling & Athletic Training Center",
    title: "Olympic Wrestling Arena",
    tag: "Wrestling Club",
    ratio: "3 / 2",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-10",
    src: "/images/imgi_20_5.jpg",
    alt: "Fitness and Athletic Track Session",
    title: "400m Synthetic Athletic Track",
    tag: "Athletics",
    ratio: "4 / 3",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-11",
    src: "/images/imgi_12_cri1.jpg",
    alt: "Cricket Practice Turf Nets & Specialist Coaching",
    title: "Turf Bowling & Batting Nets",
    tag: "Cricket Academy",
    ratio: "1 / 1",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-12",
    src: "/images/imgi_13_cri2.jpg",
    alt: "State Champion Student Athletes",
    title: "State Champion Academy Squad",
    tag: "Champions",
    ratio: "3 / 2",
    href: "/gallery?category=sports",
  },
  {
    id: "photo-13",
    src: "/images/campus.webp",
    alt: "Main Campus Building at Prince Academy Sikar",
    title: "Majestic Main Academic Campus",
    tag: "Campus Life",
    ratio: "16 / 10",
    href: "/gallery?category=campus",
  },
  {
    id: "photo-14",
    src: "/images/video-labiray01.webp",
    alt: "High-Tech Digital Innovation Lab and Library",
    title: "Digital Library & AI Labs",
    tag: "Academics",
    ratio: "4 / 3",
    href: "/gallery?category=academics",
  },
  {
    id: "photo-15",
    src: "/images/mess02.webp",
    alt: "Hygienic Dining & Central Student Mess",
    title: "Hygienic Modern Dining Hall",
    tag: "Residential",
    ratio: "3 / 2",
    href: "/gallery?category=campus",
  },
  {
    id: "photo-16",
    src: "/images/Temple.webp",
    alt: "Saraswati Mandir & Spiritual Ambiance",
    title: "Saraswati Temple & Cultural Hub",
    tag: "Heritage",
    ratio: "4 / 3",
    href: "/gallery?category=campus",
  },
];

/**
 * Normalizes any photo item into standard format so arbitrary backend API
 * responses (with different keys like `url`, `image`, `caption`, `_id`)
 * work seamlessly without breaking the layout.
 */
function normalizePhoto(item, index) {
  if (typeof item === "string") {
    return {
      id: `photo-str-${index}`,
      src: item,
      alt: "Prince Academy Campus",
      title: "Campus Moment",
      tag: "Campus Life",
      ratio: ["4 / 3", "3 / 2", "1 / 1", "16 / 10"][index % 4],
      href: "/gallery",
    };
  }

  const defaultRatios = ["4 / 3", "3 / 2", "1 / 1", "16 / 10"];
  const ratio = item.ratio || item.aspectRatio || defaultRatios[index % defaultRatios.length];

  return {
    id: item.id || item._id || `photo-${index}`,
    src: item.src || item.url || item.image || item.imageUrl || "/images/imgi_12_basketball.jpg",
    alt: item.alt || item.title || item.caption || "Prince Academy Sikar",
    title: item.title || item.alt || item.caption || "Campus Facility",
    tag: item.tag || item.category || "Life at Prince",
    ratio,
    href: item.href || item.link || "/gallery",
  };
}

/**
 * Dynamically distribute photos into N columns.
 * If backend returns fewer items than required for smooth infinite scroll,
 * elements are repeated so the column height comfortably exceeds viewport height.
 */
function distributeToColumns(items, columnCount) {
  if (!items || items.length === 0) return [];
  const columns = Array.from({ length: columnCount }, () => []);

  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  return columns.map((col) => {
    if (col.length === 0) return items;
    let filled = [...col];
    while (filled.length < 3) {
      filled = filled.concat(col);
    }
    return filled;
  });
}

function GalleryColumn({ items, direction = "up", duration = "35s" }) {
  // Duplicating the items creates an exact identical twin half.
  // Translating from 0 to -50% (or -50% to 0) produces a 100% pixel-perfect seamless loop.
  const repeatedItems = [...items, ...items];

  return (
    <div className="group/column relative h-full min-w-0 overflow-hidden">
      <div
        className={`prince-campus-gallery-track flex flex-col ${
          direction === "down" ? "prince-gallery-down" : "prince-gallery-up"
        }`}
        style={{
          "--gallery-duration": duration,
        }}
      >
        {repeatedItems.map((photo, index) => {
          const isDuplicate = index >= items.length;

          return (
            <Link
              key={`${photo.id || photo.src}-${index}`}
              href={photo.href || "/gallery"}
              tabIndex={isDuplicate ? -1 : 0}
              aria-hidden={isDuplicate}
              className="group/card relative mb-3 block w-full shrink-0 overflow-hidden rounded-xl border-[5px] border-white bg-[#032352] shadow-xl shadow-[#021430]/70 transition-all duration-500 hover:z-20 hover:border-[#0A66C2] hover:shadow-[0_15px_35px_rgba(2,20,48,0.9),0_0_25px_rgba(10,102,194,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] sm:mb-4 sm:rounded-2xl sm:border-[6px] md:border-[7px]"
              style={{ aspectRatio: photo.ratio }}
              title={`View ${photo.title} in Gallery`}
            >
              <Image
                src={photo.src}
                alt={isDuplicate ? "" : photo.alt}
                fill
                sizes="(max-width: 639px) 33vw, (max-width: 1023px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
              />

              {/* Hover Dark Royal Blue Overlay & Info Badge */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#02173B]/95 via-[#043A80]/75 to-[#043A80]/20 p-3 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 sm:p-4">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-amber-400/40 bg-amber-400/15 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {photo.tag}
                </span>

                <p className="line-clamp-2 mt-1 text-xs font-bold text-white drop-shadow-sm sm:text-sm">
                  {photo.title}
                </p>

                <div className="mt-1.5 flex items-center gap-1 text-[11px] font-bold text-[#FFC107] sm:text-xs">
                  <span>Explore in Gallery</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 text-[#FFC107]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function CampusGallery({
  photos: propPhotos,
  title = "Life & Energy at Prince Academy",
  badge = "CAMPUS & SPORTS LIFE",
  subtitle = "State-of-the-art sports arenas, Olympic standard tracks, smart laboratories, and a vibrant community of champions.",
  viewAllHref = "/gallery",
  className = "",
}) {
  // Merge external backend photos or fallback to default dataset
  const rawList = propPhotos && propPhotos.length > 0 ? propPhotos : DEFAULT_CAMPUS_PHOTOS;
  const normalizedPhotos = useMemo(
    () => rawList.map(normalizePhoto),
    [rawList]
  );

  // Responsive column distributions computed dynamically
  const mobileColumns = useMemo(
    () => distributeToColumns(normalizedPhotos, 3),
    [normalizedPhotos]
  );

  const desktopColumns = useMemo(
    () => distributeToColumns(normalizedPhotos, 4),
    [normalizedPhotos]
  );

  return (
    <section
      aria-label="Prince Academy campus and sports gallery"
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#04285E] via-[#063C8A] to-[#032352] py-12 text-white sm:py-16 lg:py-20 ${className}`}
    >
      {/* Royal Blue ambient lighting & glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(80%_80%_at_50%_40%,#000,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-[#1860CE]/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-sky-400/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-cyan-400/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
      />

      {/* Embedded CSS rules for 100% reliability with zero external CSS dependency */}
      <style jsx global>{`
        @keyframes princeGalleryUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes princeGalleryDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .prince-campus-gallery-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        .prince-gallery-up {
          animation: princeGalleryUp var(--gallery-duration, 34s) linear infinite;
        }
        .prince-gallery-down {
          animation: princeGalleryDown var(--gallery-duration, 38s) linear infinite;
        }
        .group\\/column:hover .prince-campus-gallery-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12">
          {/* Frosted Pearl & Cyan Badge */}
          

          {/* Heading with Frosted Glass Blue Text and Yellow Sketch Underline */}
          <h2 className="mt-3.5 text-2xl font-black tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-4xl">
            Life & Energy at{" "}
            <span className="relative inline-block bg-gradient-to-b from-white/95 via-blue-200/90 to-blue-400/85 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(96,165,250,0.45)]">
              Prince Academy
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-[#FFC107] overflow-visible pointer-events-none"
                viewBox="0 0 250 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 10.5C50 3.5 150 2 247 9.5M15 12C70 6 170 5.5 235 11"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 max-w-2xl text-xs font-normal leading-relaxed text-blue-100/90 sm:text-sm lg:text-base">
            {subtitle}
          </p>

          {/* Solid White Button */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href={viewAllHref}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white bg-white px-7 py-2.5 text-xs font-black text-[#043A80] shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] sm:text-sm cursor-pointer"
            >
              <Camera className="h-4 w-4 text-[#043A80] transition-transform duration-300 group-hover:rotate-6" />
              <span>Explore Complete Gallery</span>
              <ArrowUpRight className="h-4 w-4 text-[#043A80] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Gallery Carousel Window with Soft Top/Bottom Gradient Mask */}
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-white/20 bg-white/[0.04] p-2 shadow-[0_20px_50px_rgba(2,20,48,0.5)] backdrop-blur-xs sm:rounded-3xl sm:p-3.5">
          {/* Mobile and Tablet: 3 columns */}
          <div
            className="grid h-[540px] w-full grid-cols-3 gap-2.5 overflow-hidden px-1 sm:h-[640px] sm:gap-3.5 sm:px-2 lg:hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            {mobileColumns.map((items, index) => (
              <GalleryColumn
                key={`mobile-col-${index}`}
                items={items}
                direction={index === 1 ? "down" : "up"}
                duration={index === 1 ? "38s" : index === 0 ? "32s" : "30s"}
              />
            ))}
          </div>

          {/* Desktop: 4 columns */}
          <div
            className="hidden h-[740px] w-full grid-cols-4 gap-4 overflow-hidden px-2 lg:grid xl:h-[800px] xl:gap-5"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            {desktopColumns.map((items, index) => (
              <GalleryColumn
                key={`desktop-col-${index}`}
                items={items}
                direction={index % 2 === 1 ? "down" : "up"}
                duration={["32s", "38s", "30s", "36s"][index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
