import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Section from "@/src/components/Section";
import FeatureGrid from "@/src/components/animated/FeatureGrid";
import ShinyButton from "@/src/components/animated/ShinyButton";
import { getLocale } from "next-intl/server";

export default async function EnterprisePage() {
  const locale = await getLocale();
  const zh = locale === "zh";
  const nav = [
    { label: zh ? "企业内容" : "Enterprise", href: `/${locale}#enterprise` },
    { label: zh ? "关于我们" : "About", href: `/${locale}#about` },
    { label: zh ? "联系我们" : "Contact", href: `/${locale}#contact` },
  ];

  const features = [
    { title: zh ? "品牌活动与推广" : "Brand Campaigns", description: zh ? "策划互动玩法、统一视觉与传播策略，助力品牌曝光。" : "Interactive activations with cohesive visuals and messaging." },
    { title: zh ? "跨平台投放" : "Cross-Platform Delivery", description: zh ? "H5 / 微信 / 小程序统一架构，性能与体验双优。" : "Unified H5/WeChat/Mini Program architecture with optimized performance." },
    { title: zh ? "增长与数据分析" : "Growth & Analytics", description: zh ? "数据驱动 A/B 测试与埋点分析，持续优化转化。" : "Data-driven A/B tests and analytics for conversion optimization." },
    { title: zh ? "安全与风控" : "Security & Risk", description: zh ? "防刷、防外挂、异常监控与风控策略全覆盖。" : "Anti-cheat, anti-abuse, monitoring, and risk control strategies." },
    { title: zh ? "系统与工具集成" : "System Integrations", description: zh ? "分享、排行榜、云配置与活动管理一体化集成。" : "Share, leaderboard, cloud config, and ops tools integrated." },
    { title: zh ? "视觉与动效" : "Visual & Motion", description: zh ? "高能动效与风格统一，提升识别度与品牌记忆。" : "High-quality motion and cohesive style for brand recognition." },
  ];

  return (
    <main>
      <Header nav={nav} />
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">{zh ? "企业内容" : "Enterprise Content"}</h1>
        <p className="mt-3 text-muted-foreground">{zh ? "面向企业的内容与服务能力，覆盖从策划、设计到落地与增长的全流程。" : "Enterprise-focused content and capabilities across planning, design, delivery and growth."}</p>
        <div className="mt-8">
          <FeatureGrid features={features} />
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <ShinyButton href={`/${locale}#contact`} label={zh ? "与我们合作" : "Work With Us"} variant="primary" />
          <ShinyButton href={`/${locale}#works`} label={zh ? "查看作品" : "View Works"} variant="secondary" />
        </div>
      </section>
      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}