import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Section from "@/src/components/Section";
import Card from "@/src/components/Card";
import CTA from "@/src/components/CTA";
import { getLocale } from "next-intl/server";

export default async function ContactPage() {
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
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">{zh ? "联系我们" : "Contact Us"}</h1>
        <p className="mt-3 text-muted-foreground">{zh ? "欢迎合作与咨询，可通过以下方式与我们取得联系。" : "We welcome collaboration and inquiries via the channels below."}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title={zh ? "电子邮箱" : "Email"} description={zh ? "发送邮件至：contact@example.com" : "Send an email to: contact@example.com"} />
          <Card title={zh ? "微信" : "WeChat"} description={zh ? "添加微信：muxi-studio（示例）" : "Add WeChat: muxi-studio (example)"} />
          <Card title={zh ? "商务合作" : "Business"} description={zh ? "品牌活动与小游戏合作，欢迎详谈。" : "Brand activations and mini-game collaborations welcome."} />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <CTA href={`/${locale}#enterprise`} label={zh ? "了解企业内容" : "Explore Enterprise"} variant="secondary" />
          <CTA href={`/${locale}#works`} label={zh ? "查看作品" : "View Works"} variant="primary" />
        </div>
      </section>
      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}