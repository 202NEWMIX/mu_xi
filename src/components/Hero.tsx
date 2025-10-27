import Link from "next/link";
import ShinyButton from "./animated/ShinyButton";

type Action = { label: string; href: string };

type HeroProps = {
  title: string;
  subtitle?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
};

export default function Hero({ title, subtitle, primaryAction, secondaryAction }: HeroProps) {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground">{subtitle}</p>
        )}
        {(primaryAction || secondaryAction) && (
          <div className="mt-10 flex items-center justify-center gap-4">
            {primaryAction && (
              <ShinyButton href={primaryAction.href} label={primaryAction.label} variant="primary" />
            )}
            {secondaryAction && (
              <ShinyButton href={secondaryAction.href} label={secondaryAction.label} variant="secondary" />
            )}
          </div>
        )}
      </div>
    </section>
  );
}