"use client";
import React from "react";

type TiltCardProps = {
  title: string;
  description?: string;
  image?: string;
  className?: string;
};

export default function TiltCard({ title, description, image, className }: TiltCardProps) {
  return (
    <div
      className={`group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow ${className ?? ""}`}
    >
      {image ? (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
        </div>
      ) : null}
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      {description ? <p className="mt-2 text-foreground/70">{description}</p> : null}
    </div>
  );
}