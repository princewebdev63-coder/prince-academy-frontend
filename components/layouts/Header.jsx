
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

const TOUR_URL = "https://tour.princeeduhub.com/princt34/old-campus/";
const LOGO_SRC = "/images/prince-academy-logo.png";

const CLIP =
  "polygon(0 0, var(--lw) 0, calc(var(--lw) + var(--sl)) var(--bump), calc(100% - var(--rw) - var(--sl)) var(--bump), calc(100% - var(--rw)) 0, 100% 0, 100% var(--band), calc(100% - var(--rw)) var(--band), calc(100% - var(--rw) - var(--sl)) var(--total), calc(var(--lw) + var(--sl)) var(--total), var(--lw) var(--band), 0 var(--band))";

const BASE_LINK =
  "rounded-lg px-3 py-2 font-semibold transition-colors duration-200";

function isActiveRoute(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item, pathname, mobile = false, onClick }) {
  const active = isActiveRoute(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`${BASE_LINK} ${
        mobile
          ? "block rounded-xl px-4 py-3"
          : "text-white hover:bg-white/10"
      } ${
        active
          ? "bg-button text-primary shadow-sm"
          : "text-white hover:text-button"
      }`}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

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
      >
        {/* Navbar background shape */}
        <div
          className="h-full w-full bg-primary"
          style={{
            clipPath: CLIP,
            backgroundColor: "var(--primary)",
            filter:
              "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.12))",
          }}
        />
      </div>

      {/* Header navigation */}
      <div
        className="
          relative grid h-full
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
          {LINKS.slice(0, 3).map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
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
          {LINKS.slice(3).map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* 360 Degree Campus Tour */}
        <Link
          href={TOUR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            order-first flex h-[var(--band)]
            items-center justify-center
            text-sm font-bold
            transition-colors hover:text-button
            lg:order-none lg:text-base
          "
          aria-label="Explore 360 degree campus tour"
        >
          360°
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
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

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="
            absolute inset-x-2
            top-[calc(var(--total)_+_var(--bover)_+_6px)]
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
              onClick={() => setOpen(false)}
            />
          ))}

          <Link
            href="/applyNow"
            onClick={() => setOpen(false)}
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
      )}
    </header>
  );
}
