import Reveal from "@/components/ui/Reveal";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";

export default function ContactSection() {
  return (
    <Reveal>
      <section id="contact" className="py-32 scroll-mt-24">
        <div className="max-w-4xl">

          {/* Header */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Connect
            </h2>
            <p className="text-[rgb(var(--muted))] mt-4 max-w-2xl">
              Whether it’s about cloud infrastructure, DevOps roles,
              collaboration, or engineering discussions — feel free to reach
              out.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">

            {/* Email */}
            <a
              href="mailto:patel2110.jay@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl
                         bg-[rgb(var(--card))] border border-[rgb(var(--card-border))]
                         hover:border-sky-400 transition-all"
            >
              <Mail className="w-6 h-6 text-sky-400" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-[rgb(var(--muted))]">
                  patel2110.jay@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JayPatel2110-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl
                         bg-[rgb(var(--card))] border border-[rgb(var(--card-border))]
                         hover:border-sky-400 transition-all"
            >
              <Github className="w-6 h-6 text-sky-400" />
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-[rgb(var(--muted))]">
                  github.com/JayPatel2110-dev
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jay-patel2110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl
                         bg-[rgb(var(--card))] border border-[rgb(var(--card-border))]
                         hover:border-sky-400 transition-all"
            >
              <Linkedin className="w-6 h-6 text-sky-400" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-[rgb(var(--muted))]">
                  linkedin.com/in/jay-patel2110
                </p>
              </div>
            </a>

            {/* Resume */}
            <a
              href="/resume/Jay_Patel_Resume.pdf"
              download
              className="flex items-center gap-4 p-6 rounded-xl
                         bg-[rgb(var(--card))] border border-[rgb(var(--card-border))]
                         hover:border-sky-400 transition-all"
            >
              <FileText className="w-6 h-6 text-sky-400" />
              <div>
                <p className="font-medium">Resume</p>
                <p className="text-sm text-[rgb(var(--muted))]">
                  Download PDF
                </p>
              </div>
            </a>

          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="/resume/Jay_Patel_Resume.pdf"
              download
              className="px-8 py-4 rounded-md bg-sky-500 text-black font-medium
                         hover:bg-sky-400 hover:scale-[1.03] transition-all"
            >
              Download Resume
            </a>
          </div>

        </div>
      </section>
    </Reveal>
  );
}
