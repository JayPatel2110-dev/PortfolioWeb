import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const metrics = [
  {
    label: "Architecture",
    value: "Serverless",
  },
  {
    label: "Deployment",
    value: "CI/CD",
  },
  {
    label: "Storage",
    value: "AWS S3",
  },
  {
    label: "Infrastructure",
    value: "Terraform",
  },
];

export default function DocVaultPage() {
  return (
    <main className="max-w-5xl mx-auto px-5 md:px-6 py-24">
      <Link
        href="/#projects"
        className="text-sky-400 hover:text-sky-300 transition-colors"
      >
        ← Back to portfolio
      </Link>

      <div className="mt-10 space-y-16">
        {/* HERO */}
        <section className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-sm text-sky-400">
            AWS • Serverless • Terraform • CI/CD
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            DocVault — Secure Document Management Platform
          </h1>

          <p className="text-xl text-[rgb(var(--muted))] leading-relaxed max-w-3xl">
            Cloud-native document management platform designed to explore
            secure access control, serverless infrastructure,
            and automated deployment workflows on AWS.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://gitlab.com/jaypatel2110-dev-group/docvault/-/tree/develop?ref_type=heads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/4 hover:border-sky-400/40 hover:bg-sky-400/10 transition-all"
            >
              Repository
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* METRICS */}
        <section className="grid md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/3 p-6"
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

        {/* OVERVIEW */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Overview
          </h2>

          <div className="space-y-4 text-[rgb(var(--muted))] leading-relaxed">
            <p>
              DocVault was built to explore how authentication,
              authorization, backend APIs, and cloud infrastructure
              work together in a real-world system.
            </p>

            <p>
              The platform uses a fully serverless architecture
              deployed and managed through Terraform and GitLab CI/CD.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Architecture & Design Decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Serverless Backend",
                desc: "Backend APIs were implemented using AWS Lambda and API Gateway to reduce infrastructure management overhead.",
              },
              {
                title: "Secure File Uploads",
                desc: "Presigned S3 URLs enabled direct secure uploads without exposing AWS credentials.",
              },
              {
                title: "Infrastructure as Code",
                desc: "Terraform was used to provision and manage AWS infrastructure declaratively.",
              },
              {
                title: "Automated Deployments",
                desc: "GitLab CI/CD pipelines automated infrastructure provisioning and frontend deployment workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/3 p-6"
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

        {/* PROJECT STRUCTURE */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Project Structure
          </h2>

          <div className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
            <pre className="p-6 text-sm overflow-x-auto text-slate-300">
              {`frontend/
  └── public/
      ├── index.html
      ├── register.html
      ├── dashboard.html
      └── style.css

lambda/
  ├── index.js
  └── package.json

terraform/
  ├── main.tf
  ├── variables.tf
  ├── outputs.tf
  └── backend.tf

.gitlab-ci.yml`}
            </pre>
          </div>
        </section>

        {/* STACK */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "AWS Lambda",
              "API Gateway",
              "Terraform",
              "GitLab CI/CD",
              "Amazon S3",
              "DynamoDB",
              "Node.js",
              "React",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/4 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Key Learnings
          </h2>

          <div className="space-y-3">
            {[
              "Authentication and authorization design patterns",
              "Secure file uploads using presigned URLs",
              "Terraform-driven infrastructure workflows",
              "CI/CD-based deployment automation",
              "Trade-offs of serverless architectures",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-sky-400/10 bg-sky-400/5 px-5 py-4 text-sky-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FUTURE WORK */}
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">
            Future Improvements
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Password recovery workflows",
              "Multi-user document sharing",
              "Improved file previews",
              "Expanded CI/CD testing stages",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/3 p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}