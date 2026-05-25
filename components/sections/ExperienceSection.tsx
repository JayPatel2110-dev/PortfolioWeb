"use client";

import Reveal from "@/components/ui/Reveal";

const experience = {
    role: "Associate DevOps Engineer",
    company: "Wonderlend Hubs Pvt. Ltd.",
    duration:
        "Internship: Feb 2025 – Dec 2025 · Full-time Role: Jan 2026 – Present",

    highlights: [
        "Designed and implemented a JIRA-integrated IAM automation system using Python and boto3 for automated AWS user provisioning workflows.",

        "Built secure credential delivery workflows using AWS SES, Slack notifications, enforced password resets, and MFA-ready onboarding.",

        "Supported staging and production deployments across AWS-based microservices while troubleshooting CI/CD failures, IAM permission issues, and infrastructure misconfigurations.",

        "Collaborated with development teams to debug deployment and infrastructure issues, gaining exposure to real-world operational workflows and cloud reliability engineering.",
    ],

    stack: [
        "AWS",
        "IAM",
        "Python",
        "boto3",
        "Terraform",
        "GitLab CI/CD",
        "Linux",
        "JIRA",
    ],

    impact: [
        "Infrastructure automation workflows",
        "Production deployment exposure",
        "Cloud governance & IAM automation",
    ],
};

export default function ExperienceSection() {
    return (
        <Reveal>
            <section
                id="experience"
                className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
            >
                {/* SECTION HEADER */}
                <div className="space-y-4 mb-14">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                        Experience
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Real-World Engineering Work
                    </h2>

                    <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
                        Hands-on experience working with production cloud infrastructure,
                        deployment systems, CI/CD automation, and AWS operational workflows.
                    </p>
                </div>

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden">
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-10 p-8 md:p-10">
                        {/* LEFT */}
                        <div className="space-y-8">
                            {/* HEADER */}
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-semibold">
                                        {experience.role}
                                    </h3>

                                    <p className="text-sky-300 mt-2">
                                        {experience.company}
                                    </p>

                                    <p className="text-sm text-[rgb(var(--muted))] mt-2">
                                        {experience.duration}
                                    </p>
                                </div>
                            </div>

                            {/* HIGHLIGHTS */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Engineering Highlights
                                </h4>

                                <ul className="space-y-4">
                                    {experience.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-[rgb(var(--muted))] leading-relaxed"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 shrink-0" />

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-8">
                            {/* STACK */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Tech Stack
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {experience.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* IMPACT */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Impact
                                </h4>

                                <div className="space-y-3">
                                    {experience.impact.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl border border-sky-400/10 bg-sky-400/5 px-4 py-3 text-sky-300"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}