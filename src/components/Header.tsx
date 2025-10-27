import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";

export type NavItem = { label: string; href: string };

type HeaderProps = {
  logo?: React.ReactNode;
  nav?: NavItem[];
};

export default function Header({ logo, nav = [] }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {logo ?? (
            <span
              className="cyberpunk-logo text-xl md:text-2xl font-black tracking-wide"
              data-text="杭州沐睎"
            >
              杭州沐睎
            </span>
          )}
        </div>
        <nav className="flex flex-wrap items-center gap-3 md:gap-6 max-w-full">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden md:inline text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LocaleToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}