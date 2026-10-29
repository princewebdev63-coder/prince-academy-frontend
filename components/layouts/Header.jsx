
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/comman/Button";

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
        transition-all duration-300
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#F2B134]
        ${
          mobile
            ? "w-full px-4 py-3 text-[15px]"
            : "px-3.5 py-2.5 text-[13px] xl:px-4 xl:text-sm"
        }
        ${
          active
            ? `
              border border-[#F2B134]/70
              bg-gradient-to-br from-[#EAF3FF] via-white to-[#CFE0FF]
              text-[#061B3A]
              shadow-[0_3px_14px_rgba(77,163,255,0.18)]
            `
            : `
              border border-transparent
              bg-transparent text-white
              [text-shadow:0_1px_4px_rgba(2,13,30,0.65)]
              hover:border-white/25
              hover:bg-white/10
              hover:text-[#F2B134]
            `
        }
      `}
    >
      {active && (
        <span
          aria-hidden="true"
          className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D99A19]"
        />
      )}

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
        rounded-full border border-white/45
        bg-white/[0.14] text-[#0A3D91]
        shadow-[0_2px_10px_rgba(10,30,60,0.08)]
        backdrop-blur-md
        transition-all duration-200
        hover:scale-105 hover:bg-white/35
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#4DA3FF]
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
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-white/35
        bg-white/[0.12]
        text-white
        shadow-[0_4px_24px_rgba(10,30,60,0.045)]
        backdrop-blur-xl
      "
    >
      {/* Glass reflection */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-white/80 to-transparent
        "
      />

      <div
        className="
          relative mx-auto flex h-[68px] max-w-7xl
          items-center justify-between gap-3
          px-4 sm:h-[76px] sm:px-6 lg:px-8
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Prince Academy Home"
          className="
            flex shrink-0 items-center rounded-xl
            border border-white/70 bg-white/75
            px-2.5 py-1.5
            shadow-[0_2px_8px_rgba(10,30,60,0.06)]
            transition-transform duration-200
            hover:scale-[1.02]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#4DA3FF]
          "
        >
          <img
            src={LOGO_SRC}
            alt="Prince Academy"
            width="170"
            height="44"
            fetchPriority="high"
            className="h-7 w-auto select-none object-contain sm:h-9"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Primary navigation"
          className="
            hidden min-w-0 flex-1 items-center justify-center
            gap-0.5 lg:flex xl:gap-1
          "
        >
          {LINKS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
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
              variant="honey"
              size="md"
              className="
                rounded-full border border-[#E6A21A]/70
                px-5 py-2.5 text-sm font-bold
                shadow-[0_2px_10px_rgba(10,30,60,0.08)]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
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
              rounded-full border border-white/50
              bg-white/[0.16] text-[#0A3D91]
              shadow-sm backdrop-blur-md
              transition-colors hover:bg-white/35
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#4DA3FF]
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

      {/* MOBILE GLASS MENU */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="
              fixed inset-0 z-40 bg-[#061B3A]/25
              backdrop-blur-sm lg:hidden
            "
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              absolute inset-x-3 top-[calc(100%+8px)] z-50
              overflow-hidden rounded-2xl
              border border-white/60
              bg-white/[0.92] p-3 text-[#10233F]
              shadow-[0_20px_60px_rgba(10,30,60,0.16)]
              backdrop-blur-2xl
              sm:inset-x-6 lg:hidden
            "
          >
            <div className="mb-3 flex items-center justify-between border-b border-[#0A3D91]/10 px-3 pb-3">
              <div>
                <p className="text-sm font-bold text-[#0A3D91]">
                  Prince Academy
                </p>
                <p className="mt-0.5 text-xs text-[#52627A]">
                  Explore your future
                </p>
              </div>

              <span className="rounded-full border border-[#0A3D91]/10 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#52627A]">
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

            <div className="mt-3 border-t border-[#0A3D91]/10 pt-3">
              <Button
                href="/applyNow"
                variant="honey"
                size="lg"
                className="w-full rounded-full font-bold"
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
                  rounded-full border border-[#0A3D91]/15
                  bg-white/40 px-4 py-3
                  text-sm font-semibold text-[#0A3D91]
                  transition-colors hover:bg-white/70
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
