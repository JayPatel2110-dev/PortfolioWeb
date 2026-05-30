"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Automated Blue-Green Deployment Platform",
    description:
      "Designed and implemented a production-style blue-green deployment platform on AWS ECS Fargate using Terraform, GitLab CI/CD, and ALB-based traffic switching.",

    highlights: [
      "Achieved near zero-downtime deployments",
      "Implemented instant rollback using ALB listener switching",
      "Built JSON-driven Terraform infrastructure",
      "Validated autoscaling and deployment stability",
    ],

    stack: [
      "AWS ECS",
      "Terraform",
      "GitLab CI/CD",
      "ALB",
      "Docker",
      "CloudWatch",
    ],

    metrics: [
      "< 1s deployment cutover",
      "< 2s rollback time",
      "Zero Terraform drift",
    ],

    repo: "https://github.com/JayPatel2110-dev/blue-green-deployment",

    caseStudy: "/projects/ecs-blue-green",
  },

  {
    title: "DocVault — Secure Document Management Platform",

    description:
      "Built a cloud-native document management platform with secure uploads, automated workflows, and AWS-integrated backend services focused on reliability and scalability.",
    caseStudy: "/projects/docvault",
    highlights: [
      "Implemented secure document upload workflows",
      "Integrated AWS cloud storage and APIs",
      "Designed scalable backend architecture",
      "Focused on operational reliability and security",
    ],

    stack: [
      "AWS",
      "Lambda",
      "API Gateway",
      "S3",
      "React",
      "Node.js",
    ],

    metrics: [
      "Serverless backend architecture",
      "Automated processing workflows",
      "Cloud-native document handling",
    ],

    repo:
      "https://gitlab.com/jaypatel2110-dev-group/docvault/-/tree/develop?ref_type=heads",
  },

  {
    title: "Resurge Net — Predictive Infrastructure Scaling",

    description:
      "Developed an intelligent cloud scaling and infrastructure optimization platform using predictive analytics, workload forecasting, and automated scaling strategies.",

    highlights: [
      "Built predictive infrastructure scaling workflows",
      "Implemented workload demand forecasting logic",
      "Focused on SLA-aware autoscaling decisions",
      "Designed cloud-native monitoring and optimization architecture",
    ],

    stack: [
      "Python",
      "Machine Learning",
      "AWS",
      "Docker",
      "Cloud Monitoring",
      "Predictive Scaling",
      "Data Analysis",
      "Infrastructure Automation",
    ],

    metrics: [
      "Predictive autoscaling workflows",
      "Cloud cost optimization focus",
      "Infrastructure resilience modeling",
    ],

    repo: "https://github.com/JayPatel2110-dev/resurge-net",

    caseStudy: "/projects/resurge-net",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
    >
      <div className="space-y-4 mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Infrastructure & DevOps Projects
        </h2>

        <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
          Projects focused on cloud infrastructure, deployment automation,
          CI/CD systems, reliability engineering, and scalable AWS
          architectures.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-[2fr_1fr] gap-10 p-8 md:p-10">
              {/* LEFT */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[rgb(var(--muted))] leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">
                    Engineering Highlights
                  </h4>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-[rgb(var(--muted))]"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 shrink-0" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/4 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
                  >
                    Repository
                    <ArrowUpRight size={18} />
                  </a>

                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 transition-all"
                    >
                      Case Study
                      <ArrowUpRight size={18} />
                    </Link>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-8">
                {/* Stack */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">
                    Impact
                  </h4>

                  <div className="space-y-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-xl border border-sky-400/10 bg-sky-400/5 px-4 py-3 text-sky-300"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}