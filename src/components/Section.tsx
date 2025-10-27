import React from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  centered?: boolean;
};

export default function Section({ title, subtitle, children, centered }: SectionProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {(title || subtitle) && (
          <div className={centered ? "text-center" : "text-left"}>
            {title && <h2 className="text-3xl font-semibold text-foreground">{title}</h2>}
            {subtitle && <p className="mt-2 text-foreground/70">{subtitle}</p>}
          </div>
        )}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}