"use client";
import React from "react";
import { motion } from "framer-motion";

type GradientSeparatorProps = {
  className?: string;
};

export default function GradientSeparator({ className }: GradientSeparatorProps) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className ?? ""}`}>
      <motion.div
        className="h-[2px] w-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))",
          filter: "drop-shadow(0 0 6px rgba(139,92,246,0.35))",
        }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.85, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}