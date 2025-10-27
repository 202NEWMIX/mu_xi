"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Logo = { src: string; alt: string };

type LogoCloudProps = {
  logos: Logo[];
  speed?: number; // px/s
  className?: string;
  itemClassName?: string;
};

export default function LogoCloud({ logos, speed = 80, className, itemClassName }: LogoCloudProps) {
  const prefersReducedMotion = useReducedMotion();
  const firstRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(600);

  useLayoutEffect(() => {
    const el = firstRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width > 0) setWidth(rect.width);
  }, [logos]);

  const duration = Math.max(1, width / speed);

  const Row = ({ items }: { items: Logo[] }) => (
    <div className="flex items-center gap-8">
      {items.map((logo, i) => (
        <div key={i} className={`opacity-80 hover:opacity-100 transition-opacity ${itemClassName ?? ""}`}>
          <img src={logo.src} alt={logo.alt} className="h-8 w-auto md:h-10" />
        </div>
      ))}
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
          <Row items={logos} />
        </div>
        <div className="flex items-center">
          <Row items={logos} />
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}