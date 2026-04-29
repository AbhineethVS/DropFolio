"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-[var(--nb-radius)] border-2 border-black dark:border-white" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-[var(--nb-radius)] bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
      style={{ boxShadow: "var(--nb-shadow)" }}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-black dark:text-white" />
      ) : (
        <Moon className="w-4 h-4 text-black dark:text-white" />
      )}
    </button>
  );
}
