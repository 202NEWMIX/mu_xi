"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import CTA from "@/src/components/CTA";
import Card from "@/src/components/Card";
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

  const zh = locale === "zh";
  const nav = [
    { label: zh ? "企业内容" : "Enterprise", href: `/${locale}#enterprise` },
    { label: zh ? "关于我们" : "About", href: `/${locale}#about` },
    { label: zh ? "联系我们" : "Contact", href: `/${locale}#contact` },
  ];

  const logos = [
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/next.svg", alt: "Next.js" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/window.svg", alt: "Window" },
    { src: "/file.svg", alt: "File" },
  ];

  const features = [
    {
      title: "爆款小游戏设计",
      description: "超轻量互动与快节奏反馈，专注提升留存与分享。",
    },
    {
      title: "跨平台开发与优化",
      description: "H5/微信/小程序统一架构，动画与性能双优。",
    },
    {
      title: "活动运营与增长",
      description: "数据驱动 A/B 测试，助力品牌营销与拉新转化。",
    },
    {
      title: "视觉动效与品牌",
      description: "高能动效与风格统一，打造鲜明品牌记忆点。",
    },
    {
      title: "系统与工具集成",
      description: "埋点、分享、排行榜、云端配置，一体化集成。",
    },
    {
      title: "安全与稳定保障",
      description: "防外挂、防刷、风控策略与异常监控全覆盖。",
    },
  ];

  const enterpriseFeatures = [
    {
      title: zh ? "品牌活动与推广" : "Brand Campaigns",
      description: zh
        ? "策划互动玩法、统一视觉与传播策略，助力品牌曝光。"
        : "Interactive activations with cohesive visuals and messaging.",
    },
    {
      title: zh ? "跨平台投放" : "Cross-Platform Delivery",
      description: zh
        ? "H5 / 微信 / 小程序统一架构，性能与体验双优。"
        : "Unified H5/WeChat/Mini Program architecture with optimized performance.",
    },
    {
      title: zh ? "增长与数据分析" : "Growth & Analytics",
      description: zh
        ? "数据驱动 A/B 测试与埋点分析，持续优化转化。"
        : "Data-driven A/B tests and analytics for conversion optimization.",
    },
    {
      title: zh ? "安全与风控" : "Security & Risk",
      description: zh
        ? "防刷、防外挂、异常监控与风控策略全覆盖。"
        : "Anti-cheat, anti-abuse, monitoring, and risk control strategies.",
    },
    {
      title: zh ? "系统与工具集成" : "System Integrations",
      description: zh
        ? "分享、排行榜、云配置与活动管理一体化集成。"
        : "Share, leaderboard, cloud config, and ops tools integrated.",
    },
    {
      title: zh ? "视觉与动效" : "Visual & Motion",
      description: zh
        ? "高能动效与风格统一，提升识别度与品牌记忆。"
        : "High-quality motion and cohesive style for brand recognition.",
    },
  ];

  const stats = [
    { label: "上线小游戏", value: 26, suffix: "+" },
    { label: "日活用户", value: 999, suffix: "+" },
    { label: "合作品牌", value: 18, suffix: "+" },
    { label: "成员经验年数", value: 8, suffix: "y" },
  ];

  return (
    <main>
      <Header nav={nav} />
      <ScrollProgressBar />
      <StickyBanner text='工于至微，臻于至美；以小游见大意，以动体验启人心' />

      {/* HERO */}
      <Aurora>
        <div className='py-14'>
          <ScrollReveal distance={36}>
            <AnimatedText title={t("title")} subtitle={t("description")} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className='mx-auto max-w-6xl px-6 mt-8 flex justify-center gap-3 md:gap-4 lg:gap-6'>
              <ShinyButton
                href={`/${locale}#works`}
                label={t("ctaPrimary")}
                variant='primary'
              />
              <ShinyButton
                href={`/${locale}#contact`}
                label={t("ctaSecondary")}
                variant='secondary'
              />
            </div>
          </ScrollReveal>
        </div>
      </Aurora>

      {/* MARQUEE */}
      <ScrollReveal>
        <Marquee text='be wild! creative! and cool!' className='py-8' />
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <Marquee
          text='大胆想象，创意无限，酷到出圈！'
          direction='right'
          className='py-4'
        />
      </ScrollReveal>

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

      {/* VISUAL SEPARATOR */}
      <ScrollReveal>
        <GradientSeparator className='my-6' />
      </ScrollReveal>

      {/* WORKS */}
      <section id='works' className='mx-auto max-w-6xl px-6 py-16'>
        <ScrollReveal>
          <h2 className='mb-8 text-3xl md:text-4xl font-bold text-foreground'>
            {t("sections.workTitle")}
          </h2>
        </ScrollReveal>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <ScrollReveal>
            <TiltCard
              title='反应堆大作战'
              description='多人实时互动 · 排行赛季'
              image='/globe.svg'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <TiltCard
              title='极速跳跃者'
              description='单局 30 秒 · 高速挑战'
              image='/window.svg'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <TiltCard
              title='迷你塔防'
              description='轻策略 · 一键分享复盘'
              image='/file.svg'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TiltCard
              title='影子跑者'
              description='触控灵敏 · 路径算法'
              image='/next.svg'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TiltCard
              title='星际搬运工'
              description='物理碰撞 · 关卡生成'
              image='/vercel.svg'
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <TiltCard
              title='像素冒险'
              description='复古像素 · 彩蛋收集'
              image='/globe.svg'
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className='mx-auto max-w-6xl px-6 py-8'>
        <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
          {t("sections.featuresTitle")}
        </h2>
        <FeatureGrid features={features} />
      </section>

      {/* PARTNERS */}
      <section className='mx-auto max-w-6xl px-6 py-12'>
        <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
          {t("sections.partnersTitle")}
        </h2>
        <LogoCloud logos={logos} />
      </section>

      {/* STATS */}
      <section className='mx-auto max-w-6xl px-6 py-16'>
        <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
          {t("sections.statsTitle")}
        </h2>
        <StatsCounter stats={stats} />
      </section>

      {/* ENTERPRISE (merged) */}
      <section id='enterprise' className='mx-auto max-w-6xl px-6 py-16'>
        <ScrollReveal>
          <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
            {zh ? "企业内容" : "Enterprise Content"}
          </h2>
        </ScrollReveal>
        <FeatureGrid features={enterpriseFeatures} />
        <div className='mt-10 flex justify-center gap-3'>
          <ShinyButton
            href={`/${locale}#contact`}
            label={zh ? "与我们合作" : "Work With Us"}
            variant='primary'
          />
          <ShinyButton
            href={`/${locale}#works`}
            label={zh ? "查看作品" : "View Works"}
            variant='secondary'
          />
        </div>
      </section>

      {/* ABOUT (merged) */}
      <section id='about' className='mx-auto max-w-6xl px-6 py-16'>
        <ScrollReveal>
          <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
            {zh ? "关于我们" : "About Us"}
          </h2>
        </ScrollReveal>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card
            title={zh ? "愿景与使命" : "Vision & Mission"}
            description={
              zh
                ? "以轻量互动与高能动效连接品牌与用户，打造令人愉悦并可持续增长的体验。"
                : "Connect brands and users via lightweight interactions and high-quality motion."
            }
          />
          <Card
            title={zh ? "价值观" : "Values"}
            description={
              zh
                ? "专注、创新、可靠。我们持续迭代，实践数据驱动与耐心打磨。"
                : "Focus, innovation, reliability. Iterative, data-driven, and craft-focused."
            }
          />
          <Card
            title={zh ? "团队" : "Team"}
            description={
              zh
                ? "经验覆盖产品、设计、前端动效与活动运营，协作高效、节奏稳定。"
                : "Experience across product, design, frontend motion, and ops. Efficient collaboration."
            }
          />
        </div>
        <div className='mt-10 flex justify-center gap-4'>
          <CTA
            href={`/${locale}#works`}
            label={zh ? "查看作品" : "See Works"}
            variant='secondary'
          />
          <CTA
            href={`/${locale}#contact`}
            label={zh ? "联系我们" : "Contact Us"}
            variant='primary'
          />
        </div>
      </section>

      {/* TECH FEEL */}
      <Orbiting>
        <div className='mt-8 text-center text-foreground/70'>
          杭州沐睎 · Mini Games · Creative Animation
        </div>
      </Orbiting>

      {/* CONTACT (merged) */}
      <section id='contact' className='mx-auto max-w-6xl px-6 py-16'>
        <ScrollReveal>
          <h2 className='mb-6 text-2xl md:text-3xl font-bold text-foreground'>
            {zh ? "联系我们" : "Contact Us"}
          </h2>
        </ScrollReveal>
        <p className='text-muted-foreground'>
          {zh
            ? "欢迎合作与咨询，可通过以下方式与我们取得联系。"
            : "We welcome collaboration and inquiries via the channels below."}
        </p>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card
            title={zh ? "电子邮箱" : "Email"}
            description={
              zh
                ? "发送邮件至：contact@example.com"
                : "Send an email to: contact@example.com"
            }
          />
          <Card
            title={zh ? "微信" : "WeChat"}
            description={
              zh
                ? "添加微信：muxi-studio（示例）"
                : "Add WeChat: muxi-studio (example)"
            }
          />
          <Card
            title={zh ? "商务合作" : "Business"}
            description={
              zh
                ? "品牌活动与小游戏合作，欢迎详谈。"
                : "Brand activations and mini-game collaborations welcome."
            }
          />
        </div>
        <div className='mt-10 flex justify-center gap-4'>
          <CTA
            href={`/${locale}#enterprise`}
            label={zh ? "了解企业内容" : "Explore Enterprise"}
            variant='secondary'
          />
          <CTA
            href={`/${locale}#works`}
            label={zh ? "查看作品" : "View Works"}
            variant='primary'
          />
        </div>
      </section>

      <Footer copyright='© 2025 Hangzhou Mu Xi' links={nav} />
    </main>
  );
}
