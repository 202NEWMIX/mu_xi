"use client";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import CTA from "@/src/components/CTA";

export type CaseItem = {
  title: string;
  description: string;
  image: StaticImageData; // local asset
  align?: "left" | "right"; // image position on desktop
  tags?: string[]; // optional keyword chips
  ctaHref?: string; // optional case link
  ctaLabel?: string; // optional button label
};

type Props = {
  items: CaseItem[];
  variant?: "split" | "stack"; // layout variant
};

export default function CasesSplit({ items, variant = "split" }: Props) {
  const renderCardInner = (item: CaseItem, i: number) => {
    const right = (item.align ?? (i % 2 === 0 ? "right" : "left")) === "right";
    const imageAnim = right ? "mx-reveal-right-strong" : "mx-reveal-left-strong";
    return (
      <div className="relative group grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">

        {/* Image block */}
        <div className={right ? "md:order-2" : "md:order-1"}>
          <div className="relative">
            {/* Soft gradient glow, no shadow */}
            <span
              className={`absolute ${right ? "-right-6 md:-right-10" : "-left-6 md:-left-10"} top-6 md:top-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary/12 blur-2xl -z-10`}
            />
            <Image
              src={item.image}
              alt={item.title}
              width={720}
              height={420}
              className={`w-full max-w-[720px] mx-auto rounded-xl md:rounded-2xl border border-border object-contain ${imageAnim} transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:rotate-[1deg]`}
              style={{ animationDelay: right ? "160ms" : "180ms" }}
            />
          </div>
        </div>

        {/* Text block */}
        <div className={right ? "md:order-1" : "md:order-2"}>
          <div className="rounded-xl border border-border bg-background/80 backdrop-blur p-6 md:p-7">
            <div className="flex items-center justify-between">
              <h3
                className="text-xl md:text-2xl font-bold text-foreground mx-reveal-down"
                style={{ animationDelay: "60ms" }}
              >
                {item.title}
              </h3>
              <span className="text-xs md:text-sm px-2.5 py-1 rounded-full border border-border bg-card/50 text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p
              className="mt-3 text-muted-foreground mx-reveal-up"
              style={{ animationDelay: "120ms" }}
            >
              {item.description}
            </p>

            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t, j) => (
                  <span
                    key={t + j}
                    className="px-2.5 py-1 text-xs rounded-full border border-border bg-card/45 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {item.ctaHref && (
              <div className="mt-5 mx-reveal-up" style={{ animationDelay: "160ms" }}>
                <CTA href={item.ctaHref} label={item.ctaLabel ?? "查看案例"} variant="secondary" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Ensure hooks are called unconditionally at the top level
  const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stackProgress, setStackProgress] = useState(0); // 0..items.length

  useEffect(() => {
    // Only activate listener when using stack variant
    if (variant !== "stack") return;
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const vh = window.innerHeight;
      const start = el.offsetTop;
      const end = start + el.offsetHeight - vh;
      const y = window.scrollY;
      const t = clamp((y - start) / Math.max(1, end - start)); // 0..1
      setStackProgress(t * items.length);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length, variant]);

  if (variant === "stack") {
    // ReactBits-style Scroll Stack: single sticky viewport, overlapping cards transform by global progress
    return (
      <div ref={containerRef} className="relative" style={{ height: `${items.length * 130}svh` }}>
        {/* ambient gradient to avoid whitespace */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-28 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="sticky top-0 min-h-[100svh]">
          <div className="relative h-[100svh]">
            {items.map((item, i) => {
              const p = clamp(stackProgress - i); // 0..1 per card
              const translateY = -60 * p;
              const scale = 1 - 0.08 * p;
              const opacity = 1 - 0.12 * p;
              const z = (items.length + 1) - i;
              const right = (item.align ?? (i % 2 === 0 ? "right" : "left")) === "right";
              const imageAnim = right ? "mx-reveal-right-strong" : "mx-reveal-left-strong";
              return (
                <div
                  key={item.title + i}
                  className="absolute inset-0 flex items-center will-change-transform"
                  style={{ transform: `translateY(${translateY}px) scale(${scale})`, opacity, zIndex: z }}
                >
                  <div className="mx-auto max-w-6xl w-full px-6 md:px-8">
                    <div className="rounded-2xl border border-border bg-background/85 backdrop-blur p-6 md:p-8">
                      <div className="relative group grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
                        {/* Image */}
                        <div className={right ? "md:col-span-7 md:order-2" : "md:col-span-7 md:order-1"}>
                          <div className="relative">
                            <span className={`absolute ${right ? "-right-6 md:-right-10" : "-left-6 md:-left-10"} top-6 md:top-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary/12 blur-2xl -z-10`} />
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={900}
                              height={520}
                              className={`w-full max-w-[900px] mx-auto rounded-2xl border border-border object-contain ${imageAnim}`}
                              style={{ animationDelay: right ? "160ms" : "180ms" }}
                            />
                          </div>
                        </div>

                        {/* Text */}
                        <div className={right ? "md:col-span-5 md:order-1" : "md:col-span-5 md:order-2"}>
                          <div className="rounded-xl border border-border bg-card/45 p-6 md:p-7">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                              <span className="text-sm md:text-base font-semibold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                            </div>
                            <p className="mt-3 text-muted-foreground">{item.description}</p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags.map((t, j) => (
                                  <span key={t + j} className="px-2.5 py-1 text-xs rounded-full border border-border bg-card/40 text-muted-foreground">{t}</span>
                                ))}
                              </div>
                            )}
                            {item.ctaHref && (
                              <div className="mt-5">
                                <CTA href={item.ctaHref} label={item.ctaLabel ?? "查看案例"} variant="secondary" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Default split layout
  return (
    <div className="space-y-12 md:space-y-16">
      {items.map((item, i) => (
        <div key={item.title + i}>{renderCardInner(item, i)}</div>
      ))}
    </div>
  );
}