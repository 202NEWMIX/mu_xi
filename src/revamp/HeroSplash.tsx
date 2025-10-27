"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SuperText from "./SuperText";
import CTA from "@/src/components/CTA";
import heroImg from "@/src/assets/hero.png";

type Props = {
  locale?: string;
};

export default function HeroSplash({ locale = "zh" }: Props) {
  const zh = locale === "zh";

  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = rootRef.current as HTMLElement | null;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx-hover-x", `${x}px`);
      el.style.setProperty("--mx-hover-y", `${y}px`);
    };
    const onEnter = () => el.style.setProperty("--mx-hover-opacity", "1");
    const onLeave = () => el.style.setProperty("--mx-hover-opacity", "0");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={rootRef as any}
      className=
        "relative hero-game min-h-[100svh] pt-24 md:pt-28 flex items-center bg-background text-foreground overflow-hidden"
    >
      {/* Top-right contact button removed per request */}

      {/* Two-column layout: left text, right image */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: hero text */}
        <div className="max-w-5xl md:pr-8">
          <SuperText locale={locale} />
          <div className="mt-6 mx-reveal-up" style={{ animationDelay: "160ms" }}>
            <CTA
              href={`/${locale}/contact`}
              label={zh ? "联系我们" : "Contact Us"}
              variant="primary"
            />
          </div>
        </div>

        {/* Right: showcase image */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src={heroImg}
            alt={zh ? "应用展示图片" : "App showcase image"}
            width={520}
            height={520}
            priority
            className="w-80 h-80 md:w-[520px] md:h-[520px] object-contain rounded-xl mx-reveal-right-strong"
            style={{ animationDelay: "220ms" }}
          />
        </div>
      </div>

      {/* Decorative blocks removed in favor of right image */}

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground mx-scroll-hint mx-reveal-up" style={{animationDelay: "360ms"}}>
        {zh ? "下滑查看作品" : "Scroll to view works"}
        <span className="arrow">↓</span>
      </div>
    </section>
  );
}