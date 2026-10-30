"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/comman/Button";
import { Sparkles, PhoneCall, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Institute", href: "/about-institute" },
  { label: "Admission", href: "/applyNow" },
  { label: "Result", href: "/results" },
  { label: "Facilities", href: "/facilities" },
  { label: "Achievers", href: "/achievers" },
];

const TOUR_URL =
  "https://tour.princeeduhub.com/princt34/prince-academy/";

const LOGO_SRC = "/images/prince-academy-logo.png";

function isActiveRoute(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item, pathname, mobile = false, onClick }) {
  const active = isActiveRoute(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        relative flex shrink-0 items-center
        whitespace-nowrap rounded-full font-semibold
        transition-all duration-200
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        ${
          mobile
            ? "w-full px-4 py-3 text-[15px]"
            : "px-3.5 py-2 text-[13px] xl:px-4 xl:text-sm"
        }
        ${
          active
            ? `
              border border-blue-200/90
              bg-blue-50/90
              text-primary font-bold
              shadow-xs
            `
            : `
              border border-transparent
              bg-transparent text-slate-700
              hover:text-primary hover:bg-slate-100/70
            `
        }
      `}
    >
      <span>{item.label}</span>
    </Link>
  );
}

function Tour360Link() {
  return (
    <Link
      href={TOUR_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore 360 degree campus tour"
      className="
        group flex h-10 w-10 shrink-0 items-center justify-center
        rounded-full border border-blue-200
        bg-blue-50/70 text-primary
        shadow-xs
        transition-all duration-200
        hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary
      "
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
        aria-hidden="true"
      >
        <path d="M89.5 60.9A41 41 0 1 1 73.5 16.4" />
        <path d="M73.5 16.4 91 31.9" />
        <polyline points="73.5,31.9 91,31.9 91,14.4" />

        <circle
          cx="88"
          cy="42.9"
          r="3.2"
          fill="currentColor"
          stroke="none"
        />

        <text
          x="49.3"
          y="50"
          dy="0.35em"
          textAnchor="middle"
          fontSize="34"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="-1.5px"
          fill="currentColor"
          stroke="none"
        >
          360
        </text>
      </svg>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full select-none shadow-[0_4px_25px_-5px_rgba(0,0,0,0.12)]">
      {/* 1. TOP ANNOUNCEMENT HEADER (Hides smoothly on scroll) */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-[#072255] via-[#0A3D91] to-[#072255] text-white px-4 ${
          scrolled
            ? "max-h-0 opacity-0 pointer-events-none -translate-y-2 border-b-0 py-0"
            : "max-h-14 opacity-100 py-2 border-b border-blue-400/20"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          {/* Left Announcement Message */}
          <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#072255] shadow-xs">
              <Sparkles size={11} className="animate-spin-slow" /> Admissions 2026-27
            </span>
            <span className="hidden sm:inline font-medium text-blue-100">
              CBSE Affiliated Day-Boarding &amp; Residential School · Sikar (Raj.)
            </span>
            <span className="sm:hidden font-medium text-blue-100 text-[11px]">
              Open: Nursery to XII (CBSE)
            </span>
          </div>

          {/* Right Quick Contacts & Apply link */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-blue-100">
            <a
              href="tel:+919610892222"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <PhoneCall size={12} className="text-amber-400" />
              <span className="hidden md:inline">Helpline:</span> +91 9610892222
            </a>
            <span className="hidden sm:inline h-3 w-px bg-blue-400/30" />
            <Link
              href="/applyNow"
              className="hidden sm:inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white transition-colors"
            >
              Enquire Online <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. CLEAN SIMPLE WHITE NAVBAR WITH PREMIUM INNER & OUTER SHADOW */}
      <div className="w-full border-b border-slate-200/80 bg-white text-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03),inset_0_-1px_3px_rgba(10,61,145,0.04),0_10px_30px_-5px_rgba(10,37,85,0.12),0_4px_12px_-2px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[74px] sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Prince Academy Home"
            className="flex shrink-0 items-center transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <img
              src={LOGO_SRC}
              alt="Prince Academy"
              width="140"
              height="60"
              fetchPriority="high"
              style={{ maxHeight: "36px", width: "auto" }}
              className="h-7 w-auto select-none object-contain sm:h-8 md:h-9"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-1.5"
          >
            {LINKS.map((item) => (
              <NavLink key={item.href} item={item} pathname={pathname} />
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <Tour360Link />
            </div>

            <div className="hidden sm:block">
              <Button
                href="/applyNow"
                variant="primary"
                size="md"
                className="rounded-full px-5 py-2.5 text-sm font-bold tracking-wide shadow-md hover:scale-105 transition-all"
              >
                Apply Now
                <span aria-hidden="true">→</span>
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((previous) => !previous)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-slate-200
                bg-slate-50 text-slate-700
                shadow-xs transition-colors hover:bg-slate-100 hover:text-primary
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-primary
                lg:hidden
              "
            >
              {open ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m18 6-12 12M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              absolute inset-x-3 top-[calc(100%+8px)] z-50
              overflow-hidden rounded-2xl
              border border-slate-200
              bg-white p-3.5 text-slate-800
              shadow-2xl
              sm:inset-x-6 lg:hidden
            "
          >
            <div className="mb-3 flex items-center justify-between border-b border-slate-100 px-3 pb-3">
              <div>
                <p className="text-sm font-bold text-primary">Prince Academy</p>
                <p className="mt-0.5 text-xs text-slate-500">Explore your future</p>
              </div>

              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                Menu
              </span>
            </div>

            <div className="space-y-1">
              {LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  mobile
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>

            <div className="mt-3 border-t border-slate-100 pt-3">
              <Button
                href="/applyNow"
                variant="primary"
                size="lg"
                className="w-full rounded-xl font-bold tracking-wide"
              >
                Apply for Admission
                <span aria-hidden="true">→</span>
              </Button>

              <Link
                href={TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  mt-2 flex w-full items-center justify-center
                  rounded-xl border border-blue-200
                  bg-blue-50/60 px-4 py-3
                  text-sm font-semibold text-primary
                  transition-colors hover:bg-blue-100/70
                "
              >
                Explore 360° Campus Tour
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
