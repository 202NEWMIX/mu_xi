"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const next = stored === "dark" ? "dark" : "light";
      setTheme(next);
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(next);
      (root as HTMLElement).style.colorScheme = next;
    } catch {}
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    (root as HTMLElement).style.colorScheme = next;
  };

  return (
    <button
      onClick={toggle}
      aria-label="切换主题"
      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-primary text-on-primary hover:opacity-90 transition-colors"
    >
      <span className="text-sm font-medium">{theme === "dark" ? "夜间" : "日间"}</span>
      <span aria-hidden className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}