import Link from "next/link";

const metrics = [
    {
        label: "Deployment Downtime",
        value: "< 1s",
    },
    {
        label: "Rollback Time",
        value: "< 2s",
    },
    {
        label: "Terraform Drift",
        value: "0 changes",
    },
    {
        label: "Deployment Strategy",
        value: "Blue-Green",
    },
];

export default function ECSBlueGreenCaseStudy() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-20">
            <Link
                href="/"
                className="text-sky-400 hover:text-sky-300 transition-colors"
            >
                ← Back to portfolio
            </Link>

            <div className="mt-10 space-y-16">
                {/* Hero */}
                <section className="space-y-6">
                    <p className="uppercase tracking-[0.3em] text-sm text-sky-400">
                        AWS • Terraform • ECS • CI/CD
                    </p>

                    <h1 className="text-5xl font-bold leading-tight">
                        Automated Blue-Green Deployment Platform on AWS ECS
                    </h1>

                    <p className="text-xl text-[rgb(var(--muted))] leading-relaxed max-w-3xl">
                        Designed and implemented a production-style deployment platform
                        using AWS ECS Fargate, Terraform, GitLab CI/CD, and
                        Application Load Balancers to achieve zero-downtime releases
                        with instant rollback capability.
                    </p>
                </section>

                {/* Metrics */}
                <section className="grid md:grid-cols-4 gap-4">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <p className="text-3xl font-bold text-sky-400">
                                {metric.value}
                            </p>

                            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Problem */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        The Problem
                    </h2>

                    <div className="space-y-4 text-[rgb(var(--muted))] leading-relaxed">
                        <p>
                            Traditional rolling deployments temporarily reduce service
                            availability and complicate rollback procedures.
                        </p>

                        <p>
                            Most Terraform implementations also tightly couple service
                            configuration with infrastructure code, making onboarding
                            slower and increasing operational complexity.
                        </p>

                        <p>
                            I wanted to build a deployment system that could:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Achieve near zero-downtime deployments</li>
                            <li>Enable instant rollback</li>
                            <li>Scale across multiple services</li>
                            <li>Avoid Terraform code changes for new services</li>
                            <li>Support production-style CI/CD workflows</li>
                        </ul>
                    </div>
                </section>

                {/* Architecture */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Architecture
                    </h2>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 overflow-x-auto">
                        <pre className="text-sm leading-relaxed">
                            {`GitLab CI/CD
      ↓
Terraform Apply
      ↓
AWS ECS Fargate
      ↓
Blue ECS Service ─────┐
                      │
                      ├── Application Load Balancer
                      │
Green ECS Service ────┘
      ↓
Traffic Switching via ALB Listener Updates`}
                        </pre>
                    </div>

                    <p className="text-[rgb(var(--muted))] leading-relaxed">
                        Both blue and green environments run simultaneously.
                        Traffic switching occurs by modifying ALB listener rules,
                        enabling near-instant cutovers and rollbacks.
                    </p>
                </section>

                {/* Key Engineering Decisions */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Key Engineering Decisions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            {
                                title: "JSON-Driven Infrastructure",
                                desc: "Terraform dynamically reads service definitions from JSON files using fileset() and jsondecode(), enabling zero-code onboarding of new services.",
                            },
                            {
                                title: "Stable Terraform Graph",
                                desc: "Autoscaling resources use color-stable keys to avoid unintended Terraform recreations during traffic switches.",
                            },
                            {
                                title: "Native S3 State Locking",
                                desc: "Terraform 1.10 S3 native locking removed DynamoDB dependencies and simplified infrastructure bootstrapping.",
                            },
                            {
                                title: "ALB-Based Traffic Switching",
                                desc: "Traffic cutover is handled using AWS CLI listener updates triggered from Terraform null_resource provisioners.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-[rgb(var(--muted))] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CI/CD */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        CI/CD Automation
                    </h2>

                    <div className="space-y-4 text-[rgb(var(--muted))] leading-relaxed">
                        <p>
                            The deployment pipeline was implemented using GitLab CI/CD
                            with dynamic child pipelines and Python automation scripts.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Automatic ECR repository provisioning</li>
                            <li>Configuration synchronization before Terraform apply</li>
                            <li>Dynamic child pipeline generation</li>
                            <li>Per-service deployment isolation</li>
                            <li>Automated traffic switching workflows</li>
                        </ul>
                    </div>
                </section>

                {/* Validation */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Validation & Results
                    </h2>

                    <div className="space-y-4 text-[rgb(var(--muted))] leading-relaxed">
                        <p>
                            Multiple deployment cycles were tested successfully,
                            including production cutovers and rollback scenarios.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Traffic cutover completed in under one second</li>
                            <li>Rollback completed in under two seconds</li>
                            <li>Terraform re-applies produced zero infrastructure drift</li>
                            <li>CPU-based autoscaling validated under synthetic load</li>
                            <li>CloudWatch logging verified across deployment cycles</li>
                        </ul>
                    </div>
                </section>

                {/* Stack */}
                <section className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "AWS ECS",
                            "AWS ALB",
                            "Terraform",
                            "GitLab CI/CD",
                            "AWS ECR",
                            "CloudWatch",
                            "Python",
                            "Docker",
                            "AWS CLI",
                            "Fargate",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}