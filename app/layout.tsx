import "@/styles/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/ui/MouseGlow";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Jay Patel | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer with ICT background. Focused on systems, infrastructure, and automation.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
