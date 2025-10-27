'use client'

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Section from "@/src/components/Section";
import CTA from "@/src/components/CTA";
import Card from "@/src/components/Card";

export default function Test() {
  const t = useTranslations("Test");
  const params = useParams() as { locale?: string };
  const locale = params?.locale ?? "zh";

  const nav = [
    { label: "Home", href: `/${locale}` },
    { label: "Test", href: `/${locale}/test` },
  ];

  return (
    <main>
      <Header nav={nav} />
      <Hero
        title={t("title")}
        subtitle={t("description")}
        primaryAction={{ label: "Get Started", href: `/${locale}` }}
        secondaryAction={{ label: "Contact", href: `/${locale}` }}
      />

      <Section title="常用组件展示" subtitle="Header / Footer / Hero / Section / CTA / Card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="卡片示例 A" description="这是一张使用全局 Tokens 的卡片">
            <CTA href={`/${locale}`} label="查看详情" variant="ghost" />
          </Card>
          <Card title="卡片示例 B" description="支持可选链接包装" href={`/${locale}`}/>
          <Card title="卡片示例 C" description="可自定义子内容">
            <div className="text-sm text-foreground/70">更多内容占位</div>
          </Card>
        </div>

        <div className="mt-12 flex gap-4">
          <CTA href={`/${locale}`} label="Primary CTA" variant="primary" />
          <CTA href={`/${locale}`} label="Secondary CTA" variant="secondary" />
          <CTA href={`/${locale}`} label="Ghost CTA" variant="ghost" />
        </div>
      </Section>

      <Footer copyright="© 2025 Mu Xi" links={nav} />
    </main>
  );
}
