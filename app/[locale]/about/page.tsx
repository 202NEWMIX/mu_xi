import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Section from "@/src/components/Section";
import CTA from "@/src/components/CTA";
import Card from "@/src/components/Card";
import { getLocale } from "next-intl/server";

export default async function AboutPage() {
  const locale = await getLocale();
  const zh = locale === "zh";
  const nav = [
    { label: zh ? "企业内容" : "Enterprise", href: `/${locale}#enterprise` },
    { label: zh ? "关于我们" : "About", href: `/${locale}#about` },
    { label: zh ? "联系我们" : "Contact", href: `/${locale}#contact` },
  ];

  return (
    <main>
      <Header nav={nav} />
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">{zh ? "关于我们" : "About Us"}</h1>
        <p className="mt-3 text-muted-foreground">{zh ? "我们专注于创意小游戏与动效体验，追求微处中的精致与整体上的一致。" : "We craft creative mini-game experiences, with meticulous details and cohesive design."}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title={zh ? "愿景与使命" : "Vision & Mission"} description={zh ? "以轻量互动与高能动效连接品牌与用户，打造令人愉悦并可持续增长的体验。" : "Connect brands and users via lightweight interactions and high-quality motion."} />
          <Card title={zh ? "价值观" : "Values"} description={zh ? "专注、创新、可靠。我们持续迭代，实践数据驱动与耐心打磨。" : "Focus, innovation, reliability. Iterative, data-driven, and craft-focused."} />
          <Card title={zh ? "团队" : "Team"} description={zh ? "经验覆盖产品、设计、前端动效与活动运营，协作高效、节奏稳定。" : "Experience across product, design, frontend motion, and ops. Efficient collaboration."} />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <CTA href={`/${locale}#works`} label={zh ? "查看作品" : "See Works"} variant="secondary" />
          <CTA href={`/${locale}#contact`} label={zh ? "联系我们" : "Contact Us"} variant="primary" />
        </div>
      </section>
      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}