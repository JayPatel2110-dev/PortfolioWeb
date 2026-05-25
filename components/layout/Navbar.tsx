"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import ThemeToggle from "@/components/layout/ThemeToggle";
import { useScrollSpy } from "@/components/hooks/useScrollSpy";

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

  const [isOpen, setIsOpen] = useState(false);

  const activeId = useScrollSpy(
    navItems.map((item) => item.id)
  );

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[rgb(var(--background))/80] border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-3">
            <Image
              src="/images/jp-logo.png"
              alt="Jay Patel Logo"
              width={36}
              height={36}
              priority
              className="rounded-full ring-1 ring-sky-400/40"
            />

            <span className="text-base md:text-lg font-semibold tracking-wide">
              Jay Patel
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg border border-white/10 hover:border-sky-400/40 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-9999 bg-[#050816]">
          {/* Top bar */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/jp-logo.png"
                alt="Jay Patel Logo"
                width={34}
                height={34}
                className="rounded-full ring-1 ring-sky-400/40"
              />

              <span className="font-semibold">Jay Patel</span>
            </div>

            <button
              className="p-2 rounded-lg border border-white/10"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center justify-start pt-24 gap-10 h-full text-2xl font-semibold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-sky-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}