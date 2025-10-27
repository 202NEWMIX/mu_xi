"use client";
import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  title: string;
  subtitle?: string;
};

export default function AnimatedText({ title, subtitle }: AnimatedTextProps) {
  const letters = Array.from(title);
  return (
    <div className="mx-auto max-w-6xl px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 24, opacity: 0.0 }}
            animate={{ y: 0, opacity: 1.0 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      {subtitle && (
        <motion.p
          className="mt-6 text-lg text-foreground/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: letters.length * 0.05 + 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}