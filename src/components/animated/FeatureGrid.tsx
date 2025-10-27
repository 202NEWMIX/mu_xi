"use client";
import React from "react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type FeatureGridProps = {
  features: Feature[];
  className?: string;
};

export default function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className ?? ""}`}>
      {features.map((f, i) => (
        <motion.div
          key={i}
          className="rounded-2xl border border-border bg-card p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80">
              {f.icon ?? "✦"}
            </div>
            <div className="text-xl font-semibold text-foreground">{f.title}</div>
          </div>
          <div className="mt-3 text-foreground/70">{f.description}</div>
        </motion.div>
      ))}
    </div>
  );
}