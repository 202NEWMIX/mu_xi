"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TickerProps = {
  words: string[];
  speed?: number; // pixels per second
  className?: string;
};

export default function Ticker({ words, speed = 140, className }: TickerProps) {
  const prefersReducedMotion = useReducedMotion();
  const firstRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(800);

  const phrase = words.join(" · ");

  useLayoutEffect(() => {
    const el = firstRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width > 0) setWidth(rect.width);
  }, [phrase]);

  const duration = Math.max(1, width / speed);

  const Item = ({ content }: { content: string }) => (
    <div
      className="mx-6 inline-flex items-center gap-3 text-xl md:text-2xl font-medium"
      style={{
        backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {content}
    </div>
  );

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={prefersReducedMotion ? undefined : { x: [0, -width] }}
        transition={prefersReducedMotion ? undefined : { ease: "linear", duration, repeat: Infinity }}
      >
        <div ref={firstRef} className="flex items-center">
          <Item content={phrase} />
        </div>
        <div className="flex items-center">
          <Item content={phrase} />
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}