
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/comman/Button";
import { ArrowUpRight } from "lucide-react";

export default function FacilityCard({
  facility,
  className = "",
}) {
  const Icon = facility.icon;

  return (
    <article
      className={`facility-card relative h-[390px] w-[280px] shrink-0 overflow-hidden rounded-[20px] border border-blue-400/30 bg-[#072255] shadow-[0_12px_30px_rgba(7,34,85,0.2)] transition-all duration-300 hover:border-blue-400/80 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] sm:h-[420px] sm:w-[310px] ${className}`}
    >
      <Image
        src={facility.image}
        alt={facility.alt || facility.title}
        fill
        sizes="(max-width: 639px) 78vw, 310px"
        className="object-cover"
      />

      {/* Royal Blue image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D91]/35 via-transparent to-[#072255]/95" />

      {/* Royal sapphire glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-blue-500/30 blur-2xl"
      />

      {/* Card information */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-[26px] [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
          {facility.title}
        </h3>

        <p className="mt-2 min-h-[60px] text-xs font-medium leading-5 text-white/95 [text-shadow:0_1px_6px_rgba(0,0,0,0.85)]">
          {facility.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/25 pt-3">
          <span className="text-[9px] font-bold tracking-wide text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
            EXPLORE FACILITIES
          </span>

          <Button
            href={facility.href || "/facilities"}
            variant="navy"
            size="sm"
            className="rounded-xl font-bold"
          >
            Learn More
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </article>
  );
}
