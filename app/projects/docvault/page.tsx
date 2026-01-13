import Link from "next/link";

export default function DocVaultPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-sky-400 mb-2">
            Project Deep Dive
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DocVault
          </h1>
          <p className="text-slate-400 max-w-3xl">
            DocVault is a serverless document management system built to explore
            secure access, cloud-native architecture, and infrastructure
            automation using AWS and Terraform.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-slate-300 max-w-4xl">
            The goal of DocVault was not just to store files, but to understand
            how authentication, authorization, backend logic, and cloud services
            work together in a real-world system. The project uses a fully
            serverless architecture and is deployed automatically using a
            GitLab CI/CD pipeline backed by Terraform.
          </p>
        </div>

        {/* Architecture */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Architecture & Technology Choices
          </h2>

          <ul className="text-slate-300 space-y-2 max-w-4xl">
            <li>• Frontend hosted as a static website on Amazon S3</li>
            <li>• Backend implemented using AWS Lambda with Node.js</li>
            <li>• API layer exposed via AWS API Gateway</li>
            <li>• Documents stored securely in Amazon S3 using presigned URLs</li>
            <li>• User data and metadata stored in DynamoDB</li>
            <li>• JWT-based authentication for secure access control</li>
          </ul>

          <p className="text-slate-400 text-sm mt-4 max-w-4xl">
            Presigned URLs were used to allow secure uploads and downloads
            directly to S3 without exposing credentials or routing file data
            through the backend.
          </p>
        </div>

        {/* Project Structure */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Project Structure
          </h2>

          <pre className="bg-black/40 border border-white/10 rounded-xl p-6 text-sm text-slate-300 overflow-x-auto">
{`frontend/
  └── public/
      ├── index.html
      ├── register.html
      ├── dashboard.html
      └── style.css

lambda/
  ├── index.js
  └── package.json

terraform/
  ├── main.tf
  ├── variables.tf
  ├── outputs.tf
  └── backend.tf

.gitlab-ci.yml`}
          </pre>
        </div>

        {/* CI/CD & Terraform */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Infrastructure as Code & CI/CD
          </h2>

          <p className="text-slate-300 max-w-4xl mb-4">
            Infrastructure provisioning and deployment are fully automated using
            Terraform and GitLab CI/CD. All AWS resources are defined declaratively,
            and environment-specific values are injected using CI/CD variables.
          </p>

          <ul className="text-slate-300 space-y-2 max-w-4xl">
            <li>• Terraform manages S3, Lambda, API Gateway, and DynamoDB</li>
            <li>• Remote Terraform state stored in S3 with DynamoDB locking</li>
            <li>• GitLab CI/CD pipeline handles build, validate, plan, and apply stages</li>
            <li>• Frontend deployment automated during the apply stage</li>
          </ul>
        </div>

        {/* What I Learned */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Key Learnings
          </h2>

          <ul className="text-slate-300 space-y-2 max-w-4xl">
            <li>• How authentication and authorization affect system design</li>
            <li>• Secure file handling using presigned URLs</li>
            <li>• Managing cloud infrastructure using Terraform</li>
            <li>• CI/CD-driven infrastructure deployment workflows</li>
            <li>• Trade-offs of serverless architectures</li>
          </ul>
        </div>

        {/* Future Work */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Future Improvements
          </h2>

          <ul className="text-slate-300 space-y-2 max-w-4xl">
            <li>• Password recovery via email or OTP</li>
            <li>• Multi-user document sharing</li>
            <li>• Improved file previews</li>
            <li>• Expanded CI/CD testing stages</li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/your-username/docvault"
            target="_blank"
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            GitHub Repository →
          </a>

          <Link
            href="/projects"
            className="text-slate-400 hover:text-white transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
