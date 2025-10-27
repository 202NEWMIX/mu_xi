"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type TiltCardProps = {
  title: string;
  description?: string;
  image?: string;
  className?: string;
};

export default function TiltCard({ title, description, image, className }: TiltCardProps) {
  const x = useMotionValue(0.5); // normalized 0..1
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);
  const glow = useTransform(x, [0, 1], [0.8, 1]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    x.set(px);
    y.set(py);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      className={`group relative rounded-2xl border border-border bg-card backdrop-blur-md ${className ?? ""}`}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="will-change-transform rounded-2xl p-6"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {image ? (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
          </div>
        ) : null}
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        {description ? <p className="mt-2 text-foreground/70">{description}</p> : null}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: glow,
          background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 40%)",
        }}
      />
    </motion.div>
  );
}