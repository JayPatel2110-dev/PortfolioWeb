import Reveal from "@/components/ui/Reveal";

export default function SkillsSection() {
  return (
    <Reveal>
      <section id="skills" className="py-32 scroll-mt-24">
        <div className="max-w-6xl">

          <div className="mb-20">
            <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Technical Focus
            </h2>
            <p className="text-[rgb(var(--muted))] mt-4 max-w-3xl">
              My skills are shaped by hands-on experience with real cloud
              infrastructure, automation workflows, and a strong foundation in
              core ICT and systems concepts. I focus on understanding how systems
              behave, not just how to configure them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Cloud & Infrastructure
              </h3>
              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 leading-relaxed">
                <li>• AWS: IAM, EC2, S3, Lambda, API Gateway, DynamoDB, SES</li>
                <li>• Serverless and cloud-native architecture patterns</li>
                <li>• IAM policies, access control, and security fundamentals</li>
                <li>• Cost-aware infrastructure design and trade-offs</li>
                <li>• Understanding networking, compute, and storage behavior</li>
              </ul>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                DevOps & Automation
              </h3>
              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 leading-relaxed">
                <li>• CI/CD pipelines using GitLab CI/CD and GitHub Actions</li>
                <li>• Infrastructure as Code with Terraform</li>
                <li>• Docker-based containerization</li>
                <li>• Linux fundamentals, debugging, and scripting</li>
                <li>• Deployment troubleshooting and environment diagnostics</li>
              </ul>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Backend & Cloud Applications
              </h3>
              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 leading-relaxed">
                <li>• RESTful API design and backend service development</li>
                <li>• JWT-based authentication and authorization</li>
                <li>• Secure file handling using presigned URLs</li>
                <li>• DynamoDB and relational database fundamentals</li>
                <li>• Integration of frontend applications with cloud backends</li>
              </ul>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Core ICT & Systems Foundations
              </h3>
              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 leading-relaxed">
                <li>• Digital logic and basic CPU design (Logisim)</li>
                <li>• Operating system fundamentals</li>
                <li>• Computer networks and protocols</li>
                <li>• Understanding how software maps to hardware</li>
                <li>• Systems thinking over framework-driven development</li>
              </ul>
            </div>

            <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-xl p-8 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">
                Programming & Tooling
              </h3>
              <ul className="text-[rgb(var(--foreground))] opacity-80 text-sm space-y-2 leading-relaxed">
                <li>• Python (cloud automation, scripting, AWS tooling)</li>
                <li>• C / C++ (academic and systems-level work)</li>
                <li>• Shell scripting</li>
                <li>• Git and collaborative development workflows</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}