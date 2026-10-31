import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Home,
  Sparkles,
  Share2,
  BookOpen,
} from "lucide-react";
import { blogs, getPostBySlug, getAllPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog Post Not Found | Prince Academy" };

  return {
    title: `${post.title} | Prince Academy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F2F7FE] via-[#E8F2FC] to-[#F2F7FE] text-slate-900">
      {/* Top Breadcrumb Navigation */}
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
              <Link
                href="/blog"
                className="text-slate-600 transition-colors hover:text-[#043A80]"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="max-w-[200px] truncate font-bold text-[#043A80] sm:max-w-xs">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#043A80] transition-colors hover:text-[#032A5E]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All Articles</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Header Metadata */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 bg-amber-50/90 px-3.5 py-1 text-xs font-black tracking-widest text-amber-800 uppercase shadow-xs">
            <Sparkles className="h-3 w-3 text-amber-500" />
            {post.category}
          </span>

          <h1 className="mt-4 text-2xl font-black tracking-tight text-[#043A80] sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#043A80] text-xs font-bold text-white">
                {post.author.charAt(0).toUpperCase()}
              </span>
              <span className="text-slate-700 font-bold">{post.author}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <Calendar size={15} className="text-[#043A80]" />
              {formatDate(post.date)}
            </span>

            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <Clock size={15} className="text-[#043A80]" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mt-8 aspect-16/10 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-blue-900/10 shadow-xl bg-slate-900 sm:mt-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="mt-10 rounded-3xl border border-blue-900/10 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          {/* Excerpt Lead */}
          <p className="border-l-4 border-amber-400 pl-4 text-base font-semibold italic leading-relaxed text-[#043A80] sm:text-lg">
            {post.excerpt}
          </p>

          {/* Paragraphs */}
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-8">
            {post.content ? (
              post.content.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>

          {/* Social / Share Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category:
              </span>
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#043A80]">
                {post.category}
              </span>
            </div>

            <Link
              href="/applyNow"
              className="inline-flex items-center gap-2 rounded-full bg-[#043A80] px-5 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#032A5E]"
            >
              <span>Enquire for Admissions</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 sm:mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-black text-[#043A80] sm:text-2xl">
                Related Articles
              </h2>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#043A80] hover:underline sm:text-sm"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}

