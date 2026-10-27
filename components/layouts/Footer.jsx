import Link from "next/link";
import Image from "next/image";
import Button from "@/components/comman/Button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const TOUR_URL = "https://tour.princeeduhub.com/princt34/old-campus/";
const LOGO_SRC = "/images/prince-academy-logo.png";
const CURRENT_YEAR = 2026;

/*
  Dark navy logo ko dark footer par visible banane ke liye:
  1) 4 chhote white drop-shadows = clean white "sticker" outline
  2) uske baad ek bada soft dark shadow = depth / floating effect
*/
const LOGO_FILTER = [
  "drop-shadow(1px 0 0 rgba(255,255,255,0.65))",
  "drop-shadow(-1px 0 0 rgba(255,255,255,0.65))",
  "drop-shadow(0 1px 0 rgba(255,255,255,0.65))",
  "drop-shadow(0 -1px 0 rgba(255,255,255,0.65))",
  "drop-shadow(0 10px 20px rgba(0,0,0,0.55))",
  "drop-shadow(0 0 18px rgba(255,255,255,0.12))",
].join(" ");

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Institute", href: "/about-institute" },
  { label: "Admissions 2026-27", href: "/applyNow" },
  { label: "Academic Results", href: "/results" },
  { label: "Campus Facilities", href: "/facilities" },
  { label: "National Achievers", href: "/achievers" },
  { label: "360° Virtual Tour", href: TOUR_URL, external: true },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/PrinceEduhubSikar/",
    icon: <FaFacebookF className="h-4 w-4" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/princeeduhub",
    icon: <FaTwitter className="h-4 w-4" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/princeeduhub/",
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@PrinceEduhub",
    icon: <FaYoutube className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/princeeduhub",
    icon: <FaLinkedinIn className="h-4 w-4" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/princeeduhub",
    icon: <FaTelegramPlane className="h-4 w-4" />,
  },
];

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full overflow-hidden bg-[#0a1622] text-white selection:bg-button selection:text-primary"
    >
      {/* Top subtle golden & steel-blue ambient light source */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 h-80 w-80 rounded-full bg-button/10 blur-[130px]"
      />

      {/* Main Footer Links Grid */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand, Bio & Apply Now */}
          <div className="lg:col-span-5">
            <div className="flex  items-center justify-between gap-5">
              {/* Tagline (above) + Logo */}
              <div className="flex flex-col items-start">
                

                {/* Logo with glow + sticker outline + shadow */}
                <Link
                  href="/"
                  aria-label="Prince Academy Home"
                  className="group relative inline-block transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={LOGO_SRC}
                    alt="Prince Academy Logo"
                    width={240}
                    height={106}
                    priority
                    className="relative h-20 w-auto object-contain sm:h-24"
                    style={{ filter: LOGO_FILTER }}
                  />
                </Link>
              </div>

              <Button href="/applyNow" variant="primary" size="md" className="shrink-0">
                Apply Now
              </Button>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-slate-300">
              Prince Academy Sikar is Rajasthan&apos;s apex CBSE institution. A lush 25-bigha campus blending state-of-the-art smart education, rigorous competitive mentoring (JEE, NEET, NDA), and Olympic-standard sports.
            </p>

            {/* CBSE Accreditation Pill */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs text-slate-300">
              <span className="font-bold text-button">CBSE Affiliation No: 1730414</span>
              <p className="mt-0.5 text-slate-400">English Medium Co-educational Day Boarding &amp; Residential School</p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-button hover:bg-button/20 hover:text-button"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-button">
              Explore &amp; Links
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-button"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-500 transition-all duration-200 group-hover:w-2.5 group-hover:bg-button" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Campus Info */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-button">
              Campus &amp; Helpline
            </h4>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-button"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">
                  Palwas Road, Sikar (Rajasthan) - 332001
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-button"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <Link href="tel:9610892222" className="transition-colors hover:text-button">
                    +91 9610 89 2222
                  </Link>
                  <Link href="tel:9610992222" className="transition-colors hover:text-button">
                    +91 9610 99 2222
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-button"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link
                  href="mailto:princeacademysikar@gmail.com"
                  className="break-all transition-colors hover:text-button"
                >
                  princeacademysikar@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassy Big "PRINCE" Wordmark Container */}
      <div className="relative w-full overflow-hidden border-t border-white/10 bg-white/[0.02] pt-4 pb-2 backdrop-blur-xl">
        {/* Ambient backlight glow directly behind letters */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-3/4 rounded-full bg-gradient-to-r from-secondary/25 via-button/20 to-secondary/25 blur-3xl opacity-50"
        />

        {/* Big Glassy "PRINCE" */}
        <div className="relative mx-auto flex w-full select-none items-center justify-center px-4">
          <span
            className="
              bg-gradient-to-b from-white/35 via-white/15 to-white/[0.02]
              bg-clip-text text-transparent
              font-black uppercase tracking-[0.08em] sm:tracking-[0.14em]
              text-[20vw] sm:text-[15vw] lg:text-[13vw]
              leading-none
              drop-shadow-[0_2px_18px_rgba(255,255,255,0.12)]
              transition-all duration-500
              hover:drop-shadow-[0_4px_28px_rgba(255,255,255,0.22)]
            "
          >
            PRINCE
          </span>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-white/10 bg-[#070f17] px-6 py-5 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>
            &copy; {currentYear} <span className="font-semibold text-slate-200">Prince Academy, Sikar</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/about-institute" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/applyNow" className="transition-colors hover:text-white">
              Term &amp; Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
