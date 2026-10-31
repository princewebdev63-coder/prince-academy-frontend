import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogs as defaultBlogs } from "@/data/blog";

/**
 * Normal Blog Cards Section.
 * Clean, lightweight, and modern responsive cards without animations or scroll trapping.
 */
export default function BlogScrollTunnel({
  posts = defaultBlogs,
  title = "Latest from our blog",
  viewAllHref = "/blog",
}) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      aria-label={title}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F2F7FE] via-[#FFFFFF] to-[#EAF2FC] py-14 sm:py-16 md:py-20 text-slate-900"
    >
      {/* Top Hairline Light Divider */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"
      />

      {/* Subtle Dotted Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(rgba(4,58,128,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(80%_80%_at_50%_40%,#000,transparent)]"
      />

      {/* Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-amber-300/15 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            

            <h2 className="mt-2 text-2xl font-black sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-[#043A80] via-[#0A66C2] to-[#2563EB] bg-clip-text text-transparent">
                {title}
              </span>{" "}
              <span className="text-[#04285E]">
                & Insights
              </span>
            </h2>

            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Explore recent events, academic strategies, board exam preparation tips, and life at Prince Academy.
            </p>
          </div>

          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-blue-900/10 bg-[#043A80] px-5 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-blue-900/15 transition-colors duration-200 hover:bg-[#032A5E] cursor-pointer shrink-0"
          >
            <span>View all posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Normal Responsive Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
