"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname() || "/zh";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = (() => {
    const segs = pathname.split("/");
    return segs[1] || "zh";
  })();

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const switchTo = (next: "zh" | "en") => {
    if (next === currentLocale) {
      setOpen(false);
      return;
    }
    const segs = pathname.split("/");
    if (segs.length > 1) {
      segs[1] = next;
    } else {
      segs.push(next);
    }
    const newPath = segs.join("/");
    router.push(newPath, { scroll: false });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="选择语言"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 bg-primary text-on-primary hover:opacity-90 transition-colors"
      >
        <span aria-hidden className="text-base">🌐</span>
        <span className="text-sm font-medium">{currentLocale === "zh" ? "中文" : "EN"}</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-[140px] rounded-lg border border-border bg-card shadow-lg z-50"
        >
          <button
            role="menuitem"
            onClick={() => switchTo("zh")}
            className={`w-full text-left px-3 py-2 text-sm transition-colors ${
              currentLocale === "zh"
                ? "bg-foreground/10 text-foreground font-medium"
                : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            中文
          </button>
          <button
            role="menuitem"
            onClick={() => switchTo("en")}
            className={`w-full text-left px-3 py-2 text-sm transition-colors ${
              currentLocale === "en"
                ? "bg-foreground/10 text-foreground font-medium"
                : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}