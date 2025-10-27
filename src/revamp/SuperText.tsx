"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  locale?: string;
};

type CycleOptions = {
  typeSpeed?: number; // ms per char
  deleteSpeed?: number; // ms per char
  hold?: number; // ms to hold full word
};

function useTypeCycle(words: string[], opts: CycleOptions = {}) {
  const { typeSpeed = 60, deleteSpeed = 35, hold = 900 } = opts;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "pause" | "delete">("type");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    if (phase === "type") {
      if (text.length < word.length) {
        timer.current = window.setTimeout(() => {
          setText(word.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        timer.current = window.setTimeout(() => setPhase("pause"), hold);
      }
    } else if (phase === "pause") {
      timer.current = window.setTimeout(() => setPhase("delete"), hold / 3);
    } else if (phase === "delete") {
      if (text.length > 0) {
        timer.current = window.setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
      } else {
        setPhase("type");
        setIndex((i) => (i + 1) % words.length);
      }
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [text, phase, index, words, typeSpeed, deleteSpeed, hold]);

  return { text, index };
}

export default function SuperText({ locale = "zh" }: Props) {
  const zh = locale === "zh";

  const headline = zh ? "沐睎网络科技" : "Creative Game Studio";
  const words = useMemo(
    () =>
      zh
        ? [
            "游戏策划",
            "玩法设计",
            "美术动画",
            "技术开发",
            "跨端上线",
            "运营增长",
          ]
        : [
            "Game Design",
            "Mechanics",
            "Art & Animation",
            "Tech Development",
            "Cross-Platform",
            "Live Ops",
          ],
    [zh]
  );

  const explain = useMemo(
    () =>
      zh
        ? [
            "从创意到玩法落地",
            "核心机制打磨与关卡设计",
            "风格化美术与高能动效",
            "引擎与前端技术实现",
            "H5/小程序/多端统一发布",
            "持续运营与数据增长",
          ]
        : [
            "From concept to playable",
            "Core mechanics and level design",
            "Stylized art and motion",
            "Engine and frontend implementation",
            "Unified delivery across platforms",
            "Live operations and growth",
          ],
    [zh]
  );

  const { text, index } = useTypeCycle(words, {
    typeSpeed: 55,
    deleteSpeed: 30,
    hold: 1000,
  });

  return (
    <div className="space-y-5 md:space-y-6 leading-tight">
      {/* Glitch headline conveys what we do at first glance */}
      <h1
        className="text-5xl md:text-7xl font-black tracking-tight mx-reveal-down"
        style={{ animationDelay: "60ms" }}
      >
        {headline}
      </h1>

      {/* Typewriter cycle for capabilities */}
      <div
        className="text-3xl md:text-5xl font-extrabold text-primary arcade-title"
        aria-live="polite"
      >
        <span className="mx-type-caret">{text}</span>
      </div>
      <div className="text-lg md:text-2xl text-muted-foreground">
        {explain[index % explain.length]}
      </div>

      {/* Keyword chips bar for immediate scannability */}
      <div className="flex flex-wrap gap-2.5 md:gap-3 pt-2">
        {words.map((w, i) => (
          <span
            key={w + i}
            className={
              "keyword-chip mx-reveal-up" +
              (i === index % words.length ? " active" : "")
            }
            style={{ animationDelay: `${80 + i * 50}ms` }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}