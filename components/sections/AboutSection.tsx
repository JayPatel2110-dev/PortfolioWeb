"use client";

import Reveal from "@/components/ui/Reveal";

const principles = [
  {
    title: "Systems Thinking",

    description:
      "I focus on understanding how infrastructure components interact, scale, fail, and recover under real-world operational conditions.",
  },

  {
    title: "Cloud Infrastructure",

    description:
      "My work centers around AWS infrastructure, deployment automation, CI/CD workflows, and cloud-native operational engineering.",
  },

  {
    title: "Engineering Foundations",

    description:
      "My ICT background in operating systems, computer networks, and digital logic shapes how I approach cloud systems and infrastructure behavior.",
  },

  {
    title: "Reliability & Automation",

    description:
      "I’m deeply interested in observability, infrastructure reliability, automation systems, and scalable deployment workflows.",
  },
];

const interests = [
  "Cloud Infrastructure",
  "AWS",
  "Terraform",
  "CI/CD Systems",
  "Systems Engineering",
  "Infrastructure Automation",
  "Observability",
  "Scalable Deployments",
];

export default function AboutSection() {
  return (
    <Reveal>
      <section
        id="about"
        className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
      >
        {/* SECTION HEADER */}
        <div className="space-y-4 mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            How I Think as an Engineer
          </h2>

          <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
            I approach cloud engineering from a systems perspective —
            focusing not just on deployment, but on how infrastructure
            behaves under scale, failure, and operational complexity.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-8 md:p-10">
            {/* LEFT */}
            <div className="space-y-8">
              {/* INTRO */}
              <div className="space-y-5 text-[rgb(var(--muted))] leading-relaxed">
                <p>
                  I’m an Associate DevOps Engineer with a strong interest in
                  understanding cloud systems beyond surface-level abstractions.
                  Rather than treating infrastructure platforms as black boxes,
                  I focus on how systems interact, scale, fail, and recover.
                </p>

                <p>
                  Alongside my professional work, I’m pursuing an ICT engineering
                  degree where my background in operating systems, computer
                  networks, and digital logic influences how I approach modern
                  cloud engineering and deployment systems.
                </p>

                <p>
                  Through projects like DocVault, predictive scaling systems,
                  and AWS automation tooling, I’ve explored how infrastructure
                  design, automation, and observability affect reliability,
                  scalability, and operational efficiency.
                </p>

                <p>
                  I also enjoy games, which heavily influence how I think about
                  systems. Resource allocation, optimization under constraints,
                  and strategic decision-making in games closely parallel
                  infrastructure scaling, autoscaling, and cloud operations.
                </p>

                <p>
                  My long-term goal is to grow into a cloud and platform engineer
                  who deeply understands why systems behave the way they do —
                  not just how to deploy them.
                </p>
              </div>

              {/* INTEREST TAGS */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Current Technical Interests
                </h3>

                <div className="flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 h-fit">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/3 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[rgb(var(--muted))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}