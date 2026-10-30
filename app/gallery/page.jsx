"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowLeft,
  Home,
  Eye,
} from "lucide-react";
import { DEFAULT_CAMPUS_PHOTOS } from "@/components/home/CampusGallery";

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "sports", label: "Sports & Athletics" },
  { id: "campus", label: "Campus & Hostels" },
  { id: "academics", label: "Academics & Labs" },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Filter photos based on category
  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return DEFAULT_CAMPUS_PHOTOS;
    return DEFAULT_CAMPUS_PHOTOS.filter((photo) => {
      const href = photo.href || "";
      const tag = (photo.tag || "").toLowerCase();
      if (activeCategory === "sports") {
        return (
          href.includes("sports") ||
          tag.includes("sport") ||
          tag.includes("athletics") ||
          tag.includes("cricket")
        );
      }
      if (activeCategory === "campus") {
        return (
          href.includes("campus") ||
          tag.includes("campus") ||
          tag.includes("infrastructure") ||
          tag.includes("heritage")
        );
      }
      if (activeCategory === "academics") {
        return (
          href.includes("academics") ||
          tag.includes("academic") ||
          tag.includes("lab")
        );
      }
      return true;
    });
  }, [activeCategory]);

  const activePhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev === 0 ? filteredPhotos.length - 1 : prev - 1
        );
      }
    },
    [selectedPhotoIndex, filteredPhotos.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-blue-900/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-slate-600 transition-colors hover:text-[#043A80]"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="font-bold text-[#043A80]">Campus Gallery</span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#043A80] transition-colors hover:text-[#032A5E]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-1.5 text-xs font-black tracking-widest text-amber-800 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>CAMPUS MOMENTS & FACILITIES</span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#043A80] sm:text-4xl lg:text-5xl">
            Prince Academy Photo Gallery
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs font-medium leading-relaxed text-slate-600 sm:text-base">
            Glimpse into life at Rajasthan&apos;s premier educational institution: Olympic-standard athletic arenas, high-tech science labs, and vibrant campus celebrations.
          </p>

          {/* Filter Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-[#043A80] text-white shadow-md shadow-blue-900/20 ring-2 ring-amber-400"
                      : "border border-blue-900/10 bg-white/90 text-slate-700 hover:border-[#043A80]/40 hover:bg-white"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-[#043A80]">{filteredPhotos.length}</span> campus moments
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-900/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-blue-950/15"
              style={{ aspectRatio: photo.ratio || "4 / 3" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />

              {/* Tag pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 rounded-md bg-[#043A80]/85 px-2 py-1 text-[10px] font-bold text-amber-300 uppercase shadow-xs backdrop-blur-xs">
                  {photo.tag}
                </span>
              </div>

              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#043A80]/90 via-[#043A80]/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-bold text-white drop-shadow-xs">
                  {photo.title}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev === 0 ? filteredPhotos.length - 1 : prev - 1
              );
            }}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
            }}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Main content */}
          <div
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[65vh] w-[88vw] max-w-4xl">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Caption bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-slate-950/90 px-5 py-3.5 text-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {activePhoto.tag}
                </span>
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {activePhoto.title}
                </h3>
              </div>

              <div className="text-xs font-semibold text-slate-400">
                {selectedPhotoIndex + 1} of {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA banner */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#043A80] via-[#0A2E6D] to-[#043A80] p-8 text-center text-white shadow-xl sm:p-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-amber-300 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              CAMPUS VISIT INVITATION
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              Experience the Campus in Person
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-blue-100/90 sm:text-sm">
              Take a guided campus tour of our sports stadium, smart classrooms, hostels, and scientific laboratories in Sikar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/applyNow"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-xs font-black text-slate-950 shadow-md transition-all hover:bg-amber-300 hover:shadow-lg sm:text-sm"
              >
                <span>Apply for Admission</span>
              </Link>
              <Link
                href="https://tour.princeeduhub.com/princt34/prince-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-bold text-white backdrop-blur-xs transition-all hover:bg-white/20 sm:text-sm"
              >
                <Eye className="h-4 w-4 text-amber-300" />
                <span>Take 360° Virtual Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] text-slate-900">
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#043A80] border-t-transparent" />
          </div>
        }
      >
        <GalleryContent />
      </Suspense>
    </main>
  );
}
