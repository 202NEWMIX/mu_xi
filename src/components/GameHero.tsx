import React from "react";

type GameHeroProps = {
  locale: string;
};

export default function GameHero({ locale }: GameHeroProps) {
  const zh = locale === "zh";
  const lines = zh
    ? ["大胆！", "有创意！", "很酷！"]
    : ["BE WILD!", "CREATIVE!", "AND COOL!"];

  return (
    <section className='relative min-h-[100svh] bg-background text-foreground overflow-hidden flex items-center'>
      {/* Top-right contact button (kept, no gradient) */}
      <a
        href={`/${locale}#contact`}
        className='absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center rounded-full bg-primary text-on-primary px-4 py-2 shadow-sm hover:opacity-90 transition-colors'
      >
        {zh ? "联系" : "Contact"}
        <span className='ml-2'>→</span>
      </a>

      {/* Main content */}
      <div className='mx-auto max-w-6xl px-6 pt-24 md:pt-28 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Three-line bold text */}
        <div className='space-y-3 md:space-y-4'>
          <div className='text-5xl md:text-7xl font-black uppercase tracking-tight'>{lines[0]}</div>
          <div className='text-5xl md:text-7xl font-black uppercase tracking-tight text-green-500'>{lines[1]}</div>
          <div className='text-5xl md:text-7xl font-black uppercase tracking-tight'>{lines[2]}</div>
        </div>

        {/* Simple geometric decoration on the right */}
        <div className='relative h-56 md:h-80'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-40 h-40 md:w-56 md:h-56 border-2 border-foreground/40 rotate-12' />
          </div>
        </div>
      </div>
    </section>
  );
}