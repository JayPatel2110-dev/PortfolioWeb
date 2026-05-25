"use client";

import Reveal from "@/components/ui/Reveal";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "patel2110.jay@gmail.com",
    href: "mailto:patel2110.jay@gmail.com",
    icon: Mail,
  },

  {
    title: "GitHub",
    value: "github.com/JayPatel2110-dev",
    href: "https://github.com/JayPatel2110-dev",
    icon: Github,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/jay-patel2110",
    href: "https://linkedin.com/in/jay-patel2110",
    icon: Linkedin,
  },

  {
    title: "Resume",
    value: "Download PDF Resume",
    href: "/resume/Jay_Patel_Resume.pdf",
    icon: FileText,
  },
];

export default function ContactSection() {
  return (
    <Reveal>
      <section
        id="contact"
        className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
      >
        {/* SECTION HEADER */}
        <div className="space-y-4 mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Connect
          </h2>

          <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
            Whether it’s cloud infrastructure, DevOps engineering,
            automation systems, or collaborative opportunities —
            feel free to reach out.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 p-8 md:p-10">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Open to Engineering Opportunities & Collaboration
                </h3>

                <p className="text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
                  I’m interested in cloud infrastructure,
                  DevOps engineering, platform automation,
                  and systems-focused software engineering work.
                  I also enjoy discussing cloud architecture,
                  infrastructure reliability, and deployment systems.
                </p>
              </div>

              {/* CONTACT GRID */}
              <div className="grid sm:grid-cols-2 gap-5">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
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
                      download={
                        item.title === "Resume"
                      }
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-white/3
                        p-5
                        transition-all
                        hover:border-sky-400/20
                        hover:bg-sky-400/4
                        hover:-translate-y-1
                      "
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-4">
                          <div className="w-11 h-11 rounded-xl bg-sky-400/8 border border-sky-400/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-sky-300" />
                          </div>

                          <div>
                            <p className="font-medium">
                              {item.title}
                            </p>

                            <p className="text-sm text-[rgb(var(--muted))] mt-1 break-all">
                              {item.value}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={18}
                          className="text-sky-300 shrink-0"
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* CURRENT FOCUS */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Current Focus
                </h3>

                <div className="space-y-3">
                  {[
                    "AWS Infrastructure Automation",
                    "Terraform Deployment Systems",
                    "CI/CD Workflows",
                    "Infrastructure Reliability",
                    "Cloud Governance Tooling",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-sky-400/10 bg-sky-400/5 px-4 py-3 text-sky-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Availability
                </h3>

                <p className="text-[rgb(var(--muted))] leading-relaxed">
                  Open to DevOps, cloud engineering,
                  platform engineering, and infrastructure-focused
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}