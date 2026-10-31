import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * Editorial Blog Card (Clean Image-less & Animation-free Design)
 */
export default function BlogCard({ post, className = "" }) {
  const {
    slug,
    title,
    excerpt,
    category,
    date,
    readTime,
    author = "Admin",
  } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(4,58,128,0.05)] transition-colors duration-200 hover:border-blue-300/80 hover:shadow-[0_8px_30px_rgba(4,58,128,0.10)] cursor-pointer ${className}`}
    >
      {/* Subtle light gold glow at bottom-right of the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-tl from-amber-300/30 via-amber-200/15 to-transparent blur-xl"
      />

      {/* Top Meta Header: Category Pill & Read Time / Date */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
        {category && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-900/10 bg-blue-50/90 px-3 py-1 text-[10px] sm:text-[11px] font-black tracking-wider text-[#043A80] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {category}
          </span>
        )}

        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          {readTime && (
            <span className="inline-flex items-center gap-1 font-medium">
              <Clock size={11} className="text-amber-500" />
              {readTime}
            </span>
          )}
          <span className="inline-flex items-center gap-1 font-semibold text-[#043A80]">
            <Calendar size={11} className="text-amber-500" />
            {formatDate(date)}
          </span>
        </div>
      </div>

      {/* Text Body */}
      <div className="flex flex-1 flex-col gap-2.5 py-4">
        <h3 className="line-clamp-2 text-base sm:text-lg font-black leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#043A80]">
          {title}
        </h3>

        <p className="line-clamp-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
          {excerpt}
        </p>
      </div>

      {/* Author & Action Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3.5">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-gradient-to-tr from-[#043A80] to-[#0A66C2] text-[11px] sm:text-xs font-black text-white shadow-xs">
            {author.charAt(0).toUpperCase()}
          </span>
          <span className="text-xs font-bold text-slate-800">
            {author}
          </span>
        </div>

        {/* Action Arrow */}
        <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#043A80] font-black shadow-md shadow-amber-500/20">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
