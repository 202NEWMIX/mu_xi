import Link from "next/link";
import React from "react";
import type { NavItem } from "./Header";

type FooterProps = {
  copyright?: string;
  links?: NavItem[];
  children?: React.ReactNode;
};

export default function Footer({ copyright, links = [], children }: FooterProps) {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-foreground/70">
          {copyright ?? "© 2025 Your Company"}
        </div>
        <nav className="flex gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </footer>
  );
}