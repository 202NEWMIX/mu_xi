"use client";
import React from "react";
import { motion } from "framer-motion";

type OrbitingProps = {
  children?: React.ReactNode;
};

export default function Orbiting({ children }: OrbitingProps) {
  const radii = [80, 120, 160];
  const durations = [12, 16, 20];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="relative h-64">
        {/* Decorative orbits behind content */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {radii.map((r) => (
            <div
              key={`ring-${r}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
              style={{ width: r * 2, height: r * 2 }}
            />
          ))}

          {[0, 90, 180, 270].map((deg, i) => (
            <motion.div
              key={`orb-${deg}-${radii[i % radii.length]}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              animate={{ rotate: 360 }}
              transition={{ duration: durations[i % durations.length], repeat: Infinity, ease: "linear" }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  transform: `rotate(${deg}deg) translateX(${radii[i % radii.length]}px)`,
                  background: "var(--color-secondary)",
                  boxShadow: "0 0 12px rgba(34,211,238,0.6)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative z-10 text-center">{children}</div>
    </section>
  );
}