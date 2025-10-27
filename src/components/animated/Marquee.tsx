"use client";
import React from "react";

type MarqueeProps = {
  text: string;
  className?: string;
  direction?: "left" | "right";
  duration?: number; // seconds
};

export default function Marquee({ text, className, direction = "left", duration = 14 }: MarqueeProps) {
  const trackClass = direction === "right" ? "marquee-reverse" : "";
  const trackStyle = {
    ["--marquee-duration" as any]: `${duration}s`,
  } as React.CSSProperties;

  const textStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className={`marquee-track ${trackClass}`} style={trackStyle}>
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="mx-8 text-xl md:text-2xl font-bold"
            style={textStyle}
            aria-hidden={i > 0}
          >
            {text}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}