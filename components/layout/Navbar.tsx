"use client";

import Image from "next/image";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Experience", id: "experience", href: "/#experience" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Blogs", id: "blogs", href: "/#blogs" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Contact", id: "contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeId =
    pathname === "/"
      ? useScrollSpy(navItems.map((item) => item.id))
      : "";

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[rgb(var(--background))/80]">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/#hero" className="flex items-center gap-3">
          <Image
            src="/images/jp-logo.png"
            alt="Jay Patel Logo"
            width={36}
            height={36}
            priority
            className="rounded-full ring-1 ring-sky-400/40"
          />
          <span className="text-lg font-semibold tracking-wide">
            Jay Patel
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={clsx(
                "relative transition-colors",
                pathname === "/" && activeId === item.id
                  ? "text-sky-400"
                  : "text-[rgb(var(--muted))] hover:text-sky-400"
              )}
            >
              {item.label}
              {pathname === "/" && activeId === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
