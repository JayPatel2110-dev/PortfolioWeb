"use client";

import Link from "next/link";
import {
    CalendarDays,
    Clock3,
    ArrowLeft,
} from "lucide-react";

const tags = [
    "Cloud",
    "DevOps",
    "Systems Thinking",
    "Infrastructure",
    "Engineering",
];

export default function BlogPage() {
    return (
        <main className="max-w-5xl mx-auto px-5 md:px-6 py-24">
            {/* Back */}
            <Link
                href="/#blogs"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
                <ArrowLeft size={18} />
                Back to Blogs
            </Link>

            <article className="mt-10 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16">
                    {/* HEADER */}
                    <header className="space-y-8 mb-20">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                                Engineering Notes
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                From Gaming Curiosity to Cloud and DevOps
                            </h1>

                            <p className="text-xl text-[rgb(var(--muted))] leading-relaxed max-w-3xl">
                                How a simple question about gaming performance and
                                latency slowly shaped my interest in cloud systems,
                                infrastructure engineering, and DevOps.
                            </p>
                        </div>

                        {/* META */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-[rgb(var(--muted))]">
                            <div className="flex items-center gap-2">
                                <CalendarDays size={16} />
                                January 2026
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock3 size={16} />
                                5 min read
                            </div>
                        </div>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    border border-white/10
                    bg-white/4
                  "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* ARTICLE CONTENT */}
                    <div className="max-w-none">
                        <div className="space-y-4 text-[17px] md:text-[18px] leading-loose tracking-[0.01em] text-[rgb(var(--muted))]">
                            <p className="text-justify hyphens-auto">
                                I have always enjoyed playing games. Growing up, however,
                                I never had a system powerful enough to run high-end titles
                                like GTA V. At the time, I wanted to experience those games
                                badly, but hardware limitations made it impossible.
                            </p>

                            <p className="text-justify hyphens-auto">
                                That curiosity eventually led me to explore cloud gaming.
                                The idea itself felt exciting — powerful hardware somewhere
                                else, streamed directly to my screen. But the experience
                                was far from perfect. There were long waiting times,
                                noticeable lag, and inconsistent performance.
                            </p>

                            <p className="text-justify hyphens-auto">
                                Instead of accepting it as a limitation, I found myself
                                asking a simple question:
                            </p>

                            <blockquote className="border-l-2 border-sky-400 pl-6 italic text-white my-8 text-xl">
                                Why does this happen?
                            </blockquote>

                            <p className="text-justify hyphens-auto">
                                While researching cloud gaming performance, I encountered
                                one of the most fundamental ideas in distributed systems:
                                latency.
                            </p>

                            <p className="text-justify hyphens-auto">
                                Concepts like network distance, congestion, shared
                                infrastructure, and resource contention helped explain why
                                performance could vary so drastically. What fascinated me
                                most was realizing that performance problems were often the
                                result of system-level trade-offs rather than isolated bugs.
                            </p>

                            <p className="text-justify hyphens-auto">
                                The deeper I explored, the more curious I became about how
                                large-scale systems are designed, deployed, and optimized.
                                What started as a gaming problem slowly evolved into an
                                interest in cloud architecture, infrastructure reliability,
                                and performance engineering.
                            </p>
                        </div>

                        {/* SECTION */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Discovering DevOps
                            </h2>

                            <div className="space-y-4 text-[17px] md:text-[18px] leading-loose tracking-[0.01em] text-[rgb(var(--muted))]">
                                <p className="text-justify hyphens-auto">
                                    Later, while searching for internship opportunities,
                                    I was introduced to DevOps. Learning about DevOps changed
                                    how I viewed software systems entirely.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    It wasn’t just about automation tools or deployment
                                    pipelines. It was about ownership, reliability, operational
                                    thinking, and understanding how changes impact real systems
                                    in production environments.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    With nearly a year of hands-on experience working in
                                    production environments, my understanding of DevOps has
                                    matured significantly. Real systems teach lessons that
                                    tutorials and certifications simply cannot.
                                </p>
                            </div>
                        </div>

                        {/* SECTION */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Systems Thinking
                            </h2>

                            <div className="space-y-4 text-[17px] md:text-[18px] leading-loose tracking-[0.01em] text-[rgb(var(--muted))]">
                                <p className="text-justify hyphens-auto">
                                    Alongside cloud engineering, my ICT background exposed me
                                    to operating systems, networking, and digital logic.
                                    Designing a CPU in Logisim was especially eye-opening
                                    because it demonstrated how software behavior ultimately
                                    emerges from low-level hardware decisions.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    That systems perspective now shapes how I think about
                                    cloud infrastructure, automation, scalability, and
                                    reliability engineering.
                                </p>
                            </div>
                        </div>

                        {/* SECTION */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Looking Back
                            </h2>

                            <div className="space-y-4 text-[17px] md:text-[18px] leading-loose tracking-[0.01em] text-[rgb(var(--muted))]">
                                <p className="text-justify hyphens-auto">
                                    Looking back, it’s interesting how a simple desire to play
                                    a game led me toward cloud computing and DevOps.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    What started as frustration with performance slowly became
                                    curiosity — and that curiosity eventually shaped my career
                                    direction.
                                </p>

                                <p className="text-justify hyphens-auto">
                                    I’m still learning every day, but one thing has remained
                                    constant:
                                </p>

                                <blockquote className="border-l-2 border-sky-400 pl-6 italic text-white my-8 text-xl">
                                    Keep asking why.
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-24 pt-10 border-t border-white/5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                                    More Writing Coming Soon
                                </p>

                                <p className="text-[rgb(var(--muted))] max-w-2xl leading-relaxed">
                                    Upcoming articles will focus on Terraform deployment
                                    systems, AWS automation tooling, ECS blue-green
                                    deployments, and infrastructure reliability engineering.
                                </p>
                            </div>

                            <Link
                                href="/#blogs"
                                className="
                  inline-flex items-center justify-center
                  px-6 py-3
                  rounded-xl
                  border border-white/10
                  bg-white/4
                  hover:border-sky-400/20
                  hover:bg-sky-400/5
                  transition-all
                "
                            >
                                Back to Blogs
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}