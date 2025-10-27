"use client";
import React from "react";

type Item = {
  title: string;
  image: string;
  href?: string;
};

type Props = {
  items: Item[];
};

export default function ProductGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.href ?? "#"}
          className="group relative rounded-xl border border-border bg-card shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-[2px] hover:border-primary transition-transform mx-card-sheen"
        >
          <span className="card-badge absolute top-3 right-3">PLAY</span>
          <div className="h-40 md:h-52 bg-muted/40 flex items-center justify-center">
            {/* Use object-contain for logo-like placeholder images */}
            <img
              src={item.image}
              alt={item.title}
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
          <div className="p-4">
            <div className="text-base md:text-lg font-semibold text-foreground">
              {item.title}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}