"use client";

import Image from "next/image";
import {
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
} from "lucide-react";

const links = [
    {
        label: "GitHub",
        href: "https://github.com/JayPatel2110-dev",
        icon: Github,
    },

    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/jay-patel2110",
        icon: Linkedin,
    },

    {
        label: "Email",
        href: "mailto:patel2110.jay@gmail.com",
        icon: Mail,
    },
];

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-5 md:px-6 py-12">
                <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden">
                    <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 p-8 md:p-10">
                        {/* LEFT */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/jp-logo.png"
                                    alt="Jay Patel Logo"
                                    width={42}
                                    height={42}
                                    className="rounded-full ring-1 ring-sky-400/20"
                                />

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Jay Patel
                                    </h3>

                                    <p className="text-sm text-[rgb(var(--muted))]">
                                        Associate DevOps Engineer
                                    </p>
                                </div>
                            </div>

                            <p className="max-w-2xl text-[rgb(var(--muted))] leading-relaxed">
                                Built with curiosity, systems thinking, and a strong interest
                                in cloud infrastructure, automation, and scalable engineering
                                systems.
                            </p>

                            {/* QUICK LINKS */}
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "AWS",
                                    "Terraform",
                                    "CI/CD",
                                    "Infrastructure",
                                    "Automation",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="
                      px-4 py-2
                      rounded-full
                      text-sm
                      border border-white/10
                      bg-white/4
                    "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">
                                    Connect
                                </h3>

                                <div className="space-y-3">
                                    {links.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                target={
                                                    item.href.startsWith("http")
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    item.href.startsWith("http")
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                className="
                          flex items-center justify-between
                          rounded-2xl
                          border border-white/10
                          bg-white/3
                          px-5 py-4
                          hover:border-sky-400/20
                          hover:bg-sky-400/5
                          transition-all
                        "
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-sky-400/8 border border-sky-400/10 flex items-center justify-center">
                                                        <Icon className="w-5 h-5 text-sky-300" />
                                                    </div>

                                                    <span>{item.label}</span>
                                                </div>

                                                <ArrowUpRight
                                                    size={18}
                                                    className="text-sky-300"
                                                />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM BAR */}
                    <div className="border-t border-white/5 px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[rgb(var(--muted))]">
                        <p>
                            © {new Date().getFullYear()} Jay Patel. All rights reserved.
                        </p>

                        <p>
                            Designed & built with Next.js, Tailwind CSS, and curiosity.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}