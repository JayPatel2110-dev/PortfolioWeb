import Reveal from "@/components/ui/Reveal";

export default function ExperienceSection() {
    return (
        <Reveal>
            <section id="experience" className="py-32 scroll-mt-24">
                <div className="max-w-6xl">

                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
                            Experience
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Real-World Engineering Work
                        </h2>
                        <p className="text-[rgb(var(--muted))] mt-4 max-w-3xl">
                            Hands-on experience working with production cloud infrastructure,
                            automation pipelines, and deployment workflows in a real
                            engineering environment.
                        </p>
                    </div>

                    <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-2xl p-10"><div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Associate DevOps Engineer — Trainee
                            </h3>
                            <p className="text-[rgb(var(--muted))] text-sm mt-1">
                                Wonderlend Hubs Pvt. Ltd.
                            </p>
                            <p className="text-[rgb(var(--muted))] text-sm mt-1">
                                Internship: Feb 2025 – Dec 2025 · Full-time Role: Jan 2026 – Present
                            </p>
                        </div>
                    </div>


                        <ul className="text-[rgb(var(--foreground))] opacity-80 space-y-4 text-sm leading-relaxed">
                            <li>
                                • Designed and implemented a JIRA-integrated IAM automation system
                                using Python and boto3 that processes access requests, provisions
                                IAM users, assigns groups, applies audit tags, and updates ticket
                                status automatically.
                            </li>

                            <li>
                                • Built secure credential delivery workflows using AWS SES and
                                Slack notifications with enforced password resets and MFA-ready
                                onboarding, improving access security and consistency.
                            </li>

                            <li>
                                • Supported frequent staging and production deployments across
                                AWS-based microservices, diagnosing CI/CD pipeline failures,
                                environment misconfigurations, and permission-related issues to
                                unblock deployments.
                            </li>

                            <li>
                                • Collaborated with development teams to debug infrastructure and
                                deployment issues, gaining exposure to real-world cloud failure
                                modes and operational trade-offs.
                            </li>
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "AWS",
                                "IAM",
                                "Python",
                                "boto3",
                                "Terraform",
                                "GitLab CI/CD",
                                "Linux",
                                "JIRA",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full
                             bg-white/5 border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
