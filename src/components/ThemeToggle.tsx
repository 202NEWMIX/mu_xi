"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const next = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
      setTheme(next);
      document.documentElement.classList.toggle("dark", next === "dark");
    } catch {}
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="切换主题"
      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-border bg-card text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors"
    >
      <span className="text-sm font-medium">{theme === "dark" ? "夜间" : "日间"}</span>
      <span aria-hidden className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}