"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type ShinyButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function ShinyButton({ href, label, variant = "primary" }: ShinyButtonProps) {
  const base = "relative inline-flex items-center px-6 py-3 rounded-lg font-semibold overflow-hidden transition transform-gpu";
  const themeClass = variant === "primary" ? "text-on-primary" : "text-foreground";
  const themeStyle =
    variant === "primary"
      ? {
          backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
          boxShadow: "0 10px 30px rgba(139,92,246,0.25)",
        }
      : {
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
        };

  return (
    <Link href={href} className={`${base} ${themeClass}`} style={themeStyle}>
      <motion.span
        className="absolute inset-0"
        initial={{ x: "-120%", opacity: 0.6 }}
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
        }}
      />
      <span className="relative z-10">{label}</span>
    </Link>
  );
}