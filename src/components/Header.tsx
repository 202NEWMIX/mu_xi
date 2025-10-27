import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export type NavItem = { label: string; href: string };

type HeaderProps = {
  logo?: React.ReactNode;
  nav?: NavItem[];
};

export default function Header({ logo, nav = [] }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logo ?? (
            <span
              className="cyberpunk-logo text-2xl font-black tracking-wide"
              data-text="杭州沐睎"
            >
              杭州沐睎
            </span>
          )}
        </div>
        <nav className="flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}