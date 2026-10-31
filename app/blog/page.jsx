"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, Home, ArrowLeft, BookOpen } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blog";

const CATEGORIES = [
  "All",
  "Events",
  "Admissions",
  "Academics",
  "Campus life",
  "Parenting",
];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogs;
    return blogs.filter(
      (post) =>
        post.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] text-slate-900">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-blue-900/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-slate-600 transition-colors hover:text-[#043A80]"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="font-bold text-[#043A80]">Blog & News</span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#043A80] transition-colors hover:text-[#032A5E]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-1.5 text-xs font-black tracking-widest text-amber-800 uppercase shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>PRINCE ACADEMY ARTICLES & UPDATES</span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#043A80] sm:text-4xl lg:text-5xl">
            Latest News & Insights
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs font-medium leading-relaxed text-slate-600 sm:text-base">
            Explore academic guidance, campus highlights, event recaps, and parenting advice from the faculty and leadership of Prince Academy, Sikar.
          </p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-[#043A80] text-white shadow-md shadow-blue-900/20 ring-2 ring-amber-400"
                      : "border border-blue-900/10 bg-white/90 text-slate-700 hover:border-[#043A80]/40 hover:bg-white"
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-[#043A80]">{filteredPosts.length}</span> published articles
          </div>
        </div>

        {/* Posts Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <BlogCard
              key={post.slug}
              post={post}
              featured={idx === 0 && activeCategory === "All"}
              className="h-full"
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="my-16 flex flex-col items-center justify-center text-center">
            <BookOpen className="h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-700">No articles found</h3>
            <p className="mt-1 text-sm text-slate-500">
              There are currently no articles in the &quot;{activeCategory}&quot; category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

