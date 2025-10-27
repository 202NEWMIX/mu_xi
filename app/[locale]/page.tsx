'use client';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Aurora from "@/src/components/animated/Aurora";
import AnimatedText from "@/src/components/animated/AnimatedText";
import ShinyButton from "@/src/components/animated/ShinyButton";
import Orbiting from "@/src/components/animated/Orbiting";
import Marquee from "@/src/components/animated/Marquee";
import GradientSeparator from "@/src/components/animated/GradientSeparator";
import TiltCard from "@/src/components/animated/TiltCard";
import StickyBanner from "@/src/components/animated/StickyBanner";
import LogoCloud from "@/src/components/animated/LogoCloud";
import StatsCounter from "@/src/components/animated/StatsCounter";
import FeatureGrid from "@/src/components/animated/FeatureGrid";
import ScrollReveal from "@/src/components/animated/ScrollReveal";
import Parallax from "@/src/components/animated/Parallax";
import ScrollProgressBar from "@/src/components/animated/ScrollProgressBar";

export default function Home() {
  const t = useTranslations("Home");
  const params = useParams() as { locale?: string };
  const locale = params?.locale ?? "zh";

  const nav = [
    { label: "Home", href: `/${locale}` },
    { label: "Test", href: `/${locale}/test` },
    { label: "Cases", href: `/${locale}/cases` },
  ];

  const logos = [
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/next.svg", alt: "Next.js" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/window.svg", alt: "Window" },
    { src: "/file.svg", alt: "File" },
  ];

  const features = [
    { title: "爆款小游戏设计", description: "超轻量互动与快节奏反馈，专注提升留存与分享。" },
    { title: "跨平台开发与优化", description: "H5/微信/小程序统一架构，动画与性能双优。" },
    { title: "活动运营与增长", description: "数据驱动 A/B 测试，助力品牌营销与拉新转化。" },
    { title: "视觉动效与品牌", description: "高能动效与风格统一，打造鲜明品牌记忆点。" },
    { title: "系统与工具集成", description: "埋点、分享、排行榜、云端配置，一体化集成。" },
    { title: "安全与稳定保障", description: "防外挂、防刷、风控策略与异常监控全覆盖。" },
  ];

  const stats = [
    { label: "上线小游戏", value: 26, suffix: "+" },
    { label: "日活用户", value: 120000, suffix: "+" },
    { label: "合作品牌", value: 18, suffix: "+" },
    { label: "成员经验年数", value: 8, suffix: "y" },
  ];

  return (
    <main>
      <Header nav={nav} />
      <ScrollProgressBar />
      <StickyBanner text="工于至微，臻于至美；以小游见大意，以动画启人心" />

      {/* HERO */}
      <Aurora>
        <div className="py-14">
          <ScrollReveal distance={36}>
            <AnimatedText title={t("title")} subtitle={t("description")} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mx-auto max-w-6xl px-6 mt-8 flex justify-center gap-3 md:gap-4 lg:gap-6">
              <ShinyButton href={`/${locale}/test`} label={t("ctaPrimary")} variant="primary" />
              <ShinyButton href={`/${locale}/test`} label={t("ctaSecondary")} variant="secondary" />
            </div>
          </ScrollReveal>
        </div>
      </Aurora>

      {/* MARQUEE */}
      <ScrollReveal>
        <Marquee text="be wild! creative! and cool!" className="py-8" />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <Marquee text="大胆想象，创意无限，酷到出圈！" direction="right" className="py-4" />
      </ScrollReveal>

      {/* PORTRAIT STRIP (placeholder circles) */}
      <Parallax amount={30}>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square rounded-full border border-border bg-card shadow-sm" />
              ))}
            </div>
          </ScrollReveal>
        </section>
      </Parallax>

      {/* VISUAL SEPARATOR */}
      <ScrollReveal>
        <GradientSeparator className="my-6" />
      </ScrollReveal>

      {/* WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-foreground">{t("sections.workTitle")}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal><TiltCard title="反应堆大作战" description="多人实时互动 · 排行赛季" image="/globe.svg" /></ScrollReveal>
          <ScrollReveal delay={0.05}><TiltCard title="极速跳跃者" description="单局 30 秒 · 高速挑战" image="/window.svg" /></ScrollReveal>
          <ScrollReveal delay={0.1}><TiltCard title="迷你塔防" description="轻策略 · 一键分享复盘" image="/file.svg" /></ScrollReveal>
          <ScrollReveal delay={0.15}><TiltCard title="影子跑者" description="触控灵敏 · 路径算法" image="/next.svg" /></ScrollReveal>
          <ScrollReveal delay={0.2}><TiltCard title="星际搬运工" description="物理碰撞 · 关卡生成" image="/vercel.svg" /></ScrollReveal>
          <ScrollReveal delay={0.25}><TiltCard title="像素冒险" description="复古像素 · 彩蛋收集" image="/globe.svg" /></ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground">{t("sections.featuresTitle")}</h2>
        <FeatureGrid features={features} />
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground">{t("sections.partnersTitle")}</h2>
        <LogoCloud logos={logos} />
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground">{t("sections.statsTitle")}</h2>
        <StatsCounter stats={stats} />
      </section>

      {/* TECH FEEL */}
      <Orbiting>
        <div className="mt-8 text-center text-foreground/70">
          杭州沐睎 · Mini Games · Creative Animation
        </div>
      </Orbiting>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <div className="text-xl text-foreground/80 mb-6">我们一起做些很酷的事 :)</div>
        <ShinyButton href={`/${locale}/test`} label={t("ctaSecondary")} variant="primary" />
      </section>

      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}