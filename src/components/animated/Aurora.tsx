"use client";
import React from "react";
import { motion } from "framer-motion";

type AuroraProps = {
  children?: React.ReactNode;
};

export default function Aurora({ children }: AuroraProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* primary glow */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[60vh] w-[60vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 30%, var(--color-primary) 0%, transparent 60%)",
          opacity: 0.5,
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* secondary glow */}
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-[50vh] w-[50vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 70%, var(--color-secondary) 0%, transparent 60%)",
          opacity: 0.45,
        }}
        animate={{ x: [0, -50, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* accent glow for depth */}
      <motion.div
        aria-hidden
        className="absolute top-1/3 left-1/2 h-[40vh] w-[40vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, var(--color-accent) 0%, transparent 60%)",
          opacity: 0.35,
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}