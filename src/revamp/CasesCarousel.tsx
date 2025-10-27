"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CTA from "@/src/components/CTA";
import { CaseItem } from "@/src/revamp/CasesSplit";

type Props = {
  items: CaseItem[];
};

export default function CasesCarousel({ items }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const getSlideW = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    return (first?.offsetWidth ?? track.clientWidth) + gap;
  };

  const snapTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const w = getSlideW();
    track.scrollTo({ left: Math.max(0, Math.min(idx, items.length - 1)) * w, behavior: "smooth" });
  };

  const prev = () => snapTo(index - 1);
  const next = () => snapTo(index + 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const w = Math.max(1, getSlideW());
      const idx = Math.round(track.scrollLeft / w);
      setIndex(Math.min(items.length - 1, Math.max(0, idx)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, [items.length]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1 focus:outline-none"
        aria-label="作品与案例轮播"
      >
        {items.map((item, i) => {
          const right = (item.align ?? (i % 2 === 0 ? "right" : "left")) === "right";
          return (
            <article
              key={item.title + i}
              className="snap-center shrink-0 w-[85vw] md:w-[70vw]"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${items.length}`}
            >
              <div className="rounded-2xl border border-border bg-background/85 backdrop-blur p-6 md:p-8">
                <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
                  {/* Image */}
                  <div className={right ? "md:col-span-7 md:order-2" : "md:col-span-7 md:order-1"}>
                    <div className="relative">
                      <span className={`absolute ${right ? "-right-6 md:-right-10" : "-left-6 md:-left-10"} top-6 md:top-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary/12 blur-2xl -z-10`} />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={520}
                        className="w-full max-w-[900px] mx-auto rounded-2xl border border-border object-contain"
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
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div className="pointer-events-none">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
          <button
            type="button"
            onClick={prev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-90 w-9 h-9 md:w-10 md:h-10 shadow-sm"
            aria-label="上一条"
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-3">
          <button
            type="button"
            onClick={next}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-primary text-on-primary hover:opacity-90 w-9 h-9 md:w-10 md:h-10 shadow-sm"
            aria-label="下一条"
          >
            ›
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`h-2.5 w-2.5 rounded-full border ${i === index ? "bg-primary border-primary" : "bg-border"}`}
            aria-label={`跳转到第 ${i + 1} 项`}
          />
        ))}
      </div>
    </div>
  );
}