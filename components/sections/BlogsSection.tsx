import Reveal from "@/components/ui/Reveal";

const blogs = [
    {
        title: "From Gaming Curiosity to Cloud and DevOps",
        description:
            "How a simple question about performance and latency led me toward cloud computing, systems thinking, and DevOps.",
        date: "Jan 2026",
        href: "/blogs/from-gaming-curiosity-to-cloud-and-devops",
    },
];

export default function BlogsSection() {
    return (
        <Reveal>
            <section id="blogs" className="py-32 scroll-mt-24">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-16 max-w-3xl">
                        <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
                            Writing
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Notes on Systems & Engineering
                        </h2>
                        <p className="text-[rgb(var(--muted))]">
                            I write to clarify my thinking — about cloud infrastructure,
                            DevOps practices, and the engineering decisions behind them.
                        </p>
                    </div>

                    <div className="space-y-6">

                        {blogs.map((blog) => (
                            <a
                                key={blog.href}
                                href={blog.href}
                                className="
                  block
                  card
                  p-8
                  transition-transform
                  hover:-translate-y-1
                "
                            >
                                <div className="flex flex-col gap-3">

                                    <span className="text-sm text-[rgb(var(--muted))]">
                                        {blog.date}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                                        {blog.title}
                                    </h3>

                                    <p className="opacity-80 max-w-3xl">
                                        {blog.description}
                                    </p>

                                </div>
                            </a>
                        ))}

                    </div>

                </div>
            </section>
        </Reveal>
    );
}
