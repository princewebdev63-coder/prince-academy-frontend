"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

/**
 * Extracts clean 11-character YouTube video ID from any format:
 * - YouTube Shorts: https://www.youtube.com/shorts/fXqIgnXLzgI
 * - Standard Watch URL: https://www.youtube.com/watch?v=fXqIgnXLzgI
 * - Shortened URL: https://youtu.be/fXqIgnXLzgI
 * - Embed URL: https://www.youtube.com/embed/fXqIgnXLzgI
 * - Raw Video ID: fXqIgnXLzgI
 */
function getYouTubeVideoId(input) {
    if (!input) return "";
    const str = String(input).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;

    const shortsMatch = str.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];

    const youtuBeMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (youtuBeMatch) return youtuBeMatch[1];

    const watchMatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch) return watchMatch[1];

    const embedMatch = str.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];

    return str;
}

const videos = [
    {
        id: "hostel-night-vibes",
        title: "Hostel Night Vibes at PCP Sikar",
        source: "PCP Sikar",
        videoId: "FxLimQMuvGw",
    },
    {
        id: "garba-deepotsav",
        title: "Garba & Deepotsav Celebration",
        source: "PCP Brainy Campus Sikar",
        videoId: "fXqIgnXLzgI",
    },
    {
        id: "aspirants-reaction",
        title: "Reaction of JEE NEET Aspirants",
        source: "PCP Brainy Campus",
        videoId: "MecqyKoLMT8",
    },
    {
        id: "prince-olympiad",
        title: "Prince Olympiad 2026 Phase 2",
        source: "Prince Eduhub Sikar",
        videoId: "egFs4GgXosk",
    },
    {
        id: "radha-rani-bhajan",
        title: "Radha Rani Gori Gori | Celebration",
        source: "Prince Eduhub Sikar",
        videoId: "ZpF1oH4XDo4",
    },
    {
        id: "jagannath-kirtan",
        title: "Jagannath Chakka Naina Kirtan",
        source: "Prince Eduhub Sikar",
        videoId: "VWaUgkexivs",
    },
];

export default function HomeVideos() {
    const sectionRef = useRef(null);
    const videosTrackRef = useRef(null);
    const [activeVideoId, setActiveVideoId] = useState(videos[0].id);
    const [playingVideoId, setPlayingVideoId] = useState(null);

    // Only pause video if user completely scrolls the section out of view (instead of stopping on every micro-scroll)
    useEffect(() => {
        if (!playingVideoId) return;

        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        setPlayingVideoId(null);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [playingVideoId]);

    const openVideo = (video) => {
        const cleanId = getYouTubeVideoId(video.videoId);
        setActiveVideoId(video.id);
        setPlayingVideoId(cleanId ? video.id : null);
    };

    const handlePrev = () => {
        const currentIndex = videos.findIndex((v) => v.id === activeVideoId);
        const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
        const targetVideo = videos[newIndex];
        setActiveVideoId(targetVideo.id);
        if (playingVideoId) {
            setPlayingVideoId(targetVideo.id);
        }
        const track = videosTrackRef.current;
        if (track && track.children[newIndex]) {
            track.children[newIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    };

    const handleNext = () => {
        const currentIndex = videos.findIndex((v) => v.id === activeVideoId);
        const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
        const targetVideo = videos[newIndex];
        setActiveVideoId(targetVideo.id);
        if (playingVideoId) {
            setPlayingVideoId(targetVideo.id);
        }
        const track = videosTrackRef.current;
        if (track && track.children[newIndex]) {
            track.children[newIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-gradient-to-b from-[#04285E] via-[#063C8A] to-[#032352] px-4 py-14 text-white sm:px-8 sm:py-18 lg:px-12 lg:py-20"
            aria-labelledby="home-videos-title"
        >
            {/* Top subtle hairline divider */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Ambient Royal Blue Glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-36 -z-10 h-96 w-96 rounded-full bg-[#1860CE]/30 blur-[130px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-48 -left-28 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[600px] rounded-full bg-[#1E40AF]/25 blur-[140px]"
            />

            <div className="mx-auto max-w-7xl">
                <header className="mx-auto mb-7 max-w-2xl px-1 text-center sm:mb-10 sm:px-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        Academy in action
                    </span>
                    <h2
                        id="home-videos-title"
                        className="mt-3 text-[1.65rem] font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl"
                    >
                        Academy Videos
                    </h2>
                    <p className="mx-auto mt-3 max-w-[34rem] px-2 text-xs leading-5 text-white/80 sm:px-0 sm:text-base sm:leading-6">
                        <span className="sm:hidden">Swipe to explore, tap a panel to play.</span>
                        <span className="hidden sm:inline">
                            Explore life, discipline and celebrations across our campus.
                        </span>
                    </p>
                </header>

                <div className="relative">
                    <div
                        ref={videosTrackRef}
                        className="flex h-[320px] snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2 [&::-webkit-scrollbar]:hidden sm:h-[380px] sm:gap-3 lg:h-[440px] lg:pb-2"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {videos.map((video, index) => {
                            const isActive = activeVideoId === video.id;
                            const isPlaying = playingVideoId === video.id;
                            const cleanVideoId = getYouTubeVideoId(video.videoId);

                            return (
                                <article
                                    key={video.id}
                                    aria-label={`${video.title} by ${video.source}`}
                                    onMouseEnter={() => {
                                        if (!playingVideoId) {
                                            setActiveVideoId(video.id);
                                        }
                                    }}
                                    className={`group relative min-w-0 snap-start overflow-hidden rounded-2xl border transition-[flex-basis,border-color,box-shadow] duration-500 ease-out sm:rounded-3xl ${
                                        isActive
                                            ? "flex-[0_0_75%] border-amber-400 shadow-[0_22px_60px_rgba(2,18,48,0.7)] ring-1 ring-amber-400/50 bg-[#062454] lg:flex-[0_0_calc(54.3478%_-_19.565px)]"
                                            : "flex-[0_0_68%] border-blue-400/25 bg-[#051F48] shadow-[0_12px_36px_rgba(2,18,48,0.4)] hover:border-blue-300/40 lg:flex-[0_0_calc(15.2174%_-_5.478px)]"
                                    }`}
                                >
                                    {isPlaying && cleanVideoId ? (
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${cleanVideoId}?autoplay=1&rel=0${video.startSeconds ? `&start=${video.startSeconds}` : ""}`}
                                            title={video.title}
                                            className="absolute inset-0 h-full w-full bg-black"
                                            loading="eager"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => openVideo(video)}
                                            aria-label={`Play ${video.title} from ${video.source}`}
                                            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#062454] p-3 text-center transition-transform sm:p-5 cursor-pointer"
                                        >
                                            {cleanVideoId && (
                                                <Image
                                                    src={`https://i.ytimg.com/vi/${cleanVideoId}/hqdefault.jpg`}
                                                    alt={video.title}
                                                    fill
                                                    unoptimized
                                                    sizes="(max-width: 640px) 75vw, (max-width: 1280px) 55vw, 600px"
                                                    loading="lazy"
                                                    aria-hidden="true"
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                />
                                            )}
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-gradient-to-b from-[#031B40]/20 via-[#04285E]/50 to-[#021330]/95"
                                            />
                                            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#04285E] shadow-[0_8px_25px_rgba(251,191,36,0.35)] transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                                                <Play size={24} fill="currentColor" />
                                            </span>

                                            <span
                                                className={`relative z-10 min-w-0 ${
                                                    isActive
                                                        ? "w-full"
                                                        : "hidden sm:block sm:[writing-mode:vertical-rl]"
                                                }`}
                                            >
                                                <span className="block truncate text-sm font-bold text-white sm:text-base">
                                                    {video.title}
                                                </span>
                                                {isActive && (
                                                    <span className="mt-1 block text-xs leading-5 text-white/80">
                                                        {video.source} · Click to watch
                                                    </span>
                                                )}
                                            </span>

                                            {!isActive && (
                                                <span className="relative z-10 text-xs font-bold text-white/80">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            )}
                                            {!isActive && (
                                                <span className="sr-only">{video.title}</span>
                                            )}
                                        </button>
                                    )}
                                </article>
                            );
                        })}
                    </div>

                    {/* Left Navigation Button */}
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous video"
                        className="absolute left-1 sm:-left-4 lg:-left-6 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#04285E]/90 text-white shadow-[0_6px_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-white hover:bg-white hover:text-[#04285E] active:scale-95 cursor-pointer"
                    >
                        <ChevronLeft size={22} className="sm:h-6 sm:w-6" aria-hidden="true" />
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next video"
                        className="absolute right-1 sm:-right-4 lg:-right-6 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#04285E]/90 text-white shadow-[0_6px_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-white hover:bg-white hover:text-[#04285E] active:scale-95 cursor-pointer"
                    >
                        <ChevronRight size={22} className="sm:h-6 sm:w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}
