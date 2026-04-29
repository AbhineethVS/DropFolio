"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full bg-white dark:bg-[#0f0f0f] sticky top-0 z-50"
      style={{ borderBottom: "var(--nb-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 bg-[#34d399] flex items-center justify-center rounded-[6px] shrink-0"
            style={{ border: "var(--nb-border)", boxShadow: "2px 2px 0px #000" }}
          >
            <span className="font-black text-black text-sm leading-none">D</span>
          </div>
          <span className="font-black text-black dark:text-white text-base tracking-widest uppercase">
            DROPFOLIO
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-black dark:text-white hover:text-[#34d399] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/sign-in"
            className="px-4 py-2 text-sm font-bold text-black dark:text-white bg-white dark:bg-[#1a1a1a] rounded-[var(--nb-radius)] border-2 border-black dark:border-white transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 text-sm font-bold text-black bg-[#34d399] rounded-[var(--nb-radius)] border-2 border-black transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="w-10 h-10 flex items-center justify-center rounded-[var(--nb-radius)] border-2 border-black dark:border-white bg-white dark:bg-[#1a1a1a] transition-all duration-150"
            style={{ boxShadow: "var(--nb-shadow)" }}
          >
            {isOpen ? (
              <X className="w-4 h-4 text-black dark:text-white" />
            ) : (
              <Menu className="w-4 h-4 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:hidden bg-white dark:bg-[#0f0f0f] px-4 pb-5 pt-3 flex flex-col gap-4"
          style={{ borderTop: "var(--nb-border)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-bold text-black dark:text-white hover:text-[#34d399] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2" style={{ borderTop: "var(--nb-border)" }}>
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-black dark:text-white bg-white dark:bg-[#1a1a1a] rounded-[var(--nb-radius)] border-2 border-black dark:border-white"
              style={{ boxShadow: "var(--nb-shadow)" }}
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-black bg-[#34d399] rounded-[var(--nb-radius)] border-2 border-black"
              style={{ boxShadow: "var(--nb-shadow)" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
