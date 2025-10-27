import React from "react";

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  children?: React.ReactNode;
};

export default function Card({ title, description, href, children }: CardProps) {
  const content = (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-foreground/70">{description}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}