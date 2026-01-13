import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <Reveal>
      <section id="hero" className="py-32 scroll-mt-24">
        <div className="max-w-6xl mx-auto">

          <div className="relative card p-12 md:p-16">

            <div
              className="
                absolute inset-0 rounded-[1.25rem]
                bg-linear-to-br from-sky-400/10 via-transparent to-purple-500/10
                pointer-events-none
              "
            />

            <div className="relative grid md:grid-cols-2 gap-14 items-center">

              <div>
                <p className="text-sm uppercase tracking-widest text-sky-400 mb-4">
                  Associate DevOps Engineer • Cloud & Systems
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Jay Patel
                </h1>

                <p className="text-lg opacity-80 max-w-xl mb-6">
                  I design and automate cloud infrastructure with a focus on
                  reliability, security, and cost efficiency. I treat cloud
                  platforms as systems — not black boxes.
                </p>

                <p className="text-sm text-[rgb(var(--muted))] max-w-lg mb-10">
                  With an ICT engineering background, my interests extend into
                  digital logic, operating systems, networking, and automation.
                  Games influence how I think about resource planning and
                  decision-making under constraints.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#experience"
                    className="px-6 py-3 rounded-md bg-sky-500 text-black font-medium
                               hover:bg-sky-400 transition"
                  >
                    Experience
                  </a>

                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-md bg-black/5 dark:bg-white/5
                               hover:bg-black/10 dark:hover:bg-white/10 transition"
                  >
                    Projects
                  </a>

                  <a
                    href="/resume/Jay_Patel_Resume.pdf"
                    download
                    className="px-6 py-3 rounded-md bg-black/5 dark:bg-white/5
                               hover:bg-black/10 dark:hover:bg-white/10 transition"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">

                <div
                  className="
                    absolute inset-0
                    bg-linear-to-br from-sky-400/25 to-purple-500/25
                    blur-3xl
                  "
                />

                <Image
                  src="/images/jay-patel.png"
                  alt="Jay Patel"
                  width={340}
                  height={420}
                  priority
                  className="
                    relative z-10
                    object-contain
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
