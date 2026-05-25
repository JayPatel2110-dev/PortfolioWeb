import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stack = [
    "Python",
    "Machine Learning",
    "AWS",
    "Docker",
    "Predictive Scaling",
    "Cloud Monitoring",
    "Infrastructure Automation",
    "Data Analysis",
];

const highlights = [
    "Designed predictive infrastructure scaling workflows",
    "Implemented workload forecasting logic",
    "Focused on SLA-aware autoscaling decisions",
    "Built cloud-native optimization architecture",
];

const learnings = [
    "Predictive infrastructure engineering",
    "Cloud resource optimization trade-offs",
    "Infrastructure reliability modeling",
    "Operational scaling strategy design",
];

export default function ResurgeNetPage() {
    return (
        <main className="max-w-6xl mx-auto px-5 md:px-6 py-24">
            {/* Back */}
            <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
                ← Back to Projects
            </Link>

            <div className="mt-10 space-y-20">
                {/* HERO */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                            Case Study
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Resurge Net
                        </h1>

                        <p className="max-w-3xl text-xl text-[rgb(var(--muted))] leading-relaxed">
                            Predictive infrastructure scaling and cloud optimization
                            platform focused on intelligent autoscaling,
                            workload forecasting, and infrastructure resilience.
                        </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            "Predictive Scaling",
                            "Cloud Optimization",
                            "Infrastructure Resilience",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-white/3 p-5"
                            >
                                <p className="text-sky-300 font-medium">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="space-y-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Overview
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Intelligent Cloud Scaling & Optimization
                        </h2>
                    </div>

                    <div className="space-y-5 text-[rgb(var(--muted))] leading-relaxed max-w-4xl">
                        <p>
                            Resurge Net was designed to explore how predictive analytics
                            and workload forecasting can improve infrastructure
                            scalability, operational efficiency, and cloud cost optimization.
                        </p>

                        <p>
                            The system focuses on proactive scaling strategies instead of
                            purely reactive autoscaling by modeling workload behavior
                            and infrastructure demand patterns.
                        </p>
                    </div>
                </section>

                {/* ENGINEERING HIGHLIGHTS */}
                <section className="space-y-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Engineering
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Key Engineering Highlights
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {highlights.map((highlight) => (
                            <div
                                key={highlight}
                                className="rounded-2xl border border-white/10 bg-white/3 p-6"
                            >
                                <div className="flex gap-3">
                                    <div className="h-2 w-2 rounded-full bg-sky-400 mt-2 shrink-0" />

                                    <p className="text-[rgb(var(--muted))] leading-relaxed">
                                        {highlight}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ARCHITECTURE */}
                <section className="space-y-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Architecture
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Predictive Scaling Workflow
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/3 p-8 overflow-x-auto">
                        <pre className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {`Infrastructure Metrics
            ↓
     Monitoring Pipeline
            ↓
    Workload Analysis Layer
            ↓
 Predictive Scaling Engine
            ↓
 Resource Optimization Logic
            ↓
 Automated Scaling Decisions`}
                        </pre>
                    </div>

                    <p className="max-w-4xl text-[rgb(var(--muted))] leading-relaxed">
                        The platform focuses on identifying workload trends and
                        proactively adjusting infrastructure capacity to improve
                        reliability while optimizing cloud resource utilization.
                    </p>
                </section>

                {/* STACK */}
                <section className="space-y-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Stack
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Technologies Used
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/3"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* LEARNINGS */}
                <section className="space-y-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Learnings
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            What I Learned
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {learnings.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-white/3 p-6"
                            >
                                <p className="text-[rgb(var(--muted))] leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FUTURE WORK */}
                <section className="space-y-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
                            Future Work
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Planned Improvements
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            "Advanced ML-based forecasting",
                            "Real-time adaptive autoscaling",
                            "Multi-cloud optimization support",
                            "Anomaly-aware scaling decisions",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-white/3 p-6"
                            >
                                <p className="text-[rgb(var(--muted))]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LINKS */}
                <section className="flex flex-wrap gap-4 pt-4">
                    <a
                        href="https://github.com/JayPatel2110-dev/resurge-net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/4 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                    >
                        Repository
                        <ArrowUpRight size={18} />
                    </a>

                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sky-400/20 bg-sky-400/5 text-sky-300 hover:bg-sky-400/10 transition-all"
                    >
                        Back to Projects
                    </Link>
                </section>
            </div>
        </main>
    );
}