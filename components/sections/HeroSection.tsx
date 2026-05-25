"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowDownRight } from "lucide-react";

const technologies = [
  "AWS",
  "Terraform",
  "ECS Fargate",
  "GitLab CI/CD",
  "Docker",
  "Linux",
];

export default function HeroSection() {
  return (
    <Reveal>
      <section
        id="hero"
        className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
      >
        <div
          className="
            relative
            rounded-3xl
            border border-white/10
            bg-white/3
            backdrop-blur-sm
            overflow-hidden
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute inset-0
              bg-linear-to-br
              from-sky-400/10
              via-transparent
              to-purple-500/10
              pointer-events-none
            "
          />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center p-8 md:p-12 lg:p-16">
            {/* LEFT */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Associate DevOps Engineer • Cloud & Systems
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Jay Patel
                </h1>

                <p className="text-xl text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
                  I design and automate cloud infrastructure with a focus on
                  reliability, scalability, and operational efficiency —
                  treating cloud platforms as systems, not black boxes.
                </p>
              </div>

              {/* Supporting Paragraph */}
              <p className="text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
                With an ICT engineering background, my interests extend into
                operating systems, networking, automation, and infrastructure
                behavior. I enjoy understanding how systems scale, fail,
                recover, and evolve under real-world constraints.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-sky-400
                    text-black
                    font-medium
                    hover:bg-sky-300
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  View Projects
                  <ArrowDownRight size={18} />
                </a>

                <a
                  href="#experience"
                  className="
                    px-6 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/4
                    hover:border-sky-400/20
                    hover:bg-sky-400/5
                    transition-all
                  "
                >
                  Experience
                </a>

                <a
                  href="/resume/Jay_Patel_Resume.pdf"
                  download
                  className="
                    px-6 py-3
                    rounded-xl
                    border border-white/10
                    bg-white/4
                    hover:border-sky-400/20
                    hover:bg-sky-400/5
                    transition-all
                  "
                >
                  Download Resume
                </a>
              </div>

              {/* Tech Strip */}
              <div className="flex flex-wrap gap-3 pt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      text-sm
                      border border-white/10
                      bg-white/4
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-br
                  from-sky-400/20
                  to-purple-500/20
                  blur-3xl
                "
              />

              {/* Image Container */}
              <div
                className="
                  relative z-10
                  rounded-3xl
                  border border-white/10
                  bg-white/3
                  backdrop-blur-sm
                  p-4
                "
              >
                <Image
                  src="/images/jay-patel.png"
                  alt="Jay Patel"
                  width={360}
                  height={440}
                  priority
                  className="
                    object-contain
                    rounded-2xl
                    drop-shadow-2xl
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}