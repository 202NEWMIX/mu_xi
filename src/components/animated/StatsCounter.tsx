"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type StatsCounterProps = {
  stats: Stat[];
  className?: string;
};

export default function StatsCounter({ stats, className }: StatsCounterProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className ?? ""}`}> 
      {stats.map((s, i) => (
        <CounterItem key={i} label={s.label} value={s.value} suffix={s.suffix} />
      ))}
    </div>
  );
}

function CounterItem({ label, value, suffix }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.2 });
      return controls.stop;
    }
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = mv.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [mv]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-foreground">
        {display}
        {suffix ?? ""}
      </div>
      <div className="mt-2 text-muted-foreground">{label}</div>
    </div>
  );
}