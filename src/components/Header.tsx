import Link from "next/link";
import React from "react";
// import ThemeToggle from "./ThemeToggle"; // 夜间模式按钮按需隐藏
import LocaleToggle from "./LocaleToggle";

export type NavItem = { label: string; href: string };

type HeaderProps = {
  logo?: React.ReactNode;
  nav?: NavItem[];
  className?: string;
};

export default function Header({ logo, nav = [], className }: HeaderProps) {
  return (
    <header className={`bg-background border-b border-border ${className ?? ""}`}>
      <div className='mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 grid grid-cols-3 items-center'>
        {/* Left: logo (removed per request; render only if explicitly provided) */}
        <div className='flex items-center gap-3'>{logo ?? null}</div>
        {/* Center: nav (centered) */}
        <nav className='flex items-center justify-center gap-3 md:gap-6'>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='hidden md:inline nav-link'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Right: toggles */}
        <div className='flex justify-end items-center gap-3'>
          <LocaleToggle />
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
