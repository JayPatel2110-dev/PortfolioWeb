"use client";

import Reveal from "@/components/ui/Reveal";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",

    skills: [
      "AWS: IAM, EC2, S3, Lambda, API Gateway, DynamoDB, SES",
      "Serverless and cloud-native architecture patterns",
      "IAM policies, access control, and security fundamentals",
      "Cost-aware infrastructure design and trade-offs",
      "Networking, compute, and storage behavior",
    ],

    stack: [
      "AWS",
      "IAM",
      "Serverless",
      "Cloud Architecture",
    ],
  },

  {
    title: "DevOps & Automation",

    skills: [
      "CI/CD pipelines using GitLab CI/CD and GitHub Actions",
      "Infrastructure as Code with Terraform",
      "Docker-based containerization",
      "Linux debugging and scripting workflows",
      "Deployment troubleshooting and diagnostics",
    ],

    stack: [
      "Terraform",
      "GitLab CI/CD",
      "GitHub Actions",
      "Docker",
      "Linux",
    ],
  },

  {
    title: "Backend & Cloud Applications",

    skills: [
      "RESTful API development and backend workflows",
      "JWT authentication and authorization",
      "Secure file handling using presigned URLs",
      "DynamoDB and database fundamentals",
      "Frontend integration with cloud-native backends",
    ],

    stack: [
      "Node.js",
      "API Gateway",
      "Lambda",
      "DynamoDB",
    ],
  },

  {
    title: "Systems & ICT Foundations",

    skills: [
      "Operating system fundamentals",
      "Computer networking and protocols",
      "Digital logic and CPU design basics",
      "Systems thinking and infrastructure behavior",
      "Understanding software-to-hardware interaction",
    ],

    stack: [
      "Operating Systems",
      "Computer Networks",
      "Systems Thinking",
      "ICT Foundations",
    ],
  },

  {
    title: "Programming & Tooling",

    skills: [
      "Python for cloud automation and tooling",
      "Shell scripting and Linux workflows",
      "Git-based collaborative development",
      "C/C++ academic and systems-level programming",
      "Automation-focused engineering workflows",
    ],

    stack: [
      "Python",
      "Shell",
      "Git",
      "C/C++",
    ],

    fullWidth: true,
  },
];

export default function SkillsSection() {
  return (
    <Reveal>
      <section
        id="skills"
        className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-6 py-24"
      >
        {/* SECTION HEADER */}
        <div className="space-y-4 mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technical Focus
          </h2>

          <p className="max-w-3xl text-[rgb(var(--muted))] leading-relaxed">
            My technical focus is shaped by hands-on experience with cloud
            infrastructure, deployment systems, automation workflows,
            and operational engineering practices.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`
    rounded-3xl
    border border-white/10
    bg-white/3
    backdrop-blur-sm
    overflow-hidden
    ${group.fullWidth ? "md:col-span-2 md:w-[75%] md:mx-auto" : ""}
  `}
            >
              <div
                className={`
    p-8 md:p-10 space-y-8
  `}
              >
                {/* HEADER */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {group.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/4"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SKILLS */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-3 text-[rgb(var(--muted))] leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 shrink-0" />

                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}