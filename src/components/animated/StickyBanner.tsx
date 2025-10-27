"use client";
import { motion } from "framer-motion";

type StickyBannerProps = {
  text: string;
};

export default function StickyBanner({ text }: StickyBannerProps) {
  return (
    <section className="sticky top-0 z-20 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-2">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-sm text-foreground/70">{text}</span>
        </motion.div>
      </div>
    </section>
  );
}