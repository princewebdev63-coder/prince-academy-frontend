
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

const BASE_LINK =
  "rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 select-none";

const DESKTOP_LINK =
  "text-white/85 hover:text-white hover:bg-white/10";

const ACTIVE_LINK =
  "bg-button text-primary font-bold shadow-sm";

const INACTIVE_LINK =
  "text-white/85 hover:text-gold hover:bg-white/10";

const MOBILE_LINK =
  "block rounded-xl px-4 py-2.5 text-sm font-semibold";

function isActiveRoute(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  pathname,
  mobile = false,
  onClick,
}) {
  const active = isActiveRoute(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`${BASE_LINK} ${
        mobile ? MOBILE_LINK : DESKTOP_LINK
      } ${active ? ACTIVE_LINK : INACTIVE_LINK}`}
    >
      {item.label}
    </Link>
  );
}

function Tour360Link() {
  return (
    <Link
      href={TOUR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center justify-center"
      aria-label="Explore 360 degree campus tour"
    >
      <div
        className="
          flex h-8 w-8 items-center justify-center
          rounded-full bg-button text-primary
          shadow-md transition-all duration-300
          hover:scale-110 hover:bg-button-hover hover:shadow-lg
          active:scale-95
          sm:h-9 sm:w-9
        "
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[18px] w-[18px] sm:h-5 sm:w-5"
          aria-hidden="true"
        >
          <path d="M 89.5 60.9 A 41 41 0 1 1 73.5 16.4" />

          <path d="M 73.5 16.4 L 91 31.9" />
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
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  // Close the menu when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-white/15 bg-[#0A3D91]/45 text-white shadow-[0_4px_30px_rgba(10,61,145,0.2)] backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* LEFT: Logo */}
        <div className="flex items-center lg:min-w-[180px]">
          <Link
            href="/"
            aria-label="Prince Academy Home"
            className="flex items-center transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center rounded-lg bg-white/95 px-2.5 py-1 shadow-sm ring-1 ring-white/30">
              <img
                src={LOGO_SRC}
                alt="Prince Academy logo"
                width="160"
                height="40"
                className="h-6 w-auto select-none object-contain sm:h-7.5"
              />
            </div>
          </Link>
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
        >
          {LINKS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* RIGHT: Tour, Apply and Mobile Toggle */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:min-w-[180px]">
          <Tour360Link />

          <div className="hidden sm:block">
            <Button
              href="/applyNow"
              size="sm"
              className="px-3.5 py-1.5 text-xs font-bold"
            >
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-lg text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <>
          {/* Backdrop starts BELOW the header, so the logo stays sharp */}
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className="fixed inset-x-0 bottom-0 top-14 z-40 bg-black/40 backdrop-blur-sm sm:top-16 lg:hidden"
          />

          {/* Tap anywhere inside the menu to close it */}
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            onClick={closeMenu}
            className="absolute inset-x-4 top-[calc(100%+8px)] z-50 rounded-2xl border border-white/15 bg-[#0A3D91]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-1">
              {LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  mobile
                />
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href="/applyNow"
                className="btn-primary-gradient block rounded-full py-2.5 text-center text-sm font-bold shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
