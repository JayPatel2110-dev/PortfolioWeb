export default function BlogPage() {
    return (
        <article className="max-w-3xl mx-auto py-32">

            <header className="mb-20">

                <p className="text-sm uppercase tracking-widest text-sky-400 mb-3">
                    Blog
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    From Gaming Curiosity to Cloud and DevOps
                </h1>

                <p className="text-xl text-[rgb(var(--muted))] max-w-2xl">
                    How a simple “why” shaped my journey into systems engineering
                </p>

            </header>


            <div className="space-y-6 text-lg leading-relaxed opacity-90">

                <p>
                    I have always enjoyed playing games. Growing up, however, I never had
                    a system powerful enough to run high-end titles like GTA V. At the
                    time, I wanted to experience those games badly, but hardware
                    limitations made it impossible.
                </p>

                <p>
                    That curiosity eventually led me to explore cloud gaming. The idea
                    itself felt exciting — powerful hardware somewhere else, streamed
                    directly to my screen. But the experience was far from perfect. There
                    were long waiting times, frequent frame drops, and noticeable lag.
                </p>

                <p>
                    Instead of accepting it as a limitation, I found myself asking a
                    simple question: <strong>why does this happen?</strong>
                </p>

                <p>
                    While researching cloud gaming performance, I learned about one of
                    the most fundamental challenges in distributed systems: latency.
                </p>

                <p>
                    Concepts like network distance, shared infrastructure, congestion,
                    and resource contention helped explain why performance could vary so
                    drastically. What fascinated me was not just the technology itself,
                    but the realization that performance issues were often the result of
                    system-level decisions, not individual bugs.
                </p>

                <p>
                    The deeper I went, the more curious I became about how large-scale
                    systems are designed, operated, and optimized. What started as a
                    gaming problem slowly evolved into an interest in cloud architecture,
                    reliability, and performance engineering.
                </p>

                <p>
                    While searching for a summer internship later on, I was introduced to
                    DevOps. Learning about DevOps shifted my perspective — it wasn’t just
                    about automation or tools, but about ownership, reliability, and
                    understanding the impact of changes on real systems.
                </p>

                <p>
                    With nearly a year of hands-on experience working in production
                    environments, my understanding of DevOps has matured significantly.
                    Real systems teach lessons that tutorials cannot.
                </p>

                <p>
                    Looking back, it’s interesting how a simple desire to play a game led
                    me toward cloud computing and DevOps. What began as frustration with
                    performance turned into curiosity, and that curiosity gradually
                    shaped my career path.
                </p>

                <p>
                    I’m still learning every day, but one thing has remained constant:
                    <strong> asking why.</strong>
                </p>

            </div>
            <a
                href="/#blogs"
                className="inline-block text-sm text-sky-400 hover:underline mb-12"
            >
                ← Back to Blogs
            </a>

        </article>
    );
}
