"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const blogs = [
    {
        title: "From Gaming Curiosity to Cloud and DevOps",

        description:
            "How a simple curiosity about gaming performance, latency, and infrastructure evolved into an interest in cloud systems, deployment engineering, and DevOps.",

        date: "Jan 2026",

        href: "/blogs/from-gaming-curiosity-to-cloud-and-devops",

        tags: [
            "Cloud",
            "DevOps",
            "Infrastructure",
            "Systems Thinking",
        ],
    },
];

const upcomingTopics = [
    "Terraform deployment systems",
    "IAM automation workflows",
    "ECS blue-green deployments",
    "Infrastructure governance",
];

export default function BlogsSection() {
    return (
        <Reveal>
            <section
                id="blogs"
                className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
            >
                {/* SECTION HEADER */}
                <div className="space-y-4 mb-14">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                        Writing
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Writing & Engineering Notes
                    </h2>

                    <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
                        I write about cloud infrastructure, DevOps systems,
                        deployment engineering, and lessons learned while building
                        production-style automation workflows.
                    </p>
                </div>

                {/* BLOG CARDS */}
                <div className="space-y-8">
                    {blogs.map((blog) => (
                        <a
                            key={blog.href}
                            href={blog.href}
                            className="
                block
                rounded-3xl
                border border-white/10
                bg-white/3
                backdrop-blur-sm
                overflow-hidden
                transition-all
                hover:-translate-y-1
                hover:border-sky-400/20
              "
                        >
                            <div className="grid lg:grid-cols-[2fr_1fr] gap-10 p-8 md:p-10">
                                {/* LEFT */}
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-sky-400">
                                                {blog.date}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                                            {blog.title}
                                        </h3>

                                        <p className="text-[rgb(var(--muted))] leading-relaxed text-lg max-w-3xl">
                                            {blog.description}
                                        </p>
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-sky-300">
                                        Read Article
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="space-y-8">
                                    {/* TAGS */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold">
                                            Topics
                                        </h4>

                                        <div className="flex flex-wrap gap-3">
                                            {blog.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* STATUS */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold">
                                            Writing Focus
                                        </h4>

                                        <div className="rounded-xl border border-sky-400/10 bg-sky-400/5 px-4 py-4 text-sky-300">
                                            Building long-form engineering case studies
                                            focused on cloud infrastructure and DevOps workflows.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* UPCOMING TOPICS */}
                <div className="mt-14 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm p-8 md:p-10">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                                Upcoming
                            </p>

                            <h3 className="text-2xl md:text-3xl font-semibold">
                                More Engineering Writing Coming Soon
                            </h3>
                        </div>

                        <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
                            I’m currently working on deeper technical write-ups
                            around infrastructure automation, deployment systems,
                            AWS governance tooling, and scalable CI/CD workflows.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {upcomingTopics.map((topic) => (
                                <span
                                    key={topic}
                                    className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}