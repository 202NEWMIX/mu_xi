"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  amount?: number; // max translate in px
  axis?: "y" | "x";
  className?: string;
};

export default function Parallax({ children, amount = 60, axis = "y", className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translate = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  const style = axis === "y" ? { y: translate } : { x: translate };

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  );
}