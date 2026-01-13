import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsSection() {
  return (
    <Reveal>
      <section id="projects" className="py-32 scroll-mt-24">
        <div className="max-w-6xl">

          <div className="mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Systems I’ve Built & Explored
            </h2>
            <p className="text-[rgb(var(--muted))] mt-4 max-w-3xl">
              These projects reflect my interest in cloud systems, automation,
              performance, and how infrastructure behaves under uncertainty,
              scale, and real-world constraints.
            </p>
          </div>

          <div className="space-y-12">

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Resurge-Net — Risk-Aware Cloud Autoscaling
              </h3>

              <p className="text-[rgb(var(--muted))] text-sm mb-4 max-w-4xl">
                A research-oriented cloud autoscaling framework designed to
                proactively scale infrastructure by modeling demand,
                uncertainty, and rare workload spikes rather than reacting
                after SLA violations occur.
              </p>

              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 mb-4">
                <li>• Built deep demand predictors using CNN and LSTM/GRU models</li>
                <li>• Trained on Alibaba Cluster Trace v2018 workload dataset</li>
                <li>• Modeled mean demand, uncertainty, and spike probability</li>
                <li>• Designed tunable risk-based scaling policies</li>
                <li>• Demonstrated improved cost vs reliability trade-offs</li>
              </ul>

              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-sky-400">
                  Python • AWS • Time-Series Forecasting • ML Systems
                </span>
              </div>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                DocVault — Secure Serverless Document Vault
              </h3>

              <p className="text-[rgb(var(--muted))] text-sm mb-4 max-w-4xl">
                A fully serverless document management system built to eliminate
                server maintenance while ensuring secure authentication,
                controlled access, and reproducible infrastructure deployments.
              </p>

              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 mb-4">
                <li>• AWS Lambda, API Gateway, S3, DynamoDB</li>
                <li>• JWT-based authentication and authorization</li>
                <li>• Presigned S3 uploads and secure file access</li>
                <li>• Terraform-managed infrastructure</li>
                <li>• GitLab CI/CD for Lambda, frontend, and IaC deployment</li>
              </ul>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/projects/docvault" className="text-sky-400">
                  Read full case study →
                </Link>
                <a
                  href="https://github.com/JayPatel2110-dev"
                  target="_blank"
                  className="text-sky-400"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Custom CPU Design (Logisim)
              </h3>

              <p className="text-[rgb(var(--muted))] text-sm mb-4 max-w-4xl">
                A small CPU designed using Logisim to strengthen understanding
                of digital logic, datapaths, control units, and hardware-software
                interaction at the instruction level.
              </p>

              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 mb-4">
                <li>• Datapath and control unit implementation</li>
                <li>• Arithmetic and logical instruction execution</li>
                <li>• Instruction sequencing and execution flow</li>
              </ul>

              <span className="text-sky-400 text-sm">
                Digital Logic • ICT Foundations
              </span>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
