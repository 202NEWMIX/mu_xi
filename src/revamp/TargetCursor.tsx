"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  targetSelector?: string;
  spinDuration?: number; // seconds
  hideDefaultCursor?: boolean;
};

export default function TargetCursor({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = false,
}: Props) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const targetElRef = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (skip touch)
    const fine = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const body = document.body;
    if (hideDefaultCursor) body.classList.add("cursor-none");

    const onMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      const ring = ringRef.current;
      const dot = dotRef.current;
      if (!cursor || !ring || !dot) return;

      const target = targetElRef.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        cursor.style.transform = `translate(${cx - 16}px, ${cy - 16}px)`; // center (cursor size ~32)
        ring.style.transform = "scale(1.15)";
        dot.style.transform = "scale(0.85)";
        ring.style.opacity = "1";
      } else {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        ring.style.transform = "scale(1)";
        dot.style.transform = "scale(1)";
        ring.style.opacity = "0.9";
      }
    };

    const onEnter = (el: HTMLElement) => {
      targetElRef.current = el;
    };
    const onLeave = () => {
      targetElRef.current = null;
    };

    const targets = Array.from(document.querySelectorAll<HTMLElement>(targetSelector));
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => onEnter(el));
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", () => onEnter(el));
        el.removeEventListener("mouseleave", onLeave);
      });
      if (hideDefaultCursor) body.classList.remove("cursor-none");
    };
  }, [enabled, targetSelector, hideDefaultCursor]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="mx-target-cursor fixed top-0 left-0 z-[1000] pointer-events-none"
      style={{
        // initial position to avoid FOUC in top-left
        transform: "translate(-100px, -100px)",
      }}
    >
      <div
        ref={ringRef}
        className="mx-target-cursor-ring"
        style={{ animationDuration: `${spinDuration}s` }}
      />
      <div ref={dotRef} className="mx-target-cursor-dot" />
    </div>
  );
}