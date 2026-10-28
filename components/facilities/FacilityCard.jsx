
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FacilityCard({
  facility,
  className = "",
}) {
  const Icon = facility.icon;

  return (
    <article
      className={`facility-card relative h-[390px] w-[280px] shrink-0 overflow-hidden rounded-[20px] border border-white bg-[#DCE5EF] shadow-[0_12px_30px_rgba(23,43,64,0.12)] sm:h-[420px] sm:w-[310px] ${className}`}
    >
      <Image
        src={facility.image}
        alt={facility.alt || facility.title}
        fill
        sizes="(max-width: 639px) 78vw, 310px"
        className="object-cover"
      />

      {/* Static image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10243A]/40 via-transparent to-[#0e1e30]/95" />

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

          <Link
            href={facility.href || "/facilities"}
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#F5C66B] px-4 text-xs font-extrabold text-[#172B40] shadow-md transition-colors hover:bg-amber-300"
          >
            Learn More
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
