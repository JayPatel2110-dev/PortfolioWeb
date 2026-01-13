import Reveal from "@/components/ui/Reveal";

export default function AboutSection() {
  return (
    <Reveal>
      <section id="about" className="py-32 scroll-mt-24">
        <div className="max-w-4xl">

          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How I Think as an Engineer
            </h2>
          </div>

          <div className="space-y-6 text-[rgb(var(--foreground))] opacity-80 leading-relaxed">

            <p>
              I am an Associate DevOps Engineer with a strong interest in
              understanding cloud systems beyond surface-level abstractions.
              Rather than treating cloud platforms as black boxes, I focus on
              how infrastructure components interact, scale, and fail under
              real-world conditions.
            </p>

            <p>
              Alongside my professional work, I am pursuing an ICT engineering
              degree, where my background in digital logic, operating systems,
              and computer networks shapes how I approach modern cloud
              engineering. Designing a custom CPU in Logisim helped me
              understand how software behavior emerges from hardware-level
              decisions.
            </p>

            <p>
              Through projects like DocVault and my ongoing work on
              risk-aware autoscaling and microservice cost optimization on AWS,
              I’ve explored how automation, observability, and infrastructure
              design influence reliability, performance, and cost.
            </p>

            <p>
              I also enjoy games, which influence how I think about systems from
              a resource and time management perspective. Games naturally
              involve planning under constraints, allocating limited resources,
              optimizing strategies over time, and responding to unexpected
              events — concepts that closely parallel capacity planning,
              autoscaling, and operational decision-making in cloud systems.
            </p>

            <p>
              My long-term goal is to grow into a cloud and DevOps engineer who
              not only builds and deploys systems, but deeply understands why
              they behave the way they do under load, failure, and uncertainty.
            </p>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
