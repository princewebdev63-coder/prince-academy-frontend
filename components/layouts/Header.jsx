"use client";

import { useState } from "react";
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

// Computed once, not on every render.
const LEFT_LINKS = LINKS.slice(0, 3);
const RIGHT_LINKS = LINKS.slice(3);

const TOUR_URL = "https://tour.princeeduhub.com/princt34/prince-academy/";
const LOGO_SRC = "/images/prince-academy-logo.png";

const CLIP =
  "polygon(0 0, var(--lw) 0, calc(var(--lw) + var(--sl)) var(--bump), calc(100% - var(--rw) - var(--sl)) var(--bump), calc(100% - var(--rw)) 0, 100% 0, 100% var(--band), calc(100% - var(--rw)) var(--band), calc(100% - var(--rw) - var(--sl)) var(--total), calc(var(--lw) + var(--sl)) var(--total), var(--lw) var(--band), 0 var(--band))";

// Static style objects (no new object on every render).
const SHADOW_STYLE = {
  filter: "drop-shadow(0 1.5px 2px rgba(255, 255, 255, 0.35))",
};
const SHAPE_STYLE = {
  clipPath: CLIP,
  backgroundColor: "var(--primary)",
};

// NavLink class groups (same classes as before, just split out).
const BASE_LINK =
  "rounded-lg px-3 py-2 font-semibold transition-colors duration-200";
const MOBILE_LINK = "block rounded-xl px-4 py-3";
const DESKTOP_LINK = "text-white hover:bg-white/10";
const ACTIVE_LINK = "bg-button text-primary shadow-sm";
const INACTIVE_LINK = "text-white hover:text-button";

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
      className={`${BASE_LINK} ${mobile ? MOBILE_LINK : DESKTOP_LINK} ${
        active ? ACTIVE_LINK : INACTIVE_LINK
      }`}
    >
      {item.label}
    </Link>
  );
}


//  360 degree campus tour button.

function Tour360Link() {
  return (
    <Link
      href={TOUR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        order-first flex h-[var(--band)]
        items-center justify-center
        lg:order-none
      "
      aria-label="Explore 360 degree campus tour"
    >
      <div
        className="
          flex h-9 w-9 items-center justify-center
          rounded-full bg-button text-primary
          shadow-md transition-all duration-300
          hover:scale-110 hover:bg-button-hover hover:shadow-lg
          active:scale-95
          sm:h-10 sm:w-10
          lg:h-11 lg:w-11
        "
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
          aria-hidden="true"
        >
          {/* Circular rotation arc (center 50,50 / radius 41) */}
          <path d="M 89.5 60.9 A 41 41 0 1 1 73.5 16.4" />

          {/* Arrow shaft and head at top right */}
          <path d="M 73.5 16.4 L 91 31.9" />
          <polyline points="73.5,31.9 91,31.9 91,14.4" />

          {/* Degree dot */}
          <circle cx="88" cy="42.9" r="3.2" fill="currentColor" stroke="none" />

          {/* 360 text, centered inside the ring */}
          <text
            x="49.3"
            y="50"
            dy="0.35em"
            textAnchor="middle"
            fontSize="34"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
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
  const [prevPathname, setPrevPathname] = useState(pathname);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((previous) => !previous);

  // Close mobile menu when route changes.
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        w-full h-[var(--total)]
        text-white
        [--bump:8px]
        [--band:46px]
        [--lw:76px]
        [--rw:64px]
        [--sl:14px]
        [--bover:7px]
        lg:[--bump:22px]
        lg:[--band:58px]
        lg:[--lw:170px]
        lg:[--rw:120px]
        lg:[--sl:34px]
        lg:[--bover:13px]
        [--total:calc(var(--bump)_+_var(--band))]
      "
    >
      {/* Transparent area: underlying page background remains visible. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={SHADOW_STYLE}
      >
        {/* Navbar background shape */}
        <div className="h-full w-full bg-primary" style={SHAPE_STYLE} />
      </div>

      {/* Header navigation */}
      <div
        className="
          relative z-50 grid h-full
          grid-cols-[var(--lw)_1fr_var(--rw)]
          lg:grid-cols-[var(--lw)_1fr_250px_1fr_var(--rw)]
        "
      >
        {/* Apply Now - Desktop */}
        <div className="hidden h-[var(--band)] items-center justify-center lg:flex">
          <Button href="/applyNow">Apply Now</Button>
        </div>

        {/* Left navigation */}
        <nav
          aria-label="Primary navigation"
          className="
            hidden h-[var(--band)]
            items-center justify-center gap-2
            self-end pl-[var(--sl)] lg:flex
          "
        >
          {LEFT_LINKS.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        {/* Center grid space for logo */}
        <div aria-hidden="true" />

        {/* Right navigation */}
        <nav
          aria-label="Secondary navigation"
          className="
            hidden h-[var(--band)]
            items-center justify-center gap-2
            self-end pr-[var(--sl)] lg:flex
          "
        >
          {RIGHT_LINKS.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        {/* 360 Degree Campus Tour */}
        <Tour360Link />

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="
            flex h-[var(--band)]
            items-center justify-center
            text-xl transition-colors
            hover:text-button
            lg:hidden lg:text-2xl
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Center Logo */}
      <Link
        href="/"
        aria-label="Prince Academy Home"
        className="
          absolute
          left-1/2
          top-[calc(var(--bump)_-_var(--bover))]
          z-10
          flex
          h-[calc(var(--band)_+_2_*_var(--bover))]
          w-[115px]
          -translate-x-1/2
          items-center justify-center
          rounded-4xl
          border-2 border-secondary
          bg-background
          px-2.5
          shadow-xl
          transition-transform
          hover:-translate-y-0.5
          sm:w-[150px] sm:px-3
          lg:w-[230px] lg:px-4
        "
      >
        <img
          src={LOGO_SRC}
          alt="Prince Academy logo"
          width="230"
          height="60"
          className="
            h-7 w-auto max-w-[92%]
            select-none object-contain
            sm:h-9 lg:h-12
          "
        />
      </Link>

      {/* Mobile Navigation & Backdrop */}
      {open && (
        <>
          {/* Backdrop overlay (subtle opacity to close on outside click) */}
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[1px] lg:hidden"
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              absolute inset-x-2
              top-[calc(var(--total)_+_var(--bover)_+_6px)]
              z-50
              rounded-2xl
              border border-white/20
              bg-primary
              p-2
              shadow-2xl
              lg:hidden
            "
          >
            {LINKS.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                pathname={pathname}
                mobile
                onClick={closeMenu}
              />
            ))}

            <Link
              href="/applyNow"
              onClick={closeMenu}
              className="
                mt-2 block rounded-full
                bg-button py-3 text-center
                font-bold text-primary
                transition-colors hover:bg-button-hover
              "
            >
              Apply Now
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
