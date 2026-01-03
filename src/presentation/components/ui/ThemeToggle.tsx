"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 p-3 rounded-xl bg-slate-100 dark:bg-surface border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all z-50 group"
      aria-label="Toggle Theme"
    >
      <span className="text-xl group-hover:scale-110 block transition-transform">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
};