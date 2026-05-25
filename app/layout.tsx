import "@/styles/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/ui/MouseGlow";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Jay Patel | Associate DevOps Engineer",

  description:
    "Jay Patel — Associate DevOps Engineer. I build AWS infrastructure automation, CI/CD pipelines, Terraform modules, and scalable deployment systems on AWS.",

  keywords: [
    "Jay Patel",
    "DevOps Engineer",
    "AWS",
    "Terraform",
    "CI/CD",
    "ECS",
    "Docker",
    "Cloud Engineer",
    "Infrastructure Automation",
  ],

  authors: [{ name: "Jay Patel" }],

  metadataBase: new URL("https://jay-patel.xyz"),

  openGraph: {
    title: "Jay Patel | Associate DevOps Engineer",

    description:
      "AWS infrastructure automation, Terraform systems, CI/CD pipelines, and production-grade deployment engineering.",

    url: "https://jay-patel.xyz",

    siteName: "Jay Patel Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jay Patel Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Jay Patel | Associate DevOps Engineer",

    description:
      "AWS infrastructure automation, Terraform systems, and scalable deployment engineering.",

    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col relative">
        <MouseGlow />

        <ThemeProvider>
          <Navbar />

          <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
            {children}
          </main>

          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
