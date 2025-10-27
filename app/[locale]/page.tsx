"use client";
import { useParams } from "next/navigation";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactSection from "@/src/components/ContactSection";
import HeroSplash from "@/src/revamp/HeroSplash";
import ProductGrid from "@/src/revamp/ProductGrid";
import RevealOnScroll from "@/src/revamp/RevealOnScroll";
import CasesSplit, { CaseItem } from "@/src/revamp/CasesSplit";
import i2 from "@/src/assets/i2.png";
import i3 from "@/src/assets/i3.png";
import i5 from "@/src/assets/i5.png";
import i6 from "@/src/assets/i6.png";
// import ScrollProgressBar from "@/src/components/animated/ScrollProgressBar";

export default function Home() {
  const params = useParams() as { locale?: string };
  const locale = params?.locale ?? "zh";

  const zh = locale === "zh";
  const nav = [
    { label: zh ? "企业内容" : "Enterprise", href: `/${locale}#enterprise` },
    { label: zh ? "关于我们" : "About", href: `/${locale}#about` },
    { label: zh ? "联系我们" : "Contact", href: `/${locale}#contact` },
  ];

  const products = [
    { title: zh ? "平台类小游戏" : "Platform Mini-Games", image: "/vercel.svg" },
    { title: zh ? "互动活动页" : "Interactive Campaign Pages", image: "/next.svg" },
    { title: zh ? "跨端投放方案" : "Cross-Platform Delivery", image: "/globe.svg" },
    { title: zh ? "数据与增长" : "Data & Growth", image: "/window.svg" },
    { title: zh ? "安全与风控" : "Security & Risk", image: "/file.svg" },
    { title: zh ? "工具与集成" : "Tools & Integrations", image: "/next.svg" },
  ];

  const cases: CaseItem[] = [
    {
      title: zh ? "互动活动设计" : "Interactive Campaign Design",
      description: zh
        ? "针对品牌活动的交互与动效方案，突出节奏与趣味性。"
        : "Interaction and motion design for brand campaigns with playful pacing.",
      image: i2,
      align: "right",
      tags: zh ? ["互动", "动效", "创意", "H5", "视觉"] : ["Interactive", "Motion", "Creative", "H5", "Visual"],
      ctaHref: `/${locale}/cases`,
      ctaLabel: zh ? "查看案例" : "View Case",
    },
    {
      title: zh ? "平台小游戏" : "Platform Mini-Game",
      description: zh
        ? "快速接入的小游戏模块，支持多端与模板化复用。"
        : "Plug-in mini-game modules, multi-platform ready and template-based.",
      image: i3,
      align: "left",
      tags: zh ? ["模板", "多端", "上线", "性能", "玩法"] : ["Template", "Multi-Platform", "Launch", "Performance", "Mechanics"],
      ctaHref: `/${locale}/cases`,
      ctaLabel: zh ? "查看案例" : "View Case",
    },
    {
      title: zh ? "数据分析与增长" : "Analytics & Growth",
      description: zh
        ? "数据采集与增长策略结合，强调转化与留存指标。"
        : "Data collection coupled with growth tactics, focusing on conversion and retention.",
      image: i5,
      align: "right",
      tags: zh ? ["埋点", "转化", "留存", "A/B", "数据"] : ["Analytics", "Conversion", "Retention", "A/B", "Data"],
      ctaHref: `/${locale}/cases`,
      ctaLabel: zh ? "查看案例" : "View Case",
    },
    {
      title: zh ? "风控与合规" : "Risk & Compliance",
      description: zh
        ? "活动风控与合规保障，确保投放安全与稳定。"
        : "Risk control and compliance to keep deliveries safe and stable.",
      image: i6,
      align: "left",
      tags: zh ? ["风控", "防刷", "合规", "监控"] : ["Risk", "Anti-Abuse", "Compliance", "Monitoring"],
      ctaHref: `/${locale}/cases`,
      ctaLabel: zh ? "查看案例" : "View Case",
    },
  ];

  const tags = zh
    ? ["轻量", "小游戏", "增长", "数据", "安全", "集成", "跨端", "有趣"]
    : ["Lightweight", "Mini-Games", "Growth", "Data", "Security", "Integrations", "Cross-Platform", "Fun"];

  return (
    <main>
      {/*
      <Header
        nav={nav}
        className='fixed top-0 left-0 z-40 w-full bg-background/80 backdrop-blur border-b border-border'
      />
      */}

      <HeroSplash locale={locale} />


      {/* PORTRAIT STRIP (placeholder circles) */}
      {/* <Parallax amount={30}>
        <section className='mx-auto max-w-6xl px-6 py-16'>
          <ScrollReveal>
            <div className='grid grid-cols-4 md:grid-cols-8 gap-4'>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className='aspect-square rounded-full border border-border bg-card shadow-sm'
                />
              ))}
            </div>
          </ScrollReveal>
        </section>
      </Parallax> */}


      {/* KEYWORDS STRIP (marquee) */}
      <section className='mx-auto max-w-6xl px-6 pt-6 md:pt-8'>
        <div className='overflow-hidden'>
          <div className='marquee-track' style={{ ['--marquee-duration' as any]: '24s' }}>
            {[...tags, ...tags].map((t, i) => (
              <span key={i} className='mr-8 text-muted-foreground'>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS (split showcase) */}
      <section id='works' className='mx-auto max-w-6xl px-6 py-16 md:py-24'>
        <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground mx-reveal-down' style={{animationDelay: '80ms'}}>
          {zh ? "作品与案例" : "Works & Cases"}
        </h2>
        <RevealOnScroll delay={120}>
          <CasesSplit items={cases} />
        </RevealOnScroll>
      </section>











      

      {/* Contact section embedded in Home */}
      <ContactSection locale={locale} zh={zh} withAnchor />

      <Footer copyright='© 2025 Hangzhou Mu Xi' links={nav} />
    </main>
  );
}
