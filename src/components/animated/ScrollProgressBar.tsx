"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-foreground/10 pointer-events-none">
      <motion.div
        className="h-full"
        style={{ width, background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))" }}
      />
    </div>
  );
}